import React from "react";
import Link from "next/link";
import { PHONE_NUMBER, PHONE_DISPLAY, WHATSAPP_NUMBER } from "@/lib/seo";

import Image from "next/image";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  whatsAppMessage?: string;
}

export default function CtaSection({
  title = "Ready to Transport Goods Across the UAE?",
  subtitle = "Direct road transportation with verified pickup trucks. Available for immediate dispatch or scheduled transport across Dubai, Abu Dhabi, and Northern Emirates.",
  badge = "Express UAE Dispatch Desk",
  whatsAppMessage = "Hello, I would like to request a quote for pickup truck transportation."
}: CtaSectionProps) {
  const encodedWa = encodeURIComponent(whatsAppMessage);

  return (
    <section className="relative w-full py-16 lg:py-20 border-y border-surface-container-high/60 my-12 lg:my-16 overflow-hidden">
      {/* Background Image with Dark Obsidian Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta/cta-pickup-road.webp"
          alt="Pickup truck on UAE highway transit corridor"
          fill
          className="object-cover opacity-20 filter saturate-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-secondary font-label-mono text-xs tracking-wider uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span>{badge}</span>
        </div>
        <h2 className="font-headline-lg text-2xl lg:text-3xl text-on-surface font-bold max-w-2xl mx-auto mb-3">
          {title}
        </h2>
        <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-6 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/request-quote"
            className="px-6 py-3.5 rounded-xl bg-secondary text-on-secondary font-label-lg text-sm font-bold shadow-[0_8px_24px_-3px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <span>Request a Quote</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="px-6 py-3.5 rounded-xl bg-surface-container text-on-surface font-label-lg text-sm font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30 inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
            <span>{PHONE_DISPLAY}</span>
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedWa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366]/25 transition-all font-label-lg text-sm font-semibold inline-flex items-center gap-2 border border-[#25D366]/30"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>WhatsApp Dispatch</span>
          </a>
        </div>
      </div>
    </section>
  );
}
