import { ArrowRight, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 gradient-hero relative overflow-hidden">
      <div className="absolute -top-20 right-1/4 w-96 h-96 rounded-full bg-cyan-glow/20 blur-3xl" />
      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="font-display font-extrabold text-[clamp(2rem,5vw,4rem)] leading-[1.05]">
          Ready for a Healthier, <span className="text-cyan-glow">Brighter Smile?</span>
        </h2>
        <p className="mt-5 text-white/80 text-lg max-w-xl mx-auto">
          Join 25,000+ patients who chose Decare. Book in 30 seconds — we'll handle the rest.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#booking" className="bg-white text-primary font-semibold px-7 py-4 rounded-full shadow-elevated hover:scale-[1.03] transition flex items-center gap-2">
            Book Appointment <ArrowRight className="w-4 h-4" />
          </a>
          <a href="tel:+15551234567" className="border-2 border-white/30 text-white font-semibold px-7 py-4 rounded-full hover:bg-white/10 transition flex items-center gap-2">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
