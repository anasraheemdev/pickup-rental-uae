import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Dubai, Sharjah & Ajman Service Areas & Routes | Pickup & Rental",
  description:
    "Explore Pickup & Rental service coverage across Dubai, Sharjah, and Ajman. Dedicated road transportation connecting major UAE commercial hubs, ports, and industrial zones.",
  path: "/locations",
  keywords: [
    "Dubai pickup transport service areas",
    "Sharjah pickup rental",
    "Ajman pickup rental",
    "inter-emirate transport coverage",
    "Dubai Sharjah road transport",
    "commercial pickup UAE routes"
  ]
});

const locationHubFaqs = [
  {
    question: "Which locations do you actively serve?",
    answer:
      "We operate an agile commercial road transportation and pickup rental network strictly serving Dubai, Sharjah, and Ajman, including rapid inter-emirate transit between these three locations."
  },
  {
    question: "Can I book a pickup truck between Dubai, Sharjah, and Ajman?",
    answer:
      "Yes. Inter-emirate road transportation between Dubai, Sharjah, and Ajman is one of our most active daily corridors. We transport goods, commercial stock, and household furniture seamlessly across E11, E311, and E611."
  },
  {
    question: "How quickly can a pickup truck arrive at my location?",
    answer:
      "Within central metropolitan and industrial zones across Dubai, Sharjah, and Ajman, our average dispatch response is under 45 minutes. Trips can be scheduled on-demand or booked in advance for exact timings."
  },
  {
    question: "Are Salik tolls and inter-emirate highway fees included?",
    answer:
      "Yes. Fares are calculated transparently with applicable highway tolls (such as Dubai Salik gates) itemized clearly in your upfront quote with no hidden extras."
  }
];

