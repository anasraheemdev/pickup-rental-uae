"use client";

import React from "react";
import Link from "next/link";
import RequestQuoteCalculator from "@/app/request-quote/RequestQuoteCalculator";

export default function BookingPage() {
  return (
    <div className="w-full">
      {/* Interactive Hero Strip */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest border-b border-surface-container-high/40">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fbbc2b 0.75px, transparent 0.75px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-[120px] pointer-events-none"></div>

        <div className="relative max-w-[1440px] mx-auto px-margin lg:px-margin-desktop py-space-lg lg:py-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container font-label-mono text-label-mono text-secondary mb-3">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                LIVE DISPATCH MATRIX • DUBAI • SHARJAH • AJMAN
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-extrabold">
                Instant Quote &amp; Dispatch Configurator
              </h1>
              <p className="font-body-lead text-body-lead text-on-surface-variant mt-2">
                Configure your transit route, vehicle tonnage, and crew requirements. Our central logistics team provides a guaranteed fixed upfront quote with zero surprise surcharges.
              </p>
            </div>

            {/* Live Operations Telemetry */}
            <div className="flex items-center gap-space-md">
              <div className="px-space-md py-3 rounded-xl bg-surface-container flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[22px]">timer</span>
                </div>
                <div>
                  <div className="font-label-mono text-[11px] text-outline uppercase tracking-wider">Avg Dispatch</div>
                  <div className="font-headline-md text-[18px] text-on-surface font-bold leading-tight">38 Mins</div>
                </div>
              </div>
              <div className="px-space-md py-3 rounded-xl bg-surface-container flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[22px]">verified_user</span>
                </div>
                <div>
                  <div className="font-label-mono text-[11px] text-outline uppercase tracking-wider">Fixed Fare</div>
                  <div className="font-headline-md text-[18px] text-on-surface font-bold leading-tight">100% Upfront</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Quote & Dispatch Configurator (No Estimated Pricing) */}
      <RequestQuoteCalculator />

      {/* Fleet Dimension Specifications Section */}
      <section className="w-full bg-surface-container-lowest py-space-xl border-t border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-4">
            <div>
              <span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest font-semibold">
                FLEET SPECIFICATIONS
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
                Cargo Bed &amp; Volumetric Guidelines
              </h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md">
              Every vehicle in our licensed carrier network complies strictly with UAE RTA regulations, equipped with cargo securing lashings and commercial hydraulic lifts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* 1 Ton Spec */}
            <div className="p-space-lg rounded-xl bg-surface-container flex flex-col justify-between border border-surface-container-high">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-[12px] px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-bold">
                    1 TON CLASS
                  </span>
                  <span className="font-label-mono text-[12px] text-secondary">Toyota Hilux / D-Max</span>
                </div>
                <h3 className="font-headline-md text-[18px] font-bold text-on-surface mb-2">Urban Quick Response</h3>
                <p className="font-body-md text-[13px] text-on-surface-variant mb-4">
                  Engineered for rapid apartment shifting, single appliances, and tight underground shopping mall logistics bays where ceiling clearance is restricted (&lt;2.1m).
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-3 bg-surface-container-low p-3 rounded-lg font-label-mono text-[11px]">
                <div>
                  <span className="text-outline block">Max Payload</span>
                  <span className="text-on-surface font-bold">1,050 kg</span>
                </div>
                <div>
                  <span className="text-outline block">Box Volume</span>
                  <span className="text-on-surface font-bold">4.2 m³</span>
                </div>
                <div>
                  <span className="text-outline block">Basement Clear</span>
                  <span className="text-on-surface font-bold">&lt;1.95m Clear</span>
                </div>
                <div>
                  <span className="text-outline block">Coverage</span>
                  <span className="text-on-surface font-bold">Dubai, SHJ, AJM</span>
                </div>
              </div>
            </div>

            {/* 3 Ton Spec */}
            <div className="p-space-lg rounded-xl bg-surface-container flex flex-col justify-between border border-surface-container-high">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-[12px] px-2.5 py-1 rounded bg-secondary text-on-secondary font-bold">
                    3 TON CLASS
                  </span>
                  <span className="font-label-mono text-[12px] text-secondary">Mitsubishi Canter</span>
                </div>
                <h3 className="font-headline-md text-[18px] font-bold text-on-surface mb-2">High-Cube Box Commercial</h3>
                <p className="font-body-md text-[13px] text-on-surface-variant mb-4">
                  The flagship choice for 1-2 bedroom apartments, commercial pallet transfers between Dubai, Sharjah, and Ajman, and exhibition booths with hydraulic tail-lift.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-3 bg-surface-container-low p-3 rounded-lg font-label-mono text-[11px]">
                <div>
                  <span className="text-outline block">Max Payload</span>
                  <span className="text-on-surface font-bold">3,200 kg</span>
                </div>
                <div>
                  <span className="text-outline block">Box Volume</span>
                  <span className="text-on-surface font-bold">18.5 m³</span>
                </div>
                <div>
                  <span className="text-outline block">Hydraulic Lift</span>
                  <span className="text-on-surface font-bold">1,000 kg Rated</span>
                </div>
                <div>
                  <span className="text-outline block">Coverage</span>
                  <span className="text-on-surface font-bold">Dubai, SHJ, AJM</span>
                </div>
              </div>
            </div>

            {/* 7 Ton Spec */}
            <div className="p-space-lg rounded-xl bg-surface-container flex flex-col justify-between border border-surface-container-high">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-[12px] px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-bold">
                    7 TON CLASS
                  </span>
                  <span className="font-label-mono text-[12px] text-secondary">UD Croner / Hino 500</span>
                </div>
                <h3 className="font-headline-md text-[18px] font-bold text-on-surface mb-2">Extended Heavy Cargo Deck</h3>
                <p className="font-body-md text-[13px] text-on-surface-variant mb-4">
                  Designed for heavy construction materials, full warehouse batch distribution, and large industrial moves across major commercial arteries.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-3 bg-surface-container-low p-3 rounded-lg font-label-mono text-[11px]">
                <div>
                  <span className="text-outline block">Max Payload</span>
                  <span className="text-on-surface font-bold">7,500 kg</span>
                </div>
                <div>
                  <span className="text-outline block">Deck Length</span>
                  <span className="text-on-surface font-bold">6.5m Open Deck</span>
                </div>
                <div>
                  <span className="text-outline block">Lashings</span>
                  <span className="text-on-surface font-bold">Heavy Ratchets</span>
                </div>
                <div>
                  <span className="text-outline block">Coverage</span>
                  <span className="text-on-surface font-bold">Dubai, SHJ, AJM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
