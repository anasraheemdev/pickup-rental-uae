import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Commercial Transport UAE | Dedicated B2B Fleet & Distribution",
  description:
    "Reliable commercial road transport solutions for UAE enterprises. Dedicated monthly pickup retainers, B2B retail distribution, industrial freight, and professional licensed drivers with SLA backing.",
  path: "/services/commercial-transportation",
  keywords: [
    "commercial transport UAE",
    "B2B truck delivery Dubai",
    "industrial cargo transport UAE",
    "business pickup service",
    "dedicated pickup driver UAE",
    "fleet outsourcing UAE"
  ]
});

const commercialFaqs = [
  {
    question: "How do monthly corporate retainers work?",
    answer:
      "Our monthly retainers allocate dedicated commercial pickup trucks (1-Ton, 3-Ton, or 7-Ton) and professionally licensed drivers exclusively to your business. We cover vehicle maintenance, insurance, licensing, and replacement coverage in the event of routine servicing."
  },
  {
    question: "Can our company brand or logo be placed on the vehicles for long-term contracts?",
    answer:
      "Yes. For long-term enterprise retainers (6 months or longer), vehicle branding can be coordinated in compliance with UAE municipal and RTA commercial vehicle advertising permits."
  },
  {
    question: "Do drivers possess RTA commercial transport credentials and safety equipment?",
    answer:
      "Yes. All commercial drivers carry verified UAE commercial licenses, Emirates IDs, and PPE (high-visibility vests, steel-toe safety footwear, hard hats) necessary for entry into construction sites, industrial yards, and ports."
  },
  {
    question: "Can you provide digital invoicing with UAE VAT compliance?",
    answer:
      "Yes. All corporate accounts receive itemized tax invoices with full FTA VAT documentation, trip logs, and monthly delivery manifests."
  }
];

export default function CommercialTransportationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial Transportation",
    name: "Commercial Transportation UAE",
    description: "Enterprise road transport, dedicated fleet retainers, and B2B distribution across the United Arab Emirates.",
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
      <Breadcrumbs items={[{ name: "Services", item: "/services" }, { name: "Commercial Transportation", item: "/services/commercial-transportation" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>B2B Logistics &amp; Fleet Retainers • UAE Enterprise</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
                Commercial Transport &amp; B2B Fleet Solutions in the UAE
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
                Eliminate the capital cost and operational burden of managing your own delivery trucks. We supply dedicated commercial pickups, professional drivers, and scheduled route logistics backed by strict service level agreements.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
                >
                  Inquire About Corporate Retainers
                </Link>
                <Link
                  href="/fleet"
                  className="px-8 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
                >
                  Explore Commercial Fleet →
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden border border-surface-container-high shadow-2xl">
                <Image
                  src="/images/services/commercial-transportation.webp"
                  alt="Commercial pickup trucks servicing UAE business district and enterprise logistics center"
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

      {/* Retainer Tiers Section */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">
            Enterprise Framework
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-2">
            Flexible Fleet Retainer Models
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Choose between dedicated continuous vehicle allocation or on-demand commercial account billing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <div className="p-8 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col justify-between">
            <div>
              <span className="text-xs font-label-mono text-secondary uppercase font-semibold">Scheduled Routes</span>
              <h3 className="font-headline-md text-xl font-bold text-on-surface mt-2">Route Block Hires</h3>
              <p className="text-sm text-on-surface-variant mt-3">Book pre-set weekly delivery days for recurring warehouse replenishment or store transfers without long-term capital lock-in.</p>
              <ul className="mt-6 space-y-3 text-xs text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Guaranteed vehicle availability on booked days</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Standard multi-stop routing supported</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Weekly consolidated billing statements</li>
              </ul>
            </div>
            <Link href="/request-quote" className="mt-8 w-full py-3 rounded-lg bg-surface-container-high text-on-surface text-center font-semibold text-sm hover:bg-surface-variant transition-colors block">
              Inquire for Route Blocks
            </Link>
          </div>

          {/* Tier 2 */}
          <div className="p-8 rounded-2xl bg-surface-container border border-secondary/40 flex flex-col justify-between shadow-xl relative">
            <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-secondary text-on-secondary text-xs font-bold font-label-mono">Enterprise Standard</span>
            <div>
              <span className="text-xs font-label-mono text-secondary uppercase font-semibold">Dedicated Allocation</span>
              <h3 className="font-headline-md text-xl font-bold text-on-surface mt-2">Monthly Fleet Retainer</h3>
              <p className="text-sm text-on-surface-variant mt-3">Dedicated pickup truck and professional driver permanently assigned to your operations. Full operational outsourcing with zero vehicle depreciation risk.</p>
              <ul className="mt-6 space-y-3 text-xs text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Driver reporting directly to your facility daily</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Full fuel, maintenance, and insurance inclusive</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Guaranteed replacement vehicle during maintenance</li>
              </ul>
            </div>
            <Link href="/request-quote" className="mt-8 w-full py-3 rounded-lg bg-secondary text-on-secondary text-center font-bold text-sm hover:bg-secondary-fixed transition-colors block">
              Inquire for Monthly Retainer
            </Link>
          </div>

          {/* Tier 3 */}
          <div className="p-8 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col justify-between">
            <div>
              <span className="text-xs font-label-mono text-secondary uppercase font-semibold">Multi-Vehicle Contracts</span>
              <h3 className="font-headline-md text-xl font-bold text-on-surface mt-2">Custom Fleet Solutions</h3>
              <p className="text-sm text-on-surface-variant mt-3">Tailored multi-truck deployments for large distributor operations, industrial manufacturers, and high-frequency retail networks.</p>
              <ul className="mt-6 space-y-3 text-xs text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Mixed fleet: 1-Ton, 3-Ton, and 7-Ton carriers</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Dedicated logistics account manager</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-base">check</span> Custom SLA terms and priority dispatch</li>
              </ul>
            </div>
            <Link href="/contact" className="mt-8 w-full py-3 rounded-lg bg-surface-container-high text-on-surface text-center font-semibold text-sm hover:bg-surface-variant transition-colors block">
              Contact Enterprise Desk
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links to Relevant Pages */}
      <section className="py-16 bg-surface-container/40 border-y border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-6">
            Explore Commercial Logistics Options
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link href="/services/goods-transportation" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
              <h3 className="font-label-lg font-bold text-on-surface mb-2">Goods Transportation</h3>
              <p className="text-sm text-on-surface-variant">Palletized cargo and warehouse-to-door distribution across the Emirates.</p>
            </Link>
            <Link href="/fleet/3-ton-pickup" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
              <h3 className="font-label-lg font-bold text-on-surface mb-2">3 Ton Commercial Workhorse</h3>
              <p className="text-sm text-on-surface-variant">Review payload ratings, box dimensions, and pallet capacities.</p>
            </Link>
            <Link href="/locations/abu-dhabi" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
              <h3 className="font-label-lg font-bold text-on-surface mb-2">Abu Dhabi Industrial Logistics</h3>
              <p className="text-sm text-on-surface-variant">Dedicated transport serving Mussafah, ICAD, and Khalifa Industrial Zone.</p>
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        title="Transform Your Commercial Transportation Operations"
        subtitle="Speak directly with our B2B logistics coordinators for tailored corporate pricing and dedicated fleet deployment."
        whatsAppMessage="Hello, I would like to discuss a commercial fleet retainer for our business."
      />

      <FaqSection items={commercialFaqs} />
    </div>
  );
}
