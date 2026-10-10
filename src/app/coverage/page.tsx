"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CoveragePage() {
  useEffect(() => {
    const filterContainer = document.getElementById('hub-filter-container');
    if (!filterContainer) return;

    const buttons = filterContainer.querySelectorAll('button');
    const cards = document.querySelectorAll('.hub-card');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => {
          b.className = "px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 bg-[#15202E] text-[#C5C6CC] hover:bg-[#1F2B39]";
        });
        btn.className = "px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 bg-[#FBBC2B] text-[#412D00] shadow-lg shadow-[#FBBC2B]/20 font-bold";

        const text = btn.innerText.toLowerCase();
        let region = 'all';
        if (text.includes('dubai')) region = 'dubai';
        else if (text.includes('abu dhabi')) region = 'abudhabi';
        else if (text.includes('northern')) region = 'northern';
        else if (text.includes('ports')) region = 'ports';

        cards.forEach((card: any) => {
          const cardRegion = card.getAttribute('data-region');
          if (region === 'all' || cardRegion === region) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col w-full">
{/*  SECTION 1: Sovereign Mobility Architectural Network Header  */}
<section className="relative w-full bg-surface-dim overflow-hidden px-margin lg:px-margin-desktop py-space-xl lg:py-space-xl">
{/*  Atmospheric Ambient Grid Light  */}
<div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(251,188,43,0.12)_0%,transparent_60%)]"></div>
<div className="absolute right-0 top-1/4 w-[600px] h-[600px] pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(189,199,219,0.15)_0%,transparent_70%)] blur-3xl"></div>
<div className="relative max-w-[1440px] mx-auto flex flex-col gap-space-lg">
{/*  Live Telemetry Top Pill  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface shadow-sm">
<span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest text-[11px]">NETWORK ACTIVE • ALL ARTERIAL CORRIDORS OPTIMAL</span>
</div>
<div className="flex items-center gap-space-md font-label-mono text-label-mono text-on-surface-variant">
<span>7 EMIRATES MAPPED</span>
<span className="text-outline-variant">•</span>
<span>45-MIN GUARANTEED DISPATCH</span>
<span className="text-outline-variant">•</span>
<span className="text-secondary font-semibold">99.4% ON-TIME RATE</span>
</div>
</div>
{/*  Sovereign Headline Block  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
<div className="lg:col-span-8 flex flex-col gap-space-xs">
<p className="font-label-mono text-label-mono uppercase tracking-[0.25em] text-secondary font-semibold">SOVEREIGN MOBILITY • NATIONAL TRANSIT MATRIX</p>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-[1.08] max-w-4xl">
            One Unified Network.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-on-surface via-primary to-secondary">Connecting All Seven Emirates.</span>
</h1>
</div>
<div className="lg:col-span-4 flex flex-col gap-space-sm justify-between bg-surface-container/70 p-space-md rounded-xl backdrop-blur-md shadow-md">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono text-on-surface-variant">TRANSIT DISPATCH VELOCITY</span>
<span className="font-label-mono text-label-mono text-secondary font-bold">24/7/365</span>
</div>
<div className="w-full bg-surface-container-lowest rounded-full h-2 overflow-hidden">
<div className="bg-secondary h-full rounded-full w-[94%]"></div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-snug">
            Precision pick-and-drop logistics spanning the Abu Dhabi desert basin, Dubai commercial zones, and Eastern Seaboard sea terminals.
          </p>
</div>
</div>
{/*  Quick Route Statistics Matrix (HUD Strip)  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-xs">
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-1 shadow-sm">
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase">E11 Corridor Speed</span>
<span className="font-headline-md text-headline-md font-bold text-on-surface">75 - 90 <span className="text-label-mono text-secondary font-normal">MINS</span></span>
<span className="font-label-mono text-label-mono text-outline">DXB ⇄ AUH Direct Flow</span>
</div>
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-1 shadow-sm">
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase">Heavy Bypass (E611)</span>
<span className="font-headline-md text-headline-md font-bold text-on-surface">0 <span className="text-label-mono text-secondary font-normal">SALIK BOTTLENECK</span></span>
<span className="font-label-mono text-label-mono text-outline">Unrestricted Cargo Path</span>
</div>
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-1 shadow-sm">
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase">East Coast Cross</span>
<span className="font-headline-md text-headline-md font-bold text-on-surface">110 <span className="text-label-mono text-secondary font-normal">MINS</span></span>
<span className="font-label-mono text-label-mono text-outline">Sharjah ⇄ Fujairah Port</span>
</div>
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-1 shadow-sm">
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase">Permitted Free Zones</span>
<span className="font-headline-md text-headline-md font-bold text-secondary">38+ <span className="text-label-mono text-on-surface font-normal">ZONES</span></span>
<span className="font-label-mono text-label-mono text-outline">Pre-cleared JAFZA / KIZAD</span>
</div>
</div>
</div>
</section>
{/*  SECTION 2: Dynamic Highway & Corridor Telemetry Matrix  */}
<section className="w-full bg-surface-container-lowest px-margin lg:px-margin-desktop py-space-xl">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div>
<span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest font-semibold">HIGHWAY INFRASTRUCTURE</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">Strategic Inter-Emirate Corridors</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
          Our dispatch algorithms dynamically route cargo between primary municipal highways and ring arterial routes to sidestep peak restrictions and maximize transit velocity.
        </p>
</div>
{/*  Corridor Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/*  Corridor 1: Sheikh Zayed Road E11  */}
<div className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between shadow-lg hover:shadow-xl transition-all group">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="inline-flex px-2.5 py-1 rounded bg-secondary/15 text-secondary font-label-mono text-label-mono font-bold tracking-wider">E11 ARTERIAL</span>
<span className="font-label-mono text-label-mono text-on-surface-variant">EXPRESS FREIGHT</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">Sheikh Zayed Road Corridor</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              The central economic spine linking Dubai's Business Bay &amp; JAFZA directly with Abu Dhabi's Corniche, Musaffah, and Khalifa Port. Dedicated express pickups for high-priority shipments.
            </p>
{/*  Stats  */}
<div className="grid grid-cols-2 gap-space-sm bg-surface-container-high p-space-sm rounded-lg mt-space-xs">
<div>
<span className="font-label-mono text-label-mono text-outline block">Transit Time</span>
<span className="font-headline-md text-on-surface font-bold">75-90 min</span>
</div>
<div>
<span className="font-label-mono text-label-mono text-outline block">Peak Restriction</span>
<span className="font-label-lg text-secondary font-semibold">1-Ton Free</span>
</div>
</div>
</div>
<div className="pt-space-md flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant">
<span>TOLL: AUTOMATED SALIK</span>
<span className="text-secondary font-semibold">DAILY 68 DISPATCHES</span>
</div>
</div>
{/*  Corridor 2: Emirates Road E611 & MBZ E311  */}
<div className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between shadow-lg hover:shadow-xl transition-all group">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="inline-flex px-2.5 py-1 rounded bg-primary/20 text-on-surface font-label-mono text-label-mono font-bold tracking-wider">E611 / E311</span>
<span className="font-label-mono text-label-mono text-secondary font-semibold">HEAVY BYPASS</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">Commercial Heavy Rings</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Designed for 3-ton to 10-ton commercial units, construction materials, and inter-emirate factory transfers circumventing downtown density from Dubai South into Sharjah &amp; Ajman.
            </p>
{/*  Stats  */}
<div className="grid grid-cols-2 gap-space-sm bg-surface-container-high p-space-sm rounded-lg mt-space-xs">
<div>
<span className="font-label-mono text-label-mono text-outline block">Transit Time</span>
<span className="font-headline-md text-on-surface font-bold">45-65 min</span>
</div>
<div>
<span className="font-label-mono text-label-mono text-outline block">Payload Focus</span>
<span className="font-label-lg text-secondary font-semibold">3-10 Ton Box</span>
</div>
</div>
</div>
<div className="pt-space-md flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant">
<span>PERMIT: OPEN ARTERIAL</span>
<span className="text-secondary font-semibold">CONTINUOUS RUN</span>
</div>
</div>
{/*  Corridor 3: E66 & E102 Eastern Spine  */}
<div className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between shadow-lg hover:shadow-xl transition-all group">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="inline-flex px-2.5 py-1 rounded bg-secondary/15 text-secondary font-label-mono text-label-mono font-bold tracking-wider">E66 / E102</span>
<span className="font-label-mono text-label-mono text-on-surface-variant">EASTERN DESERT</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">Al Ain &amp; East Coast Spur</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Direct high-speed logistics channels piercing through the interior oases to Al Ain and traversing the rugged Hajar range into Fujairah Port, Khorfakkan, and Kalba terminals.
            </p>
{/*  Stats  */}
<div className="grid grid-cols-2 gap-space-sm bg-surface-container-high p-space-sm rounded-lg mt-space-xs">
<div>
<span className="font-label-mono text-label-mono text-outline block">Transit Time</span>
<span className="font-headline-md text-on-surface font-bold">85-115 min</span>
</div>
<div>
<span className="font-label-mono text-label-mono text-outline block">Port Clearance</span>
<span className="font-label-lg text-secondary font-semibold">Direct Dock Pass</span>
</div>
</div>
</div>
<div className="pt-space-md flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant">
<span>TERRAIN: HIGHWAY/GRADE</span>
<span className="text-secondary font-semibold">EXPEDITED CARGO</span>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 3: Detailed Regional Hubs Interactive Breakdown  */}
<section className="w-full bg-surface px-margin lg:px-margin-desktop py-space-xl">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-xl">
{/*  Title + Controls  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div>
<span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest font-semibold">DISTRIBUTION EPICENTERS</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">Four Regional Operational Command Hubs</h2>
</div>
{/*  Filter Tabs / Pills (Interactive UI)  */}
<div className="flex flex-wrap gap-2" id="hub-filter-container">
<button className="px-4 py-2 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-sm transition-all" >All Hubs</button>
<button className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface-variant font-label-lg text-label-lg hover:text-on-surface transition-all" >Dubai</button>
<button className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface-variant font-label-lg text-label-lg hover:text-on-surface transition-all" >Abu Dhabi</button>
<button className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface-variant font-label-lg text-label-lg hover:text-on-surface transition-all" >Northern Emirates</button>
<button className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface-variant font-label-lg text-label-lg hover:text-on-surface transition-all" >Eastern Seaboard</button>
</div>
</div>
{/*  Hubs Bento Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md" id="hubs-grid">
{/*  HUB 1: Dubai Metropolitan & Industrial (Span 6)  */}
<div className="hub-card lg:col-span-6 bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-md group" data-region="dubai">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary">location_city</span>
<span className="font-label-mono text-label-mono uppercase text-secondary font-bold">EMIRATE OF DUBAI</span>
</div>
<span className="font-label-mono text-label-mono text-on-surface-variant bg-surface-container px-2.5 py-1 rounded">24 ACTIVE DEPOTS</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">Central Commercial &amp; Port Cluster</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Full-spectrum service coverage spanning heavy manufacturing in JAFZA, interior designer moves in Al Quoz, and express retail deliveries in Downtown and Business Bay.
              </p>
