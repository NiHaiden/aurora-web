"use client";
import { CloudDownload, ComputerIcon, Gauge, SparklesIcon } from "lucide-react";
import React, { RefObject, useRef } from "react";
import { useIsVisible } from "@/lib/utils/scroll";

export default function AboutAurora({ aboutRef, aboutDxRef }: {
  aboutRef: RefObject<any>;
  aboutDxRef: RefObject<any>
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
    <div ref={aboutRef} className={"min-h-fit w-full flex items-center justify-center flex-col"}>
      <div className={"w-3/4 h-full flex flex-col gap-5 mb-32 mt-32"}>
        <h1
          className={"text-6xl lg:text-7xl font-bold bg-gradient-to-br from-aurora-blue to-aurora-purple text-transparent bg-clip-text drop-shadow-lg"}>Aurora
          for end-users</h1>
        <p className={"text-xl"}>Aurora is the image for people who want a reliable, safe and smooth computing
          experience for everyday
          tasks and beyond. The OS for everyone, including those hobby stargazers.</p>
        <section className={"grid grid-cols-1 grid-rows-4  lg:grid-cols-2 lg:grid-rows-1 gap-5 w-full"}>
          <div ref={ref1}
               className={`border rounded-2xl shadow-md flex flex-col text-left justify-center gap-2 p-8 items-center w-full  animate-delay-0 ${isVisible1 ? "animate-fade-up" : "animate-fade-down"}`}>
            <SparklesIcon className={"w-14 h-14 stroke-aurora-darkblue"} />
            <h1
              className={"text-2xl text-center font-bold bg-gradient-to-br from-aurora-blue to-aurora-purple text-transparent bg-clip-text"}>Simply
              delightful.</h1>
            <p className={"text-xl"}>Aurora features a lightly customized KDE Plasma for a super smooth and delightful
              desktop experience that can be customized indefinitely. <br /><span
                className={"font-bold bg-clip-text text-transparent bg-gradient-to-r from-aurora-purple to-aurora-darkblue"}>You can even move the taskbar.</span>
            </p>
          </div>
          <div ref={ref2}

               className={`border rounded-2xl shadow-md flex flex-col text-left justify-center gap-2 p-8 items-center w-full animate-delay-0 ${isVisible2 ? "animate-fade-up" : "animate-fade-down"}`}>
            <Gauge className={"w-14 h-14 stroke-aurora-darkblue"} />
            <h1
              className={"text-2xl text-center font-bold bg-gradient-to-br from-aurora-blue to-aurora-purple text-transparent bg-clip-text"}>Speed
              and Reliability</h1>
            <p className={"text-xl"}>Perfectly tuned and optimized, for maximum efficiency and reliability
              like a 100 year old machine. <br /><span
                className={"font-bold bg-clip-text text-transparent bg-gradient-to-r from-aurora-purple to-aurora-darkblue"}>Your computer will never feel the same again.</span>
            </p>
          </div>
          <div ref={ref3}
               className={`border rounded-2xl shadow-md flex flex-col text-left justify-center gap-2 p-8 items-center w-full animate-delay-0 animate-once animate-ease-in-out ${isVisible3 ? "animate-fade-up" : "animate-fade-down"}`}>

            <CloudDownload className={"w-14 h-14 stroke-aurora-darkblue"} />
            <h1
              className={"text-2xl font-bold bg-gradient-to-br from-aurora-blue to-aurora-purple text-transparent bg-clip-text"}>Zero
              Maintenance</h1>
            <p className={"text-xl"}>The system only has to be installed <span className={"font-bold"}>once</span>.
              Updates of your apps and the system is handled in the background for you.
              <br /><span
                className={"font-bold text-left bg-clip-text text-transparent bg-gradient-to-r from-aurora-purple to-aurora-darkblue"}>Set and forget, like a dream.</span>
            </p>
          </div>

          <div ref={ref4}
               className={`border rounded-2xl shadow-md flex flex-col text-left justify-center gap-2 p-8 items-center w-full animate-delay-0 ${isVisible4 ? "animate-fade-up" : "animate-fade-down"}`}>
            <ComputerIcon className={"w-14 h-14 stroke-aurora-darkblue"} />
            <h1
              className={"text-2xl font-bold bg-gradient-to-br from-aurora-blue to-aurora-purple text-transparent bg-clip-text"}>Hardware
              Support</h1>
            <p className={"text-xl"}>We have individual editions for Surface and ASUS users and all include expanded
              hardware support for game controllers, printer hardware and much more. <br /><span
                className={"font-bold bg-clip-text text-transparent bg-gradient-to-r from-aurora-purple to-aurora-darkblue"}>Don't forget to print the starship bills.</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}