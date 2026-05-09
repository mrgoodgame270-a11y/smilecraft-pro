import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Check, ArrowRight, MessageCircle } from "lucide-react";

const SERVICES = ["General Cleaning", "Cosmetic Consultation", "Orthodontics", "Dental Implants", "Emergency Visit"];
const TIMES = ["9:00", "10:30", "12:00", "14:30", "16:00", "17:30"];

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

export function Booking() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ service: "", date: "", time: "", name: "", phone: "", email: "" });
  const days = makeDays();

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <section id="booking" className="py-24 lg:py-32 gradient-hero relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-glow/15 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-glow/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 text-white">
          <span className="text-[13px] font-semibold tracking-[0.18em] uppercase text-cyan-glow">Booking Engine</span>
          <h2 className="mt-3 font-display font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1]">
            Book Your Visit in <span className="text-cyan-glow">30 Seconds</span>
          </h2>
          <p className="mt-4 text-white/80 text-[1.0625rem] max-w-lg">
            No phone tag. No waiting on hold. Pick your service, choose a slot — we'll send instant SMS confirmation.
          </p>

          <div className="mt-8 bg-white rounded-3xl p-6 lg:p-8 text-ink shadow-elevated">
            {/* progress */}
            <div className="flex items-center gap-2 mb-6">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`h-1.5 flex-1 rounded-full transition ${i <= step ? "bg-primary" : "bg-lavender"}`} />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {step === 0 && (
                  <div>
                    <Label icon={User} text="Choose a service" />
                    <div className="grid sm:grid-cols-2 gap-2 mt-3">
                      {SERVICES.map((s) => (
                        <button key={s} onClick={() => { setData({ ...data, service: s }); next(); }}
                          className={`text-left px-4 py-3 rounded-xl border-2 transition font-medium ${data.service === s ? "border-primary bg-lavender" : "border-border hover:border-primary/40"}`}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {step === 1 && (
                  <div>
                    <Label icon={Calendar} text="Pick a date" />
                    <div className="grid grid-cols-7 gap-2 mt-3">
                      {days.map((d) => {
                        const key = d.toDateString();
                        const sel = data.date === key;
                        return (
                          <button key={key} onClick={() => { setData({ ...data, date: key }); next(); }}
                            className={`p-2 rounded-xl text-center transition ${sel ? "gradient-cta text-white shadow-glow" : "bg-lavender hover:bg-primary/10"}`}>
                            <div className="text-[10px] uppercase font-semibold opacity-70">{d.toLocaleDateString("en", { weekday: "short" })}</div>
                            <div className="text-lg font-extrabold">{d.getDate()}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div>
                    <Label icon={Clock} text="Pick a time" />
                    <div className="grid grid-cols-3 gap-2 mt-3">
                      {TIMES.map((t) => (
                        <button key={t} onClick={() => { setData({ ...data, time: t }); next(); }}
                          className={`px-4 py-3 rounded-xl font-semibold transition ${data.time === t ? "gradient-cta text-white shadow-glow" : "bg-lavender hover:bg-primary/10"}`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="space-y-3">
                    <Label icon={User} text="Your details" />
                    <input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="Full name" className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none" />
                    <input value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} placeholder="Phone" className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none" />
                    <input value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none" />
                    <button onClick={next} className="w-full gradient-cta text-white font-semibold py-3 rounded-xl shadow-glow flex items-center justify-center gap-2">
                      Confirm Booking <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
                {step === 4 && (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 rounded-full bg-success/15 grid place-items-center mx-auto">
                      <Check className="w-8 h-8 text-success" strokeWidth={3} />
                    </div>
                    <h3 className="mt-4 font-display font-extrabold text-2xl">You're booked!</h3>
                    <p className="mt-2 text-slate-body">A confirmation SMS is on its way to {data.phone || "your phone"}.</p>
                    <button onClick={() => setStep(0)} className="mt-4 text-primary font-semibold">Book another →</button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {step > 0 && step < 4 && (
              <button onClick={prev} className="mt-4 text-sm text-slate-body hover:text-primary">← Back</button>
            )}
          </div>
        </div>

        {/* Phone preview */}
        <div className="lg:col-span-2 flex justify-center">
          <div className="relative w-[280px] h-[560px] rounded-[44px] bg-ink p-3 shadow-elevated">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-ink rounded-b-2xl z-10" />
            <div className="w-full h-full rounded-[36px] bg-gradient-to-b from-lavender to-white p-4 overflow-hidden">
              <div className="text-center text-xs text-slate-body mt-6">Today 2:14 PM</div>
              <div className="mt-4 bg-white rounded-2xl p-4 shadow-soft">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                  <MessageCircle className="w-3.5 h-3.5" /> Decare Dental
                </div>
                <p className="mt-2 text-sm text-ink leading-relaxed">
                  Hi Sarah! ✨ Your appointment is confirmed for <b>Tue 3:30 PM</b> with Dr. Mubara. Reply <b>Y</b> to confirm or <b>R</b> to reschedule.
                </p>
              </div>
              <div className="mt-3 bg-primary/10 rounded-2xl p-3">
                <p className="text-sm text-ink">Y</p>
              </div>
              <div className="mt-3 bg-white rounded-2xl p-4 shadow-soft">
                <div className="flex items-center gap-2 text-xs font-semibold text-success">
                  <Check className="w-3.5 h-3.5" /> Confirmed
                </div>
                <p className="mt-1 text-sm text-ink">See you Tuesday! We'll send a reminder 24h before.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold text-slate-body">
      <Icon className="w-4 h-4 text-primary" /> {text}
    </div>
  );
}
