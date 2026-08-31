"use client";

import { Review } from "@/app/Interfaces/Interfaces";
import Slider from "../Slider/Slider";
import ReviewCard from "../Review/Review";
import styles from "./ReviewsSlider.module.css";

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
        <div className={styles.mobileList}>
          {reviews.map((review, idx) => (
            <div key={`${review.name}-${idx}`} className={styles.mobileSlide}>
              <div className={styles.slideCard}>
                <ReviewCard review={review} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.desktopList}>
          {reviews.map((review, idx) => (
            <div key={`${review.name}-${idx}`} className={styles.desktopCard}>
              <div className={styles.slideCard}>
                <ReviewCard review={review} />
              </div>
            </div>
          ))}
        </div>
      )}
    </Slider>
  );
}
