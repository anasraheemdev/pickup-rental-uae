"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ResourcesPage() {
  useEffect(() => {
    const searchInput = document.getElementById('resourceSearch') as HTMLInputElement | null;
    const filterBtns = document.querySelectorAll('.filter-btn');
    const guideItems = document.querySelectorAll('.guide-item');

    let currentCategory = 'all';
    let searchQuery = '';

    function filterContent() {
      guideItems.forEach((item: any) => {
        const category = item.getAttribute('data-category');
        const title = item.querySelector('h3') ? item.querySelector('h3').innerText.toLowerCase() : '';
        const body = item.querySelector('p') ? item.querySelector('p').innerText.toLowerCase() : '';
        
        const matchesCategory = (currentCategory === 'all' || category === currentCategory);
        const matchesSearch = title.includes(searchQuery) || body.includes(searchQuery);

        if (matchesCategory && matchesSearch) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('bg-secondary', 'text-on-secondary', 'font-bold');
          b.classList.add('bg-surface-container-high', 'text-on-surface-variant');
        });

        btn.classList.remove('bg-surface-container-high', 'text-on-surface-variant');
        btn.classList.add('bg-secondary', 'text-on-secondary', 'font-bold');

        currentCategory = btn.getAttribute('data-category') || 'all';
        filterContent();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e: any) => {
        searchQuery = e.target.value.toLowerCase().trim();
        filterContent();
      });
    }
  }, []);

  return (
    <div className="w-full">
      <Breadcrumbs items={[{ name: "Resources", item: "/resources" }]} />
      <div className="flex flex-col w-full">
{/*  Knowledge Base Hero Editorial Header  */}
<section className="relative px-margin lg:px-margin-desktop py-space-xl overflow-hidden bg-gradient-to-b from-surface-container-lowest to-surface">
<div className="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto w-full">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg pb-space-lg">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container text-secondary font-label-mono text-label-mono tracking-wider uppercase mb- space-xs">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
            UAE Statutory Compliance &amp; Logistics Compendium 2025
          </div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-2">
            UAE Road Transportation <br className="hidden sm:inline"/>
<span className="text-primary-fixed">Knowledge Base &amp; Operational Guides</span>
</h1>
<p className="font-body-lead text-body-lead text-on-surface-variant mt-4 max-w-2xl">
            Authoritative, field-tested intelligence for corporate supply chains, site logistics superintendents, procurement directors, and premium relocations across all 7 Emirates.
          </p>
</div>
{/*  Telemetry Stats Strip  */}
<div className="grid grid-cols-3 gap-3 bg-surface-container-low p-4 rounded-xl shadow-xl min-w-[320px]">
<div className="flex flex-col">
<span className="font-label-mono text-label-mono text-secondary">REGULATORY AUDIT</span>
<span className="font-headline-md text-headline-md text-on-surface font-bold">100%</span>
<span className="font-label-mono text-[10px] text-outline">RTA / ITC Compliant</span>
</div>
<div className="flex flex-col border-l-0 pl-2">
<span className="font-label-mono text-label-mono text-secondary">CLEARANCES</span>
<span className="font-headline-md text-headline-md text-on-surface font-bold">180+</span>
<span className="font-label-mono text-[10px] text-outline">Towers &amp; Hubs Mapped</span>
</div>
<div className="flex flex-col border-l-0 pl-2">
<span className="font-label-mono text-label-mono text-secondary">FREE ZONES</span>
<span className="font-headline-md text-headline-md text-on-surface font-bold">14</span>
<span className="font-label-mono text-[10px] text-outline">Pass Protocols</span>
</div>
</div>
</div>
{/*  Real-Time Interactive Filter & Search Bar  */}
<div className="mt-8 bg-surface-container p-2 rounded-xl shadow-2xl flex flex-col md:flex-row items-center gap-3">
<div className="relative flex-1 w-full flex items-center">
<span className="material-symbols-outlined absolute left-4 text-outline text-[20px]">search</span>
<input className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md pl-12 pr-4 py-3 rounded-lg placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-all" id="resourceSearch" placeholder="Search regulations, loading dock limits, JAFZA permits, or axle specs..." type="text"/>
</div>
<div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 font-label-mono text-label-mono">
<button className="filter-btn active whitespace-nowrap px-4 py-2.5 rounded-lg bg-secondary text-on-secondary font-bold transition-all shadow-md" data-category="all">All Topics</button>
<button className="filter-btn whitespace-nowrap px-4 py-2.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all" data-category="regulations">Regulatory Laws</button>
<button className="filter-btn whitespace-nowrap px-4 py-2.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all" data-category="docks">Dock Clearances</button>
<button className="filter-btn whitespace-nowrap px-4 py-2.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all" data-category="freezones">Gate Passes</button>
<button className="filter-btn whitespace-nowrap px-4 py-2.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all" data-category="fleet">Fleet Protocol</button>
</div>
</div>
</div>
</section>
{/*  Editorial Deep Dives & Guides Grid  */}
<section className="px-margin lg:px-margin-desktop py-space-lg max-w-[1440px] mx-auto w-full">
<div className="flex items-center justify-between mb-8">
<div>
<span className="font-label-mono text-label-mono uppercase tracking-widest text-secondary">Verified UAE Technical Publications</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">Operational Field Manuals &amp; Regulations</h2>
</div>
<div className="hidden sm:flex items-center gap-2 text-on-surface-variant font-label-mono text-label-mono">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
        Updated Bi-Weekly for Federal Transport Mandates
      </div>
</div>
{/*  Masonry Editorial Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="guideGrid">
{/*  Guide 1: Flatbed vs Enclosed Feature (With Reference Image Integration)  */}
<article className="lg:col-span-8 group bg-surface-container-low rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 guide-item" data-category="fleet">
<div className="grid grid-cols-1 md:grid-cols-2 h-full">
<div className="relative h-64 md:h-full min-h-[300px] overflow-hidden bg-surface-container-lowest">
<Image alt="Flatbed commercial truck hauling cargo at industrial depot Abu Dhabi" className="object-cover group-hover:scale-105 transition-transform duration-500" fill sizes="(max-width: 768px) 100vw, 50vw" priority src="/images/fleet/7-ton-pickup.webp"/>
<div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded text-secondary font-label-mono text-label-mono uppercase tracking-wider">
              Fleet Selection Analysis
            </div>
<div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/80 backdrop-blur-md p-3 rounded-lg text-xs font-label-mono text-on-surface flex justify-between items-center">
<span>Photo: Musaffah Abu Dhabi Precast Depot</span>
<span className="text-secondary font-bold">7-TON CAB SPEC</span>
</div>
</div>
<div className="p-6 md:p-8 flex flex-col justify-between bg-surface-container-low">
<div>
<div className="flex items-center gap-3 text-outline text-xs font-label-mono mb-3">
<span className="flex items-center gap-1 text-secondary"><span className="material-symbols-outlined text-sm">schedule</span> 7 min read</span>
<span>•</span>
<span>Payload Rigidity &amp; Thermal Control</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold group-hover:text-secondary transition-colors">
                Flatbed vs. Enclosed Box Truck: How to Choose for Your Cargo Under Desert Conditions
              </h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                Critical safety considerations comparing open flatbed strapping protocols against high-heat interior insulation in insulated box trucks. Prevent thermal warping of materials, load shifts on Sheikh Zayed Road curves, and optimize crane loading at Jebel Ali and Musaffah construction yards.
              </p>
{/*  Quick Spec Micro-HUD  */}
<div className="mt-5 grid grid-cols-2 gap-2 bg-surface-container p-3 rounded-lg text-xs font-label-mono">
<div>
<span className="text-outline block">FLATBED BEST FIT:</span>
<span className="text-on-surface font-semibold">Over-height steel, rebar, generators, crates</span>
</div>
<div>
<span className="text-outline block">BOX TRUCK BEST FIT:</span>
<span className="text-on-surface font-semibold">Luxury joinery, electronics, boxed dry stock</span>
</div>
</div>
</div>
<div className="pt-6 mt-4 flex items-center justify-between">
<span className="text-xs font-label-mono text-outline">Strapping Standard: EN 12195-2</span>
<Link className="inline-flex items-center gap-1 font-label-lg text-label-lg font-bold text-secondary group-hover:translate-x-1 transition-transform" href="/resources/1-ton-vs-3-ton-pickup">
                Read Field Protocol <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
</div>
</div>
</div>
</article>
{/*  Guide 2: RTA Commercial Vehicle Regulations  */}
<article className="lg:col-span-4 bg-surface-container-low rounded-xl shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between guide-item overflow-hidden group" data-category="regulations">
<div className="relative h-44 w-full overflow-hidden bg-surface-container-lowest">
  <Image
    src="/images/blog/blog-pickup-rental-guide.webp"
    alt="Commercial pickup truck on Dubai arterial road under RTA transport regulations"
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500"
    sizes="(max-width: 1024px) 100vw, 33vw"
  />
</div>
<div className="p-6 md:p-8 flex flex-col justify-between flex-1">
<div>
<div className="flex items-center justify-between text-xs font-label-mono mb-3">
<span className="px-2.5 py-1 rounded bg-secondary/10 text-secondary uppercase font-semibold">Dubai RTA Law</span>
<span className="text-outline">9 min read</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">
            Guide to RTA Commercial Vehicle Regulations in Dubai
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-3">
            An exhaustive manual decoding Dubai Roads and Transport Authority commercial classifications. Understand tare weight ceilings, permissible gross axle loads (GVW), mandatory telematics registration, and night operation permits for E11/E311 arterial routes.
          </p>
<ul className="mt-5 space-y-2.5 font-label-mono text-xs text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
<span>1-Ton vs. 3-Ton tare classifications</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
<span>RTA commercial driver NOC verification</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
<span>Overhang &amp; tail-lift compliance fines</span>
</li>
</ul>
</div>
<div className="pt-6 mt-6 bg-surface-container/60 -mx-6 -mb-6 p-6 rounded-b-xl flex items-center justify-between">
<span className="text-xs font-label-mono text-outline">Ref: Administrative Order 293</span>
<Link className="font-label-lg text-label-lg font-bold text-secondary flex items-center gap-1" href="/resources/pickup-truck-rental-guide-uae">
            Read Guide <span className="material-symbols-outlined text-[16px]">north_east</span>
</Link>
</div>
</div>
</article>
{/*  Guide 3: Basement & Loading Dock Height Directory  */}
<article className="lg:col-span-4 bg-surface-container-low rounded-xl shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between guide-item overflow-hidden group" data-category="docks">
<div className="relative h-44 w-full overflow-hidden bg-surface-container-lowest">
  <Image
    src="/images/blog/blog-what-size-moving.webp"
    alt="Comparison of pickup truck sizes for basement and loading dock clearances"
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500"
    sizes="(max-width: 1024px) 100vw, 33vw"
  />
</div>
<div className="p-6 md:p-8 flex flex-col justify-between flex-1">
<div>
<div className="flex items-center justify-between text-xs font-label-mono mb-3">
<span className="px-2.5 py-1 rounded bg-surface-container text-primary-fixed uppercase font-semibold">Dock Architecture</span>
<span className="text-outline">12 min read</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">
            Basement &amp; Loading Dock Height Clearance Directory
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-3">
            Verified ramp inclinations and ceiling clearance thresholds across Dubai and Abu Dhabi's premier developments. Avoid devastating overhead sprinkler collisions and trailer groundings.
          </p>
{/*  Building Metrics Snapshot  */}
<div className="mt-4 space-y-2 font-label-mono text-xs">
<div className="flex justify-between p-2 rounded bg-surface-container-lowest">
<span className="text-on-surface">DIFC Gate Towers (B3 Logistics Bay)</span>
<span className="text-secondary font-bold">Max 2.40m</span>
</div>
<div className="flex justify-between p-2 rounded bg-surface-container-lowest">
<span className="text-on-surface">Downtown Dubai Residences (Boulevard)</span>
<span className="text-secondary font-bold">Max 2.15m</span>
</div>
<div className="flex justify-between p-2 rounded bg-surface-container-lowest">
<span className="text-on-surface">Reem Island Marina Square (Service Hub)</span>
<span className="text-secondary font-bold">Max 2.60m</span>
</div>
<div className="flex justify-between p-2 rounded bg-surface-container-lowest">
<span className="text-on-surface">Dubai Marina Promenades</span>
<span className="text-secondary font-bold">Max 2.20m</span>
</div>
</div>
</div>
<div className="pt-6 mt-6 bg-surface-container/60 -mx-6 -mb-6 p-6 rounded-b-xl flex items-center justify-between">
<span className="text-xs font-label-mono text-outline">Updated Field Audit</span>
<Link className="font-label-lg text-label-lg font-bold text-secondary flex items-center gap-1" href="/resources/what-size-pickup-for-moving">
            Access Sizing Directory <span className="material-symbols-outlined text-[16px]">north_east</span>
</Link>
</div>
</div>
</article>
{/*  Guide 4: JAFZA, KIZAD & Freezone Gate Passes  */}
<article className="lg:col-span-4 bg-surface-container-low rounded-xl shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between guide-item overflow-hidden group" data-category="freezones">
<div className="relative h-44 w-full overflow-hidden bg-surface-container-lowest">
  <Image
    src="/images/blog/blog-commercial-goods.webp"
    alt="Commercial packaged goods transport and freezone pass handling"
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500"
    sizes="(max-width: 1024px) 100vw, 33vw"
  />
</div>
<div className="p-6 md:p-8 flex flex-col justify-between flex-1">
<div>
<div className="flex items-center justify-between text-xs font-label-mono mb-3">
<span className="px-2.5 py-1 rounded bg-secondary/10 text-secondary uppercase font-semibold">Port Logistics</span>
<span className="text-outline">6 min read</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">
            Navigating JAFZA, KEZAD &amp; Free Zone Gate Passes
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-3">
            The friction-free protocol for acquiring DP World Port Passes, E-Token registration for truck entry, and clearing cargo manifests without vehicle impoundment delays at high-security barriers.
          </p>
<div className="mt-4 p-3 bg-surface-container rounded-lg font-label-mono text-xs text-on-surface-variant">
<span className="text-secondary font-bold block mb-1">MANDATORY GATE CHECKLIST:</span>
            1. Valid DP World E-Token QR Code<br/>
            2. Driver Emirates ID + Valid Mulkiya<br/>
            3. Customs Delivery Advice (CDA) Paperwork<br/>
            4. Hi-Vis Vest &amp; Steel Toe Boots for Yard
          </div>
</div>
<div className="pt-6 mt-6 bg-surface-container/60 -mx-6 -mb-6 p-6 rounded-b-xl flex items-center justify-between">
<span className="text-xs font-label-mono text-outline">Pass Processing: &lt;45 Mins</span>
<Link className="font-label-lg text-label-lg font-bold text-secondary flex items-center gap-1" href="/resources/commercial-goods-transport-guide">
            Read Step-by-Step <span className="material-symbols-outlined text-[16px]">north_east</span>
</Link>
</div>
</div>
</article>
{/*  Guide 5: Inter-Emirate Transit Times & Tolls  */}
<article className="lg:col-span-4 bg-surface-container-low rounded-xl shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between guide-item overflow-hidden group" data-category="regulations">
<div className="relative h-44 w-full overflow-hidden bg-surface-container-lowest">
  <Image
    src="/images/blog/blog-moving-furniture.webp"
    alt="Moving and furniture cargo transportation on UAE inter-emirate highway routes"
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500"
    sizes="(max-width: 1024px) 100vw, 33vw"
  />
</div>
<div className="p-6 md:p-8 flex flex-col justify-between flex-1">
<div>
<div className="flex items-center justify-between text-xs font-label-mono mb-3">
<span className="px-2.5 py-1 rounded bg-surface-container text-primary-fixed uppercase font-semibold">Highway Logistics</span>
<span className="text-outline">8 min read</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">
            Inter-Emirate Heavy Vehicle Curfews &amp; Salik Calculations
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-3">
            Precise peak-hour lane restrictions on E11 (Sheikh Zayed Rd) and E311 (Sheikh Mohammed Bin Zayed Rd). Calculate Salik toll deductions, Darb gates in Abu Dhabi, and bypass routes via Emirates Road (E611).
          </p>
<div className="mt-4 p-3 bg-surface-container rounded-lg font-label-mono text-xs">
<div className="flex justify-between items-center text-error pb-1">
<span>TRUCK CURFEW (E11 / E311):</span>
<span className="font-bold">06:30 - 08:30 | 17:30 - 20:00</span>
</div>
<div className="text-on-surface-variant text-[11px] pt-1">
              Fines for unauthorized highway transit during peak windows exceed AED 1,000 + 4 traffic points.
            </div>
</div>
</div>
<div className="pt-6 mt-6 bg-surface-container/60 -mx-6 -mb-6 p-6 rounded-b-xl flex items-center justify-between">
<span className="text-xs font-label-mono text-outline">Toll Calculator Included</span>
<Link className="font-label-lg text-label-lg font-bold text-secondary flex items-center gap-1" href="/resources/how-to-move-furniture-safely-dubai">
            Read Curfew Matrix <span className="material-symbols-outlined text-[16px]">north_east</span>
</Link>
</div>
</div>
</article>
</div>
</section>
{/*  Interactive Height Clearance Look-Up Terminal  */}
<section className="px-margin lg:px-margin-desktop py-space-xl bg-surface-container-lowest">
<div className="max-w-[1440px] mx-auto w-full">
<div className="flex flex-col lg:flex-row gap-space-lg items-start">
<div className="lg:w-1/3">
<span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest">Digital Dispatch Tool</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-2">
            Loading Dock &amp; Ramp Clearance Checker
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-3">
            Select a commercial or residential complex to evaluate which vehicle in our fleet can legally enter without cargo transshipment.
          </p>
<div className="mt-6 bg-surface-container-low p-4 rounded-xl">
<span className="font-label-mono text-xs text-outline block mb-2">QUICK VEHICLE HEIGHT MATRIX</span>
<div className="space-y-2 font-label-mono text-xs">
<div className="flex justify-between items-center">
<span className="text-on-surface">1 Ton Low-Roof Pickup</span>
<span className="text-secondary font-bold">1.95m Clear</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface">1.5 Ton Standard Box</span>
<span className="text-secondary font-bold">2.45m Clear</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface">3 Ton Heavy Cargo Box</span>
<span className="text-secondary font-bold">3.10m Clear</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface">7 Ton Flatbed Rig (Pictured)</span>
<span className="text-secondary font-bold">Open Rig / 3.4m</span>
</div>
</div>
</div>
</div>
{/*  Interactive Clearance Table  */}
<div className="lg:w-2/3 w-full bg-surface-container rounded-xl overflow-hidden shadow-2xl">
<div className="p-4 bg-surface-container-high flex flex-wrap items-center justify-between gap-3">
<span className="font-headline-md text-headline-md text-on-surface text-base font-bold">Selected Metros &amp; Towers</span>
<div className="flex gap-2 font-label-mono text-xs">
<span className="inline-flex items-center gap-1 text-on-surface"><span className="w-2 h-2 rounded-full bg-secondary"></span> 1-Ton Ok</span>
<span className="inline-flex items-center gap-1 text-on-surface"><span className="w-2 h-2 rounded-full bg-primary-fixed"></span> 3-Ton Special</span>
<span className="inline-flex items-center gap-1 text-on-surface"><span className="w-2 h-2 rounded-full bg-error"></span> Dock Only</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-body-md text-sm text-on-surface">
<thead className="bg-surface-container-low text-outline font-label-mono text-xs uppercase">
<tr>
<th className="py-3 px-4">Location / Development</th>
<th className="py-3 px-4">Emirate</th>
<th className="py-3 px-4">Max Height Limit</th>
<th className="py-3 px-4">Recommended Fleet</th>
<th className="py-3 px-4 text-right">Access Note</th>
</tr>
</thead>
<tbody className="divide-y-0 text-xs font-label-mono">
<tr className="hover:bg-surface-container-high/50 transition-colors">
<td className="py-3.5 px-4 font-semibold text-on-surface">Burj Khalifa Corporate Suites</td>
<td className="py-3.5 px-4 text-outline">Dubai</td>
<td className="py-3.5 px-4 text-secondary font-bold">2.20 m</td>
<td className="py-3.5 px-4"><span className="px-2 py-0.5 rounded bg-surface-container-lowest text-secondary">1 Ton Standard</span></td>
<td className="py-3.5 px-4 text-right text-outline">Service Entry 4 only</td>
</tr>
<tr className="hover:bg-surface-container-high/50 transition-colors bg-surface-container-lowest/30">
<td className="py-3.5 px-4 font-semibold text-on-surface">DIFC Gate Avenue P3 Level</td>
<td className="py-3.5 px-4 text-outline">Dubai</td>
<td className="py-3.5 px-4 text-secondary font-bold">2.40 m</td>
<td className="py-3.5 px-4"><span className="px-2 py-0.5 rounded bg-surface-container-lowest text-secondary">1 Ton / Low-Box</span></td>
<td className="py-3.5 px-4 text-right text-outline">Security scanner active</td>
</tr>
<tr className="hover:bg-surface-container-high/50 transition-colors">
<td className="py-3.5 px-4 font-semibold text-on-surface">Etihad Towers Office Pod</td>
<td className="py-3.5 px-4 text-outline">Abu Dhabi</td>
<td className="py-3.5 px-4 text-secondary font-bold">2.30 m</td>
<td className="py-3.5 px-4"><span className="px-2 py-0.5 rounded bg-surface-container-lowest text-secondary">1 Ton Low-Profile</span></td>
<td className="py-3.5 px-4 text-right text-outline">Prior NOC 24h before</td>
</tr>
<tr className="hover:bg-surface-container-high/50 transition-colors bg-surface-container-lowest/30">
<td className="py-3.5 px-4 font-semibold text-on-surface">Dubai World Trade Centre (Concourse)</td>
<td className="py-3.5 px-4 text-outline">Dubai</td>
<td className="py-3.5 px-4 text-secondary font-bold">4.20 m</td>
<td className="py-3.5 px-4"><span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary">3 Ton / 7 Ton Flatbed</span></td>
<td className="py-3.5 px-4 text-right text-outline">Exhibition freight bay</td>
</tr>
<tr className="hover:bg-surface-container-high/50 transition-colors">
<td className="py-3.5 px-4 font-semibold text-on-surface">JBR - The Walk (Rimal Basement)</td>
<td className="py-3.5 px-4 text-outline">Dubai</td>
<td className="py-3.5 px-4 text-secondary font-bold">2.10 m</td>
<td className="py-3.5 px-4"><span className="px-2 py-0.5 rounded bg-surface-container-lowest text-secondary">1 Ton Open Pickup</span></td>
<td className="py-3.5 px-4 text-right text-outline">Strict height bar buzzer</td>
</tr>
</tbody>
</table>
</div>
<div className="p-3 bg-surface-container-low text-right">
<Link className="font-label-mono text-xs text-secondary hover:underline inline-flex items-center gap-1" href="/request-quote">
              Download Entire 180-Building Height Matrix PDF <span className="material-symbols-outlined text-[14px]">download</span>
</Link>
</div>
</div>
</div>
</div>
</section>
{/*  Downloadable Operational Assets & Templates Strip  */}
<section className="px-margin lg:px-margin-desktop py-space-xl max-w-[1440px] mx-auto w-full">
<div className="mb-10 text-center max-w-2xl mx-auto">
<span className="font-label-mono text-label-mono uppercase tracking-widest text-secondary">Standard Operating Procedures</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">Download Operational Dispatch Kits</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
        Field-approved documentation templates designed to meet UAE Civil Defence, RTA, and Free Zone logistics compliance.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Checklist 1  */}
