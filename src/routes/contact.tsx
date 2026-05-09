import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Mail, Car, Train, Send } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { InsuranceChecker } from "@/components/unique/InsuranceChecker";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

const HOURS = [
  ["Monday to Friday", "9:00 AM to 9:00 PM"],
  ["Saturday", "9:00 AM to 6:00 PM"],
  ["Sunday", "Closed (emergencies only)"],
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Find Us in the Heart of Town"
        subtitle="Stop by, call, message us on WhatsApp, or send a note below. We respond within minutes."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-12 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-6 grid lg:grid-cols-2 gap-10 items-stretch">
          <div>
            <div className="space-y-5">
              <Row icon={MapPin}>
                <b className="text-ink">{ADDRESS.split(",")[0]},</b>{" "}
                {ADDRESS.split(",").slice(1).join(",")}
              </Row>
              <Row icon={Phone}>
                <a href={`tel:${PHONE_TEL}`} className="hover:text-primary">
                  {PHONE_DISPLAY}
                </a>
              </Row>
              <Row icon={Mail}>
                <a href={`mailto:${EMAIL}`} className="hover:text-primary">
                  {EMAIL}
                </a>
              </Row>
              <Row icon={Car}>Free parking on premises (60 spots)</Row>
              <Row icon={Train}>2 minute walk from Cedar Metro Station</Row>
            </div>

            <div className="mt-6 bg-cream-deep rounded-2xl p-5">
              <div className="flex items-center gap-2 font-display font-bold text-ink">
                <Clock className="w-4 h-4 text-primary" /> Office Hours
              </div>
              <div className="mt-3 space-y-2 text-sm">
                {HOURS.map(([d, h]) => (
                  <div key={d} className="flex justify-between text-slate-body">
                    <span>{d}</span>
                    <span className="font-semibold text-ink">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block gradient-cta text-cream font-semibold px-6 py-3 rounded-full shadow-glow hover:-translate-y-0.5 transition"
            >
              Get Directions →
            </a>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-cream-deep rounded-3xl p-6 md:p-8 shadow-soft"
          >
            <h3 className="font-display font-bold text-xl text-ink">Send us a message</h3>
            {sent ? (
              <div className="mt-6 bg-success/10 rounded-2xl p-5 text-center">
                <div className="font-display font-bold text-ink">
                  Got it. We will reply shortly.
                </div>
                <p className="text-sm text-slate-body mt-1">
                  Most messages are answered within 15 minutes during business hours.
                </p>
              </div>
            ) : (
              <div className="mt-5 space-y-3">
                <input
                  required
                  placeholder="Your name"
                  className="w-full h-12 px-4 rounded-xl border-2 border-border bg-cream focus:border-primary outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="w-full h-12 px-4 rounded-xl border-2 border-border bg-cream focus:border-primary outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  className="w-full h-12 px-4 rounded-xl border-2 border-border bg-cream focus:border-primary outline-none"
                />
                <textarea
                  required
                  placeholder="How can we help?"
                  rows={4}
                  className="w-full p-4 rounded-xl border-2 border-border bg-cream focus:border-primary outline-none"
                />
                <button className="w-full gradient-cta text-cream font-semibold h-12 rounded-full shadow-glow flex items-center justify-center gap-2">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="bg-cloud py-12">
        <div className="max-w-5xl mx-auto px-5 md:px-6">
          <InsuranceChecker />
        </div>
      </section>

      <section className="bg-cream py-8">
        <div className="max-w-7xl mx-auto px-5 md:px-6 rounded-3xl overflow-hidden shadow-elevated min-h-[400px] bg-cream-deep">
          <iframe
            title="Decare Dental location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-118.2537%2C34.0466%2C-118.2337%2C34.0566&layer=mapnik"
            className="w-full h-[400px] grayscale-[20%]"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
function Row({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-slate-body">
      <span className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center shrink-0">
        <Icon className="w-4 h-4 text-primary" />
      </span>
      <div className="pt-2">{children}</div>
    </div>
  );
}
