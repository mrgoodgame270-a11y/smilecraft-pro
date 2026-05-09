import doc1 from "@/assets/doc-1.jpg";
import doc2 from "@/assets/doc-2.jpg";
import doc3 from "@/assets/doc-3.jpg";
import doc4 from "@/assets/doc-4.jpg";

export const SERVICES = [
  {
    slug: "general-dentistry",
    icon: "Stethoscope",
    title: "General Dentistry",
    short: "Routine cleanings, exams and preventive care to keep every smile healthy for life.",
    long: "Our general dentistry program combines gentle cleanings, comprehensive exams, digital X-rays and tailored preventive plans. We focus on early detection so you avoid bigger problems down the road.",
    price: "From $99",
  },
  {
    slug: "cosmetic",
    icon: "Smile",
    title: "Cosmetic Dentistry",
    short: "Whitening, veneers and bonding crafted for a confident, camera ready smile.",
    long: "From subtle enhancements to full smile makeovers, our cosmetic team blends artistry with precision technology. Veneers, professional whitening and composite bonding, all designed around your face.",
    price: "From $349",
  },
  {
    slug: "orthodontics",
    icon: "AlignHorizontalSpaceAround",
    title: "Orthodontics",
    short: "Invisalign and modern braces for kids, teens and adults. Straighter, faster, simpler.",
    long: "Get the smile you have always wanted with discreet Invisalign aligners or modern bracket systems. Free consultation, 3D scan, transparent pricing.",
    price: "From $2,995",
  },
  {
    slug: "pediatric",
    icon: "Baby",
    title: "Pediatric Dentistry",
    short: "A gentle, fun first experience that helps little patients build lifelong habits.",
    long: "Our pediatric specialists turn dental visits into a positive ritual. Kid friendly chairs, calming techniques, and parent education at every step.",
    price: "From $79",
  },
  {
    slug: "implants",
    icon: "Bone",
    title: "Dental Implants",
    short:
      "Permanent, natural looking tooth replacement using same day digital implant technology.",
    long: "Replace missing teeth with implants that look, feel and function like the real thing. Our 3D guided placement means less recovery time and predictable results.",
    price: "From $2,495",
  },
  {
    slug: "emergency",
    icon: "Siren",
    title: "Emergency Care",
    short:
      "Same day appointments for tooth pain, chips and accidents. Call any time, day or night.",
    long: "Toothache, broken crown, knocked out tooth? Our emergency line is staffed 24/7 and we hold same day slots open every weekday for urgent cases.",
    price: "Call now",
  },
] as const;

export type Service = (typeof SERVICES)[number];

export const DENTISTS = [
  {
    slug: "mubara-doe",
    img: doc1,
    name: "Dr. Mubara Doe",
    spec: "Cosmetic Dentistry",
    years: 12,
    bio: "Mubara leads our cosmetic team and has crafted thousands of veneer and whitening smile makeovers. Patients describe her as gentle, precise and quietly perfectionist.",
  },
  {
    slug: "james-carter",
    img: doc2,
    name: "Dr. James Carter",
    spec: "Orthodontics",
    years: 9,
    bio: "James is our Invisalign expert. He blends 3D treatment planning with old school chairside warmth, especially for nervous teens and adults.",
  },
  {
    slug: "mei-tanaka",
    img: doc3,
    name: "Dr. Mei Tanaka",
    spec: "Pediatric Care",
    years: 7,
    bio: "Mei has a magical way with kids. Most of her tiny patients ask when they can come back. She is also a certified sedation specialist.",
  },
  {
    slug: "andre-bello",
    img: doc4,
    name: "Dr. Andre Bello",
    spec: "Dental Implants",
    years: 14,
    bio: "Andre has placed over 6,000 implants. He pioneered our same day digital implant workflow and lectures internationally on guided surgery.",
  },
] as const;

export const PHONE_DISPLAY = "+1 (555) 123 4567";
export const PHONE_TEL = "+15551234567";
export const WHATSAPP = "https://wa.me/15551234567";
export const EMAIL = "hello@decaredental.com";
export const ADDRESS = "2245 Cedar Avenue, Suite 400, Downtown, CA 90210";
