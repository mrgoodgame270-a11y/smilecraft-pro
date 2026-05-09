import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTABand } from "@/components/sections/CTABand";
import { ToothExplorer } from "@/components/unique/ToothExplorer";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Our Dental Services, From Cleanings to Implants" },
      { name: "description", content: "Complete dental care under one roof. General dentistry, cosmetic, orthodontics, pediatric, implants and 24/7 emergency care." },
    ],
  }),
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete Dental Care, Under One Roof"
        subtitle="From your first cleaning to a complete smile makeover, our specialists handle it all in one place."
        breadcrumbs={[{ label: "Services" }]}
      />
      <ServicesGrid heading={false} />
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase text-accent">Tooth Explorer</span>
            <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(1.75rem,4vw,3rem)]">
              What treats <span className="gradient-text">what</span>
            </h2>
            <p className="mt-3 text-slate-body">Hover over a part of the tooth to see which treatments target it.</p>
          </div>
          <ToothExplorer />
        </div>
      </section>
      <CTABand />
    </>
  );
}
