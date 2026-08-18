
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f1ea] text-[#2b1d1a]">
      {/* Navigation */}
      <Header/>
      {/* Hero Section */}
      
      <HeroSection/>

      {/* Services Section */}
      
      <Services/>

      {/* Gallery Section */}
      <Gallery/>

      {/* Testimonials Section */}
      
      <Testimonials/>

      {/* Contact Section */}
      <Contact/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}
