import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Pickup Truck Rental UAE | 1 Ton, 3 Ton & 7 Ton Transport",
  description:
    "Reliable pickup truck rental across Dubai, Abu Dhabi, and all 7 Emirates. Professional drivers, flexible single trips or full-day hires, and verified road transport for residential and commercial cargo.",
  path: "/services/pickup-truck-rental",
  keywords: [
    "pickup truck rental UAE",
    "rent pickup truck Dubai",
    "pickup for rent Abu Dhabi",
    "1 ton pickup rental",
    "3 ton pickup rental",
    "road freight pickup UAE"
  ]
});

const serviceFaqs = [
  {
    question: "How does pickup truck rental work with Pickup & Rental in the UAE?",
    answer:
      "You select the required vehicle size (1-Ton, 3-Ton, or 7-Ton) based on your cargo, provide your pickup location and destination in the UAE, and choose whether you need a driver only or additional helpers for loading and unloading. We dispatch verified commercial transport to your location within 45 minutes on average."
  },
  {
    question: "Are fuel and Salik toll charges included in the pickup rental rate?",
    answer:
      "Yes. Our point-to-point trip rates and standard hire blocks transparently account for fuel and standard UAE highway transit. Any inter-emirate tolls or specific Salik gate requirements are itemized upfront with no hidden surcharges."
  },
  {
    question: "Can I rent a pickup truck for inter-emirate transportation?",
    answer:
      "Absolutely. We operate regular road transport routes connecting Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain, and Al Ain, facilitating cross-border cargo transit every day."
  },
  {
    question: "What items can be transported in a rented pickup truck?",
    answer:
      "Our pickups transport boxed commercial goods, industrial equipment, construction materials, residential furniture, retail merchandise, and event equipment. Hazardous or prohibited goods under UAE federal transport regulations are strictly excluded."
  }
];

