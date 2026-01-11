import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <span className="text-2xl font-serif font-bold text-gold-light">
                E Classical
              </span>
              <span className="block text-xs font-sans tracking-[0.3em] text-secondary-foreground/70 uppercase">
                Event
              </span>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Crafting timeless celebrations with classical elegance. Where tradition meets flawless execution.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-light">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/services", label: "Services" },
                { path: "/gallery", label: "Gallery" },
                { path: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/80 hover:text-gold-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-light">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Wedding Planning",
                "Corporate Events",
                "Cultural Events",
                "Private Celebrations",
                "Décor & Styling",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-secondary-foreground/80 hover:text-gold-light transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-light">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  123 Royal Plaza, MG Road,<br />
                  Bangalore, Karnataka 560001
                </span>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-secondary-foreground/80 hover:text-gold-light transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@eclassicalevent.com"
                  className="flex items-center gap-3 text-secondary-foreground/80 hover:text-gold-light transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  info@eclassicalevent.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>© {currentYear} E Classical Event. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold-light transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold-light transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
