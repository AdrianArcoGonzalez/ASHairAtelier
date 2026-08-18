import { NextResponse } from 'next/server'
import { getGalleryPhotos } from './data'

export async function GET() {
  try {
    const photos = await getGalleryPhotos()

    return NextResponse.json({ photos })
  } catch {
    return NextResponse.json({ photos: [] }, { status: 500 })
  }
}
