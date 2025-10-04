import SpotlightCard from "@/components/SpotlightCard";
import { BookHeart, CpuIcon, RotateCw, ScrollText } from "lucide-react";

export default function ForYou() {
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
        How does Aurora fit in for you?
      </h1>
      <p className={"text-xl text-center max-w-3xl"}>
        Here are a few reasons why you should consider using Aurora.
      </p>
      <div className={"grid grid-cols-1 gap-8 lg:grid-cols-3 w-full"}>
        <SpotlightCard
          className="text-white bg-black/20 border-zinc-500/40 backdrop-blur-md"
          spotlightColor={`rgba(102, 185, 242, 0.2)`} // aurora-blue
        >
          <div className={"flex flex-col items-center gap-6 text-center h-full"}>
            <div className={"flex-shrink-0"}>
              <RotateCw
                size={48}
                className={
                  "animate-spin text-aurora-blue animate-duration-[5000ms]"
                }
              />
            </div>
            <div className={"flex flex-col gap-4 flex-1"}>
              <h2
                className={
                  "bg-gradient-to-r from-aurora-blue to-aurora-darkblue bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                Automatic updates, forever.
              </h2>
              <div className={"text-xl leading-relaxed"}>
                <p className={"mb-4"}>
                  Aurora downloads and applies updates automatically in the
                  background. This includes the operating system itself and all installed
                  applications.
                </p>
                <p
                  className={
                    "bg-gradient-to-r from-aurora-blue to-aurora-darkblue bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  Let us take care of your updates.
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="text-white bg-black/20 border-zinc-500/40 backdrop-blur-md"
          spotlightColor={`rgba(217, 92, 127, 0.2)`} // aurora-orangina
        >
          <div className={"flex flex-col items-center gap-6 text-center h-full"}>
            <div className={"flex-shrink-0"}>
              <CpuIcon className={"text-aurora-orangina"} size={48} />
            </div>
            <div className={"flex flex-col gap-4 flex-1"}>
              <h2
                className={
                  "bg-gradient-to-r from-aurora-orangina to-aurora-lightred bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                Expanded hardware support.
              </h2>
              <div className={"text-xl leading-relaxed"}>
                <p className={"mb-4"}>
                  Aurora includes support for all graphics cards and CPUs, including
                  GPUs from Nvidia. Expanded hardware support extends to game
                  controllers and more printer drivers.
                </p>
                <p
                  className={
                    "bg-gradient-to-r from-aurora-orangina to-aurora-lightred bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  Game on, no problem.
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="text-white bg-black/20 border-zinc-500/40 backdrop-blur-md"
          spotlightColor={`rgba(78, 103, 178, 0.2)`} // aurora-darkblue
        >
          <div className={"flex flex-col items-center gap-6 text-center h-full"}>
            <div className={"flex-shrink-0"}>
              <ScrollText  className={"text-aurora-darkblue"} size={48} />
            </div>
            <div className={"flex flex-col gap-4 flex-1"}>
              <h2
                className={
                  "bg-gradient-to-r from-aurora-darkblue to-ublue-lightblue bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                Helping you along the way.
              </h2>
              <div className={"text-xl leading-relaxed"}>
                <p className={"mb-4"}>
                  We include scripts and common utilities to help you get started quickly and set up some common pieces of software in an non intrusive way.
                </p>
                <p
                  className={
                    "bg-gradient-to-r from-aurora-darkblue to-ublue-lightblue bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  Nice.
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}