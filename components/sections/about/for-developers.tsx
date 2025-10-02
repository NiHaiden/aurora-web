import SpotlightCard from "@/components/SpotlightCard";
import { BrainCircuit, CodeIcon, ContainerIcon } from "lucide-react";

export default function ForDevelopers() {
  return (
    <div
      className={
        "flex w-full max-w-screen-2xl flex-col items-center justify-start gap-10"
      }
    >
      <h1
        className={
          "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-4xl font-bold text-transparent lg:text-7xl py-2"
        }
      >
        Aurora for developers
      </h1>
      <p className={"text-xl text-center max-w-4xl"}>
        Building on a great foundation, Aurora Developer Experience (DX) is
        designed to make the lives of every developer easy by bundling commonly
        used tools and applications into one package.
      </p>
      <div className={"grid grid-cols-1 gap-8 lg:grid-cols-2 w-full"}>
        <SpotlightCard
          className="text-white bg-black/20 border-zinc-500/40 backdrop-blur-md"
          spotlightColor={`rgba(59, 28, 111, 0.2)`} // aurora-purple
        >
          <div className={"flex flex-col items-center gap-6 text-center h-full"}>
            <div className={"flex-shrink-0"}>
              <BrainCircuit size={48} className={"text-aurora-purple"} />
            </div>
            <div className={"flex flex-col gap-4 flex-1"}>
              <h2
                className={
                  "bg-gradient-to-r from-aurora-purple to-aurora-lightred bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                Local AI Workflows
              </h2>
              <div className={"text-xl leading-relaxed"}>
                <p className={"mb-4"}>
                  By including GPU drivers and commonly used utilities for local
                  AI, Aurora makes it easy for you to get started with running
                  your own AI at home.
                </p>
                <p
                  className={
                    "bg-gradient-to-r from-aurora-purple to-aurora-lightred bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  The robots are here to serve you.
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="text-white bg-black/20 border-zinc-500/40 backdrop-blur-md"
          spotlightColor={`rgba(236, 146, 161, 0.2)`} // aurora-lightorange
        >
          <div className={"flex flex-col items-center gap-6 text-center h-full"}>
            <div className={"flex-shrink-0"}>
              <ContainerIcon className={"text-aurora-lightorange"} size={48} />
            </div>
            <div className={"flex flex-col gap-4 flex-1"}>
              <h2
                className={
                  "bg-gradient-to-r from-aurora-lightorange to-aurora-orangina bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                Preinstalled container tools.
              </h2>
              <div className={"text-xl leading-relaxed"}>
                <p className={"mb-4"}>
                  Aurora Developer Experience includes Docker and Podman, offering
                  choice and flexibility for the most demanding container-based
                  workflows.
                </p>
                <p
                  className={
                    "bg-gradient-to-r from-aurora-lightorange to-aurora-orangina bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  Cloud-Native has never been easier.
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="text-white bg-black/20 border-zinc-500/40 backdrop-blur-md"
          spotlightColor={`rgba(52, 75, 235, 0.2)`} // ublue-lightblue
        >
          <div className={"flex flex-col items-center gap-6 text-center h-full"}>
            <div className={"flex-shrink-0"}>
              <CodeIcon className={"text-ublue-lightblue"} size={48} />
            </div>
            <div className={"flex flex-col gap-4 flex-1"}>
              <h2
                className={
                  "bg-gradient-to-r from-ublue-lightblue to-aurora-blue bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                Developer tools are a click away.
              </h2>
              <div className={"text-xl leading-relaxed"}>
                <p className={"mb-4"}>
                  The developer experience includes commonly used developer tools
                  like VS Code and comes preconfigured for containerized
                  development workflows with DevContainers. Jetbrains Products are only a command away.
                </p>
                <p
                  className={
                    "bg-gradient-to-r from-ublue-lightblue to-aurora-blue bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  Everything you need, out of the box.
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="text-white bg-black/20 border-zinc-500/40 backdrop-blur-md"
          spotlightColor={`rgba(170, 80, 122, 0.2)`} // aurora-lightred
        >
          <div className={"flex flex-col items-center gap-6 text-center h-full"}>
            <div className={"flex-shrink-0"}>
              <img
                alt={"Homebrew Icon"}
                src={"/icons/brew.svg"}
                width={48}
                height={48}
                className={"filter brightness-0 invert"}
                style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(87%) saturate(437%) hue-rotate(295deg) brightness(93%) contrast(89%)' }}
              />
            </div>
            <div className={"flex flex-col gap-4 flex-1"}>
              <h2
                className={
                  "bg-gradient-to-r from-aurora-lightred to-aurora-orangina bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                Homebrew on-tap
              </h2>
              <div className={"text-xl leading-relaxed"}>
                <p className={"mb-4"}>
                  Aurora automatically includes Homebrew with every installation,
                  making it easy to discover, install and keep your favorite CLI
                  tools up to date. Find thousands of libraries and tools in the
                  brew libraries, safely integrated to never mess with your host system.
                </p>
                <p
                  className={
                    "bg-gradient-to-r from-aurora-lightred to-aurora-orangina bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  Package management made simple.
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}