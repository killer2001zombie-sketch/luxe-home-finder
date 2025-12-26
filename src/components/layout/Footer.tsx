import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Communities", path: "/communities" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Home Buying", path: "/services#buying" },
    { name: "Home Selling", path: "/services#selling" },
    { name: "Home Rentals", path: "/services#rentals" },
    { name: "Renovations", path: "/services#renovations" },
    { name: "Home Valuation", path: "/services#valuation" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border">
      {/* Newsletter Section */}
      <div className="container-custom section-padding pb-12">
        <div className="glass-card p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Stay Updated
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Subscribe for market updates, new listings, rental opportunities, and renovation insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 glass-input px-5 py-3 text-foreground placeholder:text-muted-foreground outline-none"
            />
            <Button variant="glassPrimary" size="lg" className="gap-2">
              Subscribe <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-xl font-semibold text-foreground">
                findonlinerealestate
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Premium Real Estate & Property Services. Building trust through transparency and exceptional client experiences.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>742 Madison Avenue, Suite 305<br />New York, NY 10065, USA</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 shrink-0" />
                <span>(212) 555-0198</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@findonlinerealestate.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container-custom py-6">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} findonlinerealestate.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
