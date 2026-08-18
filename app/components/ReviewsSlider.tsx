"use client";

import { Review } from "../Interfaces/Interfaces";
import ReviewCard from "./Review/Review";
import Slider from "./Slider/Slider";

interface ReviewsSliderProps {
  reviews: Review[];
  currentIndex: number;
  isMobile: boolean;
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export default function ReviewsSlider({
  reviews,
  currentIndex,
  isMobile,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
}: ReviewsSliderProps) {
  return (
    <Slider
      currentIndex={currentIndex}
      isMobile={isMobile}
      hasPrev={hasPrev}
      hasNext={hasNext}
      onPrev={onPrev}
      onNext={onNext}
    >
      {isMobile ? (
        <div className="flex w-full">
          {reviews.map((review, idx) => (
            <div
              key={`${review.name}-${idx}`}
              className="w-full flex-shrink-0 px-0"
            >
              <div className="h-full rounded-2xl border border-[#eadcc9] bg-[#fffaf7] p-4 shadow-sm">
                <ReviewCard review={review} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid w-full grid-cols-3 gap-[10px]">
          {reviews.map((review, idx) => (
            <div key={`${review.name}-${idx}`} className="h-full">
              <div className="h-full rounded-2xl border border-[#eadcc9] bg-[#fffaf7] p-4 shadow-sm">
                <ReviewCard review={review} />
              </div>
            </div>
          ))}
        </div>
      )}
    </Slider>
  );
}
