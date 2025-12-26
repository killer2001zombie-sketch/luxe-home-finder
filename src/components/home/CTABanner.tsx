import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 md:py-32 bg-background-secondary">
      <div className="container-custom">
        <div className="glass-card p-10 md:p-16 text-center animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Your Property Journey Starts Here
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Whether you're buying, selling, renting, or renovating, our team is ready to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="glassPrimary" size="xl" asChild>
              <Link to="/contact" className="gap-2">
                Contact Us Today <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="glassOutline" size="xl" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
