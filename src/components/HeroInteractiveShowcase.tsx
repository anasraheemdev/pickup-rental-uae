"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FleetVehicle {
  id: "1ton" | "3ton" | "7ton";
  tabLabel: string;
  badge: string;
  title: string;
  price: string;
  capacity: string;
  volume: string;
  bestFor: string;
  image: string;
  alt: string;
  href: string;
}

const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: "1ton",
    tabLabel: "1-Ton Pickup",
    badge: "Most Popular",
    title: "1-Ton Single & Double Cab Pickup",
    price: "From 150 AED",
    capacity: "1,000 kg",
    volume: "4.5 m³",
    bestFor: "Apartments, furniture moves & express boxes",
    image: "/images/home/hero-pickup-uae.webp",
    alt: "Modern white commercial 1-ton pickup truck on Dubai highway during golden hour",
    href: "/fleet/1-ton-pickup-truck"
  },
  {
    id: "3ton",
    tabLabel: "3-Ton Truck",
    badge: "Enclosed Box",
    title: "3-Ton Commercial Enclosed Box Truck",
    price: "From 280 AED",
    capacity: "3,000 kg",
    volume: "16.5 m³",
    bestFor: "Villas, palletized goods & commercial stock",
    image: "/images/fleet/3-ton-pickup.webp",
    alt: "Modern white 3-ton commercial enclosed box truck in Dubai UAE",
    href: "/fleet/3-ton-pickup-truck"
  },
  {
    id: "7ton",
    tabLabel: "7-Ton Heavy",
    badge: "Industrial Freight",
    title: "7-Ton Heavy Road Transport Truck",
    price: "From 550 AED",
    capacity: "7,000 kg",
    volume: "Heavy Cargo Bed",
    bestFor: "Industrial machinery, steel & bulk transit",
    image: "/images/fleet/7-ton-pickup.webp",
    alt: "Heavy duty 7-ton commercial freight transport truck in UAE",
    href: "/fleet/7-ton-pickup-truck"
  }
];

export default function HeroInteractiveShowcase() {
  const [selectedId, setSelectedId] = useState<"1ton" | "3ton" | "7ton">("1ton");
  const activeVehicle = FLEET_VEHICLES.find((v) => v.id === selectedId) || FLEET_VEHICLES[0];

  return (
    <div className="relative w-full">
      {/* Decorative Outer Ambient Halo */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-secondary/30 via-secondary/10 to-primary/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>

      {/* Main Glassmorphic Showcase Container */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] border border-secondary/30 bg-surface-container-low/95 backdrop-blur-md">
        {/* Top Floating Telemetry Bar */}
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between gap-2 pointer-events-none">
          <span className="px-2.5 sm:px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-white font-label-mono text-[9px] sm:text-[11px] flex items-center gap-1.5 shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
            </span>
            <span className="font-semibold tracking-wide">Live Dispatch Desk</span>
          </span>

          <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-secondary to-[#ffc634] text-slate-950 font-label-mono text-[10px] sm:text-xs font-black shadow-lg">
            {activeVehicle.price}
          </span>
        </div>

        {/* Dynamic Image Display with Smooth Aspect Ratio */}
        <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[360px] bg-surface-container-lowest overflow-hidden">
          <Image
            key={activeVehicle.id}
            src={activeVehicle.image}
            alt={activeVehicle.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />

          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/20 to-transparent pointer-events-none"></div>

          {/* Floating Customer Trust Pill */}
          <div className="absolute bottom-3 left-3 z-10 hidden xs:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/10 text-white text-[10px] sm:text-xs font-label-mono shadow-md">
            <span className="material-symbols-outlined text-[14px] text-secondary">star</span>
            <span className="font-bold text-secondary">4.9/5</span>
            <span className="text-white/60">•</span>
            <span className="text-white/90">1,400+ UAE Trips</span>
          </div>

          {/* Vehicle Category Badge */}
          <div className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-secondary/20 backdrop-blur-md border border-secondary/40 text-secondary text-[10px] sm:text-xs font-label-mono font-bold">
            <span className="material-symbols-outlined text-[13px]">verified</span>
            <span>{activeVehicle.badge}</span>
          </div>
        </div>

        {/* Interactive Fleet Selector & Telemetry Console */}
        <div className="p-3 sm:p-4 bg-surface-container/90 border-t border-surface-container-high/60 backdrop-blur-xl">
          {/* Tabs for Vehicle Classes */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 bg-surface-container-lowest/70 p-1 rounded-xl border border-surface-container-high/40">
            {FLEET_VEHICLES.map((vehicle) => {
              const isSelected = vehicle.id === selectedId;
              return (
                <button
                  key={vehicle.id}
                  onClick={() => setSelectedId(vehicle.id)}
                  type="button"
                  className={`py-2 px-1 sm:px-2 rounded-lg text-center transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-secondary text-slate-950 font-bold shadow-md scale-[1.02]"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40 font-medium text-xs"
                  }`}
                >
                  <div className="text-[11px] sm:text-xs tracking-tight truncate font-bold">
                    {vehicle.tabLabel}
                  </div>
                  <div
                    className={`text-[9px] sm:text-[10px] truncate ${
                      isSelected ? "text-slate-900 font-semibold" : "text-on-surface-variant/70"
                    }`}
                  >
                    {vehicle.capacity}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Vehicle Spec Summary & Direct Action */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">local_shipping</span>
                <span className="font-headline-md text-xs sm:text-sm font-bold text-on-surface truncate">
                  {activeVehicle.title}
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-on-surface-variant truncate mt-0.5">
                {activeVehicle.bestFor}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={activeVehicle.href}
                className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-high/80 hover:bg-surface-container-high border border-surface-container-highest text-secondary text-[11px] font-semibold transition-colors"
              >
                <span>Specs</span>
                <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
              </Link>
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-1 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-secondary to-[#ffc634] text-slate-950 text-[11px] font-extrabold shadow-sm hover:brightness-105 active:scale-95 transition-all"
              >
                <span>Book This</span>
                <span className="material-symbols-outlined text-[13px]">bolt</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
