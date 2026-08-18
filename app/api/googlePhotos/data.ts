import { environments } from "../environments";

export async function getGalleryPhotos(): Promise<string[]> {
  const apiKey = environments.apiKey;
  const placeId = environments.placeId;

  if (!apiKey) {
    return [];
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "photos",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    const photos = data.photos ?? [];

    return photos.map((photo: { name: string }) => {
      return `https://places.googleapis.com/v1/${photo.name}/media?maxHeightPx=900&key=${apiKey}`;
    });
  } catch {
    return [];
  }
}
