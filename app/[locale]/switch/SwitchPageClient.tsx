"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import {
  SwitchCTA,
  SwitchComparison,
  SwitchHero,
  SwitchReasons,
} from "@/components/sections/switch";
import { useRef } from "react";

export default function SwitchPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const reasonsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const handleExplore = () => {
    reasonsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-gray-950 text-white">
      <Navbar introRef={heroRef} newsRef={reasonsRef} downloadRef={ctaRef} />
      <main className="flex min-h-[100dvh] flex-col gap-0 pt-32 lg:pt-36">
        <SwitchHero heroRef={heroRef} onExploreClick={handleExplore} />
        <SwitchReasons reasonsRef={reasonsRef} />
        <SwitchComparison />
        <SwitchCTA ctaRef={ctaRef} />
      </main>
      <Footer introRef={heroRef} />
    </div>
  );
}
