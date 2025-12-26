import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "First-Time Homebuyer",
    content: "The team made our first home purchase feel effortless. Their patience and expertise guided us through every step with complete confidence.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Property Investor",
    content: "Outstanding market knowledge and negotiation skills. They helped me secure three investment properties below market value in just six months.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Relocating Family",
    content: "Moving across the country was daunting, but their relocation services made everything seamless. We found our perfect family home in weeks.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
            Real stories from real clients who trusted us with their property journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card p-6 md:p-8 hover-lift animate-fade-up opacity-0"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-foreground">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
