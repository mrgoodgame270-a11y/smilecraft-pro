import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Star, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CostEstimator } from "@/components/unique/CostEstimator";
import { CTABand } from "@/components/sections/CTABand";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
  head: () => ({
    meta: [
      { title: "Pricing and Membership Plans, Decare Dental" },
      { name: "description", content: "Transparent pricing. Membership plans from $49 per month. No surprise bills, ever." },
    ],
  }),
});

const TIERS = [
  { name: "Basic", price: 49, sub: "/month", features: ["2 cleanings per year", "Annual exam and X-rays", "Emergency phone support", "10% off treatments", "Family discounts"] },
  { name: "Premium", price: 89, sub: "/month", popular: true, features: ["Everything in Basic", "Unlimited cleanings", "Free whitening session", "20% off all treatments", "Priority booking", "Same day emergencies"] },
  { name: "Elite", price: 149, sub: "/month", features: ["Everything in Premium", "1 free veneer per year", "Cosmetic consultations", "30% off all treatments", "Concierge SMS line", "Free family check-ups"] },
];

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent Pricing, No Surprises"
        subtitle="Choose a membership that fits your family, or estimate any treatment in seconds with our cost calculator."
        breadcrumbs={[{ label: "Pricing" }]}
      />
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 items-stretch">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-3xl p-7 md:p-8 transition ${
                  t.popular
                    ? "gradient-hero text-cream md:scale-[1.04] shadow-elevated"
                    : "bg-cream text-ink shadow-soft hover:shadow-elevated"
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-soft text-primary-deep text-xs font-extrabold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-primary-deep" /> MOST POPULAR
                  </span>
                )}
                <h3 className="font-display font-extrabold text-2xl">{t.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-5xl">${t.price}</span>
                  <span className={t.popular ? "text-cream/70" : "text-slate-body"}>{t.sub}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className={`w-5 h-5 rounded-full grid place-items-center shrink-0 mt-0.5 ${t.popular ? "bg-cream/20" : "bg-primary/10"}`}>
                        <Check className={`w-3 h-3 ${t.popular ? "text-cream" : "text-primary"}`} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className={`mt-8 flex items-center justify-center gap-2 font-semibold py-3 rounded-full transition ${
                    t.popular ? "bg-cream text-primary-deep hover:bg-accent-soft" : "gradient-cta text-cream shadow-glow"
                  }`}
                >
                  Choose {t.name} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-cloud">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <div className="text-center mb-10">
            <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase text-accent">Cost Calculator</span>
            <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(1.75rem,4vw,3rem)]">
              Estimate any treatment
            </h2>
          </div>
          <CostEstimator />
        </div>
      </section>
      <CTABand />
    </>
  );
}
