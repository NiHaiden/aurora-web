import { ArrowDown, ArrowUpRight } from "lucide-react";
import { RefObject } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { TextLoop } from "@/components/ui/text-loop";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import BlurText from "../BlurText";

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
      className="relative flex h-screen flex-col items-center justify-center gap-4 overflow-hidden text-wrap bg-gray-950 text-white backdrop-blur-xl animate-ease-linear"
    >
      <ShootingStars minDelay={3200} />
      <StarsBackground starDensity={0.0005} />
      <div className="z-10 flex max-w-screen-2xl flex-col items-center justify-center gap-5 lg:m-0">
        <div className="mb-4 flex w-2/3 items-center justify-start md:w-3/4 lg:w-2/3">
          <h1 className="bg-gradient-to-r from-aurora-blue via-aurora-darkblue to-aurora-orangina bg-clip-text text-6xl font-extrabold uppercase tracking-widest text-transparent md:text-7xl lg:text-9xl">
            <img src={"/aurora-text-logo.svg"} alt="Aurora Logo" />
          </h1>
        </div>
        <div className="flex w-2/3 flex-col gap-3 text-2xl font-semibold md:w-3/4 md:text-3xl lg:w-2/3 lg:text-4xl">
          <BlurText
            text="is here. Enjoy a privacy-respecting, smooth and stable experience on your PC. Imagine that."
            delay={50}
            animateBy="words"
            direction="top"
            className="text-2xl"
          />

          <TextLoop className="italic">
            <span
              className={
                "bg-gradient-to-r from-aurora-blue via-aurora-darkblue to-aurora-orangina bg-clip-text text-transparent"
              }
            >
              Develop your next app.
            </span>
            <span
              className={
                "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-transparent"
              }
            >
              Launch a space rocket.
            </span>
            <span
              className={
                "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-transparent"
              }
            >
              Watch videos.
            </span>
            <span
              className={
                "bg-gradient-to-r from-aurora-blue to-aurora-darkblue bg-clip-text text-transparent"
              }
            >
              Draw your next movie poster.
            </span>
            <span
              className={
                "bg-gradient-to-r from-aurora-blue to-aurora-darkblue bg-clip-text text-transparent"
              }
            >
              Split a Helium atom.
            </span>
            <span
              className={
                "bg-gradient-to-r from-aurora-lightred to-aurora-orangina bg-clip-text text-transparent"
              }
            >
              Dream about the stars.
            </span>
          </TextLoop>
        </div>
        <div className="flex w-2/3 flex-col-reverse items-center justify-center gap-5 lg:w-2/3 lg:flex-row lg:items-start lg:justify-start">
          <div className="group relative">
            <button
              className="relative inline-flex min-w-[250px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-aurora-orangina to-aurora-lightorange px-6 py-3 text-lg font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-aurora-orangina/25 active:scale-95"
              onClick={() =>
                aboutRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
              {t("learn-more")}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>

          <div className="group relative">
            <button
              className="relative inline-flex min-w-[250px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-aurora-darkblue to-aurora-blue px-6 py-3 text-lg font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-aurora-darkblue/25 active:scale-95"
              onClick={() => router.push("https://docs.getaurora.dev")}
            >
              Go to the docs
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
