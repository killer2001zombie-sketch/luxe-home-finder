import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
              Contact Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
              Let's Start a Conversation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
              Whether you're ready to buy, sell, or just exploring your options, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background-secondary pt-0">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-up opacity-0" style={{ animationDelay: "400ms" }}>
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-xl">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Office Address</h3>
                    <p className="text-muted-foreground text-sm">
                      742 Madison Avenue, Suite 305<br />
                      New York, NY 10065, USA
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-xl">
                    <Phone className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">(212) 555-0198</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-xl">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">info@findonlinerealestate.com</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-xl">
                    <Clock className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-up opacity-0" style={{ animationDelay: "500ms" }}>
              <div className="glass-card p-8 md:p-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full glass-input px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full glass-input px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full glass-input px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full glass-input px-4 py-3 text-foreground outline-none bg-transparent"
                      >
                        <option value="" className="bg-background">Select a subject</option>
                        <option value="buying" className="bg-background">Buying a Home</option>
                        <option value="selling" className="bg-background">Selling a Property</option>
                        <option value="renting" className="bg-background">Renting a Home</option>
                        <option value="renovation" className="bg-background">Renovations</option>
                        <option value="valuation" className="bg-background">Home Valuation</option>
                        <option value="relocation" className="bg-background">Relocation Services</option>
                        <option value="other" className="bg-background">Other Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full glass-input px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none resize-none"
                      placeholder="Tell us about your real estate needs..."
                    />
                  </div>
                  <Button variant="glassPrimary" size="xl" className="w-full gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-background-secondary">
        <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground">Interactive Map</p>
            <p className="text-sm text-muted-foreground/60">742 Madison Avenue, New York, NY</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
