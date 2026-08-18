"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "./Slider/Slider";

interface GalleryProps {
  photos: string[];
}

export default function Gallery({ photos }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateViewport = () => setIsMobile(mediaQuery.matches);
    updateViewport();

    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const visibleCount = isMobile ? 1 : 6;
  const pages = Array.from(
    { length: Math.ceil(photos.length / visibleCount) },
    (_, index) =>
      photos.slice(index * visibleCount, (index + 1) * visibleCount),
  );
  const maxIndex = Math.max(0, pages.length - 1);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < maxIndex;

  const goToPrevPage = () => {
    if (!hasPrev) return;
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToNextPage = () => {
    if (!hasNext) return;
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section id="gallery" className="bg-[#efe2d5] px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-center text-sm uppercase tracking-[0.35em] text-[#734f42]">
          Galería
        </p>
        <h2 className="mb-16 text-center text-4xl font-bold text-[#2b1d1a]"></h2>

        <Slider
          currentIndex={currentIndex}
          isMobile={isMobile}
          hasPrev={hasPrev}
          hasNext={hasNext}
          onPrev={goToPrevPage}
          onNext={goToNextPage}
        >
          {pages.map((page, pageIndex) => (
            <div
              key={`gallery-page-${pageIndex}`}
              className="w-full flex-shrink-0"
            >
              <div
                className={
                  isMobile
                    ? "flex w-full"
                    : "grid w-full grid-cols-3 gap-[18px]"
                }
              >
                {page.map((photo, index) => (
                  <div
                    key={`${photo}-${pageIndex}-${index}`}
                    className={
                      isMobile
                        ? "h-80 w-full flex-shrink-0 overflow-hidden rounded-[28px] border border-[#d8c4ad] shadow-[0_18px_40px_rgba(69,48,41,0.10)]"
                        : "h-[280px] overflow-hidden rounded-[28px] border border-[#d8c4ad] shadow-[0_18px_40px_rgba(69,48,41,0.10)]"
                    }
                  >
                    <Image
                      src={photo}
                      alt={`Foto del local ${pageIndex * visibleCount + index + 1}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      height={350}
                      width={350}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
