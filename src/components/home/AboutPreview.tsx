import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Users } from "lucide-react";
import interiorImage from "@/assets/interior-living.jpg";

const values = [
  {
    icon: Shield,
    title: "Transparency",
    description: "Clear communication and honest guidance at every step of your property journey.",
  },
  {
    icon: Heart,
    title: "Trust",
    description: "Building lasting relationships through integrity and exceptional service.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Deep local expertise and genuine commitment to the neighborhoods we serve.",
  },
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
            <div className="glass-card overflow-hidden">
              <img
                src={interiorImage}
                alt="Elegant modern living room"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
              <div className="text-3xl font-serif font-semibold text-foreground">15+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
              Your Trusted Partner in Real Estate
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
              At findonlinerealestate.com, we believe that finding the right property is about more than just four walls. It's about discovering a place where life unfolds, memories are made, and investments grow. Our client-first approach ensures every decision is guided by your unique needs and goals.
            </p>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="flex items-start gap-4 glass-card p-4 animate-fade-up opacity-0"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="p-2 bg-secondary rounded-lg">
                    <value.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="glass" size="lg" asChild className="animate-fade-up opacity-0" style={{ animationDelay: "700ms" }}>
              <Link to="/about" className="gap-2">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
