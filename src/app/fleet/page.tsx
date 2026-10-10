import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Commercial Pickup Truck Fleet UAE | 1 Ton, 3 Ton & 7 Ton Options",
  description:
    "Explore our verified commercial road transport fleet across the UAE. Review payload ratings, dimensions, and specifications for 1-ton, 3-ton, and 7-ton commercial pickups with professional drivers.",
  path: "/fleet",
  keywords: [
    "pickup truck fleet UAE",
    "commercial pickup truck specifications",
    "pickup sizes UAE",
    "1 ton vs 3 ton pickup UAE",
    "hire truck Dubai Abu Dhabi"
  ]
});

const fleetHubFaqs = [
  {
    question: "How do I choose between a 1-ton and a 3-ton pickup truck?",
    answer:
      "A 1-ton pickup is best for small single-item transfers, studio partial contents, small retail drops, and locations with strict underground basement height restrictions. A 3-ton pickup provides much greater cargo bed length (~14 ft) and is ideal for full furniture suites, multiple pallets, and commercial warehouse transfers."
  },
  {
    question: "Are all vehicles maintained and RTA compliant?",
    answer:
      "Yes. All fleet vehicles undergo regular technical inspections, hold valid commercial registration, and carry required safety equipment in accordance with UAE federal transport authorities."
  },
  {
    question: "Can I book a truck with an enclosed box rather than an open bed?",
    answer:
      "Yes. Our 3-ton and 7-ton categories include fully enclosed weatherproof aluminum containers to protect sensitive goods from heat, dust, and rain."
  },
  {
    question: "Are drivers provided with all vehicle rentals?",
    answer:
      "Yes. All rentals include a licensed commercial driver familiar with UAE routes, Salik toll corridors, and commercial delivery protocols."
  }
];

