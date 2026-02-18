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
        <p className="section-subtitle mb-12">
          Advanced engineering analysis powered by precision instrumentation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-lg p-6 card-hover group"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-card-foreground mb-2 text-sm">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;
