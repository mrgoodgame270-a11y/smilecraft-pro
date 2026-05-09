# Decare Dental, Complete Overhaul Plan

This is a large multi-phase rebuild. I will execute it in this order, in a single pass, then verify.

## 1. New Color System (src/styles.css)
Replace the cold blue tokens with the warm Teal Navy + Coral Peach + Cream palette:
- `--primary-900 #0B3B47`, `--primary-700 #0F5A6B`, `--primary-500 #1B8A9E`, `--primary-300 #5EC4D6`
- `--accent-600 #E07856`, `--accent-400 #F4A28C`, `--accent-200 #FBE4D8`
- `--cream-50/100/200`, `--ink-900/600/400`, `--gold-500`, `--green-500`
- Gradients: `gradient-hero`, `gradient-cta` (teal to coral, the signature), `gradient-warm`, `gradient-glow`
- Body bg becomes cream, never pure white

## 2. Multi-Page Routing
TanStack Start uses file-based routing under `src/routes/` (NOT react-router-dom, NOT `src/pages/`). Create:
```
/                 index.tsx          (condensed home)
/about            about.tsx
/services         services.tsx
/services/$slug   services.$slug.tsx
/dentists         dentists.tsx
/dentists/$slug   dentists.$slug.tsx
/booking          booking.tsx
/pricing          pricing.tsx
/gallery          gallery.tsx
/contact          contact.tsx
/faq              faq.tsx
/testimonials     testimonials.tsx
/blog             blog.tsx
/blog/$slug       blog.$slug.tsx
```
Each route gets unique `head()` meta (title, description, og), breadcrumbs, shared layout via `__root.tsx` (TopBar + Navbar + Outlet + Footer + FloatingActions + MobileBottomBar). 300ms fade transitions via Framer Motion.

Condensed homepage = Hero, LogoStrip, Services Preview (3 cards + View All), About snippet, Stats, top Testimonial, Booking CTA band.

## 3. Hero Redesign
- Eyebrow: "WELCOME TO DECARE DENTAL"
- H1: "Smiles Built On / Trust & Precision." (Trust gets gradient-cta text)
- Subhead, no dashes
- REMOVE email form. Replace with two CTAs:
  - Primary pill "Book Free Consultation →" (routes to /booking)
  - Ghost "📞 Call (555) 123 4567" (tel: link)
- Trust strip: stars 5.0 · 25,000+ patients · award winning (vertical divider, NO dashes)
- Right side: doctor image + 3 floating cards (profile, 98% trust ring in coral, "Now Open · Monday to Saturday · 9 AM to 9 PM" pill)
- Background: gradient-warm + gradient-glow radial

## 4. Floating Elements Fix
Vertical stack, bottom-right:
- Chatbot launcher: `bottom: 96px; right: 24px;` (60×60 desktop, 48×48 mobile)
- WhatsApp: `bottom: 24px; right: 24px;` (60×60 desktop, 48×48 mobile)
- z-index 50, hide when drawer open, aria-labels
- Mobile sticky bottom bar [Call][WhatsApp][Book] always visible <768px, h-16

## 5. Em-Dash Purge
Codebase-wide find/replace `—` and `–`. Use `.`, `,`, `:`, `·`, `→`, or "to". Hard rule, zero tolerance.

## 6. Make Everything Clickable
Every nav item, service card, dentist card, "Learn More", phone, email, social, FAQ accordion, pricing CTA, footer link, newsletter form. Use TanStack `<Link to>` for internal, `<a target="_blank">` for external. Hover + focus + active states everywhere.

## 7. Professional Animations Only
Remove bounces/3D/parallax. Use only:
- Fade-up on scroll (24px, 600ms ease-out, stagger 80ms, `viewport={{ once: true }}`)
- Gentle Y float ±6px on cards
- Number count-up
- Button lift -2px hover
- Gradient shift on CTA hover
- Card shadow grow
- 300ms fade page transitions
- Chatbot pulse every 5s

## 8. Mobile Rebuild
- Hero stacks vertical, image first, CTAs full-width 56px pill
- Single-column sections, py-16 not py-32
- 2×2 stats grid
- Min tap target 48×48, body font ≥16px
- All images `loading="lazy"` with aspect-ratio

## 9. Unique Interactive Widgets
- **SmileScoreQuiz** (3-step, on home + /services)
- **LiveClinicStatus** pill in navbar (real-time hour check)
- **ToothAnatomyExplorer** layered SVG with hover (services page)
- **InsuranceChecker** dropdown (contact / pricing)
- **PainLevelSelector** in booking flow (emergency reroutes to call modal)
- **CostEstimator** slider (pricing page)

## 10. Copy Rewrite
All copy: warm, benefit-first, ≤18 words/sentence, active voice, zero dashes.

## 11. Hydration Fix
Fix the existing TopBar hydration mismatch (whitespace between `<Mail>` icon and email text).

## 12. Final Verification
Run through every checklist item, build clean, no console errors, test mobile viewport.

## Technical Notes
- This project uses **TanStack Start with file-based routing**, not react-router-dom. The user's prompt requested react-router-dom but that conflicts with the existing stack. I will use TanStack Start's `createFileRoute`, `Link`, and `head()` which provide the same multi-page + per-page SEO outcome.
- React Helmet Async is unnecessary, TanStack's `head()` handles per-route meta.
- Existing components in `src/components/site/` and `src/components/automation/` will be refactored into `src/components/layout/`, `src/components/sections/`, `src/components/unique/`.
- The shared layout (TopBar, Navbar, Footer, FloatingActions, MobileBottomBar) moves into `src/routes/__root.tsx` so it persists across all pages.

## Scope Confirmation
This is roughly 25–35 file changes. I will execute end-to-end in one pass without stopping for confirmation between phases. Ready to proceed on approval.