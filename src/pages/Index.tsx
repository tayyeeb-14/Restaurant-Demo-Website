import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SignatureDishes from "@/components/SignatureDishes";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ReservationSection from "@/components/ReservationSection";
import OrderSection from "@/components/OrderSection";
import LocationSection from "@/components/LocationSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SignatureDishes />
      <GallerySection />
      <ReviewsSection />
      <ReservationSection />
      <OrderSection />
      <LocationSection />
      <FooterSection />
    </div>
  );
};

export default Index;
