"use client";

import { BorderTrail } from "@/components/ui/border-trail";
import { GlowEffect } from "@/components/ui/glow";
import { InView } from "@/components/ui/in-view";
import {
  BriefcaseBusiness,
  Cpu,
  Gamepad2,
  ShieldCheck,
} from "lucide-react";
import { RefObject } from "react";

interface SwitchReasonsProps {
  reasonsRef: RefObject<HTMLDivElement>;
}

const reasons = [
  {
    title: "Enterprise-ready compatibility",
    description:
      "Run specialised business software, compliance agents, and hardware drivers without a second thought.",
    icon: BriefcaseBusiness,
    accent: "from-sky-500/60 to-blue-400/40",
  },
  {
    title: "Performance tuned for creativity",
    description:
      "Optimised GPU pipelines, Studio drivers, and colour-managed workflows keep designers and editors in sync.",
    icon: Cpu,
    accent: "from-emerald-500/50 to-teal-400/40",
  },
  {
    title: "Gaming ecosystem unlocked",
    description:
      "DirectX 12 Ultimate, Game Bar integrations, and Xbox services deliver the best PC gaming catalogue available.",
    icon: Gamepad2,
    accent: "from-purple-500/50 to-indigo-400/40",
  },
  {
    title: "Security teams sleep better",
    description:
      "BitLocker, Windows Hello, and Microsoft Defender provide layered protection aligned with enterprise policies.",
    icon: ShieldCheck,
    accent: "from-amber-500/50 to-orange-400/40",
  },
];

export function SwitchReasons({ reasonsRef }: SwitchReasonsProps) {
  return (
    <section
      ref={reasonsRef}
      className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 py-28 text-white"
    >
      <GlowEffect
        className="opacity-40"
        colors={["#1d4ed8", "#0284c7", "#0f172a"]}
        mode="colorShift"
        blur="stronger"
        scale={1.4}
        duration={12}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,116,144,0.35),_transparent_65%)]" />
      <div className="container relative z-10 mx-auto flex flex-col gap-14 px-6">
        <InView
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7 }}
          className="space-y-4 text-center md:text-left"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-sky-200">Why professionals switch</p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Windows 10 keeps teams connected, supported, and ready for mission-critical work.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-300 md:mx-0">
            When deadlines rely on predictable tooling and security certifications, Windows 10 steps in with a proven platform
            backed by Microsoft&apos;s global ecosystem.
          </p>
        </InView>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <InView
                key={reason.title}
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                  <BorderTrail
                    size={120}
                    className="bg-sky-300/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div
                    className={`pointer-events-none absolute -inset-10 rounded-[inherit] bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-70 ${reason.accent}`}
                  />
                  <GlowEffect
                    className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
                    colors={["#38bdf8", "#0ea5e9", "#0f172a"]}
                    mode="breathe"
                    blur="strong"
                    scale={1.2}
                    duration={7}
                  />
                  <div className="relative flex h-full flex-col gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sky-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                    <p className="text-sm text-slate-300">{reason.description}</p>
                  </div>
                </div>
              </InView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
