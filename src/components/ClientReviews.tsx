import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const reviews = [
  {
    id: 1,
    name: "Priya & Rahul Sharma",
    event: "Wedding Ceremony",
    location: "Bangalore",
    date: "December 2023",
    rating: 5,
    review: "E Classical Event transformed our wedding into a fairytale. Every detail was perfect, from the traditional mandap to the reception décor. They truly understood our vision and executed it flawlessly. Our guests are still talking about how beautiful everything was!",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Arun Mehta",
    event: "Corporate Annual Meet",
    location: "Mumbai",
    date: "November 2023",
    rating: 5,
    review: "Professional, creative, and incredibly organized. Our company's annual event was executed flawlessly. The team's attention to detail was remarkable. They handled everything from venue setup to entertainment, making our job stress-free.",
    avatar: "AM",
  },
  {
    id: 3,
    name: "Lakshmi Venkatesh",
    event: "Daughter's Engagement",
    location: "Chennai",
    date: "October 2023",
    rating: 5,
    review: "The cultural sensitivity and elegance they brought to our daughter's engagement was beyond expectations. Every guest was impressed by the beautiful arrangements. The classical music performance they arranged was the highlight of the evening.",
    avatar: "LV",
  },
  {
    id: 4,
    name: "Deepak & Family",
    event: "Parents' 50th Anniversary",
    location: "Delhi",
    date: "September 2023",
    rating: 5,
    review: "A truly memorable celebration for our parents. E Classical Event created a beautiful blend of traditional and modern elements that our entire family loved. The photo booth and memory wall were amazing touches!",
    avatar: "DF",
  },
  {
    id: 5,
    name: "Sneha Reddy",
    event: "Birthday Celebration",
    location: "Hyderabad",
    date: "August 2023",
    rating: 5,
    review: "My 30th birthday was nothing short of magical! The team understood exactly what I wanted - an elegant evening with a touch of glamour. The décor, the food, the music - everything was perfect. Highly recommend!",
    avatar: "SR",
  },
  {
    id: 6,
    name: "Vikram Singh",
    event: "Product Launch",
    location: "Pune",
    date: "July 2023",
    rating: 5,
    review: "Our product launch event exceeded all expectations. The team managed everything professionally, from media coordination to guest management. The setup was impressive and our brand message was beautifully communicated.",
    avatar: "VS",
  },
];

const ClientReviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    rating: 5,
    review: "",
  });
  const { toast } = useToast();
  
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const currentReviews = reviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Review Submitted!",
      description: "Thank you for sharing your experience. Your review will be published after verification.",
    });
    setIsDialogOpen(false);
    setFormData({
      name: "",
      email: "",
      eventType: "",
      rating: 5,
      review: "",
    });
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 md:w-12 h-px bg-primary" />
            <span className="text-primary text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] font-sans uppercase">
              Client Reviews
            </span>
            <span className="w-8 md:w-12 h-px bg-primary" />
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 md:mb-6">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-sans px-4">
            Real experiences from families and businesses who trusted us with their special moments.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {currentReviews.map((review) => (
            <div
              key={review.id}
              className="bg-card rounded-xl p-5 md:p-6 shadow-card hover-lift relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 md:w-10 md:h-10 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm md:text-base text-foreground/80 font-sans leading-relaxed mb-6 line-clamp-4">
                "{review.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-base font-serif font-bold text-primary">
                    {review.avatar}
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-serif font-semibold text-foreground text-sm md:text-base truncate">
                    {review.name}
                  </h4>
                  <p className="text-xs text-muted-foreground font-sans truncate">
                    {review.event} • {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Pagination Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevPage}
              className="w-10 h-10 rounded-full bg-background shadow-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentPage
                      ? "bg-primary w-6"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextPage}
              className="w-10 h-10 rounded-full bg-background shadow-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Submit Review Button */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="gold" className="w-full sm:w-auto">
                Share Your Experience
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[95vw] max-w-lg mx-auto">
              <DialogHeader>
                <DialogTitle className="font-serif text-xl md:text-2xl">
                  Share Your Review
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 mt-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="eventType">Event Type</Label>
                  <Input
                    id="eventType"
                    value={formData.eventType}
                    onChange={(e) =>
                      setFormData({ ...formData, eventType: e.target.value })
                    }
                    placeholder="Wedding, Corporate Event, etc."
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Your Rating</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, rating: star })
                        }
                        className="p-1"
                      >
                        <Star
                          className={`w-6 h-6 md:w-8 md:h-8 transition-colors ${
                            star <= formData.rating
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="review">Your Review</Label>
                  <Textarea
                    id="review"
                    value={formData.review}
                    onChange={(e) =>
                      setFormData({ ...formData, review: e.target.value })
                    }
                    placeholder="Share your experience with us..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" variant="gold" className="w-full">
                  Submit Review
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
