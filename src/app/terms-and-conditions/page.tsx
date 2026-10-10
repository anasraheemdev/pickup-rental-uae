import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = constructMetadata({
  title: "Terms & Conditions of Transport | Pickup & Rental UAE",
  description:
    "Review the operational Terms and Conditions for Pickup & Rental UAE. Understand booking policies, permitted cargo, driver waiting allowances, toll treatments, and customer responsibilities across UAE road transport.",
  path: "/terms-and-conditions",
  keywords: ["terms and conditions Pickup & Rental", "UAE transport terms", "cargo moving conditions"]
});

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[{ name: "Terms & Conditions", item: "/terms-and-conditions" }]} />

      <section className="relative bg-background text-on-surface py-12 lg:py-16 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-secondary font-label-mono text-xs uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>Operational Conditions • UAE Federal Transport Law</span>
            </div>
            <h1 className="font-headline-xl text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
              Terms &amp; Conditions of Transport
            </h1>
            <p className="font-body-md text-sm text-on-surface-variant">
              Last Updated: February 2026 • Governed by the Commercial Transactions Law of the United Arab Emirates
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="max-w-3xl space-y-8 text-on-surface-variant font-body-md text-sm leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-headline-md text-xl font-bold text-on-surface">1. Scope of Services</h2>
            <p>
              Pickup &amp; Rental provides domestic road freight and pickup truck transportation services within the United Arab Emirates. Every vehicle is operated by a licensed, qualified commercial driver adhering to UAE RTA, ITC, and Federal Transport Authority mandates. We do not provide self-drive unverified vehicle rentals.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-headline-md text-xl font-bold text-on-surface">2. Booking, Quotations &amp; Tolls</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Fare Transparency:</strong> Quotations generated through our digital calculator or dispatch desk reflect distance, vehicle capacity base rates, selected helper crew, and applicable electronic highway tolls (Dubai Salik and Abu Dhabi Darb gates).</li>
              <li><strong>VAT:</strong> All commercial and private transportation services are subject to the standard 5% UAE Value Added Tax (VAT), clearly itemized on official tax invoices.</li>
              <li><strong>Waiting Time Allowance:</strong> Standard single-trip bookings include a complimentary 30-minute window for loading and a 30-minute window for unloading. Prolonged delays beyond this window may incur additional hourly standby charges.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-headline-md text-xl font-bold text-on-surface">3. Community Permits &amp; Gate Clearances</h2>
            <p>
              It is the customer&apos;s responsibility to secure necessary Move-In or Move-Out permits from master developers (e.g., Emaar, Nakheel, DAMAC, Aldar) or free zone authorities (JAFZA, DAFZA, KEZAD) prior to the driver&apos;s arrival. If entry to a property is denied by building security due to missing customer permits, standard mobilization fees will apply.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-headline-md text-xl font-bold text-on-surface">4. Prohibited &amp; Restricted Cargo</h2>
            <p>Under UAE Federal Transport Law, the following items cannot be transported on standard commercial pickups:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Hazardous chemicals, uncertified flammable gases, and explosive materials lacking Civil Defence transport permits.</li>
              <li>Illicit substances, unbonded contraband, or unregulated livestock.</li>
              <li>Loose unsecured gravel or liquid waste.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-headline-md text-xl font-bold text-on-surface">5. Cargo Handling &amp; Liability</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Our drivers carry commercial ratchets, weather tarpaulins, and moving blankets to secure cargo against transit shift and weather exposure.</li>
              <li>Customers must disclose fragile, delicate, or high-value items (such as unboxed artwork, precision electronics, or fine antiques) during booking so appropriate protective measures can be applied.</li>
              <li>Customers requesting &quot;Driver Only&quot; service are responsible for loading and unloading their cargo into and out of the vehicle bed safely.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-headline-md text-xl font-bold text-on-surface">6. Cancellations &amp; Modifications</h2>
            <p>
              Bookings may be cancelled or rescheduled free of charge up to 2 hours before the scheduled dispatch time. Cancellations requested after a driver has been mobilized to the pickup location may incur a partial mobilization fee.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-headline-md text-xl font-bold text-on-surface">7. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the federal laws of the United Arab Emirates and the local regulations of the relevant Emirate where transportation takes place.
            </p>
          </div>

          <div className="pt-6 border-t border-surface-container-high flex items-center justify-between">
            <Link href="/privacy-policy" className="text-secondary font-semibold hover:underline text-xs font-label-mono">
              ← Privacy Policy
            </Link>
            <Link href="/contact" className="text-secondary font-semibold hover:underline text-xs font-label-mono">
              Contact Dispatch Desk →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
