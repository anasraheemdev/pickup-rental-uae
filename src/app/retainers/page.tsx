"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RetainersPage() {
  useEffect(() => {
    const form = document.getElementById('retainerForm');
    const modal = document.getElementById('formSuccessModal');

    if (form && modal) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      });
    }

    const modalClose = modal?.querySelector('button');
    if (modalClose && modal) {
      modalClose.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      });
    }
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col w-full">
{/*  Top Ambient Telemetry / Status Marquee  */}
<section className="w-full bg-surface-container-lowest text-on-surface-variant py-2.5 px-margin lg:px-margin-desktop">
<div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-y-2 font-label-mono text-label-mono">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container-high text-secondary font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
          ENTERPRISE DESK ONLINE
        </span>
<span className="text-on-surface-variant font-medium">B2B CONTRACT DISPATCH SLA: &lt; 30 MIN REPLACEMENT</span>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant">
<span>RTA COMMERCIAL CARRIER PERMIT #9482-DXB</span>
<span className="hidden sm:inline text-outline-variant">•</span>
<span className="hidden sm:inline text-secondary">ISO 9001:2015 CERTIFIED FLEET</span>
</div>
</div>
</section>
{/*  Executive Hero Section  */}
<section className="relative w-full bg-surface-container-lowest overflow-hidden py-space-xl lg:py-24">
{/*  Subtle Architectural Ambient Glow  */}
<div className="absolute -top-40 right-0 w-[580px] h-[580px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none"></div>
<div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] bg-surface-bright/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
{/*  Hero Copy  */}
<div className="lg:col-span-7 flex flex-col gap-space-md">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high w-fit">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-mono text-label-mono uppercase tracking-widest text-secondary font-semibold">Contract Logistics &amp; Dedicated Fleet Outsourcing</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface leading-[1.08] tracking-tight">
            Dedicated Fleet Retainers for <span className="text-secondary">Enterprise Logistics.</span>
</h1>
<p className="font-body-lead text-body-lead text-on-surface-variant max-w-2xl mt-space-xs">
            Outsource your delivery operations with guaranteed vehicle availability, dedicated drivers, and fixed monthly operational contracts across Dubai, Sharjah, and Ajman.
          </p>
<div className="flex flex-wrap items-center gap-space-md pt-space-sm">
<a className="px-space-lg py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.25)] hover:bg-secondary-fixed transition-all flex items-center gap-2 group" href="#consultation">
<span>Initiate Corporate Proposal</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
<a className="px-space-lg py-4 rounded-xl bg-surface-container-high text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-variant transition-colors flex items-center gap-2" href="tel:+971555775074">
<span className="material-symbols-outlined text-secondary text-[20px]">headset_mic</span>
<span>055 577 5074 (B2B Desk)</span>
</a>
</div>
{/*  Quick Telemetry Badges  */}
<div className="grid grid-cols-3 gap-space-md pt-space-lg mt-space-sm bg-surface-container-low/60 rounded-xl p-space-md">
<div>
<div className="font-headline-md text-headline-md font-bold text-on-surface">99.84%</div>
<div className="font-label-mono text-label-mono text-on-surface-variant uppercase mt-0.5">SLA Fleet On-Time</div>
</div>
<div>
<div className="font-headline-md text-headline-md font-bold text-secondary">60 Min</div>
<div className="font-label-mono text-label-mono text-on-surface-variant uppercase mt-0.5">Guaranteed Backup Swap</div>
</div>
<div>
<div className="font-headline-md text-headline-md font-bold text-on-surface">0 AED</div>
<div className="font-label-mono text-label-mono text-on-surface-variant uppercase mt-0.5">Depreciation Risk</div>
</div>
</div>
</div>
{/*  Hero Primary Visual Panel  */}
<div className="lg:col-span-5 relative">
<div className="relative rounded-xl overflow-hidden bg-surface-container shadow-2xl h-[460px]">
<Image className="object-cover" fill priority sizes="(max-width: 1024px) 100vw, 42vw" alt="Corporate commercial pickup fleet in UAE business district ready for dedicated business retainers" src="/images/services/commercial-transportation.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
{/*  Live Operational HUD Overlay  */}
<div className="absolute bottom-4 left-4 right-4 p-space-md rounded-lg bg-surface-container-lowest/90 backdrop-blur-xl">
<div className="flex items-center justify-between font-label-mono text-label-mono mb-2">
<span className="text-secondary flex items-center gap-1.5 font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  DISPATCH CONSOLE #DXB-882
                </span>
