import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxurious wedding ceremony"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border border-primary/20 rounded-full animate-float delay-500 opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Ornamental Line */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <span className="w-16 h-px bg-primary/50" />
            <span className="text-primary text-sm tracking-[0.3em] font-sans uppercase">
              Premium Event Planners
            </span>
            <span className="w-16 h-px bg-primary/50" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Crafting Timeless Celebrations with{" "}
            <span className="text-gradient-gold">Classical Elegance</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 font-sans mb-10 animate-fade-in-up delay-200 max-w-2xl mx-auto">
            Where tradition meets flawless execution. We transform your dreams into extraordinary celebrations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Book Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl">
                Get a Custom Quote
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up delay-400">
            {[
              { number: "500+", label: "Events Executed" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-primary-foreground/70 font-sans">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
