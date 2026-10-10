import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "7 Ton Truck Rental UAE | Heavy Cargo & Flatbed Transport",
  description:
    "Hire 7 ton commercial trucks across Dubai, Abu Dhabi, and the UAE. Certified payload up to 7,000 kg with ~21 ft bed length. Heavy industrial equipment, machinery transport, and bulk commercial freight.",
  path: "/fleet/7-ton-pickup",
  keywords: [
    "7 ton truck rental UAE",
    "7 ton flatbed UAE",
    "heavy cargo truck Dubai",
    "7 ton commercial transport",
    "Isuzu Forward 7 ton hire",
    "industrial machinery road freight"
  ]
});

const sevenTonFaqs = [
  {
    question: "What is a 7-ton truck best used for in the UAE?",
    answer:
      "The 7-ton commercial truck is designed for high-capacity freight: heavy industrial equipment, structural steel and metal fabrication, pallets exceeding 3 tons in aggregate weight, large generators, construction scaffolding, and major commercial warehouse transfers."
  },
  {
    question: "Are drivers licensed for heavy commercial vehicles in the UAE?",
    answer:
      "Yes. All drivers hold valid UAE Heavy Truck (Category 4) commercial driving licenses with full regulatory compliance and experience navigating commercial arterial highways."
  },
  {
    question: "Can 7-ton trucks access residential areas in Dubai or Abu Dhabi?",
    answer:
      "Most residential communities have strict weight and axle limits prohibiting heavy trucks during peak daytime hours without municipal permits. Our dispatch coordinators evaluate route timing, RTA truck ban hours, and municipal transit windows before scheduling heavy commercial trips."
  },
  {
    question: "How do I secure an exact quote for a 7-ton transport job?",
    answer:
      "Provide your cargo dimensions, approximate total weight, pickup location, and drop-off point via our instant quote portal or contact our dispatch desk directly."
  }
];

export default function SevenTonTruckPage() {
  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "7 Ton Commercial Truck Rental",
    description: "Heavy commercial 7 ton road freight truck rental for industrial and large cargo across the UAE.",
    image: `${SITE_URL}/images/screens/08_fleet.png`,
    brand: {
      "@type": "Brand",
      name: "Isuzu Forward / Hino 500"
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AED",
      lowPrice: "520",
      highPrice: "1200",
      offerCount: "1"
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={vehicleSchema} />
      <Breadcrumbs items={[{ name: "Fleet", item: "/fleet" }, { name: "7 Ton Truck", item: "/fleet/7-ton-pickup" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Heavy Commercial Logistics • 7,000 kg Payload</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
                7 Ton Commercial Truck Rental in the UAE
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
                High-capacity road transport for heavy industrial hardware, large manufacturing freight, and volume logistics across all 7 Emirates. Experienced heavy-vehicle commercial drivers with comprehensive highway compliance.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
                >
                  Book 7 Ton Truck
                </Link>
                <Link
                  href="/services/commercial-transportation"
                  className="px-8 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
                >
                  Commercial Services →
                </Link>
              </div>
            </div>

            {/* Right Hero Vehicle Image */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden border border-surface-container-high shadow-2xl">
                <Image
                  src="/images/fleet/7-ton-pickup.webp"
                  alt="7-Ton heavy commercial flatbed truck carrier in UAE logistics depot"
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

      {/* Specifications */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">
              Heavy Logistics Architecture
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Engineering Specs & Heavy Load Suitability
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              When cargo volume or weight exceeds the capacity of standard light pickup trucks, our 7-ton carriers provide the requisite chassis strength and highway stability. Engineered on robust platforms like the Isuzu Forward and Hino 500, these vehicles feature extended ~21-foot flatbeds or high-sided configurations suitable for forklift and overhead crane loading at industrial plants.
            </p>

            <div className="bg-surface-container rounded-2xl border border-surface-container-high p-6 overflow-x-auto">
              <table className="w-full text-sm text-left">
                <tbody>
                  <tr className="border-b border-surface-container-high">
                    <td className="py-3 font-semibold text-on-surface">Maximum Rated Payload</td>
                    <td className="py-3 text-secondary font-mono font-bold">7,000 kg (7 Tons)</td>
                  </tr>
                  <tr className="border-b border-surface-container-high">
                    <td className="py-3 font-semibold text-on-surface">Cargo Bed Length</td>
                    <td className="py-3 text-on-surface-variant font-mono">~6.5 meters (~21.3 feet)</td>
                  </tr>
                  <tr className="border-b border-surface-container-high">
                    <td className="py-3 font-semibold text-on-surface">Cargo Bed Width</td>
                    <td className="py-3 text-on-surface-variant font-mono">~2.4 meters (~7.8 feet)</td>
                  </tr>
                  <tr className="border-b border-surface-container-high">
                    <td className="py-3 font-semibold text-on-surface">Licensing Category</td>
                    <td className="py-3 text-on-surface-variant">UAE Heavy Commercial (Category 4)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-on-surface">Recommended For</td>
                    <td className="py-3 text-on-surface-variant">Machinery, structural steel, volume pallet distribution</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-headline-md text-xl font-bold text-on-surface pt-4">Primary Heavy Use Cases</h3>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                <span><strong>Industrial Machinery & Generators:</strong> Safe road transit for factory tools, heavy generators, and compressor units.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                <span><strong>Construction Structural Cargo:</strong> Steel beams, precast fittings, and heavy building hardware across UAE infrastructure projects.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                <span><strong>Long-Haul Inter-Emirate Cargo:</strong> High-efficiency freight between Abu Dhabi’s industrial zones and Northern Emirates ports.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
              <div>
                <span className="font-label-mono text-xs uppercase text-secondary font-semibold">Base Commercial Trip</span>
                <div className="text-2xl font-bold text-on-surface">From AED 520</div>
              </div>
              <span className="px-3 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-label-mono font-bold">Heavy Rated</span>
            </div>

            <div className="space-y-3 text-sm text-on-surface-variant">
              <div className="flex items-center justify-between py-1">
                <span>Heavy Driver:</span>
                <span className="text-on-surface font-semibold">Included</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>RTA Permit Route Compliance:</span>
                <span className="text-on-surface font-semibold">Coordinated</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Tie-down Straps & Chains:</span>
                <span className="text-on-surface font-semibold">Heavy Duty Standard</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Billing:</span>
                <span className="text-on-surface font-semibold">FTA VAT Tax Invoice</span>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-container-high space-y-3">
              <Link
                href="/request-quote"
                className="w-full py-3.5 rounded-xl bg-secondary text-on-secondary font-bold text-center block hover:bg-secondary-fixed transition-colors"
              >
                Request Heavy Quote
              </Link>
              <Link
                href="/fleet/3-ton-pickup"
                className="w-full py-3.5 rounded-xl bg-surface-container-high text-on-surface font-semibold text-center block hover:bg-surface-variant transition-colors text-sm"
              >
                Medium Load? View 3-Ton Pickup →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Schedule a 7 Ton Heavy Commercial Carrier"
        subtitle="Professional heavy road transport with full safety compliance across Dubai, Abu Dhabi, and the Northern Emirates."
        whatsAppMessage="Hello, I would like a quote for a 7-ton truck transport job in the UAE."
      />

      <FaqSection items={sevenTonFaqs} />
    </div>
  );
}