<span className="text-on-surface-variant">DIFC / BUSINESS BAY HUB</span>
</div>
<div className="flex items-center justify-between text-on-surface text-label-lg font-label-lg">
<span className="font-bold">Ford Ranger &amp; Dedicated Driver</span>
<span className="text-secondary font-mono">100% ALLOCATED</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mt-2.5 overflow-hidden">
<div className="bg-secondary h-full rounded-full w-[84%]"></div>
</div>
<div className="flex justify-between items-center mt-2 font-label-mono text-label-mono text-on-surface-variant">
<span>Monthly Run Target: 260 Hrs</span>
<span>Active Duty: 218 Hrs</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Financial & CapEx Relief Teaser Banner  */}
<section className="w-full bg-surface py-space-lg">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="bg-surface-container p-space-lg lg:p-space-xl rounded-xl flex flex-col lg:flex-row items-center justify-between gap-space-lg shadow-lg">
<div className="flex items-center gap-space-md">
<div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-secondary text-[32px]">account_balance</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Convert CapEx to 100% Tax-Deductible OpEx</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Zero vehicle acquisition capital, no chassis bank facilities, zero balance-sheet liability, and fully deductible UAE corporate tax operational expense.</p>
</div>
</div>
<div className="flex items-center gap-space-md flex-shrink-0">
<a className="px-space-md py-3 rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-variant transition-colors" href="#retainer-tiers">
            Compare Tiers
          </a>
<a className="px-space-md py-3 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-bold hover:bg-secondary-fixed transition-colors" href="#consultation">
            Request Contract Term Sheet
          </a>
</div>
</div>
</div>
</section>
{/*  B2B Commercial Retainer Tiers Section  */}
<section className="w-full bg-surface-dim py-space-xl lg:py-24" id="retainer-tiers">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
{/*  Section Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
<div className="max-w-2xl">
<span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">Tiered Enterprise Engagement Models</span>
<h2 className="font-headline-xl text-headline-xl text-on-surface mt-space-xs leading-tight">
            Engineered for Precision Logistics &amp; Uninterrupted Continuity.
          </h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Whether you need flexible on-demand corporate billing or an autonomous fleet clad in your company livery, select the tier that anchors your growth.
        </p>
</div>
{/*  Tiers Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-stretch">
{/*  Tier 1: On-Demand Commercial Account  */}
<div className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-md relative hover:-translate-y-1 transition-transform duration-300">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="px-2.5 py-1 rounded bg-surface-container-high font-label-mono text-label-mono text-on-surface-variant font-medium">TIER 01 / FLEXIBLE</span>
<span className="material-symbols-outlined text-outline">speed</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-on-surface">On-Demand Commercial Account</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Ideal for enterprises with fluctuating weekly delivery volumes requiring verified priority pickups without fixed driver commitments.</p>
<div className="mt-space-lg pt-space-md bg-surface-container-low rounded-lg p-space-md">
<div className="font-label-mono text-label-mono text-secondary uppercase font-semibold">Billing Structure</div>
<div className="text-on-surface font-headline-md text-headline-md font-bold mt-1">Pay-As-You-Go</div>
<div className="font-label-mono text-label-mono text-on-surface-variant mt-1">30-Day Corporate Net Terms (Subject to Credit Assessment)</div>
</div>
<ul className="mt-space-lg space-y-3 font-body-md text-body-md text-on-surface-variant">
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
<span>Priority dispatch queue over retail customer bookings.</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
<span>Consolidated monthly UAE VAT-compliant single statement invoice.</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
<span>Access to all vehicle classes (1 Ton, 3 Ton, Chiller, Open Bed).</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
<span>Online business portal with proof-of-delivery download.</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
<span>No minimum monthly spend or cancellation penalty.</span>
</li>
</ul>
</div>
<div className="pt-space-xl mt-space-lg">
<a className="w-full block text-center py-3.5 rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg font-bold hover:bg-surface-variant transition-colors" href="#consultation">
              Open Corporate Account
            </a>
</div>
</div>
{/*  Tier 2: Dedicated Daily Vehicle Lease (Featured)  */}
<div className="bg-surface-container-high rounded-xl p-space-lg flex flex-col justify-between shadow-2xl relative hover:-translate-y-1 transition-transform duration-300">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full font-label-mono text-label-mono font-bold uppercase tracking-wider shadow-md">
            Most Popular for Mid-Market
          </div>
