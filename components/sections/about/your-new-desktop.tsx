import { GlowEffect } from "@/components/ui/glow";
import SpotlightCard from "@/components/SpotlightCard";
import KDELogo from "@/components/icons/kde";
import { Trees } from "lucide-react";

export default function YourNewDesktop() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-10">
      <div
        className={
          "relative aspect-auto h-full w-full max-w-screen-2xl lg:min-w-[750px]"
        }
      >
        <div className="relative h-full w-full">
          <GlowEffect
            colors={[
              "#3B1C6F",
              "#D95C7F",
              "#66B9F2",
              "#4E67B2",
              "#EC92A1",
              "#AA507A",
            ]}
            mode="colorShift"
            blur="soft"
            duration={5}
            scale={1.008}
          />
          <div className="relative h-full w-full bg-black text-white dark:bg-white dark:text-black">
            <img
              className={"h-full w-full"}
              src={"/newdesktop.png"}
              alt={"Desktop"}
            />
          </div>
        </div>
      </div>

      <div className={"flex w-full max-w-screen-2xl flex-col gap-8"}>
        <div className="text-center">
          <h1
            className={
              "bg-gradient-to-br from-aurora-blue to-aurora-orangina bg-clip-text text-4xl font-bold text-transparent lg:text-7xl py-2"
            }
          >
            Welcome, it's your new desktop.
          </h1>
          <p className="w-full text-xl lg:text-2xl mt-6 max-w-4xl mx-auto">
            Power on and feel right at home when using your computer, from the
            first moment on. Develop faster than ever before. Explore the galaxy. Write your next
            novel.
          </p>
        </div>

        <div className={"grid grid-cols-1 gap-8 lg:grid-cols-2"}>
          <SpotlightCard
            className="text-white bg-black/20 border-zinc-500/40 backdrop-blur-md"
            spotlightColor={`rgba(78, 103, 178, 0.2)`} // aurora-darkblue
          >
            <div className={"flex flex-col gap-6 h-full"}>
              <div className={"flex items-center gap-4"}>
                <div className={"flex-shrink-0"}>
                  <KDELogo size={48} />
                </div>
                <h2
                  className={
                    "bg-gradient-to-r from-aurora-darkblue to-ublue-lightblue bg-clip-text text-3xl font-semibold text-transparent"
                  }
                >
                  Built with KDE Plasma.
                </h2>
              </div>

              <div className={"text-xl leading-relaxed flex-1"}>
                <p className={"mb-4"}>
                  Aurora is built around the customizable and adaptable KDE
                  Plasma Desktop Environment, carefully customized by us to provide
                  the best experience out of the box.
                </p>
                <p
                  className={
                    "bg-gradient-to-r from-aurora-darkblue to-ublue-lightblue bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  Feel right at home from day one.
                </p>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="text-white bg-black/20 border-zinc-500/40 backdrop-blur-md"
            spotlightColor={`rgba(236, 146, 161, 0.2)`} // aurora-lightorange
          >
            <div className={"flex flex-col gap-6 h-full"}>
              <div className={"flex items-center gap-4"}>
                <div className={"flex-shrink-0"}>
                  <Trees size={48} className={"text-aurora-lightorange"} />
                </div>
                <h2
                  className={
                    "bg-gradient-to-r from-aurora-lightorange to-aurora-orangina bg-clip-text text-3xl font-semibold text-transparent"
                  }
                >
                  Sensible defaults
                </h2>
              </div>

              <div className={"text-xl leading-relaxed flex-1"}>
                <p className={"mb-4"}>
                  With a set of carefully selected applications and chosen
                  defaults, Aurora is built for daily usage and is easy, fun and
                  productive. It takes care of you and works alongside you.
                </p>
                <p
                  className={
                    "bg-gradient-to-r from-aurora-lightorange to-aurora-orangina bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  Everything configured, nothing to worry about.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}