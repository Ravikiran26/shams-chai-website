const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Brand */}
          <h3 className="font-serif text-2xl font-semibold">Shams Chai</h3>
          
          {/* Tagline */}
          <p className="text-sm text-primary-foreground/70 font-sans">
            Masala Chai, Done Right
          </p>

          {/* Divider */}
          <div className="h-px w-24 mx-auto bg-primary-foreground/20" />

          {/* Contact */}
          <div className="text-sm text-primary-foreground/70 font-sans space-y-1">
            <p>For orders and enquiries</p>
            <a 
              href="https://wa.me/your-number" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-gold-muted transition-colors"
            >
              Contact us on WhatsApp
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-primary-foreground/50 font-sans pt-4">
            © {new Date().getFullYear()} Shams Chai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