<div className="bg-surface-container-low p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
<span className="material-symbols-outlined text-[28px]">assignment_turned_in</span>
</div>
<div className="inline-flex items-center gap-1 text-[11px] font-label-mono text-outline mb-1">
<span>FORMAT: PDF + XLS</span> • <span>VERSION 2025.2</span>
</div>
<h3 className="font-headline-md text-headline-md text-lg text-on-surface font-bold">
            Pre-Move Checklist for UAE Villas &amp; Luxury Estates
          </h3>
<p className="font-body-md text-sm text-on-surface-variant mt-2">
            Community gate pass applications (Emaar, Nakheel, Damac), security deposit waivers, service elevator reservation timings, and parking bay permissions.
          </p>
</div>
<div className="pt-6 mt-6 flex items-center justify-between">
<span className="font-label-mono text-xs text-outline">1.4 MB Verified</span>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high hover:bg-secondary hover:text-on-secondary font-label-lg text-xs font-bold text-on-surface transition-colors">
<span className="material-symbols-outlined text-[16px]">download</span> Download
          </button>
</div>
</div>
{/*  Checklist 2  */}
<div className="bg-surface-container-low p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
<span className="material-symbols-outlined text-[28px]">description</span>
</div>
<div className="inline-flex items-center gap-1 text-[11px] font-label-mono text-outline mb-1">
<span>FORMAT: FILLABLE PDF</span> • <span>RTA SANCTIONED</span>
</div>
<h3 className="font-headline-md text-headline-md text-lg text-on-surface font-bold">
            Commercial Bill of Lading (BOL) Template
          </h3>
