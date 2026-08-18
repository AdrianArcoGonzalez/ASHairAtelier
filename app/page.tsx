import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoogleReviews from "./components/GoogleReviews";
import { getGalleryPhotos } from "./api/googlePhotos/data";
import { getGoogleReviews } from "./api/googleReviews/data";

export default async function Home() {
  const galleryPhotos = await getGalleryPhotos();
  const reviewsData = await getGoogleReviews();
  return (
    <div className="min-h-screen bg-[#f7f1ea] text-[#2b1d1a]">
      <Header />

      <HeroSection />

      <Services />

      <Gallery photos={galleryPhotos} />

      <GoogleReviews reviewsData={reviewsData!} />

      <Contact />

      <Footer />
    </div>
  );
}
