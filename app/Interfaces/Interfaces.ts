export interface Review {
  name: string;
  rating: number;
  text?: {
    text: string;
    languageCode?: string;
  };
  originalText?: {
    text: string;
    languageCode?: string;
  };
  relativePublishTimeDescription?: string;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
}

export interface GoogleReviewsData {
  id?: string;
  name?: string;
  rating?: number;
  totalReviews?: number;
  googleMapsUri?: string;
  reviews: Review[];
}
