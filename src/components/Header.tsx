import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/WhatsApp Image 2026-02-16 at 4.41.49 PM.jpeg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products", dropdown: true },
    { label: "Our Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const products = [
    "Cloud Connected Indoor Air Quality Sensor",
    "Wireless Vibration Sensor",
    "Vibration Data Logger",
    "Data Acquisition Device",
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-background/50"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-10 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                {link.label}
                {link.dropdown && <ChevronDown className="w-3 h-3" />}
              </a>
              {link.dropdown && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card border border-border rounded-lg p-2 min-w-[280px] shadow-xl">
                    {products.map((p) => (
                      <a
                        key={p}
                        href="#products"
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.dropdown ? (
                <div>
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 w-full"
                  >
                    {link.label}
                    <ChevronDown className={`w-3 h-3 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {productsOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {products.map((p) => (
                        <a
                          key={p}
                          href="#products"
                          className="block text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setMobileOpen(false)}
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={link.href}
                  className="block text-sm font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
