import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Pickup Truck Rental Guide UAE: RTA Rules, Pricing & Booking | Pickup & Rental",
  description:
    "The ultimate guide to hiring a pickup truck in the United Arab Emirates. Understand RTA commercial vehicle laws, pricing structures, highway toll policies (Salik/Darb), driver inclusions, and how to avoid unexpected fines.",
  path: "/resources/pickup-truck-rental-guide-uae",
  keywords: [
    "pickup truck rental guide UAE",
    "how pickup rental works Dubai",
    "RTA commercial truck regulations",
    "pickup hire cost UAE",
    "truck rental with driver Dubai",
    "Salik and Darb tolls truck transport"
  ]
});

const guideFaqs = [
  {
    question: "Do pickup rentals in the UAE come with a licensed driver?",
    answer:
      "Yes. Commercial road transportation in the UAE typically operates with an experienced, professional commercial driver licensed under UAE RTA / ITC transport regulations. This ensures full insurance compliance, proper route navigation, and adherence to truck lane restrictions."
  },
  {
    question: "How is pricing calculated for pickup truck rental in Dubai?",
    answer:
      "Pricing is calculated transparently based on vehicle size (1-ton, 3-ton, or 7-ton), distance between pickup and drop-off points, required loading/unloading time, optional helper assistance, and applicable highway tolls (Salik in Dubai and Darb in Abu Dhabi)."
  },
  {
    question: "What items cannot be transported in a standard commercial pickup?",
    answer:
      "Regulated hazardous materials (hazmat), flammables without civil defense permits, unbonded contraband, and live livestock cannot be carried on standard commercial cargo pickups under UAE federal transport legislation."
  },
  {
    question: "What is the typical advance booking notice required?",
    answer:
      "While express on-demand bookings can often be dispatched within 45 to 60 minutes across central Dubai and Sharjah, booking 24 hours in advance is recommended to guarantee your preferred time slot and service elevator window."
  }
];

