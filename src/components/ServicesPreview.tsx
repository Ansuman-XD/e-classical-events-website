import { Link } from "react-router-dom";
import { Heart, Building2, Music, PartyPopper } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "Complete wedding coordination from traditional ceremonies to grand receptions.",
    image: "wedding",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Professional brand activations, conferences, and executive gatherings.",
    image: "corporate",
  },
  {
    icon: Music,
    title: "Cultural Events",
    description: "Classical performances, religious ceremonies, and cultural celebrations.",
    image: "cultural",
  },
  {
    icon: PartyPopper,
    title: "Private Celebrations",
    description: "Birthdays, anniversaries, and intimate family gatherings.",
    image: "private",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm tracking-[0.3em] font-sans uppercase">
              Our Services
            </span>
            <span className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Exceptional Events, <span className="text-gradient-gold">Timeless Memories</span>
          </h2>
          <p className="text-muted-foreground font-sans">
            From intimate gatherings to grand celebrations, we bring precision, creativity, and elegance to every event.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-lg p-8 shadow-card hover-lift text-center h-full border border-border/50">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary text-sm font-sans">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-sans text-sm tracking-wide underline-elegant"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
