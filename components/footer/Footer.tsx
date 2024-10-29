import { RefObject } from "react";
import { CircleArrowUp, GithubIcon, GitMerge, GlobeIcon } from "lucide-react";

export default function Footer({ introRef }: { introRef: RefObject<any> }) {
  return (
    <>
      <footer
        className={"min-h-[30vh] w-full bg-gray-800 flex flex-col justify-center gap-4 p-12 lg:p-0 text-center text-white items-center"}>
        <button className={"mt-5 flex flex-row items-center gap-5 justify-center"}
                onClick={() => {
                  introRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
                }}>
          <CircleArrowUp className={"w-10 h-10"} />
          Go up
        </button>
        <div className={"text-xl flex flex-col items-center gap-2 justify-center bg-gradient-to-r from-ublue-darkblue to-ublue-lightblue p-4 rounded-2xl"}>
          Aurora is proudly built with technology from <a
          className={"underline font-bold flex flex-row items-center gap-2"}
          href={"https://universal-blue.org"}><img src={"/ublue-color.svg"} width={35} height={35} />Universal
          Blue</a>a
          community toolkit designed to reboot the Linux desktop. Built for the love of the game. Welcome to Indie Cloud
          Native.
        </div>
        <div>
          Built with ❤️ in Austria.
        </div>
        <div>
          Refined logo built by @reisvg. {"<3"}
        </div>
        <div>
          <span className={"font-bold"}>Background Image Credits:</span>
          <div>Background Images by Jonatan Pie from <a className={"cursor-pointer underline"}
                                                              href={"https://unsplash.com/@r3dmax"}>Unsplash</a></div>
        </div>
        <div>
          © Copyright {new Date().getFullYear()} Project Aurora authors.
        </div>

        <div
          className={
            "w-fit flex flex-col lg:flex-row gap-5 underline items-center justify-center mb-5 bg-gradient-to-r from-aurora-purple to-aurora-darkblue p-4 rounded-2xl"
          }
        >
          <a
            className={"flex flex-row gap-1"}
            href={"https://github.com/ublue-os/bluefin"}
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
        <div className={"italic text-sm mb-3"}>
          Aurora is not affiliated and or endorsed by The Fedora Project, KDE
          e.V., The KDE Project, Red Hat, Microsoft, ASUS or any other companies
          mentioned above.
        </div>
      </footer>
    </>
  );
}
