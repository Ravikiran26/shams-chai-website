import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Building2, Gift, Users, Award } from "lucide-react";
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
    
    // Basic validation
    if (!formData.name || !formData.contact || !formData.quantity) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
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

  return (
    <section id="bulk-orders" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-silver-light mb-4">
              Brew for Teams & Events
            </h2>
            <div className="h-px w-24 mx-auto gradient-silver mb-6" />
            <p className="text-xl text-muted-foreground">
              Perfect for offices, cafés, corporates, and gifting.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Benefits */}
            <div className="space-y-8 animate-fade-in">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Serve the same consistent, premium masala chai to everyone – employees, 
                guests, and clients.
              </p>

              <div className="space-y-6">
                <h3 className="font-serif text-2xl text-silver mb-6">We offer:</h3>
                
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber/20 transition-colors">
                    <Building2 className="w-6 h-6 text-amber" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-silver mb-1">Bulk Packs for Offices</h4>
                    <p className="text-muted-foreground text-sm">
                      Keep your team energized with premium chai for co-working spaces and offices
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Gift className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-silver mb-1">Corporate Gifting</h4>
                    <p className="text-muted-foreground text-sm">
                      Make an impression with festive hampers and thoughtful corporate gifts
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-silver mb-1">Cafés & Cloud Kitchens</h4>
                    <p className="text-muted-foreground text-sm">
                      Custom packs for cafés, cloud kitchens, and catering services
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-silver mb-1">Events & Conferences</h4>
                    <p className="text-muted-foreground text-sm">
                      Support for events, conferences, and exhibition stalls
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-card border border-border rounded-lg p-8 animate-fade-in">
              <h3 className="font-serif text-2xl text-silver mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Tell us your requirement and we'll suggest the best bulk pack and pricing for you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-background border-border focus:border-silver"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-foreground">Company / Organisation</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 bg-background border-border focus:border-silver"
                    placeholder="Company name (optional)"
                  />
                </div>

                <div>
                  <Label htmlFor="contact" className="text-foreground">Email / Phone *</Label>
                  <Input
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-background border-border focus:border-silver"
                    placeholder="Best way to reach you"
                  />
                </div>

                <div>
                  <Label htmlFor="quantity" className="text-foreground">Quantity or Type of Requirement *</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-background border-border focus:border-silver"
                    placeholder="e.g., 50 packs, monthly supply, event catering"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 bg-background border-border focus:border-silver min-h-[120px]"
                    placeholder="Any specific requirements or questions?"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
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