<div>
<div className="flex items-center justify-between mb-space-sm pt-2">
<span className="px-2.5 py-1 rounded bg-secondary/15 font-label-mono text-label-mono text-secondary font-bold">TIER 02 / DEDICATED</span>
<span className="material-symbols-outlined text-secondary">local_shipping</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-on-surface">Dedicated Daily Vehicle Lease</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Your own dedicated vehicle and uniformed driver operating exclusively on your scheduled distribution routes daily.</p>
<div className="mt-space-lg pt-space-md bg-surface-container-lowest rounded-lg p-space-md">
<div className="font-label-mono text-label-mono text-secondary uppercase font-semibold">Monthly Retainer from</div>
<div className="text-on-surface font-headline-md text-headline-md font-bold mt-1">AED 5,800 <span className="font-normal text-on-surface-variant text-label-lg">/ vehicle / mo</span></div>
<div className="font-label-mono text-label-mono text-on-surface-variant mt-1">Choice of 8-Hour or 12-Hour daily shifts (26 days/mo)</div>
</div>
<ul className="mt-space-lg space-y-3 font-body-md text-body-md text-on-surface-variant">
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
<span>Assigned 1 Ton or 3 Ton pickup with permanent certified driver.</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
<span>Custom corporate magnet or full vehicle wrap branding options.</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
<span>Guaranteed immediate identical vehicle swap during periodic servicing.</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
<span>All Salik, comprehensive fleet insurance &amp; RTA permits covered.</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
<span>Fixed predictable monthly cost with zero surprise maintenance.</span>
</li>
</ul>
</div>
<div className="pt-space-xl mt-space-lg">
<a className="w-full block text-center py-3.5 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-colors" href="#consultation">
              Reserve Dedicated Vehicle
            </a>
</div>
</div>
{/*  Tier 3: Full Enterprise Logistics Retainer  */}
<div className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-md relative hover:-translate-y-1 transition-transform duration-300">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="px-2.5 py-1 rounded bg-surface-container-high font-label-mono text-label-mono text-on-surface-variant font-medium">TIER 03 / MULTI-FLEET</span>
<span className="material-symbols-outlined text-secondary">hub</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-on-surface">Full Enterprise Logistics Retainer</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Comprehensive outsourced fleet department for high-volume distributors, 3PL aggregators, and national contractors.</p>
<div className="mt-space-lg pt-space-md bg-surface-container-low rounded-lg p-space-md">
<div className="font-label-mono text-label-mono text-secondary uppercase font-semibold">Custom SLA Architecture</div>
<div className="text-on-surface font-headline-md text-headline-md font-bold mt-1">Multi-Truck Fleet</div>
<div className="font-label-mono text-label-mono text-on-surface-variant mt-1">Bespoke SLA contract with volume rebate matrix</div>
</div>
<ul className="mt-space-lg space-y-3 font-body-md text-body-md text-on-surface-variant">
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
<span>Dedicated fleet of 3 to 25+ vehicles (Pickups, Box Trucks, Chillers).</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
<span>Dedicated 24/7 key account manager and on-site dispatcher option.</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
<span>Strict contractual SLA: &lt; 30-minute replacement guarantee across UAE.</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
<span>Direct REST API and webhook integration into ERP / Shopify / WMS.</span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
<span>Complete driver employment, visas, gratuity, and accommodation absorbed.</span>
</li>
</ul>
</div>
<div className="pt-space-xl mt-space-lg">
<a className="w-full block text-center py-3.5 rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg font-bold hover:bg-surface-variant transition-colors" href="#consultation">
              Request Enterprise SLA Brief
            </a>
</div>
</div>
</div>
{/*  Retainer Fleet Showcase Visual using IMAGE_7 context  */}
<div className="mt-space-xl rounded-xl overflow-hidden bg-surface-container shadow-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 items-center">
<div className="lg:col-span-7 h-full relative min-h-[340px] lg:min-h-[400px]">
<Image className="object-cover" fill sizes="(max-width: 1024px) 100vw, 58vw" alt="Commercial logistics center yard in UAE with commercial box trucks and pickup trucks parked in staging bays" src="/images/about/about-fleet.webp"/>
</div>
<div className="lg:col-span-5 p-space-lg lg:p-space-xl flex flex-col justify-center">
<span className="font-label-mono text-label-mono uppercase text-secondary font-semibold">Ready For Deployment</span>
<h4 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs">Scalable Fleet on Reserve at Dubai Industrial Logistics Hubs</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
              Our staging depots in Al Quoz, Dubai South (DWC), and Sharjah Industrial Zone keep 60+ commercial vehicles fueled, maintained, and ready for instantaneous deployment within 2 hours of SLA signature.
            </p>
