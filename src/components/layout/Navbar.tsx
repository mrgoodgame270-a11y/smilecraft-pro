import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";

const NAV: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Dentists", to: "/dentists" },
  { label: "Pricing", to: "/pricing" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

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
        scrolled ? "bg-cream/85 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-cta grid place-items-center shadow-glow">
            <ToothIcon className="w-5 h-5 text-cream" />
          </div>
          <span className="font-display font-extrabold text-2xl text-ink tracking-tight">
            Decare<span className="text-accent">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: item.to === "/" }}
              className="px-4 py-2 text-[15px] font-semibold text-ink hover:text-accent transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/booking"
            className="hidden md:inline-flex items-center gap-2 gradient-cta text-cream font-semibold text-sm px-6 py-3 rounded-full shadow-glow hover:-translate-y-0.5 transition"
          >
            Book Appointment <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            className="lg:hidden w-12 h-12 rounded-xl bg-cloud grid place-items-center"
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-primary-deep text-cream p-6 flex flex-col"
          >
            <div className="flex justify-between items-center">
              <span className="font-display font-extrabold text-2xl">
                Decare<span className="text-accent-soft">.</span>
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close" className="w-12 h-12 grid place-items-center">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 mt-10">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block text-3xl font-display font-bold py-3 border-b border-cream/10"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-auto gradient-cta text-cream font-semibold py-4 rounded-full text-center shadow-glow"
            >
              Book Appointment
            </Link>
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
