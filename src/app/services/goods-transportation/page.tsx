import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Goods Transport UAE | Commercial Cargo & Pallet Road Freight",
  description:
    "Secure goods transportation across Dubai, Abu Dhabi, and the UAE. Dedicated pickup trucks and closed-box carriers for commercial inventory, industrial cargo, pallets, and retail merchandise.",
  path: "/services/goods-transportation",
  keywords: [
    "goods transport UAE",
    "commercial goods transport Dubai",
    "cargo transport UAE",
    "pallet transportation UAE",
    "road freight pickup Dubai",
    "warehouse goods transfer UAE"
  ]
});

const goodsFaqs = [
  {
    question: "What types of goods can be transported?",
    answer:
      "We transport palletized inventory, commercial retail stock, building supplies, electronics, exhibition materials, packaged non-perishables, and manufacturing components. We adhere strictly to UAE road safety and civil defense guidelines; hazardous chemicals, flammable fuels, and prohibited contraband are not carried."
  },
  {
    question: "Do you provide enclosed box trucks for goods that require weather protection?",
    answer:
      "Yes. Our 3-ton and 7-ton fleet includes fully enclosed, weatherproof box trucks that shield high-value electronics, carton-packed merchandise, and delicate fabrics from heat, dust, and rain."
  },
  {
    question: "Can you handle multi-point distribution runs across Dubai and Sharjah?",
    answer:
      "Yes. Commercial clients frequently book half-day or full-day dedicated blocks where our vehicle and driver execute multi-stop delivery routes between free-zone warehouses, retail malls, and customer premises."
  },
  {
    question: "Are gate passes and free-zone entry documents handled by the driver?",
    answer:
      "Our commercial drivers carry UAE legal identity and RTA commercial driving credentials. For free zones requiring advanced client-issued gate passes (such as JAFZA, DAFZA, or KIZAD), clients provide the digital entry clearance, and our dispatch team coordinates vehicle registration numbers in advance."
  }
];

