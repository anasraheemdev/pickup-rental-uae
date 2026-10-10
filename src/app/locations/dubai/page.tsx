import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Pickup Rental Dubai | 1 Ton & 3 Ton Pickup Truck Transport",
  description:
    "Fast, reliable pickup rental across Dubai. Professional drivers for furniture delivery, commercial goods, and apartment moves in Downtown, Marina, Business Bay, JAFZA, and Al Quoz. Average 45-minute dispatch.",
  path: "/locations/dubai",
  keywords: [
    "pickup rental Dubai",
    "pickup truck rental Dubai",
    "rent pickup in Dubai",
    "goods transport Dubai",
    "furniture pickup Dubai",
    "1 ton pickup Dubai Marina",
    "3 ton pickup Al Quoz"
  ]
});

const dubaiFaqs = [
  {
    question: "Do you have physical branches in Dubai or is this a service-area dispatch model?",
    answer:
      "We operate a coordinated service-area mobile fleet with centralized dispatch based in Dubai. Our vehicles are strategically stationed across central Dubai districts (including Al Quoz, Ras Al Khor, and Dubai South) to achieve an average response time under 45 minutes across all metropolitan areas."
  },
  {
    question: "How do you handle Dubai Salik toll gate charges?",
    answer:
      "All standard Salik toll charges encountered on designated routes (such as Sheikh Zayed Road, Al Barsha, Al Garhoud, or Business Bay) are itemized transparently in your trip estimate with no hidden surcharges."
  },
  {
    question: "Can your pickup trucks access residential tower basements in Dubai Marina and Downtown?",
    answer:
      "Yes. Our 1-ton pickup trucks maintain a clearance height under 1.9 meters, enabling them to comfortably access underground loading docks and basement parking lots across Dubai Marina, JLT, Downtown Dubai, and DIFC towers with 2.0m to 2.2m clearance limits."
  },
  {
    question: "Do you provide gate pass documentation for JAFZA and Dubai South free zones?",
    answer:
      "Yes. Our commercial drivers carry UAE legal identity and commercial vehicle registration. When clients arrange digital visitor or cargo gate passes for JAFZA, DAFZA, or Dubai South, we provide vehicle plate details in advance for prompt clearance."
  }
];

