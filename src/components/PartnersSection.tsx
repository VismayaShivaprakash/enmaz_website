const partners = [
  "Partner A",
  "Partner B",
  "Partner C",
  "Partner D",
  "Partner E",
  "Partner F",
];

const PartnersSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="section-title text-foreground">Trusted by Industry Partners</h2>
        <p className="section-subtitle mx-auto mb-12">
          Building trust and credibility through valued partnerships.
        </p>

        {/* Inline marquee-style strip */}
        <div className="flex items-center justify-center flex-wrap gap-x-12 gap-y-6">
          {partners.map((partner, i) => (
            <span
              key={partner}
              className="text-muted-foreground/50 text-lg md:text-xl font-display font-semibold tracking-wide hover:text-foreground transition-colors duration-300 cursor-default select-none"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