</div>
{/*  Key nodes pill tags  */}
<div className="flex flex-wrap gap-2 pt-space-xs">
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">Al Quoz 1-4</span>
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">Jebel Ali Port (JAFZA)</span>
<span className="px-3 py-1 rounded bg-secondary/20 text-secondary font-label-mono text-label-mono font-semibold">Dubai South DWC</span>
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">Deira &amp; Al Ras</span>
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">Business Bay</span>
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">Dubai Hills Estate</span>
</div>
</div>
<div className="pt-space-md mt-space-md bg-surface-container p-space-sm rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">bolt</span>
<span className="font-label-mono text-label-mono text-on-surface">Average Response: 30-45 mins</span>
</div>
<a className="font-label-mono text-label-mono text-secondary hover:underline" href="/request-quote">Route Pickup →</a>
</div>
</div>
{/*  HUB 2: Abu Dhabi Industrial & Capital (Span 6)  */}
<div className="hub-card lg:col-span-6 bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-md group" data-region="abudhabi">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary">factory</span>
<span className="font-label-mono text-label-mono uppercase text-secondary font-bold">EMIRATE OF ABU DHABI</span>
</div>
<span className="font-label-mono text-label-mono text-on-surface-variant bg-surface-container px-2.5 py-1 rounded">18 ACTIVE DEPOTS</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">Musaffah Industrial &amp; Island Terminals</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Industrial grade transport handling heavy equipment and fabricated structures in ICAD and KIZAD, with specialized quiet-dispatch fleets for Yas and Reem Island residences.
              </p>