export default function LocationsHubPage() {
  const hubSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Dubai, Sharjah & Ajman Pickup Transport Service Areas Hub",
    description: "Regional service areas and highway corridors served by Pickup & Rental across Dubai, Sharjah, and Ajman.",
    url: `${SITE_URL}/locations`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Dubai", url: `${SITE_URL}/locations/dubai` },
        { "@type": "ListItem", position: 2, name: "Sharjah", url: `${SITE_URL}/locations/sharjah` },
        { "@type": "ListItem", position: 3, name: "Ajman", url: `${SITE_URL}/locations/ajman` },
      ]
    }
  };

  const serviceAreas = [
    {
      name: "Dubai",
      slug: "/locations/dubai",
      tagline: "Metro, JAFZA, Al Quoz & Communities",
      image: "/images/locations/dubai.webp",
      description: "Comprehensive pickup rental and goods transportation across all Dubai districts. Serving Downtown, Business Bay, Marina, JAFZA, Al Quoz, and Deira with rapid 45-minute dispatch.",
      corridors: "Sheikh Zayed Rd (E11), Al Khail Rd (E44), Emirates Rd (E611)"
    },
    {
      name: "Sharjah",
      slug: "/locations/sharjah",
      tagline: "Industrial Areas 1-18, Ports & Free Zones",
      image: "/images/locations/sharjah.webp",
      description: "Heavy commercial and manufacturing freight across Sharjah's 18 industrial zones, SAIF Zone, Hamriyah Port access, and residential moves in Al Majaz and Al Nahda.",
      corridors: "E11, Mohammed Bin Zayed Rd (E311), E88"
    },
    {
      name: "Ajman",
      slug: "/locations/ajman",
      tagline: "Ajman Port, Jurf & Free Zone",
      image: "/images/locations/ajman.webp",
      description: "Cost-effective pickup truck transport connecting Ajman Free Zone, Al Jurf Industrial Area, and residential communities with Sharjah and Dubai transport corridors.",
      corridors: "E311, Al Ittihad St, Sheikh Ammar Rd"
    }
  ];

  const interEmirateCorridors = [
    {
      title: "Dubai ⇄ Sharjah Express",
      route: "E11 (Al Ittihad) & E311 (SMBZ Road)",
      time: "25–45 mins",
      desc: "Daily high-frequency shuttle for commercial inventory, retail store replenishment, and residential moves between Dubai and Sharjah."
    },
    {
      title: "Sharjah ⇄ Ajman Industrial Link",
      route: "Al Wahda St & Industrial Cross-Borders",
      time: "15–30 mins",
      desc: "Short-distance trade corridor connecting Sharjah Industrial Areas 1–18 directly with Ajman Al Jurf Industrial zones and the Free Zone."
    },
    {
      title: "Dubai ⇄ Ajman Direct Corridor",
      route: "Sheikh Mohammed Bin Zayed Rd (E311) & E611",
      time: "35–55 mins",
      desc: "Express freight corridor bypassing city congestion for bulk pallet transport and household goods relocation directly between Dubai and Ajman."
    }
  ];

  return (
    <div className="w-full">
      <JsonLd data={hubSchema} />
      <Breadcrumbs items={[{ name: "Locations", item: "/locations" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>Dubai • Sharjah • Ajman Core Express Network</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
              Dubai, Sharjah &amp; Ajman Service Areas &amp; Network
            </h1>
            <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
              We operate an agile service-area road transportation network exclusively serving Dubai, Sharjah, and Ajman. Discover local operational logistics, route considerations, and available fleet options for your area.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/request-quote"
                className="px-6 py-3.5 rounded-xl bg-secondary text-on-secondary font-label-lg text-sm font-bold shadow-[0_8px_20px_-3px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="px-6 py-3.5 rounded-xl bg-surface-container text-on-surface font-label-lg text-sm font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
              >
                Explore Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Active Service Areas Grid */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="mb-10">
          <span className="font-label-mono text-xs uppercase text-secondary font-bold tracking-wider">
            CORE SERVICE HUBS
          </span>
          <h2 className="font-headline-lg text-2xl lg:text-3xl font-bold text-on-surface mt-1">
            Active Operating Emirates
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceAreas.map((area) => (
            <div
              key={area.slug}
              className="p-6 lg:p-8 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col justify-between hover:border-secondary/40 transition-colors shadow-lg"
            >
              <div>
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5 bg-surface-container-low">
                  <Image
                    src={area.image}
                    alt={`Pickup truck transport in ${area.name} UAE`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-label-mono uppercase font-semibold text-secondary px-3 py-1 rounded-full bg-surface-container-high">
                    Service Area
                  </span>
                  <span className="text-xs font-label-mono text-on-surface-variant">{area.tagline}</span>
                </div>
                <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-3">
                  <Link href={area.slug} className="hover:text-secondary transition-colors">
                    Pickup Transport in {area.name}
                  </Link>
                </h3>
                <p className="font-body-md text-on-surface-variant mb-4 text-sm leading-relaxed">
                  {area.description}
                </p>
                <div className="p-3 rounded-lg bg-surface-container-lowest text-xs font-label-mono text-on-surface-variant">
                  <strong className="text-on-surface">Main Corridors:</strong> {area.corridors}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-container-high flex items-center justify-between">
                <Link
                  href={area.slug}
                  className="text-secondary font-label-lg font-bold hover:underline inline-flex items-center gap-1.5 text-sm"
                >
                  <span>{area.name} Logistics Details</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
                <Link
                  href="/request-quote"
                  className="px-3.5 py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-xs text-on-surface font-semibold transition-colors"
                >
                  Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inter-Emirate Express Corridors */}
      <section className="py-16 bg-surface-container/40 border-y border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-label-mono text-xs uppercase text-secondary tracking-widest font-semibold block">
              High-Frequency Daily Transit
            </span>
            <h2 className="font-headline-lg text-2xl lg:text-3xl text-on-surface font-bold mt-1">
              Inter-Emirate Connecting Corridors
            </h2>
            <p className="font-body-md text-sm text-on-surface-variant mt-2 leading-relaxed">
              Fast, licensed transport connections with toll clearance across Dubai, Sharjah, and Ajman highway links.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interEmirateCorridors.map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-2xl bg-surface-container border border-surface-container-high shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-label-mono mb-2">
                    <span className="text-secondary font-bold uppercase">{c.route}</span>
                    <span className="text-on-surface-variant bg-surface-container-highest px-2 py-0.5 rounded">{c.time}</span>
                  </div>
                  <h4 className="font-headline-md text-lg font-bold text-on-surface mb-2">
                    {c.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    {c.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-surface-container-high flex items-center justify-between">
                  <span className="text-xs font-label-mono text-on-surface-variant">Daily Dispatches</span>
                  <Link
                    href="/request-quote"
                    className="text-xs font-bold text-secondary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Book Route</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highway Matrix Notice */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop text-center max-w-3xl">
        <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">
          Tri-Emirate Highway Transit Standards
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-2">
          Highway Toll &amp; Permitting Compliance
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
          Our dispatch systems account for regional road regulations across Dubai, Sharjah, and Ajman: Dubai Salik toll gates, peak-traffic heavy vehicle bans on urban expressways, and municipal clearances required for commercial deliveries into industrial developments and residential communities.
        </p>
      </section>

      <CtaSection
        title="Need Pickup Transportation Across Dubai, Sharjah, or Ajman?"
        subtitle="Book verified road transport connecting Dubai, Sharjah, and Ajman with upfront rates and licensed commercial drivers."
        whatsAppMessage="Hello, I would like to book road transportation in Dubai, Sharjah, or Ajman."
      />

      <FaqSection items={locationHubFaqs} />
    </div>
  );
}