<div className="flex items-center gap-space-lg mt-space-md pt-space-sm">
<div>
<span className="font-headline-md text-headline-md font-bold text-on-surface">150+</span>
<p className="font-label-mono text-label-mono text-on-surface-variant">Active Retainer Vehicles</p>
</div>
<div className="w-px h-10 bg-surface-variant"></div>
<div>
<span className="font-headline-md text-headline-md font-bold text-secondary">42</span>
<p className="font-label-mono text-label-mono text-on-surface-variant">Corporate Clients in UAE</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Enterprise Benefits Matrix  */}
<section className="w-full bg-surface py-space-xl lg:py-24">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="text-center max-w-3xl mx-auto mb-space-xl">
<span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">The Total Cost of Ownership (TCO) Shift</span>
<h2 className="font-headline-xl text-headline-xl text-on-surface mt-space-xs">
          Engineered to Eliminate Heavy Operational Drag
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          Purchasing and operating in-house trucks ties up liquidity and consumes HR bandwidth. Outsourcing to Pickup &amp; Rental transfers 100% of the operational risk to us.
        </p>
</div>
{/*  3 Pillar Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/*  Pillar 1  */}
<div className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-md">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary mb-space-md">
<span className="material-symbols-outlined text-[28px]">shield</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Zero Fleet Depreciation &amp; HR Liability</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
              Completely eliminate vehicle financing interest, mechanical breakdowns, RTA annual testing, Mulkiya renewals, and driver visa quotas. Driver end-of-service, medical insurance, and accommodations are entirely managed by our corporate HR.
            </p>
</div>
<div className="mt-space-lg pt-space-md bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between font-label-mono text-label-mono">
<span className="text-on-surface-variant">HR &amp; Fleet Admin Overhead</span>
<span className="text-secondary font-bold font-mono">-100% REDUCED</span>
</div>
</div>
{/*  Pillar 2  */}
<div className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-md">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary mb-space-md">
<span className="material-symbols-outlined text-[28px]">published_with_changes</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Guaranteed 60-Minute Vehicle Swap SLA</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
              If a vehicle requires scheduled 10,000 km oil servicing, tire replacement, or experiences unexpected roadside downtime, a verified equivalent vehicle and driver is dispatched immediately. Your supply chain never stalls.
            </p>
</div>
<div className="mt-space-lg pt-space-md bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between font-label-mono text-label-mono">
<span className="text-on-surface-variant">Operational Continuity</span>
<span className="text-secondary font-bold font-mono">100% UPTIME PROMISE</span>
</div>
</div>
{/*  Pillar 3  */}
<div className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-md">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary mb-space-md">
<span className="material-symbols-outlined text-[28px]">cell_tower</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Enterprise Telematics &amp; Digital POD</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
              Gain transparent visibility over your entire assigned fleet via our unified B2B dashboard. Access second-by-second GPS tracking, geofence trigger alerts, instant digital customer signatures, and timestamped delivery cargo photos.
            </p>
