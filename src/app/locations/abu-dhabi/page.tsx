import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Pickup Rental Abu Dhabi | 1 Ton & 3 Ton Road Transport",
  description:
    "Reliable pickup truck rental across Abu Dhabi. Serving Mussafah, ICAD, KEZAD, Reem Island, and Central Abu Dhabi. Dedicated transport for commercial goods, industrial parts, and furniture moving.",
  path: "/locations/abu-dhabi",
  keywords: [
    "pickup rental Abu Dhabi",
    "pickup truck rental Abu Dhabi",
    "goods transport Abu Dhabi",
    "Mussafah ICAD transport",
    "3 ton pickup Abu Dhabi",
    "rent pickup in Mussafah"
  ]
});

const abuDhabiFaqs = [
  {
    question: "Do you serve industrial areas like Mussafah and ICAD in Abu Dhabi?",
    answer:
      "Yes. Mussafah Industrial Area and the Industrial City of Abu Dhabi (ICAD I, II, and III) are primary operational areas for our commercial goods and heavy freight pickups. Our drivers are experienced with industrial yard loading, heavy equipment transport, and site security requirements."
  },
  {
    question: "How do you handle Abu Dhabi Darb toll charges?",
    answer:
      "Darb toll gate charges incurred during peak operational hours on Abu Dhabi bridges (such as Sheikh Zayed Bridge, Maqta Bridge, and Mussafah Bridge) are accounted for transparently in your trip quotation."
  },
  {
    question: "Can I book a pickup for transport between Dubai and Abu Dhabi?",
    answer:
      "Yes. We operate daily commercial runs between Dubai and Abu Dhabi along the E11 highway corridor, transferring retail stock, pallets, construction materials, and residential furniture in both directions."
  },
  {
    question: "Can you deliver into residential islands like Al Reem or Yas Island?",
    answer:
      "Yes. We deliver residential furniture, home goods, and marketplace purchases across Al Reem Island, Yas Island, Saadiyat Island, and Al Raha Beach, following community security move-in regulations."
  }
];

