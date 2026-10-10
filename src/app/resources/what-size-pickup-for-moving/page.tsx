import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "What Size Pickup Truck Do I Need for Moving? | Room by Room Guide UAE",
  description:
    "Calculate the exact pickup truck size needed for moving in the UAE. Room-by-room cubic meter (CBM) formulas for studio apartments, 1-bedroom, 2-bedroom flats, and villas. Avoid multiple trips and extra moving costs.",
  path: "/resources/what-size-pickup-for-moving",
  keywords: [
    "what size pickup truck for moving",
    "pickup truck size apartment moving",
    "truck size for 1 bedroom apartment",
    "cubic meter moving calculator UAE",
    "1 ton or 3 ton for moving house",
    "Dubai moving truck sizing"
  ]
});

const sizingFaqs = [
  {
    question: "Is a 1-ton pickup sufficient to move a 1-bedroom apartment in Dubai?",
    answer:
      "Generally no, unless it is minimally furnished. A typical 1-bedroom apartment contains 12 to 16 CBM of furniture and boxed belongings. A 1-ton pickup carries only 4.5 to 6 CBM, requiring 2 to 3 separate round trips. A 3-ton closed truck is recommended to complete the move in a single trip."
  },
  {
    question: "What vehicle is best for moving a studio apartment?",
    answer:
      "A 1-ton pickup is typically ideal for a studio apartment with a bed, small sofa, refrigerator, washing machine, and 5–8 cartons, provided large items can be partially dismantled."
  },
  {
    question: "How many cubic meters does a 3-ton truck hold?",
    answer:
      "A standard UAE 3-ton enclosed box truck offers an internal cargo volume of approximately 14 to 18 cubic meters (CBM), with an internal box length of ~4.2 meters and height of ~2.1 meters."
  },
  {
    question: "How can I reduce the truck size required for moving?",
    answer:
      "Dismantle bed frames and dining table legs, use uniform stackable moving boxes rather than irregular loose bags, and sell or donate unwanted appliances before booking your moving truck."
  }
];

export default function WhatSizePickupForMovingPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Size Pickup Truck Do I Need for Moving? Room-by-Room UAE Guide",
    description: "Detailed cubic meter calculation guide matching UAE apartment and villa layouts to 1-ton, 3-ton, and 7-ton commercial moving trucks.",
    url: `${SITE_URL}/resources/what-size-pickup-for-moving`,
    datePublished: "2025-01-28T09:00:00+04:00",
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
      "@id": `${SITE_URL}/resources/what-size-pickup-for-moving`
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={articleSchema} />
      <Breadcrumbs
        items={[
          { name: "Resources", item: "/resources" },
          { name: "Pickup Sizing for Moving", item: "/resources/what-size-pickup-for-moving" }
        ]}
      />

      <article className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>Capacity Engineering • Residential Relocations</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
              What Size Pickup Truck Do I Need for Moving?
            </h1>
            <p className="font-body-lead text-body-lead text-on-surface-variant mb-6 leading-relaxed">
              Underestimating your moving truck size leads to multiple round trips, wasted hours in Dubai traffic, and extra fuel costs. Use this room-by-room cubic volume framework to select the exact vehicle tonnage for your home.
            </p>
            <div className="flex items-center gap-4 text-xs font-label-mono text-outline pb-6 border-b border-surface-container-high/60">
              <span>Published by Relocation Desk</span>
              <span>•</span>
              <span>Reading time: 6 minutes</span>
              <span>•</span>
              <span className="text-secondary font-semibold">CBM Formula Guide</span>
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
                src="/images/blog/blog-what-size-moving.webp"
                alt="Guide showing pickup truck and box truck sizing for apartment moving in the UAE"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            {/* Room by Room Capacity Breakdown */}
            <div>
              <h2 className="font-headline-lg text-2xl lg:text-3xl font-bold text-on-surface mb-4">
                Apartment Size to Truck Matching Table
              </h2>
              <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
                Based on average UAE household furniture densities in high-rise towers and townhouses:
              </p>
              <div className="overflow-x-auto rounded-xl border border-surface-container-high bg-surface-container-low shadow-xl">
                <table className="w-full text-left font-body-md text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-container border-b border-surface-container-high text-xs font-label-mono uppercase text-secondary">
                      <th className="p-4">Property Type</th>
                      <th className="p-4">Estimated Volume</th>
                      <th className="p-4">Recommended Truck</th>
                      <th className="p-4">Number of Trips</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-high text-on-surface-variant">
                    <tr>
                      <td className="p-4 font-semibold text-on-surface">Studio Apartment</td>
                      <td className="p-4">4 – 6 CBM</td>
                      <td className="p-4 text-secondary font-bold">1-Ton Pickup</td>
                      <td className="p-4">1 Single Trip</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-on-surface">1-Bedroom Apartment</td>
                      <td className="p-4">12 – 16 CBM</td>
                      <td className="p-4 text-secondary font-bold">3-Ton Closed Truck</td>
                      <td className="p-4">1 Single Trip</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-on-surface">2-Bedroom Apartment</td>
                      <td className="p-4">22 – 28 CBM</td>
                      <td className="p-4 text-secondary font-bold">3-Ton or 7-Ton Truck</td>
                      <td className="p-4">1 to 2 Trips</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-on-surface">3-Bedroom Townhouse / Villa</td>
                      <td className="p-4">35 – 50 CBM</td>
                      <td className="p-4 text-secondary font-bold">7-Ton Truck or Multiple 3-Ton</td>
                      <td className="p-4">2 Dedicated Trips</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Item Volume Estimator */}
            <div className="space-y-4">
              <h2 className="font-headline-lg text-2xl font-bold text-on-surface">
                Cubic Volume Checklist by Common Furniture Item
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Add up the approximate CBM of your largest items to determine your total load:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                  <h4 className="font-bold text-on-surface text-sm mb-2">Living & Dining Room</h4>
                  <ul className="text-xs text-on-surface-variant space-y-1.5 font-label-mono">
                    <li className="flex justify-between"><span>3-Seater Sofa:</span> <span className="text-secondary font-bold">~1.5 CBM</span></li>
                    <li className="flex justify-between"><span>L-Shape Sectional:</span> <span className="text-secondary font-bold">~3.0 CBM</span></li>
                    <li className="flex justify-between"><span>Dining Table + 6 Chairs:</span> <span className="text-secondary font-bold">~2.0 CBM</span></li>
                    <li className="flex justify-between"><span>65&quot; TV in Box:</span> <span className="text-secondary font-bold">~0.4 CBM</span></li>
                    <li className="flex justify-between"><span>Coffee Table:</span> <span className="text-secondary font-bold">~0.3 CBM</span></li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                  <h4 className="font-bold text-on-surface text-sm mb-2">Bedroom & Kitchen</h4>
                  <ul className="text-xs text-on-surface-variant space-y-1.5 font-label-mono">
                    <li className="flex justify-between"><span>King Mattress & Frame:</span> <span className="text-secondary font-bold">~2.2 CBM</span></li>
                    <li className="flex justify-between"><span>Queen Mattress & Frame:</span> <span className="text-secondary font-bold">~1.8 CBM</span></li>
                    <li className="flex justify-between"><span>Large Wardrobe (Dismantled):</span> <span className="text-secondary font-bold">~1.2 CBM</span></li>
                    <li className="flex justify-between"><span>Double-Door Refrigerator:</span> <span className="text-secondary font-bold">~1.2 CBM</span></li>
                    <li className="flex justify-between"><span>Washing Machine:</span> <span className="text-secondary font-bold">~0.5 CBM</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Strategic Internal Links */}
            <div className="pt-6 border-t border-surface-container-high space-y-4">
              <h2 className="font-headline-md text-xl font-bold text-on-surface">
                Related Moving Services & Vehicle Specs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/fleet/3-ton-pickup"
                  className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high/60 block"
                >
                  <span className="text-xs font-label-mono text-secondary uppercase font-semibold">Vehicle Specs</span>
                  <h3 className="font-headline-sm text-base font-bold text-on-surface mt-1">3-Ton Commercial Truck</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Dimensions, box volume, and tailgate loading capacities.</p>
                </Link>
                <Link
                  href="/resources/how-to-move-furniture-safely-dubai"
                  className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high/60 block"
                >
                  <span className="text-xs font-label-mono text-secondary uppercase font-semibold">Moving Guide</span>
                  <h3 className="font-headline-sm text-base font-bold text-on-surface mt-1">Moving Furniture Safely in Dubai</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Elevator booking, developer permits, and padding techniques.</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 sticky top-28 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-2xl space-y-6">
            <span className="text-xs font-label-mono uppercase font-bold text-secondary tracking-wider block">
              Need Sizing Assistance?
            </span>
            <h3 className="font-headline-md text-xl font-bold text-on-surface">
              Send Your Furniture List
            </h3>
            <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
              Our dispatch specialists will calculate your total CBM in minutes and recommend the optimal vehicle size so you never overpay.
            </p>
            <div className="space-y-3 pt-2">
              <Link
                href="/request-quote"
                className="w-full py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold text-center block shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-colors"
              >
                Get Sizing Quote
              </Link>
              <a
                href="https://wa.me/971555775074?text=Hello%2C%20can%20you%20help%20me%20calculate%20the%20truck%20size%20needed%20for%20my%20move%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-semibold text-center block text-sm transition-colors border border-outline-variant/30"
              >
                WhatsApp Sizing Help
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Move with the Right Truck Size?"
        subtitle="Avoid multiple trips. Book the exact vehicle size needed for your apartment or villa."
        whatsAppMessage="Hello, I would like to book a moving truck in the UAE."
      />

      <FaqSection items={sizingFaqs} />
    </div>
  );
}
