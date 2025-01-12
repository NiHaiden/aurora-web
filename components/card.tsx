// simple shell
import React from "react";
import { cn } from "@/lib/utils";

export default function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(className, `flex w-full flex-col items-center justify-center gap-2 rounded-2xl border p-8 text-left shadow-md animate-delay-0`)}
    >
      {children}
    </div>
  );
}
