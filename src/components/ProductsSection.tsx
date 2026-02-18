import { Wind, Activity, Database, Cpu } from "lucide-react";

const products = [
  {
    icon: Wind,
    name: "Cloud Connected Indoor Air Quality Sensor",
    description:
      "Monitor temperature, humidity, CO₂, and air quality parameters in real time using a cloud-enabled industrial sensor.",
  },
  {
    icon: Activity,
    name: "Wireless Vibration Sensor",
    description:
      "Continuous vibration monitoring for rotating machinery to enable predictive maintenance and fault detection.",
  },
  {
    icon: Database,
    name: "Vibration Data Logger",
    description:
      "High-precision data logging device for offline and long-term vibration analysis in industrial environments.",
  },
  {
    icon: Cpu,
    name: "Data Acquisition Device",
    description:
      "Industrial-grade DAQ system for collecting, processing, and transmitting sensor data to cloud platforms.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-foreground">Our Products</h2>
        <p className="section-subtitle mb-12">
          Industrial-grade IoT devices designed for reliability and precision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-card border border-border rounded-lg p-6 card-hover cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-card-foreground mb-2 text-sm leading-tight">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
