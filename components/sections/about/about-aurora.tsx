"use client";
import { CloudDownload, ComputerIcon, Gauge, SparklesIcon } from "lucide-react";
import React, { RefObject, useRef } from "react";
import { useIsVisible } from "@/lib/utils/scroll";

export default function AboutAurora({
  aboutRef,
  aboutDxRef,
}: {
  aboutRef: RefObject<any>;
  aboutDxRef: RefObject<any>;
}) {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);

  return (
    <div
      ref={aboutRef}
      className={"flex min-h-fit w-full flex-col items-center justify-center"}
    >
      <div className={"mb-32 mt-32 flex h-full w-3/4 flex-col gap-5"}>
        <h1
          className={
            "bg-gradient-to-br from-aurora-blue to-aurora-purple bg-clip-text text-6xl font-bold text-transparent drop-shadow-lg lg:text-7xl"
          }
        >
          Aurora for end-users
        </h1>
        <p className={"text-xl"}>
          Aurora is the image for people who want a reliable, safe and smooth
          computing experience for everyday tasks and beyond. The OS for
          everyone, including those hobby stargazers.
        </p>
        <section
          className={
            "grid w-full grid-cols-1 grid-rows-4 gap-5 lg:grid-cols-2 lg:grid-rows-1"
          }
        >
          <div
            ref={ref1}
            className={`flex w-full flex-col items-center justify-center gap-2 rounded-2xl border p-8 text-left shadow-md animate-delay-0 ${isVisible1 ? "animate-fade-up" : "animate-fade-down"}`}
          >
            <SparklesIcon className={"h-14 w-14 stroke-aurora-darkblue"} />
            <h1
              className={
                "bg-gradient-to-br from-aurora-blue to-aurora-purple bg-clip-text text-center text-2xl font-bold text-transparent"
              }
            >
              Simply delightful.
            </h1>
            <p className={"text-xl"}>
              Aurora features a lightly customized KDE Plasma for a super smooth
              and delightful desktop experience that can be customized
              indefinitely. <br />
              <span
                className={
                  "bg-gradient-to-r from-aurora-purple to-aurora-darkblue bg-clip-text font-bold text-transparent"
                }
              >
                You can even move the taskbar.
              </span>
            </p>
          </div>
          <div
            ref={ref2}
            className={`flex w-full flex-col items-center justify-center gap-2 rounded-2xl border p-8 text-left shadow-md animate-delay-0 ${isVisible2 ? "animate-fade-up" : "animate-fade-down"}`}
          >
            <Gauge className={"h-14 w-14 stroke-aurora-darkblue"} />
            <h1
              className={
                "bg-gradient-to-br from-aurora-blue to-aurora-purple bg-clip-text text-center text-2xl font-bold text-transparent"
              }
            >
              Speed and Reliability
            </h1>
            <p className={"text-xl"}>
              Perfectly tuned and optimized, for maximum efficiency and
              reliability like a 100 year old machine. <br />
              <span
                className={
                  "bg-gradient-to-r from-aurora-purple to-aurora-darkblue bg-clip-text font-bold text-transparent"
                }
              >
                Your computer will never feel the same again.
              </span>
            </p>
          </div>
          <div
            ref={ref3}
            className={`flex w-full flex-col items-center justify-center gap-2 rounded-2xl border p-8 text-left shadow-md animate-delay-0 animate-once animate-ease-in-out ${isVisible3 ? "animate-fade-up" : "animate-fade-down"}`}
          >
            <CloudDownload className={"h-14 w-14 stroke-aurora-darkblue"} />
            <h1
              className={
                "bg-gradient-to-br from-aurora-blue to-aurora-purple bg-clip-text text-2xl font-bold text-transparent"
              }
            >
              Zero Maintenance
            </h1>
            <p className={"text-xl"}>
              The system only has to be installed{" "}
              <span className={"font-bold"}>once</span>. Updates of your apps
              and the system is handled in the background for you.
              <br />
              <span
                className={
                  "bg-gradient-to-r from-aurora-purple to-aurora-darkblue bg-clip-text text-left font-bold text-transparent"
                }
              >
                Set and forget, like a dream.
              </span>
            </p>
          </div>

          <div
            ref={ref4}
            className={`flex w-full flex-col items-center justify-center gap-2 rounded-2xl border p-8 text-left shadow-md animate-delay-0 ${isVisible4 ? "animate-fade-up" : "animate-fade-down"}`}
          >
            <ComputerIcon className={"h-14 w-14 stroke-aurora-darkblue"} />
            <h1
              className={
                "bg-gradient-to-br from-aurora-blue to-aurora-purple bg-clip-text text-2xl font-bold text-transparent"
              }
            >
              Hardware Support
            </h1>
            <p className={"text-xl"}>
              We have individual editions for Surface and ASUS users and all
              include expanded hardware support for game controllers, printer
              hardware and much more. <br />
              <span
                className={
                  "bg-gradient-to-r from-aurora-purple to-aurora-darkblue bg-clip-text font-bold text-transparent"
                }
              >
                Don't forget to print the starship bills.
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
