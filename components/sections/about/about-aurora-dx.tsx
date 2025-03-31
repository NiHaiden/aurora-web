/*
Copyright 2024 Niklas Haiden
 */

import {BeerIcon, BotIcon, CodeIcon, ContainerIcon} from "lucide-react";
import {RefObject, useRef} from "react";
import {useIsVisible} from "@/lib/utils/scroll";
import {useTranslations} from "next-intl";

export default function AboutAuroraDx({
  aboutDxRef,
}: {
  aboutDxRef: RefObject<any>;
}) {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);

  const t = useTranslations("About-AuroraDx");

  return (
    <div ref={aboutDxRef}>
      <div
        className={
          "flex min-h-fit w-full flex-col items-center justify-center bg-gray-700"
        }
      >
        <div className={"mb-32 mt-32 flex h-full w-3/4 flex-col gap-5"}>
          <div className={"items-left flex flex-col gap-4"}>
            <h1
              className={
                "bg-gradient-to-tr from-aurora-lightorange to-aurora-lightred bg-clip-text text-6xl font-bold text-transparent drop-shadow-md lg:text-7xl"
              }
            >
              {t("for-developers")}
            </h1>
            <p className={"text-2xl text-white"}>{t("pro-stargazing")}</p>
          </div>
          <div
            className={
              "mb-10 grid w-full grid-cols-1 grid-rows-4 gap-5 lg:grid-cols-2 lg:grid-rows-1"
            }
          >
            <div
              ref={ref1}
              className={`flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-gray-900 p-8 text-left drop-shadow-2xl animate-delay-0 ${isVisible1 ? "animate-fade-up" : "animate-fade-down"}`}
            >
              <BeerIcon className={"h-14 w-14 stroke-aurora-orangina"} />
              <h1
                className={
                  "bg-gradient-to-tr from-aurora-orangina to-aurora-lightorange bg-clip-text text-center text-2xl font-bold text-transparent drop-shadow-md"
                }
              >
                {t("brew-ready")}
              </h1>
              <p className={"text-xl text-white"}>
                {t("brew-ready-text")} <br />
                <span
                  className={
                    "bg-gradient-to-tr from-aurora-orangina to-aurora-lightorange bg-clip-text font-bold text-transparent drop-shadow-md"
                  }
                >
                  {t("brew-ready-red")}
                </span>
              </p>
            </div>
            <div
              ref={ref2}
              className={`flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-gray-900 p-8 text-left drop-shadow-2xl animate-delay-0 ${isVisible2 ? "animate-fade-up" : "animate-fade-down"}`}
            >
              <ContainerIcon className={"h-14 w-14 stroke-aurora-orangina"} />
              <h1
                className={
                  "bg-gradient-to-tr from-aurora-lightorange to-aurora-lightred bg-clip-text text-center text-2xl font-bold text-transparent drop-shadow-md"
                }
              >
                {t("containers-best-friends")}
              </h1>
              <p className={"text-xl text-white"}>
                {t("containers-best-friends-text")} <br />
                <span
                  className={
                    "bg-gradient-to-tr from-aurora-orangina to-aurora-lightorange bg-clip-text font-bold text-transparent drop-shadow-md"
                  }
                >
                  {t("containers-best-friends-red")}
                </span>
              </p>
            </div>
            <div
              ref={ref3}
              className={`flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-gray-900 p-8 text-left drop-shadow-2xl animate-delay-0 ${isVisible3 ? "animate-fade-up" : "animate-fade-down"}`}
            >
              <CodeIcon className={"h-14 w-14 stroke-aurora-orangina"} />
              <h1
                className={
                  "bg-gradient-to-tr from-aurora-lightorange to-aurora-lightred bg-clip-text text-center text-2xl font-bold text-transparent drop-shadow-md"
                }
              >
                {t("preconfigured-work")}
              </h1>
              <p className={"text-xl text-white"}>
                {t("preconfigured-work-text")} <br />
                <span
                  className={
                    "bg-gradient-to-tr from-aurora-orangina to-aurora-lightorange bg-clip-text text-left text-xl font-bold text-transparent drop-shadow-md"
                  }
                >
                  {t("preconfigured-work-red")}
                </span>
              </p>
            </div>
            <div
              ref={ref4}
              className={`flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-gray-900 p-8 text-left drop-shadow-2xl animate-delay-0 ${isVisible4 ? "animate-fade-up" : "animate-fade-down"}`}
            >
              <BotIcon className={"h-14 w-14 stroke-aurora-orangina"} />
              <h1
                className={
                  "bg-gradient-to-tr from-aurora-lightorange to-aurora-lightred bg-clip-text text-center text-2xl font-bold text-transparent drop-shadow-md"
                }
              >
                {t("robots-take-over")}
              </h1>
              <p className={"text-xl text-white"}>
                {t("robots-take-over-text")} <br />
                <span
                  className={
                    "bg-gradient-to-tr from-aurora-orangina to-aurora-lightorange bg-clip-text text-left text-xl font-bold text-transparent drop-shadow-md"
                  }
                >
                  {t("robots-take-over-red")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
