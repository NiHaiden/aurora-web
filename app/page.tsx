"use client";

import Navbar from "@/components/nav/Navbar";
import Introduction from "@/components/sections/Introduction";
import AboutAurora from "@/components/sections/about/about-aurora";
import Footer from "@/components/footer/Footer";
import AboutAuroraDx from "@/components/sections/about/about-aurora-dx";
import {useRef} from "react";
import DownloadAurora from "@/components/sections/download/download";


export default function Home() {
    const aboutRef = useRef(null);
    const aboutDXRef = useRef(null);
    const introRef = useRef(null);
    return (
        <div>
            <Navbar/>
        <main className="w-full min-h-screen">
            <Introduction introRef={introRef} aboutRef={aboutRef}/>
            <AboutAurora aboutRef={aboutRef} aboutDxRef={aboutDXRef}/>
            <AboutAuroraDx aboutDxRef={aboutDXRef}/>
            <DownloadAurora/>
            <Footer introRef={introRef}/>
        </main>
        </div>
    );
}
