"use client";

import { useEffect, useState } from "react";
import { GoogleReviewsData } from "../Interfaces/Interfaces";
import ReviewsSlider from "./ReviewsSlider";

interface GoogleReviewsProps {
  reviewsData: GoogleReviewsData;
}

export default function GoogleReviews({ reviewsData }: GoogleReviewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateViewport = () => setIsMobile(mediaQuery.matches);
    updateViewport();

    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const reviewItems = reviewsData?.reviews ?? [];

  const visibleCount = isMobile ? 1 : 6;
  const pages = Array.from(
    { length: Math.ceil(reviewItems.length / visibleCount) },
    (_, index) =>
      reviewItems.slice(index * visibleCount, (index + 1) * visibleCount),
  );
  const maxIndex = isMobile
    ? Math.max(0, reviewItems.length - 1)
    : Math.max(0, pages.length - 1);
  const currentPage = isMobile
    ? reviewItems
    : (pages[currentIndex] ?? pages[0] ?? []);
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
    <section id="testimonials" className="bg-[#f7f1ea] px-4 py-5 md:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl  bg-[#f7f1ea] px-4 py-8  md:px-4">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-bold text-[#2b1d1a]">
              {"Opinión de nuestros clientes"}
            </h2>

            {reviewsData && (
              <div className="text-[#5b433d]">
                <strong className="text-xl text-[#2b1d1a]">
                  {reviewsData.rating?.toFixed(1)}
                </strong>
                <span> ⭐⭐⭐⭐⭐</span>
                <span> ({reviewsData.totalReviews} reseñas)</span>
              </div>
            )}
          </div>

          <ReviewsSlider
            reviews={currentPage}
            currentIndex={currentIndex}
            isMobile={isMobile}
            hasPrev={hasPrev}
            hasNext={hasNext}
            onPrev={goToPrevPage}
            onNext={goToNextPage}
          />

          {reviewsData.googleMapsUri && (
            <a
              href={reviewsData.googleMapsUri}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-[#302217] px-5 py-3 font-medium text-[#f5eadf] transition hover:bg-[#3b2a22]"
            >
              Ver todas las reseñas en Google
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
