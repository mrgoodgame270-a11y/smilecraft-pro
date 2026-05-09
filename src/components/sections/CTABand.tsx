import { ArrowRight, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

export function CTABand() {
  return (
    <section className="py-16 lg:py-24 gradient-hero relative overflow-hidden">
      <div className="absolute -top-20 right-1/4 w-96 h-96 rounded-full bg-accent-soft/25 blur-3xl" />
      <div className="relative max-w-4xl mx-auto px-5 md:px-6 text-center text-cream">
        <h2 className="font-display font-extrabold text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.05]">
          Ready for a Healthier, <span className="text-accent-soft">Brighter Smile?</span>
        </h2>
        <p className="mt-4 text-cream/80 text-base md:text-lg max-w-xl mx-auto">
          Join 25,000+ patients who chose Decare. Book in 30 seconds. We will handle the rest.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
          <Link to="/booking" className="bg-cream text-primary-deep font-semibold px-7 py-4 rounded-full shadow-elevated hover:-translate-y-0.5 transition flex items-center justify-center gap-2">
            Book Appointment <ArrowRight className="w-4 h-4" />
          </Link>
          <a href={`tel:${PHONE_TEL}`} className="border-2 border-cream/30 text-cream font-semibold px-7 py-4 rounded-full hover:bg-cream/10 transition flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
