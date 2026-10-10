import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Pickup Rental Umm Al Quwain | UAQ Commercial Truck Transport",
  description:
    "Reliable pickup truck rental and road transport across Umm Al Quwain. Serving UAQ Industrial City, Free Trade Zone (UAQ FTZ), Al Salamah, and Falaj Al Mualla. Professional freight solutions for commercial goods and residential relocations.",
  path: "/locations/umm-al-quwain",
  keywords: [
    "pickup rental Umm Al Quwain",
    "pickup truck rental UAQ",
    "UAQ Industrial City transport",
    "commercial pickup truck UAQ",
    "1 ton pickup Umm Al Quwain",
    "3 ton truck UAQ"
  ]
});

const uaqFaqs = [
  {
    question: "Do you serve UAQ Industrial City and Free Trade Zone?",
    answer:
      "Yes. We support light industrial factories, packaging workshops, and trading firms operating inside UAQ Industrial City and UAQ Free Trade Zone with scheduled pallet pickups and express delivery to Dubai and Sharjah."
  },
  {
    question: "Can I book a 1-ton pickup for residential moving in Al Salamah or Old Town?",
    answer:
      "Yes. Our 1-ton and 3-ton trucks assist residential clients with villa relocations, furniture collection, and domestic moves across Al Salamah, Al Raudah, and the coastal districts."
  },
  {
    question: "How quickly can a pickup truck be dispatched to Umm Al Quwain?",
    answer:
      "Because our fleet regularly operates across the Northern Emirates corridor (E311 and E611), same-day dispatch is routinely available when booked in advance or requested during standard working hours."
  }
];

export default function UmmAlQuwainLocationPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pickup & Rental - Umm Al Quwain Service Area",
    description: "Reliable commercial pickup truck hire and road transport across Umm Al Quwain.",
    url: `${SITE_URL}/locations/umm-al-quwain`,
    telephone: "+971555775074",
    areaServed: {
      "@type": "City",
      name: "Umm Al Quwain",
      sameAs: "https://en.wikipedia.org/wiki/Umm_Al_Quwain"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.5647",
      longitude: "55.5552"
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={localSchema} />
      <Breadcrumbs items={[{ name: "Locations", item: "/locations" }, { name: "Umm Al Quwain", item: "/locations/umm-al-quwain" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Serving Umm Al Quwain • Northern Highway Access</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
                Pickup Truck Rental &amp; Road Transport in Umm Al Quwain
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
                Cost-effective road transport connecting Umm Al Quwain Industrial City, Free Trade Zone, and suburban communities with the wider Emirates highway network via E311.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
                >
                  Get UAQ Trip Quote
                </Link>
                <Link
                  href="/fleet/1-ton-pickup"
                  className="px-8 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
                >
                  1-Ton Truck Specs →
                </Link>
              </div>
            </div>

            {/* Right Hero Location Image */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden border border-surface-container-high shadow-2xl">
                <Image
                  src="/images/locations/umm-al-quwain.webp"
                  alt="Commercial pickup truck on Umm Al Quwain trade logistics corridor highway"
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
              Northern Emirates Corridor
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Efficient Regional Cargo & Residential Transport
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Umm Al Quwain serves as an essential connecting link between Sharjah, Ajman, and Ras Al Khaimah. Businesses in UAQ Industrial City, along with packaging, plastics, and light assembly plants, rely on regular road transport to deliver raw materials and move finished goods to central retail hubs in Dubai.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Whether you need a 1-ton open pickup for agricultural supplies in Falaj Al Mualla, a box truck for retail goods in Al Salamah, or dedicated 3-ton transport for industrial components, our fleet delivers punctual, transparent service.
            </p>
          </div>

          <div className="lg:col-span-5 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-xl space-y-4">
            <h3 className="font-headline-md text-xl font-bold text-on-surface">UAQ Key Service Areas</h3>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> UAQ Industrial City & Warehouses</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Umm Al Quwain Free Trade Zone (FTZ)</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Al Salamah, Al Ramlah & Coastal Areas</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Falaj Al Mualla & E55 Cross Route</li>
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
        title="Schedule Pickup Transport in Umm Al Quwain"
        subtitle="Prompt dispatch across UAQ with seamless highway connectivity across the UAE."
        whatsAppMessage="Hello, I would like to book a pickup truck in Umm Al Quwain."
      />

      <FaqSection items={uaqFaqs} />
    </div>
  );
}
