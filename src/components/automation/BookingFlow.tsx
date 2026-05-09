import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Check, ArrowRight, Phone } from "lucide-react";
import { SERVICES, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

const TIMES = ["9:00 AM", "10:30 AM", "12:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"];
const PAIN: { label: string; emoji: string; value: string }[] = [
  { emoji: "😊", label: "Routine visit", value: "routine" },
  { emoji: "🙂", label: "Mild concern", value: "mild" },
  { emoji: "😐", label: "Moderate", value: "moderate" },
  { emoji: "😟", label: "Painful", value: "painful" },
  { emoji: "🚨", label: "Emergency", value: "emergency" },
];

function makeDays() {
  const days = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

export function BookingFlow() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    pain: "",
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
  });
  const days = makeDays();

  const next = () => setStep((s) => Math.min(s + 1, 5));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  // Emergency reroute
  if (data.pain === "emergency" && step === 1) {
    return (
      <div className="bg-cream rounded-3xl p-6 md:p-10 shadow-elevated border-2 border-coral text-center">
        <div className="w-16 h-16 rounded-full bg-coral/15 grid place-items-center mx-auto">
          <Phone className="w-8 h-8 text-coral" />
        </div>
        <h3 className="mt-4 font-display font-extrabold text-2xl text-ink">Call us right now</h3>
        <p className="mt-2 text-slate-body">
          For dental emergencies, please call our 24/7 line. We will see you today.
        </p>
        <a
          href={`tel:${PHONE_TEL}`}
          className="mt-6 inline-flex items-center gap-2 bg-coral text-cream font-semibold px-7 py-4 rounded-full shadow-glow hover:-translate-y-0.5 transition"
        >
          <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
        </a>
        <button
          onClick={() => setData({ ...data, pain: "" })}
          className="block mx-auto mt-4 text-sm text-slate-body hover:text-ink"
        >
          ← Choose a different urgency
        </button>
      </div>
    );
  }

  return (
    <div className="bg-cream rounded-3xl p-6 md:p-8 text-ink shadow-elevated">
      <div className="flex items-center gap-2 mb-6">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition ${i <= step ? "bg-accent" : "bg-cloud"}`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {step === 0 && (
            <div>
              <Label text="How urgent is this?" />
              <div className="grid grid-cols-5 gap-2 mt-4">
                {PAIN.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => {
                      setData({ ...data, pain: p.value });
                      next();
                    }}
                    className="flex flex-col items-center gap-1 p-3 rounded-2xl border-2 border-border hover:border-accent transition min-h-[88px]"
                  >
                    <span className="text-2xl">{p.emoji}</span>
                    <span className="text-[10px] md:text-[11px] font-semibold text-slate-body text-center leading-tight">
                      {p.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 1 && (
            <div>
              <Label icon={User} text="Choose a service" />
              <div className="grid sm:grid-cols-2 gap-2 mt-4">
                {SERVICES.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => {
                      setData({ ...data, service: s.title });
                      next();
                    }}
                    className={`text-left px-4 py-4 rounded-xl border-2 transition font-medium min-h-[56px] ${data.service === s.title ? "border-primary bg-cloud" : "border-border hover:border-primary/40"}`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <Label icon={Calendar} text="Pick a date" />
              <div className="grid grid-cols-7 gap-2 mt-4">
                {days.map((d) => {
                  const key = d.toDateString();
                  const sel = data.date === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setData({ ...data, date: key });
                        next();
                      }}
                      className={`p-2 rounded-xl text-center transition min-h-[60px] ${sel ? "gradient-cta text-cream shadow-glow" : "bg-cloud hover:bg-accent/15"}`}
                    >
                      <div className="text-[10px] uppercase font-semibold opacity-70">
                        {d.toLocaleDateString("en", { weekday: "short" })}
                      </div>
                      <div className="text-lg font-extrabold">{d.getDate()}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <Label icon={Clock} text="Pick a time" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
                {TIMES.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setData({ ...data, time: t });
                      next();
                    }}
                    className={`px-4 py-4 rounded-xl font-semibold transition min-h-[56px] ${data.time === t ? "gradient-cta text-cream shadow-glow" : "bg-cloud hover:bg-accent/15"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="space-y-3">
              <Label icon={User} text="Your details" />
              <input
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Full name"
                className="w-full h-14 px-4 rounded-xl border-2 border-border focus:border-primary outline-none bg-cream"
              />
              <input
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                placeholder="Phone number"
                type="tel"
                className="w-full h-14 px-4 rounded-xl border-2 border-border focus:border-primary outline-none bg-cream"
              />
              <input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="Email (optional)"
                type="email"
                className="w-full h-14 px-4 rounded-xl border-2 border-border focus:border-primary outline-none bg-cream"
              />
              <button
                onClick={next}
                className="w-full gradient-cta text-cream font-semibold h-14 rounded-xl shadow-glow flex items-center justify-center gap-2"
              >
                Confirm Booking <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
          {step === 5 && (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-success/15 grid place-items-center mx-auto">
                <Check className="w-8 h-8 text-success" strokeWidth={3} />
              </div>
              <h3 className="mt-4 font-display font-extrabold text-2xl">You are booked!</h3>
              <p className="mt-2 text-slate-body">
                A confirmation SMS is on its way to {data.phone || "your phone"}.
              </p>
              <p className="mt-2 text-sm text-slate-body">
                {data.service} · {data.date} · {data.time}
              </p>
              <button
                onClick={() => {
                  setStep(0);
                  setData({
                    pain: "",
                    service: "",
                    date: "",
                    time: "",
                    name: "",
                    phone: "",
                    email: "",
                  });
                }}
                className="mt-4 text-primary font-semibold"
              >
                Book another →
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {step > 0 && step < 5 && (
        <button onClick={prev} className="mt-4 text-sm text-slate-body hover:text-primary">
          ← Back
        </button>
      )}
    </div>
  );
}

function Label({ icon: Icon, text }: { icon?: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold text-slate-body">
      {Icon && <Icon className="w-4 h-4 text-primary" />}
      {text}
    </div>
  );
}
