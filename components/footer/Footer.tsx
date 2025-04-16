import { RefObject } from "react";
import { CircleArrowUp, GithubIcon, GitMerge, GlobeIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer({ introRef }: { introRef: RefObject<any> }) {
  const t = useTranslations("Footer");
  return (
    <>
      <footer
        className={
          "flex min-h-[30vh] w-full flex-col items-center justify-center gap-4 bg-gray-800 p-12 text-center text-white lg:p-0"
        }
      >
        <button
          className={"mt-5 flex flex-row items-center justify-center gap-5"}
          onClick={() => {
            introRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <CircleArrowUp className={"h-10 w-10"} />
          {t("go-up")}
        </button>
        <div
          className={
            "flex flex-col items-center justify-center gap-2 p-4 text-xl"
          }
        >
          {t("proudly-built")}{" "}
          <a
            className={"flex flex-row items-center gap-2 font-bold underline"}
            href={"https://universal-blue.org"}
          >
            <img src={"/ublue-color.svg"} width={35} height={35} />
            Universal Blue
          </a>
          {t("proudly-built-phrase")}
        </div>
        <div>{t("built-with-love")}</div>
        <div>Logos are by @adelia.svg ❤️</div>
        <div
          className={
            "mb-5 flex w-full flex-col items-center justify-center gap-5 underline underline-offset-4 lg:w-fit lg:flex-row"
          }
        >
          <a
            className={"flex flex-row gap-1"}
            href={"https://github.com/ublue-os/aurora"}
          >
            <GithubIcon /> Aurora GitHub Repository
          </a>

          <a
            className={"flex flex-row gap-1"}
            href={"https://universal-blue.org"}
          >
            <GlobeIcon />
            Universal Blue Website
          </a>

          <a
            className={"flex flex-row gap-1"}
            href={"https://github.com/NiHaiden/aurora-web"}
          >
            <GitMerge />
            Website Source Code
          </a>
        </div>
        <div className={"mb-3 text-sm italic"}>{t("not-affiliated")}</div>
        <div>
          <div className={"text-xl font-bold italic"}>
            Deploying Linux to your machine, please wait...
          </div>
          <img className={"scale-50"} src={"/glorp.png"} />
        </div>
      </footer>
    </>
  );
}
