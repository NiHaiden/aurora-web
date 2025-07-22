import { ArrowUpRightIcon, PersonStanding } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { auroraColors } from "@/lib/aurora-colors";
import { MagicCard } from "@/components/magicui/magic-card";

export default function AboutDocs() {
  return (
    <div
      className={
        "flex max-w-screen-2xl flex-col items-center justify-center gap-5 px-4 lg:px-0"
      }
    >
      <h1
        className={
          "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-5xl font-bold text-transparent lg:text-7xl py-2"
        }
      >
        Documentation & Community
      </h1>
      <div className={"text-xl"}>
        If you want to consult or documentation, contribute to it or need help /
        want to hang out in our community, you will find it here. We have forums
        and a Discord server.
      </div>
      <div
        className={
          "grid w-full max-w-screen-2xl grid-cols-1 gap-10 lg:grid-cols-2"
        }
      >
        <Card className={"border-none text-white"}>
          <MagicCard
            className={"border-none"}
            gradientColor={auroraColors.blue}
            gradientFrom={auroraColors.blue}
            gradientTo={auroraColors.darkBlue}
            gradientSize={100}
            gradientOpacity={0.3}
          >
            <CardHeader className={"text-2xl font-bold text-white"}>
              <h1
                className={
                  "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                Our documentation
              </h1>
            </CardHeader>
            <CardContent className={"flex flex-col gap-3"}>
              <div>
                Get help by reading the docs, or contribute to them if you want
                to improve them.
              </div>
              <div className={"flex w-full justify-end"}>
                <div
                  className={
                    "flex w-full flex-col items-center justify-end gap-5 lg:flex-row"
                  }
                >
                  <a
                    href={"https://github.com/ublue-os/aurora-docs"}
                    target={"_blank"}
                    rel={"noreferrer"}
                    className={
                      "flex flex-row items-center gap-3 rounded-2xl border p-3 text-lg font-bold text-white transition-colors duration-300 hover:bg-aurora-blue"
                    }
                  >
                    Contribute to Documentation <ArrowUpRightIcon size={32} />
                  </a>
                  <a
                    href={"https://docs.getaurora.dev"}
                    target={"_blank"}
                    rel={"noreferrer"}
                    className={
                      "flex flex-row items-center gap-3 rounded-2xl border p-3 text-lg font-bold text-white transition-colors duration-300 hover:bg-aurora-darkblue"
                    }
                  >
                    Go to Documentation <ArrowUpRightIcon size={32} />
                  </a>
                </div>
              </div>
            </CardContent>
          </MagicCard>
        </Card>
        <Card className={"border-none text-white"}>
          <MagicCard
            className={"border-none"}
            gradientColor={auroraColors.blue}
            gradientFrom={auroraColors.blue}
            gradientTo={auroraColors.darkBlue}
            gradientSize={100}
            gradientOpacity={0.3}
          >
            <CardHeader className={"text-2xl font-bold text-white"}>
              <h1
                className={
                  "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-2xl text-3xl font-semibold text-transparent"
                }
              >
                Community
              </h1>
            </CardHeader>
            <CardContent className={"flex flex-col gap-3"}>
              <div>
                We have forums for you to ask questions and discuss or a discord
                server to hang out in.
              </div>
              <div className={"flex w-full justify-end"}>
                <div
                  className={
                    "flex w-full flex-col items-center justify-end gap-5 lg:flex-row"
                  }
                >
                  <a
                    href={"https://universal-blue.discourse.group"}
                    target={"_blank"}
                    rel={"noreferrer"}
                    className={
                      "flex flex-row items-center gap-3 rounded-2xl border p-3 text-lg font-bold text-white transition-colors duration-300 hover:bg-aurora-purple"
                    }
                  >
                    Go to Forums <PersonStanding size={32} />
                  </a>
                  <a
                    href={"https://discord.com/invite/jN2HHespdk"}
                    target={"_blank"}
                    rel={"noreferrer"}
                    className={
                      "flex flex-row items-center gap-3 rounded-2xl border p-3 text-lg font-bold text-white transition-colors duration-300 hover:bg-aurora-orangina"
                    }
                  >
                    Go to Discord <ArrowUpRightIcon size={32} />
                  </a>
                </div>
              </div>
            </CardContent>
          </MagicCard>
        </Card>
      </div>
    </div>
  );
}
