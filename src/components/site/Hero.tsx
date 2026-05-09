import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Award, Sparkles } from "lucide-react";
import doctorImg from "@/assets/hero-doctor.png";
import doc1 from "@/assets/doc-1.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-soft">
      {/* radial accent */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-cyan-glow/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-24 lg:pt-16 lg:pb-32 grid lg:grid-cols-12 gap-10 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.18em] uppercase text-primary">
            <Sparkles className="w-4 h-4" /> Welcome to Decare Dental
          </span>

          <h1 className="mt-5 font-display font-extrabold text-ink leading-[1.05] text-[clamp(2.75rem,6vw,5.25rem)]">
            We Are <span className="gradient-text">Best</span> <br />
            Dental Service
          </h1>

          <p className="mt-6 text-[1.0625rem] leading-[1.7] text-slate-body max-w-xl">
            From gentle cleanings to advanced cosmetic dentistry, our team delivers exceptional care
            in a calming, modern environment. Book in 30 seconds — our AI assistant handles the rest.
          </p>

          {/* Email capture */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 max-w-xl bg-white rounded-full shadow-soft p-2 flex items-center gap-2"
          >
            <input
              type="email"
              placeholder="Your email address..."
              className="flex-1 bg-transparent px-5 py-3 text-ink placeholder:text-slate-body/70 outline-none text-[15px]"
              required
            />
            <button
              type="submit"
              className="gradient-cta text-white font-semibold text-sm px-6 py-3 rounded-full shadow-glow hover:scale-[1.03] transition flex items-center gap-2 whitespace-nowrap"
            >
              GET CALL BACK <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Trust strip */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-body">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-semibold text-ink">5.0</span> Google Rating
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="font-semibold text-ink">25,000+</span> Patients Treated
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              Award-Winning Clinic 2025
            </div>
          </div>
        </motion.div>

        {/* RIGHT — composed visual */}
        <div className="lg:col-span-5 relative h-[520px] lg:h-[640px]">
          {/* blob */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="w-[380px] h-[460px] lg:w-[440px] lg:h-[540px] gradient-hero rounded-[60px] rotate-[-6deg] shadow-elevated" />
          </div>
          {/* decorative dots */}
          <div className="absolute top-8 left-4 w-24 h-24 rounded-full border-2 border-dashed border-primary/30" />
          <div className="absolute bottom-20 right-0 w-3 h-3 rounded-full bg-cyan-glow" />
          <div className="absolute top-32 right-12 w-2 h-2 rounded-full bg-primary" />

          {/* doctor image */}
          <motion.img
            src={doctorImg}
            alt="Dr. Mubara Doe — Best Dental"
            width={1024}
            height={1024}
            className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />

          {/* Floating card 1: doctor profile */}
          <motion.div
            className="absolute top-16 -left-2 lg:left-0 z-20 bg-white rounded-2xl shadow-elevated p-3 pr-5 flex items-center gap-3 animate-float"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <img src={doc1} alt="Dr. Mubara" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <div className="font-display font-bold text-sm text-ink">Dr. Mubara Doe</div>
              <div className="text-xs text-slate-body">Best Dental</div>
            </div>
          </motion.div>

          {/* Floating card 2: Trust score */}
          <motion.div
            className="absolute bottom-32 -left-4 lg:left-2 z-20 bg-white rounded-2xl shadow-elevated p-4 animate-float-slow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <svg viewBox="0 0 36 36" className="w-12 h-12 -rotate-90">
                  <circle cx="18" cy="18" r="15" fill="none" stroke="#EEF2FF" strokeWidth="3" />
                  <circle
                    cx="18" cy="18" r="15" fill="none"
                    stroke="url(#g1)" strokeWidth="3" strokeLinecap="round"
                    strokeDasharray="92 100"
                  />
                  <defs>
                    <linearGradient id="g1">
                      <stop offset="0" stopColor="#2563EB" />
                      <stop offset="1" stopColor="#22D3EE" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 grid place-items-center text-[11px] font-extrabold text-ink">
                  98%
                </div>
              </div>
              <div>
                <div className="font-bold text-sm text-ink">Trusted Score</div>
                <div className="text-[11px] text-slate-body">Patient happiness</div>
              </div>
            </div>
          </motion.div>

          {/* Floating card 3: Now open */}
          <motion.div
            className="absolute top-1/2 -right-2 lg:right-0 z-20 bg-white rounded-full shadow-elevated px-4 py-2.5 flex items-center gap-2 animate-float"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse-dot" />
            <span className="text-xs font-semibold text-ink">Now Open · Mon–Sat 9–9</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
