import type { Metadata } from "next";
import SwitchPageClient from "./SwitchPageClient";

export const metadata: Metadata = {
  title: "Switch to Windows 10 | Aurora",
  description:
    "Explore why teams are moving from Aurora to Windows 10 with a modern, animated overview of productivity, compatibility, and migration resources.",
};

export default function SwitchPage() {
  return <SwitchPageClient />;
}
