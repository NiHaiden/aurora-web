"use client";

import { GlowEffect } from "@/components/ui/glow";
import { InView } from "@/components/ui/in-view";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const comparisonPoints = [
  {
    label: "Compatibility",
    windows:
      "Trusted support for Adobe CC, Autodesk, SAP, and thousands of vendor-certified peripherals with automatic driver updates.",
    aurora:
      "Relies on community fixes, Flatpaks, or compatibility layers that add friction for regulated workflows.",
  },
  {
    label: "Management",
    windows:
      "Deep integration with Microsoft Endpoint Manager, Azure Active Directory, and granular group policy controls.",
    aurora:
      "Manual configuration and custom tooling make fleet governance harder for large organisations.",
  },
  {
    label: "Security",
    windows:
      "Built-in BitLocker, Windows Hello biometrics, and Defender ATP to satisfy enterprise compliance requirements.",
    aurora:
      "Depends on third-party hardening and lacks unified dashboards favoured by security teams.",
  },
  {
    label: "Productivity",
    windows:
      "Optimised for Microsoft 365, Teams Rooms, and hybrid meetings with first-party hardware and software synergy.",
    aurora:
      "Alternative app stacks demand retraining and slow collaboration with Windows-based partners.",
  },
];

export function SwitchComparison() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950 py-28 text-white">
      <GlowEffect
        className="opacity-40"
        colors={["#0284c7", "#0ea5e9", "#0f172a"]}
        mode="flowHorizontal"
        blur="stronger"
        scale={1.5}
        duration={10}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(12,74,110,0.28),_transparent_70%)]" />
      <div className="container relative z-10 mx-auto flex flex-col gap-12 px-6">
        <InView
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7 }}
          className="space-y-4 text-center md:text-left"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-sky-200">Aurora vs Windows 10</p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            The Windows 10 stack accelerates delivery while minimising support calls.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-300 md:mx-0">
            Compare your daily workflow and see how Windows 10 keeps compatibility, manageability, and security aligned with the
            expectations of enterprise environments.
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
                <span className="text-sky-200">Windows 10</span>
                <span className="text-slate-400">Aurora</span>
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
                    <div className="rounded-2xl border border-sky-500/20 bg-sky-500/10 p-5 text-sky-100 shadow-inner">
                      {point.windows}
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300">
                      {point.aurora}
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
