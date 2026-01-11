import { Link } from "react-router-dom";
import weddingImage from "@/assets/hero-wedding.jpg";
import corporateImage from "@/assets/corporate-event.jpg";
import culturalImage from "@/assets/cultural-event.jpg";
import privateImage from "@/assets/private-celebration.jpg";
import engagementImage from "@/assets/engagement-event.jpg";
import decorImage from "@/assets/decor-lighting.jpg";

const galleryItems = [
  { id: 1, image: weddingImage, category: "Wedding", title: "Royal Wedding Ceremony" },
  { id: 2, image: corporateImage, category: "Corporate", title: "Annual Corporate Meet" },
  { id: 3, image: culturalImage, category: "Cultural", title: "Classical Dance Event" },
  { id: 4, image: privateImage, category: "Private", title: "Anniversary Celebration" },
  { id: 5, image: engagementImage, category: "Wedding", title: "Engagement Ceremony" },
  { id: 6, image: decorImage, category: "Decor", title: "Premium Stage Design" },
];

const GalleryPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm tracking-[0.3em] font-sans uppercase">
              Our Portfolio
            </span>
            <span className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Featured <span className="text-gradient-gold">Event Gallery</span>
          </h2>
          <p className="text-muted-foreground font-sans">
            A glimpse into our most memorable celebrations and extraordinary events.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Link
              key={item.id}
              to="/gallery"
              className={`group relative overflow-hidden rounded-lg ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`aspect-square ${
                  index === 0 ? "md:aspect-auto md:h-full" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-primary/80 text-primary-foreground text-xs font-sans rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-primary font-sans text-sm tracking-wide underline-elegant"
          >
            View Complete Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
