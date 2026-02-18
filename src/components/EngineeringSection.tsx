import { BarChart3, AudioWaveform, ScanLine, Volume2 } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Vibration Modal Analysis",
    description: "Identify natural frequencies and mode shapes to optimize structural performance.",
  },
  {
    icon: AudioWaveform,
    title: "Vibration Response Measurement & Analysis",
    description: "Precise vibration measurement and analysis for rotating and reciprocating machinery.",
  },
  {
    icon: ScanLine,
    title: "Operational Deflection Shape (ODS)",
    description: "Visualize the actual operating vibration pattern of structures under load.",
  },
  {
    icon: Volume2,
    title: "Noise Measurement & Analysis",
    description: "Comprehensive acoustic measurements for regulatory compliance and noise reduction.",
  },
];

const EngineeringSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-foreground">Engineering & Analysis Services</h2>
        <p className="section-subtitle mb-16">
          Advanced engineering analysis powered by precision instrumentation.
        </p>

        {/* Horizontal masonry-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative flex items-start gap-5 p-8 md:p-10 border-border transition-colors duration-300 hover:bg-accent/50 cursor-default ${
                i < 2 ? "border-b" : ""
              } ${i % 2 === 0 ? "md:border-r" : ""}`}
            >
              <service.icon className="w-5 h-5 text-primary mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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

export default EngineeringSection;
