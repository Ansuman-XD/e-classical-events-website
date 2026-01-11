import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Users, Clock } from "lucide-react";
import decorImage from "@/assets/decor-lighting.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Every event is crafted with love and dedication to perfection.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We set the highest standards in event planning and execution.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients to bring their vision to life.",
  },
  {
    icon: Clock,
    title: "Precision",
    description: "Meticulous attention to every timeline and detail.",
  },
];

const About = () => {
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
                  About Us
                </span>
                <span className="w-12 h-px bg-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                The Art of <span className="text-gradient-gold">Classical Elegance</span>
              </h1>
              <p className="text-lg text-muted-foreground font-sans">
                Where tradition meets innovation, and every celebration becomes a masterpiece.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={decorImage}
                  alt="Elegant event setup"
                  className="rounded-lg shadow-elegant"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary rounded-lg -z-10" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                  Our Story
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Founded with a vision to redefine event experiences, E Classical Event emerged from a deep appreciation for tradition and an unwavering commitment to excellence. Our journey began with a simple belief: every celebration deserves to be extraordinary.
                </p>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Over the years, we've had the privilege of crafting thousands of memorable moments – from intimate family gatherings to grand corporate galas. Each event has taught us something new, enriching our expertise and deepening our passion.
                </p>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Today, we stand as a trusted name in premium event planning, known for our attention to detail, creative vision, and seamless execution. Our team of dedicated professionals brings together diverse talents, united by a shared commitment to turning dreams into reality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-10 rounded-lg shadow-elegant">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  To deliver memorable, elegant events that exceed expectations. We combine precision planning with creative excellence to ensure every celebration is stress-free and spectacular for our clients and their guests.
                </p>
              </div>
              <div className="bg-card p-10 rounded-lg shadow-elegant">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  To become the most trusted and sought-after premium event brand, setting new standards of excellence in celebration planning. We aspire to be the first choice for discerning clients who value tradition, quality, and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Our Core Values
              </h2>
              <p className="text-muted-foreground font-sans">
                The principles that guide every event we create.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card p-8 rounded-lg shadow-card text-center hover-lift"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-sans">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-foreground mb-6">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-secondary-foreground/80 font-sans mb-8 max-w-xl mx-auto">
              Let's discuss how we can make your event truly exceptional.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="xl">
                Start Planning Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
