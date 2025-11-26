import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Building2, Gift, Users, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BulkOrders = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contact: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.contact || !formData.quantity) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const message = `New Bulk Enquiry from Shams Chai Website:\n\nName: ${formData.name}\nCompany: ${formData.company || 'N/A'}\nContact: ${formData.contact}\nQuantity/Requirement: ${formData.quantity}\nMessage: ${formData.message || 'N/A'}`;
    
    const whatsappUrl = `https://wa.me/your-number?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecting to WhatsApp",
      description: "We'll get back to you shortly!",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    {
      icon: Building2,
      title: "Office Pantries",
      description: "Bulk packs for offices and co-working spaces",
    },
    {
      icon: Gift,
      title: "Corporate Gifting",
      description: "Festive hampers and client gifts",
    },
    {
      icon: Users,
      title: "Cafés & Caterers",
      description: "Custom packs for commercial use",
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Conferences, stalls, and gatherings",
    },
  ];

  return (
    <section id="bulk-orders" className="py-20 bg-card">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-sans mb-3">
              For Business
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Brew for Teams & Events
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-foreground/20" />
              <span className="text-gold">✦</span>
              <div className="h-px w-12 bg-foreground/20" />
            </div>
            <p className="text-lg text-muted-foreground font-sans max-w-xl mx-auto">
              Premium masala chai for offices, corporates, and events
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-6 border border-border bg-background"
              >
                <service.icon className="w-6 h-6 mx-auto mb-3 text-accent" />
                <h3 className="font-serif text-sm font-medium text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground font-sans">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Form Section */}
          <div className="max-w-xl mx-auto">
            <div className="border border-border bg-background p-8 md:p-10">
              <h3 className="font-serif text-2xl text-foreground text-center mb-2">
                Request a Quote
              </h3>
              <p className="text-sm text-muted-foreground text-center mb-8 font-sans">
                Share your requirements and we'll get back to you promptly
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-sans text-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-accent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-sans text-foreground">
                      Company / Organisation
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-accent"
                      placeholder="Company name (optional)"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="contact" className="text-sm font-sans text-foreground">
                      Email / Phone *
                    </Label>
                    <Input
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-accent"
                      placeholder="Best way to reach you"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity" className="text-sm font-sans text-foreground">
                      Quantity Required *
                    </Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-accent"
                      placeholder="e.g., 50 packs, monthly supply"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-sans text-foreground">
                    Additional Details
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any specific requirements or questions?"
                    className="bg-background border-border focus:border-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium py-6 text-base tracking-wide"
                >
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkOrders;
