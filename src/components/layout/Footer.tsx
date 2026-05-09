import { Facebook, Instagram, Twitter, Youtube, ShieldCheck, Award } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

const QUICK_LINKS: { label: string; to: string }[] = [
  { label: "About Us", to: "/about" },
  { label: "Our Dentists", to: "/dentists" },
  { label: "Patient Stories", to: "/testimonials" },
  { label: "Blog & Resources", to: "/blog" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const SERVICE_LINKS: { label: string; slug: string }[] = [
  { label: "General Dentistry", slug: "general-dentistry" },
  { label: "Cosmetic Dentistry", slug: "cosmetic" },
  { label: "Orthodontics", slug: "orthodontics" },
  { label: "Pediatric Care", slug: "pediatric" },
  { label: "Dental Implants", slug: "implants" },
  { label: "Emergency Care", slug: "emergency" },
];

export function Footer() {
  return (
    <footer className="bg-primary-deep text-cream/85 pt-20 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-cta grid place-items-center shadow-glow">
              <span className="text-cream font-extrabold">D</span>
            </div>
            <span className="font-display font-extrabold text-2xl text-cream">
              Decare<span className="text-accent-soft">.</span>
            </span>
          </Link>
          <p className="mt-5 text-cream/65 leading-[1.7] max-w-sm">
            Modern dentistry that genuinely cares. Gentle hands, smart technology, and a team that remembers your name.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { Icon: Facebook, href: "https://facebook.com" },
              { Icon: Instagram, href: "https://instagram.com" },
              { Icon: Twitter, href: "https://twitter.com" },
              { Icon: Youtube, href: "https://youtube.com" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-cream/10 grid place-items-center hover:bg-accent transition" aria-label="Social link">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="mt-6 flex gap-3 flex-wrap">
            <span className="flex items-center gap-2 text-xs bg-cream/10 rounded-full px-3 py-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-soft" /> ADA Accredited
            </span>
            <span className="flex items-center gap-2 text-xs bg-cream/10 rounded-full px-3 py-1.5">
              <Award className="w-3.5 h-3.5 text-accent-soft" /> Best of 2025
            </span>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display font-bold text-cream text-lg">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-accent-soft transition">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-display font-bold text-cream text-lg">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICE_LINKS.map((l) => (
              <li key={l.label}>
                <Link to="/services/$slug" params={{ slug: l.slug }} className="hover:text-accent-soft transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-display font-bold text-cream text-lg">Stay in the Loop</h4>
          <p className="mt-3 text-sm text-cream/65">Smile tips, special offers and community news. No spam.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }}
            className="mt-4 bg-cream/10 rounded-full p-1.5 flex items-center"
          >
            <input type="email" required placeholder="Email address" className="bg-transparent flex-1 px-4 py-2 outline-none text-sm placeholder:text-cream/50" />
            <button className="gradient-cta px-5 py-2 rounded-full text-sm font-semibold text-cream shadow-glow">Join</button>
          </form>
          <div className="mt-5 text-sm space-y-1 text-cream/65">
            <a href={`tel:${PHONE_TEL}`} className="block hover:text-cream">📞 {PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="block hover:text-cream">✉ {EMAIL}</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-6 border-t border-cream/10 flex flex-wrap items-center justify-between gap-3 text-xs text-cream/50">
        <span>© 2026 Decare Dental. All rights reserved.</span>
        <div className="flex gap-5">
          <Link to="/" className="hover:text-cream">Privacy</Link>
          <Link to="/" className="hover:text-cream">Terms</Link>
          <Link to="/" className="hover:text-cream">Sitemap</Link>
        </div>
        <span>Built with care.</span>
      </div>
    </footer>
  );
}
