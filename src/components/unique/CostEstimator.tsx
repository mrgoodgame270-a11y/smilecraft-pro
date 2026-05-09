import { useState } from "react";

const TREATMENTS = [
  { name: "Cleaning & Exam", base: 250 },
  { name: "Whitening", base: 500 },
  { name: "Single Veneer", base: 1400 },
  { name: "Crown", base: 1800 },
  { name: "Implant", base: 3500 },
  { name: "Invisalign Full", base: 5500 },
];

const COVERAGE: Record<string, number> = {
  None: 0,
  "Basic (50%)": 50,
  "Standard (60%)": 60,
  "Premium (80%)": 80,
};

export function CostEstimator() {
  const [t, setT] = useState(TREATMENTS[0].name);
  const [c, setC] = useState("Standard (60%)");
  const [count, setCount] = useState(1);

  const treatment = TREATMENTS.find((x) => x.name === t)!;
  const coverage = COVERAGE[c];
  const total = treatment.base * count;
  const insurance = Math.round((total * coverage) / 100);
  const oop = total - insurance;

  return (
    <div className="bg-cream rounded-3xl p-6 md:p-8 shadow-soft">
      <h3 className="font-display font-bold text-xl text-ink">Cost Estimator</h3>
      <p className="text-sm text-slate-body mt-1">
        Quick estimate. Final pricing confirmed at consultation.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label className="text-sm font-semibold text-ink">Treatment</label>
          <select
            value={t}
            onChange={(e) => setT(e.target.value)}
            className="mt-2 w-full h-12 px-4 rounded-xl bg-cream-deep border-2 border-border focus:border-primary outline-none"
          >
            {TREATMENTS.map((x) => (
              <option key={x.name} value={x.name}>
                {x.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold text-ink">Insurance coverage</label>
          <select
            value={c}
            onChange={(e) => setC(e.target.value)}
            className="mt-2 w-full h-12 px-4 rounded-xl bg-cream-deep border-2 border-border focus:border-primary outline-none"
          >
            {Object.keys(COVERAGE).map((k) => (
              <option key={k}>{k}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold text-ink flex justify-between">
            <span>Number of teeth or sessions</span>
            <span className="text-primary">{count}</span>
          </label>
          <input
            type="range"
            min={1}
            max={8}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="mt-2 w-full accent-primary"
          />
        </div>
      </div>

      <div className="mt-7 bg-cream-deep rounded-2xl p-5 space-y-2">
        <Row label="Treatment total" value={`$${total.toLocaleString()}`} />
        <Row label="Insurance covers" value={`-$${insurance.toLocaleString()}`} />
        <div className="border-t border-border pt-3 flex justify-between items-baseline">
          <span className="font-display font-bold text-ink">Your estimated cost</span>
          <span className="font-display font-extrabold text-3xl gradient-text">
            ${oop.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-slate-body">{label}</span>
      <span className="font-semibold text-ink">{value}</span>
    </div>
  );
}