export default function FleetPage() {
  const fleetSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Commercial Pickup Fleet Specifications UAE",
    description: "Overview of commercial pickup truck capacities and vehicle specifications for road transport in the UAE.",
    url: `${SITE_URL}/fleet`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "1 Ton Pickup Truck",
          url: `${SITE_URL}/fleet/1-ton-pickup`
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "3 Ton Pickup Truck",
          url: `${SITE_URL}/fleet/3-ton-pickup`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "7 Ton Commercial Carrier",
          url: `${SITE_URL}/fleet/7-ton-pickup`
        }
      ]
    }
  };

  const fleetList = [
    {
      title: "1 Ton Pickup Truck",
      slug: "/fleet/1-ton-pickup",
      badge: "City Light Cargo",
      image: "/images/fleet/1-ton-pickup.webp",
      models: "Toyota Hilux / Isuzu D-Max",
      payload: "1,000 kg",
      dimensions: "~2.3m bed length (7.5 ft)",
      clearance: "< 1.9m (Basement access friendly)",
      description: "Agile, nimble urban pickup for single-item drops, small retail cargo, and buildings with underground basement loading clearances.",
      useCases: "Single sofa, washing machine, retail boxes, urgent parts run",
      linkText: "1 Ton Specifications & Rates"
    },
    {
      title: "3 Ton Pickup (Box / Open)",
      slug: "/fleet/3-ton-pickup",
      badge: "Commercial Workhorse",
      image: "/images/fleet/3-ton-pickup.webp",
      models: "Mitsubishi Canter / Isuzu NPR",
      payload: "3,000 kg",
      dimensions: "~4.3m bed length (14 ft)",
      clearance: "Enclosed Weatherproof Box or Open Bed",
      description: "The primary workhorse for UAE goods and furniture transport. Accommodates 3 to 4 pallets or multi-room apartment furniture suites.",
      useCases: "Apartment furniture, palletized warehouse goods, retail restocking",
      linkText: "3 Ton Specifications & Rates"
    },
    {
      title: "7 Ton Heavy Carrier",
      slug: "/fleet/7-ton-pickup",
      badge: "Heavy Commercial",
      image: "/images/fleet/7-ton-pickup.webp",
      models: "Isuzu Forward / Hino 500",
      payload: "7,000 kg",
      dimensions: "~6.5m bed length (21 ft)",
      clearance: "Heavy Flatbed / High-Side Carrier",
      description: "Built for heavy industrial machinery, long steel fittings, bulk manufacturing cargo, and cross-emirate industrial supply chains.",
      useCases: "Industrial machinery, construction materials, large pallet freight",
      linkText: "7 Ton Specifications & Rates"
    }
  ];

  return (
    <div className="w-full">
      <JsonLd data={fleetSchema} />
      <Breadcrumbs items={[{ name: "Fleet", item: "/fleet" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>Engineered Commercial Fleet • Payload Verified</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
              Commercial Pickup Truck Fleet & Sizing in the UAE
            </h1>
            <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
              Every transport requirement demands the right vehicle capacity. Explore our verified fleet of 1-Ton, 3-Ton, and 7-Ton commercial trucks equipped with licensed drivers, tie-downs, and protective gear.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/request-quote"
                className="px-6 py-3.5 rounded-xl bg-secondary text-on-secondary font-label-lg text-sm font-bold shadow-[0_8px_20px_-3px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
              >
                Request a Quote
              </Link>
              <Link
                href="/resources/1-ton-vs-3-ton-pickup"
                className="px-6 py-3.5 rounded-xl bg-surface-container text-on-surface font-label-lg text-sm font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
              >
                Vehicle Sizing Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Cards Grid */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleetList.map((truck) => (
            <div
              key={truck.slug}
              className="p-8 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col justify-between hover:border-secondary/40 transition-colors shadow-lg"
            >
              <div>
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5 bg-surface-container-low">
                  <Image
                    src={truck.image}
                    alt={truck.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-label-mono text-secondary font-semibold uppercase px-3 py-1 rounded-full bg-surface-container-high">
                    {truck.badge}
                  </span>
                  <span className="text-xs font-label-mono text-on-surface-variant">{truck.models}</span>
                </div>
                <h2 className="font-headline-md text-2xl font-bold text-on-surface mb-3">
                  <Link href={truck.slug} className="hover:text-secondary transition-colors">
                    {truck.title}
                  </Link>
                </h2>
                <p className="font-body-md text-on-surface-variant mb-6 text-sm leading-relaxed">
                  {truck.description}
                </p>

                <div className="space-y-2 border-t border-surface-container-high/60 pt-4 text-xs font-label-mono text-on-surface-variant">
                  <div className="flex justify-between py-1 border-b border-surface-container-high/40">
                    <span>Rated Payload:</span>
                    <span className="text-secondary font-bold">{truck.payload}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-surface-container-high/40">
                    <span>Bed Length:</span>
                    <span className="text-on-surface font-semibold">{truck.dimensions}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-surface-container-high/40">
                    <span>Access/Format:</span>
                    <span className="text-on-surface font-semibold">{truck.clearance}</span>
                  </div>
                  <div className="py-1">
                    <span className="block text-outline-variant mb-1">Recommended for:</span>
                    <span className="text-on-surface font-medium">{truck.useCases}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-surface-container-high flex items-center justify-between">
                <Link
                  href={truck.slug}
                  className="text-secondary font-label-lg font-bold hover:underline inline-flex items-center gap-1.5 text-sm"
                >
                  <span>{truck.linkText}</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
                <Link
                  href="/request-quote"
                  className="px-3.5 py-2 rounded-lg bg-secondary text-on-secondary text-xs font-bold hover:bg-secondary-fixed transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links to Services & Guides */}
      <section className="py-16 bg-surface-container/40 border-y border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-headline-md text-xl font-bold text-on-surface mb-4">
                Services Supported by Our Fleet
              </h3>
              <p className="text-sm text-on-surface-variant mb-6">
                All vehicles can be booked for single trips or long-term commercial contracts:
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/services/pickup-truck-rental" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high flex items-center justify-between">
                  <span className="font-semibold text-on-surface">Pickup Truck Rental</span>
                  <span className="text-xs text-secondary font-label-mono">View Service →</span>
                </Link>
                <Link href="/services/goods-transportation" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high flex items-center justify-between">
                  <span className="font-semibold text-on-surface">Goods Transportation</span>
                  <span className="text-xs text-secondary font-label-mono">View Service →</span>
                </Link>
                <Link href="/services/furniture-transportation" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high flex items-center justify-between">
                  <span className="font-semibold text-on-surface">Furniture Transportation</span>
                  <span className="text-xs text-secondary font-label-mono">View Service →</span>
                </Link>
                <Link href="/services/commercial-transportation" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high flex items-center justify-between">
                  <span className="font-semibold text-on-surface">Commercial B2B Transportation</span>
                  <span className="text-xs text-secondary font-label-mono">View Service →</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-headline-md text-xl font-bold text-on-surface mb-4">
                Vehicle Sizing Guides & Advice
              </h3>
              <p className="text-sm text-on-surface-variant mb-6">
                Consult our logistics guides to prevent selecting an undersized or oversized vehicle:
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/resources/1-ton-vs-3-ton-pickup" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
                  <span className="font-bold text-on-surface block text-sm">1 Ton vs 3 Ton Pickup: Which Should You Choose?</span>
                  <span className="text-xs text-on-surface-variant">Detailed comparison of bed volume, pallet load, and cost differences.</span>
                </Link>
                <Link href="/resources/what-size-pickup-for-moving" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
                  <span className="font-bold text-on-surface block text-sm">What Pickup Size for Moving Furniture?</span>
                  <span className="text-xs text-on-surface-variant">Matching room contents to 1-ton and 3-ton capacity.</span>
                </Link>
                <Link href="/resources/pickup-truck-rental-guide-uae" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
                  <span className="font-bold text-on-surface block text-sm">UAE Pickup Rental Comprehensive Guide</span>
                  <span className="text-xs text-on-surface-variant">RTA regulations, Salik tolls, and loading advice.</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Need Advice on the Right Truck Size for Your Cargo?"
        subtitle="Speak directly with our UAE logistics coordinators at 055 577 5074 or request an instant quote online."
        whatsAppMessage="Hello, I need advice on choosing the right pickup truck size."
      />

      <FaqSection items={fleetHubFaqs} />
    </div>
  );
}
