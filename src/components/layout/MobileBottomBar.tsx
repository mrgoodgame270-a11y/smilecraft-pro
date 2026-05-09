import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PHONE_TEL, WHATSAPP } from "@/lib/site-data";

export function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream border-t border-border shadow-elevated grid grid-cols-3 gap-2 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex flex-col items-center justify-center gap-0.5 h-14 rounded-xl bg-cloud text-primary-deep active:scale-95 transition"
        aria-label="Call clinic"
      >
        <Phone className="w-4 h-4" />
        <span className="text-[11px] font-semibold">Call</span>
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-0.5 h-14 rounded-xl bg-[#25D366]/10 text-[#1B8B43] active:scale-95 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="text-[11px] font-semibold">WhatsApp</span>
      </a>
      <Link
        to="/booking"
        className="flex flex-col items-center justify-center gap-0.5 h-14 rounded-xl gradient-cta text-cream active:scale-95 transition shadow-glow"
        aria-label="Book appointment"
      >
        <Calendar className="w-4 h-4" />
        <span className="text-[11px] font-semibold">Book</span>
      </Link>
    </div>
  );
}
