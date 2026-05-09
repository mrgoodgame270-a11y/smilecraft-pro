import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Phone, MessageSquare, CheckCircle2 } from "lucide-react";

const STEPS = [
  { icon: Phone, label: "📞 Incoming call", sub: "Sarah · +1 555-0142", color: "text-primary" },
  { icon: Phone, label: "Missed — auto-detected", sub: "0:08", color: "text-coral" },
  { icon: MessageSquare, label: "SMS auto-sent", sub: "“Sorry we missed you! Tap to book →”", color: "text-primary" },
  { icon: MessageSquare, label: "Patient replied", sub: "“Tomorrow 3pm please”", color: "text-primary" },
  { icon: CheckCircle2, label: "Appointment booked ✓", sub: "Tue · 3:00 PM · Cleaning", color: "text-success" },
];

export function MissedCallDemo() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % (STEPS.length + 1)), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-3xl gradient-hero p-8 lg:p-10 text-white relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-cyan-glow/20 blur-3xl" />
      <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-cyan-glow">Live Demo</span>
      <h3 className="mt-2 font-display font-extrabold text-3xl">Missed Call → Booked Patient</h3>
      <p className="mt-2 text-white/70 text-sm">Watch how a lost call becomes revenue, automatically.</p>

      <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 max-w-md">
        <div className="space-y-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                opacity: i < step ? 1 : 0.25,
                x: i < step ? 0 : -8,
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 bg-white/10 rounded-xl px-3 py-2.5"
            >
              <div className="w-9 h-9 rounded-lg bg-white/15 grid place-items-center">
                <s.icon className={`w-4 h-4 ${i < step ? s.color : "text-white/60"}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold truncate">{s.label}</div>
                <div className="text-[11px] text-white/70 truncate">{s.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
