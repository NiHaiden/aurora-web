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
    <div ref={downloadRef} className={"flex items-center justify-center gap-5"}>
      <div className="flex flex-col items-center justify-center gap-5">
        <div
          className={"flex w-full max-w-screen-2xl items-center justify-center"}
        >
          <div className={"inline-flex items-center gap-10"}>
            <h1
              className={
                "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-5xl font-bold text-transparent lg:text-7xl"
              }
            >
              Download Aurora
            </h1>
          </div>
        </div>
        <div
          className={
            "flex w-full max-w-screen-2xl flex-col gap-5 rounded-3xl border border-zinc-600 p-5 backdrop-blur-2xl lg:w-full lg:p-14"
          }
        >
          <div className={"text-lg text-white lg:text-2xl"}>
            Please fill in the options to get the edition that best suits you.
            Decide wherether you want to include developer tooling on your
            installed system or not.
          </div>
          <div className={"w-full"}>
            <div
              className={
                "grid h-full w-full grid-cols-1 grid-rows-3 items-start justify-start gap-5 lg:grid-cols-3 lg:grid-rows-1"
              }
            >
              <div className={"animate-fade-up"}>
                <p className={"text-xl text-white lg:text-3xl"}>
                  {t("primary-gpu")}
                </p>
                <Select
                  onValueChange={(e) => {
                    setPrimaryGPU(e);
                  }}
                >
                  <SelectTrigger className="h-[60px] w-full border-zinc-600 bg-transparent text-lg text-white">
                    <SelectValue
                      placeholder={
                        <div
                          className={
                            "flex flex-row items-center justify-center gap-2"
                          }
                        >
                          <Monitor className={"stroke-white"} />
                          {t("pick-gpu")}
                        </div>
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mesa">Intel / AMD </SelectItem>
                    <SelectItem value="nvidia">
                      Nvidia (RTX-Series/GTX 16xx)
                    </SelectItem>
                    <SelectItem value="nvidia-legacy">
                      Nvidia Legacy (9xx-10xx Series)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className={"animate-fade-up"}>
                <p className={"text-xl text-white lg:text-3xl"}>
                  {t("developer-version")}
                </p>
                <Select
                  onValueChange={(e) => {
                    setDeveloperVersion(e);
                  }}
                >
                  <SelectTrigger className="h-[60px] w-full border-zinc-600 bg-transparent text-lg text-white">
                    <SelectValue
                      placeholder={
                        <div
                          className={
                            "flex flex-row items-center justify-center gap-2"
                          }
                        >
                          <Code className={"stroke-white"} />
                          {t("are-you-dev")}
                        </div>
                      }
                    >
                      <span
                        className={
                          "flex flex-row items-center gap-5 capitalize"
                        }
                      >
                        {developerVersion === "yes" ? <Check /> : <XIcon />}
                        {developerVersion}
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">{t("yes-option")}</SelectItem>
                    <SelectItem value="no">{t("no-option")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <div className={"animate-fade-up"}>
                  <p className={"text-xl text-white lg:text-3xl"}>
                    {"Surface / ASUS Device"}
                  </p>
                  <Select
                    onValueChange={(e) => {
                      setIsHWE(e);
                    }}
                  >
                    <SelectTrigger className="h-[60px] w-full border-zinc-600 bg-transparent text-lg text-white">
                      <SelectValue
                        placeholder={
                          <div
                            className={
                              "flex flex-row items-center justify-center gap-2"
                            }
                          >
                            <LaptopIcon className={"stroke-white"} />
                            {t("hwe-version")}
                          </div>
                        }
                      >
                        <span
                          className={
                            "flex flex-row items-center gap-5 capitalize"
                          }
                        >
                          {isHWE === "yes" ? <Check /> : <XIcon />}
                          {isHWE}
                        </span>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">{t("yes-option")}</SelectItem>
                      <SelectItem value="no">{t("no-option")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "grid w-full max-w-screen-2xl grid-cols-1 gap-5 text-white lg:w-full lg:grid-cols-1"
          }
        >
          <div
            className={
              "flex w-full flex-col justify-between gap-3 rounded-3xl border border-zinc-600 p-4 px-6 py-6 backdrop-blur-2xl"
            }
          >
            <h1
              className={
                "bg-gradient-to-r from-aurora-blue via-aurora-darkblue to-aurora-purple bg-clip-text text-3xl font-bold text-transparent"
              }
            >
              Aurora
            </h1>
            <p className={"text-xl"}>
              Download the ultimate productivity workstation right here. Use{" "}
              <a
                className={
                  "inline-flex items-center gap-1 font-bold underline underline-offset-2"
                }
                href={"https://fedoraproject.org/workstation/download"}
              >
                Fedora Image Writer <ArrowUpRight />
              </a>{" "}
              to burn the image to your machine.
            </p>
            <div>
              {primaryGPU ?  
              <DownloadButtons imageName={imageName} isHelium={true} />
              : <div>Please select your hardware.</div>
}
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
}: {
  imageName: string;
  isHelium: boolean;
}) {
  const downloadLink: string = `https://dl.getaurora.dev/${imageName}.iso`;
  const checksumLink: string = `https://dl.getaurora.dev/${imageName}.iso-CHECKSUM`;
  const t = useTranslations("Download-Component");
  return (
    <div className={"flex w-full flex-col gap-3 lg:flex-row"}>
      <a
        href={downloadLink}
        className={
          "flex h-fit w-full flex-row items-center justify-center gap-2 rounded-2xl border border-zinc-600 p-5 text-[18px] text-white shadow-lg"
        }
      >
        <CloudDownload /> {t("download-iso")} ({imageName})
      </a>
      <a
        href={checksumLink}
        className={
          "flex h-fit w-full flex-row items-center justify-center gap-2 rounded-2xl border border-zinc-600 p-5 text-[18px] text-white shadow-lg"
        }
      >
        <Package /> {t("checksum")}
      </a>
    </div>
  );
}
