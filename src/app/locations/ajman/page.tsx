import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Pickup Rental Ajman | 1 Ton & 3 Ton Pickup Truck Hire",
  description:
    "Hire reliable pickup trucks in Ajman. Serving Al Jurf Industrial, Ajman Free Zone, Al Nuaimiya, and Corniche. Commercial cargo, workshop goods, and residential furniture transport with verified drivers.",
  path: "/locations/ajman",
  keywords: [
    "pickup rental Ajman",
    "pickup truck rental Ajman",
    "Ajman free zone transport",
    "goods transport Ajman",
    "Al Jurf pickup hire",
    "cheap pickup rental Ajman"
  ]
});

const ajmanFaqs = [
  {
    question: "Do you serve Al Jurf Industrial Area and Ajman Free Zone?",
    answer:
      "Yes. Al Jurf Industrial 1-3, Ajman Free Zone, and the maritime port area are core operational corridors for our commercial pickup fleet."
  },
  {
    question: "How quickly can a pickup truck be dispatched in Ajman?",
    answer:
      "Within central Ajman and Al Jurf, average vehicle arrival time is approximately 35 to 45 minutes."
  },
  {
    question: "Can I hire a pickup in Ajman for deliveries into Dubai or Sharjah?",
    answer:
      "Yes. Many local businesses use our service for daily cargo runs connecting Ajman workshops with distributors in Sharjah and retail outlets in Dubai."
  }
];

export default function AjmanLocationPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pickup & Rental - Ajman Service Area",
    description: "Professional pickup truck rental and commercial road transport across Ajman.",
    url: `${SITE_URL}/locations/ajman`,
    telephone: "+971555775074",
    areaServed: {
      "@type": "City",
      name: "Ajman",
      sameAs: "https://en.wikipedia.org/wiki/Ajman"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.4052",
      longitude: "55.5136"
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={localSchema} />
      <Breadcrumbs items={[{ name: "Locations", item: "/locations" }, { name: "Ajman", item: "/locations/ajman" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Serving Ajman • Free Zone &amp; Industrial Corridors</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
                Pickup Truck Rental &amp; Road Transport in Ajman
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
                Cost-effective, dependable road transport serving Ajman’s manufacturing workshops, free zone logistics, and residential communities. Available for single trips or commercial distribution.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
                >
                  Get Ajman Trip Quote
                </Link>
                <Link
                  href="/fleet/1-ton-pickup"
                  className="px-8 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
                >
                  1-Ton Specs →
                </Link>
              </div>
            </div>

            {/* Right Hero Location Image */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden border border-surface-container-high shadow-2xl">
                <Image
                  src="/images/locations/ajman.webp"
                  alt="Commercial pickup truck operating in Ajman northern coastal commercial highway corridor"
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
              Northern Gateway Logistics
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Affordable, Compliant Transport for Ajman Trade
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Ajman provides a strategic industrial and commercial base with rapid access to both Sharjah and the northern transport corridors via Sheikh Mohammed Bin Zayed Road (E311) and Al Ittihad Road. We provide commercial pickups to support light manufacturing, textile warehouses, hardware distributors, and automotive workshops in Al Jurf, alongside residential furniture moving in Al Nuaimiya, Al Rashidiya, and Al Rawda.
            </p>
          </div>

          <div className="lg:col-span-5 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-xl space-y-4">
            <h3 className="font-headline-md text-xl font-bold text-on-surface">Ajman Service Highlights</h3>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Al Jurf Industrial 1, 2, and 3</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Ajman Free Zone & Port access</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Residential furniture moving with helpers</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Inter-emirate runs to Sharjah and Dubai</li>
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
        title="Schedule a Pickup Truck in Ajman Today"
        subtitle="Transparent fares, licensed commercial driver, and prompt dispatch to Al Jurf and residential areas."
        whatsAppMessage="Hello, I would like to book a pickup truck in Ajman."
      />

      <FaqSection items={ajmanFaqs} />
    </div>
  );
}
