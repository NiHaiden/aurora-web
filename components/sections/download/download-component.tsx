import { CloudDownload, Package } from "lucide-react";
import { getImageName } from "@/lib/utils/download";

export default function DownloadComponent({
                                            baseSystem,
                                            primaryGPU,
                                            developerEdition
                                          }: {
  baseSystem: string;
  primaryGPU: string;
  developerEdition: string;
}) {

  const imageName = getImageName(baseSystem, primaryGPU, developerEdition);
  const downloadLink: string = `https://dl.getaurora.dev/${imageName}.iso`;
  const checksumLink: string = `https://dl.getaurora.dev/${imageName}.iso-CHECKSUM`;
  //https://dl.getaurora.dev/aurora-dx-latest.iso
  return (
    <>
      <div className={"w-full flex flex-col gap-5"}>
        <a href={downloadLink}
           className={"w-full  text-[18px] h-fit flex flex-row justify-center items-center gap-2 p-5 text-white rounded-2xl shadow-lg bg-gradient-to-r from-aurora-purple to-aurora-blue"}>
          <CloudDownload /> Download ISO ({imageName})
        </a>
        <a href={checksumLink}
           className={"w-full text-[18px] h-fit flex flex-row justify-center items-center gap-2 p-5 text-white rounded-xl shadow-lg bg-gradient-to-r from-aurora-purple to-aurora-blue"}>
          <Package /> Get Checksum to verify
        </a>
      </div>
    </>
  );
}
