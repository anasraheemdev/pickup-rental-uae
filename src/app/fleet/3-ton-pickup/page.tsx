import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "3 Ton Pickup Rental UAE | Box & Open Bed Truck Hire",
  description:
    "Hire 3 ton pickup trucks across Dubai, Abu Dhabi, and the UAE. Available in open bed and enclosed box configurations with up to 3,000 kg payload capacity. Perfect for palletized freight, furniture suites, and commercial cargo.",
  path: "/fleet/3-ton-pickup",
  keywords: [
    "3 ton pickup rental UAE",
    "3 ton pickup Dubai",
    "3 ton closed box pickup",
    "3 ton open bed truck UAE",
    "Mitsubishi Canter 3 ton rental",
    "commercial 3 ton truck hire"
  ]
});

const threeTonFaqs = [
  {
    question: "Should I choose an open-bed or closed-box 3-ton pickup?",
    answer:
      "Choose an open-bed 3-ton if your cargo requires overhead crane loading, contains tall machinery exceeding 2.2 meters, or consists of durable building materials. Choose a closed-box 3-ton if you are transporting furniture, carton-packed retail goods, textiles, or electronics that require full protection from road dust, heat, and weather."
  },
  {
    question: "How many standard pallets fit in a 3-ton truck?",
    answer:
      "A standard 14-foot 3-ton truck bed comfortably accommodates 3 to 4 standard pallets (100x120 cm), provided the total weight remains within the 3,000 kg legal payload limit."
  },
  {
    question: "Can a 3-ton pickup handle moving a 1-bedroom or 2-bedroom apartment?",
    answer:
      "Yes. The 3-ton box truck is the industry standard for 1-bedroom and 2-bedroom apartment furniture moves across Dubai and Abu Dhabi, providing ample volume for mattresses, sofas, wardrobes, and appliances."
  },
  {
    question: "Are drivers licensed for commercial heavy-light transport in the UAE?",
    answer:
      "Yes. All drivers hold valid UAE Light Truck/Commercial vehicle licenses and comply with RTA goods transport and gross weight regulations."
  }
];

