import { GoogleReviewsData } from "@/app/Interfaces/Interfaces";
import { environments } from "../environments";

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = environments.apiKey;
  const placeId = environments.placeId;

  if (!apiKey || !placeId) {
    return null;
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "id,displayName,rating,userRatingCount,reviews,googleMapsUri",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    return {
      id: data.id,
      name: data.displayName?.text,
      rating: data.rating,
      totalReviews: data.userRatingCount,
      googleMapsUri: data.googleMapsUri,
      reviews: data.reviews ?? [],
    };
  } catch {
    return null;
  }
}
