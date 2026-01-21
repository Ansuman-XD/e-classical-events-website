import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wedding.jpg";
import corporateImage from "@/assets/corporate-event.jpg";
import culturalImage from "@/assets/cultural-event.jpg";
import privateImage from "@/assets/private-celebration.jpg";
import engagementImage from "@/assets/engagement-event.jpg";
import decorImage from "@/assets/decor-lighting.jpg";

const blogPosts = [
  {
    id: 1,
    slug: "traditional-wedding-planning-guide",
    title: "The Ultimate Guide to Traditional Indian Wedding Planning",
    excerpt: "Discover the essential elements of planning a beautiful traditional Indian wedding, from mehendi ceremonies to the grand reception.",
    image: heroImage,
    author: "Priya Sharma",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "Weddings",
  },
  {
    id: 2,
    slug: "corporate-event-trends-2024",
    title: "Top Corporate Event Trends for 2024",
    excerpt: "Stay ahead of the curve with the latest trends in corporate events, from hybrid experiences to sustainable practices.",
    image: corporateImage,
    author: "Arun Mehta",
    date: "January 10, 2024",
    readTime: "6 min read",
    category: "Corporate",
  },
  {
    id: 3,
    slug: "classical-music-events",
    title: "Incorporating Classical Music into Your Celebration",
    excerpt: "Learn how to weave the beauty of classical Indian music into your events for an unforgettable cultural experience.",
    image: culturalImage,
    author: "Lakshmi Venkatesh",
    date: "January 5, 2024",
    readTime: "5 min read",
    category: "Cultural",
  },
  {
    id: 4,
    slug: "intimate-celebration-ideas",
    title: "Creating Meaningful Intimate Celebrations",
    excerpt: "Smaller gatherings can be just as impactful. Explore ideas for creating memorable intimate celebrations with your loved ones.",
    image: privateImage,
    author: "Deepak Nair",
    date: "December 28, 2023",
    readTime: "4 min read",
    category: "Private Events",
  },
  {
    id: 5,
    slug: "engagement-ceremony-tips",
    title: "Planning the Perfect Engagement Ceremony",
    excerpt: "Your engagement marks the beginning of a beautiful journey. Here's how to make it truly special and memorable.",
    image: engagementImage,
    author: "Priya Sharma",
    date: "December 20, 2023",
    readTime: "7 min read",
    category: "Weddings",
  },
  {
    id: 6,
    slug: "event-decor-lighting-guide",
    title: "The Art of Event Décor and Lighting",
    excerpt: "Transform any venue into a magical space with our expert tips on décor themes and lighting techniques.",
    image: decorImage,
    author: "Arun Mehta",
    date: "December 15, 2023",
    readTime: "6 min read",
    category: "Décor",
  },
];

const categories = ["All", "Weddings", "Corporate", "Cultural", "Private Events", "Décor"];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-12 h-px bg-primary" />
                <span className="text-primary text-sm tracking-[0.3em] font-sans uppercase">
                  Our Blog
                </span>
                <span className="w-12 h-px bg-primary" />
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Event Planning <span className="text-gradient-gold">Insights</span>
              </h1>
              <p className="text-muted-foreground font-sans text-lg">
                Discover tips, trends, and inspiration for creating unforgettable celebrations.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-sans transition-all duration-300 ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-primary/10 text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-2xl group">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-sans rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-sans rounded-full">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground leading-tight">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground font-sans text-lg leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <Button variant="gold" className="group gap-2">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-10">
              Latest Articles
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {blogPosts.slice(1).map((post) => (
                <article
                  key={post.id}
                  className="bg-card rounded-xl overflow-hidden shadow-card hover-lift group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-background/90 text-foreground text-xs font-sans rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 md:p-6 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h4 className="text-lg font-serif font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-primary text-sm font-sans group-hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline-gold" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-secondary-foreground mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-secondary-foreground/80 font-sans mb-8">
                Get the latest event planning tips and inspiration delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="gold">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
