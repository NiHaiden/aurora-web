"use client";

import { BorderTrail } from "@/components/ui/border-trail";
import { GlowEffect } from "@/components/ui/glow";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
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
        colors={["#66B9F2", "#4E67B2", "#EC92A1", "#0f172a"]}
        mode="flowHorizontal"
        blur="strong"
        scale={1.3}
        duration={9}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(102,185,242,0.28),_transparent_65%)]" />
      <div className="container relative z-10 mx-auto flex flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <div className="w-full max-w-2xl space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-sky-200"
          >
            <Sparkles className="h-4 w-4 text-sky-300" />
            A calmer orbit for your desktop
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Switch from Windows 10 to
            <span className="block bg-gradient-to-r from-aurora-blue via-aurora-lightorange to-aurora-purple bg-clip-text text-transparent">
              Aurora
            </span>
            and enjoy a workstation that stays modern on its own.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-xl text-lg text-slate-300"
          >
            Aurora blends atomic Fedora foundations, curated tooling, and thoughtful defaults so updates, drivers, and
            developer workflows take care of themselves. Leave manual patching and creeping cruft behind for a reliable, KDE
            powered experience that feels bespoke out of the box.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/get"
              className="group relative inline-flex min-w-[220px] items-center justify-center overflow-hidden rounded-2xl border border-aurora-blue/50 bg-aurora-blue/20 px-6 py-3 text-lg font-medium text-sky-100 backdrop-blur transition hover:border-aurora-lightorange/60 hover:text-white"
            >
              <BorderTrail size={140} className="bg-aurora-lightorange/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative flex items-center">
                Download Aurora
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <button
              onClick={onExploreClick}
              className="relative inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-lg font-medium text-slate-200 backdrop-blur transition hover:border-white/30 hover:text-white"
            >
              Explore the highlights
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative w-full max-w-lg rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <BorderTrail size={180} className="bg-aurora-lightorange/40" />
          <GlowEffect
            className="opacity-40"
            colors={["#66B9F2", "#EC92A1", "#0f172a"]}
            mode="pulse"
            blur="strong"
            scale={1.05}
            duration={8}
          />
          <div className="relative space-y-6">
            <h2 className="text-2xl font-semibold text-white">What arrives with Aurora</h2>
            <ul className="space-y-4 text-base text-slate-200">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-aurora-blue" />
                Atomic updates with automatic rollbacks so maintenance windows disappear.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-aurora-lightorange" />
                A curated developer stack—Brew, containers, virtualisation—ready on day one.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-aurora-purple" />
                The refined Aurora Plasma experience with sensible defaults and hardware support built in.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
