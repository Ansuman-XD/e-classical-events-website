import { Phone, MessageCircle } from "lucide-react";

const MobileCTA = () => {
  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in planning an event with E Classical Event. Please share more details."
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-elegant">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href="tel:+919876543210"
          className="flex items-center justify-center gap-2 py-3 px-4 bg-primary text-primary-foreground rounded-lg font-sans font-medium text-sm transition-transform active:scale-95"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] text-white rounded-lg font-sans font-medium text-sm transition-transform active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default MobileCTA;
