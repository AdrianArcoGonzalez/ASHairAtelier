import { NextResponse } from "next/server";
import { getGoogleReviews } from "./data";

export async function GET() {
  try {
    const reviews = await getGoogleReviews();

    if (!reviews) {
      return NextResponse.json(
        { error: "Error retrieving Google reviews" },
        { status: 500 },
      );
    }

    return NextResponse.json(reviews);
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