</div>
<div className="mt-space-lg pt-space-md bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between font-label-mono text-label-mono">
<span className="text-on-surface-variant">Live Telematics Platform</span>
<span className="text-secondary font-bold font-mono">INCLUDED FREE</span>
</div>
</div>
</div>
{/*  Comparison Data Visualization Table  */}
<div className="mt-space-xl bg-surface-container-low rounded-xl p-space-lg lg:p-space-xl overflow-x-auto shadow-md">
<h3 className="font-headline-md text-headline-md text-on-surface mb-space-md">Capital Model Comparison: In-House Ownership vs. Retainer</h3>
<table className="w-full text-left font-body-md text-body-md text-on-surface-variant min-w-[640px]">
<thead>
<tr className="font-label-lg text-label-lg text-on-surface bg-surface-container-high/60">
<th className="p-3.5 rounded-l-lg">Operational Dimension</th>
<th className="p-3.5">Buying In-House Fleet (Capital)</th>
<th className="p-3.5 text-secondary rounded-r-lg font-bold">Pickup &amp; Rental Enterprise Retainer</th>
</tr>
</thead>
<tbody className="space-y-2">
<tr className="hover:bg-surface-container/40">
<td className="p-3.5 font-medium text-on-surface">Initial Cash Outlay</td>
<td className="p-3.5 text-error">Heavy (Downpayment / 100% Purchase)</td>
<td className="p-3.5 text-secondary font-semibold">0 AED Initial CapEx</td>
</tr>
<tr className="hover:bg-surface-container/40">
<td className="p-3.5 font-medium text-on-surface">Vehicle Depreciation Risk</td>
<td className="p-3.5 text-error">Absorbed on corporate balance sheet (20%/yr)</td>
<td className="p-3.5 text-secondary font-semibold">Zero balance-sheet impact</td>
</tr>
<tr className="hover:bg-surface-container/40">
<td className="p-3.5 font-medium text-on-surface">Breakdown &amp; Service Downtime</td>
<td className="p-3.5 text-error">Deliveries halted or rental scramble</td>
<td className="p-3.5 text-secondary font-semibold">Guaranteed identical backup truck in &lt;60m</td>
</tr>
<tr className="hover:bg-surface-container/40">
<td className="p-3.5 font-medium text-on-surface">Driver Visas, Gratuity &amp; Sick Days</td>
<td className="p-3.5 text-error">Direct HR overhead, replacement search</td>
<td className="p-3.5 text-secondary font-semibold">100% absorbed by our logistics pool</td>
</tr>
<tr className="hover:bg-surface-container/40">
<td className="p-3.5 font-medium text-on-surface">Corporate Tax Treatment</td>
<td className="p-3.5 text-on-surface-variant">Complex depreciation schedule</td>
<td className="p-3.5 text-secondary font-semibold">100% Direct operating expense deduction</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
{/*  Corporate Client Profile Sectors  */}
<section className="w-full bg-surface-dim py-space-xl lg:py-24">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
<div>
<span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">Industry Tailored Retainers</span>
<h2 className="font-headline-xl text-headline-xl text-on-surface mt-space-xs">
            Powering Core UAE Business Sectors
          </h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Our specialized fleet configurations match the exact dimensions, weight requirements, and dispatch velocity of each industrial domain.
        </p>
</div>
{/*  Industry Sectors Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-md">
{/*  Sector 1  */}
<div className="bg-surface-container p-space-md rounded-xl flex flex-col justify-between hover:bg-surface-container-high transition-colors">
<div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary mb-3">
<span className="material-symbols-outlined text-[24px]">shopping_cart</span>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface text-lg">E-Commerce Fulfilment</h4>
<p className="font-body-md text-body-md text-on-surface-variant text-sm mt-2">
              Scheduled middle-mile hub transfer and last-mile bulky parcel deliveries with full digital barcode scanning and API routing.
            </p>
</div>
<div className="mt-space-md pt-space-xs font-label-mono text-label-mono text-secondary">
            Preferred: 1 Ton Box Pickups
          </div>
</div>
{/*  Sector 2  */}
<div className="bg-surface-container p-space-md rounded-xl flex flex-col justify-between hover:bg-surface-container-high transition-colors">
<div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary mb-3">
<span className="material-symbols-outlined text-[24px]">chair</span>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface text-lg">Interior Fit-Out &amp; Design</h4>
<p className="font-body-md text-body-md text-on-surface-variant text-sm mt-2">
              Padded transport of fragile joinery, custom marble, luxury furniture, and lighting installations to VIP residential projects.
            </p>
</div>
<div className="mt-space-md pt-space-xs font-label-mono text-label-mono text-secondary">
            Preferred: 3 Ton Enclosed + Tail Lift
          </div>
</div>
{/*  Sector 3  */}
<div className="bg-surface-container p-space-md rounded-xl flex flex-col justify-between hover:bg-surface-container-high transition-colors">
<div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary mb-3">
<span className="material-symbols-outlined text-[24px]">inventory_2</span>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface text-lg">FMCG &amp; Wholesale</h4>
<p className="font-body-md text-body-md text-on-surface-variant text-sm mt-2">
              Temperature-regulated distribution to supermarket chains, hotel kitchens, and HORECA venues with food safety certifications.
            </p>
