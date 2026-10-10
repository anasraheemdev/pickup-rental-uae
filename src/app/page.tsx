import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_URL } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import HeroInteractiveShowcase from "@/components/HeroInteractiveShowcase";

export const metadata = constructMetadata({
  title: "Pickup Truck Rental & UAE Road Transportation | Pickup & Rental",
  description:
    "Professional pickup truck rental and road transportation across Dubai, Sharjah, and Ajman. Licensed commercial drivers, upfront fares, and transparent toll inclusion.",
  path: "/",
  keywords: [
    "pickup rental UAE",
    "pickup truck rental Dubai",
    "commercial road transport UAE",
    "furniture transport Dubai",
    "1 ton pickup rental",
    "3 ton truck rental UAE",
    "goods transport UAE",
    "pickup rental Sharjah",
    "pickup rental Ajman"
  ]
});

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Pickup & Rental UAE",
        url: SITE_URL,
        description: "Pickup truck rental and commercial road transportation services across the United Arab Emirates.",
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/resources?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        name: "Pickup & Rental",
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.png`,
        telephone: "+971555775074",
        email: "dispatch@pickupandrental.com",
        sameAs: [
          "https://www.facebook.com/pickupandrental",
          "https://www.linkedin.com/company/pickup-and-rental"
        ],
        areaServed: [
          { "@type": "City", name: "Dubai" },
          { "@type": "City", name: "Sharjah" },
          { "@type": "City", name: "Ajman" }
        ]
      }
    ]
  };

  return (
    <div className="w-full">
      <JsonLd data={homeSchema} />
      <div className="flex flex-col w-full">
        {/*  SECTION 01: HERO (Deep Obsidian Theme)  */}
        <section className="relative bg-background text-on-surface overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20">
          {/* Ambient Lighting & Cybernetic Grid */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[380px] bg-secondary/15 blur-[130px] rounded-full pointer-events-none"></div>
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(251,188,43,0.18),transparent_75%)]"></div>
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60"></div>

          <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-center">
              {/*  Left Content Hierarchy  */}
              <div className="lg:col-span-7 flex flex-col items-start">
                {/* Glowing Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/35 text-secondary font-label-mono text-[10px] sm:text-xs tracking-wider uppercase mb-3.5 sm:mb-4 shadow-[0_0_24px_-4px_rgba(251,188,43,0.3)] backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                  </span>
                  <span className="font-semibold text-secondary">RTA Licensed Transport</span>
                  <span className="text-secondary/40">•</span>
                  <span className="text-on-surface-variant font-medium">Dubai • Sharjah • Ajman</span>
                </div>

                {/* Two-Tone Gradient Heading */}
                <h1 className="font-display text-[26px] sm:text-4xl lg:text-display text-on-surface font-extrabold tracking-tight mb-3 sm:mb-4 max-w-2xl leading-[1.16] sm:leading-[1.12]">
                  Pickup Truck Rental &amp;{" "}
                  <span className="bg-gradient-to-r from-secondary via-[#ffe89e] to-secondary bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(251,188,43,0.25)]">
                    Road Transport
                  </span>{" "}
                  Across the UAE
                </h1>

                {/* Refined Lead Description */}
                <p className="font-body-lead text-xs sm:text-base lg:text-body-lead text-on-surface-variant max-w-xl mb-4 sm:mb-5 leading-relaxed">
                  On-demand 1-ton, 3-ton, and 7-ton commercial pickups with professional licensed drivers. Guaranteed upfront fares, Salik tolls included, and rapid same-day dispatch across Dubai, Sharjah &amp; Ajman.
                </p>

                {/* Trust Highlights Checklist */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-5 sm:mb-7">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container/70 border border-surface-container-high text-[11px] sm:text-xs font-label-mono text-on-surface">
                    <span className="material-symbols-outlined text-[14px] text-secondary">check_circle</span>
                    <span>Upfront Rates from 150 AED</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container/70 border border-surface-container-high text-[11px] sm:text-xs font-label-mono text-on-surface">
                    <span className="material-symbols-outlined text-[14px] text-secondary">check_circle</span>
                    <span>Salik &amp; Darb Tolls Included</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container/70 border border-surface-container-high text-[11px] sm:text-xs font-label-mono text-on-surface">
                    <span className="material-symbols-outlined text-[14px] text-secondary">check_circle</span>
                    <span>Verified RTA Drivers</span>
                  </span>
                </div>

                {/*  Action CTAs  */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto mb-6 sm:mb-8">
                  <Link
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-secondary via-[#ffc634] to-secondary text-on-secondary font-label-lg text-xs sm:text-sm font-bold shadow-[0_8px_24px_-3px_rgba(251,188,43,0.4)] hover:shadow-[0_12px_32px_rgba(251,188,43,0.6)] hover:brightness-105 active:scale-[0.98] transition-all"
                    href="/request-quote"
                  >
                    <span>Request an Instant Quote</span>
                    <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
                  </Link>
                  <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3">
                    <Link
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-surface-container/80 backdrop-blur-md border border-surface-container-high hover:border-secondary/40 text-on-surface font-label-lg text-xs sm:text-sm font-semibold hover:bg-surface-container-high transition-colors"
                      href="/fleet"
                    >
                      <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-secondary">directions_car</span>
                      <span>Explore Fleet</span>
                    </Link>
                    <a
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/35 text-[#25D366] transition-all font-label-lg text-xs sm:text-sm font-semibold backdrop-blur-md shadow-sm"
                      href="https://wa.me/971555775074?text=Hello%20Pickup%20%26%20Rental%2C%20I%20would%20like%20to%20request%20a%20quote."
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[16px] sm:text-[18px]">chat</span>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/*  Glassmorphic Metrology Counter Cards (Desktop & Tablet)  */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3.5 pt-4 sm:pt-6 w-full max-w-lg border-t border-surface-container-high/40">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-surface-container-low/60 border border-surface-container-high/40 text-center sm:text-left backdrop-blur-sm">
                    <div className="flex items-center justify-center sm:justify-start gap-1 text-secondary mb-0.5">
                      <span className="material-symbols-outlined text-[14px]">bolt</span>
                      <span className="font-headline-md text-sm sm:text-base font-extrabold text-on-surface">45 min</span>
                    </div>
                    <div className="font-label-mono text-[9px] sm:text-[10px] text-on-surface-variant uppercase tracking-wider">Avg. Dispatch</div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-surface-container-low/60 border border-surface-container-high/40 text-center sm:text-left backdrop-blur-sm">
                    <div className="flex items-center justify-center sm:justify-start gap-1 text-secondary mb-0.5">
                      <span className="material-symbols-outlined text-[14px]">verified</span>
                      <span className="font-headline-md text-sm sm:text-base font-extrabold text-on-surface">100%</span>
                    </div>
                    <div className="font-label-mono text-[9px] sm:text-[10px] text-on-surface-variant uppercase tracking-wider">Licensed Drivers</div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-surface-container-low/60 border border-surface-container-high/40 text-center sm:text-left backdrop-blur-sm">
                    <div className="flex items-center justify-center sm:justify-start gap-1 text-secondary mb-0.5">
                      <span className="material-symbols-outlined text-[14px]">hub</span>
                      <span className="font-headline-md text-sm sm:text-base font-extrabold text-on-surface">3 / 3</span>
                    </div>
                    <div className="font-label-mono text-[9px] sm:text-[10px] text-on-surface-variant uppercase tracking-wider">Emirates Network</div>
                  </div>
                </div>
              </div>

              {/*  Right Column: Interactive Fleet Showcase  */}
              <div className="lg:col-span-5 relative w-full">
                <HeroInteractiveShowcase />
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 02: TRUST & CAPABILITY STRIP  */}
        <section className="w-full bg-surface-container py-4 sm:py-8 shadow-inner border-y border-surface-container-high/40">
          <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
              <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-3 rounded-xl bg-surface-container-low/40 sm:bg-transparent">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[18px] sm:text-[26px]">map</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-label-lg text-xs sm:text-label-lg font-bold text-on-surface leading-tight truncate sm:whitespace-normal">Tri-Emirate Express</h4>
                  <p className="font-label-mono text-[9px] sm:text-label-mono text-on-surface-variant truncate sm:whitespace-normal">Dubai • Sharjah • Ajman</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-3 rounded-xl bg-surface-container-low/40 sm:bg-transparent">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[18px] sm:text-[26px]">local_shipping</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-label-lg text-xs sm:text-label-lg font-bold text-on-surface leading-tight truncate sm:whitespace-normal">Diverse Fleet Classes</h4>
                  <p className="font-label-mono text-[9px] sm:text-label-mono text-on-surface-variant truncate sm:whitespace-normal">1T, 3T &amp; 7T Trucks</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-3 rounded-xl bg-surface-container-low/40 sm:bg-transparent">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[18px] sm:text-[26px]">inventory_2</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-label-lg text-xs sm:text-label-lg font-bold text-on-surface leading-tight truncate sm:whitespace-normal">All Road Cargo</h4>
                  <p className="font-label-mono text-[9px] sm:text-label-mono text-on-surface-variant truncate sm:whitespace-normal">Furniture, pallets, machinery</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-3 rounded-xl bg-surface-container-low/40 sm:bg-transparent">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[18px] sm:text-[26px]">bolt</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-label-lg text-xs sm:text-label-lg font-bold text-on-surface leading-tight truncate sm:whitespace-normal">Rapid Dispatch</h4>
                  <p className="font-label-mono text-[9px] sm:text-label-mono text-on-surface-variant truncate sm:whitespace-normal">Instant booking &amp; driver</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 03: SERVICES OVERVIEW (Clean Crisp Light Theme)  */}
        <section className="py-12 sm:py-16 lg:py-24 bg-[#f8fafc] text-slate-900 border-y border-slate-200/80">
          <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 lg:mb-14 gap-3 sm:gap-6">
              <div>
                <span className="font-label-mono text-[10px] sm:text-xs uppercase tracking-widest text-amber-600 font-bold">
                  Dedicated Transport Services
                </span>
                <h2 className="font-headline-xl text-xl sm:text-2xl lg:text-headline-xl font-extrabold text-slate-900 mt-1.5 sm:mt-2 tracking-tight">
                  Road Transportation Solutions for Every Cargo Requirement
                </h2>
              </div>
              <Link
                href="/services"
                className="font-label-lg text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 sm:gap-1.5 self-start md:self-auto"
              >
                <span>View All Services</span>
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {/* Card 1 */}
              <div className="bg-white p-3.5 sm:p-5 lg:p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-200 hover:border-amber-400 hover:shadow-[0_12px_32px_rgba(251,188,43,0.18)] flex flex-col justify-between group transition-all duration-300">
                <div>
                  <div className="relative w-full h-28 sm:h-36 lg:h-44 rounded-xl overflow-hidden mb-3 sm:mb-4 bg-slate-100">
                    <Image
                      src="/images/services/pickup-truck-rental.webp"
                      alt="Pickup truck rental service in Dubai UAE"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-50 border border-amber-200/80 font-label-mono text-[10px] sm:text-xs text-amber-700 uppercase font-bold">
                      Agile Transport
                    </span>
                    <span className="material-symbols-outlined text-lg sm:text-2xl text-amber-500">directions_car</span>
                  </div>
                  <h3 className="font-headline-md text-sm sm:text-lg lg:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2 line-clamp-2">
                    <Link href="/services/pickup-truck-rental" className="hover:text-amber-600 transition-colors">
                      Pickup Truck Rental
                    </Link>
                  </h3>
                  <p className="hidden sm:block font-body-md text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-4">
                    Available with licensed commercial drivers. Ideal for urban deliveries, single furniture items, retail store restocks, and rapid transport across residential zones.
                  </p>
                  <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 py-2.5 my-2 bg-slate-50 border border-slate-200/60 rounded-lg sm:rounded-xl px-2.5 sm:px-3 text-[10px] sm:text-xs font-label-mono">
                    <div>
                      <span className="block text-slate-500 text-[9px] sm:text-[10px]">Bed Dimensions</span>
                      <span className="font-bold text-slate-900">Up to 2.4 Meters</span>
                    </div>
                    <div>
                      <span className="block text-slate-500 text-[9px] sm:text-[10px]">Standard Payload</span>
                      <span className="font-bold text-slate-900">1,000 – 1,200 KG</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2.5 sm:pt-4 mt-2 sm:mt-0 flex items-center justify-between gap-1 border-t border-slate-100">
                  <span className="font-label-lg text-[10px] sm:text-xs font-bold text-slate-900">From 150 AED</span>
                  <Link
                    className="inline-flex items-center gap-0.5 sm:gap-1 font-label-lg text-[11px] sm:text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform"
                    href="/services/pickup-truck-rental"
                  >
                    <span>Details</span>
                    <span className="material-symbols-outlined text-[14px] sm:text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-3.5 sm:p-5 lg:p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-200 hover:border-amber-400 hover:shadow-[0_12px_32px_rgba(251,188,43,0.18)] flex flex-col justify-between group transition-all duration-300">
                <div>
                  <div className="relative w-full h-28 sm:h-36 lg:h-44 rounded-xl overflow-hidden mb-3 sm:mb-4 bg-slate-100">
                    <Image
                      src="/images/services/furniture-transportation.webp"
                      alt="Furniture transportation service in UAE"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-50 border border-amber-200/80 font-label-mono text-[10px] sm:text-xs text-amber-700 uppercase font-bold">
                      Care Assured
                    </span>
                    <span className="material-symbols-outlined text-lg sm:text-2xl text-amber-500">weekend</span>
                  </div>
                  <h3 className="font-headline-md text-sm sm:text-lg lg:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2 line-clamp-2">
                    <Link href="/services/furniture-transportation" className="hover:text-amber-600 transition-colors">
                      Furniture Transportation
                    </Link>
                  </h3>
                  <p className="hidden sm:block font-body-md text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-4">
                    Padded protective moving blankets, ratcheting tension tie-downs, and optional helper assistance for apartment and villa relocations across the UAE.
                  </p>
                  <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 py-2.5 my-2 bg-slate-50 border border-slate-200/60 rounded-lg sm:rounded-xl px-2.5 sm:px-3 text-[10px] sm:text-xs font-label-mono">
                    <div>
                      <span className="block text-slate-500 text-[9px] sm:text-[10px]">Protection</span>
                      <span className="font-bold text-slate-900">Blankets &amp; Straps</span>
                    </div>
                    <div>
                      <span className="block text-slate-500 text-[9px] sm:text-[10px]">Helpers</span>
                      <span className="font-bold text-slate-900">1 or 2 Helpers</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2.5 sm:pt-4 mt-2 sm:mt-0 flex items-center justify-between gap-1 border-t border-slate-100">
                  <span className="font-label-lg text-[10px] sm:text-xs font-bold text-slate-900">Enclosed &amp; Open</span>
                  <Link
                    className="inline-flex items-center gap-0.5 sm:gap-1 font-label-lg text-[11px] sm:text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform"
                    href="/services/furniture-transportation"
                  >
                    <span>Details</span>
                    <span className="material-symbols-outlined text-[14px] sm:text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-3.5 sm:p-5 lg:p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-200 hover:border-amber-400 hover:shadow-[0_12px_32px_rgba(251,188,43,0.18)] flex flex-col justify-between group transition-all duration-300">
                <div>
                  <div className="relative w-full h-28 sm:h-36 lg:h-44 rounded-xl overflow-hidden mb-3 sm:mb-4 bg-slate-100">
                    <Image
                      src="/images/services/commercial-transportation.webp"
                      alt="Commercial transportation fleet in UAE"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-50 border border-amber-200/80 font-label-mono text-[10px] sm:text-xs text-amber-700 uppercase font-bold">
                      B2B Scheduled
                    </span>
                    <span className="material-symbols-outlined text-lg sm:text-2xl text-amber-500">domain</span>
                  </div>
                  <h3 className="font-headline-md text-sm sm:text-lg lg:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2 line-clamp-2">
                    <Link href="/services/commercial-transportation" className="hover:text-amber-600 transition-colors">
                      Commercial &amp; Retainers
                    </Link>
                  </h3>
                  <p className="hidden sm:block font-body-md text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-4">
                    Dedicated road runs connecting free zones, wholesale markets, and retail centers. Serving JAFZA, KEZAD, and industrial zones with SLA documentation.
                  </p>
                  <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 py-2.5 my-2 bg-slate-50 border border-slate-200/60 rounded-lg sm:rounded-xl px-2.5 sm:px-3 text-[10px] sm:text-xs font-label-mono">
                    <div>
                      <span className="block text-slate-500 text-[9px] sm:text-[10px]">Pallet Capacity</span>
                      <span className="font-bold text-slate-900">2 to 6 Pallets</span>
                    </div>
                    <div>
                      <span className="block text-slate-500 text-[9px] sm:text-[10px]">Billing Model</span>
                      <span className="font-bold text-slate-900">VAT Invoiced</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2.5 sm:pt-4 mt-2 sm:mt-0 flex items-center justify-between gap-1 border-t border-slate-100">
                  <span className="font-label-lg text-[10px] sm:text-xs font-bold text-slate-900">B2B Retainers</span>
                  <Link
                    className="inline-flex items-center gap-0.5 sm:gap-1 font-label-lg text-[11px] sm:text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform"
                    href="/services/commercial-transportation"
                  >
                    <span>Details</span>
                    <span className="material-symbols-outlined text-[14px] sm:text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-3.5 sm:p-5 lg:p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-200 hover:border-amber-400 hover:shadow-[0_12px_32px_rgba(251,188,43,0.18)] flex flex-col justify-between group transition-all duration-300">
                <div>
                  <div className="relative w-full h-28 sm:h-36 lg:h-44 rounded-xl overflow-hidden mb-3 sm:mb-4 bg-slate-100">
                    <Image
                      src="/images/services/goods-transportation.webp"
                      alt="Commercial goods transportation in UAE"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-50 border border-amber-200/80 font-label-mono text-[10px] sm:text-xs text-amber-700 uppercase font-bold">
                      Freight &amp; Cargo
                    </span>
                    <span className="material-symbols-outlined text-lg sm:text-2xl text-amber-500">inventory_2</span>
                  </div>
                  <h3 className="font-headline-md text-sm sm:text-lg lg:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2 line-clamp-2">
                    <Link href="/services/goods-transportation" className="hover:text-amber-600 transition-colors">
                      Goods Transportation
                    </Link>
                  </h3>
                  <p className="hidden sm:block font-body-md text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-4">
                    Point-to-point road delivery for commercial inventory, palletized cargo, machinery parts, and retail restocks across all UAE arterial highways.
                  </p>
                  <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 py-2.5 my-2 bg-slate-50 border border-slate-200/60 rounded-lg sm:rounded-xl px-2.5 sm:px-3 text-[10px] sm:text-xs font-label-mono">
                    <div>
                      <span className="block text-slate-500 text-[9px] sm:text-[10px]">Max Payload</span>
                      <span className="font-bold text-slate-900">Up to 7.0 Tons</span>
                    </div>
                    <div>
                      <span className="block text-slate-500 text-[9px] sm:text-[10px]">Fleet Classes</span>
                      <span className="font-bold text-slate-900">1T, 3T, 7T</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2.5 sm:pt-4 mt-2 sm:mt-0 flex items-center justify-between gap-1 border-t border-slate-100">
                  <span className="font-label-lg text-[10px] sm:text-xs font-bold text-slate-900">Direct Transit</span>
                  <Link
                    className="inline-flex items-center gap-0.5 sm:gap-1 font-label-lg text-[11px] sm:text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform"
                    href="/services/goods-transportation"
                  >
                    <span>Details</span>
                    <span className="material-symbols-outlined text-[14px] sm:text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 04: FEATURED FLEET  */}
        <section className="py-10 sm:py-16 lg:py-24 bg-background text-on-surface" id="fleet-section">
          <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 lg:mb-16 gap-3 sm:gap-6">
              <div>
                <span className="font-label-mono text-[10px] sm:text-label-mono uppercase tracking-widest text-secondary font-semibold">
                  Commercial Fleet Categories
                </span>
                <h2 className="font-headline-xl text-xl sm:text-2xl lg:text-headline-xl font-bold text-on-surface mt-1.5 sm:mt-2 tracking-tight">
                  Verified Vehicles for UAE Road Transportation
                </h2>
              </div>
              <Link
                href="/fleet"
                className="font-label-lg text-xs sm:text-label-lg font-bold text-secondary hover:underline inline-flex items-center gap-1 sm:gap-1.5 self-start md:self-auto"
              >
                <span>Complete Fleet Overview</span>
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8">
              {/* Fleet Item 1 */}
              <div className="bg-surface-container rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between shadow-xl hover:border-secondary/40 border border-surface-container-high transition-all group">
                <div>
                  <div className="relative w-full h-36 sm:h-44 rounded-lg sm:rounded-xl overflow-hidden mb-3.5 sm:mb-5 bg-surface-container-low">
                    <Image
                      src="/images/fleet/1-ton-pickup.webp"
                      alt="1 Ton Pickup Truck for rent in UAE"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded bg-surface-container-highest font-label-mono text-[10px] sm:text-label-mono text-secondary font-bold">
                      1 TON CLASS
                    </span>
                    <span className="text-on-surface-variant font-label-mono text-[10px] sm:text-label-mono">Hilux / D-Max</span>
                  </div>
                  <h3 className="font-headline-md text-lg sm:text-2xl font-bold text-on-surface mb-1.5 sm:mb-2">
                    <Link href="/fleet/1-ton-pickup" className="hover:text-secondary transition-colors">
                      1 Ton Pickup Truck
                    </Link>
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mb-4 sm:mb-6 leading-relaxed">
                    Compact agility for urban corridors, basement deliveries with 2.1m clearance, and quick residential transfers.
                  </p>
                  <div className="space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-surface-container-low mb-4 sm:mb-6 text-[11px] sm:text-xs font-label-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Payload Limit:</span>
                      <strong className="text-on-surface">1,000 kg</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Cargo Volume:</span>
                      <strong className="text-on-surface">~4.5 m³</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Basement Height:</span>
                      <strong className="text-success font-bold">&lt; 1.95m (Basement Pass)</strong>
                    </div>
                  </div>
                </div>
                <div className="pt-2 sm:pt-4 flex flex-col gap-2.5 sm:gap-3">
                  <Link
                    className="w-full py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl bg-secondary text-on-secondary font-label-lg text-xs sm:text-label-lg font-bold text-center hover:bg-secondary-fixed transition-colors"
                    href="/request-quote"
                  >
                    Calculate 1-Ton Fare
                  </Link>
                  <Link
                    className="text-center font-label-mono text-[11px] sm:text-xs text-secondary hover:underline"
                    href="/fleet/1-ton-pickup"
                  >
                    View 1-Ton Specifications →
                  </Link>
                </div>
              </div>

              {/* Fleet Item 2 */}
              <div className="bg-surface-container rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between shadow-2xl relative border border-secondary/40 bg-gradient-to-b from-surface-container to-surface-container-high">
                <div className="absolute -top-3 right-4 sm:right-6 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-secondary text-on-secondary font-label-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase shadow-md z-10">
                  Most Popular
                </div>
                <div>
                  <div className="relative w-full h-36 sm:h-44 rounded-lg sm:rounded-xl overflow-hidden mb-3.5 sm:mb-5 bg-surface-container-low">
                    <Image
                      src="/images/fleet/3-ton-pickup.webp"
                      alt="3 Ton Commercial Truck for transport in UAE"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded bg-secondary/15 font-label-mono text-[10px] sm:text-label-mono text-secondary font-bold">
                      3 TON CLASS
                    </span>
                    <span className="text-on-surface-variant font-label-mono text-[10px] sm:text-label-mono">Canter / NPR</span>
                  </div>
                  <h3 className="font-headline-md text-lg sm:text-2xl font-bold text-on-surface mb-1.5 sm:mb-2">
                    <Link href="/fleet/3-ton-pickup" className="hover:text-secondary transition-colors">
                      3 Ton Commercial Truck
                    </Link>
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mb-4 sm:mb-6 leading-relaxed">
                    The regional workhorse for 1–2 bedroom apartment moves, pallet transfers (up to 6 pallets), and inter-emirate commerce.
                  </p>
                  <div className="space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-surface-container-low mb-4 sm:mb-6 text-[11px] sm:text-xs font-label-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Payload Limit:</span>
                      <strong className="text-on-surface">3,000 kg</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Cargo Volume:</span>
                      <strong className="text-on-surface">~16.5 m³</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Pallet Fit:</span>
                      <strong className="text-secondary font-bold">4 to 6 Euro/ISO Pallets</strong>
                    </div>
                  </div>
                </div>
                <div className="pt-2 sm:pt-4 flex flex-col gap-2.5 sm:gap-3">
                  <Link
                    className="w-full py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl bg-secondary text-on-secondary font-label-lg text-xs sm:text-label-lg font-bold text-center hover:bg-secondary-fixed transition-colors shadow-lg"
                    href="/request-quote"
                  >
                    Calculate 3-Ton Fare
                  </Link>
                  <Link
                    className="text-center font-label-mono text-[11px] sm:text-xs text-secondary hover:underline"
                    href="/fleet/3-ton-pickup"
                  >
                    View 3-Ton Specifications →
                  </Link>
                </div>
              </div>

              {/* Fleet Item 3 */}
              <div className="bg-surface-container rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between shadow-xl hover:border-secondary/40 border border-surface-container-high transition-all group">
                <div>
                  <div className="relative w-full h-36 sm:h-44 rounded-lg sm:rounded-xl overflow-hidden mb-3.5 sm:mb-5 bg-surface-container-low">
                    <Image
                      src="/images/fleet/7-ton-pickup.webp"
                      alt="7 Ton Heavy Carrier Flatbed Truck in UAE"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded bg-surface-container-highest font-label-mono text-[10px] sm:text-label-mono text-secondary font-bold">
                      7 TON CLASS
                    </span>
                    <span className="text-on-surface-variant font-label-mono text-[10px] sm:text-label-mono">Hino 500 / UD</span>
                  </div>
                  <h3 className="font-headline-md text-lg sm:text-2xl font-bold text-on-surface mb-1.5 sm:mb-2">
                    <Link href="/fleet/7-ton-pickup" className="hover:text-secondary transition-colors">
                      7 Ton Heavy Carrier
                    </Link>
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mb-4 sm:mb-6 leading-relaxed">
                    Heavy cargo capacity for construction projects, steel fabrication, industrial machinery, and wholesale warehouse distribution.
                  </p>
                  <div className="space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-surface-container-low mb-4 sm:mb-6 text-[11px] sm:text-xs font-label-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Payload Limit:</span>
                      <strong className="text-on-surface">7,000 kg</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Cargo Volume:</span>
                      <strong className="text-on-surface">~34.0 m³</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Pallet Fit:</span>
                      <strong className="text-on-surface font-bold">10 to 12 Pallets</strong>
                    </div>
                  </div>
                </div>
                <div className="pt-2 sm:pt-4 flex flex-col gap-2.5 sm:gap-3">
                  <Link
                    className="w-full py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl bg-surface-container-highest text-on-surface font-label-lg text-xs sm:text-label-lg font-bold text-center hover:bg-surface-variant transition-colors"
                    href="/request-quote"
                  >
                    Calculate 7-Ton Fare
                  </Link>
                  <Link
                    className="text-center font-label-mono text-[11px] sm:text-xs text-secondary hover:underline"
                    href="/fleet/7-ton-pickup"
                  >
                    View 7-Ton Specifications →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 05: UAE COVERAGE & SERVICE AREAS  */}
        {/*  SECTION 05: UAE COVERAGE & SERVICE AREAS (Crisp White Atlas Theme)  */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white text-slate-900 border-t border-slate-200/80">
          <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 lg:mb-14 gap-3 sm:gap-6">
              <div>
                <span className="font-label-mono text-[10px] sm:text-xs uppercase tracking-widest text-amber-600 font-bold">
                  Active Service-Area Network
                </span>
                <h2 className="font-headline-xl text-xl sm:text-2xl lg:text-headline-xl font-extrabold text-slate-900 mt-1.5 sm:mt-2 tracking-tight">
                  Pickup Transport Across Dubai, Sharjah &amp; Ajman
                </h2>
              </div>
              <Link
                href="/locations"
                className="font-label-lg text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 sm:gap-1.5 self-start md:self-auto"
              >
                <span>Explore All Corridors</span>
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {[
                { name: "Dubai", path: "/locations/dubai", desc: "Al Quoz, Business Bay, Marina, JAFZA, Deira, Downtown", badge: "Primary Hub" },
                { name: "Sharjah", path: "/locations/sharjah", desc: "Industrial Areas 1-18, SAIF Zone, Al Nahda, Muwaileh", badge: "Industrial Hub" },
                { name: "Ajman", path: "/locations/ajman", desc: "Ajman Free Zone, Jurf Industrial 1-3, Al Nuaimiya", badge: "Commercial Hub" },
                { name: "Inter-Emirate Express", path: "/locations", desc: "Daily arterial shuttle runs via E11, E311 & E611 highways", badge: "Corridors" }
              ].map((loc) => (
                <Link
                  key={loc.name}
                  href={loc.path}
                  className="p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-amber-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <span className="text-[10px] sm:text-xs font-label-mono text-amber-700 uppercase font-bold block mb-1 sm:mb-2">
                      {loc.badge}
                    </span>
                    <h3 className="font-headline-md text-base sm:text-lg lg:text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-1 sm:mb-2 line-clamp-2">
                      {loc.name === "Inter-Emirate Express" ? loc.name : `Pickup Transport ${loc.name}`}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {loc.desc}
                    </p>
                  </div>
                  <div className="pt-2.5 sm:pt-4 mt-2.5 sm:mt-4 border-t border-slate-200/60 flex items-center justify-between text-[10px] sm:text-xs font-label-mono text-amber-600 font-semibold">
                    <span>Route Details</span>
                    <span className="material-symbols-outlined text-[14px] sm:text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/*  SECTION 06: TOPICAL GUIDES & EDITORIAL RESOURCES (Soft Light Theme)  */}
        <section className="py-12 sm:py-16 lg:py-24 bg-[#f8fafc] text-slate-900 border-t border-slate-200/80">
          <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 lg:mb-14 gap-3 sm:gap-6">
              <div>
                <span className="font-label-mono text-[10px] sm:text-xs uppercase tracking-widest text-amber-600 font-bold">
                  UAE Transport Guides
                </span>
                <h2 className="font-headline-xl text-xl sm:text-2xl lg:text-headline-xl font-extrabold text-slate-900 mt-1.5 sm:mt-2 tracking-tight">
                  Operational Logistics Manuals &amp; Sizing Specs
                </h2>
              </div>
              <Link
                href="/resources"
                className="font-label-lg text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 sm:gap-1.5 self-start md:self-auto"
              >
                <span>Browse All Guides</span>
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              {/* Guide 1 */}
              <article className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative w-full h-36 sm:h-44 rounded-lg sm:rounded-xl overflow-hidden mb-3.5 sm:mb-5 bg-slate-100">
                    <Image
                      src="/images/blog/blog-1ton-vs-3ton.webp"
                      alt="1 Ton vs 3 Ton Pickup Truck comparison in UAE"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="font-label-mono text-[10px] sm:text-xs text-amber-700 font-bold uppercase mb-2 sm:mb-3">
                    Vehicle Selection Analysis
                  </div>
                  <h3 className="font-headline-md text-base sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 leading-snug">
                    <Link href="/resources/1-ton-vs-3-ton-pickup" className="hover:text-amber-600 transition-colors">
                      1 Ton vs 3 Ton Pickup: Which Should You Choose?
                    </Link>
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6 leading-relaxed line-clamp-2 sm:line-clamp-none">
                    Compare basement height clearances (sub-2.1m), cargo volumes (4.5 CBM vs 16.5 CBM), and pallet limits before booking across Dubai and Abu Dhabi.
                  </p>
                </div>
                <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-label-mono">
                  <span className="text-slate-500">6 Min Read</span>
                  <Link href="/resources/1-ton-vs-3-ton-pickup" className="text-amber-600 font-bold hover:underline">
                    Read Guide →
                  </Link>
                </div>
              </article>

              {/* Guide 2 */}
              <article className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative w-full h-36 sm:h-44 rounded-lg sm:rounded-xl overflow-hidden mb-3.5 sm:mb-5 bg-slate-100">
                    <Image
                      src="/images/blog/blog-pickup-rental-guide.webp"
                      alt="UAE Pickup Truck Rental Guide"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="font-label-mono text-[10px] sm:text-xs text-amber-700 font-bold uppercase mb-2 sm:mb-3">
                    Consumer &amp; Corporate Handbook
                  </div>
                  <h3 className="font-headline-md text-base sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 leading-snug">
                    <Link href="/resources/pickup-truck-rental-guide-uae" className="hover:text-amber-600 transition-colors">
                      Pickup Truck Rental Guide for UAE Customers
                    </Link>
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6 leading-relaxed line-clamp-2 sm:line-clamp-none">
                    Understand RTA commercial driver regulations, highway toll rules (Salik and Darb), and transparent fare calculations across the Emirates.
                  </p>
                </div>
                <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-label-mono">
                  <span className="text-slate-500">8 Min Read</span>
                  <Link href="/resources/pickup-truck-rental-guide-uae" className="text-amber-600 font-bold hover:underline">
                    Read Guide →
                  </Link>
                </div>
              </article>

              {/* Guide 3 */}
              <article className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative w-full h-36 sm:h-44 rounded-lg sm:rounded-xl overflow-hidden mb-3.5 sm:mb-5 bg-slate-100">
                    <Image
                      src="/images/blog/blog-moving-furniture.webp"
                      alt="Moving furniture safely with pickup truck in Dubai"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="font-label-mono text-[10px] sm:text-xs text-amber-700 font-bold uppercase mb-2 sm:mb-3">
                    Residential Relocation Manual
                  </div>
                  <h3 className="font-headline-md text-base sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 leading-snug">
                    <Link href="/resources/how-to-move-furniture-safely-dubai" className="hover:text-amber-600 transition-colors">
                      How to Move Furniture Safely in Dubai
                    </Link>
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6 leading-relaxed line-clamp-2 sm:line-clamp-none">
                    Master developer move permits (Emaar, Nakheel), service elevator bookings, heat protection, and strapping techniques.
                  </p>
                </div>
                <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-label-mono">
                  <span className="text-slate-500">7 Min Read</span>
                  <Link href="/resources/how-to-move-furniture-safely-dubai" className="text-amber-600 font-bold hover:underline">
                    Read Guide →
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/*  SECTION 07: FAQS ACCORDION (Crisp White Theme)  */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white text-slate-900 border-t border-slate-200/80">
          <div className="max-w-[1000px] mx-auto px-margin lg:px-margin-desktop">
            <div className="text-center mb-6 sm:mb-10 lg:mb-14">
              <span className="font-label-mono text-[10px] sm:text-xs uppercase tracking-widest text-amber-600 font-bold">
                Transparent Operations
              </span>
              <h2 className="font-headline-xl text-xl sm:text-2xl lg:text-headline-xl font-extrabold text-slate-900 mt-1.5 sm:mt-2 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <details className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 hover:border-slate-300 group cursor-pointer transition-all" open>
                <summary className="font-headline-md text-sm sm:text-lg font-bold text-slate-900 flex items-center justify-between list-none gap-2">
                  <span>How are pickup rental rates calculated in the UAE?</span>
                  <span className="material-symbols-outlined text-xl sm:text-2xl text-amber-600 transition-transform group-open:rotate-180 shrink-0">
                    expand_more
                  </span>
                </summary>
                <div className="font-body-md text-xs sm:text-sm text-slate-600 pt-2.5 sm:pt-4 leading-relaxed">
                  Fares are calculated transparently based on vehicle tonnage (1-ton, 3-ton, or 7-ton), actual highway distance, loading helper options, and applicable highway tolls (Salik in Dubai and Darb in Abu Dhabi). No surprise surcharges.
                </div>
              </details>

              <details className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 hover:border-slate-300 group cursor-pointer transition-all">
                <summary className="font-headline-md text-sm sm:text-lg font-bold text-slate-900 flex items-center justify-between list-none gap-2">
                  <span>Do rentals include a licensed commercial driver?</span>
                  <span className="material-symbols-outlined text-xl sm:text-2xl text-amber-600 transition-transform group-open:rotate-180 shrink-0">
                    expand_more
                  </span>
                </summary>
                <div className="font-body-md text-xs sm:text-sm text-slate-600 pt-2.5 sm:pt-4 leading-relaxed">
                  Yes. All vehicles are dispatched with licensed, background-checked commercial drivers who handle highway navigation, toll gates, and compliant parking. Uniformed helpers can be added for loading assistance.
                </div>
              </details>

              <details className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 hover:border-slate-300 group cursor-pointer transition-all">
                <summary className="font-headline-md text-sm sm:text-lg font-bold text-slate-900 flex items-center justify-between list-none gap-2">
                  <span>Can your trucks transport cargo between different Emirates?</span>
                  <span className="material-symbols-outlined text-xl sm:text-2xl text-amber-600 transition-transform group-open:rotate-180 shrink-0">
                    expand_more
                  </span>
                </summary>
                <div className="font-body-md text-xs sm:text-sm text-slate-600 pt-2.5 sm:pt-4 leading-relaxed">
                  Yes. Inter-emirate road transportation is one of our primary services. We operate daily routes connecting Dubai, Sharjah, and Ajman across major arterial highway corridors (E11, E311, E611).
                </div>
              </details>

              <details className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 hover:border-slate-300 group cursor-pointer transition-all">
                <summary className="font-headline-md text-sm sm:text-lg font-bold text-slate-900 flex items-center justify-between list-none gap-2">
                  <span>How quickly can a pickup truck be dispatched?</span>
                  <span className="material-symbols-outlined text-xl sm:text-2xl text-amber-600 transition-transform group-open:rotate-180 shrink-0">
                    expand_more
                  </span>
                </summary>
                <div className="font-body-md text-xs sm:text-sm text-slate-600 pt-2.5 sm:pt-4 leading-relaxed">
                  Within central metropolitan and commercial zones (across Dubai, Sharjah, and Ajman), average dispatch response is under 45 minutes for urgent same-day bookings.
                </div>
              </details>
            </div>

            <div className="text-center mt-6 sm:mt-8">
              <Link href="/faq" className="font-label-mono text-xs text-amber-600 font-bold hover:underline">
                View All Frequently Asked Questions →
              </Link>
            </div>
          </div>
        </section>

        {/*  SECTION 08: FINAL CONVERSION CTA  */}
        <section className="py-10 sm:py-16 lg:py-24 bg-background text-on-surface relative overflow-hidden border-t border-surface-container-high/40">
          <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop relative z-10">
            <div className="bg-surface-container rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-16 relative overflow-hidden shadow-2xl border border-surface-container-high">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded bg-secondary/15 text-secondary font-label-mono text-[10px] sm:text-label-mono uppercase font-bold mb-3 sm:mb-4">
                    <span>National Road Transportation Desk</span>
                  </div>
                  <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-headline-xl font-extrabold text-on-surface mb-3 sm:mb-6 tracking-tight leading-tight">
                    Move Your Cargo with Total Confidence
                  </h2>
                  <p className="font-body-lead text-xs sm:text-base lg:text-body-lead text-on-surface-variant max-w-2xl mb-6 sm:mb-8 leading-relaxed">
                    Reserve verified pickup truck rental and road freight with transparent upfront rates and licensed commercial drivers across the UAE.
                  </p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6">
                    <Link
                      className="w-full sm:w-auto text-center px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-xs sm:text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
                      href="/request-quote"
                    >
                      Instant Fare Calculator
                    </Link>
                    <div className="flex items-center justify-center sm:justify-start gap-3 py-1">
                      <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
                        <span className="material-symbols-outlined text-xl sm:text-2xl">support_agent</span>
                      </span>
                      <div>
                        <div className="font-label-mono text-[10px] sm:text-xs text-on-surface-variant uppercase">
                          Direct Dispatch Desk
                        </div>
                        <a
                          className="font-headline-md text-base sm:text-headline-md font-bold text-on-surface hover:text-secondary transition-colors"
                          href="tel:+971555775074"
                        >
                          055 577 5074
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-surface-container-lowest p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-inner space-y-2.5 sm:space-y-4 border border-surface-container-high">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="material-symbols-outlined text-secondary text-xl sm:text-2xl">check_circle</span>
                    <span className="font-label-lg text-xs sm:text-label-lg font-bold text-on-surface">Upfront Fixed Pricing</span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="material-symbols-outlined text-secondary text-xl sm:text-2xl">check_circle</span>
                    <span className="font-label-lg text-xs sm:text-label-lg font-bold text-on-surface">Salik &amp; Darb Toll Accounted</span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="material-symbols-outlined text-secondary text-xl sm:text-2xl">check_circle</span>
                    <span className="font-label-lg text-xs sm:text-label-lg font-bold text-on-surface">Licensed Commercial Drivers</span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="material-symbols-outlined text-secondary text-xl sm:text-2xl">check_circle</span>
                    <span className="font-label-lg text-xs sm:text-label-lg font-bold text-on-surface">24/7 Dubai Central Dispatch</span>
                  </div>
                  <div className="pt-2 text-[10px] sm:text-xs font-label-mono text-outline">
                    Compliant with UAE Federal Transport &amp; RTA Standards.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
