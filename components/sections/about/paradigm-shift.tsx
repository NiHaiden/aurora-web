import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import { auroraColors } from "@/lib/aurora-colors";
import { ArrowUpRight, Cuboid, ShoppingBag } from "lucide-react";

export default function ParadigmShift() {
  return (
    <div
      className={
        "flex max-w-screen-2xl w-full flex-col items-center justify-start gap-10"
      }
    >
      <h1
        className={
          "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-4xl font-bold text-transparent lg:text-7xl"
        }
      >
        Aurora is a paradigm shift for Linux.
      </h1>
      <p className={"text-xl"}>
        To rethink the Linux Desktop experience from the ground up, we built
        Aurora on new technology and principles. What does this mean for you?
      </p>
      <div className={"grid grid-cols-1 gap-10 lg:grid-cols-1"}>
        <Card className={"w-full border-none bg-black text-white"}>
          <MagicCard
            className={"w-full border-none"}
            gradientColor={auroraColors.blue}
            gradientFrom={auroraColors.blue}
            gradientTo={auroraColors.darkBlue}
            gradientSize={100}
            gradientOpacity={0.3}
          >
            <CardHeader>
              <CardTitle className={"flex flex-row items-center gap-3"}>
                <Cuboid size={48} className={"text-aurora-blue"} />
                <h1
                  className={
                    "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-2xl text-3xl font-semibold text-transparent"
                  }
                >
                  Building on atomic principles.
                </h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={"text-xl"}>
                We built Aurora on completely different technology and
                principles compared to a normal Linux Desktop.
                <br />
                Updates are built and tested before they ever reach you and are
                a single package that gets applied in the background.
                <br />
                And if a new version of Aurora breaks something, you can
                rollback to a known-good state.
                <br />
                <span
                  className={
                    "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  The OS should never break on an update. Resilient against
                  failure.
                </span>
              </div>
            </CardContent>
          </MagicCard>
        </Card>
        <Card className={"border-none bg-black text-white"}>
          <MagicCard
            className={"h-full border-none"}
            gradientColor={auroraColors.blue}
            gradientFrom={auroraColors.blue}
            gradientTo={auroraColors.darkBlue}
            gradientSize={100}
            gradientOpacity={0.3}
          >
            <CardHeader>
              <CardTitle
                className={"flex flex-row items-center justify-between gap-3"}
              >
                <div className={"flex flex-row items-center gap-3"}>
                  <ShoppingBag className={"text-aurora-blue"} size={48} />
                  <h1
                    className={
                      "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-3xl font-semibold text-transparent"
                    }
                  >
                    A unified app store.
                  </h1>
                </div>
                <a
                  href={"https://flathub.org"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={
                    "flex flex-row items-center gap-3 rounded-2xl border border-aurora-blue p-3 text-lg font-bold text-white"
                  }
                >
                  Checkout Flathub
                  <ArrowUpRight size={32} />
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={"text-xl"}>
                Utilizing the power of the Flathub App Store, we have a unified
                and one-stop shop for app developers and app users alike. For
                the first time, there is a unified app store for the Linux
                platform where developers can publish their apps easily and earn
                money to support their OSS work.
                <br />
                <span
                  className={
                    "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  It's the year of the Linux App Store.
                </span>
              </div>
            </CardContent>
          </MagicCard>
        </Card>
      </div>
    </div>
  );
}