</div>
<div className="mt-space-md pt-space-xs font-label-mono text-label-mono text-secondary">
            Preferred: Chiller &amp; Freezer Units
          </div>
</div>
{/*  Sector 4  */}
<div className="bg-surface-container p-space-md rounded-xl flex flex-col justify-between hover:bg-surface-container-high transition-colors">
<div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary mb-3">
<span className="material-symbols-outlined text-[24px]">speaker_group</span>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface text-lg">Event Production &amp; AV</h4>
<p className="font-body-md text-body-md text-on-surface-variant text-sm mt-2">
              Rapid stage equipment transfers, truss transport, and 24-hour festival standby for media events in Dubai Expo City and Yas Island.
            </p>
</div>
<div className="mt-space-md pt-space-xs font-label-mono text-label-mono text-secondary">
            Preferred: Open Bed 3 Ton Flatbeds
          </div>
</div>
{/*  Sector 5  */}
<div className="bg-surface-container p-space-md rounded-xl flex flex-col justify-between hover:bg-surface-container-high transition-colors">
<div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary mb-3">
<span className="material-symbols-outlined text-[24px]">construction</span>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface text-lg">Construction Materials</h4>
<p className="font-body-md text-body-md text-on-surface-variant text-sm mt-2">
              Transport of MEP supplies, steel hardware, tiles, and heavy equipment with site access safety passes (CICPA, Dubai Municipality).
            </p>
</div>
<div className="mt-space-md pt-space-xs font-label-mono text-label-mono text-secondary">
            Preferred: 3 Ton Heavy-Duty Diesel
          </div>