export default function ThreeTonPickupPage() {
  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "3 Ton Pickup Truck Rental",
    description: "Commercial 3 ton pickup truck rental in open-bed and enclosed box formats across the UAE.",
    image: `${SITE_URL}/images/screens/08_fleet.png`,
    brand: {
      "@type": "Brand",
      name: "Mitsubishi Canter / Isuzu NPR"
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AED",
      lowPrice: "280",
      highPrice: "750",
      offerCount: "1"
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={vehicleSchema} />
      <Breadcrumbs items={[{ name: "Fleet", item: "/fleet" }, { name: "3 Ton Pickup", item: "/fleet/3-ton-pickup" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Workhorse Freight • UAE Highway Certified</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
                3 Ton Pickup Truck Rental Across the UAE
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
                The premier workhorse of UAE commercial transport. Available in open-bed and weatherproof closed-box configurations for palletized freight, multi-room furniture moves, and B2B industrial distribution.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
                >
                  Book 3 Ton Pickup
                </Link>
                <Link
                  href="/resources/1-ton-vs-3-ton-pickup"
                  className="px-8 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
                >
                  Vehicle Sizing Comparison →
                </Link>
              </div>
            </div>

            {/* Right Hero Vehicle Image */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden border border-surface-container-high shadow-2xl">
                <Image
                  src="/images/fleet/3-ton-pickup.webp"
                  alt="3-Ton commercial enclosed box truck in UAE logistics staging yard"
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

      {/* Technical Specifications */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">
              Fleet Engineering
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              3 Ton Technical Specifications & Capabilities
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              The 3-ton pickup category (predominantly Mitsubishi Canter and Isuzu NPR platforms) forms the core infrastructure of UAE road freight. With approximately 14 feet of bed length and a certified payload capacity of 3,000 kg, it accommodates heavy commercial cargo while retaining the agility required for urban commercial districts and residential communities.
            </p>

            <div className="bg-surface-container rounded-2xl border border-surface-container-high p-6 overflow-x-auto">
              <table className="w-full text-sm text-left">
                <tbody>
                  <tr className="border-b border-surface-container-high">
                    <td className="py-3 font-semibold text-on-surface">Maximum Rated Payload</td>
                    <td className="py-3 text-secondary font-mono font-bold">3,000 kg (3 Tons)</td>
                  </tr>
                  <tr className="border-b border-surface-container-high">
                    <td className="py-3 font-semibold text-on-surface">Cargo Bed Length</td>
                    <td className="py-3 text-on-surface-variant font-mono">~4.3 meters (14 feet)</td>
                  </tr>
                  <tr className="border-b border-surface-container-high">
                    <td className="py-3 font-semibold text-on-surface">Cargo Bed Width</td>
                    <td className="py-3 text-on-surface-variant font-mono">~2.1 meters (6.8 feet)</td>
                  </tr>
                  <tr className="border-b border-surface-container-high">
                    <td className="py-3 font-semibold text-on-surface">Configuration Options</td>
                    <td className="py-3 text-on-surface-variant">Weatherproof Enclosed Box OR Open Flat Bed</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-on-surface">Pallet Capacity</td>
                    <td className="py-3 text-on-surface-variant font-mono">3 to 4 Standard Pallets (100x120cm)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-headline-md text-xl font-bold text-on-surface pt-4">Primary Applications</h3>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                <span><strong>Apartment Furniture Moving:</strong> Carries multiple large pieces—beds, wardrobes, sectional sofas, and dining sets—in a single secure trip.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                <span><strong>Warehouse & Pallet Freight:</strong> Efficient for transferring stacked cartons, manufactured goods, and machinery parts between JAFZA, Dubai South, and Sharjah.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                <span><strong>Retail Distribution Routes:</strong> Used by commercial businesses for scheduled store replenishment across Dubai and Abu Dhabi malls.</span>
              </li>
            </ul>
          </div>

          {/* Pricing & Booking Box */}
          <div className="lg:col-span-5 bg-surface-container p-8 rounded-2xl border border-secondary/40 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
              <div>
                <span className="font-label-mono text-xs uppercase text-secondary font-semibold">Standard City Trip</span>
                <div className="text-2xl font-bold text-on-surface">From AED 280</div>
              </div>
              <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary text-xs font-label-mono font-bold">High Demand</span>
            </div>

            <div className="space-y-3 text-sm text-on-surface-variant">
              <div className="flex items-center justify-between py-1">
                <span>Driver:</span>
                <span className="text-on-surface font-semibold">Included</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Enclosed / Open:</span>
                <span className="text-on-surface font-semibold">Client Choice</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Fuel (City Limits):</span>
                <span className="text-on-surface font-semibold">Included</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Helper Crew:</span>
                <span className="text-on-surface font-semibold">1 or 2 Helpers Optional</span>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-container-high space-y-3">
              <Link
                href="/request-quote"
                className="w-full py-3.5 rounded-xl bg-secondary text-on-secondary font-bold text-center block hover:bg-secondary-fixed transition-colors"
              >
                Instant Fare Calculator
              </Link>
              <Link
                href="/fleet/7-ton-pickup"
                className="w-full py-3.5 rounded-xl bg-surface-container-high text-on-surface font-semibold text-center block hover:bg-surface-variant transition-colors text-sm"
              >
                Heavier Load? View 7-Ton Carrier →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Reserve a 3 Ton Pickup for Your Road Transport Needs"
        subtitle="Upfront pricing, experienced commercial driver, and reliable dispatch across Dubai, Abu Dhabi, and all 7 Emirates."
        whatsAppMessage="Hello, I would like to book a 3-ton pickup truck in the UAE."
      />

      <FaqSection items={threeTonFaqs} />
    </div>
  );
}
