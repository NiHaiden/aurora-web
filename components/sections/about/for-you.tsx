import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import { auroraColors } from "@/lib/aurora-colors";
import {
  ArrowUpRight,
  BookHeart,
  Circle,
  CpuIcon,
  Cuboid,
  LoaderCircle,
  Recycle,
  RefreshCcw,
  ShoppingBag,
} from "lucide-react";

export default function ForYou() {
  return (
    <div
      className={
        "flex w-full max-w-screen-2xl flex-col items-center justify-start gap-10"
      }
    >
      <h1
        className={
          "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-4xl font-bold text-transparent lg:text-7xl"
        }
      >
        How does Aurora fit in for you?
      </h1>
      <p className={"text-xl"}>
        Here are a few reasons why you should consider using Aurora.
      </p>
      <div className={"grid grid-cols-1 gap-10 lg:grid-cols-3"}>
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
                <RefreshCcw
                  size={48}
                  className={
                    "animate-spin text-aurora-blue animate-duration-[5000ms]"
                  }
                />
                <h1
                  className={
                    "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-2xl text-3xl font-semibold text-transparent"
                  }
                >
                  Automatic updates, forever.
                </h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={"text-xl"}>
                Aurora downloads and applies updates automatically in the
                background.
                <br />
                This includes the operating system itself and all installed
                applications.
                <br />
                <span
                  className={
                    "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  Let us take care of your updates.
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
                  <CpuIcon className={"text-aurora-blue"} size={48} />
                  <h1
                    className={
                      "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-3xl font-semibold text-transparent"
                    }
                  >
                    Expanded hardware support.
                  </h1>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={"text-xl"}>
                Aurora includes support all graphics cards and CPUs, including
                GPUs from Nvidia. Expanded hardware support extends to game
                controllers and more printer drivers.
                <br />
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
                  <BookHeart className={"text-aurora-blue"} size={48} />
                  <h1
                    className={
                      "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-3xl font-semibold text-transparent"
                    }
                  >
                    Help where you need it.
                  </h1>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={"text-xl"}>
                To make life easier for users, we have a easy to use way to
                switch image editions when you buy new hardware. We also have
                included a few common utilities to get started quickly with many
                common tasks.
                <br />
              </div>
            </CardContent>
          </MagicCard>
        </Card>
      </div>
    </div>
  );
}
