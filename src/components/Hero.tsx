import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-chai.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-ivory">
      {/* Background Image with Classic Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Decorative Border Frame */}
      <div className="absolute inset-8 md:inset-12 border border-border pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Brand Name */}
          <div className="space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-sans">
              Est. 2024 • Premium Indian Tea
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold text-foreground tracking-tight">
              Shams Chai
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-foreground/30" />
              <span className="text-gold text-lg">✦</span>
              <div className="h-px w-16 bg-foreground/30" />
            </div>
          </div>

          {/* Tagline */}
          <h2 className="font-serif text-2xl md:text-3xl text-foreground/80 italic">
            Masala Chai, Done Right
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed font-sans">
            A rich, aromatic masala chai crafted for those who take their tea seriously. 
            Handcrafted with a balanced blend of Assam tea and signature Indian spices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium px-8 py-6 text-base tracking-wide"
              onClick={() => window.open('https://wa.me/your-number', '_blank')}
            >
              Order Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-foreground/20 text-foreground hover:bg-foreground/5 font-sans font-medium px-8 py-6 text-base tracking-wide"
              onClick={() => scrollToSection('bulk-orders')}
            >
              Corporate Enquiries
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
};

export default Hero;
