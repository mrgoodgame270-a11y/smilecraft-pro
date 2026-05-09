import { Mail, Phone, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden md:block bg-[#0A2A66] text-white/90 text-[13px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-10">
        <div className="flex items-center gap-6">
          <a href="mailto:hello@decaredental.com" className="flex items-center gap-2 hover:text-white transition">
            <Mail className="w-3.5 h-3.5 text-primary-glow" /> hello@decaredental.com
          </a>
          <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-white transition">
            <Phone className="w-3.5 h-3.5 text-primary-glow" /> +1 (555) 123-4567
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-[12px]">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
            Now Open · Mon–Sat 9–9
          </span>
          <div className="flex items-center gap-3 pl-4 border-l border-white/15">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-primary-glow transition" aria-label="Social">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
