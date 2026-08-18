"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type TouchEvent,
} from "react";

interface SliderProps {
  children: ReactNode;
  currentIndex: number;
  isMobile: boolean;
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export default function Slider({
  children,
  currentIndex,
  isMobile,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
}: SliderProps) {
  const touchStartX = useRef<number | null>(null);
  const [slideOffset, setSlideOffset] = useState(0);

  const offset = currentIndex * 100;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSlideOffset(0);
  }, [currentIndex]);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (!isMobile) return;
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (!isMobile || touchStartX.current === null) return;

    const deltaX = event.touches[0].clientX - touchStartX.current;
    setSlideOffset(deltaX);
  };

  const handleTouchEnd = () => {
    if (!isMobile || touchStartX.current === null) return;

    const deltaX = slideOffset;
    touchStartX.current = null;

    if (deltaX < -60 && hasNext) {
      onNext();
    } else if (deltaX > 60 && hasPrev) {
      onPrev();
    }

    setSlideOffset(0);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-[#eadcc9] bg-[#f7f1ea] p-3 md:p-4">
        <div
          className="flex items-stretch transition-transform duration-500 ease-out will-change-transform"
          style={{
            transform: `translateX(-${offset}%)`,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          {children}
        </div>
      </div>

      {!isMobile && hasPrev && (
        <button
          type="button"
          onClick={onPrev}
          aria-label="Anterior"
          className="absolute left-[-25px] top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#d8c4ad] bg-white text-xl text-[#2b1d1a] shadow-lg transition hover:bg-[#f3e9df] md:flex md:left-2"
        >
          ←
        </button>
      )}

      {!isMobile && hasNext && (
        <button
          type="button"
          onClick={onNext}
          aria-label="Siguiente"
          className="absolute right-[-25px] top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#2b1d1a] text-xl text-[#f5eadf] shadow-lg transition hover:bg-[#3a2a27] md:flex md:right-2"
        >
          →
        </button>
      )}
    </div>
  );
}
