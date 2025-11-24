import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-chai.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Logo/Brand Name */}
          <div className="space-y-2">
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-silver-light tracking-wide">
              Shams Chai
            </h1>
            <div className="h-px w-32 mx-auto gradient-silver" />
          </div>

          {/* Tagline */}
          <h2 className="font-serif text-3xl md:text-5xl text-cream italic">
            Masala Chai, Done Right
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A rich, aromatic masala chai crafted for those who take their tea seriously.
          </p>

          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
            Handcrafted with a balanced blend of Assam tea and signature Indian spices, 
            Shams Chai brings you a café-style experience in every cup. Perfect for your 
            home, office pantry, or gifting.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group"
              onClick={() => window.open('https://wa.me/your-number', '_blank')}
            >
              Buy Shams Chai
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-silver/50 text-silver hover:bg-silver/10 hover:border-silver font-semibold px-8 py-6 text-lg"
              onClick={() => scrollToSection('bulk-orders')}
            >
              Enquire for Bulk Orders
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-silver/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-silver/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
