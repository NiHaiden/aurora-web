"use client";
import {CloudDownload, ComputerIcon, Gauge, SparklesIcon} from "lucide-react";
import {RefObject, useRef} from "react";
import {useIsVisible} from "@/utils/scroll";

export default function AboutAurora({aboutRef}: {aboutRef: RefObject<any>}) {
    const ref1 = useRef<HTMLDivElement>(null);
    const isVisible1 = useIsVisible(ref1)

    return (
        <div ref={aboutRef} className={"min-h-screen w-full flex items-center justify-center"}>
            <div className={"w-3/4 h-3/4 flex flex-col gap-5 mt-5"}>
                <h1 className={"text-7xl font-bold bg-gradient-to-br from-aurora-blue to-aurora-purple text-transparent bg-clip-text"}>What's Aurora?</h1>
                <p className={"text-xl"}>Aurora is the image for people who want a reliable, safe and smooth computing experience for everyday
                    tasks and beyond.</p>
                <section className={"grid grid-cols-2 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-5 w-full"}>
                    <div ref={ref1}
                         className={`border rounded-2xl shadow-md flex flex-col text-center justify-center gap-2 p-8 items-center w-full  animate-delay-0 ${isVisible1 ? "animate-fade-up" : "animate-fade-down"}`}>
                        <SparklesIcon className={"w-14 h-14 stroke-aurora-darkblue"}/>
                        <h1 className={"text-2xl text-center font-bold bg-gradient-to-br from-aurora-blue to-aurora-purple text-transparent bg-clip-text"}>Simply delightful.</h1>
                        <p className={"text-xl"}>Aurora features Vanilla KDE Plasma for a super smooth and delightful desktop experience that can be customized indefinitely.</p>
                    </div>
                    <div

                        className={`border rounded-2xl shadow-md flex flex-col text-center justify-center gap-2 p-8 items-center w-full animate-delay-0 ${isVisible1 ? "animate-fade-up" : "animate-fade-down"}`}>
                        <Gauge className={"w-14 h-14 stroke-aurora-darkblue"}/>
                        <h1 className={"text-2xl text-center font-bold bg-gradient-to-br from-aurora-blue to-aurora-purple text-transparent bg-clip-text"}>Speed and Reliability</h1>
                        <p className={"text-xl"}>Perfectly tuned and optimized, for maximum efficiency and reliability like a heavy rock. Smooth af.</p>
                    </div>
                    <div
                        className={`border rounded-2xl shadow-md flex flex-col text-center justify-center gap-2 p-8 items-center w-full animate-delay-0 animate-once animate-ease-in-out ${isVisible1 ? "animate-fade-up" : "animate-fade-down"}`}>

                        <CloudDownload className={"w-14 h-14 stroke-aurora-darkblue"}/>
                        <h1 className={"text-2xl font-bold bg-gradient-to-br from-aurora-blue to-aurora-purple text-transparent bg-clip-text"}>Zero Maintenance</h1>
                        <p className={"text-xl"}>Install the systems once and forget about maintenance. Updates are automatic. Upgrade your
                            system in one-click, including all your apps.</p>
                    </div>

                    <div
                        className={`border rounded-2xl shadow-md flex flex-col text-center justify-center gap-2 p-8 items-center w-full animate-delay-0 ${isVisible1 ? "animate-fade-up" : "animate-fade-down"}`}>
                        <ComputerIcon className={"w-14 h-14 stroke-aurora-darkblue"}/>
                        <h1 className={"text-2xl font-bold bg-gradient-to-br from-aurora-blue to-aurora-purple text-transparent bg-clip-text"}>Hardware Support</h1>
                        <p className={"text-xl"}>An image for everyone. Hardware support includes
                            built-in Nvidia GPU Drivers, support for Surface Devices and ASUS devices.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}