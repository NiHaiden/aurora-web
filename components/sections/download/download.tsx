import {
  ArrowUpRight,
  Check,
  CloudDownload,
  Code,
  LaptopIcon,
  Monitor,
  Package,
  XIcon,
} from "lucide-react";
import { RefObject, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { getImageName } from "@/lib/utils/download";

export default function DownloadAurora({
                                         downloadRef,
                                       }: {
  downloadRef: RefObject<any>;
}) {
  const [primaryGPU, setPrimaryGPU] = useState("");
  const [developerVersion, setDeveloperVersion] = useState("");
  const [isHWE, setIsHWE] = useState("no");
  const imageName = getImageName(isHWE === "yes", primaryGPU, developerVersion);
  console.log(imageName);
  const t = useTranslations("Download-Component");

  return (
    <div
      ref={downloadRef}
      className="flex min-h-dvh items-center justify-center p-6"
    >
      <div className="w-full max-w-4xl space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-5xl font-bold text-transparent lg:text-7xl">
            Download Aurora
          </h1>
        </div>

        {/* Main Content Card */}
        <div className="rounded-3xl border border-zinc-600 bg-black/20 p-8 backdrop-blur-2xl lg:p-12">
          <div className="space-y-8">
            {/* Hardware Selection Section */}
            <div className="space-y-6">
              <div>
                <h2 className="bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-2xl font-bold text-transparent lg:text-3xl">
                  Hardware Configuration
                </h2>
                <p className="mt-2 text-lg text-zinc-300">
                  Select your primary GPU to get the edition with preinstalled drivers
                </p>
              </div>

              <div className="animate-fade-up space-y-2">
                <p className="text-lg font-medium text-white">
                  {t("primary-gpu")}
                </p>
                <Select onValueChange={setPrimaryGPU}>
                  <SelectTrigger className="h-14 w-full border-zinc-600 bg-zinc-900/50 text-white backdrop-blur-sm transition-colors hover:bg-zinc-900/70">
                    <SelectValue
                      placeholder={
                        <div className="flex items-center gap-2">
                          <Monitor className="h-5 w-5 stroke-zinc-400" />
                          <span className="text-zinc-400">{t("pick-gpu")}</span>
                        </div>
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mesa">Intel / AMD</SelectItem>
                    <SelectItem value="nvidia">
                      Nvidia (RTX-Series/GTX 16xx)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Download Section */}
            <div className="border-t border-zinc-700 pt-8">
              <div className="space-y-6">
                <div>
                  <h3 className="bg-gradient-to-r from-aurora-blue via-aurora-darkblue to-aurora-purple bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
                    Download & Installation
                  </h3>
                  <p className="mt-2 text-zinc-300">
                    Use{" "}
                    <a
                      className="inline-flex items-center gap-1 font-semibold text-aurora-blue underline underline-offset-2 transition-colors hover:text-aurora-lightorange"
                      href="https://fedoraproject.org/workstation/download"
                    >
                      Fedora Image Writer <ArrowUpRight className="h-4 w-4" />
                    </a>{" "}
                    to burn the image to your USB drive.{" "}
                    <span className="font-semibold text-orange-400">
                      Do not use Ventoy, as it's unsupported with our ISO.
                    </span>
                  </p>
                </div>

                {primaryGPU ? (
                  <div className="space-y-6">
                    <DownloadButtons imageName={imageName} isHelium={true} />

                    <div className="space-y-4 rounded-2xl bg-zinc-900/30 p-6">
                      <div className="text-sm text-zinc-300">
                        <span className="font-semibold text-white">Developer Mode:</span>{" "}
                        Run <code className="rounded bg-zinc-800 px-2 py-1 text-aurora-blue">ujust devmode</code> after installation.{" "}
                        <a
                          href="https://docs.getaurora.dev/dx/aurora-dx-intro"
                          className="text-aurora-blue underline underline-offset-2 hover:text-aurora-lightorange"
                        >
                          Learn more
                        </a>
                      </div>

                      <div className="text-sm text-zinc-300">
                        <span className="font-semibold text-white">Rebasing:</span>{" "}
                        Your image name will be{" "}
                        <code className="rounded bg-zinc-800 px-2 py-1 text-aurora-blue">
                          {imageName.replace("-stable", ":stable")}
                        </code>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-aurora-darkblue/20 via-aurora-orangina/20 to-aurora-purple/20 border border-gray-700/30 p-4">
                      <div className="text-sm text-zinc-300">
                        <span className="font-semibold text-white">Slow download?</span> Check out our friends at{" "}
                        <a
                          className="inline-flex items-center gap-1 font-semibold text-aurora-blue underline underline-offset-2 transition-colors hover:text-aurora-lightorange"
                          href="https://fedoraproject.org/workstation/download"
                        >
                          Fosstorrents
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-zinc-600 p-12 text-center">
                    <div className="space-y-2">
                      <Monitor className="mx-auto h-12 w-12 text-zinc-400" />
                      <p className="text-lg text-zinc-400">
                        Please select your hardware configuration above
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DownloadButtons({
                           imageName,
                           isHelium,
                           isx86 = true,
                         }: {
  imageName: string;
  isHelium: boolean;
  isx86?: boolean;
}) {
  const downloadLink: string = `https://dl.getaurora.dev/${imageName}-x86_64.iso`;
  const checksumLink: string = `https://dl.getaurora.dev/${imageName}-x86_64.iso-CHECKSUM`;
  const t = useTranslations("Download-Component");

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <a
        href={downloadLink}
        className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-aurora-darkblue to-aurora-purple  border-gray-200 text-white shadow-lg transition-all duration-200 hover:shadow-lg hover:shadow-aurora-darkblue/50 hover:scale-[1.02]"
      >
        <CloudDownload className="h-5 w-5 transition-transform group-hover:scale-110" />
        <div className="text-center">
          <div className="font-semibold">{t("download-iso")}</div>
          <div className="text-sm text-white/80">({imageName})</div>
        </div>
      </a>

      <a
        href={checksumLink}
        className="group flex items-center justify-center gap-3 rounded-2xl border border-zinc-600 bg-zinc-900/30 p-6 text-white shadow-lg transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-900/50 hover:shadow-lg hover:shadow-aurora-darkblue/50 hover:scale-[1.02]"
      >
        <Package className="h-5 w-5 transition-transform group-hover:scale-110" />
        <div className="text-center">
          <div className="font-semibold">{t("checksum")}</div>
          <div className="text-sm text-zinc-400">(SHA256)</div>
        </div>
      </a>
    </div>
  );
}