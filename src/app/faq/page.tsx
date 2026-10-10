import React from "react";
import Link from "next/link";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Frequently Asked Questions | UAE Pickup Rental & Transport | Pickup & Rental",
  description:
    "Find answers to frequently asked questions about pickup truck rental, road transportation, fares, Salik tolls, basement clearances, building permits, and inter-emirate transit across Dubai and the UAE.",
  path: "/faq",
  keywords: [
    "pickup rental FAQ UAE",
    "pickup truck hire questions Dubai",
    "Salik toll truck transport FAQ",
    "how to book pickup truck UAE",
    "pickup rental cost questions"
  ]
});

const allFaqCategories = [
  {
    category: "Booking & Dispatch Operations",
    faqs: [
      {
        question: "How quickly can a pickup truck be dispatched to my location?",
        answer:
          "For express requests within Dubai, Sharjah, or central Abu Dhabi, a licensed commercial truck and driver can typically be on-site within 45 minutes of booking confirmation. For scheduled bookings, drivers arrive 10 to 15 minutes before your reserved loading window."
      },
      {
        question: "Do rentals include a professional commercial driver?",
        answer:
          "Yes. All our vehicles are dispatched with licensed, background-checked commercial drivers who hold valid UAE commercial driving licenses, conform to RTA/ITC transport laws, and know highway truck regulations."
      },
      {
        question: "Can I book extra helpers to assist with lifting heavy items?",
        answer:
          "Yes. When requesting a quote or booking via WhatsApp, you can choose between Driver Only, Driver + 1 Helper, or Driver + 2 Helpers for sofas, heavy wardrobes, or commercial crates."
      },
      {
        question: "What information is needed before confirming a booking?",
        answer:
          "We need your pickup address/tower name, destination address, required vehicle size (1-ton, 3-ton, or 7-ton), approximate description of cargo, preferred date and time, and whether service elevator access is required."
      }
    ]
  },
  {
    category: "Vehicle Fleet & Building Access",
    faqs: [
      {
        question: "Can your trucks enter residential basement parking lots in Dubai?",
        answer:
          "Our 1-ton open and closed pickups have a vehicle clearance height of approximately 1.85m to 1.95m, allowing them to enter standard residential basement car parks (such as in Downtown Dubai, Marina, and DIFC) that have 2.0m to 2.2m clearance bars. 3-ton and 7-ton trucks require ground-level loading bays."
      },
      {
        question: "What is the difference in payload between a 1-ton and 3-ton truck?",
        answer:
          "A 1-ton pickup carries up to 1,000 kg and approximately 4.5 cubic meters of cargo (ideal for studios or single items). A 3-ton commercial truck carries up to 3,000 kg and 14 to 18 cubic meters of cargo (ideal for 1–2 bedroom apartments and up to 6 pallets)."
      },
      {
        question: "Are your trucks equipped with hydraulic tail lifts?",
        answer:
          "Yes, select 3-ton and 7-ton vehicles in our fleet feature heavy-duty 1,000 kg rated hydraulic tail lifts for ground-level pallet and heavy machinery loading."
      }
    ]
  },
  {
    category: "Pricing, Tolls & Payments",
    faqs: [
      {
        question: "Are Salik tolls and Darb tolls included in the quote?",
        answer:
          "Yes. Our upfront fare calculation transparently accounts for highway toll gates (Dubai Salik and Abu Dhabi Darb) along your designated travel route. There are no hidden surcharge surprises."
      },
      {
        question: "What payment methods are accepted?",
        answer:
          "We accept cash upon completion of delivery, credit/debit card, bank transfer, and formal monthly corporate invoicing for commercial retainer clients."
      },
      {
        question: "Do you issue official 5% UAE VAT tax invoices?",
        answer:
          "Yes. Full Federal Tax Authority (FTA) compliant VAT tax invoices are generated for all commercial and private bookings upon request."
      }
    ]
  },
  {
    category: "Regulations, Free Zones & Permits",
    faqs: [
      {
        question: "Do I need a Move-In / Move-Out permit for my building?",
        answer:
          "Yes. Major master communities (Emaar, Nakheel, DAMAC, etc.) require an electronic permit before security guards will raise the loading barrier. We advise obtaining your permit 24 to 48 hours in advance."
      },
      {
        question: "Can your drivers deliver into JAFZA, KEZAD, and airport cargo villages?",
        answer:
          "Yes. Our drivers hold valid Emirates IDs, and vehicles carry up-to-date commercial Mulkiya registration cards required to process DP World E-Tokens, port gate passes, and free zone access."
      },
      {
        question: "Are there highway truck curfew hours in the UAE?",
        answer:
          "Yes. Heavy commercial vehicles are restricted on central urban arteries like Sheikh Zayed Road (E11) during peak morning (06:30–08:30) and evening (17:30–20:00) hours. Our dispatchers route trips via E311 and E611 to maintain scheduled delivery timelines."
      }
    ]
  }
];

export default function MasterFaqPage() {
  const flatFaqs = allFaqCategories.flatMap((c) => c.faqs);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: flatFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <div className="w-full">
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[{ name: "Frequently Asked Questions", item: "/faq" }]} />

      {/* Hero Header */}
      <section className="relative bg-background text-on-surface py-16 lg:py-24 border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-label-mono uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>Comprehensive Help Center • UAE Transport Authority</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight mb-6">
              Frequently Asked Questions About Pickup Rental &amp; Road Transport
            </h1>
            <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
              Find clear, verified answers regarding vehicle sizing, basement parking clearances, highway toll calculations, developer move permits, and booking procedures across the UAE.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/request-quote"
                className="px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
              >
                Instant Fare Calculator
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
              >
                Contact Dispatch Desk →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categorized FAQs Section */}
      <section className="py-16 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop space-y-16">
        {allFaqCategories.map((group, idx) => (
          <div key={idx} className="space-y-6">
            <div className="border-b border-surface-container-high pb-3">
              <span className="text-xs font-label-mono uppercase text-secondary font-semibold">
                Section {idx + 1}
              </span>
              <h2 className="font-headline-lg text-2xl font-bold text-on-surface mt-1">
                {group.category}
              </h2>
            </div>

            <div className="space-y-4">
              {group.faqs.map((faq, fIdx) => (
                <details
                  key={fIdx}
                  className="group rounded-2xl bg-surface-container border border-surface-container-high p-6 transition-all duration-200 open:border-secondary/40 shadow-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between font-headline-md text-lg font-semibold text-on-surface list-none">
                    <span>{faq.question}</span>
                    <span className="material-symbols-outlined text-secondary transition-transform duration-200 group-open:rotate-180 ml-4 shrink-0">
                      expand_more
                    </span>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-surface-container-high/60 font-body-md text-body-md text-on-surface-variant leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      <CtaSection
        title="Have a Question Not Listed Here?"
        subtitle="Speak directly with our 24/7 central dispatch desk in Dubai for immediate advice and custom trip rates."
        whatsAppMessage="Hello, I have a specific question about your pickup rental services."
      />
    </div>
  );
}
