"use client";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import FullscreenGallery from "@/components/ui/fullscreen-gallery";
import React, { useRef, useState } from "react";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import BlurText from "@/components/BlurText";
import { Wallpaper } from "@/lib/wallpapers";
import { Download, Eye, Calendar, HardDrive, Tag } from "lucide-react";
import { useTranslations } from "next-intl";

interface WallpapersClientProps {
  wallpapers: Wallpaper[];
}

export default function WallpapersClient({
  wallpapers,
}: WallpapersClientProps) {
  const t = useTranslations("Wallpapers");
  const introRef = useRef(null);
  const newsRef = useRef(null);
  const downloadRef = useRef(null);

  const [selectedWallpaper, setSelectedWallpaper] = useState<number | null>(
    null,
  );
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openGallery = (index: number) => {
    setSelectedWallpaper(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedWallpaper(null);
  };

  const handleDownload = (wallpaper: Wallpaper) => {
    const link = document.createElement("a");
    link.href = wallpaper.url;
    link.download = wallpaper.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!wallpapers || wallpapers.length === 0) {
    return (
      <div>
        <Navbar
          introRef={introRef}
          newsRef={newsRef}
          downloadRef={downloadRef}
        />
        <main className="relative min-h-screen">
          <div className="relative flex min-h-screen items-center justify-center bg-gray-950 text-white">
            <div className="text-center">
              <p>No wallpapers available at the moment.</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Navbar introRef={introRef} newsRef={newsRef} downloadRef={downloadRef} />
      <main className="relative min-h-screen">
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-wrap bg-gray-950 text-white backdrop-blur-xl">
          <ShootingStars minDelay={3200} />
          <StarsBackground starDensity={0.0005} />

          <div className="z-10 flex max-w-screen-2xl flex-col items-center justify-center gap-8 px-4 pb-16 pt-32">
            <div className="mb-12 text-center">
              <h1 className="mb-6 bg-gradient-to-r from-aurora-blue via-aurora-darkblue to-aurora-orangina bg-clip-text text-6xl font-extrabold uppercase tracking-widest text-transparent md:text-7xl lg:text-8xl">
                {t("title")}
              </h1>
              <BlurText
                text={t("description")}
                delay={50}
                animateBy="words"
                direction="top"
                className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl"
              />
            </div>

            <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {wallpapers.map((wallpaper, index) => (
                <div
                  key={wallpaper.id}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-600 bg-white/5 backdrop-blur-2xl transition-all duration-300 hover:scale-105 hover:border-aurora-blue/50 hover:shadow-2xl"
                >
                  <div
                    className="relative aspect-video cursor-pointer overflow-hidden"
                    onClick={() => openGallery(index)}
                  >
                    <img
                      src={wallpaper.url}
                      alt={wallpaper.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2 bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-xl font-semibold text-transparent text-white">
                      {wallpaper.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-300">
                      {wallpaper.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {wallpaper.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full border border-aurora-blue/30 bg-aurora-blue/20 px-2 py-1 text-xs text-aurora-blue"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mb-4 flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <HardDrive className="h-3 w-3" />
                        {wallpaper.resolution}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(wallpaper.date).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <div className="group relative">
                        <button
                          onClick={() => openGallery(index)}
                          className="relative inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aurora-darkblue to-aurora-blue px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-aurora-darkblue/25 active:scale-95"
                        >
                          <Eye className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                          {t("view")}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </button>
                      </div>

                      <div className="group relative">
                        <button
                          onClick={() => handleDownload(wallpaper)}
                          className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-aurora-orangina to-aurora-lightorange px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-aurora-orangina/25 active:scale-95"
                        >
                          <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                          {t("download")}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 max-w-2xl text-center">
              <BlurText
                text={t("note")}
                delay={100}
                animateBy="words"
                direction="top"
                className="text-sm text-gray-400"
              />
            </div>
          </div>
        </div>
        <Footer introRef={introRef} />
      </main>

      <FullscreenGallery
        wallpapers={wallpapers}
        initialIndex={selectedWallpaper || 0}
        isOpen={isGalleryOpen}
        onClose={closeGallery}
      />
    </div>
  );
}
