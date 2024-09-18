"use client";

import Navbar from "@/components/nav/Navbar";
import Introduction from "@/components/sections/Introduction";
import AboutAurora from "@/components/sections/about/about-aurora";
import Footer from "@/components/footer/Footer";
import AboutAuroraDx from "@/components/sections/about/about-aurora-dx";
import { useRef } from "react";
import DownloadAurora from "@/components/sections/download/download";
import FAQ from "@/components/sections/about/faq/faq";
import News from "@/components/sections/news";
import BuildYourOwn from "@/components/sections/build-your-own";


export default function Home() {
  const aboutRef = useRef(null);
  const aboutDXRef = useRef(null);
  const introRef = useRef(null);
  const downloadRef = useRef(null);
  const faqRef = useRef(null);
  const newsRef = useRef(null);
  return (
    <div>
      <Navbar introRef={introRef} endUserRef={aboutRef} developerRef={aboutDXRef} faqRef={faqRef}
              downloadRef={downloadRef} newsRef={newsRef}/>
      <main className="w-full min-h-screen">
        <Introduction introRef={introRef} aboutRef={aboutRef} />
        <AboutAurora aboutRef={aboutRef} aboutDxRef={aboutDXRef} />
        <AboutAuroraDx aboutDxRef={aboutDXRef} />
        <DownloadAurora downloadRef={downloadRef} />
        <FAQ faqRef={faqRef} />
        <News newsRef={newsRef}/>
        <BuildYourOwn/>
        <Footer introRef={introRef} />
      </main>
    </div>
  );
}
