import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Pickup Rental Al Ain | Commercial Truck Transport & Moving",
  description:
    "Hire reliable pickup trucks in Al Ain. Serving Sanaiya Industrial Area, Al Hili, Zakher, and Al Foah with direct inter-emirate routes to Dubai (E66) and Abu Dhabi (E22). Dedicated freight for commercial goods, villa moves, and agriculture supplies.",
  path: "/locations/al-ain",
  keywords: [
    "pickup rental Al Ain",
    "pickup truck rental Al Ain",
    "Sanaiya Al Ain transport",
    "commercial pickup Al Ain",
    "Dubai to Al Ain truck",
    "Abu Dhabi to Al Ain freight"
  ]
});

const alAinFaqs = [
  {
    question: "Do you provide road freight between Dubai and Al Ain via the E66 Highway?",
    answer:
      "Yes. We operate scheduled and on-demand runs along the Dubai-Al Ain Road (E66), facilitating 90-minute point-to-point transit for commercial cargo, retail merchandise, and residential belongings."
  },
  {
    question: "Can I book a truck for industrial jobs in Al Ain Sanaiya?",
    answer:
      "Yes. Our 1-ton, 3-ton, and 7-ton trucks routinely handle workshop equipment, automotive spare parts, construction materials, and structural fabrications originating in or destined for Sanaiya Industrial Area."
  },
  {
    question: "Do you service residential villa moves across Al Ain districts?",
    answer:
      "Yes. We support villa moves and furniture deliveries throughout Zakher, Al Hili, Al Muwaiji, Al Maqam, and Al Jimi with optional helper assistance."
  }
];

export default function AlAinLocationPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pickup & Rental - Al Ain Service Area",
    description: "Reliable commercial pickup truck rental and road freight services across Al Ain.",
    url: `${SITE_URL}/locations/al-ain`,
    telephone: "+971555775074",
    areaServed: {
      "@type": "City",
      name: "Al Ain",
      sameAs: "https://en.wikipedia.org/wiki/Al_Ain"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "24.2075",
      longitude: "55.7447"
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={localSchema} />
      <Breadcrumbs items={[{ name: "Locations", item: "/locations" }, { name: "Al Ain", item: "/locations/al-ain" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Serving Al Ain • Eastern Oasis &amp; Sanaiya Hub</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
                Pickup Truck Rental &amp; Road Transport in Al Ain
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
                Long-distance and local road transportation connecting Al Ain with Dubai (E66) and Abu Dhabi (E22). Supporting Sanaiya industrial supply chains, agricultural distribution, and spacious residential villa relocations.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
                >
                  Get Al Ain Trip Quote
                </Link>
                <Link
                  href="/fleet/3-ton-pickup"
                  className="px-8 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
                >
                  3-Ton Fleet Specs →
                </Link>
              </div>
            </div>

            {/* Right Hero Location Image */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden border border-surface-container-high shadow-2xl">
                <Image
                  src="/images/locations/al-ain.webp"
                  alt="Commercial pickup truck on Al Ain palm-lined oasis highway and Sanaiya freight route"
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

      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">
              Inland Abu Dhabi Logistics
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Industrial Commerce & Inter-City Transit Lines
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              As the major inland center of the Abu Dhabi Emirate, Al Ain relies heavily on dependable road transportation to link its bustling workshops, date processing hubs, and educational institutions with coastal commercial centers.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Our professional drivers manage frequent runs between Dubai&apos;s wholesale markets and Al Ain&apos;s Sanaiya Industrial Area, providing seamless freight movement without intermediate warehouse handoffs. We also cater to spacious family residences in Al Ain requiring reliable, enclosed 3-ton trucks for damage-free furniture transportation.
            </p>
          </div>

          <div className="lg:col-span-5 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-xl space-y-4">
            <h3 className="font-headline-md text-xl font-bold text-on-surface">Key Al Ain Service Districts</h3>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Sanaiya Industrial & Automotive Hub</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Al Hili, Al Foah & Agricultural Corridors</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Zakher, Al Muwaiji & Al Jimi Residential Areas</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Direct E66 (Dubai) & E22 (Abu Dhabi) Inter-City Transit</li>
            </ul>
            <div className="pt-4 border-t border-surface-container-high">
              <Link href="/request-quote" className="w-full py-3.5 rounded-xl bg-secondary text-on-secondary font-bold text-center block hover:bg-secondary-fixed transition-colors">
                Instant Al Ain Fare Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Book Inter-City Road Transport for Al Ain"
        subtitle="Prompt dispatch connecting Al Ain with Dubai and Abu Dhabi on verified commercial vehicles."
        whatsAppMessage="Hello, I would like to book a pickup truck in Al Ain."
      />

      <FaqSection items={alAinFaqs} />
    </div>
  );
}