<p className="font-body-md text-sm text-on-surface-variant mt-2">
            Legally scrutinized consignment note, chain-of-custody transfer records, driver signature sheets, and cargo damage verification forms.
          </p>
</div>
<div className="pt-6 mt-6 flex items-center justify-between">
<span className="font-label-mono text-xs text-outline">850 KB Multi-Language</span>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high hover:bg-secondary hover:text-on-secondary font-label-lg text-xs font-bold text-on-surface transition-colors">
<span className="material-symbols-outlined text-[16px]">download</span> Download
          </button>
</div>
</div>
{/*  Checklist 3  */}
<div className="bg-surface-container-low p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
<span className="material-symbols-outlined text-[28px]">warning</span>
</div>
<div className="inline-flex items-center gap-1 text-[11px] font-label-mono text-outline mb-1">
<span>CIVIL DEFENCE</span> • <span>HAZCHEM SCHEDULE</span>
</div>
<h3 className="font-headline-md text-headline-md text-lg text-on-surface font-bold">
            Chemical &amp; Hazardous Goods Restriction Matrix
          </h3>
<p className="font-body-md text-sm text-on-surface-variant mt-2">
            Classification of restricted cargo (paint thinners, compressed gas, lithium arrays) prohibited from standard road transit without specialized HazMat placards.
          </p>
