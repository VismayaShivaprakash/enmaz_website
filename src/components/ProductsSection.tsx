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
        <p className="section-subtitle mb-16">
          Industrial-grade IoT devices designed for reliability and precision.
        </p>

        <div className="space-y-0">
          {products.map((product, i) => (
            <div
              key={product.name}
              className="group relative grid grid-cols-1 md:grid-cols-[80px_1fr_1.5fr] items-center gap-4 md:gap-8 py-8 border-b border-border last:border-b-0 cursor-pointer hover:bg-green-500/5 transition-all duration-300 px-4 -mx-4 rounded-sm"
            >
              {/* Number + Icon */}
              <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-2">
                <span className="text-xs font-mono text-muted-foreground tracking-widest">
                  0{i + 1}
                </span>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300">
                  <product.icon className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-foreground text-lg md:text-xl group-hover:text-white transition-colors duration-300">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed md:text-right">
                {product.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
