import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { DENTISTS } from "@/lib/site-data";

export const Route = createFileRoute("/dentists/$slug")({
  component: DentistDetail,
  loader: ({ params }) => {
    const dentist = DENTISTS.find((d) => d.slug === params.slug);
    if (!dentist) throw notFound();
    return { dentist };
  },
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="font-display font-bold text-3xl">Dentist not found</h1>
      <Link to="/dentists" className="mt-4 inline-block text-primary font-semibold">
        ← All dentists
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="py-32 text-center">
      <p>{error.message}</p>
    </div>
  ),
});

const SCHEDULE = [
  ["Mon", [1, 1, 0, 1, 1, 1, 1, 0, 1]],
  ["Tue", [1, 1, 1, 0, 1, 1, 1, 1, 0]],
  ["Wed", [0, 1, 1, 1, 1, 0, 1, 1, 1]],
  ["Thu", [1, 1, 1, 1, 0, 1, 1, 0, 1]],
  ["Fri", [1, 0, 1, 1, 1, 1, 0, 1, 1]],
  ["Sat", [1, 1, 0, 1, 1, 1, 1, 1, 0]],
] as const;
const HOURS = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

function DentistDetail() {
  const { dentist } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow="Dentist"
        title={dentist.name}
        subtitle={`${dentist.spec} · ${dentist.years} years experience`}
        breadcrumbs={[{ label: "Dentists", to: "/dentists" }, { label: dentist.name }]}
      />
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-5 md:px-6 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <img
              src={dentist.img}
              alt={dentist.name}
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-elevated"
            />
            <div className="mt-4 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
              <span className="text-sm text-slate-body ml-2">5.0 from 200+ reviews</span>
            </div>
          </div>
          <div className="lg:col-span-3">
            <h2 className="font-display font-bold text-2xl text-ink">
              About {dentist.name.split(" ")[1]}
            </h2>
            <p className="mt-3 text-slate-body leading-[1.7] text-[1.0625rem]">{dentist.bio}</p>

            <h3 className="mt-8 font-display font-bold text-xl text-ink">Weekly availability</h3>
            <div className="mt-4 bg-cream-deep rounded-2xl p-4 overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr>
                    <th></th>
                    {HOURS.map((h) => (
                      <th key={h} className="px-1 py-1 text-slate-body font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SCHEDULE.map(([day, slots]) => (
                    <tr key={day}>
                      <td className="pr-2 text-slate-body font-semibold">{day}</td>
                      {slots.map((s, i) => (
                        <td key={i} className="px-1 py-1">
                          <div
                            className={`h-7 rounded ${s ? "bg-success/70" : "bg-cream"}`}
                            title={s ? "Available" : "Booked"}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-3 flex items-center gap-4 text-xs text-slate-body">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-success/70" /> Available
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-cream border border-border" /> Booked
                </span>
              </div>
            </div>

            <Link
              to="/booking"
              className="mt-8 inline-flex items-center gap-2 gradient-cta text-cream font-semibold px-6 py-3 rounded-full shadow-glow hover:-translate-y-0.5 transition"
            >
              Book with {dentist.name.split(" ")[1]} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
