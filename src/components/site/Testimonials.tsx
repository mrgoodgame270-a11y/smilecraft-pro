import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import doc1 from "@/assets/doc-1.jpg";
import doc3 from "@/assets/doc-3.jpg";
import doc4 from "@/assets/doc-4.jpg";

const REVIEWS = [
  { name: "Sarah Mitchell", img: doc1, quote: ["I was terrified of dentists. The team made me feel", "completely calm — I actually look forward to visits now.", "Best decision I've made for my smile."], highlight: 1 },
  { name: "Andre Bello", img: doc4, quote: ["Booked online in under a minute. Got SMS reminders.", "The implant work was painless and looks incredible.", "These guys run a tight operation."], highlight: 0 },
  { name: "Mei Tanaka", img: doc3, quote: ["Brought my 6-year-old here scared and crying.", "She left asking when she could come back.", "Genuine, gentle, modern dentistry."], highlight: 1 },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-lavender">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <span className="text-[13px] font-semibold tracking-[0.18em] uppercase text-primary">Patient Stories</span>
            <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(2rem,4vw,3.5rem)] leading-[1.1]">
              Real Smiles. <span className="gradient-text">Real Reviews.</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setI((p) => (p - 1 + REVIEWS.length) % REVIEWS.length)} className="w-12 h-12 rounded-full bg-white shadow-soft grid place-items-center hover:bg-primary hover:text-white transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => setI((p) => (p + 1) % REVIEWS.length)} className="w-12 h-12 rounded-full bg-white shadow-soft grid place-items-center hover:bg-primary hover:text-white transition">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, idx) => (
            <div
              key={r.name}
              className={`bg-white rounded-3xl p-7 shadow-soft transition-all ${idx === i ? "scale-[1.02] shadow-elevated" : "opacity-90"}`}
            >
              <Quote className="w-8 h-8 text-primary/20" />
              <div className="mt-3 flex">
                {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <p className="mt-4 text-ink leading-[1.7]">
                {r.quote.map((line, li) => (
                  <span key={li} className={li === r.highlight ? "text-primary font-semibold" : ""}>
                    {line}{" "}
                  </span>
                ))}
              </p>
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

        <div className="mt-8 flex justify-center gap-2">
          {REVIEWS.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-primary/25"}`} aria-label={`Slide ${idx}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
