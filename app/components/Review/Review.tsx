import { Review } from "@/app/Interfaces/Interfaces";
import styles from "./Review.module.css";

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <article className={styles.reviewCard}>
      <div className={styles.stars}>{"★".repeat(review.rating)}</div>

      <p className={styles.text}>
        "
        {review.originalText?.text ??
          review.text?.text ??
          "Excelente atención y profesionalidad."}
        "
      </p>

      <p className={styles.author}>
        {review.authorAttribution?.displayName ?? review.name}
      </p>
    </article>
  );
};

export default ReviewCard;