</div>
<div className="pt-6 mt-6 flex items-center justify-between">
<span className="font-label-mono text-xs text-outline">2.1 MB Official</span>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high hover:bg-secondary hover:text-on-secondary font-label-lg text-xs font-bold text-on-surface transition-colors">
<span className="material-symbols-outlined text-[16px]">download</span> Download
          </button>
</div>
</div>
</div>
</section>
{/*  Editorial Insight Bar: Industry FAQs for Dispatchers  */}
<section className="px-margin lg:px-margin-desktop py-space-lg max-w-[1440px] mx-auto w-full">
<div className="bg-surface-container-low rounded-xl p-6 lg:p-12 shadow-xl">
<div className="max-w-xl mb-8">
<span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest">Logistics Desk FAQ</span>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold mt-1">Frequently Questioned Road Directives</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-4">
<div className="p-4 rounded-lg bg-surface-container">
<h4 className="font-label-lg text-label-lg font-bold text-on-surface">Can standard 3-Ton pickups transit between Dubai and Abu Dhabi at night?</h4>
<p className="font-body-md text-sm text-on-surface-variant mt-2 leading-relaxed">
              Yes, provided the vehicle possesses a valid electronic Mulkiya reflecting commercial carriage and conforms to standard cargo height requirements below 4 meters. No curfew restrictions apply between 21:00 and 05:30.
            </p>
