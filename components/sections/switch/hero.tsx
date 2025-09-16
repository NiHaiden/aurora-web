"use client";

import { BorderTrail } from "@/components/ui/border-trail";
import { GlowEffect } from "@/components/ui/glow";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { RefObject } from "react";

interface SwitchHeroProps {
  heroRef: RefObject<HTMLDivElement>;
  onExploreClick: () => void;
}

export function SwitchHero({ heroRef, onExploreClick }: SwitchHeroProps) {
  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-gray-950 py-24 text-white"
    >
      <GlowEffect
        className="opacity-80"
        colors={["#0a84ff", "#4b9fff", "#0b6cf5", "#0f172a"]}
        mode="flowHorizontal"
        blur="strong"
        scale={1.3}
        duration={9}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,118,255,0.35),_transparent_65%)]" />
      <div className="container relative z-10 mx-auto flex flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <div className="w-full max-w-2xl space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-sky-200"
          >
            <Sparkles className="h-4 w-4 text-sky-300" />
            Future-ready productivity
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Switch from Aurora to
            <span className="block bg-gradient-to-r from-sky-400 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
              Windows 10
            </span>
            and unlock the familiar experience you miss.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-xl text-lg text-slate-300"
          >
            Enjoy seamless compatibility with legacy tools, industry-leading support, and a polished interface fine-tuned for
            enterprise workflows. Windows 10 brings your favourite productivity suite, device management, and gaming ecosystem
            together in one streamlined desktop.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="https://www.microsoft.com/en-us/software-download/windows10"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex min-w-[220px] items-center justify-center overflow-hidden rounded-2xl border border-sky-400/60 bg-sky-500/20 px-6 py-3 text-lg font-medium text-sky-100 backdrop-blur transition hover:border-sky-300 hover:text-white"
            >
              <BorderTrail size={140} className="bg-sky-300/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative flex items-center">
                Get Windows 10 now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <button
              onClick={onExploreClick}
              className="relative inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-lg font-medium text-slate-200 backdrop-blur transition hover:border-white/30 hover:text-white"
            >
              Discover the advantages
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative w-full max-w-lg rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <BorderTrail size={180} className="bg-sky-300/40" />
          <GlowEffect
            className="opacity-40"
            colors={["#38bdf8", "#0ea5e9", "#0f172a"]}
            mode="pulse"
            blur="strong"
            scale={1.05}
            duration={8}
          />
          <div className="relative space-y-6">
            <h2 className="text-2xl font-semibold text-white">What you gain instantly</h2>
            <ul className="space-y-4 text-base text-slate-200">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
                Full Microsoft 365 integration with Teams, Outlook, and OneDrive.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Enterprise-grade security controls and compliance tooling ready from day one.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400" />
                Driver support for the widest range of creative and professional peripherals.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
