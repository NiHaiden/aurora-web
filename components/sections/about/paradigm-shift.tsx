import SpotlightCard from "@/components/SpotlightCard";
import { auroraColors } from "@/lib/aurora-colors";
import { ArrowUpRight, Cuboid, ShoppingBag, TextSearch } from "lucide-react";
import useIsMobile from "@/components/sections/about/useIsMobile";

function FlathubLink() {
  return (
    <a
      href={"https://flathub.org"}
      target={"_blank"}
      rel={"noreferrer"}
      className={
        "flex flex-row justify-between items-center gap-3 rounded-2xl border border-aurora-lightorange p-3 text-lg font-bold text-white hover:bg-aurora-lightorange/10 transition-colors"
      }
    >
      Checkout Flathub
      <ArrowUpRight size={32} />
    </a>
  );
}

export default function ParadigmShift() {
  const isMobile = useIsMobile();

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
        Aurora is a paradigm shift for Linux.
      </h1>
      <p className={"text-xl text-center max-w-3xl"}>
        To rethink the Linux Desktop experience from the ground up, we built
        Aurora on new technology and principles. What does this mean for you?
      </p>
      <div className={"grid grid-cols-1 gap-8 lg:grid-cols-1 w-full"}>
        <SpotlightCard
          className="text-white bg-zinc-950 border-zinc-600 backdrop-blur-sm"
          spotlightColor={`rgba(102, 185, 242, 0.15)`} // aurora-blue
        >
          <div className={"flex flex-row items-start gap-6"}>
            <div className={"flex-shrink-0"}>
              <Cuboid size={48} className={"text-aurora-blue"} />
            </div>
            <div className={"flex flex-col gap-4 flex-1"}>
              <h2
                className={
                  "bg-gradient-to-r from-aurora-blue to-aurora-darkblue bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                Rock-solid.
              </h2>
              <div className={"text-xl leading-relaxed"}>
                <p className={"mb-4"}>
                  We built Aurora on completely different technology and
                  principles compared to a normal Linux Desktop.
                </p>
                <p className={"mb-4"}>
                  Updates are built and tested before they ever reach you and are
                  a single image that gets applied in the background.
                </p>
                <p className={"mb-4"}>
                  And if a new version of Aurora breaks something, you can
                  rollback to a known-good state.
                </p>
                <p
                  className={
                    "bg-gradient-to-r from-aurora-blue to-aurora-darkblue bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  Image based is the future.
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="text-white bg-zinc-950 border-zinc-600 backdrop-blur-sm"
          spotlightColor={`rgba(236, 146, 161, 0.15)`} // aurora-lightorange
        >
          <div className={"flex flex-row items-start gap-6"}>
            <div className={"flex-shrink-0"}>
              <ShoppingBag className={"text-aurora-lightorange"} size={48} />
            </div>
            <div className={"flex flex-col gap-4 flex-1"}>
              <div className={"flex flex-row items-center justify-between"}>
                <h2
                  className={
                    "bg-gradient-to-r from-aurora-lightorange to-aurora-orangina bg-clip-text text-3xl font-semibold text-transparent"
                  }
                >
                  A unified app store.
                </h2>
                {!isMobile && <div className="ml-4"><FlathubLink /></div>}
              </div>
              <div className={"text-xl leading-relaxed"}>
                <p className={"mb-4"}>
                  Utilizing the power of the Flathub App Store, we have a unified
                  and one-stop shop for app developers and app users alike. For
                  the first time, there is a unified app store for the Linux
                  platform where developers can publish their apps easily and earn
                  money to support their OSS work.
                </p>
                <p
                  className={
                    "bg-gradient-to-r from-aurora-lightorange to-aurora-orangina bg-clip-text text-2xl font-semibold text-transparent mb-4"
                  }
                >
                  It's the year of the Linux App Store.
                </p>
                {isMobile && <FlathubLink />}
              </div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="text-white bg-zinc-950 border-zinc-600 backdrop-blur-sm"
          spotlightColor={`rgba(59, 28, 111, 0.15)`} // aurora-purple
        >
          <div className={"flex flex-row items-start gap-6"}>
            <div className={"flex-shrink-0"}>
              <TextSearch className={"text-aurora-darkblue"} size={48} />
            </div>
            <div className={"flex flex-col gap-4 flex-1"}>
              <h2
                className={
                  "bg-gradient-to-r from-aurora-darkblue/80 to-aurora-blue bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                Easily auditable and extendable.
              </h2>
              <div className={"text-xl leading-relaxed"}>
                <p className={"mb-4"}>
                  Aurora is nothing more than a collection of bash scripts,
                  containerfiles and custom programs stitched together. This makes
                  it easy to audit, contribute and help out. By building a easy
                  entry-point for developers, we hope to encourage contributions
                  from new users. Go on this journey with us.
                </p>
                <p
                  className={
                    "bg-gradient-to-r from-aurora-darkblue to-aurora-blue bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  The power of Docker is here for the desktop. Wowza.
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}