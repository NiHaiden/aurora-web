"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Download,
  Maximize2,
} from "lucide-react";
import { Wallpaper } from "@/lib/wallpapers";

interface FullscreenGalleryProps {
  wallpapers: Wallpaper[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function FullscreenGallery({
  wallpapers,
  initialIndex = 0,
  isOpen,
  onClose,
}: FullscreenGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: initialIndex,
  });

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const handleDownload = useCallback((wallpaper: Wallpaper) => {
    const link = document.createElement("a");
    link.href = wallpaper.url;
    link.download = wallpaper.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          scrollPrev();
          break;
        case "ArrowRight":
          scrollNext();
          break;
      }
    },
    [isOpen, onClose, scrollPrev, scrollNext],
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen) return null;

  const currentWallpaper = wallpapers[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="relative flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between bg-gradient-to-b from-black/50 to-transparent p-4 md:p-6">
          <div className="text-white">
            <h2 className="text-xl font-bold md:text-2xl">
              {currentWallpaper?.title}
            </h2>
            <p className="text-sm text-gray-300 md:text-base">
              {currentWallpaper?.description}
            </p>
            <div className="mt-2 flex gap-4 text-xs text-gray-400 md:text-sm">
              <span>{currentWallpaper?.resolution}</span>
              <span>•</span>
              <span>{currentWallpaper?.fileSize}</span>
              <span>•</span>
              <span>{currentWallpaper?.date}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative flex flex-1 items-center justify-center">
          <div className="embla mx-auto w-full max-w-7xl px-4">
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex">
                {wallpapers.map((wallpaper) => (
                  <div
                    key={wallpaper.id}
                    className="embla__slide min-w-0 flex-[0_0_100%]"
                  >
                    <div className="flex h-full items-center justify-center p-4">
                      <img
                        src={wallpaper.url}
                        alt={wallpaper.title}
                        className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Previous wallpaper"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Next wallpaper"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between bg-gradient-to-t from-black/50 to-transparent p-4 md:p-6">
          <div className="flex gap-2">
            {wallpapers.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-white"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to wallpaper ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => handleDownload(currentWallpaper)}
              className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download</span>
            </button>

            <button
              onClick={() => {
                const img = document.querySelector(
                  ".embla__slide img",
                ) as HTMLImageElement;
                if (img?.requestFullscreen) {
                  img.requestFullscreen();
                }
              }}
              className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <Maximize2 className="h-4 w-4" />
              <span className="hidden sm:inline">Fullscreen</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
