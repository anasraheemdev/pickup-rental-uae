import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "1 Ton Pickup Rental UAE | Single & Double Cab Truck Hire",
  description:
    "Hire 1 ton pickup trucks across Dubai, Abu Dhabi, and the UAE. Verified payload of up to 1,000 kg, ideal for single furniture pieces, carton boxes, small retail deliveries, and low basement clearance access.",
  path: "/fleet/1-ton-pickup",
  keywords: [
    "1 ton pickup rental UAE",
    "1 ton pickup Dubai",
    "single cab pickup for rent",
    "small cargo pickup UAE",
    "Toyota Hilux pickup rental",
    "1 ton pickup hire Abu Dhabi"
  ]
});

const fleetFaqs = [
  {
    question: "What is a 1-ton pickup truck best used for?",
    answer:
      "A 1-ton pickup is optimal for smaller, agile transport requirements: single furniture pieces (like a sofa, dining table, or washing machine), retail store deliveries, small machinery components, event props, and carton-packed shipments weighing up to 1,000 kg."
  },
  {
    question: "Can a 1-ton pickup enter residential building basements in Dubai?",
    answer:
      "Yes. Most standard 1-ton pickups (such as Toyota Hilux or Isuzu D-Max) have a vehicle height under 1.9 meters, allowing them to easily enter underground basement parking and designated loading bays across Dubai Marina, JLT, and Downtown towers with 2.0m to 2.2m clearance limits."
  },
  {
    question: "Is a driver included with the 1-ton pickup rental?",
    answer:
      "Yes. All our rentals include a verified commercial driver licensed by UAE transport authorities. We operate point-to-point and hourly/daily block hires with driver and fuel included."
  },
  {
    question: "Can I add helpers for loading the 1-ton pickup?",
    answer:
      "Yes. You can add 1 or 2 professional helpers to assist with lifting, carrying, and loading items into the truck bed."
  }
];