</div>
{/*  Key nodes pill tags  */}
<div className="flex flex-wrap gap-2 pt-space-xs">
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">Musaffah M1-M44</span>
<span className="px-3 py-1 rounded bg-secondary/20 text-secondary font-label-mono text-label-mono font-semibold">ICAD I &amp; II</span>
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">Khalifa Ind. Zone (KIZAD)</span>
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">Al Reem Island</span>
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">Yas Island Commercial</span>
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">Al Ain Oasis Base</span>
</div>
</div>
<div className="pt-space-md mt-space-md bg-surface-container p-space-sm rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">bolt</span>
<span className="font-label-mono text-label-mono text-on-surface">Average Response: 45-60 mins</span>
</div>
<a className="font-label-mono text-label-mono text-secondary hover:underline" href="/request-quote">Route Pickup →</a>
</div>
</div>
{/*  HUB 3: Northern Emirates Heavy Manufacturing (Span 7)  */}
<div className="hub-card lg:col-span-7 bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-md group" data-region="northern">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary">domain</span>
<span className="font-label-mono text-label-mono uppercase text-secondary font-bold">NORTHERN LOGISTICS SPHERE</span>
</div>
<span className="font-label-mono text-label-mono text-on-surface-variant bg-surface-container px-2.5 py-1 rounded">SHARJAH • AJMAN • RAK • UAQ</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">Hamriyah, Industrial Hubs &amp; RAK Al Ghail</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
                High-frequency shuttle lanes handling manufacturing overflow from Sharjah Industrial 1-17, coastal freight at Hamriyah Free Zone, and heavy quarry/aggregate haulage from Ras Al Khaimah.
              </p>
