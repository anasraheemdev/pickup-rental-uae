import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Pickup Rental Fujairah | East Coast UAE Truck Transportation",
  description:
    "Professional pickup truck rental and road transport across Fujairah. Serving Port of Fujairah, Al Hayl Industrial, Fujairah Free Zone, and Dibba via Sheikh Khalifa Highway (E84). Dedicated freight for maritime supply and commercial goods.",
  path: "/locations/fujairah",
  keywords: [
    "pickup rental Fujairah",
    "pickup truck rental Fujairah",
    "Port of Fujairah transport",
    "Al Hayl industrial pickup",
    "East Coast UAE truck hire",
    "3 ton truck Fujairah"
  ]
});

const fujairahFaqs = [
  {
    question: "Do you provide transport between Dubai and Fujairah via the E84 Highway?",
    answer:
      "Yes. Our drivers navigate the Sheikh Khalifa bin Zayed Highway (E84) mountain transit daily, connecting Dubai and Sharjah industrial zones with Fujairah Port and coastal hubs in approximately 60 to 75 minutes."
  },
  {
    question: "Can I book a truck for maritime supplies or vessel spare parts delivery to Port of Fujairah?",
    answer:
      "Yes. We support ship chandlers, offshore suppliers, and marine maintenance providers with 1-ton, 3-ton, and 7-ton trucks delivering marine supplies, technical spares, and hardware to port gates and anchor support points."
  },
  {
    question: "Do you service Dibba and the northern Fujairah coastline?",
    answer:
      "Yes. We service Dibba Al-Fujairah, Khorfakkan borders, and coastal hospitality resorts for hotel FF&E delivery, commercial equipment, and residential furniture moves."
  }
];

export default function FujairahLocationPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pickup & Rental - Fujairah Service Area",
    description: "Commercial pickup truck hire and road transport serving the Port of Fujairah and the East Coast.",
    url: `${SITE_URL}/locations/fujairah`,
    telephone: "+971555775074",
    areaServed: {
      "@type": "City",
      name: "Fujairah",
      sameAs: "https://en.wikipedia.org/wiki/Fujairah"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.1288",
      longitude: "56.3265"
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={localSchema} />
      <Breadcrumbs items={[{ name: "Locations", item: "/locations" }, { name: "Fujairah", item: "/locations/fujairah" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Serving Fujairah • East Coast &amp; Maritime Corridor</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
                Pickup Truck Rental &amp; Road Transport in Fujairah
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
                East coast road transportation connecting the Port of Fujairah, Al Hayl Industrial Area, and residential communities with Dubai and Abu Dhabi. Experienced mountain corridor drivers and verified fleet capacities.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
                >
                  Get Fujairah Trip Quote
                </Link>
                <Link
                  href="/fleet/3-ton-pickup"
                  className="px-8 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
                >
                  View 3-Ton Fleet →
                </Link>
              </div>
            </div>

            {/* Right Hero Location Image */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden border border-surface-container-high shadow-2xl">
                <Image
                  src="/images/locations/fujairah.webp"
                  alt="Commercial pickup truck on Fujairah E84 highway through the scenic mountain road corridor"
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
              Bunkering Port & Gulf of Oman Logistics
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Specialized Maritime Supplies & Cross-Country Industrial Freight
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              As one of the world&apos;s leading bunkering hubs and a strategic gateway on the Gulf of Oman, Fujairah operates around strict delivery deadlines. Our pickup and road transport service shuttles spare parts, marine equipment, safety supplies, and provisions between Dubai distribution warehouses and port checkpoints.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We also handle local commercial requirements in Al Hayl Industrial Area, including quarry machinery parts, building materials, hospitality supplies for luxury coastal resorts, and residential furniture moves across Fujairah City and Dibba.
            </p>
          </div>

          <div className="lg:col-span-5 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-xl space-y-4">
            <h3 className="font-headline-md text-xl font-bold text-on-surface">Fujairah Coverage Areas</h3>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Port of Fujairah & Marine Bunkering Gates</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Fujairah Free Zone (FFZ) & Port City</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Al Hayl Industrial Area & Mining Operations</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Fujairah City, Sakamkam & Dibba Corridor</li>
            </ul>
            <div className="pt-4 border-t border-surface-container-high">
              <Link href="/request-quote" className="w-full py-3.5 rounded-xl bg-secondary text-on-secondary font-bold text-center block hover:bg-secondary-fixed transition-colors">
                Calculate Fujairah Fare
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Need Pickup Transport in Fujairah?"
        subtitle="Prompt dispatch across the East Coast with direct highway transit to Dubai and Sharjah."
        whatsAppMessage="Hello, I would like to book a pickup truck in Fujairah."
      />

      <FaqSection items={fujairahFaqs} />
    </div>
  );
}
