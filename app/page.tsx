import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GoogleReviews from "./components/GoogleReviews/GoogleReviews";
import { getGoogleReviews } from "./api/googleReviews/data";

export default async function Home() {
  const reviewsData = await getGoogleReviews();
  return (
    <div className="min-h-screen bg-[#f7f1ea] text-[#2b1d1a]">
      <Header />

      <HeroSection />

      <Services />

      <Gallery />

      <GoogleReviews reviewsData={reviewsData!} />

      <Contact />

      <Footer />
    </div>
  );
}
