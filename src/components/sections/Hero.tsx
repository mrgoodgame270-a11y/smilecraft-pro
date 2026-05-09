import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Award, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import doctorImg from "@/assets/hero-doctor.png";
import doc1 from "@/assets/doc-1.jpg";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-warm">
      <div className="pointer-events-none absolute inset-0 gradient-glow" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-6 pt-10 pb-20 lg:pt-16 lg:pb-32 grid lg:grid-cols-12 gap-10 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <span className="inline-block text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase text-primary">
            Welcome to Decare Dental
          </span>

          <h1 className="mt-4 font-display font-extrabold text-ink leading-[1.05] text-[clamp(2.25rem,7vw,5rem)]">
            Smiles Built On <br />
            <span className="gradient-text">Trust</span> & Precision.
          </h1>

          <p className="mt-5 md:mt-6 text-[1rem] md:text-[1.0625rem] leading-[1.7] text-slate-body max-w-xl">
            From gentle cleanings to advanced cosmetic dentistry, our team delivers exceptional care in a calming, modern environment. Book your visit in 30 seconds.
          </p>

          {/* CTAs (replaces email field) */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-xl">
            <Link
              to="/booking"
              className="gradient-cta text-cream font-semibold px-7 rounded-full shadow-glow hover:-translate-y-0.5 transition flex items-center justify-center gap-2 h-14 sm:h-16 text-[15px]"
            >
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="border-2 border-primary-deep/15 bg-cream/70 text-ink font-semibold px-7 rounded-full hover:border-primary hover:text-primary transition flex items-center justify-center gap-2 h-14 sm:h-16 text-[15px]"
            >
              <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-body">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-semibold text-ink">5.0</span>
              <span>Google Rating</span>
            </div>
            <span className="hidden md:inline-block w-px h-4 bg-ink/15" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="font-semibold text-ink">25,000+</span>
              <span>Patients Treated</span>
            </div>
            <span className="hidden md:inline-block w-px h-4 bg-ink/15" />
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span>Award Winning Clinic 2025</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT visual */}
        <div className="lg:col-span-5 order-1 lg:order-2 relative h-[360px] sm:h-[460px] lg:h-[640px]">
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="w-[280px] h-[340px] sm:w-[380px] sm:h-[460px] lg:w-[440px] lg:h-[540px] gradient-hero rounded-[60px] rotate-[-6deg] shadow-elevated" />
          </div>
          <div className="absolute top-6 left-2 w-20 h-20 lg:w-24 lg:h-24 rounded-full border-2 border-dashed border-primary/30" />
          <div className="absolute bottom-20 right-0 w-3 h-3 rounded-full bg-accent-soft" />
          <div className="absolute top-32 right-12 w-2 h-2 rounded-full bg-primary" />

          <motion.img
            src={doctorImg}
            alt="Dr. Mubara Doe at Decare Dental"
            width={1024}
            height={1024}
            loading="eager"
            className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          />

          {/* Floating cards. Scale down on mobile. */}
          <motion.div
            className="absolute top-4 sm:top-16 -left-1 sm:left-0 z-20 bg-cream rounded-2xl shadow-elevated p-2 sm:p-3 pr-3 sm:pr-5 flex items-center gap-2 sm:gap-3 animate-float scale-75 sm:scale-100 origin-top-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <img src={doc1} alt="Dr. Mubara" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
            <div>
              <div className="font-display font-bold text-[13px] sm:text-sm text-ink">Dr. Mubara Doe</div>
              <div className="text-[11px] sm:text-xs text-slate-body">Lead Cosmetic Dentist</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-24 sm:bottom-32 -left-2 sm:left-2 z-20 bg-cream rounded-2xl shadow-elevated p-3 sm:p-4 animate-float-slow scale-75 sm:scale-100 origin-bottom-left"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <svg viewBox="0 0 36 36" className="w-12 h-12 -rotate-90">
                  <circle cx="18" cy="18" r="15" fill="none" stroke="#FBE4D8" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15" fill="none" stroke="url(#tg)" strokeWidth="3" strokeLinecap="round" strokeDasharray="92 100" />
                  <defs>
                    <linearGradient id="tg">
                      <stop offset="0" stopColor="#1B8A9E" />
                      <stop offset="1" stopColor="#E07856" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 grid place-items-center text-[11px] font-extrabold text-ink">98%</div>
              </div>
              <div>
                <div className="font-bold text-sm text-ink">Trusted Score</div>
                <div className="text-[11px] text-slate-body">Patient happiness</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-1/2 -right-1 sm:right-0 z-20 bg-cream rounded-full shadow-elevated px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2 animate-float scale-75 sm:scale-100 origin-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse-dot" />
            <span className="text-[11px] sm:text-xs font-semibold text-ink">Open · Mon to Sat · 9 to 9</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
