import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/BrandLogo";

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

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? "bg-cream/85 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-20">
        <BrandLogo variant="dark" size="md" />

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
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
            aria-label="Open navigation menu"
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
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex justify-between items-center">
              <BrandLogo variant="light" size="md" linked={false} />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="w-12 h-12 grid place-items-center"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 mt-10" aria-label="Mobile navigation">
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
