"use client";

import { GoogleReviewsData } from "../../Interfaces/Interfaces";
import ReviewCard from "../Review/Review";
import styles from "./GoogleReviews.module.css";

interface GoogleReviewsProps {
  reviewsData: GoogleReviewsData;
}

export default function GoogleReviews({ reviewsData }: GoogleReviewsProps) {
  const reviewItems = reviewsData?.reviews ?? [];
  const displayReviews = reviewItems.slice(0, 3);

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Experiencias</h2>

        <div className={styles.ratingBlock}>
          <div className={styles.ratingNumber}>
            {reviewsData.rating?.toFixed(1) || "5.0"}
          </div>
          <div className={styles.stars}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.reviewsGrid}>
          {displayReviews.map((review, idx) => (
            <ReviewCard key={`${review.name}-${idx}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
