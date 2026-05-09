import { useState } from "react";
import { Check, X, Search } from "lucide-react";

const PROVIDERS = [
  { name: "Delta Dental", accepted: true, note: "PPO, Premier and DeltaCare HMO accepted" },
  { name: "MetLife", accepted: true, note: "All PPO plans, claims submitted in network" },
  { name: "Cigna", accepted: true, note: "PPO and DPPO Advantage networks" },
  { name: "Aetna", accepted: true, note: "PPO and DMO accepted" },
  { name: "Blue Cross Blue Shield", accepted: true, note: "Most BCBS plans accepted" },
  { name: "Guardian", accepted: true, note: "PPO accepted, DentalGuard Preferred" },
  { name: "United Healthcare", accepted: true, note: "Options PPO accepted" },
  { name: "Humana", accepted: false, note: "Out of network, we file claims for reimbursement" },
];

export function InsuranceChecker() {
  const [selected, setSelected] = useState<string>("");
  const provider = PROVIDERS.find((p) => p.name === selected);

  return (
    <div className="bg-cream-deep rounded-3xl p-6 md:p-8 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl gradient-cta grid place-items-center shadow-glow">
          <Search className="w-5 h-5 text-cream" />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-ink">Insurance Checker</h3>
          <p className="text-sm text-slate-body">See if we accept your plan in seconds.</p>
        </div>
      </div>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="mt-5 w-full h-14 px-4 rounded-2xl bg-cream border-2 border-border focus:border-primary outline-none text-ink font-medium"
      >
        <option value="">Choose your insurance provider</option>
        {PROVIDERS.map((p) => (
          <option key={p.name} value={p.name}>{p.name}</option>
        ))}
      </select>

      {provider && (
        <div className={`mt-5 rounded-2xl p-5 flex items-start gap-3 ${provider.accepted ? "bg-success/10" : "bg-coral/10"}`}>
          <div className={`w-10 h-10 rounded-full grid place-items-center shrink-0 ${provider.accepted ? "bg-success" : "bg-coral"}`}>
            {provider.accepted ? <Check className="w-5 h-5 text-cream" strokeWidth={3} /> : <X className="w-5 h-5 text-cream" strokeWidth={3} />}
          </div>
          <div>
            <div className="font-display font-bold text-ink">
              {provider.accepted ? `Yes, we accept ${provider.name}` : `${provider.name} is out of network`}
            </div>
            <div className="text-sm text-slate-body mt-1">{provider.note}</div>
          </div>
        </div>
      )}

      <p className="mt-4 text-xs text-slate-body">
        Not sure? Call us at <a href="tel:+15551234567" className="text-primary font-semibold">+1 (555) 123 4567</a> and we will check for you.
      </p>
    </div>
  );
}
