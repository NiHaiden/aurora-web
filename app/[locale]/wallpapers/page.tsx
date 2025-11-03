import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getWallpapers } from "@/lib/wallpapers";
import WallpapersClient from "./WallpapersClient";

export const metadata: Metadata = {
  title: "Wallpapers - Aurora",
  description: "Download beautiful Aurora wallpapers for your desktop.",
};

export default async function WallpapersPage() {
  try {
    const wallpapers = await getWallpapers();
    return <WallpapersClient wallpapers={wallpapers} />;
  } catch (error) {
    console.error("Error loading wallpapers:", error);
    return <WallpapersClient wallpapers={[]} />;
  }
}
