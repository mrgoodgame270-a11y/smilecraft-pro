import { motion } from "framer-motion";
import { Linkedin, Instagram, Star } from "lucide-react";
import doc1 from "@/assets/doc-1.jpg";
import doc2 from "@/assets/doc-2.jpg";
import doc3 from "@/assets/doc-3.jpg";
import doc4 from "@/assets/doc-4.jpg";

const DOCS = [
  { img: doc1, name: "Dr. Mubara Doe", spec: "Cosmetic Dentistry", years: 12 },
  { img: doc2, name: "Dr. James Carter", spec: "Orthodontics", years: 9 },
  { img: doc3, name: "Dr. Mei Tanaka", spec: "Pediatric Care", years: 7 },
  { img: doc4, name: "Dr. Andre Bello", spec: "Dental Implants", years: 14 },
];

export function Dentists() {
  return (
    <section className="py-24 lg:py-32 bg-cloud">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[13px] font-semibold tracking-[0.18em] uppercase text-primary">Meet Our Dentists</span>
          <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(2rem,4vw,3.5rem)] leading-[1.1]">
            Specialists Who Genuinely <span className="gradient-text">Love</span> What They Do
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCS.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all"
            >
              <div className="relative h-72 gradient-soft overflow-hidden">
                <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute top-3 right-3 flex gap-1.5">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/95 grid place-items-center shadow-soft hover:bg-primary hover:text-white transition" aria-label="LinkedIn">
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/95 grid place-items-center shadow-soft hover:bg-primary hover:text-white transition" aria-label="Instagram">
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
                <a href="#booking" className="mt-3 inline-block text-primary font-semibold text-sm">Book with {d.name.split(" ")[1]} →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