</div>
{/*  Key nodes pill tags  */}
<div className="flex flex-wrap gap-2 pt-space-xs">
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">Sharjah Ind. Areas 1-17</span>
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">Hamriyah Port FZE</span>
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">Ajman Jurf Industrial</span>
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">RAK Al Ghail Free Zone</span>
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">Umm Al Quwain Maritime</span>
</div>
</div>
<div className="pt-space-md mt-space-md bg-surface-container p-space-sm rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">schedule</span>
<span className="font-label-mono text-label-mono text-on-surface">Bypass Route: E611 Active Daily</span>
</div>
<a className="font-label-mono text-label-mono text-secondary hover:underline" href="/request-quote">Route Pickup →</a>
</div>
</div>
{/*  HUB 4: Eastern Seaboard & Fujairah Maritime (Span 5)  */}
<div className="hub-card lg:col-span-5 bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-md group" data-region="eastern">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary">anchor</span>
<span className="font-label-mono text-label-mono uppercase text-secondary font-bold">EASTERN SEABOARD</span>
</div>
<span className="font-label-mono text-label-mono text-on-surface-variant bg-surface-container px-2.5 py-1 rounded">OCEAN CORRIDOR</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">Fujairah Port &amp; Bunkering Zone</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Dedicated bunkering ship spare transport, marine valve and crew luggage transfers operating direct via E84/E102 highway with immediate customs terminal gate clearances.
              </p>
