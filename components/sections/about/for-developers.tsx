import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import { auroraColors } from "@/lib/aurora-colors";
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
          "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-4xl font-bold text-transparent lg:text-7xl"
        }
      >
        Aurora for developers
      </h1>
      <p className={"text-xl"}>
        Building on a great foundation, Aurora Developer Experience (DX) is
        designed to make the lives of every developer easy by bundling commonly
        used tools and applications into one package.
      </p>
      <div className={"grid grid-cols-1 gap-10 lg:grid-cols-2"}>
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
                <BrainCircuit size={48} className={"text-aurora-blue"} />
                <h1
                  className={
                    "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-2xl text-3xl font-semibold text-transparent"
                  }
                >
                  Local AI Workflows
                </h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={"text-xl"}>
                By including GPU drivers and commonly used utilites for local
                AI, Aurora makes it easy for you to get started with running
                your own AI at home.
                <br />
                <span
                  className={
                    "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-2xl font-semibold text-transparent"
                  }
                >
                  The robots are here to serve you.
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
                  <ContainerIcon className={"text-aurora-blue"} size={48} />
                  <h1
                    className={
                      "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-3xl font-semibold text-transparent"
                    }
                  >
                    Preinstalled container tools.
                  </h1>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={"text-xl"}>
                Aurora Developer Experience includes Docker and Podman, offering
                choice and flexibility for the most demanding container-based
                workflows. Cloud-Native has never been easier.
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
                  <CodeIcon className={"text-aurora-blue"} size={48} />
                  <h1
                    className={
                      "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-3xl font-semibold text-transparent"
                    }
                  >
                    Developer tools are a click away.
                  </h1>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={"text-xl"}>
                The developer experience includes commonly used developer tools
                like VS Code and comes preconfigured for containerized
                development workflows with DevContainers. If you like Jetbrains
                Products, they are only a command away.
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
                  <img
                    alt={"Homebrew Icon"}
                    src={"/icons/brew.svg"}
                    width={75}
                    height={75}
                    className={"text-aurora-blue"}
                  />
                  <h1
                    className={
                      "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-3xl font-semibold text-transparent"
                    }
                  >
                    Homebrew on-tap
                  </h1>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={"text-xl"}>
                Aurora automatically includes Homebrew with every installation,
                making it easy to discover, install and keep your favorite CLI
                tools up to date. Find thousands of libraries and tools in the
                brew libraries. And it's safely integrated to never mess with
                your host system.
                <br />
              </div>
            </CardContent>
          </MagicCard>
        </Card>
      </div>
    </div>
  );
}
