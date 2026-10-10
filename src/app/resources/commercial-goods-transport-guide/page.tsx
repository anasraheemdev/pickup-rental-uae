import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Commercial Goods Transport Guide UAE: Free Zones, Malls & B2B Logistics | Pickup & Rental",
  description:
    "B2B guide to commercial road freight in the UAE. Detailed protocols for JAFZA and KEZAD free zone gate passes, retail shopping mall delivery hours, pallet loading standards, and required transport documentation.",
  path: "/resources/commercial-goods-transport-guide",
  keywords: [
    "commercial goods transport guide UAE",
    "JAFZA truck gate pass procedure",
    "Dubai mall delivery window logistics",
    "pallet transport regulations UAE",
    "B2B road freight Dubai Abu Dhabi",
    "commercial delivery note requirements UAE"
  ]
});

const commercialFaqs = [
  {
    question: "What documents are required for commercial deliveries inside UAE Free Zones?",
    answer:
      "Delivering commercial cargo into free zones like JAFZA, DAFZA, or KEZAD requires a valid Delivery Note (DN) with recipient stamp, Commercial Invoice, Driver Emirates ID, Vehicle Mulkiya (registration card), and an approved digital Gate Pass (or DP World E-Token QR code)."
  },
  {
    question: "What are the standard delivery windows for major Dubai shopping malls?",
    answer:
      "Most major retail centers (such as The Dubai Mall, Mall of the Emirates, and Dubai Hills Mall) restrict loading dock deliveries to night-time or early morning hours—typically 00:00 to 09:00—to prevent congestion during trading hours."
  },
  {
    question: "Can commercial pickup trucks transport bonded cargo between ports?",
    answer:
      "Standard commercial trucks can transport cleared and duty-paid goods. For bonded customs transfers, vehicles must hold specific customs sealing permits and transport licenses."
  },
  {
    question: "How should pallets be secured for highway transport across the UAE?",
    answer:
      "Pallets must be securely shrink-wrapped with heavy gauge industrial stretch film, strapped with ratchet straps to vehicle anchor rings, and weight-distributed evenly across axles to comply with federal highway transport regulations."
  }
];

