/*
Copyright 2024 Niklas Haiden
 */

import { BeerIcon, BotIcon, CodeIcon, ContainerIcon } from "lucide-react";
import { RefObject, useRef } from "react";
import { useIsVisible } from "@/lib/utils/scroll";

export default function AboutAuroraDx({
	aboutDxRef,
}: { aboutDxRef: RefObject<any> }) {
	const ref1 = useRef<HTMLDivElement>(null);
	const isVisible1 = useIsVisible(ref1);

	const ref2 = useRef<HTMLDivElement>(null);
	const isVisible2 = useIsVisible(ref2);

	const ref3 = useRef<HTMLDivElement>(null);
	const isVisible3 = useIsVisible(ref3);

	const ref4 = useRef<HTMLDivElement>(null);
	const isVisible4 = useIsVisible(ref4);

	return (
		<div ref={aboutDxRef}>
			<div
				className={
					"min-h-fit w-full flex flex-col items-center justify-center bg-gray-800"
				}
			>
				<div className={"w-3/4 h-full flex flex-col gap-5 mt-32 mb-32"}>
					<div className={"flex flex-col items-left gap-4"}>
						<h1
							className={
								"text-6xl lg:text-7xl font-bold bg-gradient-to-tr drop-shadow-md from-aurora-lightorange to-aurora-lightred text-transparent bg-clip-text"
							}
						>
							Aurora for developers
						</h1>
						<p className={"text-2xl text-white"}>
							Are you a pro at stargazing? The developer experience edition
							takes the great foundation and cranks it up to eleven.
						</p>
					</div>
					<div
						className={
							"grid grid-cols-1 grid-rows-4  lg:grid-cols-2 lg:grid-rows-1 gap-5 w-full mb-10"
						}
					>
						<div
							ref={ref1}
							className={`border bg-gray-700 rounded-2xl shadow-md flex flex-col text-left justify-center gap-2 p-8 items-center w-full animate-delay-0 ${isVisible1 ? "animate-fade-up" : "animate-fade-down"}`}
						>
							<BeerIcon className={"w-14 h-14 stroke-aurora-orangina"} />
							<h1
								className={
									"text-2xl text-center font-bold bg-gradient-to-tr drop-shadow-md from-aurora-lightorange to-aurora-lightred text-transparent bg-clip-text"
								}
							>
								Brew, on tap.
							</h1>
							<p className={"text-white text-xl"}>
								Get your beer glass and fill it up with some awesome tools.
								Aurora DX comes preinstalled with brew out of the box and is
								safely integrated so it doesn't doesn't mess with your host
								system.
							</p>
						</div>
						<div
							ref={ref2}
							className={`border bg-gray-700 rounded-2xl shadow-md flex flex-col text-left justify-center gap-2 p-8 items-center w-full animate-delay-0 ${isVisible2 ? "animate-fade-up" : "animate-fade-down"}`}
						>
							<ContainerIcon className={"w-14 h-14 stroke-aurora-orangina"} />
							<h1
								className={
									"text-2xl text-center font-bold bg-gradient-to-tr drop-shadow-md from-aurora-lightorange to-aurora-lightred text-transparent bg-clip-text"
								}
							>
								Containers, how you want it.
							</h1>
							<p className={"text-white text-xl"}>
								The container ships are here. Docker and Podman come
								preconfigured to suit every type of workflow, including a
								containerized CLI experience. And with Ptyxis, your distrobox is
								only one click away.
							</p>
						</div>
						<div
							ref={ref3}
							className={`border bg-gray-700 rounded-2xl shadow-md flex flex-col text-left justify-center gap-2 p-8 items-center w-full animate-delay-0 ${isVisible3 ? "animate-fade-up" : "animate-fade-down"}`}
						>
							<CodeIcon className={"w-14 h-14 stroke-aurora-orangina"} />
							<h1
								className={
									"text-2xl text-center font-bold bg-gradient-to-tr drop-shadow-md from-aurora-lightorange to-aurora-lightred text-transparent bg-clip-text"
								}
							>
								Preconfigured and ready for serious work.
							</h1>
							<p className={"text-white text-xl"}>
								Visual Studio Code is preinstalled and already preconfigured to
								support devcontainer workflows. And with a single command, you
								can grab Jetbrains Toolbox if you like coffee more.
							</p>
						</div>
						<div
							ref={ref4}
							className={`border bg-gray-700 rounded-2xl shadow-md flex flex-col text-left justify-center gap-2 p-8 items-center w-full animate-delay-0 ${isVisible4 ? "animate-fade-up" : "animate-fade-down"}`}
						>
							<BotIcon className={"w-14 h-14 stroke-aurora-orangina"} />
							<h1
								className={
									"text-2xl text-center font-bold bg-gradient-to-tr drop-shadow-md from-aurora-lightorange to-aurora-lightred text-transparent bg-clip-text"
								}
							>
								Let the robots take over.
							</h1>
							<p className={"text-white text-xl"}>
								If you fancy local LLMs or do any kind of machine learning work,
								Aurora has you covered there too. Run private LLMs with
								preinstalled Ollama (
								<code className={"font-bold"}>ujust ollama</code>) or spin up a
								pytorch distrobox for some serious AI work.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
