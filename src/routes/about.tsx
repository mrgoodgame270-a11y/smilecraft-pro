import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { Stats } from "@/components/sections/Stats";
import { CTABand } from "@/components/sections/CTABand";
import { motion } from "framer-motion";
import { Heart, Shield, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
});

const VALUES = [
  {
    icon: Heart,
    title: "Genuine Care",
    copy: "We treat every patient like family. No upselling, no pressure, just honest recommendations.",
  },
  {
    icon: Shield,
    title: "Safety First",
    copy: "Hospital grade sterilization, modern protocols, and certified specialists in every chair.",
  },
  {
    icon: Sparkles,
    title: "Modern Tech",
    copy: "3D imaging, same day crowns, digital impressions. Less guesswork, better outcomes.",
  },
  {
    icon: Users,
    title: "Built On Trust",
    copy: "Transparent pricing, clear treatment plans, no surprise bills. Ever.",
  },
];

const TIMELINE = [
  {
    year: "2010",
    text: "Decare Dental opens its doors with 2 dentists and one mission: warm, modern care.",
  },
  {
    year: "2015",
    text: "We pass 5,000 patients and add our pediatric and orthodontics specialty wings.",
  },
  {
    year: "2019",
    text: "Same day digital implant workflow launches, cutting recovery time by 60%.",
  },
  {
    year: "2023",
    text: "AI patient assistant goes live. We answer 100% of inquiries in under 30 seconds.",
  },
  {
    year: "2025",
    text: "Awarded Best Clinic of the Year. 25,000 patients trust Decare with their smiles.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Decare"
        title="Modern Dentistry, Genuinely Caring"
        subtitle="For over 15 years we have combined gentle precision with modern technology. Our team treats every patient like family and every smile like a craft."
        breadcrumbs={[{ label: "About" }]}
      />

      <AboutSnippet />

      <section className="py-20 lg:py-28 bg-cloud">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase text-primary">
              Our Values
            </span>
            <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(1.75rem,4vw,3rem)]">
              What we believe in
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                className="bg-cream rounded-3xl p-6 shadow-soft"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/15 grid place-items-center">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="mt-4 font-display font-bold text-lg text-ink">{v.title}</h3>
                <p className="mt-2 text-slate-body text-sm leading-[1.6]">{v.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <div className="text-center">
            <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase text-primary">
              Our Story
            </span>
            <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(1.75rem,4vw,3rem)]">
              15 years of <span className="gradient-text">building trust</span>
            </h2>
          </div>
          <div className="mt-12 relative pl-8 border-l-2 border-accent/30 space-y-10">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative"
              >
                <span className="absolute -left-[42px] top-0 w-5 h-5 rounded-full gradient-cta shadow-glow" />
                <div className="font-display font-extrabold text-2xl gradient-text">{t.year}</div>
                <p className="mt-2 text-slate-body leading-[1.7]">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <CTABand />
    </>
  );
}
