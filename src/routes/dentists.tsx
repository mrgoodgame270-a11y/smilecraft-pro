import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { DentistsGrid } from "@/components/sections/DentistsGrid";
import { CTABand } from "@/components/sections/CTABand";

export const Route = createFileRoute("/dentists")({
  component: DentistsPage,
  head: () => ({
    meta: [
      { title: "Meet Our Dentists at Decare Dental" },
      { name: "description", content: "Specialists in cosmetic dentistry, orthodontics, pediatric care and implants. Friendly, certified and genuinely caring." },
    ],
  }),
});

function DentistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Specialists Who Genuinely Love What They Do"
        subtitle="Every dentist on our team is board certified, deeply experienced, and obsessed with making your visit comfortable."
        breadcrumbs={[{ label: "Dentists" }]}
      />
      <DentistsGrid heading={false} />
      <CTABand />
    </>
  );
}
