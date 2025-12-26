import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import neighborhoodImage from "@/assets/neighborhood-1.jpg";
import condoImage from "@/assets/condo-building.jpg";
import communityImage from "@/assets/hero-community.jpg";

const communities = [
  {
    name: "Upper East Side",
    location: "Manhattan, NY",
    description: "Classic elegance meets modern luxury in this prestigious neighborhood.",
    image: neighborhoodImage,
    path: "/communities/upper-east-side",
  },
  {
    name: "Midtown Manhattan",
    location: "New York, NY",
    description: "The heart of the city with premium high-rise living and urban convenience.",
    image: condoImage,
    path: "/communities/midtown",
  },
  {
    name: "Coastal Paradise",
    location: "Florida",
    description: "Beachfront living with stunning ocean views and resort-style amenities.",
    image: communityImage,
    path: "/communities/coastal",
  },
];

export default function CommunitiesPreview() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
              Communities
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
              Discover Your Neighborhood
            </h2>
          </div>
          <Button variant="glass" size="lg" asChild className="animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
            <Link to="/communities" className="gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Communities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community, index) => (
            <Link
              key={community.name}
              to={community.path}
              className="group animate-fade-up opacity-0"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="glass-card overflow-hidden hover-lift">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-sm text-muted-foreground">{community.location}</span>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {community.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-sm text-muted-foreground">{community.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
