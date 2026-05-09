import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { LogoStrip } from "@/components/site/LogoStrip";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Dentists } from "@/components/site/Dentists";
import { Booking } from "@/components/site/Booking";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { Location } from "@/components/site/Location";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { MobileBar } from "@/components/site/MobileBar";
import { ChatbotDrawer } from "@/components/automation/ChatbotDrawer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Decare Dental — Modern Dentistry, Genuinely Caring" },
      { name: "description", content: "Award-winning dental clinic offering gentle cleanings, cosmetic dentistry, implants and same-day emergency care. Book in 30 seconds." },
      { property: "og:title", content: "Decare Dental — Modern Dentistry, Genuinely Caring" },
      { property: "og:description", content: "From gentle cleanings to advanced cosmetic dentistry, our team delivers exceptional care. Book in 30 seconds." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <About />
        <Services />
        <WhyChoose />
        <Dentists />
        <Booking />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBar />
      <ChatbotDrawer />
    </div>
  );
}
