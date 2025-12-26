import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Heart, Users, Award, Target, Lightbulb } from "lucide-react";
import interiorImage from "@/assets/interior-living.jpg";
import heroImage from "@/assets/hero-home.jpg";

const values = [
  {
    icon: Shield,
    title: "Transparency",
    description: "We believe in open, honest communication. Every detail, every step of the way, you'll have complete visibility into the process.",
  },
  {
    icon: Heart,
    title: "Trust",
    description: "Trust is earned through consistent action. We prioritize your interests above all, building relationships that last beyond the transaction.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We're not just selling homes—we're helping build communities. Our deep local knowledge ensures you find the perfect fit.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "From marketing to negotiations, we deliver exceptional results through meticulous attention to detail and professional expertise.",
  },
  {
    icon: Target,
    title: "Client-First",
    description: "Your goals are our compass. Every recommendation, every strategy is tailored to achieve what matters most to you.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We leverage cutting-edge technology and market insights to give you a competitive advantage in today's dynamic market.",
  },
];

const team = [
  {
    name: "Alexandra Reed",
    role: "Founder & Principal Broker",
    bio: "With over 20 years in luxury real estate, Alexandra brings unmatched expertise and a passion for connecting clients with their dream properties.",
  },
  {
    name: "Marcus Chen",
    role: "Director of Sales",
    bio: "Marcus specializes in investment properties and has helped clients build multi-million dollar portfolios across major metropolitan markets.",
  },
  {
    name: "Sophia Williams",
    role: "Client Relations Manager",
    bio: "Sophia ensures every client experience exceeds expectations, coordinating seamlessly from first contact to closing day.",
  },
  {
    name: "David Thompson",
    role: "Renovation Specialist",
    bio: "David's background in architecture and construction brings invaluable insight to property renovations and value optimization.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Modern luxury home" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
              Building Trust, One Home at a Time
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
              For over 15 years, findonlinerealestate.com has been the trusted partner for buyers, sellers, and investors seeking exceptional real estate experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
              <div className="glass-card overflow-hidden">
                <img src={interiorImage} alt="Our approach to real estate" className="w-full h-[400px] lg:h-[500px] object-cover" />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
                <p>
                  Founded with a vision to transform the real estate experience, findonlinerealestate.com emerged from a simple belief: buying, selling, or renting a home should be empowering, not overwhelming.
                </p>
                <p>
                  What started as a boutique agency has grown into a comprehensive real estate platform, serving thousands of clients across the nation. Yet our core philosophy remains unchanged—every client deserves personalized attention, honest guidance, and exceptional results.
                </p>
                <p>
                  Today, our team combines decades of collective experience with innovative technology to deliver seamless property journeys. Whether you're a first-time buyer, seasoned investor, or family looking to relocate, we're here to guide you home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
              The principles that guide every interaction and decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card p-6 md:p-8 hover-lift animate-fade-up opacity-0"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="p-3 bg-secondary rounded-xl w-fit mb-4">
                  <value.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
              Meet Our Team
            </h2>
            <p className="text-muted-foreground text-lg animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
              Dedicated professionals committed to your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="glass-card p-6 text-center hover-lift animate-fade-up opacity-0"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-semibold text-foreground">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="glass-card p-10 md:p-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Let's discuss how we can help you achieve your real estate goals.
            </p>
            <Button variant="glassPrimary" size="xl" asChild>
              <Link to="/contact" className="gap-2">
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
