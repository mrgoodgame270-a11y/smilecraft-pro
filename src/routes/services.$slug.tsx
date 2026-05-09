import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { SERVICES, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetail,
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="font-display font-bold text-3xl">Service not found</h1>
      <Link to="/services" className="mt-4 inline-block text-primary font-semibold">
        ← All services
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="py-32 text-center">
      <p>{error.message}</p>
    </div>
  ),
});

const BENEFITS = [
  "Free initial consultation and exam",
  "Transparent pricing with no surprises",
  "Sedation options available if needed",
  "Most insurance plans accepted",
];

function ServiceDetail() {
  const { service } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        subtitle={service.short}
        breadcrumbs={[{ label: "Services", to: "/services" }, { label: service.title }]}
      />

      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-5 md:px-6 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-ink">What to expect</h2>
            <p className="mt-4 text-slate-body leading-[1.7] text-[1.0625rem]">{service.long}</p>

            <h3 className="mt-10 font-display font-bold text-xl text-ink">
              Why patients choose us
            </h3>
            <ul className="mt-4 space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink">
                  <span className="w-6 h-6 rounded-full gradient-cta grid place-items-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-cream" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <aside className="bg-cream-deep rounded-3xl p-6 shadow-soft h-fit">
            <div className="text-sm text-slate-body">Starting at</div>
            <div className="font-display font-extrabold text-3xl gradient-text mt-1">
              {service.price}
            </div>
            <Link
              to="/booking"
              className="mt-5 w-full gradient-cta text-cream font-semibold py-3 rounded-full shadow-glow flex items-center justify-center gap-2 hover:-translate-y-0.5 transition"
            >
              Book Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-3 w-full border-2 border-border text-ink font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition"
            >
              <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
            </a>
          </aside>
        </div>
      </section>

      <section className="py-12 bg-cloud">
        <div className="max-w-5xl mx-auto px-5 md:px-6">
          <h3 className="font-display font-bold text-xl text-ink mb-6">Other services</h3>
          <div className="flex flex-wrap gap-3">
            {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="bg-cream px-4 py-2 rounded-full text-sm font-medium text-ink hover:bg-accent hover:text-cream transition"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
