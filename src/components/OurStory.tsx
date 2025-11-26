import { Coffee, Leaf, Heart } from "lucide-react";

const OurStory = () => {
  return (
    <section id="our-story" className="py-20 bg-background">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-sans mb-3">
              About Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Our Story
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-foreground/20" />
              <span className="text-gold">✦</span>
              <div className="h-px w-12 bg-foreground/20" />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8 text-center">
            <p className="text-xl md:text-2xl text-foreground font-serif italic leading-relaxed">
              "Your daily chai should feel like a warm hug, not just a habit."
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans max-w-2xl mx-auto">
              Shams Chai was born from this simple idea. We carefully source quality tea leaves 
              and whole spices, then slow-blend them in small batches to lock in flavour and freshness.
            </p>

            {/* Divider */}
            <div className="classic-divider my-12" />

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 pt-4">
              <div className="p-8 border border-border bg-card">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">Robust Flavour</h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                  Strong, balanced masala in every cup
                </p>
              </div>

              <div className="p-8 border border-border bg-card">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">Consistent Quality</h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                  Same premium experience, every time
                </p>
              </div>

              <div className="p-8 border border-border bg-card">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">Simple Brewing</h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                  Perfect for home, office, and cafés
                </p>
              </div>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed font-sans pt-8 max-w-2xl mx-auto">
              From early-morning kitchen chai to late-night work calls, Shams Chai is crafted 
              to complement your day, your mood, and your gatherings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
