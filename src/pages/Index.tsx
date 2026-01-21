import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import ClientReviews from "@/components/ClientReviews";
import GalleryPreview from "@/components/GalleryPreview";
import CTASection from "@/components/CTASection";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen pb-16 lg:pb-0">
      <Header />
      <main>
        <HeroSection />
        <ServicesPreview />
        <GalleryPreview />
        <ClientReviews />
        <CTASection />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;
