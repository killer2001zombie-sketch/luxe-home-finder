import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, DollarSign, Key, Hammer, Truck, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Home Buying",
    description: "Expert guidance through the entire home buying process with personalized property searches.",
    path: "/services#buying",
  },
  {
    icon: DollarSign,
    title: "Home Selling",
    description: "Strategic marketing and pricing to maximize your property's value and reach the right buyers.",
    path: "/services#selling",
  },
  {
    icon: Key,
    title: "Home Rentals",
    description: "Comprehensive rental services for both residential homes and apartments, short or long-term.",
    path: "/services#rentals",
  },
  {
    icon: Hammer,
    title: "Renovations",
    description: "Value-boosting renovation guidance and contractor coordination for your property.",
    path: "/services#renovations",
  },
  {
    icon: Truck,
    title: "Relocation",
    description: "Seamless relocation support with area orientation and lifestyle matching services.",
    path: "/relocation",
  },
  {
    icon: TrendingUp,
    title: "Home Valuation",
    description: "Accurate market pricing and comprehensive property valuations for informed decisions.",
    path: "/services#valuation",
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
            Complete Real Estate Solutions
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
            From buying your first home to managing investment properties, we provide comprehensive services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.path}
              className="glass-card p-6 md:p-8 hover-lift group animate-fade-up opacity-0"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="p-3 bg-secondary rounded-xl w-fit mb-4 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up opacity-0" style={{ animationDelay: "1000ms" }}>
          <Button variant="glass" size="lg" asChild>
            <Link to="/services" className="gap-2">
              Explore All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
