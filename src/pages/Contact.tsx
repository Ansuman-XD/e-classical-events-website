import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in planning an event with E Classical Event. Please share more details."
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build WhatsApp message with form data
    const inquiryMessage = `🎉 *New Event Inquiry*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Event Type:* ${formData.eventType}
*Event Date:* ${formData.eventDate || "Not specified"}

*Message:*
${formData.message}`;

    const encodedMessage = encodeURIComponent(inquiryMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp with the inquiry
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp!",
      description: "Complete your inquiry on WhatsApp.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      eventType: "",
      eventDate: "",
      message: "",
    });
    setIsSubmitting(false);
  };

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
                  Get in Touch
                </span>
                <span className="w-12 h-px bg-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                Let's Plan Your <span className="text-gradient-gold">Dream Event</span>
              </h1>
              <p className="text-lg text-muted-foreground font-sans">
                Reach out to discuss your vision. We're here to make it extraordinary.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground font-sans mb-8">
                    We'd love to hear from you. Reach out through any of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  <a
                    href="tel:+919876543210"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-foreground">
                        Phone
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        +91 98765 43210
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@eclassicalevent.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-foreground">
                        Email
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        info@eclassicalevent.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-foreground">
                        Address
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        123 Royal Plaza, MG Road,<br />
                        Bangalore, Karnataka 560001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-foreground">
                        Business Hours
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Mon - Sat: 10:00 AM - 7:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="lg" className="w-full gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card p-8 md:p-12 rounded-lg shadow-elegant">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                    Send Us an Inquiry
                  </h2>
                  <p className="text-muted-foreground font-sans mb-8">
                    Fill out the form and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-sans font-medium text-foreground">
                          Your Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-sans font-medium text-foreground">
                          Phone Number *
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX"
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-sans font-medium text-foreground">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-sans font-medium text-foreground">
                          Event Type *
                        </label>
                        <Select
                          value={formData.eventType}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, eventType: value }))
                          }
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="engagement">Engagement</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="cultural">Cultural Event</SelectItem>
                            <SelectItem value="birthday">Birthday Party</SelectItem>
                            <SelectItem value="anniversary">Anniversary</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-sans font-medium text-foreground">
                        Tentative Event Date
                      </label>
                      <Input
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-sans font-medium text-foreground">
                        Tell Us About Your Event *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Share your vision, guest count, venue preferences, or any specific requirements..."
                        rows={5}
                        required
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="gold"
                      size="xl"
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 bg-muted relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985619587854!2d77.59456571482222!3d12.971598990855582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="E Classical Event Location"
          />
        </section>
      </main>
      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border lg:hidden z-40">
        <div className="flex gap-3">
          <a href="tel:+919876543210" className="flex-1">
            <Button variant="gold" className="w-full gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="whatsapp" className="w-full gap-2">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