</div>
<div className="p-4 rounded-lg bg-surface-container">
<h4 className="font-label-lg text-label-lg font-bold text-on-surface">Is cargo transit insurance legally mandatory for commercial movement?</h4>
<p className="font-body-md text-sm text-on-surface-variant mt-2 leading-relaxed">
              Under UAE Federal Transport Law, basic carrier third-party liability is required. However, high-value goods (equipment, fine art, precision marble) require an explicit Comprehensive Goods-in-Transit (GIT) declaration to be fully indemnified.
            </p>
</div>
</div>
<div className="space-y-4">
<div className="p-4 rounded-lg bg-surface-container">
<h4 className="font-label-lg text-label-lg font-bold text-on-surface">What is the penalty for exceeding tare axle ratings at highway weighbridges?</h4>
<p className="font-body-md text-sm text-on-surface-variant mt-2 leading-relaxed">
              Federal weighbridges located on E11 and E311 levy fines scaling from AED 500 up to AED 5,000 depending on the percentage overloaded, with prospective vehicle impoundment until cargo is cross-docked onto another chassis.
            </p>
</div>
<div className="p-4 rounded-lg bg-surface-container">
<h4 className="font-label-lg text-label-lg font-bold text-on-surface">How do I obtain the building move-in NOC in master communities?</h4>
<p className="font-body-md text-sm text-on-surface-variant mt-2 leading-relaxed">
              Apply via the master developer's portal (e.g., Emaar Community Portal or Kingfield) 48 business hours in advance. You must upload the tenant tenancy contract (Ejari), mover's commercial trade license, and driver Emirates IDs.
            </p>
