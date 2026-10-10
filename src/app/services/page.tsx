import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Road Transportation & Pickup Services UAE | Pickup & Rental",
  description:
    "Comprehensive road transportation services across all 7 UAE Emirates. Professional pickup truck rental, commercial goods freight, furniture delivery, and dedicated business fleet retainers.",
  path: "/services",
  keywords: [
    "UAE road transportation services",
    "pickup transport services UAE",
    "commercial truck transport UAE",
    "furniture transport Dubai",
    "cargo delivery pickup"
  ]
});

const serviceHubFaqs = [
  {
    question: "What road transportation services do you offer in the UAE?",
    answer:
      "We specialize strictly in commercial and residential road transport utilizing verified pickup trucks and freight carriers. Our core services include point-to-point pickup truck rental, commercial goods and pallet transport, furniture and home appliance relocation, and dedicated B2B fleet retainers."
  },
  {
    question: "Which Emirates do your services cover?",
    answer:
      "We focus our commercial transport network on Dubai, Sharjah, and Ajman, providing rapid same-day dispatches and scheduled inter-emirate transit runs across these three Emirates."
  },
  {
    question: "Are your drivers trained and certified for UAE roads?",
    answer:
      "All drivers hold valid commercial UAE driving licenses, carry required safety equipment (PPE), and are familiar with UAE road network regulations, RTA goods transport rules, and loading bay protocols."
  },
  {
    question: "How do I request a quote for transport services?",
    answer:
      "You can calculate instant trip fares using our online quote calculator, reach our 24/7 central dispatch desk via telephone at 055 577 5074, or connect with us directly on WhatsApp."
  }
];

