import { CircuitBoard, Monitor } from "lucide-react";

const services = [
  {
    icon: CircuitBoard,
    title: "Custom IoT Hardware Development",
    description:
      "End-to-end design and development of custom IoT hardware tailored to industrial applications.",
    tag: "HARDWARE",
  },
  {
    icon: Monitor,
    title: "Custom IoT Dashboard & Portal Development",
    description:
      "Secure and scalable web dashboards for real-time monitoring, analytics, and reporting.",
    tag: "SOFTWARE",
  },
];

const DevServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-foreground">Our Development Services</h2>
        <p className="section-subtitle mb-16">
          Custom solutions engineered for your unique industrial requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x divide-border">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative py-10 md:py-16 first:pr-0 last:pl-0 md:first:pr-12 md:last:pl-12"
            >
              {/* Large decorative number */}
              <span className="font-display text-[120px] md:text-[160px] font-bold leading-none text-muted/40 absolute -top-4 right-4 md:right-8 select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-500">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <span className="inline-block text-[10px] tracking-[0.3em] font-mono text-secondary font-semibold mb-6 border border-secondary/30 px-3 py-1 rounded-full">
                  {service.tag}
                </span>

                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold text-foreground text-xl">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevServicesSection;
