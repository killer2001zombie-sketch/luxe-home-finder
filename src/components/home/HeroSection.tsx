import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, DollarSign, Key, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const ctaButtons = [
  { label: "Buy a Home", icon: Home, path: "/services#buying" },
  { label: "Sell a Property", icon: DollarSign, path: "/services#selling" },
  { label: "Rent a Home", icon: Key, path: "/services#rentals" },
  { label: "Get Home Value", icon: TrendingUp, path: "/services#valuation" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury modern home at twilight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
            <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Premium Real Estate Services</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
            Find the Right Home.
            <br />
            <span className="text-muted-foreground">Make Smarter Property Decisions.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
            Buy, sell, rent, or renovate with confidence through modern real estate solutions built on trust and local expertise.
          </p>

          {/* CTA Buttons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: "400ms" }}>
            {ctaButtons.map((btn) => (
              <Link key={btn.label} to={btn.path}>
                <div className="glass-card p-4 md:p-5 hover-lift cursor-pointer group">
                  <btn.icon className="w-6 h-6 text-foreground mb-2 mx-auto group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground">{btn.label}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: "500ms" }}>
            <Button variant="glassPrimary" size="xl" asChild>
              <Link to="/contact" className="gap-2">
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="glassOutline" size="xl" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
