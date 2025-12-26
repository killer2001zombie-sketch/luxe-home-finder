import Layout from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8 animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
              Last updated: December 2024
            </p>

            <div className="prose prose-invert max-w-none space-y-8 animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
              <div className="glass-card p-6 md:p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you provide directly to us, including your name, email address, phone number, and any other information you choose to provide when using our services or contacting us.
                </p>
              </div>

              <div className="glass-card p-6 md:p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Send you updates about properties and services</li>
                  <li>Respond to your comments and questions</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="glass-card p-6 md:p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell or share your personal information with third parties for marketing purposes. We may share information with service providers who assist us in operating our website and conducting our business.
                </p>
              </div>

              <div className="glass-card p-6 md:p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at info@findonlinerealestate.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
