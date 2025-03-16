import { ArrowUpRightIcon, PersonStanding } from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
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
          "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-7xl font-bold text-transparent"
        }
      >
        Docs & Community
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
        <Card className={"text-white border-none"}>
          <MagicCard
            className={"border-none"}
            gradientColor={auroraColors.blue}
            gradientFrom={auroraColors.blue}
            gradientTo={auroraColors.darkBlue}
            gradientSize={100}
            gradientOpacity={0.3}
          >
            <CardHeader className={"text-2xl font-bold text-white"}>
              <CardTitle>Our Documentation</CardTitle>
            </CardHeader>
            <CardContent className={"flex flex-col gap-3"}>
              <div>
                You can find our documentation and answers to common questions
                here.
              </div>
              <div className={"flex w-full justify-end"}>
                <a
                  href={"https://docs.getaurora.dev"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={
                    "flex flex-row items-center gap-3 rounded-2xl border p-3 text-lg font-bold text-white"
                  }
                >
                  Go to Documentation <ArrowUpRightIcon size={32} />
                </a>
              </div>
            </CardContent>
          </MagicCard>
        </Card>
        <div
          className={
            "flex w-full flex-col gap-4 rounded-2xl border border-zinc-500 bg-gradient-to-tr from-aurora-blue via-aurora-darkblue to-aurora-purple p-4"
          }
        >
          <h1 className={"text-3xl font-bold text-white"}>
            Community (Discord & Forums)
          </h1>
          <div>
            We have forums for you to ask questions and discuss or a discord
            server to hang out in.
          </div>
          <div className={"flex w-full items-center justify-end gap-5"}>
            <a
              href={"https://universal-blue.discourse.group"}
              target={"_blank"}
              rel={"noreferrer"}
              className={
                "flex flex-row items-center gap-3 rounded-2xl border p-3 text-lg font-bold text-white"
              }
            >
              Go to Forums <PersonStanding size={32} />
            </a>
            <a
              href={"https://discord.gg/WEu6BdFEtp"}
              target={"_blank"}
              rel={"noreferrer"}
              className={
                "flex flex-row items-center gap-3 rounded-2xl border p-3 text-lg font-bold text-white"
              }
            >
              Go to Discord <ArrowUpRightIcon size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
