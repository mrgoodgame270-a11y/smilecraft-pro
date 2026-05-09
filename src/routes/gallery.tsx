import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import a1 from "@/assets/about-1.jpg";
import a2 from "@/assets/about-2.jpg";
import doc1 from "@/assets/doc-1.jpg";
import doc2 from "@/assets/doc-2.jpg";
import doc3 from "@/assets/doc-3.jpg";
import doc4 from "@/assets/doc-4.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

const ITEMS = [
  { img: a1, label: "Modern clinic interior", tag: "Clinic" },
  { img: doc1, label: "Cosmetic veneers", tag: "Cosmetic" },
  { img: a2, label: "Patient comfort suite", tag: "Clinic" },
  { img: doc2, label: "Invisalign result", tag: "Orthodontics" },
  { img: doc3, label: "Pediatric care", tag: "Pediatric" },
  { img: doc4, label: "Implant restoration", tag: "Implants" },
];

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Real Smiles, Real Results"
        subtitle="A snapshot of the work we do every day. Every smile is a story."
        breadcrumbs={[{ label: "Gallery" }]}
      />
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {ITEMS.map((it, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden shadow-soft aspect-[4/3]"
            >
              <img
                src={it.img}
                alt={it.label}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-5">
                <span className="text-xs font-semibold text-accent-soft uppercase tracking-widest">
                  {it.tag}
                </span>
                <span className="text-cream font-display font-bold text-lg">{it.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
