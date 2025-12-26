import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Home, DollarSign, Key, Hammer, Truck, TrendingUp, CheckCircle } from "lucide-react";
import renovationImage from "@/assets/renovation.jpg";
const services = [{
  id: "buying",
  icon: Home,
  title: "Home Buying",
  subtitle: "Find Your Dream Home",
  description: "Navigate the home buying process with confidence. From initial search to final closing, we provide expert guidance every step of the way.",
  features: ["Personalized property search based on your criteria", "In-depth market analysis and pricing insights", "Expert negotiation to secure the best deal", "Coordination with inspectors, lenders, and attorneys", "Seamless closing process management"]
}, {
  id: "selling",
  icon: DollarSign,
  title: "Home Selling",
  subtitle: "Maximize Your Property's Value",
  description: "Sell your property for top dollar with strategic marketing, professional staging guidance, and skilled negotiation.",
  features: ["Strategic pricing based on comprehensive market analysis", "Professional photography and virtual tours", "Targeted marketing across premium channels", "Open house coordination and private showings", "Expert negotiation and smooth closing support"]
}, {
  id: "rentals",
  icon: Key,
  title: "Home Rentals",
  subtitle: "Residential Rental Solutions",
  description: "Whether you're looking for a short-term rental or long-term lease, we connect you with quality properties and reliable tenants.",
  features: ["Residential homes and apartment rentals", "Short-term and long-term lease options", "Tenant screening and placement services", "Landlord representation and property marketing", "Ideal for professionals, families, and relocating individuals"]
}, {
  id: "renovations",
  icon: Hammer,
  title: "Home Renovations",
  subtitle: "Value-Boosting Improvements",
  description: "Transform your property with strategic renovations that increase value and appeal. We guide you from planning to completion.",
  features: ["Renovation planning and consultation", "ROI-focused improvement recommendations", "Trusted contractor network and coordination", "Pre-sale renovation strategies", "Budget management and timeline oversight"],
  image: renovationImage
}, {
  id: "valuation",
  icon: TrendingUp,
  title: "Home Valuation",
  subtitle: "Know Your Property's Worth",
  description: "Get an accurate assessment of your property's market value with our comprehensive valuation service.",
  features: ["Detailed comparative market analysis", "Current market condition assessment", "Property condition evaluation", "Investment potential insights", "No-obligation valuation report"]
}];
export default function Services() {
  return <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block animate-fade-up opacity-0" style={{
            animationDelay: "100ms"
          }}>
              Our Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-up opacity-0" style={{
            animationDelay: "200ms"
          }}>
              Comprehensive Real Estate Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up opacity-0" style={{
            animationDelay: "300ms"
          }}>
              From buying your first home to maximizing investment returns, our expert team delivers personalized service at every stage of your property journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => <section key={service.id} id={service.id} className={`section-padding ${index % 2 === 0 ? "bg-background-secondary" : "bg-background"}`}>
          <div className="container-custom">
            
          </div>
        </section>)}

      {/* Relocation CTA */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="glass-card p-10 md:p-16 text-center">
            <div className="p-3 bg-secondary rounded-xl w-fit mb-4 mx-auto">
              <Truck className="w-8 h-8 text-foreground" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Relocating to a New Area?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Our comprehensive relocation services make moving to a new city stress-free. From area orientation to lifestyle matching, we've got you covered.
            </p>
            <Button variant="glassPrimary" size="xl" asChild>
              <Link to="/relocation" className="gap-2">
                Explore Relocation Services <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
}