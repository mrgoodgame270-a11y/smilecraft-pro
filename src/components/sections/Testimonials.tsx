import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import doc1 from "@/assets/doc-1.jpg";
import doc3 from "@/assets/doc-3.jpg";
import doc4 from "@/assets/doc-4.jpg";

const REVIEWS = [
  { name: "Sarah Mitchell", img: doc1, quote: "I was terrified of dentists. The team made me feel completely calm. I actually look forward to visits now. Best decision I have made for my smile." },
  { name: "Andre Bello", img: doc4, quote: "Booked online in under a minute. Got SMS reminders. The implant work was painless and looks incredible. These guys run a tight operation." },
  { name: "Mei Tanaka", img: doc3, quote: "Brought my 6 year old here scared and crying. She left asking when she could come back. Genuine, gentle, modern dentistry." },
];

export function Testimonials({ compact = false }: { compact?: boolean }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % REVIEWS.length), 6500);
    return () => clearInterval(t);
  }, []);

  if (compact) {
    const r = REVIEWS[i];
    return (
      <section className="py-16 lg:py-24 bg-lavender">
        <div className="max-w-3xl mx-auto px-5 md:px-6 text-center">
          <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase text-primary">Patient Stories</span>
          <Quote className="w-10 h-10 text-primary/25 mx-auto mt-4" />
          <p className="mt-4 font-display text-xl md:text-2xl text-ink leading-relaxed">{r.quote}</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
            <div className="text-left">
              <div className="font-bold text-ink">{r.name}</div>
              <div className="text-xs text-slate-body flex items-center gap-1">
                <BadgeCheck className="w-3 h-3 text-primary" /> Verified Google Review
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {REVIEWS.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-accent" : "w-2 bg-primary/25"}`} aria-label={`Slide ${idx + 1}`} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-lavender">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase text-primary">Patient Stories</span>
            <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(1.75rem,4vw,3.5rem)] leading-[1.1]">
              Real Smiles. <span className="gradient-text">Real Reviews.</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setI((p) => (p - 1 + REVIEWS.length) % REVIEWS.length)} className="w-12 h-12 rounded-full bg-cream shadow-soft grid place-items-center hover:bg-primary hover:text-cream transition" aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => setI((p) => (p + 1) % REVIEWS.length)} className="w-12 h-12 rounded-full bg-cream shadow-soft grid place-items-center hover:bg-primary hover:text-cream transition" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {REVIEWS.map((r, idx) => (
            <div key={r.name} className={`bg-cream rounded-3xl p-6 md:p-7 shadow-soft transition-all ${idx === i ? "scale-[1.02] shadow-elevated" : "opacity-90"}`}>
              <Quote className="w-8 h-8 text-primary/25" />
              <div className="mt-3 flex">
                {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <p className="mt-4 text-ink leading-[1.7]">{r.quote}</p>
              <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                <img src={r.img} alt={r.name} className="w-11 h-11 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="font-bold text-ink text-sm">{r.name}</div>
                  <div className="text-xs text-slate-body flex items-center gap-1">
                    <BadgeCheck className="w-3 h-3 text-primary" /> Verified Google Review
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
