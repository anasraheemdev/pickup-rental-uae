import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "How to Move Furniture Safely in Dubai | UAE Moving Guide",
  description:
    "Expert guide on moving furniture safely across Dubai. Learn how to secure building move-in/out permits, book service elevators, protect wooden and leather items against desert heat, and select the right pickup truck.",
  path: "/resources/how-to-move-furniture-safely-dubai",
  keywords: [
    "how to move furniture Dubai",
    "furniture moving guide Dubai",
    "Dubai move in permit",
    "service elevator booking Dubai",
    "pickup truck furniture moving",
    "furniture protection UAE heat"
  ]
});

const furnitureMovingFaqs = [
  {
    question: "Do I need a Move-Out or Move-In Permit before booking a pickup truck in Dubai?",
    answer:
      "Yes. Major master communities (Emaar, Nakheel, DAMAC, Dubai Silicon Oasis, etc.) require an approved electronic Move-Out permit from your outgoing property and an active Move-In NOC from your new building. Security gates and loading dock guards will inspect this permit before granting truck access."
  },
  {
    question: "How do I protect delicate furniture from UAE desert temperatures?",
    answer:
      "Avoid leaving wooden veneer, real leather sofas, or delicate musical instruments exposed inside open trucks during direct midday heat. Use thick padded moving blankets, secure plastic stretch wrap, and opt for enclosed box trucks with weatherproof cargo bays."
  },
  {
    question: "Should I dismantle beds and dining tables before the pickup arrives?",
    answer:
      "Yes. Dismantling bed frames, dining table legs, and modular shelving significantly reduces the cubic volume required, minimizes the risk of joint shear during transit, and speeds up elevator loading."
  },
  {
    question: "Can Pickup & Rental provide helpers to lift heavy furniture?",
    answer:
      "Yes. When requesting your quote, you can specify whether you require driver-only transport or additional loading helpers to assist with lifting sofas, wardrobes, and heavy appliances."
  }
];

export default function HowToMoveFurnitureDubaiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Move Furniture Safely in Dubai: Building Permits, Elevator Booking, and Transport",
    description: "The complete manual for relocating residential furniture safely across Dubai, detailing developer permits, elevator protocols, packing standards, and truck sizing.",
    url: `${SITE_URL}/resources/how-to-move-furniture-safely-dubai`,
    datePublished: "2025-02-01T09:00:00+04:00",
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
      "@id": `${SITE_URL}/resources/how-to-move-furniture-safely-dubai`
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={articleSchema} />
      <Breadcrumbs
        items={[
          { name: "Resources", item: "/resources" },
          { name: "How to Move Furniture Safely in Dubai", item: "/resources/how-to-move-furniture-safely-dubai" }
        ]}
      />

      <article className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>Residential Logistics Manual • Dubai Regulations</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
              How to Move Furniture Safely in Dubai: Permits, Elevator Protocols, and Truck Selection
            </h1>
            <p className="font-body-lead text-body-lead text-on-surface-variant mb-6 leading-relaxed">
              Moving furniture across Dubai is not just about heavy lifting—it requires navigating developer security checkpoints, basement clearance thresholds, and building management elevator approvals. Follow this comprehensive field guide to ensure a seamless relocation.
            </p>
            <div className="flex items-center gap-4 text-xs font-label-mono text-outline pb-6 border-b border-surface-container-high/60">
              <span>Published by Dispatch Team</span>
              <span>•</span>
              <span>Reading time: 7 minutes</span>
              <span>•</span>
              <span className="text-secondary font-semibold">Dubai RTA & FM Aligned</span>
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
                src="/images/blog/blog-moving-furniture.webp"
                alt="Professional team loading and transporting furniture on a commercial pickup truck in UAE residential community"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            {/* Step 1: Permits */}
            <div className="space-y-4">
              <h2 className="font-headline-lg text-2xl font-bold text-on-surface">
                1. Secure Master Developer Move-Out & Move-In Permits
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                In Dubai, you cannot load or unload a commercial pickup truck at a residential community without building security authorization. Major developers—including Emaar (Downtown, Marina, Arabian Ranches), Nakheel (Palm Jumeirah, JVC), DAMAC (Hills, Business Bay), and Dubai Holding—operate mandatory digital portals.
              </p>
              <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-3">
                <h3 className="font-headline-sm text-base font-bold text-on-surface">Mandatory Permit Checklist:</h3>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                    <span><strong>Tenancy Contract (Ejari):</strong> Valid certificate for the new property or official notice of clearance from your previous landlord.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                    <span><strong>DEWA Final Bill:</strong> Required by many building management companies before issuing a Move-Out NOC.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                    <span><strong>Move-Out Pass:</strong> Download the QR-code permit to your smartphone. Gate guards will scan this before allowing any truck through the barrier.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2: Elevator Booking */}
            <div className="space-y-4">
              <h2 className="font-headline-lg text-2xl font-bold text-on-surface">
                2. Reserve the Service Elevator and Loading Dock Bay
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                High-rise residential towers in Dubai Marina, Jumeirah Lake Towers (JLT), and Downtown Dubai enforce strict regulations prohibiting the use of passenger elevators for furniture transport.
              </p>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Contact your building&apos;s Facilities Management (FM) team at least 48 hours in advance to reserve a 2-hour window on the padded service elevator. Ensure you also inform them whether your vehicle is a <Link href="/fleet/1-ton-pickup" className="text-secondary font-semibold hover:underline">1-ton pickup</Link> (which can use underground parking) or a <Link href="/fleet/3-ton-pickup" className="text-secondary font-semibold hover:underline">3-ton truck</Link> (requiring a surface loading bay).
              </p>
            </div>

            {/* Step 3: Packing & Weather Protection */}
            <div className="space-y-4">
              <h2 className="font-headline-lg text-2xl font-bold text-on-surface">
                3. Packing, Strapping, and Desert Heat Protection
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Dubai&apos;s summer ambient temperatures exceed 45°C. Unshielded wooden veneer can bubble, leather upholstery can suffer thermal sweating, and fragile glass surfaces are vulnerable to sudden highway vibration along Sheikh Zayed Road (E11).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                  <h4 className="font-bold text-on-surface text-sm mb-2">Wood & Joinery Protection</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Wrap with high-density moving blankets before applying shrink wrap. Never apply adhesive tape directly to polished wood or lacquered finishes to prevent peeling.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high">
                  <h4 className="font-bold text-on-surface text-sm mb-2">Electronics & Appliances</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Keep refrigerators upright during transit to prevent compressor oil from entering the cooling coils. Allow 2 hours of rest before powering on at your new home.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic Internal Links */}
            <div className="pt-6 border-t border-surface-container-high space-y-4">
              <h2 className="font-headline-md text-xl font-bold text-on-surface">
                Related Moving & Transportation Guides
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/services/furniture-transportation"
                  className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high/60 block"
                >
                  <span className="text-xs font-label-mono text-secondary uppercase font-semibold">Dedicated Service</span>
                  <h3 className="font-headline-sm text-base font-bold text-on-surface mt-1">Furniture Transportation Services</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Explore our dedicated furniture moving fleet and pricing.</p>
                </Link>
                <Link
                  href="/locations/dubai"
                  className="p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-high/60 block"
                >
                  <span className="text-xs font-label-mono text-secondary uppercase font-semibold">Service Area</span>
                  <h3 className="font-headline-sm text-base font-bold text-on-surface mt-1">Pickup Rental in Dubai</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Local logistics, dispatch speeds, and tower coverage across Dubai.</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 sticky top-28 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-2xl space-y-6">
            <span className="text-xs font-label-mono uppercase font-bold text-secondary tracking-wider block">
              Moving in Dubai Soon?
            </span>
            <h3 className="font-headline-md text-xl font-bold text-on-surface">
              Book a Pickup Truck with Loading Assistance
            </h3>
            <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
              We provide punctual, licensed commercial trucks with optional helper assistance to make your Dubai furniture move effortless.
            </p>
            <div className="space-y-3 pt-2">
              <Link
                href="/request-quote"
                className="w-full py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold text-center block shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-colors"
              >
                Get Furniture Move Quote
              </Link>
              <a
                href="https://wa.me/971555775074?text=Hello%2C%20I%20am%20moving%20furniture%20in%20Dubai%20and%20need%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-semibold text-center block text-sm transition-colors border border-outline-variant/30"
              >
                Instant WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Schedule Your Dubai Furniture Move Today"
        subtitle="Professional drivers, clean commercial vehicles, and careful handling for your home furnishings."
        whatsAppMessage="Hello, I would like to schedule a furniture moving pickup truck in Dubai."
      />

      <FaqSection items={furnitureMovingFaqs} />
    </div>
  );
}