export default function DubaiLocationPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pickup & Rental - Dubai Service Area",
    description: "Professional pickup truck rental and commercial road transportation services across Dubai.",
    url: `${SITE_URL}/locations/dubai`,
    telephone: "+971555775074",
    areaServed: {
      "@type": "City",
      name: "Dubai",
      sameAs: "https://en.wikipedia.org/wiki/Dubai"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.2048",
      longitude: "55.2708"
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={localSchema} />
      <Breadcrumbs items={[{ name: "Locations", item: "/locations" }, { name: "Dubai", item: "/locations/dubai" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Serving Dubai • Rapid 45-Min Dispatch</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
                Pickup Truck Rental &amp; Road Transport in Dubai
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
                Professional pickup truck transport serving residential communities, commercial business districts, and industrial zones across Dubai. Licensed drivers, verified vehicle capacities, and upfront transparent pricing.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
                >
                  Get Dubai Trip Quote
                </Link>
                <Link
                  href="/fleet/1-ton-pickup"
                  className="px-8 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
                >
                  1-Ton Pickup Specs →
                </Link>
              </div>
            </div>

            {/* Right Hero Location Image */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden border border-surface-container-high shadow-2xl">
                <Image
                  src="/images/locations/dubai.webp"
                  alt="Commercial pickup truck on Dubai multi-lane highway corridor with modern skyline"
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

      {/* Dubai District Logistics Details */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">
              Metropolitan Logistics Intelligence
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Navigating Dubai's Unique Urban & Industrial Landscape
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Operating road transportation in Dubai requires mastery of distinct local logistical factors: RTA commercial vehicle lanes, Salik toll corridors, strict basement parking height clearances in master developments, and loading dock security protocols across key commercial free zones.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Our dispatch fleet is distributed to provide rapid coverage for both residential furniture deliveries in neighborhoods like Palm Jumeirah, Dubai Hills, and Jumeirah Village Circle (JVC), as well as heavy palletized freight movements throughout industrial corridors such as Al Quoz, Ras Al Khor, Dubai Silicon Oasis, and Jebel Ali Free Zone (JAFZA).
            </p>

            <h3 className="font-headline-md text-xl font-bold text-on-surface pt-4">Primary Dubai Areas Served</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-on-surface-variant">
              <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                <strong className="text-on-surface block mb-1">Commercial & Financial:</strong>
                Downtown Dubai, Business Bay, DIFC, Sheikh Zayed Road, Dubai World Trade Centre.
              </div>
              <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                <strong className="text-on-surface block mb-1">High-Rise Residential:</strong>
                Dubai Marina, Jumeirah Lakes Towers (JLT), JBR, Palm Jumeirah, Dubai Creek Harbour.
              </div>
              <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                <strong className="text-on-surface block mb-1">Suburban & Villa Communities:</strong>
                Arabian Ranches, Dubai Hills Estate, Damac Hills, JVC, Mirdif, Al Barsha.
              </div>
              <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                <strong className="text-on-surface block mb-1">Industrial & Port Logistics:</strong>
                Al Quoz Industrial 1-4, Ras Al Khor, JAFZA, Dubai Investments Park (DIP), Dubai South.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-xl space-y-6">
            <h3 className="font-headline-md text-xl font-bold text-on-surface">Dubai Fleet Recommendations</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-surface-container-high border border-surface-container-highest">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-on-surface">1 Ton Pickup (Hilux / D-Max)</h4>
                  <span className="text-xs font-mono text-secondary font-bold">From AED 160</span>
                </div>
                <p className="text-xs text-on-surface-variant">Recommended for high-rise tower basements, single furniture items, and urban retail drops across Downtown and Marina.</p>
                <Link href="/fleet/1-ton-pickup" className="text-xs font-mono text-secondary hover:underline mt-2 inline-block">1 Ton Specs →</Link>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-high border border-secondary/40">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-on-surface">3 Ton Box Pickup (Canter)</h4>
                  <span className="text-xs font-mono text-secondary font-bold">From AED 280</span>
                </div>
                <p className="text-xs text-on-surface-variant">Recommended for full apartment moves, multi-pallet freight from JAFZA, and trade deliveries between Al Quoz and Deira.</p>
                <Link href="/fleet/3-ton-pickup" className="text-xs font-mono text-secondary hover:underline mt-2 inline-block">3 Ton Specs →</Link>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-high border border-surface-container-highest">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-on-surface">7 Ton Heavy Carrier</h4>
                  <span className="text-xs font-mono text-secondary font-bold">From AED 520</span>
                </div>
                <p className="text-xs text-on-surface-variant">For heavy construction material, machinery, and cross-emirate bulk logistics to Abu Dhabi and Northern Emirates.</p>
                <Link href="/fleet/7-ton-pickup" className="text-xs font-mono text-secondary hover:underline mt-2 inline-block">7 Ton Specs →</Link>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-container-high">
              <Link
                href="/request-quote"
                className="w-full py-3.5 rounded-xl bg-secondary text-on-secondary font-bold text-center block hover:bg-secondary-fixed transition-colors"
              >
                Instant Dubai Fare Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inter-Emirate Routes from Dubai */}
      <section className="py-16 bg-surface-container/40 border-y border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-6">
            Popular Inter-Emirate Transport Routes from Dubai
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link href="/locations/sharjah" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
              <h3 className="font-label-lg font-bold text-on-surface mb-2">Dubai to Sharjah</h3>
              <p className="text-sm text-on-surface-variant">Direct road logistics connecting Dubai industrial zones with Sharjah Industrial 1-18.</p>
            </Link>
            <Link href="/locations/ajman" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
              <h3 className="font-label-lg font-bold text-on-surface mb-2">Dubai to Ajman</h3>
              <p className="text-sm text-on-surface-variant">Express transit via E311 &amp; E611 connecting with Ajman Jurf Industrial and Free Zone.</p>
            </Link>
            <Link href="/locations/dubai" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
              <h3 className="font-label-lg font-bold text-on-surface mb-2">Intra-Dubai Express</h3>
              <p className="text-sm text-on-surface-variant">Rapid cross-district shuttles between JAFZA, Al Quoz, Business Bay, Deira &amp; Marina.</p>
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        title="Need a Pickup Dispatched in Dubai Right Away?"
        subtitle="Average arrival within 45 minutes across Dubai. Professional licensed driver with optional loading helpers."
        whatsAppMessage="Hello, I need a pickup truck rental in Dubai."
      />

      <FaqSection items={dubaiFaqs} />
    </div>
  );
}
