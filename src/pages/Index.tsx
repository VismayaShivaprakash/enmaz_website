import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import PartnersSection from "@/components/PartnersSection";
import DevServicesSection from "@/components/DevServicesSection";
import EngineeringSection from "@/components/EngineeringSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductsSection />
      <PartnersSection />
      <DevServicesSection />
      <EngineeringSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
