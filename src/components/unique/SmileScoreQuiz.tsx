import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, RotateCcw } from "lucide-react";

const QUESTIONS = [
  {
    q: "What is your top dental concern?",
    options: [
      { label: "I want a brighter smile", value: "cosmetic" },
      { label: "I have tooth pain or sensitivity", value: "general" },
      { label: "Crooked or misaligned teeth", value: "ortho" },
      { label: "Missing or broken teeth", value: "implants" },
    ],
  },
  {
    q: "When did you last visit a dentist?",
    options: [
      { label: "Within 6 months", value: 30 },
      { label: "About a year ago", value: 20 },
      { label: "1 to 3 years ago", value: 10 },
      { label: "More than 3 years", value: 0 },
    ],
  },
  {
    q: "What is your ultimate goal?",
    options: [
      { label: "Confident, camera ready smile", value: "cosmetic" },
      { label: "Pain free, healthy mouth", value: "general" },
      { label: "Straight teeth without metal", value: "ortho" },
      { label: "Replace what is missing", value: "implants" },
    ],
  },
] as const;

const RECOMMEND: Record<string, { service: string; slug: string; copy: string }> = {
  cosmetic: {
    service: "Cosmetic Dentistry",
    slug: "cosmetic",
    copy: "Veneers, professional whitening or bonding will transform your smile in 2 visits.",
  },
  general: {
    service: "General Dentistry",
    slug: "general-dentistry",
    copy: "Start with a comprehensive exam and gentle cleaning. We will build a plan from there.",
  },
  ortho: {
    service: "Orthodontics",
    slug: "orthodontics",
    copy: "Invisalign aligners can straighten your teeth in 6 to 18 months, almost invisibly.",
  },
  implants: {
    service: "Dental Implants",
    slug: "implants",
    copy: "Same day digital implants restore function and confidence in a single visit.",
  },
};

export function SmileScoreQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(string | number)[]>([]);

  const reset = () => {
    setStep(0);
    setAnswers([]);
  };

  const onPick = (val: string | number) => {
    const next = [...answers, val];
    setAnswers(next);
    setStep((s) => s + 1);
  };

  const done = step >= QUESTIONS.length;
  const score = done ? 50 + (answers[1] as number) + (answers[0] === answers[2] ? 15 : 5) : 0;
  const concernKey = (answers[2] || answers[0]) as string;
  const rec = done ? RECOMMEND[concernKey] : null;

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-5 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase text-accent">
            Smile Score Quiz
          </span>
          <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]">
            Get Your Personalized <span className="gradient-text">Smile Score</span>
          </h2>
          <p className="mt-4 text-slate-body">
            3 quick questions. We will recommend the right care for you.
          </p>
        </div>

        <div className="mt-10 bg-cream-deep rounded-3xl p-6 md:p-10 shadow-soft">
          {!done && (
            <>
              <div className="flex items-center gap-2 mb-6">
                {QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition ${i <= step ? "bg-accent" : "bg-cream"}`}
                  />
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="font-display font-bold text-xl md:text-2xl text-ink">
                    {QUESTIONS[step].q}
                  </h3>
                  <div className="mt-5 grid sm:grid-cols-2 gap-3">
                    {QUESTIONS[step].options.map((o) => (
                      <button
                        key={o.label}
                        onClick={() => onPick(o.value)}
                        className="text-left bg-cream border-2 border-transparent hover:border-accent rounded-2xl px-5 py-4 font-medium text-ink transition hover:-translate-y-0.5 min-h-[56px]"
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          )}

          {done && rec && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-accent/15 text-accent font-semibold px-4 py-1.5 rounded-full text-xs">
                <Sparkles className="w-3.5 h-3.5" /> Your Smile Score
              </div>
              <div className="mt-4 font-display font-extrabold text-7xl gradient-text">
                {Math.min(score, 95)}
              </div>
              <p className="mt-2 text-slate-body max-w-md mx-auto">
                Recommended next step: <span className="font-semibold text-ink">{rec.service}</span>
              </p>
              <p className="mt-3 text-slate-body max-w-md mx-auto">{rec.copy}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  to="/services/$slug"
                  params={{ slug: rec.slug }}
                  className="bg-cream border-2 border-ink/10 text-ink font-semibold px-6 py-3 rounded-full hover:border-primary hover:text-primary transition inline-flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/booking"
                  className="gradient-cta text-cream font-semibold px-6 py-3 rounded-full shadow-glow hover:-translate-y-0.5 transition inline-flex items-center gap-2"
                >
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={reset}
                  className="text-slate-body font-semibold px-4 py-3 rounded-full hover:text-ink inline-flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" /> Retake
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
