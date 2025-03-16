import { ArrowDown, ArrowUpRight, FileIcon } from "lucide-react";
import { RefObject } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { TextLoop } from "@/components/ui/text-loop";
import {Meteors} from "@/components/magicui/meteors";
import {StarsBackground} from "@/components/ui/stars-background";
import {ShootingStars} from "@/components/ui/shooting-stars";

export default function Hero({
  introRef,
  aboutRef,
}: {
  introRef: RefObject<any>;
  aboutRef: RefObject<HTMLDivElement>;
}) {
  const t = useTranslations("Introduction");
  const router = useRouter();
  return (
    <div
      ref={introRef}
      className="relative flex h-screen animate-fade-up flex-col justify-center gap-4 overflow-hidden text-wrap bg-gray-950 text-white backdrop-blur-xl animate-ease-linear items-center"
    >
      <ShootingStars minDelay={3200}/>
      <StarsBackground starDensity={0.0015}/>
      <div className="max-w-screen-2xl z-10 flex flex-col items-center justify-center gap-5 lg:m-0">
        <div className="mb-4 flex w-2/3 items-center justify-start md:w-3/4 lg:w-2/3">
          <h1 className="bg-gradient-to-r from-aurora-blue via-aurora-darkblue to-aurora-orangina bg-clip-text text-6xl font-extrabold uppercase tracking-widest text-transparent md:text-7xl lg:text-9xl">
            <img src={"/aurora-v3-text-logo.svg"} alt="Aurora Logo" />
          </h1>
        </div>
        <div className="w-2/3 text-2xl font-semibold md:w-3/4 md:text-3xl lg:w-2/3 lg:text-4xl flex flex-col gap-3">
          your stable, privacy-respecting and ultimate productivity OS.<br />
          <TextLoop className='italic'>
            <span className={"bg-clip-text text-transparent bg-gradient-to-r from-aurora-blue via-aurora-darkblue to-aurora-orangina"}>Develop your next app.</span>
            <span className={"bg-clip-text text-transparent bg-gradient-to-r from-aurora-blue to-aurora-lightorange"}>Launch a space rocket.</span>
            <span className={"bg-clip-text text-transparent bg-gradient-to-r from-aurora-blue to-aurora-lightorange"}>Watch videos.</span>
            <span className={"bg-clip-text text-transparent bg-gradient-to-r from-aurora-blue to-aurora-darkblue"}>Draw your next movie poster.</span>
            <span className={"bg-clip-text text-transparent bg-gradient-to-r from-aurora-blue to-aurora-darkblue"}>Split a Helium atom.</span>
            <span className={"bg-clip-text text-transparent bg-gradient-to-r from-aurora-lightred to-aurora-orangina"}>Dream about the stars.</span>
          </TextLoop>
        </div>
        <div className="flex w-2/3 lg:items-start lg:justify-start gap-5 lg:w-2/3 lg:flex-row flex-col-reverse items-center justify-center">
          <div className="relative">
            <button className=" min-w-[250px] relative inline-flex items-center justify-center gap-3 rounded-md bg-aurora-orangina px-4 py-2 text-xl text-zinc-50 outline outline-1 outline-[#fff2f21f]"
            onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}>
              <ArrowDown />{t("learn-more")}
            </button>
          </div>

          <div className="relative">
            <button
              className="min-w-[250px] relative inline-flex items-center justify-center gap-3 rounded-md bg-aurora-darkblue px-4 py-2 text-xl text-zinc-50 outline outline-1 outline-[#fff2f21f]"
              onClick={() => router.push("https://docs.getaurora.dev")}
            >
               Go to the docs <ArrowUpRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
