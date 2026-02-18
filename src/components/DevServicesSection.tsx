import { CircuitBoard, Monitor } from "lucide-react";

const services = [
  {
    icon: CircuitBoard,
    title: "Custom IoT Hardware Development",
    description:
      "End-to-end design and development of custom IoT hardware tailored to industrial applications.",
  },
  {
    icon: Monitor,
    title: "Custom IoT Dashboard & Portal Development",
    description:
      "Secure and scalable web dashboards for real-time monitoring, analytics, and reporting.",
  },
];

const DevServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-foreground">Our Development Services</h2>
        <p className="section-subtitle mb-12">
          Custom solutions engineered for your unique industrial requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-lg p-8 card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-card-foreground mb-3 text-lg">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevServicesSection;
