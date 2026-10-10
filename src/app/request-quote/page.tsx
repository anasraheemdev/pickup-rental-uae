import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import RequestQuoteCalculator from "./RequestQuoteCalculator";

export const metadata = constructMetadata({
  title: "Request a Pickup Truck Quote UAE | Instant Dispatch Configurator | Pickup & Rental",
  description:
    "Configure your transport trip in seconds. Request an instant quote for 1-ton, 3-ton, and 7-ton commercial pickups across Dubai, Sharjah, and Ajman. Guaranteed fixed quotes with driver, Salik tolls, and helper assistance.",
  path: "/request-quote",
  keywords: [
    "pickup truck quote UAE",
    "pickup rental Dubai quote",
    "pickup rental Sharjah quote",
    "pickup rental Ajman quote",
    "book pickup truck Dubai",
    "commercial transport quote UAE",
    "hire truck with driver UAE",
    "pickup truck dispatch UAE"
  ]
});

const quoteFaqs = [
  {
    question: "How do I receive my guaranteed price quotation?",
    answer:
      "When you submit your trip details or send them via WhatsApp, our central dispatch coordinator evaluates your exact route, cargo type, and elevator access to provide an all-inclusive, 100% upfront fixed quote. We do not use misleading computer estimates—your quote is guaranteed with zero surprises."
  },
  {
    question: "Are Salik tolls and commercial fuel included in the quote?",
    answer:
      "Yes. All quotes provided by our dispatch team are completely inclusive of commercial fuel, standard RTA Salik toll gates, and licensed commercial driver assistance."
  },
  {
    question: "How quickly will a driver be dispatched after quote confirmation?",
    answer:
      "For express requests within Dubai, Sharjah, or Ajman, a licensed commercial driver and truck are mobilized within 45 minutes of quote confirmation. You will receive an immediate call and WhatsApp message with driver credentials and truck plate number."
  },
  {
    question: "Can I pay in cash upon completion or by corporate invoice?",
    answer:
      "Yes. We support cash payment upon delivery, credit card on completion, and formal corporate billing with itemized 5% VAT tax invoices for registered business clients."
  }
];

export default function RequestQuotePage() {
  const quotePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Request a Pickup Truck Quote & Dispatch Configurator",
    description: "Trip configurator and dispatch quote intake for 1-ton, 3-ton, and 7-ton commercial pickups across Dubai, Sharjah, and Ajman.",
    url: `${SITE_URL}/request-quote`,
    mainEntity: {
      "@type": "Service",
      name: "UAE Road Transport & Pickup Rental Dispatch",
      provider: {
        "@type": "LocalBusiness",
        name: "Pickup & Rental",
        telephone: "+971555775074",
        url: SITE_URL
      },
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "City", name: "Sharjah" },
        { "@type": "City", name: "Ajman" }
      ]
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={quotePageSchema} />
      <Breadcrumbs items={[{ name: "Request a Quote", item: "/request-quote" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-12 lg:py-16 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>Direct Dispatch Inquiry • Dubai • Sharjah • Ajman</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-4">
              Request a Pickup Truck Quote &amp; Dispatch Configurator
            </h1>
            <p className="font-body-lead text-body-lead text-on-surface-variant leading-relaxed">
              Configure your transit route, vehicle tonnage, and crew requirements. Our central dispatch team provides a guaranteed upfront fixed quote with zero surprise surcharges.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Calculator Client Component */}
      <RequestQuoteCalculator />

      {/* Fleet Sizing Quick Reference */}
      <section className="py-16 bg-surface-container/30 border-y border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">
              Vehicle Capacity Guide
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
              Select the Right Vehicle for Your Load
            </h2>
            <p className="font-body-md text-sm text-on-surface-variant mt-2">
              Unsure which truck to choose? Review our verified payload and cargo volume guidelines:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-surface-container border border-surface-container-high overflow-hidden group">
              <div className="relative h-40 w-full overflow-hidden bg-surface-container-lowest">
                <Image
                  src="/images/fleet/1-ton-pickup.webp"
                  alt="1-Ton pickup truck in UAE"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-label-mono text-secondary uppercase font-bold">1-Ton Pickup</span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1">Urban Express</h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Best for studios, single appliances, sofas, and residential parking basements with 2.1m clearance.
                </p>
                <Link href="/fleet/1-ton-pickup" className="text-xs text-secondary font-bold hover:underline block mt-4">
                  Explore 1-Ton Fleet →
                </Link>
              </div>
            </div>

            <div className="rounded-xl bg-surface-container border border-surface-container-high overflow-hidden group">
              <div className="relative h-40 w-full overflow-hidden bg-surface-container-lowest">
                <Image
                  src="/images/fleet/3-ton-pickup.webp"
                  alt="3-Ton commercial truck in UAE"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-label-mono text-secondary uppercase font-bold">3-Ton Truck</span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1">Standard Commercial</h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Best for 1–2 bedroom apartments, palletized commercial goods (up to 6 pallets), and office equipment.
                </p>
                <Link href="/fleet/3-ton-pickup" className="text-xs text-secondary font-bold hover:underline block mt-4">
                  Explore 3-Ton Fleet →
                </Link>
              </div>
            </div>

            <div className="rounded-xl bg-surface-container border border-surface-container-high overflow-hidden group">
              <div className="relative h-40 w-full overflow-hidden bg-surface-container-lowest">
                <Image
                  src="/images/fleet/7-ton-pickup.webp"
                  alt="7-Ton heavy carrier truck in UAE"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-label-mono text-secondary uppercase font-bold">7-Ton Carrier</span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1">Heavy Freight</h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Best for heavy industrial machinery, construction materials, large retail fit-outs, and bulk logistics.
                </p>
                <Link href="/fleet/7-ton-pickup" className="text-xs text-secondary font-bold hover:underline block mt-4">
                  Explore 7-Ton Fleet →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking FAQs */}
      <FaqSection items={quoteFaqs} />
    </div>
  );
}
