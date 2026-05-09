import { motion } from "framer-motion";
import { Linkedin, Instagram, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { DENTISTS } from "@/lib/site-data";

export function DentistsGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="py-20 lg:py-28 bg-cloud">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        {heading && (
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase text-primary">Meet Our Dentists</span>
            <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(1.75rem,4vw,3.5rem)] leading-[1.1]">
              Specialists Who Genuinely <span className="gradient-text">Love</span> What They Do
            </h2>
          </div>
        )}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {DENTISTS.map((d, i) => (
            <motion.div
              key={d.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
            >
              <Link to="/dentists/$slug" params={{ slug: d.slug }} className="group block bg-cream rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all">
                <div className="relative aspect-[4/5] gradient-soft overflow-hidden">
                  <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute top-3 right-3 flex gap-1.5">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-9 h-9 rounded-full bg-cream/95 grid place-items-center shadow-soft hover:bg-primary hover:text-cream transition" aria-label="LinkedIn">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-9 h-9 rounded-full bg-cream/95 grid place-items-center shadow-soft hover:bg-primary hover:text-cream transition" aria-label="Instagram">
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, k) => <Star key={k} className="w-3 h-3 fill-gold text-gold" />)}
                    <span className="text-xs text-slate-body ml-1">{d.years}y exp</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-ink">{d.name}</h3>
                  <p className="text-sm text-slate-body">{d.spec}</p>
                  <span className="mt-3 inline-block text-primary font-semibold text-sm group-hover:translate-x-0.5 transition">View profile →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
