import { Facebook, Instagram, Twitter, Youtube, ShieldCheck, Award } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-white/85 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-cta grid place-items-center shadow-glow">
              <span className="text-white font-extrabold">D</span>
            </div>
            <span className="font-display font-extrabold text-2xl text-white">Decare<span className="text-cyan-glow">.</span></span>
          </div>
          <p className="mt-5 text-white/65 leading-[1.7] max-w-sm">
            Modern dentistry that genuinely cares. Gentle hands, smart technology, and a team that remembers your name.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center hover:bg-primary transition" aria-label="Social">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <span className="flex items-center gap-2 text-xs bg-white/10 rounded-full px-3 py-1.5"><ShieldCheck className="w-3.5 h-3.5 text-cyan-glow" /> ADA Accredited</span>
            <span className="flex items-center gap-2 text-xs bg-white/10 rounded-full px-3 py-1.5"><Award className="w-3.5 h-3.5 text-cyan-glow" /> Best of 2025</span>
          </div>
        </div>

        <Col title="Quick Links" items={["About Us", "Our Dentists", "Patient Stories", "Blog & Resources", "Careers", "Contact"]} />
        <Col title="Services" items={["General Dentistry", "Cosmetic Dentistry", "Orthodontics", "Pediatric Care", "Dental Implants", "Emergency Care"]} />

        <div className="lg:col-span-3">
          <h4 className="font-display font-bold text-white text-lg">Stay in the Loop</h4>
          <p className="mt-3 text-sm text-white/65">Smile tips, special offers and community news. No spam.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 bg-white/10 rounded-full p-1.5 flex items-center">
            <input type="email" placeholder="Email address" className="bg-transparent flex-1 px-4 py-2 outline-none text-sm placeholder:text-white/50" />
            <button className="gradient-cta px-5 py-2 rounded-full text-sm font-semibold shadow-glow">Join</button>
          </form>
          <div className="mt-5 text-sm space-y-1 text-white/65">
            <div>📞 +1 (555) 123-4567</div>
            <div>✉ hello@decaredental.com</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
        <span>© 2026 Decare Dental. All rights reserved.</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Sitemap</a>
        </div>
        <span>Built with care 💙</span>
      </div>
    </footer>
  );
}
function Col({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="lg:col-span-2">
      <h4 className="font-display font-bold text-white text-lg">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((i) => (
          <li key={i}><a href="#" className="hover:text-cyan-glow transition">{i}</a></li>
        ))}
      </ul>
    </div>
  );
}
