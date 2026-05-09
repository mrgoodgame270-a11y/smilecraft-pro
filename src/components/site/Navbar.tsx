import { useEffect, useState } from "react";
import { Menu, X, Plus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = ["Home", "About Us", "Services", "Dentists", "Pages", "Blog", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? "bg-white/85 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-cta grid place-items-center shadow-glow">
            <ToothIcon className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-extrabold text-2xl text-ink tracking-tight">
            Decare<span className="text-primary">.</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item}
              href="#"
              className="group flex items-center gap-1 px-4 py-2 text-[15px] font-semibold text-ink hover:text-primary transition"
            >
              {item}
              {!["Contact", "Blog"].includes(item) && (
                <Plus className="w-3.5 h-3.5 text-primary opacity-70 group-hover:rotate-90 transition-transform" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#booking"
            className="hidden md:inline-flex items-center gap-2 gradient-cta text-white font-semibold text-sm px-6 py-3 rounded-full shadow-glow hover:scale-[1.03] transition"
          >
            BOOK APPOINTMENT <ArrowRight className="w-4 h-4" />
          </a>
          <button
            className="lg:hidden w-11 h-11 rounded-xl bg-lavender grid place-items-center"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-primary-deep" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary-deep text-white p-6 flex flex-col"
          >
            <div className="flex justify-between items-center">
              <span className="font-display font-extrabold text-2xl">Decare.</span>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-2 mt-12">
              {NAV.map((item, i) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-3xl font-display font-bold py-3 border-b border-white/10"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-auto gradient-cta text-white font-semibold py-4 rounded-full text-center shadow-glow"
            >
              BOOK APPOINTMENT
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 3c-2.5 0-4 1.8-4 4.5 0 2 .8 3.5 1.5 5.5.4 1.2.5 2.5.7 4 .2 1.8.8 4 2.3 4 1.4 0 1.7-1.5 2-3.5.3-1.7.5-3 1.5-3s1.2 1.3 1.5 3c.3 2 .6 3.5 2 3.5 1.5 0 2.1-2.2 2.3-4 .2-1.5.3-2.8.7-4C18.2 11 19 9.5 19 7.5 19 4.8 17.5 3 15 3c-1.5 0-2.4.6-3 1-.6-.4-1.5-1-3-1z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
