import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in planning an event with E Classical Event. Please share more details."
  );

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Ornamental Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-primary/50" />
            <span className="text-primary text-sm tracking-[0.3em] font-sans uppercase">
              Let's Begin
            </span>
            <span className="w-12 h-px bg-primary/50" />
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary-foreground mb-6">
            Let's Design an Event{" "}
            <span className="text-gradient-gold">Worth Remembering</span>
          </h2>

          <p className="text-secondary-foreground/80 font-sans mb-10 max-w-xl mx-auto">
            Ready to create something extraordinary? Connect with our expert planners and let's bring your vision to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+919876543210">
              <Button variant="gold" size="xl" className="gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="xl" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline-gold" size="xl">
                Send Inquiry
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
