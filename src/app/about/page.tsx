import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "About Pickup & Rental | Professional UAE Road Transportation",
  description:
    "Learn about Pickup & Rental, our centralized road transport network, licensed commercial fleet, and commitment to transparent pricing and cargo safety across all seven Emirates.",
  path: "/about",
  keywords: [
    "about Pickup & Rental",
    "UAE pickup truck company",
    "commercial road transport UAE",
    "pickup rental Dubai company",
    "road freight service areas UAE"
  ]
});

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Pickup & Rental",
    description: "Company profile, service-area operating model, and transport mission of Pickup & Rental across the United Arab Emirates.",
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "Organization",
      name: "Pickup & Rental",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      telephone: "+971555775074",
      email: "dispatch@pickupandrental.com",
      description: "Professional pickup truck rental and road transport services across Dubai, Sharjah, and Ajman."
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={aboutSchema} />
      <Breadcrumbs items={[{ name: "About Us", item: "/about" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-20 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Company Profile • UAE Road Transportation</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
                Dedicated Pickup Rental &amp; Road Transport Across the UAE
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
                Pickup &amp; Rental provides professional road transportation solutions for individuals and enterprises throughout the United Arab Emirates. We specialize exclusively in domestic road transport—delivering cargo safely, punctually, and with complete pricing clarity.
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
                  View Services →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative w-full h-[360px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl bg-surface-container-low border border-surface-container-high">
                <Image
                  src="/images/about/about-operations.webp"
                  alt="Pickup & Rental fleet and road transport operations in UAE"
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

      {/* Narrative Section: Who We Are & What We Do */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">
              Our Identity &amp; Scope
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Focused Exclusively on UAE Highway &amp; Urban Road Transport
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              At Pickup &amp; Rental, our mission is clear: to provide dependable, transparent pickup truck rental and cargo transportation on UAE roads. We are not an international freight forwarder or a passenger transport service. Every vehicle, driver, and system in our operation is calibrated specifically for road cargo transit.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Whether helping a family relocate furniture between Dubai, Sharjah, or Ajman, delivering palletized goods from JAFZA warehouses to retail centers, or providing dedicated commercial retainers for expanding businesses, we emphasize punctuality, cargo protection, and driver professionalism.
            </p>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high">
                <h3 className="font-headline-sm text-base font-bold text-on-surface mb-2">What We Provide</h3>
                <ul className="text-xs text-on-surface-variant space-y-2">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">check</span> Pickup truck rental with licensed driver</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">check</span> Residential furniture transportation</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">check</span> Commercial goods &amp; pallet delivery</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">check</span> Scheduled B2B fleet logistics</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high">
                <h3 className="font-headline-sm text-base font-bold text-on-surface mb-2">What We Do Not Do</h3>
                <ul className="text-xs text-on-surface-variant space-y-2">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-outline text-sm">close</span> No international sea or air freight</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-outline text-sm">close</span> No passenger bus or limousine rental</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-outline text-sm">close</span> No container ship forwarding</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-outline text-sm">close</span> No self-drive unverified rentals</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-xl space-y-6">
            <div className="relative w-full h-52 rounded-xl overflow-hidden bg-surface-container-low shadow-md">
              <Image
                src="/images/about/about-fleet.webp"
                alt="Commercial pickup fleet operations at UAE logistics terminal"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <h3 className="font-headline-md text-xl font-bold text-on-surface">The Service-Area Model</h3>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
              We operate as a centralized service-area transportation provider. Rather than establishing costly walk-in retail shops in every municipality, we coordinate mobile fleets from our central dispatch desk. This model enables rapid dispatch to loading docks, warehouses, and residential gates across Dubai, Sharjah, and Ajman.
            </p>
            <div className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container-high space-y-2 text-xs font-label-mono">
              <div className="text-secondary font-bold uppercase">Service Coverage Network:</div>
              <div className="text-on-surface-variant leading-relaxed">
                Dubai • Sharjah • Ajman
              </div>
            </div>
            <Link
              href="/locations"
              className="w-full py-3.5 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-semibold text-center block text-sm transition-colors border border-outline-variant/30"
            >
              Explore UAE Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Operational Principles */}
      <section className="py-16 bg-surface-container/30 border-y border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">
              Operational Standards
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
              How We Work With Our Customers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high">
              <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary mb-4">
                <span className="material-symbols-outlined text-xl">payments</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">Transparent Upfront Rates</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                No hidden toll fees or surprise surcharges. Every quote itemizes distance, vehicle tonnage, helper assistance, and highway tolls (Salik/Darb).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high">
              <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary mb-4">
                <span className="material-symbols-outlined text-xl">shield</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">Licensed Professional Drivers</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Our vehicles are piloted by experienced commercial drivers who comply with UAE transport authority regulations and understand inter-emirate highway rules.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high">
              <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary mb-4">
                <span className="material-symbols-outlined text-xl">support_agent</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">Responsive Dispatch Desk</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Our central dispatch coordinates trips via phone, WhatsApp, and digital forms—keeping clients informed of driver arrivals and route progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Work with Pickup & Rental?"
        subtitle="Book commercial road transportation across the UAE with upfront pricing and verified drivers."
        whatsAppMessage="Hello, I would like to book road transportation with Pickup & Rental."
      />
    </div>
  );
}
