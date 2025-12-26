const stats = [
  { value: "2,500+", label: "Homes Sold" },
  { value: "1,200+", label: "Rentals Managed" },
  { value: "500+", label: "Renovations Guided" },
  { value: "15+", label: "Years of Experience" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-background-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-6 md:p-8 text-center hover-lift animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
