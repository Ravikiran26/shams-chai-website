const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <h3 className="font-serif text-3xl text-silver-light">Shams Chai</h3>
          <p className="text-muted-foreground">
            Masala Chai, Done Right
          </p>
          <div className="pt-6 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Shams Chai. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