</div>
{/*  Key nodes pill tags  */}
<div className="flex flex-wrap gap-2 pt-space-xs">
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">Port of Fujairah Anchor</span>
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">Khorfakkan Deep Sea</span>
<span className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono">Kalba Border Hub</span>
</div>
</div>
<div className="pt-space-md mt-space-md bg-surface-container p-space-sm rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">verified_user</span>
<span className="font-label-mono text-label-mono text-on-surface">Port Entry: Pre-cleared</span>
</div>
<a className="font-label-mono text-label-mono text-secondary hover:underline" href="/request-quote">Route Pickup →</a>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 4: Gate Passes, Free Zones & Residential Security Protocol  */}
<section className="w-full bg-surface-container-lowest px-margin lg:px-margin-desktop py-space-xl">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
<div className="flex flex-col gap-space-xs max-w-3xl">
<span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest font-semibold">REGULATORY COMPLIANCE</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Gate Passes, Ports &amp; Free Zone Security Clearances</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          Navigating security barriers across the UAE requires specific credentials. All Pickup &amp; Rental fleet vehicles, captains, and dispatches maintain active commercial compliance certifications.
        </p>
</div>
{/*  Compliance Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/*  1: JAFZA / DP World  */}
<div className="bg-surface-container p-space-lg rounded-xl flex flex-col gap-space-sm shadow-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[28px]">qr_code_scanner</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">JAFZA e-Permits &amp; DP World Ports</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
            Pre-registered vehicles and drivers carrying digital Port Gate Passes (DP World Port Pass / E-Token system) for rapid ingress into JAFZA North, South, and Jebel Ali terminals. Zero entry delay.
          </p>
<ul className="flex flex-col gap-2 mt-space-xs font-label-mono text-label-mono text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Daily Pre-Registered E-Gate Badges</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Bill of Lading Inspection Compliance</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Dangerous Cargo Class 3/8 Documentation</span>
</li>
</ul>
</div>
{/*  2: Musaffah & ICAD Passes  */}
<div className="bg-surface-container p-space-lg rounded-xl flex flex-col gap-space-sm shadow-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[28px]">shield</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Abu Dhabi Musaffah &amp; ICAD Security</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
            Full compliance with Abu Dhabi ZonesCorp and CICPA military/critical infrastructure access requirements for Musaffah heavy zones, ICAD industrial parks, and Taweelah energy complexes.
          </p>
<ul className="flex flex-col gap-2 mt-space-xs font-label-mono text-label-mono text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>ZonesCorp Security Cleared Personnel</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>PPE Level 2 Equipped Drivers &amp; Crews</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Calibrated GPS Trackers (Abu Dhabi ITC)</span>
</li>
</ul>
</div>
{/*  3: Gated Communities & HOA Permits  */}
<div className="bg-surface-container p-space-lg rounded-xl flex flex-col gap-space-sm shadow-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[28px]">cottage</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Gated Communities &amp; High-Rises</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
            Smooth access to luxury private developments including Emirates Hills, Palm Jumeirah, Downtown Dubai, and Yas Acres. We handle community security deposits and move-in/move-out clearances.
          </p>
