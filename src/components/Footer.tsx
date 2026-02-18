const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/20 px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-lg font-bold text-foreground mb-3">
            <span className="text-white">ENMAZ</span> Engineering Solutions
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Bengaluru, India
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            Monday – Friday | 9:00 AM – 6:00 PM
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-3 text-sm">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "Products", "Our Services", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-3 text-sm">Contact</h4>
          <p className="text-muted-foreground text-sm">info@enmaz.com</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 ENMAZ Engineering Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
