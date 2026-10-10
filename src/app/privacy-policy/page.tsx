import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = constructMetadata({
  title: "Privacy Policy | Pickup & Rental UAE",
  description:
    "Read the Privacy Policy for Pickup & Rental UAE. Understand how customer data, phone numbers, and transport delivery addresses are collected, used, and secured across our UAE road transport operations.",
  path: "/privacy-policy",
  keywords: ["privacy policy Pickup & Rental", "data protection UAE", "customer privacy"]
});

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[{ name: "Privacy Policy", item: "/privacy-policy" }]} />

      <section className="relative bg-background text-on-surface py-12 lg:py-16 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-secondary font-label-mono text-xs uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>Regulatory Governance • UAE Compliance</span>
            </div>
            <h1 className="font-headline-xl text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="font-body-md text-sm text-on-surface-variant">
              Last Updated: February 2026 • Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection (PDPL)
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="max-w-3xl space-y-8 text-on-surface-variant font-body-md text-sm leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-headline-md text-xl font-bold text-on-surface">1. Introduction</h2>
            <p>
              Pickup &amp; Rental (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates domestic pickup truck rental and commercial road transportation services across the United Arab Emirates. We are committed to protecting the privacy, confidentiality, and security of all personal and commercial data entrusted to us by customers, corporate retainers, and website visitors.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-headline-md text-xl font-bold text-on-surface">2. Information We Collect</h2>
            <p>
              To process quote calculations, execute trip dispatches, and comply with UAE transport authority regulations, we collect the following categories of information:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Contact Information:</strong> Full name, telephone/mobile number, email address, and company trade name where applicable.</li>
              <li><strong>Route &amp; Location Details:</strong> Specific pickup address, destination tower/warehouse gate, intermediate transit stops, and delivery receiver contact names.</li>
              <li><strong>Cargo Details:</strong> Descriptions of goods (furniture, palletized stock, equipment) and vehicle specifications necessary to ensure legal axle weight compliance.</li>
              <li><strong>Invoicing Information:</strong> Corporate VAT registration numbers (TRN) and billing addresses required under UAE Federal Tax Authority (FTA) regulations.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-headline-md text-xl font-bold text-on-surface">3. How Information is Used</h2>
            <p>We use your information strictly for legitimate operational purposes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Assigning licensed commercial drivers and vehicles to your requested route.</li>
              <li>Providing real-time dispatch updates via SMS, telephone, and WhatsApp.</li>
              <li>Issuing electronic delivery receipts and compliant 5% UAE VAT tax invoices.</li>
              <li>Facilitating security gate passes into residential master communities (e.g., Emaar, Nakheel, DAMAC) and free trade zones (e.g., JAFZA, KEZAD) upon client request.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-headline-md text-xl font-bold text-on-surface">4. Data Sharing &amp; Third Parties</h2>
            <p>
              We do not sell, rent, or trade customer personal data to third-party marketing entities under any circumstances. Information is shared only with:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Assigned operational commercial drivers solely for the duration of the active delivery trip.</li>
              <li>Authorized UAE government or municipal security gate authorities when legally required to secure entry into bonded ports or private residential developments.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-headline-md text-xl font-bold text-on-surface">5. Data Retention &amp; Security</h2>
            <p>
              Trip manifests and invoicing records are stored securely in encrypted systems conforming to UAE statutory tax retention requirements. We apply technical and organizational measures to prevent unauthorized access, loss, or alteration of your records.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-headline-md text-xl font-bold text-on-surface">6. Your Rights &amp; Contact</h2>
            <p>
              Under UAE data protection regulations, you have the right to request access to, correction of, or deletion of your personal contact records. For any privacy-related enquiries, contact our central dispatch administration at:
            </p>
            <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high text-xs font-label-mono space-y-1">
              <div><strong>Entity:</strong> Pickup &amp; Rental Dispatch Office</div>
              <div><strong>Email:</strong> dispatch@pickupandrental.com</div>
              <div><strong>Hotline:</strong> 055 577 5074 (+971 55 577 5074)</div>
              <div><strong>Service Territory:</strong> Dubai, Sharjah, Ajman (United Arab Emirates)</div>
            </div>
          </div>

          <div className="pt-6 border-t border-surface-container-high flex items-center justify-between">
            <Link href="/" className="text-secondary font-semibold hover:underline text-xs font-label-mono">
              ← Return to Homepage
            </Link>
            <Link href="/terms-and-conditions" className="text-secondary font-semibold hover:underline text-xs font-label-mono">
              Terms of Transport →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
