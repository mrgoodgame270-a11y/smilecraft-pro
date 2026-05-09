import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import a1 from "@/assets/about-1.jpg";
import a2 from "@/assets/about-2.jpg";

export function AboutSnippet() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative grid grid-cols-2 gap-4">
          <div className="space-y-4 mt-10">
            <img src={a1} alt="Modern dental clinic" className="rounded-3xl shadow-soft w-full h-56 md:h-64 object-cover" loading="lazy" />
            <div className="rounded-3xl gradient-hero h-36 md:h-40 grid place-items-center text-cream p-6 shadow-soft">
              <div className="text-center">
                <div className="font-display font-extrabold text-4xl md:text-5xl">15+</div>
                <div className="text-sm text-cream/80 mt-1">Years of Experience</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl bg-accent text-cream h-36 md:h-40 grid place-items-center p-6 shadow-soft">
              <div className="text-center">
                <div className="font-display font-extrabold text-3xl md:text-4xl">25k+</div>
                <div className="text-sm mt-1">Happy Patients</div>
              </div>
            </div>
            <img src={a2} alt="Dentist with patient" className="rounded-3xl shadow-soft w-full h-64 md:h-72 object-cover" loading="lazy" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase text-primary">About Us</span>
          <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.1]">
            Dedicated Professionals Delivering <span className="gradient-text">Personalized</span> Dental Excellence
          </h2>
          <p className="mt-5 text-slate-body text-[1rem] md:text-[1.0625rem] leading-[1.7]">
            For over 15 years we have combined gentle precision with modern technology so every visit feels effortless. From your first cleaning to a complete smile makeover, we treat every patient like family.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Sedation options for anxious patients",
              "Same day crowns with digital impressions",
              "Transparent pricing and flexible payment plans",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-ink font-medium">
                <span className="w-6 h-6 rounded-full gradient-cta grid place-items-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-cream" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Learn More About Us <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
