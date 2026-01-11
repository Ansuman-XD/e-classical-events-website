import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul Sharma",
    event: "Wedding Ceremony",
    quote: "E Classical Event transformed our wedding into a fairytale. Every detail was perfect, from the traditional mandap to the reception décor. They truly understood our vision.",
    rating: 5,
  },
  {
    id: 2,
    name: "Arun Mehta",
    event: "Corporate Annual Meet",
    quote: "Professional, creative, and incredibly organized. Our company's annual event was executed flawlessly. The team's attention to detail was remarkable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lakshmi Venkatesh",
    event: "Daughter's Engagement",
    quote: "The cultural sensitivity and elegance they brought to our daughter's engagement was beyond expectations. Every guest was impressed by the beautiful arrangements.",
    rating: 5,
  },
  {
    id: 4,
    name: "Deepak & Family",
    event: "Parents' 50th Anniversary",
    quote: "A truly memorable celebration for our parents. E Classical Event created a beautiful blend of traditional and modern elements that our entire family loved.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm tracking-[0.3em] font-sans uppercase">
              Testimonials
            </span>
            <span className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Words from Our <span className="text-gradient-gold">Cherished Clients</span>
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />

            {/* Testimonial Content */}
            <div
              className={`transition-all duration-500 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <p className="text-lg md:text-xl text-foreground/80 font-sans leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl font-serif font-bold text-primary">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-muted-foreground font-sans">
                    {testimonials[currentIndex].event}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-background shadow-elegant flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-background shadow-elegant flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