export default function ServicesPage() {
  const hubSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "UAE Road Transportation Services Hub",
    description: "Overview of commercial and residential pickup truck transport services across the United Arab Emirates.",
    url: `${SITE_URL}/services`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Pickup Truck Rental",
          url: `${SITE_URL}/services/pickup-truck-rental`
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Goods Transportation",
          url: `${SITE_URL}/services/goods-transportation`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Furniture Transportation",
          url: `${SITE_URL}/services/furniture-transportation`
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Commercial Transportation",
          url: `${SITE_URL}/services/commercial-transportation`
        }
      ]
    }
  };

  const servicesList = [
    {
      title: "Pickup Truck Rental",
      slug: "/services/pickup-truck-rental",
      badge: "Core Transport",
      image: "/images/services/pickup-truck-rental.webp",
      description: "On-demand and scheduled pickup truck rental with professional drivers. Flexible point-to-point trips or full-day hires across Dubai and all 7 Emirates.",
      icon: "local_shipping",
      specs: ["1-Ton, 3-Ton, and 7-Ton options", "Single trips & day blocks", "Urban & inter-emirate routes"]
    },
    {
      title: "Goods Transportation",
      slug: "/services/goods-transportation",
      badge: "Commercial Cargo",
      image: "/images/services/goods-transportation.webp",
      description: "Secure road transit for commercial inventory, palletized stock, building materials, and wholesale cargo with heavy-duty load securing and weatherproof box options.",
      icon: "inventory_2",
      specs: ["Pallet & box configurations", "Warehouse-to-store distribution", "RTA highway weight compliant"]
    },
    {
      title: "Furniture Transportation",
      slug: "/services/furniture-transportation",
      badge: "Careful Handling",
      image: "/images/services/furniture-transportation.webp",
      description: "Dependable transport for residential furniture, retail showroom deliveries, and office desks. Padded transit blankets, tie-down straps, and helper crew options.",
      icon: "chair",
      specs: ["Single items or complete suites", "Optional loading helpers", "Basement height clearance friendly"]
    },
    {
      title: "Commercial Transportation",
      slug: "/services/commercial-transportation",
      badge: "B2B Solutions",
      image: "/images/services/commercial-transportation.webp",
      description: "Dedicated monthly fleet retainers, multi-vehicle logistics outsourcing, and recurring distribution contracts for UAE businesses and distributors.",
      icon: "business_center",
      specs: ["Dedicated driver leasing", "Full fuel & maintenance inclusive", "SLA guarantees & VAT invoicing"]
    }
  ];

  return (
    <div className="w-full">
      <JsonLd data={hubSchema} />
      <Breadcrumbs items={[{ name: "Services", item: "/services" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>Professional Road Mobility • All 7 Emirates</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
              UAE Road Transportation Services & Commercial Solutions
            </h1>
            <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
              Engineered road transport services tailored for the commercial pace of the UAE. Explore our dedicated service categories below, designed to transport goods safely, legally, and punctually.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/request-quote"
                className="px-6 py-3.5 rounded-xl bg-secondary text-on-secondary font-label-lg text-sm font-bold shadow-[0_8px_20px_-3px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
              >
                Request a Quote
              </Link>
              <Link
                href="/fleet"
                className="px-6 py-3.5 rounded-xl bg-surface-container text-on-surface font-label-lg text-sm font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
              >
                Explore Fleet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Services Grid (Clean Crisp Light Theme) */}
      <section className="py-16 bg-[#f8fafc] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((svc) => (
              <div
                key={svc.slug}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between shadow-sm group"
              >
                <div>
                  <div className="relative w-full h-52 rounded-xl overflow-hidden mb-6 bg-slate-100">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center text-amber-600">
                      <span className="material-symbols-outlined text-[28px]">{svc.icon}</span>
                    </div>
                    <span className="text-xs font-label-mono uppercase font-bold px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700">
                      {svc.badge}
                    </span>
                  </div>
                  <h2 className="font-headline-md text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    <Link href={svc.slug}>
                      {svc.title}
                    </Link>
                  </h2>
                  <p className="font-body-md text-slate-600 mb-6 leading-relaxed">
                    {svc.description}
                  </p>
                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    {svc.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-label-mono text-slate-700">
                        <span className="material-symbols-outlined text-amber-600 text-[16px]">check</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={svc.slug}
                    className="text-amber-600 font-label-lg font-bold hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Explore Service Details</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                  <Link
                    href="/request-quote"
                    className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links to Locations & Fleet */}
      <section className="py-16 bg-surface-container/40 border-y border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-headline-md text-xl font-bold text-on-surface mb-4">
                Available Vehicle Capacities
              </h3>
              <p className="text-sm text-on-surface-variant mb-6">
                Our services utilize standard commercial vehicle configurations designed for highway reliability and payload safety:
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/fleet/1-ton-pickup" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high flex items-center justify-between">
                  <div>
                    <span className="font-bold text-on-surface block">1 Ton Pickup Truck</span>
                    <span className="text-xs text-on-surface-variant">Best for single furniture items and city drops</span>
                  </div>
                  <span className="material-symbols-outlined text-secondary">arrow_forward</span>
                </Link>
                <Link href="/fleet/3-ton-pickup" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high flex items-center justify-between">
                  <div>
                    <span className="font-bold text-on-surface block">3 Ton Pickup (Box / Open Bed)</span>
                    <span className="text-xs text-on-surface-variant">Workhorse for palletized freight and apartment suites</span>
                  </div>
                  <span className="material-symbols-outlined text-secondary">arrow_forward</span>
                </Link>
                <Link href="/fleet/7-ton-pickup" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high flex items-center justify-between">
                  <div>
                    <span className="font-bold text-on-surface block">7 Ton Heavy Commercial Carrier</span>
                    <span className="text-xs text-on-surface-variant">High-volume industrial transfers and long-distance cargo</span>
                  </div>
                  <span className="material-symbols-outlined text-secondary">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-headline-md text-xl font-bold text-on-surface mb-4">
                Service Areas: Dubai, Sharjah &amp; Ajman
              </h3>
              <p className="text-sm text-on-surface-variant mb-6">
                Our vehicles operate across major transport hubs and arterial corridors throughout Dubai, Sharjah, and Ajman:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Link href="/locations/dubai" className="p-3.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-sm font-semibold text-on-surface border border-surface-container-high">Dubai Metro &amp; Ports →</Link>
                <Link href="/locations/sharjah" className="p-3.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-sm font-semibold text-on-surface border border-surface-container-high">Sharjah Industrial →</Link>
                <Link href="/locations/ajman" className="p-3.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-sm font-semibold text-on-surface border border-surface-container-high">Ajman Logistics Hub →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Schedule Your UAE Road Transport?"
        subtitle="Book point-to-point single trips or establish a dedicated commercial fleet contract. 24/7 central dispatch available."
        whatsAppMessage="Hello, I would like to inquire about road transport services."
      />

      <FaqSection items={serviceHubFaqs} />
    </div>
  );
}