</div>
</div>
</div>
</div>
</section>
{/*  Newsletter / UAE Logistics Advisory Signup Strip  */}
<section className="px-margin lg:px-margin-desktop py-space-xl max-w-[1440px] mx-auto w-full">
<div className="relative rounded-2xl bg-gradient-to-r from-surface-container-high via-surface-container to-surface-container-high p-8 lg:p-14 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
<div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
<div className="max-w-xl text-left">
<span className="font-label-mono text-label-mono uppercase tracking-widest text-secondary font-bold">Bi-Weekly Regulatory Dispatch</span>
<h3 className="font-headline-lg text-headline-lg text-on-surface font-extrabold mt-2">
          Stay Ahead of UAE Road Laws, Road Closures &amp; Port Mandates
        </h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Join 4,800+ UAE fleet dispatchers, supply chain directors, and relocation managers receiving our early-warning advisory on new RTA road tariffs, port e-tokens, and holiday curfews.
        </p>
</div>
<div className="w-full lg:w-auto flex-1 max-w-md">
<form className="flex flex-col sm:flex-row gap-3 w-full" >
<input className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md px-4 py-3.5 rounded-lg placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary transition-all" placeholder="corporate.email@company.ae" required type="email"/>
<button className="whitespace-nowrap px-6 py-3.5 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-xl hover:bg-secondary-fixed transition-all" type="submit">
            Subscribe Free
          </button>
</form>
<span className="font-label-mono text-[11px] text-outline mt-2 block">
          Zero marketing spam. Only operational directives, gate pass protocols &amp; official bulletins.
        </span>
</div>
</div>
</section>
{/*  Interactive JavaScript for Category Filter and Real-Time Search  */}

</div>
    </div>
  );
}
