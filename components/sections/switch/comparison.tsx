"use client";

import { GlowEffect } from "@/components/ui/glow";
import { InView } from "@/components/ui/in-view";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const comparisonPoints = [
  {
    label: "Updates & stability",
    aurora:
      "Image-based upgrades apply atomically with automatic rollbacks, so workstations stay patched without scheduling late-night restarts.",
    windows:
      "Cumulative updates and servicing stacks demand maintenance windows, manual testing, and hope that the next reboot actually succeeds.",
  },
  {
    label: "Developer experience",
    aurora:
      "Brew, container runtimes, GPU tooling, and virtualization ship by default—developers can launch environments in minutes with ujust recipes.",
    windows:
      "Piecing together WSL, Hyper-V, package managers, and drivers wastes hours before code ever runs.",
  },
  {
    label: "Workspace delight",
    aurora:
      "Aurora's tailored KDE Plasma theme, tiling presets, and gestures create a focused workspace without registry hacks or ads.",
    windows:
      "Shell customisation relies on third-party hacks while the OS surfaces nags, promotions, and inconsistent UX patterns.",
  },
  {
    label: "Fleet automation",
    aurora:
      "GitOps-friendly images, reproducible blueprints, and open tooling integrate with your CI/CD to roll out desktops like infrastructure.",
    windows:
      "Group policies, MDT images, and Intune scripts sprawl across portals with drift that's hard to reason about.",
  },
];

export function SwitchComparison() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950 py-28 text-white">
      <GlowEffect
        className="opacity-40"
        colors={["#66B9F2", "#4E67B2", "#EC92A1"]}
        mode="flowHorizontal"
        blur="stronger"
        scale={1.5}
        duration={10}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(102,185,242,0.24),_transparent_70%)]" />
      <div className="container relative z-10 mx-auto flex flex-col gap-12 px-6">
        <InView
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7 }}
          className="space-y-4 text-center md:text-left"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-sky-200">Aurora vs Windows 10</p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Aurora streamlines the parts of Windows 10 that still feel manual.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-300 md:mx-0">
            Explore how Aurora's automated desktop experience compares to the maintenance-heavy Windows 10 stack across the moments your teams feel every day.
          </p>
        </InView>
        <InView
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <ProgressiveBlur
              className="pointer-events-none absolute inset-0"
              direction="top"
              blurLayers={12}
              blurIntensity={0.55}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.4 }}
            />
            <div className="relative space-y-8">
              <div className="grid gap-4 rounded-3xl border border-white/5 bg-white/5 p-6 text-xs uppercase tracking-[0.3em] text-slate-400 md:grid-cols-3">
                <span>Focus</span>
                <span className="text-sky-200">Aurora</span>
                <span className="text-slate-400">Windows 10</span>
              </div>
              <div className="space-y-6">
                {comparisonPoints.map((point) => (
                  <div
                    key={point.label}
                    className="grid gap-5 rounded-3xl border border-white/5 bg-black/20 p-6 text-sm md:grid-cols-[0.9fr_1fr_1fr]"
                  >
                    <div className="font-semibold uppercase tracking-[0.2em] text-slate-300">
                      {point.label}
                    </div>
                    <div className="rounded-2xl border border-aurora-blue/30 bg-aurora-blue/15 p-5 text-sky-100 shadow-inner">
                      {point.aurora}
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300">
                      {point.windows}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
