import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import weddingImage from "@/assets/hero-wedding.jpg";
import corporateImage from "@/assets/corporate-event.jpg";
import culturalImage from "@/assets/cultural-event.jpg";
import privateImage from "@/assets/private-celebration.jpg";
import engagementImage from "@/assets/engagement-event.jpg";
import decorImage from "@/assets/decor-lighting.jpg";

const categories = [
  { id: "all", label: "All Events" },
  { id: "wedding", label: "Weddings" },
  { id: "corporate", label: "Corporate" },
  { id: "cultural", label: "Cultural" },
  { id: "private", label: "Private" },
];

const galleryItems = [
  { id: 1, image: weddingImage, category: "wedding", title: "Royal Palace Wedding", location: "Jaipur, Rajasthan" },
  { id: 2, image: corporateImage, category: "corporate", title: "Tech Summit 2024", location: "Bangalore, Karnataka" },
  { id: 3, image: culturalImage, category: "cultural", title: "Classical Dance Festival", location: "Chennai, Tamil Nadu" },
  { id: 4, image: privateImage, category: "private", title: "Golden Anniversary", location: "Mumbai, Maharashtra" },
  { id: 5, image: engagementImage, category: "wedding", title: "Garden Engagement", location: "Udaipur, Rajasthan" },
  { id: 6, image: decorImage, category: "wedding", title: "Floral Dream Wedding", location: "Delhi NCR" },
  { id: 7, image: corporateImage, category: "corporate", title: "Product Launch Gala", location: "Hyderabad, Telangana" },
  { id: 8, image: culturalImage, category: "cultural", title: "Diwali Celebration", location: "Pune, Maharashtra" },
  { id: 9, image: privateImage, category: "private", title: "Milestone Birthday", location: "Goa" },
  { id: 10, image: weddingImage, category: "wedding", title: "Traditional Ceremony", location: "Kochi, Kerala" },
  { id: 11, image: engagementImage, category: "wedding", title: "Sangeet Night", location: "Ahmedabad, Gujarat" },
  { id: 12, image: decorImage, category: "cultural", title: "Music Concert", location: "Kolkata, West Bengal" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const selectedItem = galleryItems.find((item) => item.id === selectedImage);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-12 h-px bg-primary" />
                <span className="text-primary text-sm tracking-[0.3em] font-sans uppercase">
                  Portfolio
                </span>
                <span className="w-12 h-px bg-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                Our <span className="text-gradient-gold">Event Gallery</span>
              </h1>
              <p className="text-lg text-muted-foreground font-sans">
                A showcase of our most memorable celebrations and the artistry behind each event.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-sans text-sm transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-elegant"
                      : "bg-muted text-muted-foreground hover:bg-primary/10"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedImage(item.id)}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3] text-left"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-primary-foreground/80 font-sans">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent rounded-b-lg">
                <h3 className="text-2xl font-serif font-semibold text-primary-foreground mb-1">
                  {selectedItem.title}
                </h3>
                <p className="text-primary-foreground/80 font-sans">
                  {selectedItem.location}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-foreground mb-6">
              Ready to Create Your Own Story?
            </h2>
            <p className="text-secondary-foreground/80 font-sans mb-8 max-w-xl mx-auto">
              Let us bring the same level of elegance and creativity to your special event.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="xl">
                Start Planning
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
