import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Pickup Rental Ras Al Khaimah | RAK Commercial Truck Hire",
  description:
    "Hire commercial pickup trucks in Ras Al Khaimah. Serving Al Hamra, Mina Al Arab, Al Ghail Industrial, and Saqr Port. Dedicated road freight for industrial cargo, building materials, and residential moves.",
  path: "/locations/ras-al-khaimah",
  keywords: [
    "pickup rental Ras Al Khaimah",
    "pickup truck rental RAK",
    "Al Hamra transport",
    "commercial pickup RAK",
    "3 ton truck Ras Al Khaimah",
    "RAK industrial freight"
  ]
});

const rakFaqs = [
  {
    question: "Do you transport industrial cargo to and from Ras Al Khaimah?",
    answer:
      "Yes. RAK’s industrial zones—including Al Ghail, Al Hamra Industrial, and Saqr Port—frequently require our 3-ton and 7-ton trucks for moving ceramic products, machinery components, stone materials, and structural fabrication to Dubai and Abu Dhabi."
  },
  {
    question: "Can I book residential furniture moving in Al Hamra Village or Mina Al Arab?",
    answer:
      "Yes. We support villa and apartment furniture relocations across Al Hamra Village, Mina Al Arab, Marjan Island, and Khuzam with optional helper assistance."
  },
  {
    question: "How long does transit take between Dubai and Ras Al Khaimah?",
    answer:
      "Transit typically requires approximately 1 hour and 15 minutes to 1 hour and 30 minutes via Emirates Road (E611) or Sheikh Mohammed Bin Zayed Road (E311)."
  }
];

export default function RasAlKhaimahLocationPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pickup & Rental - Ras Al Khaimah Service Area",
    description: "Professional pickup truck rental and commercial road transport across Ras Al Khaimah.",
    url: `${SITE_URL}/locations/ras-al-khaimah`,
    telephone: "+971555775074",
    areaServed: {
      "@type": "City",
      name: "Ras Al Khaimah",
      sameAs: "https://en.wikipedia.org/wiki/Ras_Al_Khaimah"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.7895",
      longitude: "55.9432"
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={localSchema} />
      <Breadcrumbs items={[{ name: "Locations", item: "/locations" }, { name: "Ras Al Khaimah", item: "/locations/ras-al-khaimah" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Serving Ras Al Khaimah • Northern Industrial Highway</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
                Pickup Truck Rental &amp; Road Transport in Ras Al Khaimah
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
                Long-haul and regional road transportation serving Ras Al Khaimah’s heavy industrial zones, maritime facilities, and residential coastal communities. Professional commercial drivers and verified truck capacities.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
                >
                  Get RAK Trip Quote
                </Link>
                <Link
                  href="/fleet/3-ton-pickup"
                  className="px-8 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
                >
                  3-Ton Truck Specs →
                </Link>
              </div>
            </div>

            {/* Right Hero Location Image */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden border border-surface-container-high shadow-2xl">
                <Image
                  src="/images/locations/ras-al-khaimah.webp"
                  alt="Commercial pickup truck on Ras Al Khaimah highway against backdrop of the Hajar mountains"
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
              Northern Industrial Corridor
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Heavy Manufacturing & Residential Coastline Logistics
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Ras Al Khaimah represents a primary center for heavy manufacturing, ceramics, cement, and maritime activity anchored by Saqr Port. Our commercial 3-ton and 7-ton carriers connect manufacturing plants in Al Ghail and Al Hamra with international airports, logistics hubs, and construction projects across the Emirates.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Additionally, the rapid residential growth across Marjan Island, Al Hamra Village, and Mina Al Arab creates ongoing demand for prompt furniture delivery, household moves, and retail merchandise transport from Dubai showrooms.
            </p>
          </div>

          <div className="lg:col-span-5 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-xl space-y-4">
            <h3 className="font-headline-md text-xl font-bold text-on-surface">RAK Service Locations</h3>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Al Hamra Village & Industrial Zone</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Mina Al Arab & Al Marjan Island</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Al Ghail Industrial Area</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Saqr Port & RAK Free Trade Zone</li>
            </ul>
            <div className="pt-4 border-t border-surface-container-high">
              <Link href="/request-quote" className="w-full py-3.5 rounded-xl bg-secondary text-on-secondary font-bold text-center block hover:bg-secondary-fixed transition-colors">
                Instant Fare Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Book Commercial Road Transport in Ras Al Khaimah"
        subtitle="Prompt long-haul highway transport connecting RAK with Dubai, Sharjah, and Abu Dhabi."
        whatsAppMessage="Hello, I would like to book a pickup truck in Ras Al Khaimah."
      />

      <FaqSection items={rakFaqs} />
    </div>
  );
}
