import React, { useState } from "react";
import { ArrowDown } from "lucide-react";

export default function DownloadBtn({onClick}: {onClick: React.MouseEventHandler<HTMLButtonElement> | undefined}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={onClick}
        className="group relative overflow-hidden px-6 py-3 rounded-2xl bg-transparent border border-white transition-all duration-300 ease-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative z-10 flex items-center">
  <span className="mr-2 flex items-center justify-center transition-all duration-300 ease-in-out">
  <ArrowDown
    className="w-6 h-6 text-white group-hover:text-white"
    style={{
      animation: isHovered ? "downloadArrow 1s infinite" : "none",
      transform: isHovered ? "translateY(0)" : "translateY(-2px)"
    }}
  />
  </span>
          <span
            className="font-semibold text-white transition-colors duration-300 ease-in-out group-hover:text-white">
    Get Aurora
    </span>
        </div>
        <span
          className="absolute inset-0 bg-gradient-to-r from-aurora-purple to-aurora-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
      </button>
      <style jsx>{`
          @keyframes downloadArrow {
              0%, 100% {
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