</div>
</div>
</div>
</section>
{/*  Enterprise Consultation & Contract Proposal Form  */}
<section className="w-full bg-surface py-space-xl lg:py-24" id="consultation">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="bg-surface-container-low rounded-xl p-space-lg lg:p-space-xl shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
{/*  Left Info Column  */}
<div className="lg:col-span-5 flex flex-col justify-between">
<div>
<span className="font-label-mono text-label-mono uppercase text-secondary tracking-widest font-semibold">Corporate Advisory Desk</span>
<h2 className="font-headline-xl text-headline-xl text-on-surface mt-space-xs leading-tight">
                Request a Custom Fleet Proposal
              </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
                Our enterprise logistics consultants review your shipment manifests, geographic routes, and loading requirements to assemble a tailored contract term sheet within 2 business hours.
              </p>
{/*  Direct Corporate Contact Info  */}
<div className="space-y-space-md mt-space-xl">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">call</span>
</div>
<div>
<div className="font-label-mono text-label-mono text-on-surface-variant">Direct Corporate Hotline</div>
<a className="text-on-surface font-headline-md text-headline-md hover:text-secondary transition-colors" href="tel:+971555775074">055 577 5074</a>
</div>
</div>
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">mail</span>
</div>
<div>
<div className="font-label-mono text-label-mono text-on-surface-variant">B2B Retainers Desk</div>
<a className="text-on-surface font-label-lg text-label-lg hover:text-secondary transition-colors" href="mailto:corporate@pickuprental.ae">corporate@pickuprental.ae</a>
</div>
</div>
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">pin_drop</span>
</div>
<div>
<div className="font-label-mono text-label-mono text-on-surface-variant">Central Fleet Operations Center</div>
<div className="text-on-surface font-body-md text-body-md">Al Quoz Industrial 3, Dubai • Operations across Dubai, Sharjah &amp; Ajman</div>
</div>
</div>
</div>
</div>
{/*  Trust Badge  */}
<div className="pt-space-lg mt-space-lg flex items-center gap-space-sm font-label-mono text-label-mono text-on-surface-variant">
<span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
<span>Fully licensed under Dubai Economic Department &amp; RTA Commercial Regulations</span>
</div>
</div>
{/*  Right Form Column  */}
<div className="lg:col-span-7 bg-surface-container p-space-lg lg:p-space-xl rounded-xl">
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Corporate Contract Assessment Form</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">Submit your estimated requirements to receive an itemized rate card.</p>
<form className="space-y-space-md" id="retainerForm" >
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div>
<label className="block font-label-lg text-label-lg text-on-surface mb-1.5">Company Name *</label>
<input className="w-full h-[52px] bg-surface-container-low text-on-surface px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md placeholder:text-outline" placeholder="e.g. Al Futtaim Logistics LLC" required type="text"/>
</div>
<div>
<label className="block font-label-lg text-label-lg text-on-surface mb-1.5">Trade License Number</label>
<input className="w-full h-[52px] bg-surface-container-low text-on-surface px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md placeholder:text-outline" placeholder="e.g. CN-1094828" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div>
<label className="block font-label-lg text-label-lg text-on-surface mb-1.5">Contact Person &amp; Title *</label>
<input className="w-full h-[52px] bg-surface-container-low text-on-surface px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md placeholder:text-outline" placeholder="e.g. Tariq Mansoor, Head of Supply Chain" required type="text"/>
</div>
<div>
<label className="block font-label-lg text-label-lg text-on-surface mb-1.5">Corporate Email Address *</label>
<input className="w-full h-[52px] bg-surface-container-low text-on-surface px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md placeholder:text-outline" placeholder="tariq@company.ae" required type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div>
<label className="block font-label-lg text-label-lg text-on-surface mb-1.5">UAE Mobile / WhatsApp *</label>
<input className="w-full h-[52px] bg-surface-container-low text-on-surface px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md placeholder:text-outline" placeholder="+971 50 000 0000" required type="tel"/>
</div>
<div>
<label className="block font-label-lg text-label-lg text-on-surface mb-1.5">Desired Retainer Tier *</label>
<select className="w-full h-[52px] bg-surface-container-low text-on-surface px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md" required>
<option  value="tier2">Tier 2: Dedicated Daily Vehicle Lease</option>
<option value="tier1">Tier 1: On-Demand Commercial Account (Net 30)</option>
<option value="tier3">Tier 3: Multi-Truck Enterprise Logistics Retainer</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div>
<label className="block font-label-lg text-label-lg text-on-surface mb-1.5">Estimated Vehicles Needed</label>
<select className="w-full h-[52px] bg-surface-container-low text-on-surface px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md">
<option value="1">1 Dedicated Vehicle</option>
<option value="2-3">2 - 3 Dedicated Vehicles</option>
<option value="4-10">4 - 10 Dedicated Fleet</option>
<option value="10+">10+ Multi-Emirates Fleet</option>
</select>
</div>
<div>
<label className="block font-label-lg text-label-lg text-on-surface mb-1.5">Primary Operational Emirate</label>
<select className="w-full h-[52px] bg-surface-container-low text-on-surface px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md">
<option  value="dubai">Dubai (Intra-City &amp; Freezones)</option>
<option value="abudhabi">Abu Dhabi &amp; Western Region</option>
<option value="all-uae">All 7 Emirates (Inter-City Routes)</option>
<option value="sharjah-north">Sharjah, Ajman &amp; Northern Emirates</option>
</select>
</div>
</div>
<div>
<label className="block font-label-lg text-label-lg text-on-surface mb-1.5">Cargo Details &amp; Special Requirements (Optional)</label>
<textarea className="w-full bg-surface-container-low text-on-surface p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary font-body-md text-body-md placeholder:text-outline" placeholder="Tell us about your cargo types, required shift hours (8h or 12h), pallet specifications, or temperature needs..." rows={3}></textarea>
</div>
<div className="pt-2">
<button className="w-full py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-colors flex items-center justify-center gap-2" type="submit">
<span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
<span>Transmit Retainer Request to Enterprise Desk</span>
</button>
</div>
<div className="text-center font-label-mono text-label-mono text-outline">
                By submitting, your company agrees to standard NDA protection during proposal generation.
              </div>
</form>
</div>
</div>
</div>
</div>
</section>
{/*  Interactive Modal Overlay on Submission  */}
<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/80 backdrop-blur-md" id="formSuccessModal">
<div className="bg-surface-container-high rounded-xl p-space-lg lg:p-space-xl max-w-lg w-full text-center shadow-2xl relative">
<div className="w-16 h-16 rounded-full bg-secondary/10 mx-auto flex items-center justify-center text-secondary mb-space-md">
<span className="material-symbols-outlined text-[36px]">verified</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Retainer Request Transmitted</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
        Your inquiry has been assigned to the B2B Corporate Desk in Al Quoz. An enterprise account director will contact you via WhatsApp / email within 2 business hours with an official rate breakdown.
      </p>
<div className="mt-space-lg flex justify-center">
<button className="px-space-lg py-3 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-bold hover:bg-secondary-fixed transition-colors" >
          Return to Fleet Overview
        </button>
</div>
</div>
</div>

</div>
    </div>
  );
}
