import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABand } from "@/components/sections/CTABand";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
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
