import {Code, Download, Laptop, Monitor} from "lucide-react";
import {RefObject, useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import DownloadComponent from "@/components/sections/download/download-component";
import RebaseComponent from "@/components/sections/download/rebase-component";

export default function DownloadAurora({downloadRef}: { downloadRef: RefObject<any> }) {
    const [systemBase, setSystemBase] = useState("");
    const [primaryGPU, setPrimaryGPU] = useState("");
    const [developerVersion, setDeveloperVersion] = useState("");
    return (
        <>
            <div ref={downloadRef} className={"min-h-fit w-full flex flex-col items-center justify-center"}
                 id={"downloads"}>
                <div className={"w-3/4 2xl:w-1/2 h-full flex flex-col gap-5 mt-5 py-32 lg:p-32"}>
                    <div className={"flex flex-col items-left gap-4"}>
                        <h1 className={"text-5xl lg:text-7xl flex flex-row items-center justify-center lg:justify-start gap-4 font-bold bg-gradient-to-br drop-shadow-md from-aurora-lightorange via-aurora-darkblue to-aurora-lightorange text-transparent bg-clip-text"}>
                            <Download className={"w-12 h-12 lg:w-24 lg:h-24 animate-fade-up stroke-aurora-darkblue"}/>Get
                            Aurora
                        </h1>
                        <p className={"text-xl lg:text-2xl text-black text-center lg:text-left"}>🚀 Ready to ride the
                            rocketship? Pick your hardware
                            configuration and download the ISO.</p>
                    </div>
                </div>
                <div className={"w-3/4 2xl:w-1/2 lg:px-32 grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2"}>
                    <div className={"flex flex-col justify-center items-center lg:items-start lg:justify-start gap-5"}>
                        <div className={"animate-fade-up"}>
                            <p className={"text-xl"}>Hardware</p>
                            <Select onValueChange={(e) => {
                                setSystemBase(e);
                                console.log(systemBase)
                            }}>
                                <SelectTrigger className="w-[300px] h-[60px] text-lg border-aurora-darkblue">
                                    <SelectValue
                                        placeholder={<div className={"flex flex-row gap-1 items-center justify-center"}>
                                            <Laptop className={"stroke-aurora-purple"}/>Select your hardware</div>}/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="desktop">Desktop / Laptop</SelectItem>
                                    <SelectItem value="asus">ASUS</SelectItem>
                                    <SelectItem value="framework">Framework</SelectItem>
                                    <SelectItem value="surface">Surface</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        {systemBase !== "" && <div className={"animate-fade-up"}>
                            <p className={"text-xl"}>Primary GPU</p>
                            <Select onValueChange={(e) => {
                                setPrimaryGPU(e);
                                console.log(systemBase)
                            }}>
                                <SelectTrigger className=" w-[300px] h-[60px] text-lg border-aurora-darkblue">
                                    <SelectValue
                                        placeholder={<div className={"flex flex-row gap-2 items-center justify-center"}>
                                            <Monitor className={"stroke-aurora-purple"}/>Pick your primary GPU</div>}/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="intel">Intel</SelectItem>
                                    <SelectItem value="amd">AMD</SelectItem>
                                    <SelectItem value="nvidia">Nvidia</SelectItem>
                                </SelectContent>
                            </Select></div>}

                        {primaryGPU !== "" && <div className={"animate-fade-up"}>
                            <p className={"text-xl"}>Developer Version</p>
                            <Select onValueChange={(e) => {
                                setDeveloperVersion(e);
                                console.log(systemBase)
                            }}>
                                <SelectTrigger className=" w-[300px] h-[60px] text-lg border-aurora-darkblue">
                                    <SelectValue
                                        placeholder={<div className={"flex flex-row gap-2 items-center justify-center"}>
                                            <Code className={"stroke-aurora-purple"}/>Are you a dev?</div>}/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="yes">Yes</SelectItem>
                                    <SelectItem value="no">No</SelectItem>
                                </SelectContent>
                            </Select></div>}
                    </div>
                    <div className={"flex flex-col justify-center items-center gap-2"}>

                        {developerVersion !== "" &&
                            <div className={"flex flex-col items-center justify-center gap-2 animate-fade-up"}>
                                <div
                                    className={"w-full p-10 rounded-3xl flex flex-col justify-center items-center gap-2"}>
                                    <h1 className={"text-3xl font-bold bg-gradient-to-tr from-aurora-lightorange via-aurora-darkblue to-aurora-purple text-transparent bg-clip-text "}>
                                        Grab the ISO here for a fresh install:
                                    </h1>
                                    <DownloadComponent baseSystem={systemBase} primaryGPU={primaryGPU}
                                                       developerEdition={developerVersion}/>
                                </div>
                                <div
                                    className={"w-full p-10 rounded-3xl flex flex-col justify-center items-center gap-2"}>
                                    <h1 className={"text-3xl font-bold bg-gradient-to-tr from-aurora-lightorange via-aurora-darkblue to-aurora-purple text-transparent bg-clip-text "}>
                                        Already on atomic Fedora? Rebase with:
                                    </h1>
                                    <RebaseComponent baseSystem={systemBase} primaryGPU={primaryGPU}
                                                     developerEdition={developerVersion}/>
                                </div>
                            </div>}

                    </div>
                </div>
            </div>
        </>
    )
}