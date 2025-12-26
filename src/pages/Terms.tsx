import Layout from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8 animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
              Last updated: December 2024
            </p>

            <div className="prose prose-invert max-w-none space-y-8 animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
              <div className="glass-card p-6 md:p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using findonlinerealestate.com, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to abide by these terms, please do not use this website.
                </p>
              </div>

              <div className="glass-card p-6 md:p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Use of Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are intended for informational purposes and to facilitate real estate transactions. You agree to use our services only for lawful purposes and in accordance with these terms.
                </p>
              </div>

              <div className="glass-card p-6 md:p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, and images, is the property of findonlinerealestate.com and is protected by copyright and other intellectual property laws.
                </p>
              </div>

              <div className="glass-card p-6 md:p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  findonlinerealestate.com shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
                </p>
              </div>

              <div className="glass-card p-6 md:p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions regarding these Terms of Service, please contact us at info@findonlinerealestate.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
