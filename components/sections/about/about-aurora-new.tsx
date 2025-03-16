import Contributors from "@/components/sections/contributors";
import ParadigmShift from "@/components/sections/about/paradigm-shift";
import AboutDocs from "@/components/sections/about/docs";
import YourNewDesktop from "@/components/sections/about/your-new-desktop";
import ForYou from "@/components/sections/about/for-you";
import ForDevelopers from "@/components/sections/about/for-developers";
import News from "@/components/sections/news";
import {RefObject, useRef} from "react";
import DownloadAurora from "@/components/sections/download/download";

export default function AboutAuroraNew({aboutRef}: {aboutRef: RefObject<HTMLDivElement>}) {
  return (
    <main  className={"min-h-dvh bg-zinc-950 p-10 text-white"}>
      <div ref={aboutRef} className={"flex flex-row gap-10"}>
        <div className="flex w-full flex-col items-center justify-center gap-44">
          <YourNewDesktop />
          <ParadigmShift />
          <ForYou/>
          <ForDevelopers/>
          <Contributors />
          <AboutDocs />
          <News newsRef={useRef(null)} />
          <DownloadAurora/>
        </div>
      </div>
    </main>
  );
}