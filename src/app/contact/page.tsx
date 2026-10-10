import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";

export const metadata = constructMetadata({
  title: "Contact & 24/7 Central Dispatch Desk | Pickup & Rental UAE",
  description:
    "Connect immediately with Pickup & Rental's 24/7 central dispatch desk. Direct call 055 577 5074 (+971 55 577 5074), WhatsApp dispatch, and priority intake for road transportation across Dubai, Sharjah, and Ajman.",
  path: "/contact",
  keywords: [
    "contact pickup rental Dubai",
    "pickup dispatch hotline UAE",
    "pickup rental Sharjah contact",
    "pickup rental Ajman contact",
    "pickup truck WhatsApp UAE",
    "road freight contact number Dubai"
  ]
});

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Pickup & Rental Dispatch Desk",
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Pickup & Rental Central Dispatch Desk",
      telephone: "+971555775074",
      email: "dispatch@pickupandrental.com",
      url: SITE_URL,
      openingHours: "Mo-Su 00:00-24:00",
      areaServed: [
        "Dubai",
        "Sharjah",
        "Ajman"
      ]
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={contactSchema} />
      <Breadcrumbs items={[{ name: "Contact Dispatch Desk", item: "/contact" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span>24/7 Central Dispatch Desk Online • Dubai • Sharjah • Ajman</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
              Contact 24/7 Dispatch Control &amp; Customer Support
            </h1>
            <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
              Coordinating on-demand commercial pickups, scheduled inter-emirate runs, and corporate freight contracts. Reach our central dispatch desk directly via phone, WhatsApp, or priority digital intake.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Direct Phone Line */}
            <a
              href="tel:+971555775074"
              className="group p-6 rounded-2xl bg-surface-container border border-surface-container-high hover:border-secondary/40 transition-all shadow-lg block"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-label-mono text-secondary uppercase font-bold px-2.5 py-1 rounded bg-secondary/10">
                  Direct Line
                </span>
                <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">
                  phone_in_talk
                </span>
              </div>
              <div className="text-xs font-label-mono text-outline uppercase tracking-wider mb-1">
                Voice Dispatch Desk
              </div>
              <div className="font-headline-md text-2xl font-bold text-on-surface group-hover:text-secondary transition-colors">
                055 577 5074
              </div>
              <p className="text-xs text-on-surface-variant mt-2">
                Direct: 055 577 5074 / +971 55 577 5074. Immediate vehicle allocation across Dubai, Sharjah &amp; Ajman.
              </p>
            </a>

            {/* WhatsApp Live Desk */}
            <a
              href="https://wa.me/971555775074?text=Hello%20Pickup%20%26%20Rental%2C%20I%20need%20to%20book%20a%20pickup%20truck."
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-surface-container border border-surface-container-high hover:border-[#25D366]/40 transition-all shadow-lg block"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-label-mono text-[#25D366] uppercase font-bold px-2.5 py-1 rounded bg-[#25D366]/10">
                  Fast WhatsApp
                </span>
                <span className="material-symbols-outlined text-[#25D366]">chat</span>
              </div>
              <div className="text-xs font-label-mono text-outline uppercase tracking-wider mb-1">
                WhatsApp Live Dispatch
              </div>
              <div className="font-headline-md text-2xl font-bold text-on-surface group-hover:text-[#25D366] transition-colors">
                +971 55 577 5074
              </div>
              <p className="text-xs text-on-surface-variant mt-2">
                Share location pins, cargo photos, and receive driver details in real time.
              </p>
            </a>

            {/* Email / Corporate Retainers */}
            <a
              href="mailto:dispatch@pickupandrental.com"
              className="group p-6 rounded-2xl bg-surface-container border border-surface-container-high hover:border-secondary/40 transition-all shadow-lg block"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-label-mono text-secondary uppercase font-bold px-2.5 py-1 rounded bg-secondary/10">
                  Corporate Contracts
                </span>
                <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">
                  mail
                </span>
              </div>
              <div className="text-xs font-label-mono text-outline uppercase tracking-wider mb-1">
                B2B Enquiries
              </div>
              <div className="font-headline-md text-xl font-bold text-on-surface truncate group-hover:text-secondary transition-colors">
                dispatch@pickupandrental.com
              </div>
              <p className="text-xs text-on-surface-variant mt-2">
                Monthly retainers, multi-vehicle logistics, and VAT-compliant invoicing.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content & Intake Form Section */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Operating Guidelines */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-label-mono text-label-mono uppercase tracking-widest text-secondary font-semibold">
                Central Operations Desk
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
                How We Process Your Request
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                Every enquiry is handled by our central dispatch desk in Dubai. We match your vehicle tonnage requirements against traffic routes, building basement heights, and highway toll considerations to ensure timely delivery.
              </p>
            </div>

            {/* Central Dispatch Operations Photo */}
            <div className="relative h-56 w-full rounded-2xl overflow-hidden border border-surface-container-high shadow-xl group">
              <Image
                src="/images/contact/contact-dispatch.webp"
                alt="Central dispatch operations desk coordinating UAE commercial pickup transport fleet"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-4">
                <span className="text-xs font-label-mono text-secondary uppercase font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  Live Dispatch Control • All 7 Emirates
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high space-y-4">
              <h3 className="font-headline-sm text-base font-bold text-on-surface">
                Pre-Booking Recommendations:
              </h3>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                  <span><strong>Confirm Cargo Volume:</strong> Check whether a 1-ton pickup, 3-ton truck, or 7-ton carrier is required.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                  <span><strong>Check Height Limits:</strong> Confirm whether your destination requires parking under a 2.1m basement bar.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                  <span><strong>Developer Move Permits:</strong> Secure your building Move-In / Move-Out permit if required by community security.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high">
              <div className="text-xs font-label-mono text-secondary uppercase font-bold mb-2">Service-Area Network</div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Pickup &amp; Rental operates as a centralized road transport provider serving Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain, and Al Ain with dedicated mobile dispatch.
              </p>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7 bg-surface-container p-8 lg:p-10 rounded-2xl border border-surface-container-high shadow-xl">
            <div className="border-b border-surface-container-high pb-4 mb-6">
              <span className="text-xs font-label-mono uppercase text-secondary font-bold">
                Online Priority Intake
              </span>
              <h3 className="font-headline-md text-2xl font-bold text-on-surface mt-1">
                Send Transport Enquiry
              </h3>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
