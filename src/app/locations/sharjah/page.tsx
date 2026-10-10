import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Pickup Rental Sharjah | 1 Ton & 3 Ton Industrial Transport",
  description:
    "Hire reliable pickup trucks in Sharjah. Serving Industrial Areas 1-18, Saif Zone, Hamriyah, Al Majaz, and Muwaileh. Commercial goods freight, building materials, and furniture moving with licensed drivers.",
  path: "/locations/sharjah",
  keywords: [
    "pickup rental Sharjah",
    "pickup truck rental Sharjah",
    "Sharjah industrial transport",
    "pickup for rent Sharjah",
    "3 ton pickup Sharjah Industrial",
    "furniture transport Sharjah"
  ]
});

const sharjahFaqs = [
  {
    question: "Do you provide pickup transport across all 18 Industrial Areas in Sharjah?",
    answer:
      "Yes. Sharjah Industrial Areas 1 through 18 represent a major daily operational hub for our fleet. We transport auto spare parts, metal fabrication, building materials, printing supplies, and manufacturing goods to and from facilities throughout these zones."
  },
  {
    question: "How do you navigate peak-hour traffic between Sharjah and Dubai?",
    answer:
      "Our dispatch team utilizes arterial highway routing via Emirates Road (E611) and Sheikh Mohammed Bin Zayed Road (E311) to bypass congested commuter bottlenecks on Al Ittihad Road, ensuring timely commercial deliveries."
  },
  {
    question: "Can I book a 1-ton pickup for residential furniture moving in Al Majaz or Al Nahda?",
    answer:
      "Yes. We serve all residential communities in Sharjah including Al Majaz, Al Nahda, Al Taawun, Al Qasimia, and Muwaileh with optional helpers for furniture loading and elevator transport."
  },
  {
    question: "Do you support deliveries to Hamriyah Free Zone and Saif Zone?",
    answer:
      "Yes. Our commercial drivers carry required UAE commercial credentials to access Hamriyah Free Zone and Sharjah Airport International Free Zone (SAIF Zone) upon receipt of client-issued gate passes."
  }
];

export default function SharjahLocationPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pickup & Rental - Sharjah Service Area",
    description: "Professional pickup truck rental and commercial road transport across Sharjah.",
    url: `${SITE_URL}/locations/sharjah`,
    telephone: "+971555775074",
    areaServed: {
      "@type": "City",
      name: "Sharjah",
      sameAs: "https://en.wikipedia.org/wiki/Sharjah"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.3463",
      longitude: "55.4209"
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={localSchema} />
      <Breadcrumbs items={[{ name: "Locations", item: "/locations" }, { name: "Sharjah", item: "/locations/sharjah" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Serving Sharjah • Industrial &amp; Residential Hub</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
                Pickup Truck Rental &amp; Road Transport in Sharjah
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
                Serving Sharjah’s vital manufacturing clusters, free zones, and residential neighborhoods. Dependable 1-Ton, 3-Ton, and 7-Ton transport with licensed commercial drivers and fast dispatch response.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/request-quote"
                  className="px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
                >
                  Get Sharjah Trip Quote
                </Link>
                <Link
                  href="/fleet/3-ton-pickup"
                  className="px-8 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
                >
                  3-Ton Cargo Specs →
                </Link>
              </div>
            </div>

            {/* Right Hero Location Image */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden border border-surface-container-high shadow-2xl">
                <Image
                  src="/images/locations/sharjah.webp"
                  alt="Commercial pickup truck operating in Sharjah commercial and industrial trade district"
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

      {/* Industrial & Commercial Focus */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">
              Manufacturing & Commercial Backbone
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Supporting Sharjah's Heavy Trade & Residential Mobility
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Sharjah functions as the industrial heartland of the Northern Emirates, generating continuous demand for road freight across manufacturing workshops, metal fabrication units, building supply yards, and commercial print houses. Efficient road logistics require drivers who know the internal grid of Industrial Areas 1 through 18 intimately, avoiding narrow dead-ends and respecting municipal loading protocols.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              At the same time, high-density residential towers in Al Majaz, Al Taawun, and Al Nahda require agile pickup trucks capable of handling apartment moves and marketplace deliveries with optional helper crews.
            </p>

            <h3 className="font-headline-md text-xl font-bold text-on-surface pt-4">Sharjah Coverage Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-on-surface-variant">
              <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                <strong className="text-on-surface block mb-1">Industrial Areas 1 - 18:</strong>
                Scrap metal, auto parts, carpentry workshops, glass fabrication, and construction supplies.
              </div>
              <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                <strong className="text-on-surface block mb-1">Trade & Port Free Zones:</strong>
                Hamriyah Free Zone, SAIF Zone, Port Khalid industrial maritime operations.
              </div>
              <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                <strong className="text-on-surface block mb-1">Residential Waterfront:</strong>
                Al Majaz 1-3, Al Qasba, Al Khan, Al Taawun, Al Mamzar border communities.
              </div>
              <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                <strong className="text-on-surface block mb-1">University & Academic:</strong>
                University City, Muwaileh Commercial, Al Zahia, Al Suyoh villa developments.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-xl space-y-6">
            <h3 className="font-headline-md text-xl font-bold text-on-surface">Fleet Deployment in Sharjah</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-surface-container-high border border-surface-container-highest">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-on-surface">3 Ton Open Bed / Box</h4>
                  <span className="text-xs font-mono text-secondary font-bold">From AED 280</span>
                </div>
                <p className="text-xs text-on-surface-variant">Heavy-duty Canter truck preferred for manufacturing workshops, steel parts, and multi-pallet industrial cargo.</p>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-high border border-surface-container-highest">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-on-surface">1 Ton Hilux Pickup</h4>
                  <span className="text-xs font-mono text-secondary font-bold">From AED 160</span>
                </div>
                <p className="text-xs text-on-surface-variant">Nimble delivery vehicle for urgent machine parts, small retail items, and furniture moves across Al Majaz towers.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-container-high">
              <Link
                href="/request-quote"
                className="w-full py-3.5 rounded-xl bg-secondary text-on-secondary font-bold text-center block hover:bg-secondary-fixed transition-colors"
              >
                Instant Sharjah Fare Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-surface-container/40 border-y border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-6">
            Key Transport Routes from Sharjah
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link href="/locations/dubai" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
              <h3 className="font-label-lg font-bold text-on-surface mb-2">Sharjah to Dubai</h3>
              <p className="text-sm text-on-surface-variant">High-frequency industrial transit via E311 and E611 connecting with Al Quoz, Business Bay, and JAFZA.</p>
            </Link>
            <Link href="/locations/ajman" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
              <h3 className="font-label-lg font-bold text-on-surface mb-2">Sharjah to Ajman</h3>
              <p className="text-sm text-on-surface-variant">Short-distance trade corridor connecting Sharjah Industrial with Al Jurf and Ajman Port.</p>
            </Link>
            <Link href="/locations/sharjah" className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high">
              <h3 className="font-label-lg font-bold text-on-surface mb-2">Intra-Sharjah Industrial</h3>
              <p className="text-sm text-on-surface-variant">Express runs across Industrial Areas 1 to 18, SAIF Zone, and Hamriyah Port corridors.</p>
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        title="Book Verified Pickup Transport in Sharjah"
        subtitle="Prompt dispatch across Industrial Areas 1-18 and metropolitan communities. Experienced drivers and upfront pricing."
        whatsAppMessage="Hello, I would like to book a pickup truck in Sharjah."
      />

      <FaqSection items={sharjahFaqs} />
    </div>
  );
}