export default function PickupRentalGuideUaePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Pickup Truck Rental Guide for UAE Customers: Regulations, Fares, and Practical Protocols",
    description: "Comprehensive consumer and corporate handbook explaining how commercial pickup truck rental operates across Dubai, Abu Dhabi, and the Northern Emirates.",
    url: `${SITE_URL}/resources/pickup-truck-rental-guide-uae`,
    datePublished: "2025-01-20T08:00:00+04:00",
    dateModified: "2026-02-10T10:00:00+04:00",
    author: {
      "@type": "Organization",
      name: "Pickup & Rental Logistics Desk",
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
      "@id": `${SITE_URL}/resources/pickup-truck-rental-guide-uae`
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={articleSchema} />
      <Breadcrumbs
        items={[
          { name: "Resources", item: "/resources" },
          { name: "UAE Pickup Rental Guide", item: "/resources/pickup-truck-rental-guide-uae" }
        ]}
      />

      <article className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>Consumer & Corporate Handbook • UAE Transportation</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
              Pickup Truck Rental Guide for UAE Customers
            </h1>
            <p className="font-body-lead text-body-lead text-on-surface-variant mb-6 leading-relaxed">
              Everything you need to know about renting a pickup truck in the United Arab Emirates. From understanding RTA commercial regulations and toll systems to choosing the right vehicle tonnage and booking with complete price transparency.
            </p>
            <div className="flex items-center gap-4 text-xs font-label-mono text-outline pb-6 border-b border-surface-container-high/60">
              <span>Published by Operations Command</span>
              <span>•</span>
              <span>Reading time: 8 minutes</span>
              <span>•</span>
              <span className="text-secondary font-semibold">Federal UAE Logistics Aligned</span>
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
                src="/images/blog/blog-pickup-rental-guide.webp"
                alt="Commercial pickup truck on UAE highway providing professional road transportation services"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            {/* Section 1: Rental Models */}
            <div className="space-y-4">
              <h2 className="font-headline-lg text-2xl font-bold text-on-surface">
                1. How Pickup Truck Hire Operates in the UAE
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Commercial road freight in the United Arab Emirates differs significantly from passenger car rentals. Due to strict RTA (Roads and Transport Authority) and ITC (Integrated Transport Centre) road compliance laws, commercial cargo trucks are supplied with certified, professional commercial drivers.
              </p>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Renting with a licensed driver eliminates personal liability regarding commercial weighbridge checks, peak-hour truck lane restrictions, and parking citations. You simply specify the pickup address, destination, cargo type, and whether helper assistance is needed for loading.
              </p>
            </div>

            {/* Section 2: Fleet Types */}
            <div className="space-y-4">
              <h2 className="font-headline-lg text-2xl font-bold text-on-surface">
                2. Selecting the Right Vehicle Category
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-label-mono text-secondary uppercase font-semibold">Urban Agile</span>
                    <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1">1-Ton Pickup</h3>
                    <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                      Ideal for single furniture pieces, appliances, carton deliveries, and tight basement parking with 2.1m height barriers.
                    </p>
                  </div>
                  <Link href="/fleet/1-ton-pickup" className="text-xs font-bold text-secondary mt-4 hover:underline">
                    View 1-Ton Specs →
                  </Link>
                </div>

                <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-label-mono text-secondary uppercase font-semibold">Standard Commercial</span>
                    <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1">3-Ton Truck</h3>
                    <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                      The industry standard for 1–2 bedroom apartments, palletized warehouse distribution, and commercial retail stock.
                    </p>
                  </div>
                  <Link href="/fleet/3-ton-pickup" className="text-xs font-bold text-secondary mt-4 hover:underline">
                    View 3-Ton Specs →
                  </Link>
                </div>

                <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-label-mono text-secondary uppercase font-semibold">Heavy Duty</span>
                    <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1">7-Ton Truck</h3>
                    <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                      Designed for heavy industrial machinery, construction materials, exhibition structures, and bulk commercial freight.
                    </p>
                  </div>
                  <Link href="/fleet/7-ton-pickup" className="text-xs font-bold text-secondary mt-4 hover:underline">
                    View 7-Ton Specs →
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 3: Highway Tolls & Regulations */}
            <div className="space-y-4">
              <h2 className="font-headline-lg text-2xl font-bold text-on-surface">
                3. Highway Tolls & Inter-Emirate Regulations
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                When moving goods between Emirates, your route may cross electronic toll gates. In Dubai, Salik toll gates apply along Sheikh Zayed Road (E11), Al Maktoum Bridge, and Airport Tunnel. In Abu Dhabi, Darb toll gates operate during peak hours (07:00–09:00 and 17:00–19:00).
              </p>
              <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high">
                <h4 className="font-bold text-on-surface text-sm mb-2">Truck Curfews & Lane Discipline</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Heavy commercial vehicles (exceeding 2.5 tons tare) are subject to peak-hour driving restrictions on central arterial roads like Sheikh Zayed Road in Dubai. Professional drivers will navigate alternative corridors such as Emirates Road (E611) or Sheikh Mohammed Bin Zayed Road (E311) to avoid delays and regulatory penalties.
                </p>
              </div>
            </div>

            {/* Strategic Links */}
            <div className="pt-6 border-t border-surface-container-high space-y-4">
              <h2 className="font-headline-md text-xl font-bold text-on-surface">
                Related Transportation Guides & Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/resources/1-ton-vs-3-ton-pickup"
                  className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high/60 block"
                >
                  <span className="text-xs font-label-mono text-secondary uppercase font-semibold">Sizing Guide</span>
                  <h3 className="font-headline-sm text-base font-bold text-on-surface mt-1">1-Ton vs 3-Ton Truck Comparison</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Detailed breakdown of payloads, volumes, and height limits.</p>
                </Link>
                <Link
                  href="/services/goods-transportation"
                  className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high/60 block"
                >
                  <span className="text-xs font-label-mono text-secondary uppercase font-semibold">Commercial Freight</span>
                  <h3 className="font-headline-sm text-base font-bold text-on-surface mt-1">Goods Transportation Services</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Palletized cargo, retail distribution, and warehouse dispatch.</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 sticky top-28 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-2xl space-y-6">
            <span className="text-xs font-label-mono uppercase font-bold text-secondary tracking-wider block">
              Book with Confidence
            </span>
            <h3 className="font-headline-md text-xl font-bold text-on-surface">
              Get an Upfront Fare Estimate
            </h3>
            <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
              No hidden toll fees or surprise extras. Calculate your exact road transport fare in seconds with verified vehicle capacity.
            </p>
            <div className="space-y-3 pt-2">
              <Link
                href="/request-quote"
                className="w-full py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold text-center block shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-colors"
              >
                Instant Fare Calculator
              </Link>
              <a
                href="https://wa.me/971555775074?text=Hello%2C%20I%20have%20a%20question%20about%20pickup%20truck%20rental%20in%20the%20UAE."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-semibold text-center block text-sm transition-colors border border-outline-variant/30"
              >
                Speak with Dispatch on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Need a Licensed Commercial Pickup in the UAE?"
        subtitle="Prompt dispatch, courteous licensed drivers, and reliable inter-emirate transportation."
        whatsAppMessage="Hello, I would like to book a pickup truck in the UAE."
      />

      <FaqSection items={guideFaqs} />
    </div>
  );
}
