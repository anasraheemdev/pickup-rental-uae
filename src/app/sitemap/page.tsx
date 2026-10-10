import React from "react";
import Link from "next/link";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = constructMetadata({
  title: "HTML Sitemap & Navigation Directory | Pickup & Rental UAE",
  description:
    "Complete directory of all pages, services, fleet categories, UAE service areas, logistics guides, and legal policies across the Pickup & Rental website.",
  path: "/sitemap",
  keywords: ["sitemap Pickup & Rental", "site directory", "UAE pickup rental pages"]
});

interface SiteSection {
  title: string;
  description: string;
  links: { name: string; href: string; detail?: string }[];
}

const sitemapSections: SiteSection[] = [
  {
    title: "Core Pages & Navigation",
    description: "Primary brand hubs and customer contact touchpoints.",
    links: [
      { name: "Homepage", href: "/", detail: "Primary overview of UAE pickup rental services" },
      { name: "Request a Quote", href: "/request-quote", detail: "Live interactive fare and distance calculator" },
      { name: "About Us", href: "/about", detail: "Company profile and service-area operating model" },
      { name: "Contact Dispatch Desk", href: "/contact", detail: "24/7 Dubai central dispatch desk & intake" },
      { name: "Frequently Asked Questions", href: "/faq", detail: "Answers on booking, tolls, permits, and sizing" }
    ]
  },
  {
    title: "Dedicated Road Transport Services",
    description: "Domestic road transportation solutions across the UAE.",
    links: [
      { name: "Services Hub", href: "/services", detail: "Overview of all road transport services" },
      { name: "Pickup Truck Rental", href: "/services/pickup-truck-rental", detail: "Urban light pickup rental with driver" },
      { name: "Goods Transportation", href: "/services/goods-transportation", detail: "Commercial cargo & palletized freight" },
      { name: "Furniture Transportation", href: "/services/furniture-transportation", detail: "Blanket-padded home & office relocations" },
      { name: "Commercial Transportation", href: "/services/commercial-transportation", detail: "B2B fleet retainers & scheduled shuttles" }
    ]
  },
  {
    title: "Commercial Fleet Categories",
    description: "Specifications, dimensions, and payloads for verified vehicles.",
    links: [
      { name: "Fleet Overview", href: "/fleet", detail: "Complete vehicle matrix and capacity comparison" },
      { name: "1 Ton Pickup Truck", href: "/fleet/1-ton-pickup", detail: "1,000 kg payload, <1.95m basement friendly" },
      { name: "3 Ton Commercial Truck", href: "/fleet/3-ton-pickup", detail: "3,000 kg payload, 16.5 CBM, 4-6 pallets" },
      { name: "7 Ton Heavy Carrier", href: "/fleet/7-ton-pickup", detail: "7,000 kg payload, 34 CBM heavy industrial freight" }
    ]
  },
  {
    title: "Service Areas & Hubs",
    description: "Active transport hubs across Dubai, Sharjah, and Ajman.",
    links: [
      { name: "Locations Hub", href: "/locations", detail: "Tri-Emirate service coverage overview" },
      { name: "Pickup Rental Dubai", href: "/locations/dubai", detail: "Al Quoz, Business Bay, Marina, JAFZA, Deira" },
      { name: "Pickup Rental Sharjah", href: "/locations/sharjah", detail: "Industrial Areas 1-18, SAIF Zone, Al Nahda" },
      { name: "Pickup Rental Ajman", href: "/locations/ajman", detail: "Ajman Free Zone, Jurf Industrial District" }
    ]
  },
  {
    title: "Logistics Guides & Knowledge Base",
    description: "In-depth operational manuals, regulations, and vehicle sizing.",
    links: [
      { name: "Resources Hub", href: "/resources", detail: "Editorial articles, checklists, and guides" },
      { name: "1 Ton vs 3 Ton Pickup Guide", href: "/resources/1-ton-vs-3-ton-pickup", detail: "Payload, CBM, and basement parking comparison" },
      { name: "How to Move Furniture Safely in Dubai", href: "/resources/how-to-move-furniture-safely-dubai", detail: "Developer move permits, elevator booking, heat care" },
      { name: "Pickup Truck Rental Guide UAE", href: "/resources/pickup-truck-rental-guide-uae", detail: "RTA rules, commercial licensing, Salik/Darb tolls" },
      { name: "What Size Pickup for Moving?", href: "/resources/what-size-pickup-for-moving", detail: "Room-by-room cubic volume calculation" },
      { name: "Commercial Goods Transport Guide", href: "/resources/commercial-goods-transport-guide", detail: "Free zone gate passes, mall windows, pallets" }
    ]
  },
  {
    title: "Legal & System Directives",
    description: "Regulatory compliance and crawler specifications.",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy", detail: "Customer data privacy under UAE federal law" },
      { name: "Terms & Conditions", href: "/terms-and-conditions", detail: "Operational conditions of UAE road transport" },
      { name: "XML Sitemap (Search Engines)", href: "/sitemap.xml", detail: "Machine-readable search engine index" },
      { name: "Robots.txt", href: "/robots.txt", detail: "Crawler access and indexing directives" }
    ]
  }
];

export default function HtmlSitemapPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[{ name: "HTML Sitemap", item: "/sitemap" }]} />

      <section className="relative bg-background text-on-surface py-12 lg:py-16 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-secondary font-label-mono text-xs uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>Site Directory &amp; Navigation Hierarchy</span>
            </div>
            <h1 className="font-headline-xl text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
              Website Sitemap &amp; Page Directory
            </h1>
            <p className="font-body-lead text-sm text-on-surface-variant leading-relaxed">
              Find every page, commercial service, vehicle specification, regional service area, and technical resource published on Pickup &amp; Rental.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapSections.map((sec, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-container border border-surface-container-high flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="text-xs font-label-mono text-secondary uppercase font-bold">
                  Section 0{idx + 1}
                </span>
                <h2 className="font-headline-md text-lg font-bold text-on-surface mt-1 mb-2">
                  {sec.title}
                </h2>
                <p className="text-xs text-on-surface-variant mb-4">
                  {sec.description}
                </p>
                <ul className="space-y-3 pt-2 border-t border-surface-container-high">
                  {sec.links.map((link, lIdx) => (
                    <li key={lIdx} className="text-xs">
                      <Link
                        href={link.href}
                        className="font-semibold text-on-surface hover:text-secondary transition-colors inline-flex items-center gap-1"
                      >
                        <span>{link.name}</span>
                        <span className="material-symbols-outlined text-[13px] text-secondary">arrow_forward</span>
                      </Link>
                      {link.detail && (
                        <p className="text-[11px] text-on-surface-variant/80 mt-0.5">
                          {link.detail}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