export default function GoodsTransportationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Goods Transportation",
    name: "Goods Transportation UAE",
    description: "Reliable commercial goods and cargo road transport across all 7 UAE Emirates.",
    provider: {
      "@type": "LocalBusiness",
      name: "Pickup & Rental",
      url: SITE_URL
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Dubai" },
      { "@type": "AdministrativeArea", name: "Abu Dhabi" },
      { "@type": "AdministrativeArea", name: "Sharjah" },
      { "@type": "AdministrativeArea", name: "Ajman" },
      { "@type": "AdministrativeArea", name: "Ras Al Khaimah" },
      { "@type": "AdministrativeArea", name: "Fujairah" },
      { "@type": "AdministrativeArea", name: "Umm Al Quwain" },
      { "@type": "AdministrativeArea", name: "Al Ain" }
    ]
  };

  return (
    <div className="w-full">
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[{ name: "Services", item: "/services" }, { name: "Goods Transportation", item: "/services/goods-transportation" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Commercial Freight &amp; Cargo • UAE Highway Network</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
                Commercial Goods Transportation Across the UAE
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
                Safe, compliant road transportation for commercial inventory, palletized stock, industrial parts, and bulk trade cargo. Scheduled transfers and rapid on-demand dispatch between warehouses, ports, and retail centers.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
                >
                  Book Goods Transport
                </Link>
                <Link
                  href="/services/commercial-transportation"
                  className="px-8 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
                >
                  Commercial Solutions →
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden border border-surface-container-high shadow-2xl">
                <Image
                  src="/images/services/goods-transportation.webp"
                  alt="Loading and securing boxed commercial goods cargo onto commercial pickup in UAE"
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

      {/* Section: Operational Overview */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">
              B2B & Trade Logistics
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Secured Cargo Handling with Strict Highway Compliance
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Transporting goods in the UAE requires careful attention to load securing, gross vehicle weight limits, and timely delivery across major commercial highways. An improperly strapped consignment or overloaded vehicle can lead to costly delays at RTA inspection weighing stations or damage delicate commercial merchandise.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              At Pickup & Rental, every transport assignment is handled with industrial ratchets, heavy-duty tarpaulins, or closed-box security depending on cargo type. Our drivers maintain strict transit protocols between industrial hubs in Dubai (Al Quoz, Ras Al Khor, JAFZA), Sharjah Industrial Areas 1 through 18, and Abu Dhabi’s Mussafah and ICAD zones.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high">
                <h3 className="font-label-lg text-on-surface font-bold mb-1">Palletized Freight</h3>
                <p className="text-sm text-on-surface-variant">Standard 100x120cm and Euro pallets accommodated with forklift-accessible open beds or hydraulic lift tailgates.</p>
              </div>
              <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high">
                <h3 className="font-label-lg text-on-surface font-bold mb-1">Enclosed Box Cargo</h3>
                <p className="text-sm text-on-surface-variant">Weather-sealed aluminum boxes shielding cartons, luxury products, and sensitive trade items from environmental exposure.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-xl space-y-6">
            <h3 className="font-headline-md text-xl font-bold text-on-surface">Industries We Support Daily</h3>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">verified</span>
                <span><strong>Wholesale & Import / Export:</strong> Direct distribution of bulk consignments from Jebel Ali Port or Sharjah Port to regional distribution centers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">verified</span>
                <span><strong>Building Material Suppliers:</strong> Rapid road transport of tiles, plumbing fixtures, paint drums, and electrical conduit to active UAE job sites.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">verified</span>
                <span><strong>Retail Chain Restocking:</strong> Scheduled evening or morning deliveries to shopping malls with specific basement loading bay height constraints.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">verified</span>
                <span><strong>Automotive Parts & Hardware:</strong> Safe transit of engines, body panels, tires, and machine components across automotive clusters.</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-surface-container-high">
              <Link
                href="/fleet/3-ton-pickup"
                className="w-full py-3.5 rounded-xl bg-secondary text-on-secondary font-bold text-center block hover:bg-secondary-fixed transition-colors"
              >
                View 3-Ton Cargo Vehicle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Fleet for Goods */}
      <section className="py-16 bg-surface-container/40 border-y border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">Recommended Vehicles</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-2">Recommended Vehicles for Goods Transport</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high">
              <h3 className="font-headline-md text-lg font-bold text-on-surface">1 Ton Pickup (Open / Cage)</h3>
              <p className="text-sm text-on-surface-variant mt-2">Up to 1,000 kg capacity. Best for urgent part runs, small hardware deliveries, and locations with tight loading access.</p>
              <Link href="/fleet/1-ton-pickup" className="mt-4 text-xs font-label-mono text-secondary hover:underline inline-block">1 Ton Specifications →</Link>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container border border-secondary/40">
              <h3 className="font-headline-md text-lg font-bold text-on-surface">3 Ton Box Truck</h3>
              <p className="text-sm text-on-surface-variant mt-2">Up to 3,000 kg capacity. Accommodates 3 to 4 standard pallets with enclosed lockable security for commercial trade.</p>
              <Link href="/fleet/3-ton-pickup" className="mt-4 text-xs font-label-mono text-secondary hover:underline inline-block">3 Ton Specifications →</Link>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high">
              <h3 className="font-headline-md text-lg font-bold text-on-surface">7 Ton Heavy Carrier</h3>
              <p className="text-sm text-on-surface-variant mt-2">Up to 7,000 kg capacity. Best for high-volume warehouse replenishment, heavy metal fabrication, and long-distance freight.</p>
              <Link href="/fleet/7-ton-pickup" className="mt-4 text-xs font-label-mono text-secondary hover:underline inline-block">7 Ton Specifications →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Cross-Linking */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-6">
          Related Transportation Services & Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link href="/services/commercial-transportation" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
            <h3 className="font-label-lg font-bold text-on-surface mb-2">Commercial Transportation</h3>
            <p className="text-sm text-on-surface-variant">Dedicated enterprise retainers and scheduled business fleet contracts across the UAE.</p>
          </Link>
          <Link href="/resources/commercial-goods-transport-guide" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
            <h3 className="font-label-lg font-bold text-on-surface mb-2">Commercial Goods Checklist</h3>
            <p className="text-sm text-on-surface-variant">Essential checklist for packaging, manifests, and free zone access in the UAE.</p>
          </Link>
          <Link href="/locations/sharjah" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
            <h3 className="font-label-lg font-bold text-on-surface mb-2">Sharjah Industrial Goods Transport</h3>
            <p className="text-sm text-on-surface-variant">Direct transport connecting Sharjah Industrial areas with Dubai and northern distribution hubs.</p>
          </Link>
        </div>
      </section>

      <CtaSection
        title="Schedule Your Goods Transport Job Today"
        subtitle="Get upfront pricing and rapid vehicle allocation across any of the 7 Emirates. Available for single deliveries or recurring commercial routes."
        whatsAppMessage="Hello, I would like to request a quote for commercial goods transport."
      />

      <FaqSection items={goodsFaqs} />
    </div>
  );
}
