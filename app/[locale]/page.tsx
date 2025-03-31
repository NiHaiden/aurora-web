"use client";

import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/sections/hero";
import Footer from "@/components/footer/Footer";
import React, { useRef } from "react";
import AboutAuroraNew from "@/components/sections/about/about-aurora-new";

export default function Home() {
  const aboutRef = React.createRef<HTMLDivElement>();
  const aboutDXRef = useRef(null);
  const introRef = useRef(null);
  const downloadRef = React.createRef<HTMLDivElement>();
  const faqRef = useRef(null);
  const newsRef = useRef(null);
  return (
    <div>
      <Navbar introRef={introRef} newsRef={newsRef} downloadRef={downloadRef} />
      <main className="min-h-[100dvh]">
        <Hero introRef={introRef} aboutRef={aboutRef} />
        <AboutAuroraNew aboutRef={aboutRef} downloadRef={downloadRef} newsRef={newsRef} />
        <Footer introRef={introRef} />
      </main>
    </div>
  );
}


/*
  <AboutAurora aboutRef={aboutRef} aboutDxRef={aboutDXRef} />
        <AboutAuroraDx aboutDxRef={aboutDXRef} />
        <DownloadAurora downloadRef={downloadRef} />
        <FAQ faqRef={faqRef} />
        <News newsRef={newsRef} />
        <BuildYourOwn />
 */
