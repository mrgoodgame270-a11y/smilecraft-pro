import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type Msg = { role: "bot" | "user"; text: string };

const QUICK = ["Book Appointment", "Pricing", "Emergency", "Insurance"];

const REPLIES: Record<string, string> = {
  "book appointment": "Great! I can book you in. What day works best — today, tomorrow, or later this week?",
  pricing: "Our memberships start at $49/mo. Cleanings are $99 without insurance. Want me to send a full price list?",
  emergency: "I'm so sorry — call us now at +1 (555) 123-4567 for same-day care. Or share your address and I'll find your nearest spot.",
  insurance: "We accept all major PPOs (Delta, MetLife, Cigna, Aetna, BCBS) and offer a $49/mo plan if you're uninsured.",
};

export function ChatbotDrawer() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "Hi! I'm Decare's AI assistant 👋 I can book appointments, answer questions, and help with insurance. What brings you in today?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const key = text.toLowerCase();
      const found = Object.keys(REPLIES).find((k) => key.includes(k));
      const reply = found ? REPLIES[found] : "Got it! A team member will follow up shortly. In the meantime, would you like to pick a time on our calendar?";
      setMsgs((m) => [...m, { role: "bot", text: reply }]);
      setTyping(false);
    }, 900);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 gradient-cta text-white rounded-full pl-3 pr-5 py-3 shadow-glow flex items-center gap-2 hover:scale-105 transition group"
        aria-label="Open chat"
      >
        <span className="w-9 h-9 rounded-full bg-white/20 grid place-items-center">
          <Sparkles className="w-4 h-4" />
        </span>
        <span className="font-semibold text-sm">Ask Decare</span>
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-success animate-pulse-dot" />
      </button>

      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener"
        className="fixed bottom-6 right-[210px] z-40 w-14 h-14 rounded-full bg-[#25D366] grid place-items-center shadow-glow hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[420px] bg-white flex flex-col shadow-elevated"
            >
              <div className="gradient-hero text-white p-5 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white/20 grid place-items-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="font-display font-bold">Ask Decare</div>
                  <div className="text-xs text-white/75 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" /> Typically replies in seconds
                  </div>
                </div>
                <button onClick={() => setOpen(false)} className="w-9 h-9 rounded-full bg-white/15 grid place-items-center hover:bg-white/25" aria-label="Close">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-3 bg-cloud">
                {msgs.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user" ? "gradient-cta text-white rounded-br-sm" : "bg-white text-ink shadow-soft rounded-bl-sm"
                    }`}>{m.text}</div>
                  </div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="bg-white shadow-soft rounded-2xl px-4 py-3 flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <span key={i} className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" style={{ animationDelay: `${i * 0.15}s` }} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-border bg-white">
                {msgs.length <= 1 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {QUICK.map((q) => (
                      <button key={q} onClick={() => send(q)} className="text-xs bg-lavender text-primary-deep font-semibold px-3 py-1.5 rounded-full hover:bg-primary/10">{q}</button>
                    ))}
                  </div>
                )}
                <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex items-center gap-2 bg-lavender rounded-full p-1.5">
                  <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." className="flex-1 bg-transparent px-4 py-2 outline-none text-sm" />
                  <button className="w-10 h-10 rounded-full gradient-cta grid place-items-center shadow-glow" aria-label="Send">
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </form>
                <div className="text-[10px] text-slate-body text-center mt-2">Powered by Decare AI</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
