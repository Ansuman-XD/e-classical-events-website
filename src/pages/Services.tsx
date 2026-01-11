import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Building2, Music, PartyPopper, Palette } from "lucide-react";
import weddingImage from "@/assets/hero-wedding.jpg";
import engagementImage from "@/assets/engagement-event.jpg";
import corporateImage from "@/assets/corporate-event.jpg";
import culturalImage from "@/assets/cultural-event.jpg";
import privateImage from "@/assets/private-celebration.jpg";
import decorImage from "@/assets/decor-lighting.jpg";

const services = [
  {
    id: "wedding",
    icon: Heart,
    title: "Wedding & Traditional Ceremonies",
    description: "Your wedding day deserves nothing less than perfection. From the sacred rituals to the grand reception, we orchestrate every moment with precision and grace. Our team specializes in both traditional ceremonies and contemporary celebrations, ensuring your union is marked with elegance and joy.",
    features: [
      "Complete wedding coordination",
      "Traditional ceremony arrangements",
      "Reception planning & execution",
      "Guest management",
      "Vendor coordination",
    ],
    image: weddingImage,
  },
  {
    id: "engagement",
    icon: Sparkles,
    title: "Pre-Wedding & Engagement Events",
    description: "Celebrate the journey to your wedding with unforgettable pre-wedding events. From romantic engagement ceremonies to vibrant sangeet and mehendi celebrations, we create magical moments that build anticipation for your special day.",
    features: [
      "Engagement ceremonies",
      "Sangeet & mehendi events",
      "Haldi ceremonies",
      "Bachelor/Bachelorette parties",
      "Pre-wedding shoots coordination",
    ],
    image: engagementImage,
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate & Brand Activations",
    description: "Elevate your corporate presence with expertly planned business events. Whether it's an annual conference, product launch, or team celebration, we deliver professional excellence with creative flair that reflects your brand's values.",
    features: [
      "Corporate conferences",
      "Product launches",
      "Award ceremonies",
      "Team building events",
      "Brand activations",
    ],
    image: corporateImage,
  },
  {
    id: "cultural",
    icon: Music,
    title: "Classical & Cultural Events",
    description: "Preserve and celebrate our rich heritage with authentically curated cultural events. From classical music concerts to traditional festivals, we bring the essence of Indian culture to life with respect and artistic excellence.",
    features: [
      "Classical music concerts",
      "Dance performances",
      "Religious ceremonies",
      "Festival celebrations",
      "Cultural exhibitions",
    ],
    image: culturalImage,
  },
  {
    id: "private",
    icon: PartyPopper,
    title: "Birthday, Anniversary & Private Parties",
    description: "Mark life's precious milestones with celebrations as unique as the moments they honor. From intimate gatherings to grand parties, we create personalized experiences that create lasting memories for you and your loved ones.",
    features: [
      "Birthday celebrations",
      "Anniversary parties",
      "Baby showers",
      "Reunion gatherings",
      "Themed parties",
    ],
    image: privateImage,
  },
  {
    id: "decor",
    icon: Palette,
    title: "Décor, Lighting & Event Styling",
    description: "Transform any venue into a breathtaking setting with our expert décor and styling services. We combine artistic vision with technical expertise to create atmospheres that captivate guests and elevate your event to extraordinary heights.",
    features: [
      "Floral arrangements",
      "Stage & backdrop design",
      "Lighting design",
      "Table settings",
      "Theme development",
    ],
    image: decorImage,
  },
];

const Services = () => {
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
                  Our Services
                </span>
                <span className="w-12 h-px bg-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                Exceptional Events, <span className="text-gradient-gold">Tailored for You</span>
              </h1>
              <p className="text-lg text-muted-foreground font-sans">
                From intimate celebrations to grand gatherings, we bring precision, creativity, and elegance to every occasion.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-elegant w-full aspect-[4/3] object-cover"
                    />
                    <div
                      className={`absolute -bottom-6 ${
                        index % 2 === 1 ? "-left-6" : "-right-6"
                      } w-48 h-48 border-2 border-primary rounded-lg -z-10`}
                    />
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground font-sans leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-foreground/80 font-sans text-sm"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button variant="gold" size="lg" className="mt-4">
                        Plan This Event
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-foreground mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-secondary-foreground/80 font-sans mb-8 max-w-xl mx-auto">
              We specialize in custom events tailored to your unique vision. Let's discuss your requirements.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="xl">
                Get a Custom Quote
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
