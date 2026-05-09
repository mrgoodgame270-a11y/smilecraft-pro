import { CheckCheck, Star, AlertTriangle, ArrowRight } from "lucide-react";

export function ReviewFunnel() {
  return (
    <div className="rounded-3xl bg-lavender p-8 lg:p-10 relative overflow-hidden">
      <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-primary">Smart Review Funnel</span>
      <h3 className="mt-2 font-display font-extrabold text-3xl text-ink">Protect Your 5-Star Reputation</h3>
      <p className="mt-2 text-slate-body text-sm">Visit ends → AI surveys patient → routes intelligently.</p>

      <div className="mt-8 space-y-4">
        <Node icon={CheckCheck} title="Visit complete" sub="AI sends a friendly survey via SMS" />
        <div className="ml-6 flex items-center gap-2 text-slate-body text-xs"><ArrowRight className="w-3 h-3" /> If patient rates...</div>
        <div className="grid grid-cols-2 gap-3">
          <Branch
            tone="success"
            icon={Star}
            title="≥ 4 stars"
            sub="→ Redirected to Google review"
          />
          <Branch
            tone="alert"
            icon={AlertTriangle}
            title="< 4 stars"
            sub="→ Private alert to owner"
          />
        </div>
      </div>
    </div>
  );
}

function Node({ icon: Icon, title, sub }: { icon: any; title: string; sub: string }) {
  return (
    <div className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-soft">
      <div className="w-10 h-10 rounded-xl gradient-cta grid place-items-center">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <div className="font-bold text-ink text-sm">{title}</div>
        <div className="text-xs text-slate-body">{sub}</div>
      </div>
    </div>
  );
}
function Branch({ tone, icon: Icon, title, sub }: { tone: "success" | "alert"; icon: any; title: string; sub: string }) {
  const c = tone === "success" ? "bg-success/15 text-success" : "bg-coral/15 text-coral";
  return (
    <div className="bg-white rounded-2xl p-4 shadow-soft">
      <div className={`w-9 h-9 rounded-lg grid place-items-center ${c}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="mt-2 font-bold text-sm text-ink">{title}</div>
      <div className="text-xs text-slate-body">{sub}</div>
    </div>
  );
}
