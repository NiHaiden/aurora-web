"use client";

import Navbar from "@/components/nav/Navbar";
import Introduction from "@/components/Introduction";
import AboutAurora from "@/components/about-aurora";
import Footer from "@/components/footer/Footer";
import AboutAuroraDx from "@/components/about-aurora-dx";
import {useRef} from "react";
import DownloadAurora from "@/components/download";


export default function Home() {
    const aboutRef = useRef(null);
    const aboutDXRef = useRef(null);
    return (
        <div>
            <Navbar/>
        <main className="w-full min-h-screen">
            <Introduction aboutRef={aboutRef}/>
            <AboutAurora aboutRef={aboutRef} aboutDxRef={aboutDXRef}/>
            <AboutAuroraDx aboutDxRef={aboutDXRef}/>
            <DownloadAurora/>
            <Footer/>
        </main>
        </div>
    );
}
