import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import neighborhoodImage from "@/assets/neighborhood-1.jpg";
import condoImage from "@/assets/condo-building.jpg";
import renovationImage from "@/assets/renovation.jpg";

const posts = [
  {
    title: "2024 Real Estate Market Trends: What Buyers Need to Know",
    excerpt: "A comprehensive analysis of current market conditions, pricing trends, and opportunities for savvy buyers in today's competitive landscape.",
    category: "Market Trends",
    author: "Alexandra Reed",
    date: "December 20, 2024",
    readTime: "8 min read",
    image: condoImage,
    slug: "2024-market-trends",
  },
  {
    title: "First-Time Homebuyer's Complete Guide",
    excerpt: "Everything you need to know about purchasing your first home, from saving for a down payment to closing day preparation.",
    category: "Buying Tips",
    author: "Marcus Chen",
    date: "December 15, 2024",
    readTime: "12 min read",
    image: neighborhoodImage,
    slug: "first-time-buyer-guide",
  },
  {
    title: "Top 5 Renovations That Maximize Home Value",
    excerpt: "Discover which home improvements deliver the best return on investment and how to prioritize your renovation budget.",
    category: "Renovations",
    author: "David Thompson",
    date: "December 10, 2024",
    readTime: "6 min read",
    image: renovationImage,
    slug: "renovations-roi",
  },
  {
    title: "The Ultimate Home Selling Checklist",
    excerpt: "A step-by-step guide to preparing your home for sale, from decluttering to staging and everything in between.",
    category: "Selling Tips",
    author: "Sophia Williams",
    date: "December 5, 2024",
    readTime: "7 min read",
    image: neighborhoodImage,
    slug: "selling-checklist",
  },
  {
    title: "Understanding Rental Market Dynamics",
    excerpt: "An in-depth look at the rental market, including trends, pricing strategies, and tips for both landlords and tenants.",
    category: "Rentals",
    author: "Marcus Chen",
    date: "November 28, 2024",
    readTime: "9 min read",
    image: condoImage,
    slug: "rental-market-dynamics",
  },
  {
    title: "Relocating for Work: A Comprehensive Planning Guide",
    excerpt: "Expert advice on managing a job-related move, including timeline planning, housing search, and family considerations.",
    category: "Relocation",
    author: "Alexandra Reed",
    date: "November 20, 2024",
    readTime: "10 min read",
    image: neighborhoodImage,
    slug: "relocation-planning",
  },
];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
              Blog & Insights
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
              Real Estate Insights & Tips
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
              Expert advice, market trends, and valuable tips to guide your property decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12 bg-background">
        <div className="container-custom">
          <Link to={`/blog/${posts[0].slug}`} className="group">
            <div className="glass-card overflow-hidden hover-lift animate-fade-up opacity-0" style={{ animationDelay: "400ms" }}>
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={posts[0].image}
                    alt={posts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                    {posts[0].category}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 group-hover:text-muted-foreground transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {posts[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {posts[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {posts[0].readTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-background-secondary pt-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, index) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group animate-fade-up opacity-0"
                style={{ animationDelay: `${100 + index * 100}ms` }}
              >
                <div className="glass-card overflow-hidden hover-lift h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-foreground">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-muted-foreground transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="glass-card p-10 md:p-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Never Miss an Update
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Subscribe to our newsletter for the latest market insights, property tips, and exclusive listings.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 glass-input px-5 py-3 text-foreground placeholder:text-muted-foreground outline-none"
              />
              <Button variant="glassPrimary" size="lg" className="gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
