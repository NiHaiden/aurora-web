import React, { useState } from "react";
import { ArrowDown } from "lucide-react";
import { useTranslations } from "next-intl";

export default function DownloadBtn({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations("Download-Component");
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={onClick}
        className={`50 group relative overflow-hidden rounded-2xl border border-zinc-100 bg-transparent px-6 py-2 transition-all duration-300 ease-out`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative z-10 flex items-center">
          <span className="mr-2 flex items-center justify-center transition-all duration-300 ease-in-out">
            <ArrowDown
              className="h-6 w-6 text-white group-hover:text-white"
              style={{
                animation: isHovered ? "downloadArrow 1s infinite" : "none",
                transform: isHovered ? "translateY(0)" : "translateY(-2px)",
              }}
            />
          </span>
          <span className="font-semibold text-white transition-colors duration-300 ease-in-out group-hover:text-white">
            {t("get-aurora")}
          </span>
        </div>
        <span className="absolute inset-0 bg-gradient-to-r from-aurora-blue to-aurora-lightorange opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      </button>
      <style jsx>{`
        @keyframes downloadArrow {
          0%,
          100% {
            transform: translateY(-2px);
          }
          50% {
            transform: translateY(2px);
          }
        }
      `}</style>
    </div>
  );
}
