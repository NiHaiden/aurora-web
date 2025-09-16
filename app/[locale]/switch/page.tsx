import type { Metadata } from "next";
import SwitchPageClient from "./SwitchPageClient";

export const metadata: Metadata = {
  title: "Switch to Aurora | Aurora",
  description:
    "See why teams are leaving Windows 10 for Aurora with an animated tour of automated updates, developer tooling, and migration resources.",
};

export default function SwitchPage() {
  return <SwitchPageClient />;
}
