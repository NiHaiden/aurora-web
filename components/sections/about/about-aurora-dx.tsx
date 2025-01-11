/*
Copyright 2024 Niklas Haiden
 */

import { BeerIcon, BotIcon, CodeIcon, ContainerIcon } from "lucide-react";
import { RefObject, useRef } from "react";
import { useIsVisible } from "@/lib/utils/scroll";

export default function AboutAuroraDx({
  aboutDxRef,
}: {
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
    <div ref={aboutDxRef}>
      <div
        className={
          "flex min-h-fit w-full flex-col items-center justify-center bg-gray-700"
        }
      >
        <div className={"mb-32 mt-32 flex h-full w-3/4 flex-col gap-5"}>
          <div className={"items-left flex flex-col gap-4"}>
            <h1
              className={
                "bg-gradient-to-tr from-aurora-lightorange to-aurora-lightred bg-clip-text text-6xl font-bold text-transparent drop-shadow-md lg:text-7xl"
              }
            >
              Aurora for developers
            </h1>
            <p className={"text-2xl text-white"}>
              Are you a pro at stargazing? The developer experience edition
              takes the great foundation and adds lots of developer goodies on top.
            </p>
          </div>
          <div
            className={
              "mb-10 grid w-full grid-cols-1 grid-rows-4 gap-5 lg:grid-cols-2 lg:grid-rows-1"
            }
          >
            <div
              ref={ref1}
              className={`flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-gray-900 p-8 text-left drop-shadow-2xl animate-delay-0 ${isVisible1 ? "animate-fade-up" : "animate-fade-down"}`}
            >
              <BeerIcon className={"h-14 w-14 stroke-aurora-orangina"} />
              <h1
                className={
                  "bg-gradient-to-tr from-aurora-orangina to-aurora-lightorange bg-clip-text text-center text-2xl font-bold text-transparent drop-shadow-md"
                }
              >
                Brew, ready for your needs.
              </h1>
              <p className={"text-xl text-white"}>
                Brew is preinstalled and ready to use on Aurora. Use it to
                install every CLI tool you could've never dreamt up. Brew is
                safely integrated to never mess with your host system. <br />
                <span
                  className={
                    "bg-gradient-to-tr from-aurora-orangina to-aurora-lightorange bg-clip-text font-bold text-transparent drop-shadow-md"
                  }
                >
                  Beer never tasted so good.
                </span>
              </p>
            </div>
            <div
              ref={ref2}
              className={`flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-gray-900 p-8 text-left drop-shadow-2xl animate-delay-0 ${isVisible2 ? "animate-fade-up" : "animate-fade-down"}`}
            >
              <ContainerIcon className={"h-14 w-14 stroke-aurora-orangina"} />
              <h1
                className={
                  "bg-gradient-to-tr from-aurora-lightorange to-aurora-lightred bg-clip-text text-center text-2xl font-bold text-transparent drop-shadow-md"
                }
              >
                Containers, your best friends.
              </h1>
              <p className={"text-xl text-white"}>
                Docker and Podman come preconfigured to suit every type of
                workflow, including a containerized CLI experience. And with
                Ptyxis, your distrobox is only one click away.
                <br />
                <span
                  className={
                    "bg-gradient-to-tr from-aurora-orangina to-aurora-lightorange bg-clip-text font-bold text-transparent drop-shadow-md"
                  }
                >
                  Never say "works on my machine" again.
                </span>
              </p>
            </div>
            <div
              ref={ref3}
              className={`flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-gray-900 p-8 text-left drop-shadow-2xl animate-delay-0 ${isVisible3 ? "animate-fade-up" : "animate-fade-down"}`}
            >
              <CodeIcon className={"h-14 w-14 stroke-aurora-orangina"} />
              <h1
                className={
                  "bg-gradient-to-tr from-aurora-lightorange to-aurora-lightred bg-clip-text text-center text-2xl font-bold text-transparent drop-shadow-md"
                }
              >
                Preconfigured and ready for serious work.
              </h1>
              <p className={"text-xl text-white"}>
                Visual Studio Code is preinstalled and already preconfigured to
                support workflows involving DevContainers. And with a single
                command, you can grab Jetbrains Toolbox if you like coffee more.
                <br />
                <span
                  className={
                    "bg-gradient-to-tr from-aurora-orangina to-aurora-lightorange bg-clip-text text-left text-xl font-bold text-transparent drop-shadow-md"
                  }
                >
                  Or use neovim if you know how to exit it.
                </span>
              </p>
            </div>
            <div
              ref={ref4}
              className={`flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-gray-900 p-8 text-left drop-shadow-2xl animate-delay-0 ${isVisible4 ? "animate-fade-up" : "animate-fade-down"}`}
            >
              <BotIcon className={"h-14 w-14 stroke-aurora-orangina"} />
              <h1
                className={
                  "bg-gradient-to-tr from-aurora-lightorange to-aurora-lightred bg-clip-text text-center text-2xl font-bold text-transparent drop-shadow-md"
                }
              >
                Let the robots take over.
              </h1>
              <p className={"text-xl text-white"}>
                If you fancy local LLMs or do any kind of machine learning work,
                Aurora has you covered there too. Run private LLMs with Ollama
                or{" "}
                <a
                  className={"underline underline-offset-2"}
                  href="https://flathub.org/apps/com.jeffser.Alpaca"
                >
                  Alpaca.
                </a>
                <br />
                <span
                  className={
                    "bg-gradient-to-tr from-aurora-orangina to-aurora-lightorange bg-clip-text text-left text-xl font-bold text-transparent drop-shadow-md"
                  }
                >
                  Use the robots to your advantage.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
