import { MapPin, Clock, Phone, Mail, Car, Train } from "lucide-react";

const HOURS = [
  ["Monday – Friday", "9:00 AM – 9:00 PM"],
  ["Saturday", "9:00 AM – 6:00 PM"],
  ["Sunday", "Closed (emergencies only)"],
];

export function Location() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-stretch">
        <div>
          <span className="text-[13px] font-semibold tracking-[0.18em] uppercase text-primary">Visit Us</span>
          <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(2rem,4vw,3.5rem)] leading-[1.1]">
            Find Us in the <span className="gradient-text">Heart of Town</span>
          </h2>

          <div className="mt-8 space-y-5">
            <Row icon={MapPin}><b className="text-ink">2245 Cedar Avenue,</b> Suite 400 — Downtown, CA 90210</Row>
            <Row icon={Phone}><a href="tel:+15551234567" className="hover:text-primary">+1 (555) 123-4567</a></Row>
            <Row icon={Mail}><a href="mailto:hello@decaredental.com" className="hover:text-primary">hello@decaredental.com</a></Row>
            <Row icon={Car}>Free parking on premises (60 spots)</Row>
            <Row icon={Train}>2 min walk from Cedar Metro Station</Row>
          </div>

          <div className="mt-8 bg-lavender rounded-2xl p-5">
            <div className="flex items-center gap-2 font-display font-bold text-ink"><Clock className="w-4 h-4 text-primary" /> Office Hours</div>
            <div className="mt-3 space-y-2 text-sm">
              {HOURS.map(([d, h]) => (
                <div key={d} className="flex justify-between text-slate-body">
                  <span>{d}</span><span className="font-semibold text-ink">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <a href="#" className="mt-6 inline-block gradient-cta text-white font-semibold px-6 py-3 rounded-full shadow-glow">Get Directions →</a>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-elevated min-h-[460px] bg-lavender">
          <iframe
            title="Decare Dental location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-118.2537%2C34.0466%2C-118.2337%2C34.0566&layer=mapnik"
            className="w-full h-full min-h-[460px] grayscale-[20%]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
function Row({ icon: Icon, children }: { icon: any; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-slate-body">
      <span className="w-10 h-10 rounded-xl bg-primary/8 grid place-items-center shrink-0">
        <Icon className="w-4 h-4 text-primary" />
      </span>
      <div className="pt-2">{children}</div>
    </div>
  );
}
