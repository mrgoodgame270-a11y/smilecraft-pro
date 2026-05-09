import { Mail, Phone, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { LiveClinicStatus } from "@/components/unique/LiveClinicStatus";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

export function TopBar() {
  return (
    <div className="hidden md:block bg-primary-deep text-cream/90 text-[13px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-10">
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 hover:text-cream transition"
          >
            <Mail className="w-3.5 h-3.5 text-primary-glow" />
            <span>{EMAIL}</span>
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 hover:text-cream transition"
          >
            <Phone className="w-3.5 h-3.5 text-primary-glow" />
            <span>{PHONE_DISPLAY}</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <LiveClinicStatus />
          <div className="flex items-center gap-3 pl-4 border-l border-cream/15">
            {[
              { Icon: Facebook, href: "https://facebook.com" },
              { Icon: Instagram, href: "https://instagram.com" },
              { Icon: Twitter, href: "https://twitter.com" },
              { Icon: Youtube, href: "https://youtube.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-soft transition"
                aria-label="Social"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
