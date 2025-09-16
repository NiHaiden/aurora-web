"use client";

import { BorderTrail } from "@/components/ui/border-trail";
import { GlowEffect } from "@/components/ui/glow";
import { motion } from "motion/react";
import { ArrowRight, Headphones } from "lucide-react";
import { RefObject } from "react";

interface SwitchCtaProps {
  ctaRef: RefObject<HTMLDivElement>;
}

export function SwitchCTA({ ctaRef }: SwitchCtaProps) {
  return (
    <section
      ref={ctaRef}
      className="relative overflow-hidden bg-gray-950 py-24 text-white"
    >
      <GlowEffect
        className="opacity-50"
        colors={["#38bdf8", "#0ea5e9", "#0f172a"]}
        mode="breathe"
        blur="stronger"
        scale={1.3}
        duration={9}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.35),_transparent_70%)]" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-sky-900/60 via-gray-950 to-gray-900 p-10 text-center md:p-16">
          <BorderTrail size={220} className="bg-sky-300/40" />
          <GlowEffect
            className="opacity-40"
            colors={["#38bdf8", "#22d3ee", "#0f172a"]}
            mode="pulse"
            blur="strong"
            scale={1.1}
            duration={7}
          />
          <div className="relative space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-sky-200"
            >
              <Headphones className="h-4 w-4" />
              We&apos;ll guide every step
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-3xl font-semibold md:text-4xl"
            >
              Ready to make Windows 10 your default workspace?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mx-auto max-w-2xl text-base text-slate-300"
            >
              Our migration specialists can help you blueprint a flawless rollout, map your app stack, and ensure every device is
              Windows 10 ready before launch day.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6"
            >
              <a
                href="https://www.microsoft.com/windows/business"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex min-w-[220px] items-center justify-center overflow-hidden rounded-2xl border border-sky-400/50 bg-sky-500/20 px-6 py-3 text-lg font-medium text-sky-100 backdrop-blur transition hover:border-sky-300 hover:text-white"
              >
                <BorderTrail size={160} className="bg-sky-300/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative flex items-center">
                  Plan your migration
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <a
                href="https://support.microsoft.com/contactus"
                target="_blank"
                rel="noreferrer"
                className="relative inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-lg font-medium text-slate-100 backdrop-blur transition hover:border-white/30 hover:text-white"
              >
                Talk to support
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
