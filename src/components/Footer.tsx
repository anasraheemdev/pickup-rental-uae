"use client";

import React from "react";
import Link from "next/link";
import { PHONE_NUMBER, PHONE_DISPLAY, WHATSAPP_NUMBER } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface-variant font-body-md border-t border-surface-container/60 mt-16 lg:mt-24">
      <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop pt-12 lg:pt-16 pb-10">
        {/* Banner Quick Conversion CTA */}
        <div className="bg-surface-container p-6 lg:p-10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 border border-surface-container-high shadow-lg">
          <div className="max-w-xl space-y-2">
            <span className="font-label-mono text-xs uppercase text-secondary tracking-widest font-semibold block">
              UAE Road Transportation Network • Dubai • Sharjah • Ajman
            </span>
            <h3 className="font-headline-lg text-2xl lg:text-3xl font-bold text-on-surface">
              Need Reliable Pickup Transport Today?
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
              Professional pickup truck rental and road freight for furniture, palletized goods, residential moves, and commercial delivery with licensed drivers.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/request-quote"
              className="px-6 py-3.5 rounded-xl bg-secondary text-on-secondary font-label-lg text-sm font-bold hover:bg-secondary-fixed transition-all shadow-[0_8px_24px_-3px_rgba(251,188,43,0.3)] hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="px-6 py-3.5 rounded-xl bg-surface-container-high text-on-surface font-label-lg text-sm font-semibold hover:bg-surface-variant transition-colors border border-outline-variant/30"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* 5-Column Clean Navigation Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-surface-container-high/40">
          {/* Column 1: Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[15px] font-bold uppercase tracking-wider text-on-surface">
              Transport Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-on-surface-variant">
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors font-medium text-on-surface">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link href="/services/pickup-truck-rental" className="hover:text-secondary transition-colors">
                  Pickup Truck Rental
                </Link>
              </li>
              <li>
                <Link href="/services/goods-transportation" className="hover:text-secondary transition-colors">
                  Goods Transportation
                </Link>
              </li>
              <li>
                <Link href="/services/furniture-transportation" className="hover:text-secondary transition-colors">
                  Furniture Transportation
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-transportation" className="hover:text-secondary transition-colors">
                  Commercial Transportation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Fleet */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[15px] font-bold uppercase tracking-wider text-on-surface">
              Commercial Fleet
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-on-surface-variant">
              <li>
                <Link href="/fleet" className="hover:text-secondary transition-colors font-medium text-on-surface">
                  Fleet Specifications
                </Link>
              </li>
              <li>
                <Link href="/fleet/1-ton-pickup" className="hover:text-secondary transition-colors">
                  1 Ton Pickup Truck
                </Link>
              </li>
              <li>
                <Link href="/fleet/3-ton-pickup" className="hover:text-secondary transition-colors">
                  3 Ton Commercial Truck
                </Link>
              </li>
              <li>
                <Link href="/fleet/7-ton-pickup" className="hover:text-secondary transition-colors">
                  7 Ton Heavy Carrier
                </Link>
              </li>
              <li>
                <Link href="/resources/1-ton-vs-3-ton-pickup" className="hover:text-secondary transition-colors text-xs text-secondary font-semibold">
                  1 Ton vs 3 Ton Guide →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[15px] font-bold uppercase tracking-wider text-on-surface">
              Active Service Areas
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-on-surface-variant">
              <li>
                <Link href="/locations" className="hover:text-secondary transition-colors font-medium text-on-surface">
                  All Service Areas
                </Link>
              </li>
              <li>
                <Link href="/locations/dubai" className="hover:text-secondary transition-colors">
                  Pickup Rental Dubai
                </Link>
              </li>
              <li>
                <Link href="/locations/sharjah" className="hover:text-secondary transition-colors">
                  Pickup Rental Sharjah
                </Link>
              </li>
              <li>
                <Link href="/locations/ajman" className="hover:text-secondary transition-colors">
                  Pickup Rental Ajman
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-secondary transition-colors text-xs text-secondary font-semibold">
                  Dubai ⇄ Sharjah ⇄ Ajman Corridors →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Guides & Knowledge Base */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[15px] font-bold uppercase tracking-wider text-on-surface">
              Logistics Guides
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-on-surface-variant">
              <li>
                <Link href="/resources" className="hover:text-secondary transition-colors font-medium text-on-surface">
                  Knowledge Hub
                </Link>
              </li>
              <li>
                <Link href="/resources/pickup-truck-rental-guide-uae" className="hover:text-secondary transition-colors">
                  UAE Pickup Rental Guide
                </Link>
              </li>
              <li>
                <Link href="/resources/how-to-move-furniture-safely-dubai" className="hover:text-secondary transition-colors">
                  Moving Furniture in Dubai
                </Link>
              </li>
              <li>
                <Link href="/resources/what-size-pickup-for-moving" className="hover:text-secondary transition-colors">
                  Pickup Size for Moving
                </Link>
              </li>
              <li>
                <Link href="/resources/commercial-goods-transport-guide" className="hover:text-secondary transition-colors">
                  Commercial Goods Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-secondary transition-colors font-semibold text-secondary">
                  Transport FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Company & Dispatch */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[15px] font-bold uppercase tracking-wider text-on-surface">
              Company &amp; Dispatch
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-on-surface-variant">
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About Pickup &amp; Rental
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Central Dispatch Desk
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className="hover:text-secondary transition-colors text-secondary font-semibold">
                  Instant Fare Calculator
                </Link>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="hover:text-secondary transition-colors flex items-center gap-1.5 pt-1"
                >
                  <span className="material-symbols-outlined text-[15px] text-secondary">call</span>
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I would like to book a pickup truck.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors flex items-center gap-1.5 text-[#25D366]"
                >
                  <span className="material-symbols-outlined text-[15px]">chat</span>
                  <span>WhatsApp 24/7 Desk</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal, Sitemap & Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant/80">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span>© 2026 Pickup &amp; Rental. All rights reserved across the UAE.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-label-mono text-xs">
            <Link href="/privacy-policy" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-secondary transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-secondary transition-colors">
              HTML Sitemap
            </Link>
            <Link href="/faq" className="hover:text-secondary transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
