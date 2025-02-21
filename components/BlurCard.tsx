import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import React from "react";

export function SoftwareCard({
  imageSrc,
  title,
  size = "normal",
  text,
}: {
  imageSrc: string;
  title: React.ReactNode;
  size?: "large" | "normal";
  text: React.ReactNode;
}) {
  return (
    <div className={`relative my-4 aspect-square ${size === "normal" ? "lg:h-[700px] lg:w-[700px] w-[450px] h-[550px]" : "lg:h-[900px] lg:w-[900px] w-[450px] h-[550px] "}  overflow-hidden rounded-[4px]`}>
      <img
        src={imageSrc}
        alt="Benjamin Spiers - Moonlight 2023"
        className="absolute inset-0 brightness-50"
      />
      <ProgressiveBlur
        direction={"bottom"}
        className="pointer-events-none absolute bottom-0 left-0 h-[50%] w-full"
        blurIntensity={3}
      />
      <div className="absolute bottom-0 left-0">
        <div className="flex flex-col items-start gap-0 px-5 py-4">
          <h1 className="">{title}</h1>
          <p className={"text-xl"}>{text}</p>
        </div>
      </div>
    </div>
  );
}
