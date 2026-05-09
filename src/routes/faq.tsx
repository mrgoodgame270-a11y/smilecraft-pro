import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "@/components/layout/PageHero";
import { CTABand } from "@/components/sections/CTABand";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions, Decare Dental" },
      {
        name: "description",
        content:
          "Insurance, pain, kids, payment plans, emergencies. Honest answers to the questions patients ask most.",
      },
    ],
  }),
});

const FAQS = [
  {
    q: "Do you accept dental insurance?",
    a: "Yes, we work with all major PPO plans and submit claims for you. We also offer flexible in house membership plans for uninsured patients.",
  },
  {
    q: "Will my treatment hurt?",
    a: "Our team uses gentle techniques, modern numbing, and sedation options when needed. Most patients report no pain at all during routine procedures.",
  },
  {
    q: "How early should kids start visiting?",
    a: "By age 1 or within 6 months of the first tooth. Early visits help us prevent issues and build positive associations with the dentist.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Absolutely. We partner with CareCredit and offer 0% interest plans for treatments over $300, plus our in house membership.",
  },
  {
    q: "What about dental emergencies after hours?",
    a: "Call our 24/7 emergency line. A dentist on call will respond within 15 minutes and can usually see you the same day.",
  },
  {
    q: "Do you offer sedation dentistry?",
    a: "Yes. We provide nitrous oxide, oral conscious sedation, and IV sedation depending on your comfort needs and procedure.",
  },
  {
    q: "How long does professional whitening last?",
    a: "Results typically last 1 to 3 years depending on diet and habits. We will show you how to maintain it at home with custom trays.",
  },
  {
    q: "Can root canals be done in one visit?",
    a: "In most cases, yes. Our digital tools let us complete most root canals in a single 60 to 90 minute appointment.",
  },
];

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, Answered Honestly"
        subtitle="Insurance, pain, kids, payment plans, emergencies. Here are the questions patients ask most."
        breadcrumbs={[{ label: "FAQ" }]}
      />
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-5 md:px-6 space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="bg-cream-deep rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left min-h-[56px]"
                aria-expanded={open === i}
              >
                <span className="font-display font-bold text-ink">{f.q}</span>
                <Plus
                  className={`w-5 h-5 text-primary shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-slate-body leading-[1.7]">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