<ul className="flex flex-col gap-2 mt-space-xs font-label-mono text-label-mono text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Emaar, Nakheel &amp; Aldar NOC Filing</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Low-Emission &amp; Low-Clearance Fleet Options</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
<span>Dedicated Loading Bay Reservation Assist</span>
</li>
</ul>
</div>
</div>
</div>
</section>
{/*  SECTION 5: Operational Dispatch Center Showcase  */}
<section className="w-full bg-surface px-margin lg:px-margin-desktop py-space-xl">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
<div className="bg-surface-container rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
{/*  Left Visual: Operational Control Center Image from context  */}
<div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[520px]">
<Image alt="Dubai Central Fleet Operations Command Center with panoramic map telemetry displays and Emirati controllers coordinating live dispatches" className="object-cover" fill sizes="(max-width: 1024px) 100vw, 58vw" src="/images/contact/contact-dispatch.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-surface-container"></div>
{/*  Live Telemetry Tag Overlay  */}
<div className="absolute top-4 left-4 bg-surface-container-lowest/80 backdrop-blur-md px-3.5 py-2 rounded-lg flex items-center gap-2 shadow-lg">
<span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
<span className="font-label-mono text-label-mono text-on-surface font-semibold">DUBAI CENTRAL DISPATCH • LIVE STREAM</span>
</div>
<div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/85 backdrop-blur-md p-3.5 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-md font-label-mono text-label-mono">
<span className="text-on-surface font-bold">142 FLEET VEHICLES CURRENTLY ON HIGHWAY</span>
<span className="text-secondary">● 100% SATELLITE MONITORED</span>
</div>
<span className="hidden sm:inline font-label-mono text-label-mono text-outline">RTA INTEGRATED</span>
</div>
</div>
{/*  Right Content: Dispatch Protocol & Telemetry  */}
<div className="lg:col-span-5 p-space-lg lg:p-space-xl flex flex-col justify-between">
<div className="flex flex-col gap-space-md">
<div>
<span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest font-semibold">HIGH-COMMAND MONITORING</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">Real-Time Centralized Control Room</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Every Toyota Hilux, Isuzu D-Max, and heavy box cargo carrier is linked directly to our central Dubai command console via multi-carrier satellite telematics. Controllers monitor axle weight distributions, driver duty cycles, and corridor speed limits in real-time.
            </p>
<div className="flex flex-col gap-space-sm pt-space-xs">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary mt-0.5">radar</span>
<div>
<h4 className="font-label-lg text-label-lg font-bold text-on-surface">Dynamic Re-Routing AI</h4>
<p className="font-label-mono text-label-mono text-on-surface-variant">Instantly diverts vehicles off congested corridors (e.g. E11 peak hours) onto E311/E611 to preserve arrival commitments.</p>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary mt-0.5">speed</span>
<div>
<h4 className="font-label-lg text-label-lg font-bold text-on-surface">Geofenced Speed Governance</h4>
<p className="font-label-mono text-label-mono text-on-surface-variant">Guarantees all vehicles maintain strict compliance with UAE federal and emirate-level road safety benchmarks.</p>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary mt-0.5">support_agent</span>
<div>
<h4 className="font-label-lg text-label-lg font-bold text-on-surface">Direct Driver-Client Radio Relay</h4>
<p className="font-label-mono text-label-mono text-on-surface-variant">Dedicated bilingual dispatch coordinators update recipients 30 minutes prior to delivery arrival.</p>
</div>
</div>
</div>
</div>
<div className="pt-space-lg flex items-center gap-space-md">
<a className="px-space-md py-3 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-md hover:bg-secondary-fixed transition-all" href="tel:+971555775074">
              Connect to Dispatch Desk
            </a>
<span className="font-label-mono text-label-mono text-on-surface-variant">Direct: 055 577 5074</span>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 6: High-Definition Inter-Emirate Pricing & Transit Matrix  */}
<section className="w-full bg-surface-container-lowest px-margin lg:px-margin-desktop py-space-xl">
<div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div>
<span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest font-semibold">TRANSPARENT TARIFF SCHEDULE</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">Inter-Emirate Pricing &amp; Transit Matrix</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Standard baseline estimates including professional driver, fuel, highway tolls (Salik/Darb), and verified transit cargo insurance up to AED 100,000.
          </p>
