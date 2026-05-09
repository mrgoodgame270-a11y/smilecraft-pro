import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; to?: string; params?: any }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-body">
      <ol className="flex items-center flex-wrap gap-1">
        <li>
          <Link to="/" className="hover:text-primary inline-flex items-center gap-1">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
        </li>
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            {it.to ? (
              <Link to={it.to as any} params={it.params} className="hover:text-primary">{it.label}</Link>
            ) : (
              <span className="text-ink font-medium">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({ eyebrow, title, subtitle, breadcrumbs }: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; to?: string; params?: any }[];
}) {
  return (
    <section className="relative gradient-warm overflow-hidden">
      <div className="absolute inset-0 gradient-glow pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-6 pt-10 pb-16 md:pt-14 md:pb-20">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        {eyebrow && (
          <span className="mt-4 inline-block text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase text-accent">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 font-display font-extrabold text-ink leading-[1.05] text-[clamp(2rem,5.5vw,4rem)] max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-slate-body text-base md:text-lg leading-[1.6] max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
