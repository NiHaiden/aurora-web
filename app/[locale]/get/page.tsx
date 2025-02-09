"use client";

import {
  Check,
  CloudDownload,
  Code,
  DownloadIcon,
  LaptopIcon,
  Monitor,
  Package,
  XIcon,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/nav/Navbar";

export default function GetAurora() {
  const [primaryGPU, setPrimaryGPU] = useState("");
  const [developerVersion, setDeveloperVersion] = useState("");
  const [isHWE, setIsHWE] = useState("no");
  const t = useTranslations("Download-Component");
  return (
    <div
      className={
        "bgimg min-w-dvw flex min-h-dvh items-center justify-center gap-5 p-5"
      }
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <div
          className={"flex w-full max-w-screen-2xl items-start justify-start"}
        >
          <div className={"inline-flex items-center gap-10"}>
            <DownloadIcon className={"h-24 w-24 stroke-aurora-orangina"} />
            <h1
              className={
                "bg-gradient-to-r from-aurora-orangina via-aurora-lightorange to-aurora-blue bg-clip-text text-center text-3xl font-bold text-transparent lg:text-7xl"
              }
            >
              Download Aurora
            </h1>
          </div>
        </div>
        <div
          className={
            "w-full flex flex-col gap-5 max-w-screen-2xl rounded-3xl border border-zinc-600 backdrop-blur-2xl lg:w-full p-5 lg:p-14"
          }
        >
          <div className={"text-white text-2xl"}>
            Please fill in the options to get the edition that best suits you. Decide wherether you want to include developer tooling on your installed system or not.
          </div>
          <div className={"w-full "}>
            <div
              className={
                "grid h-full w-full grid-cols-1 grid-rows-3 items-start justify-start gap-5 lg:grid-cols-3 lg:grid-rows-1"
              }
            >
              <div className={"animate-fade-up"}>
                <p className={"text-3xl text-white"}>{t("primary-gpu")}</p>
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
                  <p className={"text-3xl text-white"}>
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
                      ><span className={"flex flex-row items-center gap-5 capitalize"}>{isHWE === "yes" ? <Check/> : <XIcon/>}{isHWE}</span></SelectValue>
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
            "grid w-full max-w-screen-2xl grid-cols-1 gap-5 text-white lg:w-full lg:grid-cols-2"
          }
        >
          <div
            className={
              "flex w-full flex-col gap-3 rounded-3xl border border-zinc-600 p-4 px-6 py-6 backdrop-blur-2xl"
            }
          >
            <h1
              className={
                "bg-gradient-to-r from-aurora-blue via-aurora-darkblue to-aurora-purple bg-clip-text text-3xl font-bold text-transparent"
              }
            >
              Aurora Helium (LTS) Edition
            </h1>
            <p>
              Derived a CentOS Stream Base, this is the ideal image for people
              who need a reliable day-to-day computing experience and don't need
              the latest and greatest kernel.
            </p>
            <div>
              <DownloadButtons imageName={"Aurora-Helium"} isHelium={true} />
            </div>
          </div>
          <div
            className={
              "flex w-full flex-col gap-3 rounded-3xl border border-zinc-600 p-4 px-6 py-6 backdrop-blur-2xl"
            }
          >
            <h1
              className={
                "bg-gradient-to-r from-aurora-blue via-aurora-darkblue to-aurora-purple bg-clip-text text-3xl font-bold text-transparent"
              }
            >
              Aurora Starship
            </h1>
            <p>
              For the people who have modern hardware and want a modern Fedora
              based OS.
            </p>
            <div>
              <DownloadButtons imageName={"aurora"} isHelium={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DownloadCard() {
  return (
    <div
      className={
        "w-full max-w-screen-2xl rounded-3xl border border-zinc-600 backdrop-blur-2xl"
      }
    ></div>
  );
}

function DownloadButtons({
  imageName,
  isHelium,
}: {
  imageName: string;
  isHelium: boolean;
}) {
  const downloadLink = "";
  const checksumLink = "";
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

/*
* <div className={"flex flex-col gap-2"}>
              {developerVersion !== "" && (
                <div
                  className={
                    "flex w-full animate-fade-up flex-col gap-2 rounded-3xl"
                  }
                >
                  <h1
                    className={
                      "bg-gradient-to-tr from-aurora-lightorange via-aurora-darkblue to-aurora-purple bg-clip-text text-3xl font-bold text-transparent"
                    }
                  >
                    {t("grab-iso")}
                  </h1>
                  <DownloadComponent
                    hweVersion={isHWE}
                    primaryGPU={primaryGPU}
                    developerEdition={developerVersion}
                  />
                  <CheckDocs />
                </div>
              )}
            </div>*/
