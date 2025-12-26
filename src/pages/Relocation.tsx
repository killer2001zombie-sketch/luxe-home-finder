import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Briefcase, Home, DollarSign, Heart, CheckCircle, Download } from "lucide-react";
import communityImage from "@/assets/hero-community.jpg";

const benefits = [
  {
    icon: MapPin,
    title: "Area Orientation",
    description: "Personalized tours and insights into neighborhoods, schools, amenities, and local culture.",
  },
  {
    icon: Briefcase,
    title: "Career Considerations",
    description: "Strategic location recommendations based on commute times and proximity to employment centers.",
  },
  {
    icon: Home,
    title: "Housing Search",
    description: "Tailored property searches matching your budget, lifestyle, and family requirements.",
  },
  {
    icon: DollarSign,
    title: "Cost of Living Guidance",
    description: "Comprehensive breakdowns of living expenses to help you budget for your new chapter.",
  },
  {
    icon: Heart,
    title: "Lifestyle Matching",
    description: "Recommendations based on your hobbies, interests, and social preferences.",
  },
];

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Share your needs, timeline, and preferences with our relocation specialists.",
  },
  {
    number: "02",
    title: "Community Research",
    description: "We identify neighborhoods that align with your lifestyle and priorities.",
  },
  {
    number: "03",
    title: "Area Tours",
    description: "Experience potential neighborhoods firsthand with guided orientation tours.",
  },
  {
    number: "04",
    title: "Property Search",
    description: "Find and secure your ideal home with expert guidance and negotiation.",
  },
  {
    number: "05",
    title: "Settling In",
    description: "Ongoing support to help you integrate into your new community.",
  },
];

export default function Relocation() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={communityImage} alt="New community" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
              Relocation Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
              Your Stress-Free Move Starts Here
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
              Moving to a new city? Our comprehensive relocation services ensure a smooth transition to your new community.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
              What We Offer
            </h2>
            <p className="text-muted-foreground text-lg animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
              Comprehensive support for every aspect of your relocation journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card p-6 md:p-8 hover-lift animate-fade-up opacity-0"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="p-3 bg-secondary rounded-xl w-fit mb-4">
                  <benefit.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
              Our Relocation Process
            </h2>
            <p className="text-muted-foreground text-lg animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
              A structured approach to ensure nothing is overlooked.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="glass-card p-6 flex items-start gap-6 animate-fade-up opacity-0"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-3xl font-serif font-semibold text-muted-foreground/30">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Guide CTA */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="glass-card p-10 md:p-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="p-3 bg-secondary rounded-xl w-fit mb-4">
                  <Download className="w-8 h-8 text-foreground" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Free Relocation Guide
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Get our comprehensive guide with tips on moving, cost comparisons, and neighborhood insights for popular destinations.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Cost of living comparisons", "School district ratings", "Neighborhood profiles", "Moving checklist"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <form className="glass-card p-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full glass-input px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full glass-input px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Moving To (City/State)"
                    className="w-full glass-input px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none"
                  />
                  <Button variant="glassPrimary" size="lg" className="w-full gap-2">
                    Download Guide <Download className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Ready to Start Your Relocation?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Connect with our relocation specialists today and take the first step toward your new home.
            </p>
            <Button variant="glassPrimary" size="xl" asChild>
              <Link to="/contact" className="gap-2">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