export default function CommercialGoodsTransportGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Commercial Goods Transport Guide UAE: Free Zones, Malls, and B2B Road Freight",
    description: "Comprehensive B2B guide for logistics directors, procurement managers, and retailers transporting cargo across Dubai, Abu Dhabi, and UAE free zones.",
    url: `${SITE_URL}/resources/commercial-goods-transport-guide`,
    datePublished: "2025-02-05T08:00:00+04:00",
    dateModified: "2026-02-10T10:00:00+04:00",
    author: {
      "@type": "Organization",
      name: "Pickup & Rental B2B Logistics Desk",
      url: SITE_URL
    },
    publisher: {
      "@type": "Organization",
      name: "Pickup & Rental",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/resources/commercial-goods-transport-guide`
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={articleSchema} />
      <Breadcrumbs
        items={[
          { name: "Resources", item: "/resources" },
          { name: "Commercial Goods Transport Guide", item: "/resources/commercial-goods-transport-guide" }
        ]}
      />

      <article className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>B2B Operational Protocol • UAE Commercial Freight</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
              Commercial Goods Transport Guide for UAE Businesses
            </h1>
            <p className="font-body-lead text-body-lead text-on-surface-variant mb-6 leading-relaxed">
              Navigating free zone gate passes, retail mall loading bays, and inter-emirate pallet distribution requires strict adherence to UAE commercial road transport protocols. This manual outlines operational standards for seamless business logistics.
            </p>
            <div className="flex items-center gap-4 text-xs font-label-mono text-outline pb-6 border-b border-surface-container-high/60">
              <span>Published by Enterprise Logistics Desk</span>
              <span>•</span>
              <span>Reading time: 7 minutes</span>
              <span>•</span>
              <span className="text-secondary font-semibold">B2B Compliance Aligned</span>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            {/* Featured Article Image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-surface-container-high shadow-xl">
              <Image
                src="/images/blog/blog-commercial-goods.webp"
                alt="Packaged commercial goods and palletized cargo in UAE logistics warehouse environment"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            {/* Section 1: Free Zone Gate Protocols */}
            <div className="space-y-4">
              <h2 className="font-headline-lg text-2xl font-bold text-on-surface">
                1. Free Zone Gate Passes (JAFZA, KEZAD, DAFZA)
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Transporting commercial goods into major UAE free zones requires pre-clearance to prevent vehicle holding at security checkpoints. In Jebel Ali Free Zone (JAFZA), trucks entering through DP World security gates must have an electronic gate pass linked to an active container or warehouse delivery note.
              </p>
              <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-3">
                <h3 className="font-headline-sm text-base font-bold text-on-surface">Required Entry Credentials:</h3>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                    <span><strong>Driver & Vehicle Documentation:</strong> Valid Emirates ID, commercial driving license, and up-to-date Mulkiya registration card.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                    <span><strong>Customs Delivery Advice (CDA) or DN:</strong> Triplicate delivery notes stamped by the originating warehouse entity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                    <span><strong>Safety PPE:</strong> High-visibility reflective vest and steel-toe safety footwear for warehouse yards.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2: Retail Mall Logistics */}
            <div className="space-y-4">
              <h2 className="font-headline-lg text-2xl font-bold text-on-surface">
                2. Shopping Mall Dock Clearances & Night Delivery Windows
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Supplying retail stores in major commercial shopping centers across Dubai and Abu Dhabi involves tight scheduling. Most shopping malls restrict loading dock access during consumer hours.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                  <h4 className="font-bold text-on-surface text-sm mb-2">Delivery Time Windows</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Standard mall delivery shifts operate between 23:00 and 08:30. Ensure your driver is booked for nighttime transit to meet mall loading bay slots.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                  <h4 className="font-bold text-on-surface text-sm mb-2">Vehicle Height Restrictions</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Some mall underground service docks only admit vehicles under 2.8m. Confirm whether an open 1-ton or medium 3-ton box truck is required.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Pallet Standards */}
            <div className="space-y-4">
              <h2 className="font-headline-lg text-2xl font-bold text-on-surface">
                3. Pallet Capacities & Ratchet Strapping Standards
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                In UAE commercial transport, standard ISO pallets (1200 mm x 1000 mm) and Euro pallets (1200 mm x 800 mm) must be loaded according to axle weight distribution standards:
              </p>
              <ul className="space-y-2 text-sm text-on-surface-variant list-disc pl-5">
                <li><strong>1-Ton Pickup:</strong> Accommodates 1 to 2 standard pallets up to 1,000 kg.</li>
                <li><strong>3-Ton Closed Truck:</strong> Accommodates 4 to 6 standard pallets up to 3,000 kg.</li>
                <li><strong>7-Ton Truck:</strong> Accommodates 8 to 12 standard pallets up to 7,000 kg.</li>
              </ul>
            </div>

            {/* Strategic Internal Links */}
            <div className="pt-6 border-t border-surface-container-high space-y-4">
              <h2 className="font-headline-md text-xl font-bold text-on-surface">
                Related Commercial Freight Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/services/commercial-transportation"
                  className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high/60 block"
                >
                  <span className="text-xs font-label-mono text-secondary uppercase font-semibold">B2B Retainers</span>
                  <h3 className="font-headline-sm text-base font-bold text-on-surface mt-1">Commercial Transportation & Fleet Retainers</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Dedicated business routes, scheduled warehouse shuttles, and monthly agreements.</p>
                </Link>
                <Link
                  href="/services/goods-transportation"
                  className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high/60 block"
                >
                  <span className="text-xs font-label-mono text-secondary uppercase font-semibold">On-Demand Cargo</span>
                  <h3 className="font-headline-sm text-base font-bold text-on-surface mt-1">Goods Transportation Services</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Express point-to-point road delivery for palletized commercial freight.</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 sticky top-28 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-2xl space-y-6">
            <span className="text-xs font-label-mono uppercase font-bold text-secondary tracking-wider block">
              B2B Fleet Accounts
            </span>
            <h3 className="font-headline-md text-xl font-bold text-on-surface">
              Need Dedicated Commercial Freight?
            </h3>
            <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
              We provide scheduled warehouse shuttles, mall distribution runs, and recurring corporate retainers with itemized VAT invoicing.
            </p>
            <div className="space-y-3 pt-2">
              <Link
                href="/request-quote"
                className="w-full py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold text-center block shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-colors"
              >
                Request Commercial B2B Rate
              </Link>
              <a
                href="https://wa.me/971555775074?text=Hello%2C%20our%20company%20needs%20commercial%20goods%20transportation%20in%20the%20UAE."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-semibold text-center block text-sm transition-colors border border-outline-variant/30"
              >
                Contact B2B Logistics Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Streamline Your UAE Commercial Goods Transport"
        subtitle="Licensed drivers, free zone gate clearance protocols, and punctual delivery windows."
        whatsAppMessage="Hello, I would like to book commercial goods transport in the UAE."
      />

      <FaqSection items={commercialFaqs} />
    </div>
  );
}
