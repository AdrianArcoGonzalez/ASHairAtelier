import { Review } from "@/app/Interfaces/Interfaces";
import Image from "next/image";

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <article
      key={`${review.name}-${review.rating}`}
      className="rounded-2xl border border-[#eadcc9] bg-[#fffaf7] p-4 shadow-sm"
    >
      <div className="mb-4 flex items-center gap-3">
        {review.authorAttribution?.photoUri && (
          <Image
            src={review.authorAttribution.photoUri}
            alt={review.authorAttribution.displayName ?? "Usuario"}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
            loading="lazy"
          />
        )}

        <strong className="text-[#2b1d1a]">
          {review.authorAttribution?.displayName ?? review.name}
        </strong>
      </div>

      <div className="mb-2 text-[#c79a5a]">{"⭐".repeat(review.rating)}</div>

      <p className="text-[#5b433d] italic">
        “
        {review.originalText?.text ??
          review.text?.text ??
          "Excelente atención y profesionalidad."}
        ”
      </p>

      <div className="mt-4 flex items-center justify-between text-xs text-[#7a5f4f]">
        <span>{review.relativePublishTimeDescription}</span>
        <span>{/* {pageIndex * pageSize + idx + 1}/{reviews.length} */}</span>
      </div>
    </article>
  );
};

export default ReviewCard;
