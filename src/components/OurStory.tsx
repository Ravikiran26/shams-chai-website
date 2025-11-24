import { Coffee, Leaf, Heart } from "lucide-react";

const OurStory = () => {
  return (
    <section id="our-story" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-silver-light mb-4">
              Our Story
            </h2>
            <div className="h-px w-24 mx-auto gradient-silver mb-6" />
            <p className="text-xl text-muted-foreground italic">
              A journey of passion, flavour, and tradition
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8 text-center animate-fade-in">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Shams Chai was born from one simple idea – your daily chai should feel like 
              a warm hug, not just a habit.
            </p>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              We carefully source quality tea leaves and whole spices, then slow-blend them 
              in small batches to lock in flavour and freshness. Every pack of Shams Chai 
              is made to give you:
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="bg-muted/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-silver/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber/10 flex items-center justify-center">
                  <Coffee className="w-8 h-8 text-amber" />
                </div>
                <h3 className="font-serif text-xl text-silver mb-2">Strong, Balanced Flavour</h3>
                <p className="text-muted-foreground text-sm">
                  Perfect masala blend in every cup
                </p>
              </div>

              <div className="bg-muted/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-silver/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-silver mb-2">Consistent Taste</h3>
                <p className="text-muted-foreground text-sm">
                  Same premium experience, every time
                </p>
              </div>

              <div className="bg-muted/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-silver/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-serif text-xl text-silver mb-2">Easy Brewing</h3>
                <p className="text-muted-foreground text-sm">
                  Perfect for home, cafés, and offices
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed pt-8">
              From early-morning kitchen chai to late-night work calls, Shams Chai is made 
              to fit your day, your mood, and your people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
