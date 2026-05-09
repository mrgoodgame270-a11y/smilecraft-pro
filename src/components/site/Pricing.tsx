import { Check, Star } from "lucide-react";

const TIERS = [
  { name: "Basic", price: 49, sub: "/month", features: ["2 cleanings per year", "Annual exam + X-rays", "Emergency phone support", "10% off treatments", "Family discounts"] },
  { name: "Premium", price: 89, sub: "/month", popular: true, features: ["Everything in Basic", "Unlimited cleanings", "Free whitening session", "20% off all treatments", "Priority booking", "Same-day emergencies"] },
  { name: "Elite", price: 149, sub: "/month", features: ["Everything in Premium", "1 free veneer per year", "Cosmetic consultations", "30% off all treatments", "Concierge SMS line", "Free family check-ups"] },
];

export function Pricing() {
  return (
    <section className="py-24 lg:py-32 bg-cloud">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[13px] font-semibold tracking-[0.18em] uppercase text-primary">Membership Plans</span>
          <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(2rem,4vw,3.5rem)] leading-[1.1]">
            Transparent Pricing, <span className="gradient-text">No Surprises</span>
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6 items-stretch">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl p-8 transition ${
                t.popular
                  ? "gradient-hero text-white scale-[1.04] shadow-elevated"
                  : "bg-white text-ink shadow-soft hover:shadow-elevated"
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-glow text-primary-deep text-xs font-extrabold px-4 py-1.5 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-primary-deep" /> MOST POPULAR
                </span>
              )}
              <h3 className="font-display font-extrabold text-2xl">{t.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display font-extrabold text-5xl">${t.price}</span>
                <span className={t.popular ? "text-white/70" : "text-slate-body"}>{t.sub}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className={`w-5 h-5 rounded-full grid place-items-center shrink-0 mt-0.5 ${t.popular ? "bg-white/20" : "bg-primary/10"}`}>
                      <Check className={`w-3 h-3 ${t.popular ? "text-white" : "text-primary"}`} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className={`mt-8 block text-center font-semibold py-3 rounded-full transition ${
                  t.popular ? "bg-white text-primary hover:bg-cyan-glow" : "gradient-cta text-white shadow-glow"
                }`}
              >
                Choose {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