export default function AbuDhabiLocationPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pickup & Rental - Abu Dhabi Service Area",
    description: "Professional pickup truck rental and commercial road transport services across Abu Dhabi.",
    url: `${SITE_URL}/locations/abu-dhabi`,
    telephone: "+971555775074",
    areaServed: {
      "@type": "City",
      name: "Abu Dhabi",
      sameAs: "https://en.wikipedia.org/wiki/Abu_Dhabi"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "24.4539",
      longitude: "54.3773"
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={localSchema} />
      <Breadcrumbs items={[{ name: "Locations", item: "/locations" }, { name: "Abu Dhabi", item: "/locations/abu-dhabi" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Serving Abu Dhabi • Capital &amp; Industrial Corridors</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
                Pickup Truck Rental &amp; Road Transport in Abu Dhabi
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
                Dependable commercial road transportation serving Abu Dhabi Capital, Mussafah Industrial, ICAD, KEZAD, and residential island communities. Available for on-demand single deliveries or dedicated corporate fleet retainers.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
                >
                  Get Abu Dhabi Quote
                </Link>
                <Link
                  href="/fleet/3-ton-pickup"
                  className="px-8 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
                >
                  3-Ton Commercial Specs →
                </Link>
              </div>
            </div>

            {/* Right Hero Location Image */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden border border-surface-container-high shadow-2xl">
                <Image
                  src="/images/locations/abu-dhabi.webp"
                  alt="Commercial pickup truck on Abu Dhabi wide palm-lined boulevard and commercial corridor"
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

      {/* Abu Dhabi Context */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">
              Capital Logistics Expertise
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Connecting Industrial Zones & Residential Developments
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Abu Dhabi encompasses broad industrial corridors and rapidly growing master communities. From major manufacturing, oilfield equipment, and fabrication workshops in Mussafah and ICAD to major commercial import distribution in Khalifa Industrial Zone (KEZAD), businesses need compliant, reliable road transport that navigates regional bridge checkpoints and Darb toll gates with zero hassle.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We also cater extensively to residents moving furniture and household goods into modern developments across Al Reem Island, Saadiyat Cultural District, Yas Island, Al Raha Beach, and Khalifa City. Our drivers are equipped with safety gear, transport blankets, and vehicle tie-downs for secure road travel.
            </p>

            <h3 className="font-headline-md text-xl font-bold text-on-surface pt-4">Key Abu Dhabi Districts Served</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-on-surface-variant">
              <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                <strong className="text-on-surface block mb-1">Mussafah & ICAD:</strong>
                Heavy workshops, building suppliers, machinery distributors, ICAD 1, 2, and 3.
              </div>
              <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                <strong className="text-on-surface block mb-1">KEZAD & Port Logistics:</strong>
                Khalifa Port container distribution, industrial logistics, Al Taweelah area.
              </div>
              <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                <strong className="text-on-surface block mb-1">Central Capital:</strong>
                Al Danah, Al Khalidiyah, Corniche, Al Bateen commercial properties and offices.
              </div>
              <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                <strong className="text-on-surface block mb-1">Island Communities:</strong>
                Al Reem Island, Yas Island, Saadiyat, Al Maryah Island, Al Raha Beach.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-xl space-y-6">
            <h3 className="font-headline-md text-xl font-bold text-on-surface">Abu Dhabi Fleet Allocation</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-surface-container-high border border-surface-container-highest">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-on-surface">3 Ton Box Pickup (Canter / NPR)</h4>
                  <span className="text-xs font-mono text-secondary font-bold">From AED 280</span>
                </div>
                <p className="text-xs text-on-surface-variant">Most requested vehicle for Mussafah trade cargo, pallet delivery, and apartment furniture transport on Reem Island.</p>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-high border border-surface-container-highest">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-on-surface">1 Ton Pickup (Hilux / D-Max)</h4>
                  <span className="text-xs font-mono text-secondary font-bold">From AED 160</span>
                </div>
                <p className="text-xs text-on-surface-variant">Fast agile choice for urgent tool runs, single appliance delivery, and residential moves with underground basement limits.</p>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-high border border-surface-container-highest">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-on-surface">7 Ton Heavy Carrier</h4>
                  <span className="text-xs font-mono text-secondary font-bold">From AED 520</span>
                </div>
                <p className="text-xs text-on-surface-variant">High-capacity flatbed for structural steel, generators, and industrial materials across Mussafah and KEZAD.</p>
              </div>
            </div>

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

      {/* Internal Links to Relevant Locations */}
      <section className="py-16 bg-surface-container/40 border-y border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-6">
            Connecting Abu Dhabi with Key UAE Logistics Hubs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link href="/locations/dubai" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
              <h3 className="font-label-lg font-bold text-on-surface mb-2">Abu Dhabi to Dubai</h3>
              <p className="text-sm text-on-surface-variant">Regular daily road transport via E11 to JAFZA, Al Quoz, and Downtown Dubai.</p>
            </Link>
            <Link href="/locations/al-ain" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
              <h3 className="font-label-lg font-bold text-on-surface mb-2">Abu Dhabi to Al Ain</h3>
              <p className="text-sm text-on-surface-variant">Inland cargo transit via Abu Dhabi-Al Ain Road (E22) connecting Capital with Eastern Region.</p>
            </Link>
            <Link href="/locations/sharjah" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
              <h3 className="font-label-lg font-bold text-on-surface mb-2">Abu Dhabi to Sharjah</h3>
              <p className="text-sm text-on-surface-variant">Long-distance trade runs linking Abu Dhabi industrial zones with Sharjah Industrial 1-18.</p>
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        title="Schedule Pickup Transportation in Abu Dhabi"
        subtitle="Prompt dispatch across Mussafah, KEZAD, and metropolitan districts with verified drivers and upfront rates."
        whatsAppMessage="Hello, I would like to book a pickup truck in Abu Dhabi."
      />

      <FaqSection items={abuDhabiFaqs} />
    </div>
  );
}
