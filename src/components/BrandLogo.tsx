import { Link } from "@tanstack/react-router";

/**
 * Reusable brand logo component used in header, footer, mobile menu, etc.
 * Renders the tooth icon inside a gradient box + "Decare." wordmark.
 *
 * @param variant  - "light" for dark backgrounds (cream text), "dark" for light backgrounds (ink text)
 * @param size     - "sm" (32 px icon), "md" (40 px icon – default), "lg" (48 px icon)
 * @param linked   - wraps in a <Link to="/"> when true (default)
 * @param className - extra classes on the outer wrapper
 */

type BrandLogoProps = {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  linked?: boolean;
  className?: string;
};

const SIZES = {
  sm: { box: "w-8 h-8 rounded-lg", icon: "w-4 h-4", text: "text-xl" },
  md: { box: "w-10 h-10 rounded-xl", icon: "w-5 h-5", text: "text-2xl" },
  lg: { box: "w-12 h-12 rounded-xl", icon: "w-6 h-6", text: "text-3xl" },
} as const;

export function BrandLogo({
  variant = "dark",
  size = "md",
  linked = true,
  className = "",
}: BrandLogoProps) {
  const s = SIZES[size];
  const textColor = variant === "light" ? "text-cream" : "text-ink";
  const dotColor = variant === "light" ? "text-accent-soft" : "text-accent";

  const inner = (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className={`${s.box} gradient-cta grid place-items-center shadow-glow shrink-0`}>
        <ToothIcon className={`${s.icon} text-cream`} />
      </span>
      <span className={`font-display font-extrabold ${s.text} ${textColor} tracking-tight`}>
        Decare<span className={dotColor}>.</span>
      </span>
    </span>
  );

  if (!linked) return inner;

  return (
    <Link
      to="/"
      className={`flex items-center gap-2 ${className}`}
      aria-label="Decare Dental – Home"
    >
      <span className={`${s.box} gradient-cta grid place-items-center shadow-glow shrink-0`}>
        <ToothIcon className={`${s.icon} text-cream`} />
      </span>
      <span className={`font-display font-extrabold ${s.text} ${textColor} tracking-tight`}>
        Decare<span className={dotColor}>.</span>
      </span>
    </Link>
  );
}

/** Tooth SVG icon – the single source of truth for the brand mark. */
export function ToothIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 3c-2.5 0-4 1.8-4 4.5 0 2 .8 3.5 1.5 5.5.4 1.2.5 2.5.7 4 .2 1.8.8 4 2.3 4 1.4 0 1.7-1.5 2-3.5.3-1.7.5-3 1.5-3s1.2 1.3 1.5 3c.3 2 .6 3.5 2 3.5 1.5 0 2.1-2.2 2.3-4 .2-1.5.3-2.8.7-4C18.2 11 19 9.5 19 7.5 19 4.8 17.5 3 15 3c-1.5 0-2.4.6-3 1-.6-.4-1.5-1-3-1z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
