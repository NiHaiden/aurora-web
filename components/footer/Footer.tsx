import { RefObject } from "react";
import { CircleArrowUp, GithubIcon, GitMerge, GlobeIcon } from "lucide-react";

export default function Footer({ introRef }: { introRef: RefObject<any> }) {
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
          Go up
        </button>
        <div
          className={
            "flex flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-ublue-darkblue to-ublue-lightblue p-4 text-xl"
          }
        >
          Aurora is proudly built with technology from{" "}
          <a
            className={"flex flex-row items-center gap-2 font-bold underline"}
            href={"https://universal-blue.org"}
          >
            <img src={"/ublue-color.svg"} width={35} height={35} />
            Universal Blue
          </a>
          a community toolkit designed to reboot the Linux desktop. Built for
          the love of the game. Welcome to Indie Cloud Native.
        </div>
        <div>Built with ❤️ in Austria.</div>
        <div>Refined logo built by @reisvg. {"<3"}</div>
        <div>
          <span className={"font-bold"}>Background Image Credits:</span>
          <div>
            Background Images by Jonatan Pie from{" "}
            <a
              className={"cursor-pointer underline"}
              href={"https://unsplash.com/@r3dmax"}
            >
              Unsplash
            </a>
          </div>
        </div>
        <div>
          Animated Icons from{" "}
          <a
            className={"cursor-pointer underline"}
            href={"https://icons.pqoqubbw.dev/"}
          >
            here.
          </a>
        </div>
        <div>
          © Copyright {new Date().getFullYear()} Project Aurora authors.
        </div>

        <div
          className={
            "mb-5 flex w-fit flex-col items-center justify-center gap-5 rounded-2xl bg-gradient-to-r from-aurora-purple to-aurora-darkblue p-4 underline lg:flex-row"
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
        <div className={"mb-3 text-sm italic"}>
          Aurora is not affiliated and or endorsed by The Fedora Project, KDE
          e.V., The KDE Project, Red Hat, Microsoft, ASUS or any other companies
          mentioned above.
        </div>
      </footer>
    </>
  );
}