export default function OneTonPickupPage() {
  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "1 Ton Pickup Truck Rental",
    description: "Commercial 1 ton pickup truck rental for light cargo and furniture transport across the UAE.",
    image: `${SITE_URL}/images/screens/08_fleet.png`,
    brand: {
      "@type": "Brand",
      name: "Toyota Hilux / Isuzu D-Max"
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AED",
      lowPrice: "160",
      highPrice: "450",
      offerCount: "1"
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={vehicleSchema} />
      <Breadcrumbs items={[{ name: "Fleet", item: "/fleet" }, { name: "1 Ton Pickup", item: "/fleet/1-ton-pickup" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Fleet Specifications • Urban Freight</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
                1 Ton Pickup Truck Rental in the UAE
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
                Agile, reliable, and convenient for city driving and basement access. The 1-ton pickup is the ideal choice for single-item furniture delivery, retail stock runs, and swift urban freight across all UAE Emirates.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
                >
                  Book 1 Ton Pickup
                </Link>
                <Link
                  href="/resources/1-ton-vs-3-ton-pickup"
                  className="px-8 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
                >
                  1 Ton vs 3 Ton Guide →
                </Link>
              </div>
            </div>

            {/* Right Hero Vehicle Image */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden border border-surface-container-high shadow-2xl">
                <Image
                  src="/images/fleet/1-ton-pickup.webp"
                  alt="1-Ton commercial single cab pickup truck in pristine UAE setting"
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

      {/* Technical Specifications & Dimensions */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">
              Vehicle Capabilities
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Engineering Specs & Load Dimensions
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              The 1-ton pickup (typically modeled on Toyota Hilux or Isuzu D-Max platforms) offers the optimal balance between cargo bed volume and physical vehicle maneuverability. In densely built residential communities like Jumeirah Village Circle (JVC), Downtown Dubai, and Sharjah Corniche, larger commercial trucks frequently encounter restricted access or no-stopping zones. The 1-ton pickup moves effortlessly through underground parking decks, loading bays, and tight alleyways.
            </p>

            <div className="bg-surface-container rounded-2xl border border-surface-container-high p-6 overflow-x-auto">
              <table className="w-full text-sm text-left">
                <tbody>
                  <tr className="border-b border-surface-container-high">
                    <td className="py-3 font-semibold text-on-surface">Maximum Rated Payload</td>
                    <td className="py-3 text-secondary font-mono font-bold">1,000 kg (1 Ton)</td>
                  </tr>
                  <tr className="border-b border-surface-container-high">
                    <td className="py-3 font-semibold text-on-surface">Cargo Bed Length (Approx.)</td>
                    <td className="py-3 text-on-surface-variant font-mono">2.3 meters (~7.5 feet)</td>
                  </tr>
                  <tr className="border-b border-surface-container-high">
                    <td className="py-3 font-semibold text-on-surface">Cargo Bed Width (Approx.)</td>
                    <td className="py-3 text-on-surface-variant font-mono">1.5 meters (~5.0 feet)</td>
                  </tr>
                  <tr className="border-b border-surface-container-high">
                    <td className="py-3 font-semibold text-on-surface">Overall Vehicle Clearance Height</td>
                    <td className="py-3 text-on-surface-variant font-mono">&lt; 1.9 meters (Basement friendly)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-on-surface">Included Equipment</td>
                    <td className="py-3 text-on-surface-variant">Weatherproof tarpaulin, ratchet tie-downs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-headline-md text-xl font-bold text-on-surface pt-4">Best Use Cases for the 1-Ton Pickup</h3>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                <span><strong>Single Furniture Purchases:</strong> Transporting a 3-seater sofa, dining table set, refrigerator, or washing machine.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                <span><strong>Small Apartment Partial Moves:</strong> Studio or small 1-bedroom partial items, luggage, and stacked boxes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                <span><strong>Hardware & Building Tools:</strong> Direct delivery of electrical equipment, paint buckets, ladders, and plumbing parts to active sites.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                <span><strong>Urgent Commercial Dispatch:</strong> Same-day parts replacement between industrial yards in Al Quoz, Sharjah, and Ajman.</span>
              </li>
            </ul>
          </div>

          {/* Booking Card & Pricing Summary */}
          <div className="lg:col-span-5 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
              <div>
                <span className="font-label-mono text-xs uppercase text-secondary font-semibold">Base Hire Rate</span>
                <div className="text-2xl font-bold text-on-surface">From AED 160</div>
              </div>
              <span className="px-3 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-label-mono font-bold">Instant Dispatch</span>
            </div>

            <div className="space-y-3 text-sm text-on-surface-variant">
              <div className="flex items-center justify-between py-1">
                <span>Driver:</span>
                <span className="text-on-surface font-semibold">Included</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Fuel (Standard City):</span>
                <span className="text-on-surface font-semibold">Included</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Optional Helpers:</span>
                <span className="text-on-surface font-semibold">Available on request</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Average Dispatch:</span>
                <span className="text-secondary font-semibold">Under 45 Minutes</span>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-container-high space-y-3">
              <Link
                href="/request-quote"
                className="w-full py-3.5 rounded-xl bg-secondary text-on-secondary font-bold text-center block hover:bg-secondary-fixed transition-colors"
              >
                Calculate Trip Price
              </Link>
              <Link
                href="/fleet/3-ton-pickup"
                className="w-full py-3.5 rounded-xl bg-surface-container-high text-on-surface font-semibold text-center block hover:bg-surface-variant transition-colors text-sm"
              >
                Need Larger Bed? View 3-Ton Pickup →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Need a 1 Ton Pickup Dispatched Now?"
        subtitle="Book point-to-point transit across Dubai, Abu Dhabi, and Northern Emirates with guaranteed RTA compliance."
        whatsAppMessage="Hello, I need to book a 1-ton pickup truck in the UAE."
      />

      <FaqSection items={fleetFaqs} />
    </div>
  );
}
