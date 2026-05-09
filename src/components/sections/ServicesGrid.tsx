import { motion } from "framer-motion";
import {
  ArrowRight,
  Stethoscope,
  Smile,
  AlignHorizontalSpaceAround,
  Baby,
  Bone,
  Siren,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site-data";

const ICONS: Record<string, LucideIcon> = {
  Stethoscope,
  Smile,
  AlignHorizontalSpaceAround,
  Baby,
  Bone,
  Siren,
};

export function ServicesGrid({ limit, heading = true }: { limit?: number; heading?: boolean }) {
  const list = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <section className="py-20 lg:py-28 bg-cloud">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        {heading && (
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase text-primary">
              Our Services
            </span>
            <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(1.75rem,4vw,3.5rem)] leading-[1.1]">
              Complete Dental Care, <span className="gradient-text">Under One Roof</span>
            </h2>
          </div>
        )}

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {list.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block bg-cream rounded-3xl p-6 md:p-7 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl gradient-cta grid place-items-center shadow-glow">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-cream" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-xl text-ink">{s.title}</h3>
                  <p className="mt-2 text-slate-body text-[15px] leading-[1.65]">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {limit && (
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-base"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
