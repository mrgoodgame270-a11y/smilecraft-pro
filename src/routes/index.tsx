import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABand } from "@/components/sections/CTABand";
import { SmileScoreQuiz } from "@/components/unique/SmileScoreQuiz";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Decare Dental, Modern Dentistry, Genuinely Caring" },
      {
        name: "description",
        content:
          "Award winning dental clinic. Gentle cleanings, cosmetic dentistry, implants and same day emergency care. Book in 30 seconds.",
      },
    ],
  }),
});

function LogoStrip() {
  const logos = ["MEDIPORT", "SMILECO", "ORACARE", "DENTLY", "PURE", "VITALA"];
  return (
    <section className="bg-cream-deep py-10">
      <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">
        <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-slate-body">
          Trusted by 100+ partner clinics
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-4 opacity-55">
          {logos.map((l, i) => (
            <span
              key={i}
              className="font-display font-bold text-lg md:text-xl text-primary-deep tracking-wide"
            >
              ◆ {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ServicesGrid limit={3} />
      <AboutSnippet />
      <SmileScoreQuiz />
      <Stats />
      <Testimonials compact />
      <div className="bg-cream py-10 text-center">
        <Link
          to="/testimonials"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
        >
          Read all reviews <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <CTABand />
    </>
  );
}
