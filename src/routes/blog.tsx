import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ArrowRight, Clock } from "lucide-react";
import a1 from "@/assets/about-1.jpg";
import a2 from "@/assets/about-2.jpg";
import doc1 from "@/assets/doc-1.jpg";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Dental Health Blog, Tips and Resources" },
      { name: "description", content: "Tips, guides and stories from the Decare Dental team. Whitening, kids, insurance and more." },
    ],
  }),
});

const POSTS = [
  { slug: "whitening-truth", title: "The Truth About Teeth Whitening", excerpt: "What works, what does not, and how long results actually last.", img: doc1, time: "5 min read", tag: "Cosmetic" },
  { slug: "kids-first-visit", title: "Your Child's First Dental Visit", excerpt: "How to prepare, what to expect, and how to make it fun.", img: a1, time: "4 min read", tag: "Pediatric" },
  { slug: "insurance-explained", title: "Dental Insurance, Plainly Explained", excerpt: "PPO vs HMO, what is covered, and how to maximize benefits.", img: a2, time: "7 min read", tag: "Guides" },
];

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Smile Smarter"
        subtitle="Practical guides, clear answers, no jargon. Written by our dentists."
        breadcrumbs={[{ label: "Blog" }]}
      />
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {POSTS.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group bg-cream-deep rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="bg-accent/15 text-accent px-2.5 py-1 rounded-full font-semibold">{p.tag}</span>
                  <span className="text-slate-body inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {p.time}</span>
                </div>
                <h3 className="mt-3 font-display font-bold text-xl text-ink group-hover:text-primary transition">{p.title}</h3>
                <p className="mt-2 text-slate-body text-sm">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-primary font-semibold text-sm">Read article <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
