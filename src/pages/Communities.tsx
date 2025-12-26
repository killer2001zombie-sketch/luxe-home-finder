import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import neighborhoodImage from "@/assets/neighborhood-1.jpg";
import condoImage from "@/assets/condo-building.jpg";
import communityImage from "@/assets/hero-community.jpg";

const communities = [
  {
    name: "Upper East Side",
    location: "Manhattan, NY",
    description: "Classic elegance meets modern luxury in one of Manhattan's most prestigious neighborhoods. Tree-lined streets, world-class museums, and designer boutiques create an unparalleled living experience.",
    highlights: ["Central Park Access", "Top-Rated Schools", "Fine Dining", "Cultural Institutions"],
    image: neighborhoodImage,
    slug: "upper-east-side",
  },
  {
    name: "Midtown Manhattan",
    location: "New York, NY",
    description: "The heart of the city with premium high-rise living and urban convenience. Iconic landmarks, theaters, and world headquarters at your doorstep.",
    highlights: ["Transit Hub", "Entertainment District", "Corporate Centers", "Luxury High-Rises"],
    image: condoImage,
    slug: "midtown",
  },
  {
    name: "Coastal Paradise",
    location: "Palm Beach, FL",
    description: "Beachfront living with stunning ocean views and resort-style amenities. Experience the ultimate in coastal luxury with year-round sunshine.",
    highlights: ["Ocean Views", "Golf Courses", "Beach Access", "Waterfront Dining"],
    image: communityImage,
    slug: "coastal",
  },
  {
    name: "Greenwich Village",
    location: "Manhattan, NY",
    description: "Bohemian charm meets urban sophistication. Historic townhouses, jazz clubs, and artisanal shops define this iconic neighborhood.",
    highlights: ["Historic Architecture", "Arts Scene", "Café Culture", "Washington Square Park"],
    image: neighborhoodImage,
    slug: "greenwich-village",
  },
  {
    name: "Silicon Hills",
    location: "Austin, TX",
    description: "The tech hub of the South with innovative spirit and vibrant culture. Modern developments meet live music heritage in this dynamic city.",
    highlights: ["Tech Industry", "Live Music", "Outdoor Activities", "Food Scene"],
    image: condoImage,
    slug: "austin-tech",
  },
  {
    name: "Pacific Heights",
    location: "San Francisco, CA",
    description: "Prestigious neighborhood with stunning Bay views and Victorian mansions. A haven for those seeking refined urban living with natural beauty.",
    highlights: ["Bay Views", "Victorian Homes", "Boutique Shopping", "Top Schools"],
    image: communityImage,
    slug: "pacific-heights",
  },
];

export default function Communities() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={communityImage} alt="Coastal community" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
              Communities
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
              Discover Your Perfect Neighborhood
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
              Explore the communities we serve and find the lifestyle that matches your aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community, index) => (
              <Link
                key={community.slug}
                to={`/communities/${community.slug}`}
                className="group animate-fade-up opacity-0"
                style={{ animationDelay: `${100 + index * 100}ms` }}
              >
                <div className="glass-card overflow-hidden hover-lift h-full">
                  <div className="relative h-56 overflow-hidden">
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
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{community.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {community.highlights.slice(0, 3).map((highlight) => (
                        <span key={highlight} className="text-xs px-2 py-1 bg-secondary rounded-lg text-muted-foreground">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="glass-card p-10 md:p-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Can't Find Your Ideal Location?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              We serve many more communities across the nation. Let us help you find the perfect neighborhood for your lifestyle.
            </p>
            <Button variant="glassPrimary" size="xl" asChild>
              <Link to="/contact" className="gap-2">
                Speak with an Expert <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
