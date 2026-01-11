import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import GalleryPreview from "@/components/GalleryPreview";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesPreview />
        <GalleryPreview />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
