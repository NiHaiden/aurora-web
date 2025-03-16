import { CloudDownload, Package } from "lucide-react";
import { getImageName } from "@/lib/utils/download";
import { useTranslations } from "next-intl";

export default function DownloadComponent({
  hweVersion,
  primaryGPU,
  developerEdition,
}: {
  hweVersion: boolean;
  primaryGPU: string;
  developerEdition: string;
}) {
  const imageName = getImageName(hweVersion, primaryGPU, developerEdition);
  const downloadLink: string = `https://dl.getaurora.dev/${imageName}.iso`;
  const checksumLink: string = `https://dl.getaurora.dev/${imageName}.iso-CHECKSUM`;
  //https://dl.getaurora.dev/aurora-dx-latest.iso
  const t = useTranslations("Download-Component");

  return (
    <>
      <div className={"flex w-full flex-col gap-5"}>
        <a
          href={downloadLink}
          className={
            "flex h-fit w-full flex-row items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-aurora-purple to-aurora-blue p-5 text-[18px] text-white shadow-lg"
          }
        >
          <CloudDownload /> {t("download-iso")} ({imageName})
        </a>
        <a
          href={checksumLink}
          className={
            "flex h-fit w-full flex-row items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aurora-purple to-aurora-blue p-5 text-[18px] text-white shadow-lg"
          }
        >
          <Package /> {t("checksum")}
        </a>
      </div>
    </>
  );
}
