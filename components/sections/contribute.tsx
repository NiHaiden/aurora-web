import {
  ArrowRightIcon,
  FileText,
  Github,
  GithubIcon,
  HeartHandshake,
  MessageCircleCode,
  SendHorizonal,
  SparklesIcon,
  Speech,
} from "lucide-react";
import React from "react";
import Card from "@/components/card";

export default function Contribute() {
  return (
    <div
      className={
        "flex h-full min-h-fit w-full flex-col gap-8 bg-white from-aurora-darkblue to-aurora-blue p-10 lg:px-30"
      }
    >
      <h1
        className={
          "flex items-center gap-6 bg-gradient-to-br from-aurora-blue to-aurora-purple bg-clip-text text-2xl font-bold text-transparent lg:text-6xl"
        }
      >
        <HeartHandshake size={48} className={"text-aurora-purple"} />
        Join the community
      </h1>
      <div>
        Are you looking for help, do you want to contribute to Aurora or just
        want to say hi? Join our communities across the Forums and Discord!
      </div>
      <div className={"grid grid-cols-1 grid-rows-3 gap-5 lg:grid-cols-3"}>
        <Card className={"lg:col-span-3"}>
          <div
            className={"flex w-full flex-col items-center gap-5 lg:flex-row"}
          >
            <FileText size={96} className={"text-aurora-purple"} />
            <div
              className={
                "flex flex-col items-center justify-center gap-5 lg:items-start lg:justify-start"
              }
            >
              <h1
                className={
                  "bg-gradient-to-br from-aurora-blue to-aurora-purple bg-clip-text text-center text-xl font-bold text-transparent lg:text-4xl"
                }
              >
                Documentation
              </h1>

              <p className={"text-center text-xl lg:text-left"}>
                Are you looking for support? Use our documentation to guide your
                path to be the ultimate stargazer and get the help you need.
                <br />
              </p>
              <a
                href={"https://docs.getaurora.dev"}
                target={"_blank"}
                className={
                  "flex w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-2xl bg-gradient-to-tr from-aurora-purple to-aurora-darkblue p-5 text-white drop-shadow-md"
                }
              >
                Find the documentation here <ArrowRightIcon size={36} />
              </a>
            </div>
          </div>
        </Card>
        <Card>
          <div
            className={"flex w-full flex-col items-center gap-5 lg:flex-row"}
          >
            <SendHorizonal size={96} className={"text-aurora-purple"} />
            <div
              className={
                "flex flex-col items-center justify-center gap-5 lg:items-start lg:justify-start"
              }
            >
              <h1
                className={
                  "bg-gradient-to-br from-aurora-blue to-aurora-purple bg-clip-text text-center text-xl font-bold text-transparent lg:text-4xl"
                }
              >
                Discourse
              </h1>

              <p className={"text-center text-xl lg:text-left"}>
                Ask questions on the forums and connect with other users in an
                asynchronous manner.
                <br />
              </p>
              <a
                href={"https://universal-blue.discourse.group/"}
                target={"_blank"}
                className={
                  "flex w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-2xl bg-gradient-to-tr from-aurora-purple to-aurora-darkblue p-5 text-white drop-shadow-md"
                }
              >
                Find the forum here <ArrowRightIcon size={36} />
              </a>
            </div>
          </div>
        </Card>
        <Card>
          <div
            className={"flex w-full flex-col items-center gap-5 lg:flex-row"}
          >
            <MessageCircleCode size={96} className={"text-aurora-purple"} />
            <div
              className={
                "flex flex-col items-center justify-center gap-5 lg:items-start lg:justify-start"
              }
            >
              <h1
                className={
                  "bg-gradient-to-br from-aurora-blue to-aurora-purple bg-clip-text text-center text-xl font-bold text-transparent lg:text-4xl"
                }
              >
                Discord
              </h1>

              <p className={"text-center text-xl lg:text-left"}>
                Join our Discord for discussion about the project, support and
                more!
                <br />
              </p>
              <a
                href={"https://universal-blue.discourse.group/"}
                target={"_blank"}
                className={
                  "flex w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-2xl bg-gradient-to-tr from-aurora-purple to-aurora-darkblue p-5 text-white drop-shadow-md"
                }
              >
                Find the discord here <ArrowRightIcon size={36} />
              </a>
            </div>
          </div>
        </Card>
        <Card>
          <div
            className={"flex w-full flex-col items-center gap-5 lg:flex-row"}
          >
            <Github size={96} className={"text-aurora-purple"} />
            <div
              className={
                "flex flex-col items-center justify-center gap-5 lg:items-start lg:justify-start"
              }
            >
              <h1
                className={
                  "bg-gradient-to-br from-aurora-blue to-aurora-purple bg-clip-text text-center text-xl font-bold text-transparent lg:text-4xl"
                }
              >
                Contribute
              </h1>

              <p className={"text-center text-xl lg:text-left"}>
                Do you want to contribute to Aurora with code, have a feature
                request or want to report a bug? Head over to our GitHub!
                <br />
              </p>
              <a
                href={"https://github.com/ublue-os/aurora"}
                target={"_blank"}
                className={
                  "flex w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-2xl bg-gradient-to-tr from-aurora-purple to-aurora-darkblue p-5 text-white drop-shadow-md"
                }
              >
                Find our Github Repository here <ArrowRightIcon size={36} />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
