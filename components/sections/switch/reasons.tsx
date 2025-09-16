"use client";

import { BorderTrail } from "@/components/ui/border-trail";
import { GlowEffect } from "@/components/ui/glow";
import { InView } from "@/components/ui/in-view";
import { Code, LifeBuoy, Palette, RefreshCcw } from "lucide-react";
import { RefObject } from "react";

interface SwitchReasonsProps {
  reasonsRef: RefObject<HTMLDivElement>;
}

const reasons = [
  {
    title: "Updates you can forget about",
    description:
      "Aurora ships atomic, image-based upgrades with automatic rollbacks so your fleet stays patched without the weekend reboots.",
    icon: RefreshCcw,
    accent: "from-aurora-blue/60 to-aurora-darkblue/40",
  },
  {
    title: "Developer muscle built-in",
    description:
      "Containers, Brew, virtualization, and GPU tooling are prepped from the first boot so engineers can ship faster than on stock Windows installs.",
    icon: Code,
    accent: "from-aurora-lightorange/50 to-aurora-purple/40",
  },
  {
    title: "Delightful Plasma experience",
    description:
      "A curated KDE setup with Aurora's design system delivers a fluid, customisable desktop without registry hacks or third-party theming.",
    icon: Palette,
    accent: "from-aurora-blue/50 to-aurora-lightorange/40",
  },
  {
    title: "Community and enterprise ready",
    description:
      "Opinionated docs, automation hooks, and a welcoming community make migrations smoother than wrangling Windows group policies.",
    icon: LifeBuoy,
    accent: "from-aurora-purple/50 to-aurora-blue/40",
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
        colors={["#66B9F2", "#EC92A1", "#0f172a"]}
        mode="colorShift"
        blur="stronger"
        scale={1.4}
        duration={12}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(78,103,178,0.32),_transparent_65%)]" />
      <div className="container relative z-10 mx-auto flex flex-col gap-14 px-6">
        <InView
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7 }}
          className="space-y-4 text-center md:text-left"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-sky-200">Why Windows users switch</p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Aurora automates the maintenance Windows 10 keeps handing back to you.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-300 md:mx-0">
            From updates and drivers to developer tooling, Aurora gives modern teams breathing room so they can build instead of babysit workstations.
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
