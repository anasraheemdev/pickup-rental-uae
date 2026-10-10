import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Furniture Transport Dubai & UAE | Safe Pickup Truck Delivery",
  description:
    "Professional furniture transportation across Dubai, Abu Dhabi, and the UAE. Dedicated 1-ton and 3-ton pickups with helper crew options, protective blankets, and careful handling for sofas, beds, and office desks.",
  path: "/services/furniture-transportation",
  keywords: [
    "furniture transport Dubai",
    "furniture transport UAE",
    "pickup for moving furniture",
    "villa apartment furniture delivery",
    "single item furniture transport",
    "office furniture relocation Dubai"
  ]
});

const furnitureFaqs = [
  {
    question: "Do you provide helpers to carry furniture up and down elevators?",
    answer:
      "Yes. When booking through our quote system or dispatch hotline, you can select 'Driver Only' or add 1 to 2 trained helpers to assist with lifting, carrying, loading, and positioning your furniture."
  },
  {
    question: "How is furniture protected during transit in the pickup truck?",
    answer:
      "Our crews utilize padded transit blankets, heavy-duty tie-down ratchet straps, and protective edge padding to prevent scuffs, scratches, or shifting during transit across UAE highways."
  },
  {
    question: "What size pickup truck is recommended for moving furniture?",
    answer:
      "For individual items such as a single sofa, dining table, or washing machine, a 1-ton pickup is typically ideal. For larger items, complete bedroom sets, or multi-room furniture suites, our 3-ton closed-box pickup provides the required clearance and weatherproof security."
  },
  {
    question: "Can you transport furniture bought from IKEA, Dubizzle, or furniture showrooms?",
    answer:
      "Yes. We regularly handle direct store-to-door pickups from major retail showrooms and private marketplace purchases across Dubai, Sharjah, and Abu Dhabi."
  }
];

export default function FurnitureTransportationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Furniture Transportation",
    name: "Furniture Transport Dubai & UAE",
    description: "Reliable road transport for residential furniture, office desks, sofas, and retail purchases across the UAE.",
    provider: {
      "@type": "LocalBusiness",
      name: "Pickup & Rental",
      url: SITE_URL
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Dubai" },
      { "@type": "AdministrativeArea", name: "Abu Dhabi" },
      { "@type": "AdministrativeArea", name: "Sharjah" },
      { "@type": "AdministrativeArea", name: "Ajman" },
      { "@type": "AdministrativeArea", name: "Ras Al Khaimah" },
      { "@type": "AdministrativeArea", name: "Fujairah" },
      { "@type": "AdministrativeArea", name: "Umm Al Quwain" },
      { "@type": "AdministrativeArea", name: "Al Ain" }
    ]
  };

  return (
    <div className="w-full">
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[{ name: "Services", item: "/services" }, { name: "Furniture Transportation", item: "/services/furniture-transportation" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Careful Handling • Residential &amp; Office Transport</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
                Furniture Transport Across Dubai &amp; the UAE
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
                Careful, dependable pickup truck transportation for sofas, beds, dining sets, office workstations, and marketplace purchases. Available with professional loading helpers and secure tie-downs.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
                >
                  Book Furniture Transport
                </Link>
                <Link
                  href="/resources/how-to-move-furniture-safely-dubai"
                  className="px-8 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
                >
                  Moving Safety Guide →
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden border border-surface-container-high shadow-2xl">
                <Image
                  src="/images/services/furniture-transportation.webp"
                  alt="Professional transport crew loading blanket-padded furniture into pickup truck in UAE residential community"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Practical Logistics for UAE Living */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">
              Residential & Commercial Mobility
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Navigating UAE High-Rise Towers & Community Clearances
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Moving furniture in Dubai, Abu Dhabi, or Sharjah involves specific physical and regulatory steps. Many residential towers across Downtown Dubai, Dubai Marina, Jumeirah Lakes Towers (JLT), and Reem Island have strict service elevator booking rules, security move-in/move-out permits, and parking clearances with height limits in underground basements.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Our 1-ton pickup trucks are compact enough to enter most standard height-restricted residential loading bays (typically 2.0 to 2.2 meters), enabling seamless loading without long outdoor carrying distances under extreme summer temperatures. For larger moves, our 3-ton box trucks park conveniently at dedicated ground loading docks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high">
                <h3 className="font-label-lg text-on-surface font-bold mb-1">Single Item & Partial Loads</h3>
                <p className="text-sm text-on-surface-variant">Cost-effective transport for a newly purchased sectional sofa, wardrobe, or heavy television console.</p>
              </div>
              <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high">
                <h3 className="font-label-lg text-on-surface font-bold mb-1">Office Desks & Meeting Tables</h3>
                <p className="text-sm text-on-surface-variant">Orderly relocation of executive desks, ergonomic chairs, conference tables, and filing cabinets.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-xl space-y-6">
            <h3 className="font-headline-md text-xl font-bold text-on-surface">Furniture Transport Safeguards</h3>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">shield</span>
                <span><strong>Heavy Padded Blankets:</strong> Encapsulate polished wooden edges, glass tabletops, and delicate leather upholstery.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">shield</span>
                <span><strong>Industrial Ratchet Straps:</strong> Anchor tall wardrobes and heavy sofas firmly against truck rails to eliminate road shift.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">shield</span>
                <span><strong>Optional Helper Crew:</strong> Add 1 or 2 experienced helpers to handle heavy lifting through stairwells and elevators.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">shield</span>
                <span><strong>Transparent Trip Fares:</strong> Upfront pricing based on vehicle size and highway mileage with no hidden extras.</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-surface-container-high">
              <Link
                href="/request-quote"
                className="w-full py-3.5 rounded-xl bg-secondary text-on-secondary font-bold text-center block hover:bg-secondary-fixed transition-colors"
              >
                Instant Fare Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Cross-Linking to Relevant Guides */}
      <section className="py-16 bg-surface-container/40 border-y border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-6">
            Helpful Moving & Transport Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link href="/resources/how-to-move-furniture-safely-dubai" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
              <h3 className="font-label-lg font-bold text-on-surface mb-2">How to Move Furniture Safely in Dubai</h3>
              <p className="text-sm text-on-surface-variant">Step-by-step guidance on elevator permits, building NOCs, and packing methods.</p>
            </Link>
            <Link href="/resources/what-size-pickup-for-moving" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
              <h3 className="font-label-lg font-bold text-on-surface mb-2">What Pickup Size for Moving?</h3>
              <p className="text-sm text-on-surface-variant">Compare bed capacities for studio, 1-bedroom, and villa room contents.</p>
            </Link>
            <Link href="/fleet/1-ton-pickup" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
              <h3 className="font-label-lg font-bold text-on-surface mb-2">1 Ton Pickup for Furniture</h3>
              <p className="text-sm text-on-surface-variant">Explore dimensions and bed length for single items and small apartment pieces.</p>
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        title="Need Safe Furniture Delivery in Dubai or Across the UAE?"
        subtitle="Book an experienced pickup driver with optional helper assistance. Padded protection and on-time dispatch for all your furniture pieces."
        whatsAppMessage="Hello, I would like to book a pickup truck for furniture transportation in Dubai."
      />

      <FaqSection items={furnitureFaqs} />
    </div>
  );
}
