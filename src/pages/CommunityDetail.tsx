import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, MapPin, Home, Users, TreePine, ShoppingBag } from "lucide-react";
import neighborhoodImage from "@/assets/neighborhood-1.jpg";
import condoImage from "@/assets/condo-building.jpg";
import communityImage from "@/assets/hero-community.jpg";

const communitiesData: Record<string, {
  name: string;
  location: string;
  description: string;
  longDescription: string;
  highlights: string[];
  amenities: string[];
  idealFor: string[];
  image: string;
}> = {
  "upper-east-side": {
    name: "Upper East Side",
    location: "Manhattan, NY",
    description: "Classic elegance meets modern luxury in one of Manhattan's most prestigious neighborhoods.",
    longDescription: "The Upper East Side represents the pinnacle of New York City living. Tree-lined streets, world-class museums including the Metropolitan Museum of Art, and some of the finest dining establishments in the world define this iconic neighborhood. Residents enjoy proximity to Central Park, designer boutiques along Madison Avenue, and access to the city's most prestigious private schools.",
    highlights: ["Central Park Access", "Top-Rated Schools", "Fine Dining", "Cultural Institutions"],
    amenities: ["Museums & Galleries", "Gourmet Restaurants", "Luxury Boutiques", "Private Schools", "Medical Centers", "Parks & Gardens"],
    idealFor: ["Families", "Professionals", "Art Enthusiasts", "Luxury Seekers"],
    image: neighborhoodImage,
  },
  "midtown": {
    name: "Midtown Manhattan",
    location: "New York, NY",
    description: "The heart of the city with premium high-rise living and urban convenience.",
    longDescription: "Midtown Manhattan is the epicenter of global commerce and entertainment. Home to iconic landmarks like the Empire State Building, Times Square, and Rockefeller Center, this neighborhood offers unparalleled access to world-class theater, dining, and shopping. Premium high-rise condominiums provide stunning views and modern amenities in the heart of it all.",
    highlights: ["Transit Hub", "Entertainment District", "Corporate Centers", "Luxury High-Rises"],
    amenities: ["Broadway Theaters", "Corporate Offices", "Transit Access", "Rooftop Bars", "Fitness Centers", "Concierge Services"],
    idealFor: ["Young Professionals", "Theater Lovers", "Corporate Executives", "Investors"],
    image: condoImage,
  },
  "coastal": {
    name: "Coastal Paradise",
    location: "Palm Beach, FL",
    description: "Beachfront living with stunning ocean views and resort-style amenities.",
    longDescription: "Experience the ultimate in coastal luxury living. Palm Beach offers pristine beaches, championship golf courses, and a vibrant social scene. Mediterranean-inspired estates and modern oceanfront condominiums provide the perfect backdrop for a lifestyle defined by sunshine, wellness, and sophisticated leisure. Year-round warm weather makes every day feel like vacation.",
    highlights: ["Ocean Views", "Golf Courses", "Beach Access", "Waterfront Dining"],
    amenities: ["Private Beaches", "Golf & Country Clubs", "Marina Access", "Spa & Wellness", "Tennis Courts", "Fine Dining"],
    idealFor: ["Retirees", "Families", "Golf Enthusiasts", "Beach Lovers"],
    image: communityImage,
  },
  "greenwich-village": {
    name: "Greenwich Village",
    location: "Manhattan, NY",
    description: "Bohemian charm meets urban sophistication in this iconic neighborhood.",
    longDescription: "Greenwich Village embodies the creative spirit of New York City. Historic brownstones, intimate jazz clubs, and artisanal shops line the charming streets of this culturally rich neighborhood. Home to NYU and Washington Square Park, the Village offers a unique blend of academic energy, artistic expression, and neighborhood authenticity that has attracted writers, musicians, and free-thinkers for generations.",
    highlights: ["Historic Architecture", "Arts Scene", "Café Culture", "Washington Square Park"],
    amenities: ["Jazz Clubs", "Art Galleries", "Independent Bookstores", "Farmers Markets", "Historic Theaters", "Artisan Cafés"],
    idealFor: ["Artists", "Academics", "Young Professionals", "Culture Seekers"],
    image: neighborhoodImage,
  },
  "austin-tech": {
    name: "Silicon Hills",
    location: "Austin, TX",
    description: "The tech hub of the South with innovative spirit and vibrant culture.",
    longDescription: "Austin's Silicon Hills represents the new frontier of American innovation. Major tech companies and startups alike have made this vibrant city their home, creating a dynamic ecosystem of creativity and opportunity. Combined with Austin's legendary live music scene, exceptional food culture, and abundant outdoor activities, Silicon Hills offers a lifestyle that balances professional ambition with quality of life.",
    highlights: ["Tech Industry", "Live Music", "Outdoor Activities", "Food Scene"],
    amenities: ["Co-working Spaces", "Live Music Venues", "Hiking Trails", "Craft Breweries", "Food Trucks", "Fitness Studios"],
    idealFor: ["Tech Workers", "Entrepreneurs", "Musicians", "Outdoor Enthusiasts"],
    image: condoImage,
  },
  "pacific-heights": {
    name: "Pacific Heights",
    location: "San Francisco, CA",
    description: "Prestigious neighborhood with stunning Bay views and Victorian mansions.",
    longDescription: "Pacific Heights stands as one of San Francisco's most coveted neighborhoods. Perched atop one of the city's famous hills, residents enjoy breathtaking views of the Golden Gate Bridge, Alcatraz Island, and the Bay. Grand Victorian mansions and elegant Edwardian homes line the tree-shaded streets, while nearby Fillmore Street offers upscale boutiques and acclaimed restaurants.",
    highlights: ["Bay Views", "Victorian Homes", "Boutique Shopping", "Top Schools"],
    amenities: ["Designer Boutiques", "Fine Restaurants", "Wine Bars", "Fitness Studios", "Dog Parks", "Scenic Walks"],
    idealFor: ["Families", "Executives", "Design Enthusiasts", "View Seekers"],
    image: communityImage,
  },
};

export default function CommunityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const community = slug ? communitiesData[slug] : null;

  if (!community) {
    return (
      <Layout>
        <section className="pt-32 pb-20 bg-background min-h-screen">
          <div className="container-custom text-center">
            <h1 className="font-serif text-4xl font-semibold text-foreground mb-4">Community Not Found</h1>
            <p className="text-muted-foreground mb-8">The community you're looking for doesn't exist.</p>
            <Button variant="glass" asChild>
              <Link to="/communities">View All Communities</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-0">
        <div className="relative h-[50vh] md:h-[60vh]">
          <img src={community.image} alt={community.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="container-custom">
              <Link to="/communities" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" /> Back to Communities
              </Link>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" />
                {community.location}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
                {community.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="glass-card p-6 md:p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">About {community.name}</h2>
                <p className="text-muted-foreground leading-relaxed">{community.longDescription}</p>
              </div>

              <div className="glass-card p-6 md:p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Amenities & Features</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {community.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                      <TreePine className="w-4 h-4 text-foreground" />
                      <span className="text-muted-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 md:p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Ideal For</h2>
                <div className="flex flex-wrap gap-3">
                  {community.idealFor.map((item) => (
                    <div key={item} className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                      <Users className="w-4 h-4 text-foreground" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Highlights</h3>
                <div className="space-y-3">
                  {community.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Interested in {community.name}?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Contact us to explore available properties in this neighborhood.
                </p>
                <Button variant="glassPrimary" size="lg" className="w-full gap-2" asChild>
                  <Link to="/contact">
                    View Properties <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