export default function PickupTruckRentalPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Pickup Truck Rental",
    name: "Pickup Truck Rental UAE",
    description: "Point-to-point and dedicated block pickup truck rental across Dubai, Abu Dhabi, and all UAE Emirates.",
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
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pickup Fleet Options",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "1 Ton Pickup Rental" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "3 Ton Pickup Rental" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "7 Ton Carrier Rental" } }
      ]
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[{ name: "Services", item: "/services" }, { name: "Pickup Truck Rental", item: "/services/pickup-truck-rental" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Commercial Road Freight • All 7 Emirates</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
                Pickup Truck Rental Across Dubai &amp; the UAE
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
                Professional, on-demand pickup truck transport with experienced drivers for commercial deliveries, retail merchandise, and residential cargo. Available for immediate dispatch or pre-scheduled route logistics.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
                >
                  Request Instant Quote
                </Link>
                <Link
                  href="/fleet"
                  className="px-8 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
                >
                  View Vehicle Sizes
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden border border-surface-container-high shadow-2xl">
                <Image
                  src="/images/services/pickup-truck-rental.webp"
                  alt="Modern commercial pickup truck for rental in UAE urban business district"
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

      {/* Section: Service Overview & Who It's For */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">
              On-Demand Road Logistics
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Versatile Road Transportation Engineered for UAE Demand
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              In the fast-moving logistics environment of the UAE, businesses and individuals require reliable, compliant road transport that arrives on schedule. Our pickup truck rental service eliminates the friction of moving cargo across congested urban districts like Business Bay, Deira, and Dubai Marina, as well as high-speed inter-emirate transit corridors such as Sheikh Zayed Road (E11) and Emirates Road (E611).
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Whether you need to transport a single consignment across town or secure scheduled daily runs between manufacturing facilities in Sharjah and retail outlets in Abu Dhabi, we provide the appropriate vehicle configuration with licensed, experienced drivers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high">
                <h3 className="font-label-lg text-on-surface font-bold mb-1">Single Point-to-Point Hires</h3>
                <p className="text-sm text-on-surface-variant">Ideal for direct store-to-door deliveries, single machinery relocations, or urgent residential cargo transfers.</p>
              </div>
              <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high">
                <h3 className="font-label-lg text-on-surface font-bold mb-1">Half-Day & Full-Day Blocks</h3>
                <p className="text-sm text-on-surface-variant">Dedicated vehicle and driver assigned to multi-stop drops, retail distributions, and exhibition venue setups.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-xl space-y-6">
            <h3 className="font-headline-md text-xl font-bold text-on-surface">Common Customer Use Cases</h3>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                <span><strong>Retail & E-commerce Distribution:</strong> Moving palletized stock from logistics warehouses in JAFZA or Dubai South to regional malls.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                <span><strong>Office Equipment & IT Cargo:</strong> Safe transport of workstations, servers, and office fixtures across commercial districts.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                <span><strong>Exhibition & Event Setup:</strong> Direct transit of display stands, lighting rigs, and marketing materials to the Dubai World Trade Centre or ADNEC.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                <span><strong>Construction Site Materials:</strong> Delivering architectural hardware, tools, and spare parts to active build sites throughout the UAE.</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-surface-container-high">
              <Link
                href="/request-quote"
                className="w-full py-3.5 rounded-xl bg-secondary text-on-secondary font-bold text-center block hover:bg-secondary-fixed transition-colors"
              >
                Calculate Trip Fare
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Options Section */}
      <section className="py-16 bg-surface-container/40 border-y border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">Available Vehicles</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-2">Fleet Specifications for Every Load Size</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Select the optimal vehicle capacity to prevent overloaded transport and ensure cost efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1 Ton */}
            <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col justify-between hover:border-secondary/40 transition-colors">
              <div>
                <span className="text-xs font-label-mono text-secondary uppercase font-semibold">Urban Agility</span>
                <h3 className="font-headline-md text-xl font-bold text-on-surface mt-1">1 Ton Pickup Truck</h3>
                <p className="text-sm text-on-surface-variant mt-3">Toyota Hilux / Isuzu D-Max single or double cabin. Perfect for standard cargo boxes, small appliances, and dense downtown streets with low basement clearances.</p>
                <div className="mt-6 space-y-2 text-xs font-label-mono text-on-surface-variant">
                  <div className="flex justify-between py-1 border-b border-surface-container-high"><span>Payload:</span><span className="text-on-surface font-bold">Up to 1,000 kg</span></div>
                  <div className="flex justify-between py-1 border-b border-surface-container-high"><span>Bed Length:</span><span className="text-on-surface font-bold">~2.3 meters</span></div>
                  <div className="flex justify-between py-1"><span>Best for:</span><span className="text-on-surface font-bold">Single-item drops & light cargo</span></div>
                </div>
              </div>
              <Link href="/fleet/1-ton-pickup" className="mt-6 w-full py-2.5 rounded-lg bg-surface-container-high text-on-surface text-center text-sm font-semibold hover:bg-surface-variant transition-colors block">
                1 Ton Specifications →
              </Link>
            </div>

            {/* 3 Ton */}
            <div className="p-6 rounded-2xl bg-surface-container border border-secondary/40 relative flex flex-col justify-between shadow-lg">
              <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-secondary text-on-secondary text-xs font-bold font-label-mono">Most Popular</span>
              <div>
                <span className="text-xs font-label-mono text-secondary uppercase font-semibold">Medium Freight Workhorse</span>
                <h3 className="font-headline-md text-xl font-bold text-on-surface mt-1">3 Ton Pickup (Box / Open)</h3>
                <p className="text-sm text-on-surface-variant mt-3">Mitsubishi Canter or Isuzu NPR available in open-bed or weatherproof enclosed box configuration. Suitable for furniture suites, pallets, and multi-room goods.</p>
                <div className="mt-6 space-y-2 text-xs font-label-mono text-on-surface-variant">
                  <div className="flex justify-between py-1 border-b border-surface-container-high"><span>Payload:</span><span className="text-on-surface font-bold">Up to 3,000 kg</span></div>
                  <div className="flex justify-between py-1 border-b border-surface-container-high"><span>Bed Length:</span><span className="text-on-surface font-bold">~4.3 meters (14 ft)</span></div>
                  <div className="flex justify-between py-1"><span>Best for:</span><span className="text-on-surface font-bold">Furniture & commercial inventory</span></div>
                </div>
              </div>
              <Link href="/fleet/3-ton-pickup" className="mt-6 w-full py-2.5 rounded-lg bg-secondary text-on-secondary text-center text-sm font-bold hover:bg-secondary-fixed transition-colors block">
                3 Ton Specifications →
              </Link>
            </div>

            {/* 7 Ton */}
            <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col justify-between hover:border-secondary/40 transition-colors">
              <div>
                <span className="text-xs font-label-mono text-secondary uppercase font-semibold">Heavy Commercial</span>
                <h3 className="font-headline-md text-xl font-bold text-on-surface mt-1">7 Ton Heavy Carrier</h3>
                <p className="text-sm text-on-surface-variant mt-3">Heavy road transporter engineered for industrial machinery, bulk raw materials, steel fixtures, and full warehouse clearances throughout the Emirates.</p>
                <div className="mt-6 space-y-2 text-xs font-label-mono text-on-surface-variant">
                  <div className="flex justify-between py-1 border-b border-surface-container-high"><span>Payload:</span><span className="text-on-surface font-bold">Up to 7,000 kg</span></div>
                  <div className="flex justify-between py-1 border-b border-surface-container-high"><span>Bed Length:</span><span className="text-on-surface font-bold">~6.5 meters (21 ft)</span></div>
                  <div className="flex justify-between py-1"><span>Best for:</span><span className="text-on-surface font-bold">Industrial & high-volume freight</span></div>
                </div>
              </div>
              <Link href="/fleet/7-ton-pickup" className="mt-6 w-full py-2.5 rounded-lg bg-surface-container-high text-on-surface text-center text-sm font-semibold hover:bg-surface-variant transition-colors block">
                7 Ton Specifications →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links to Relevant Locations */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-6">
          Pickup Rental Available Across UAE Service Areas
        </h2>
        <p className="text-on-surface-variant text-base mb-8 max-w-3xl">
          We operate across major arterial hubs throughout the United Arab Emirates. Discover local dispatch details for your area:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link href="/locations/dubai" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high text-on-surface font-semibold text-sm">
            Dubai Pickup Transport →
          </Link>
          <Link href="/locations/abu-dhabi" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high text-on-surface font-semibold text-sm">
            Abu Dhabi Transport →
          </Link>
          <Link href="/locations/sharjah" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high text-on-surface font-semibold text-sm">
            Sharjah Industrial Transport →
          </Link>
          <Link href="/locations/ajman" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high text-on-surface font-semibold text-sm">
            Ajman Pickup Services →
          </Link>
          <Link href="/locations/ras-al-khaimah" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high text-on-surface font-semibold text-sm">
            Ras Al Khaimah Transport →
          </Link>
          <Link href="/locations/fujairah" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high text-on-surface font-semibold text-sm">
            Fujairah Port Transport →
          </Link>
          <Link href="/locations/umm-al-quwain" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high text-on-surface font-semibold text-sm">
            Umm Al Quwain Services →
          </Link>
          <Link href="/locations/al-ain" className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high text-on-surface font-semibold text-sm">
            Al Ain Industrial Transport →
          </Link>
        </div>
      </section>

      {/* Conversion Module */}
      <CtaSection
        title="Need an Experienced Pickup Driver and Truck in the UAE?"
        subtitle="Book point-to-point dispatch or reserve a dedicated commercial vehicle. Average response under 45 minutes across Dubai and metropolitan centers."
        whatsAppMessage="Hello, I would like to book a pickup truck rental in the UAE."
      />

      {/* FAQ Accordion */}
      <FaqSection items={serviceFaqs} />
    </div>
  );
}
