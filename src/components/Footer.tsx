"use client";

import React from "react";
import Link from "next/link";
import { PHONE_NUMBER, PHONE_DISPLAY, WHATSAPP_NUMBER } from "@/lib/seo";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface-variant font-body-md border-t border-surface-container/60 mt-10 md:mt-16 lg:mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-margin lg:px-margin-desktop pt-8 sm:pt-12 lg:pt-16 pb-8 lg:pb-10">
        {/* Banner Quick Conversion CTA */}
        <div className="bg-surface-container p-4 sm:p-6 lg:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 mb-8 md:mb-12 border border-surface-container-high shadow-lg">
          <div className="max-w-xl space-y-1 sm:space-y-2">
            <span className="font-label-mono text-[10px] sm:text-xs uppercase text-secondary tracking-wider font-semibold block">
              Dubai • Sharjah • Ajman Transport Network
            </span>
            <h3 className="font-headline-lg text-lg sm:text-2xl lg:text-3xl font-bold text-on-surface">
              Need Reliable Pickup Transport Today?
            </h3>
            <p className="hidden sm:block font-body-md text-sm text-on-surface-variant leading-relaxed">
              Professional pickup truck rental and road freight for furniture, palletized goods, residential moves, and commercial delivery with licensed drivers.
            </p>
          </div>
          <div className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3">
            <Link
              href="/request-quote"
              className="py-2.5 px-3 sm:px-6 sm:py-3.5 rounded-xl bg-secondary text-on-secondary font-label-lg text-xs sm:text-sm font-bold hover:bg-secondary-fixed transition-all text-center shadow-[0_4px_16px_-2px_rgba(251,188,43,0.3)] hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="py-2.5 px-3 sm:px-6 sm:py-3.5 rounded-xl bg-surface-container-high text-on-surface font-label-lg text-xs sm:text-sm font-semibold hover:bg-surface-variant transition-colors text-center border border-outline-variant/30"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Navigation Matrix: 2x2 Clean Grid on Mobile, 5 Columns on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-6 sm:gap-8 pb-8 sm:pb-12 border-b border-surface-container-high/40">
          {/* Column 1: Services */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <h4 className="text-xs sm:text-[15px] font-bold uppercase tracking-wider text-on-surface">
              Services
            </h4>
            <ul className="flex flex-col gap-1.5 sm:gap-2.5 text-xs sm:text-sm text-on-surface-variant">
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors font-medium text-on-surface">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services/pickup-truck-rental" className="hover:text-secondary transition-colors">
                  Pickup Truck Rental
                </Link>
              </li>
              <li>
                <Link href="/services/goods-transportation" className="hover:text-secondary transition-colors">
                  Goods Transport
                </Link>
              </li>
              <li>
                <Link href="/services/furniture-transportation" className="hover:text-secondary transition-colors">
                  Furniture Transport
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-transportation" className="hover:text-secondary transition-colors">
                  Commercial Fleet
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Locations (Promoted to Top Row on Mobile for Quick Discovery) */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <h4 className="text-xs sm:text-[15px] font-bold uppercase tracking-wider text-on-surface">
              Service Areas
            </h4>
            <ul className="flex flex-col gap-1.5 sm:gap-2.5 text-xs sm:text-sm text-on-surface-variant">
              <li>
                <Link href="/locations" className="hover:text-secondary transition-colors font-medium text-on-surface">
                  All Locations
                </Link>
              </li>
              <li>
                <Link href="/locations/dubai" className="hover:text-secondary transition-colors">
                  Dubai Pickups
                </Link>
              </li>
              <li>
                <Link href="/locations/sharjah" className="hover:text-secondary transition-colors">
                  Sharjah Pickups
                </Link>
              </li>
              <li>
                <Link href="/locations/ajman" className="hover:text-secondary transition-colors">
                  Ajman Pickups
                </Link>
              </li>
              <li className="hidden md:block">
                <Link href="/locations" className="hover:text-secondary transition-colors text-xs text-secondary font-semibold">
                  Inter-Emirate Routes →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Fleet */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <h4 className="text-xs sm:text-[15px] font-bold uppercase tracking-wider text-on-surface">
              Our Fleet
            </h4>
            <ul className="flex flex-col gap-1.5 sm:gap-2.5 text-xs sm:text-sm text-on-surface-variant">
              <li>
                <Link href="/fleet" className="hover:text-secondary transition-colors font-medium text-on-surface">
                  Fleet Overview
                </Link>
              </li>
              <li>
                <Link href="/fleet/1-ton-pickup" className="hover:text-secondary transition-colors">
                  1 Ton Pickup
                </Link>
              </li>
              <li>
                <Link href="/fleet/3-ton-pickup" className="hover:text-secondary transition-colors">
                  3 Ton Pickup
                </Link>
              </li>
              <li>
                <Link href="/fleet/7-ton-pickup" className="hover:text-secondary transition-colors">
                  7 Ton Heavy Truck
                </Link>
              </li>
              <li className="hidden md:block">
                <Link href="/resources/1-ton-vs-3-ton-pickup" className="hover:text-secondary transition-colors text-xs text-secondary font-semibold">
                  1 Ton vs 3 Ton Guide →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Guides & Knowledge Base (Hidden on Mobile to save vertical space; preserved on desktop for SEO) */}
          <div className="hidden md:flex flex-col gap-3">
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
          <div className="flex flex-col gap-2 sm:gap-3">
            <h4 className="text-xs sm:text-[15px] font-bold uppercase tracking-wider text-on-surface">
              Contact Desk
            </h4>
            <ul className="flex flex-col gap-1.5 sm:gap-2.5 text-xs sm:text-sm text-on-surface-variant">
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Dispatch Desk
                </Link>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="hover:text-secondary transition-colors flex items-center gap-1.5 pt-0.5"
                >
                  <span className="material-symbols-outlined text-[14px] sm:text-[15px] text-secondary">call</span>
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I would like to book a pickup truck.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors flex items-center gap-1.5 text-[#25D366] font-medium"
                >
                  <span className="material-symbols-outlined text-[14px] sm:text-[15px]">chat</span>
                  <span>WhatsApp 24/7</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal, Sitemap & Copyright Row */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-xs text-on-surface-variant/80">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <Link href="/" aria-label="Pickup & Rental">
              <Logo size="sm" />
            </Link>
            <div className="flex items-center gap-2 text-[10.5px] sm:text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary hidden sm:inline-block"></span>
              <span>© 2026 Pickup &amp; Rental. Dubai • Sharjah • Ajman.</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-label-mono text-[10.5px] sm:text-xs">
            <Link href="/privacy-policy" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-surface-container-highest sm:hidden">•</span>
            <Link href="/terms-and-conditions" className="hover:text-secondary transition-colors">
              Terms
            </Link>
            <span className="text-surface-container-highest sm:hidden">•</span>
            <Link href="/sitemap" className="hover:text-secondary transition-colors">
              Sitemap
            </Link>
            <span className="text-surface-container-highest sm:hidden">•</span>
            <Link href="/faq" className="hover:text-secondary transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
