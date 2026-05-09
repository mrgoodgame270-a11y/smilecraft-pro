import { motion } from "framer-motion";
import {
  Stethoscope, Smile, AlignHorizontalSpaceAround, Baby, Bone, Siren, ArrowRight,
} from "lucide-react";

const SERVICES = [
  { icon: Stethoscope, title: "General Dentistry", copy: "Routine cleanings, exams and preventive care to keep every smile healthy for life." },
  { icon: Smile, title: "Cosmetic Dentistry", copy: "Whitening, veneers and bonding crafted to give you a confident, camera-ready smile." },
  { icon: AlignHorizontalSpaceAround, title: "Orthodontics", copy: "Invisalign and modern braces for kids, teens and adults — straighter, faster, simpler." },
  { icon: Baby, title: "Pediatric Dentistry", copy: "A gentle, fun-first experience that helps little patients build lifelong dental habits." },
  { icon: Bone, title: "Dental Implants", copy: "Permanent, natural-looking tooth replacement using same-day digital implant technology." },
  { icon: Siren, title: "Emergency Care", copy: "Same-day appointments for tooth pain, chips and accidents — call any time, day or night." },
];

export function Services() {
  return (
    <section className="py-24 lg:py-32 bg-cloud">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[13px] font-semibold tracking-[0.18em] uppercase text-primary">Our Services</span>
          <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(2rem,4vw,3.5rem)] leading-[1.1]">
            Complete Dental Care, <span className="gradient-text">Under One Roof</span>
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, copy }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group bg-white rounded-3xl p-7 shadow-soft hover:shadow-elevated hover:-translate-y-2 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl gradient-cta grid place-items-center shadow-glow group-hover:rotate-6 transition-transform">
                <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display font-bold text-xl text-ink">{title}</h3>
              <p className="mt-2 text-slate-body text-[15px] leading-[1.65]">{copy}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
