import { motion } from "framer-motion";
import { Bot, PhoneMissed, CalendarCheck, Star } from "lucide-react";
import { MissedCallDemo } from "@/components/automation/MissedCallDemo";
import { ReviewFunnel } from "@/components/automation/ReviewFunnel";

const FEATURES = [
  { num: "01", icon: Bot, title: "AI Replies Instantly", copy: "Never miss a lead. Our AI responds to every inquiry in under 30 seconds, 24/7." },
  { num: "02", icon: PhoneMissed, title: "Missed-Call → Booking", copy: "Every missed call auto-converts via instant SMS into a confirmed appointment." },
  { num: "03", icon: CalendarCheck, title: "Auto-Booking Engine", copy: "Patients book themselves. No staff time wasted. Calendar syncs in real time." },
  { num: "04", icon: Star, title: "Smart Review Funnel", copy: "Happy patients flow to Google. Unhappy ones route privately to the owner first." },
];

export function WhyChoose() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[13px] font-semibold tracking-[0.18em] uppercase text-primary">Why Choose Decare</span>
          <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(2rem,4vw,3.5rem)] leading-[1.1]">
            Four Engines Quietly Growing <span className="gradient-text">Your Practice</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map(({ num, icon: Icon, title, copy }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative bg-lavender rounded-3xl p-7"
            >
              <span className="font-display font-extrabold text-6xl gradient-text leading-none">{num}</span>
              <div className="mt-6 w-12 h-12 rounded-xl bg-white grid place-items-center shadow-soft">
                <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-display font-bold text-lg text-ink">{title}</h3>
              <p className="mt-2 text-slate-body text-sm leading-[1.6]">{copy}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <MissedCallDemo />
          <ReviewFunnel />
        </div>
      </div>
    </section>
  );
}
