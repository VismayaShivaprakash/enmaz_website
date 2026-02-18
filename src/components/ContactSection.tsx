import { useState } from "react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend
    console.log("Form submitted", form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-title text-foreground">
          Let's Build Smart Industrial Solutions Together
        </h2>
        <p className="section-subtitle mx-auto mb-12">
          Reach out to discuss your requirements or explore how our IoT and engineering services can help your organization.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none"
              placeholder="Tell us about your requirements..."
            />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
