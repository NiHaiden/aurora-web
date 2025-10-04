import { ArrowUpRightIcon, BookOpen, PersonStanding, Users } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export default function AboutDocs() {
  return (
    <div
      className={
        "flex max-w-screen-2xl flex-col items-center justify-center gap-10 px-4 lg:px-0"
      }
    >
      <h1
        className={
          "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-4xl font-bold text-transparent lg:text-7xl py-2"
        }
      >
        Documentation & Community
      </h1>
      <p className={"text-xl text-center max-w-4xl"}>
        If you want to consult our documentation, contribute to it or need help /
        want to hang out in our community, you will find it here. We have forums
        and a Discord server.
      </p>
      <div
        className={
          "grid w-full max-w-screen-2xl grid-cols-1 gap-8 lg:grid-cols-2"
        }
      >
        <SpotlightCard
          className="text-white bg-black/20 border-zinc-500/40 backdrop-blur-md"
          spotlightColor={`rgba(102, 185, 242, 0.2)`} // aurora-blue
        >
          <div className={"flex flex-col gap-6 h-full"}>
            <div className={"flex items-center gap-4"}>
              <BookOpen size={48} className={"text-aurora-blue flex-shrink-0"} />
              <h2
                className={
                  "bg-gradient-to-r from-aurora-blue to-aurora-darkblue bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                Our documentation
              </h2>
            </div>

            <div className={"text-xl leading-relaxed flex-1"}>
              <p className={"mb-6"}>
                Get help by reading the docs, or contribute to them if you want
                to improve them.
              </p>
              <p
                className={
                  "bg-gradient-to-r from-aurora-blue to-aurora-darkblue bg-clip-text text-2xl font-semibold text-transparent mb-6"
                }
              >
                Knowledge at your fingertips.
              </p>
            </div>

            <div className={"flex w-full flex-col gap-4 lg:flex-row"}>
              <a
                href={"https://github.com/ublue-os/aurora-docs"}
                target={"_blank"}
                rel={"noreferrer"}
                className={
                  "flex flex-row items-center justify-center gap-3 rounded-2xl border border-aurora-blue p-3 text-lg font-bold text-white transition-all duration-300 hover:bg-aurora-blue/10 hover:scale-105"
                }
              >
                Contribute to Docs <ArrowUpRightIcon size={24} />
              </a>
              <a
                href={"https://docs.getaurora.dev"}
                target={"_blank"}
                rel={"noreferrer"}
                className={
                  "flex flex-row items-center justify-center gap-3 rounded-2xl border border-aurora-darkblue p-3 text-lg font-bold text-white transition-all duration-300 hover:bg-aurora-darkblue/10 hover:scale-105"
                }
              >
                Read Documentation <ArrowUpRightIcon size={24} />
              </a>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="text-white bg-black/20 border-zinc-500/40 backdrop-blur-md"
          spotlightColor={`rgba(217, 92, 127, 0.2)`} // aurora-orangina
        >
          <div className={"flex flex-col gap-6 h-full"}>
            <div className={"flex items-center gap-4"}>
              <Users size={48} className={"text-aurora-orangina flex-shrink-0"} />
              <h2
                className={
                  "bg-gradient-to-r from-aurora-orangina to-aurora-lightred bg-clip-text text-3xl font-semibold text-transparent"
                }
              >
                Community
              </h2>
            </div>

            <div className={"text-xl leading-relaxed flex-1"}>
              <p className={"mb-6"}>
                We have forums for you to ask questions and discuss technical topics,
                or join our Discord server to hang out and chat with fellow Aurora users
                and developers.
              </p>
              <p
                className={
                  "bg-gradient-to-r from-aurora-orangina to-aurora-lightred bg-clip-text text-2xl font-semibold text-transparent mb-6"
                }
              >
                Join the conversation.
              </p>
            </div>

            <div className={"flex w-full flex-col gap-4 lg:flex-row"}>
              <a
                href={"https://universal-blue.discourse.group"}
                target={"_blank"}
                rel={"noreferrer"}
                className={
                  "flex flex-row items-center justify-center gap-3 rounded-2xl border border-aurora-lightred p-3 text-lg font-bold text-white transition-all duration-300 hover:bg-aurora-purple/10 hover:scale-105"
                }
              >
                Visit Forums <PersonStanding size={24} />
              </a>
              <a
                href={"https://discord.gg/WEu6BdFEtp"}
                target={"_blank"}
                rel={"noreferrer"}
                className={
                  "flex flex-row items-center justify-center gap-3 rounded-2xl border border-aurora-orangina p-3 text-lg font-bold text-white transition-all duration-300 hover:bg-aurora-orangina/10 hover:scale-105"
                }
              >
                Join Discord <ArrowUpRightIcon size={24} />
              </a>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}