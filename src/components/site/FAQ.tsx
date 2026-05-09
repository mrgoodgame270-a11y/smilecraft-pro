import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const FAQS = [
  { q: "Do you accept dental insurance?", a: "Yes — we work with all major PPO plans and submit claims for you. We also offer flexible in-house membership plans for uninsured patients." },
  { q: "Will my treatment hurt?", a: "Our team uses gentle techniques, modern numbing, and sedation options when needed. Most patients report no pain at all during routine procedures." },
  { q: "How early should kids start visiting?", a: "By age 1 or within 6 months of the first tooth. Early visits help us prevent issues and build positive associations with the dentist." },
  { q: "Do you offer payment plans?", a: "Absolutely. We partner with CareCredit and offer 0% interest plans for treatments over $300, plus our in-house membership." },
  { q: "What about dental emergencies after hours?", a: "Call our 24/7 emergency line — a dentist on call will respond within 15 minutes and can usually see you the same day." },
  { q: "Do you offer sedation dentistry?", a: "Yes. We provide nitrous oxide, oral conscious sedation, and IV sedation depending on your comfort needs and procedure." },
  { q: "How long does professional whitening last?", a: "Results typically last 1–3 years depending on diet and habits. We'll show you how to maintain it at home with custom trays." },
  { q: "Can root canals be done in one visit?", a: "In most cases, yes. Our digital tools let us complete most root canals in a single 60–90 minute appointment." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <span className="text-[13px] font-semibold tracking-[0.18em] uppercase text-primary">FAQ</span>
          <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(2rem,4vw,3.5rem)] leading-[1.1]">
            Questions, <span className="gradient-text">Answered Honestly</span>
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="bg-lavender rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-display font-bold text-ink">{f.q}</span>
                <Plus className={`w-5 h-5 text-primary shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-slate-body leading-[1.7]">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
