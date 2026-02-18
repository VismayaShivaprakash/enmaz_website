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

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center h-16 rounded-lg border border-border bg-card/50 text-muted-foreground text-sm font-medium transition-colors hover:text-foreground hover:border-primary/30"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
