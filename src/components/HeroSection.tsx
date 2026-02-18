import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated volumetric light background */}
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 text-xs font-medium text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
            Industry 4.0 Solutions
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-6">
            Redefining IoT Products &{" "}
            <span className="text-white">Engineering Services</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-4">
            One-stop solution for Industry 4.0, smart monitoring, and industrial analytics.
          </p>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            We help industries modernize their operations using reliable IoT hardware, cloud-connected sensors, and advanced engineering analysis. Our solutions enable real-time insights, predictive maintenance, and improved operational efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#products">Explore Our Solutions</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
