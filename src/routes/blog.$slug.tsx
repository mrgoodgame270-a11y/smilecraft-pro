import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import a1 from "@/assets/about-1.jpg";

const POSTS: Record<string, { title: string; tag: string; img: string; body: string[] }> = {
  "whitening-truth": {
    title: "The Truth About Teeth Whitening",
    tag: "Cosmetic",
    img: a1,
    body: [
      "Professional whitening is the single fastest cosmetic upgrade you can make to your smile. But there is a lot of noise online about what works.",
      "In our experience, in office whitening produces the most dramatic change. Custom take home trays maintain the result for years when used correctly.",
      "Most over the counter strips do work, but the gel concentration is much lower. Expect modest, gradual results and avoid daily use to protect your enamel.",
      "If you have sensitivity, ask us about desensitizing gels and a slower protocol. Whitening should never hurt.",
    ],
  },
  "kids-first-visit": {
    title: "Your Child's First Dental Visit",
    tag: "Pediatric",
    img: a1,
    body: [
      "We recommend the first visit by age 1 or within six months of the first tooth. The earlier we meet, the easier every visit becomes.",
      "Our pediatric chair has cartoons on the ceiling and we let kids touch and explore every tool first. Most leave smiling.",
      "Bring a comfort toy and try not to use scary words like hurt or shot at home. Kids feed off your energy.",
    ],
  },
  "insurance-explained": {
    title: "Dental Insurance, Plainly Explained",
    tag: "Guides",
    img: a1,
    body: [
      "PPO plans give you flexibility and partial coverage with most dentists. HMO plans cost less but limit your choice of dentist.",
      "Most plans cover 100% of preventive care, 80% of basic work, and 50% of major procedures, up to an annual maximum.",
      "If you do not have insurance, our $49 per month membership often beats traditional plans for value.",
    ],
  },
};

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
  loader: ({ params }) => {
    const post = POSTS[params.slug];
    return { post };
  },
  errorComponent: ({ error }) => (
    <div className="py-32 text-center">
      <p>{error.message}</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <p>Article not found.</p>
    </div>
  ),
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  if (!post) {
    return (
      <div className="py-32 text-center">
        <h1 className="font-display font-bold text-3xl">Article not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-primary font-semibold">
          ← All articles
        </Link>
      </div>
    );
  }
  return (
    <>
      <PageHero
        eyebrow={post.tag}
        title={post.title}
        breadcrumbs={[{ label: "Blog", to: "/blog" }, { label: post.title }]}
      />
      <article className="py-12 lg:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <img
            src={post.img}
            alt={post.title}
            className="w-full aspect-[16/9] object-cover rounded-3xl shadow-soft"
          />
          <div className="mt-8 space-y-5 text-slate-body text-[1.0625rem] leading-[1.8]">
            {post.body.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/blog" className="text-primary font-semibold">
              ← Back to all articles
            </Link>
          </div>
        </div>
      </article>
      <CTABand />
    </>
  );
}
