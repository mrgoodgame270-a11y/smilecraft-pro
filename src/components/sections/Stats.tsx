import { useEffect, useRef, useState } from "react";

const STATS = [
  { num: 25000, suffix: "+", label: "Happy Patients" },
  { num: 15, suffix: "+", label: "Years of Care" },
  { num: 98, suffix: "%", label: "Trust Score" },
  { num: 4.9, suffix: "★", label: "Google Rating" },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1500;
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(to * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  const display =
    to >= 1000 ? Math.floor(n).toLocaleString() : to % 1 ? n.toFixed(1) : Math.floor(n);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-16 lg:py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_#5EC4D6_0%,_transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-cream text-center">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl">
              <CountUp to={s.num} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-cream/75 text-sm font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