</div>
<div className="flex items-center gap-space-xs font-label-mono text-label-mono text-secondary bg-surface-container px-3.5 py-2 rounded-lg">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>NO HIDDEN SURCHARGES • TOLLS INCLUDED</span>
</div>
</div>
{/*  Pricing Table Container (Responsive)  */}
<div className="overflow-x-auto rounded-xl bg-surface-container shadow-xl">
<table className="w-full text-left font-body-md text-body-md text-on-surface-variant">
<thead className="bg-surface-container-high text-on-surface font-label-lg text-label-lg uppercase tracking-wider">
<tr>
<th className="py-4 px-6" scope="col">Origin Emirate</th>
<th className="py-4 px-6" scope="col">Destination Hub</th>
<th className="py-4 px-6" scope="col">Typical Transit</th>
<th className="py-4 px-6" scope="col">1-Ton Pickup</th>
<th className="py-4 px-6" scope="col">3-Ton Closed Box</th>
<th className="py-4 px-6 text-right" scope="col">Instant Action</th>
</tr>
</thead>
<tbody className="divide-y-0">
{/*  Row 1  */}
<tr className="hover:bg-surface-variant/40 transition-colors">
<td className="py-4 px-6 font-semibold text-on-surface flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Dubai (Al Quoz / JAFZA)</span>
</td>
<td className="py-4 px-6 text-on-surface">Abu Dhabi (Musaffah / ICAD)</td>
<td className="py-4 px-6 font-label-mono text-label-mono text-on-surface">75 - 90 min</td>
<td className="py-4 px-6 font-bold text-secondary font-headline-md text-[20px]">AED 350</td>
<td className="py-4 px-6 font-bold text-on-surface font-headline-md text-[20px]">AED 650</td>
<td className="py-4 px-6 text-right">
<a className="px-3.5 py-1.5 rounded bg-surface-container-high text-secondary hover:bg-secondary hover:text-on-secondary font-label-mono text-label-mono transition-all" href="/request-quote">Book Route</a>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-variant/40 transition-colors bg-surface-container-low/40">
<td className="py-4 px-6 font-semibold text-on-surface flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Dubai (All Areas)</span>
</td>
<td className="py-4 px-6 text-on-surface">Sharjah (Industrial 1-17)</td>
<td className="py-4 px-6 font-label-mono text-label-mono text-on-surface">30 - 45 min</td>
<td className="py-4 px-6 font-bold text-secondary font-headline-md text-[20px]">AED 180</td>
<td className="py-4 px-6 font-bold text-on-surface font-headline-md text-[20px]">AED 350</td>
<td className="py-4 px-6 text-right">
<a className="px-3.5 py-1.5 rounded bg-surface-container-high text-secondary hover:bg-secondary hover:text-on-secondary font-label-mono text-label-mono transition-all" href="/request-quote">Book Route</a>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-variant/40 transition-colors">
<td className="py-4 px-6 font-semibold text-on-surface flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Dubai (All Areas)</span>
</td>
<td className="py-4 px-6 text-on-surface">Ajman Industrial</td>
<td className="py-4 px-6 font-label-mono text-label-mono text-on-surface">40 - 55 min</td>
<td className="py-4 px-6 font-bold text-secondary font-headline-md text-[20px]">AED 220</td>
<td className="py-4 px-6 font-bold text-on-surface font-headline-md text-[20px]">AED 420</td>
<td className="py-4 px-6 text-right">
<a className="px-3.5 py-1.5 rounded bg-surface-container-high text-secondary hover:bg-secondary hover:text-on-secondary font-label-mono text-label-mono transition-all" href="/request-quote">Book Route</a>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-surface-variant/40 transition-colors bg-surface-container-low/40">
<td className="py-4 px-6 font-semibold text-on-surface flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Dubai / Sharjah</span>
</td>
<td className="py-4 px-6 text-on-surface">Ras Al Khaimah (Al Ghail / City)</td>
<td className="py-4 px-6 font-label-mono text-label-mono text-on-surface">75 - 90 min</td>
<td className="py-4 px-6 font-bold text-secondary font-headline-md text-[20px]">AED 380</td>
<td className="py-4 px-6 font-bold text-on-surface font-headline-md text-[20px]">AED 700</td>
<td className="py-4 px-6 text-right">
<a className="px-3.5 py-1.5 rounded bg-surface-container-high text-secondary hover:bg-secondary hover:text-on-secondary font-label-mono text-label-mono transition-all" href="/request-quote">Book Route</a>
</td>
</tr>
{/*  Row 5  */}
<tr className="hover:bg-surface-variant/40 transition-colors">
<td className="py-4 px-6 font-semibold text-on-surface flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Dubai / Sharjah</span>
</td>
<td className="py-4 px-6 text-on-surface">Fujairah Port &amp; Khorfakkan</td>
<td className="py-4 px-6 font-label-mono text-label-mono text-on-surface">95 - 110 min</td>
<td className="py-4 px-6 font-bold text-secondary font-headline-md text-[20px]">AED 450</td>
<td className="py-4 px-6 font-bold text-on-surface font-headline-md text-[20px]">AED 850</td>
<td className="py-4 px-6 text-right">
<a className="px-3.5 py-1.5 rounded bg-surface-container-high text-secondary hover:bg-secondary hover:text-on-secondary font-label-mono text-label-mono transition-all" href="/request-quote">Book Route</a>
</td>
</tr>
{/*  Row 6  */}
<tr className="hover:bg-surface-variant/40 transition-colors bg-surface-container-low/40">
<td className="py-4 px-6 font-semibold text-on-surface flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Abu Dhabi City</span>
</td>
<td className="py-4 px-6 text-on-surface">Al Ain Oasis City</td>
<td className="py-4 px-6 font-label-mono text-label-mono text-on-surface">80 - 95 min</td>
<td className="py-4 px-6 font-bold text-secondary font-headline-md text-[20px]">AED 380</td>
<td className="py-4 px-6 font-bold text-on-surface font-headline-md text-[20px]">AED 720</td>
<td className="py-4 px-6 text-right">
<a className="px-3.5 py-1.5 rounded bg-surface-container-high text-secondary hover:bg-secondary hover:text-on-secondary font-label-mono text-label-mono transition-all" href="/request-quote">Book Route</a>
</td>
</tr>
{/*  Row 7  */}
<tr className="hover:bg-surface-variant/40 transition-colors">
<td className="py-4 px-6 font-semibold text-on-surface flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Sharjah / Dubai</span>
</td>
<td className="py-4 px-6 text-on-surface">Umm Al Quwain &amp; Industrial</td>
<td className="py-4 px-6 font-label-mono text-label-mono text-on-surface">50 - 65 min</td>
<td className="py-4 px-6 font-bold text-secondary font-headline-md text-[20px]">AED 280</td>
<td className="py-4 px-6 font-bold text-on-surface font-headline-md text-[20px]">AED 520</td>
<td className="py-4 px-6 text-right">
<a className="px-3.5 py-1.5 rounded bg-surface-container-high text-secondary hover:bg-secondary hover:text-on-secondary font-label-mono text-label-mono transition-all" href="/request-quote">Book Route</a>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Additional Details Footer  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs text-on-surface-variant font-label-mono text-label-mono">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">info</span>
<span>Heavy tonnage flatbeds (7-Ton &amp; 10-Ton) quoted custom by Dispatch Logistics Desk.</span>
</div>
<a className="text-secondary font-bold hover:underline flex items-center gap-1" href="/request-quote">
          Open Complete Live Quote Calculator <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</section>
{/*  SECTION 7: Monolithic Action Strip  */}
<section className="w-full bg-surface-container px-margin lg:px-margin-desktop py-space-lg">
<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center font-bold">
<span className="material-symbols-outlined text-[28px]">local_shipping</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">Require Custom Cross-Border or Port Convoys?</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Our senior route masters configure multi-destination drop schedules within 15 minutes.</p>
</div>
</div>
<div className="flex items-center gap-space-sm">
<a className="px-space-md py-3 rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-variant transition-colors" href="tel:+971555775074">
          Call 055 577 5074
        </a>
<a className="px-space-md py-3 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-bold hover:bg-secondary-fixed transition-all shadow-md" href="/request-quote">
          Calculate Transit Rate
        </a>
</div>
</div>
</section>
</div>

    </div>
  );
}
