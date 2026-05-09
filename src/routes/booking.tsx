import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { BookingFlow } from "@/components/automation/BookingFlow";
import { MessageCircle, Check, Clock, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Book Your Visit, Decare Dental" },
      { name: "description", content: "Pick your service, choose a slot, get instant SMS confirmation. No phone tag, no waiting." },
    ],
  }),
});

function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Book Your Visit in 30 Seconds"
        subtitle="No phone tag. No waiting on hold. Pick your service, choose a slot, get instant SMS confirmation."
        breadcrumbs={[{ label: "Booking" }]}
      />
      <section className="py-12 lg:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-5 md:px-6 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <BookingFlow />
          </div>
          <aside className="lg:col-span-2 space-y-4">
            <div className="bg-cream-deep rounded-3xl p-6 shadow-soft">
              <h3 className="font-display font-bold text-lg text-ink">What happens next</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  { icon: MessageCircle, t: "Instant SMS confirmation" },
                  { icon: Clock, t: "Reminder 24 hours before your visit" },
                  { icon: Check, t: "Easy reschedule by replying to the SMS" },
                  { icon: ShieldCheck, t: "All major insurance plans accepted" },
                ].map((x) => (
                  <li key={x.t} className="flex items-center gap-3 text-ink">
                    <span className="w-9 h-9 rounded-xl bg-cream grid place-items-center"><x.icon className="w-4 h-4 text-primary" /></span>
                    {x.t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-deep text-cream rounded-3xl p-6 shadow-soft">
              <div className="text-sm text-cream/70">Need help right now?</div>
              <a href="tel:+15551234567" className="mt-2 block font-display font-extrabold text-2xl">+1 (555) 123 4567</a>
              <div className="text-xs text-cream/70 mt-1">24/7 emergency line</div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
