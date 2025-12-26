import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="container-custom text-center">
          <div className="glass-card p-12 md:p-16 max-w-xl mx-auto">
            <div className="text-8xl font-serif font-bold text-muted-foreground/20 mb-4">404</div>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button variant="glassPrimary" size="xl" asChild>
              <Link to="/" className="gap-2">
                <Home className="w-5 h-5" /> Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
