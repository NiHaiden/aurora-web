"use client";

import Navbar from "@/components/nav/Navbar";
import Introduction from "@/components/Introduction";
import AboutAurora from "@/components/about-aurora";
import Footer from "@/components/footer/Footer";
import AboutAuroraDx from "@/components/about-aurora-dx";
import {useRef} from "react";


export default function Home() {
    const aboutRef = useRef(null);
    return (
        <main className="w-full min-h-screen">
            <Navbar/>
            <Introduction aboutRef={aboutRef}/>
            <AboutAurora aboutRef={aboutRef}/>
            <AboutAuroraDx/>
            <Footer/>
        </main>
    );
}
