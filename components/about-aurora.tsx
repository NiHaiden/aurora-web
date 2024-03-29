import {CloudDownload, ComputerIcon, Gauge, SparklesIcon} from "lucide-react";

export default function AboutAurora() {
    return (
        <div className={"min-h-[75vh] w-full flex items-center justify-center"}>
            <div className={"w-3/4 h-3/4 flex flex-col gap-5 mt-5"}>
                <h1 className={"text-5xl font-bold"}>What's Aurora?</h1>
                <p>Aurora is smooth, delightful, fully-featured and elegant thanks to these main points:</p>
                <section className={"grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 gap-5 w-full"}>
                    <div
                        className={"border rounded-2xl shadow-md flex flex-col text-center justify-center gap-2 p-4 items-center w-full"}>
                        <SparklesIcon className={"w-10 h-10"}/>
                        <h1 className={"text-xl text-center font-bold"}>Simply delightful.</h1>
                        <p>Aurora features Vanilla KDE Plasma for a super smooth and delightful desktop experience that can be customized indefinitely.</p>
                    </div>
                    <div
                        className={"border rounded-2xl shadow-md flex flex-col text-center justify-center gap-2 p-4 items-center w-full"}>
                        <Gauge className={"w-10 h-10"}/>
                        <h1 className={"text-xl text-center font-bold"}>Speed and Reliability</h1>
                        <p>Perfectly tuned and optimized, for maximum efficiency and reliability like a heavy rock. Smooth af.</p>
                    </div>
                    <div
                        className={"border rounded-2xl shadow-md flex flex-col text-center justify-center gap-2 p-4 items-center w-full"}>

                        <CloudDownload className={"w-10 h-10"}/>
                        <h1 className={"text-xl font-bold"}>Zero Maintenance</h1>
                        <p>Install the systems once and forget about maintenance. Updates are automatic. Upgrade your
                            system in one-click, including all your apps.</p>
                    </div>

                    <div
                        className={"border rounded-2xl shadow-md flex flex-col text-center justify-center gap-2 p-4 items-center w-full"}>
                        <ComputerIcon className={"w-10 h-10"}/>
                        <h1 className={"text-xl font-bold"}>Hardware Support</h1>
                        <p>An image for everyone. Hardware support includes
                            built-in Nvidia GPU Drivers, support for Surface Devices and ASUS devices.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}