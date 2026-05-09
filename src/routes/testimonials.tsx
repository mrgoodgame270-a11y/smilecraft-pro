import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABand } from "@/components/sections/CTABand";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Patient Reviews and Stories, Decare Dental" },
      { name: "description", content: "Real reviews from verified patients. 5 star Google rating, 25,000+ patients treated." },
    ],
  }),
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Stories"
        title="Real Smiles, Real Reviews"
        subtitle="Every review you see is from a verified patient. We earn each one."
        breadcrumbs={[{ label: "Testimonials" }]}
      />
      <Testimonials />
      <CTABand />
    </>
  );
}
