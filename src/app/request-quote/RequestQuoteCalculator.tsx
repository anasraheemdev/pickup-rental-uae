"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

interface DestinationData {
  dist: number;
  time: string;
  tolls: number;
  name: string;
}

const DESTINATIONS: Record<string, DestinationData> = {
  business_bay: { dist: 18, time: "22 mins", tolls: 1, name: "Business Bay, Dubai" },
  dubai_marina: { dist: 24, time: "28 mins", tolls: 1, name: "Dubai Marina & JLT" },
  deira_bur_dubai: { dist: 12, time: "20 mins", tolls: 1, name: "Deira & Bur Dubai" },
  al_quoz: { dist: 15, time: "18 mins", tolls: 0, name: "Al Quoz Industrial, Dubai" },
  jafza: { dist: 35, time: "35 mins", tolls: 1, name: "Jebel Ali Free Zone (JAFZA)" },
  sharjah_central: { dist: 38, time: "45 mins", tolls: 2, name: "Sharjah Central / Industrial" },
  sharjah_al_nahda: { dist: 28, time: "35 mins", tolls: 1, name: "Sharjah Al Nahda / Al Majaz" },
  ajman_city: { dist: 52, time: "55 mins", tolls: 2, name: "Ajman City Center & Free Zone" },
  ajman_jurf: { dist: 58, time: "58 mins", tolls: 2, name: "Ajman Al Jurf Industrial Area" }
};

interface VehicleData {
  id: string;
  name: string;
  category: string;
  payload: string;
  volume: string;
  badge: string;
  clearance: string;
}

const VEHICLES: VehicleData[] = [
  {
    id: "1ton",
    name: "1 Ton Pickup",
    category: "Toyota Hilux / Isuzu D-Max",
    payload: "1,000 kg",
    volume: "4.5 m³",
    badge: "Urban Rapid",
    clearance: "1.95m (Basement Friendly)"
  },
  {
    id: "3ton",
    name: "3 Ton Commercial Truck",
    category: "Mitsubishi Canter / Isuzu NPR",
    payload: "3,000 kg",
    volume: "16.5 m³",
    badge: "Most Popular",
    clearance: "3.10m (Surface Dock Required)"
  },
  {
    id: "7ton",
    name: "7 Ton Heavy Carrier",
    category: "Hino 500 / UD Croner",
    payload: "7,000 kg",
    volume: "34.0 m³",
    badge: "Bulk Cargo",
    clearance: "3.60m (Industrial Yard Only)"
  }
];

export default function RequestQuoteCalculator() {
  const [origin, setOrigin] = useState("Dubai Central (Downtown / Al Quoz)");
  const [destination, setDestination] = useState("business_bay");
  const [vehicleId, setVehicleId] = useState("3ton");
  const [cargoType, setCargoType] = useState<"furniture" | "pallets" | "machinery" | "general">("furniture");
  const [helperOption, setHelperOption] = useState<0 | 1 | 2>(1);
  const [timing, setTiming] = useState<"urgent" | "scheduled">("urgent");

  // Form states
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [pickupDetails, setPickupDetails] = useState("");
  const [dropDetails, setDropDetails] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const destData = DESTINATIONS[destination] || DESTINATIONS.business_bay;
  const vehData = VEHICLES.find((v) => v.id === vehicleId) || VEHICLES[1];

  const cargoLabels: Record<string, string> = {
    furniture: "Furniture & Home (Blanket wrap)",
    pallets: "Commercial Pallets (Dock loading)",
    machinery: "Machinery & Equipment (Tied-down)",
    general: "General Cargo & Cartons"
  };

  const helperLabels: Record<number, string> = {
    0: "Driver Only (Loading by Shipper)",
    1: "Driver + 1 Helper (Assisted Loading)",
    2: "Driver + 2 Helpers (Full Crew Service)"
  };

  const whatsAppMessage = useMemo(() => {
    return encodeURIComponent(
      `Hello Pickup & Rental UAE, I would like to request a guaranteed quote for my trip:\n\n` +
      `• Origin: ${origin}${pickupDetails ? ` (${pickupDetails})` : ""}\n` +
      `• Destination: ${destData.name}${dropDetails ? ` (${dropDetails})` : ""}\n` +
      `• Distance: ~${destData.dist} km\n` +
      `• Vehicle: ${vehData.name} (${vehData.payload})\n` +
      `• Cargo: ${cargoLabels[cargoType]}\n` +
      `• Crew: ${helperLabels[helperOption]}\n` +
      `• Schedule: ${timing === "urgent" ? "Urgent (<45 Mins Dispatch)" : bookingDate ? `Scheduled (${bookingDate})` : "Scheduled"}\n` +
      (fullName ? `• Name: ${fullName}\n` : "") +
      (phoneNumber ? `• Phone: ${phoneNumber}\n` : "") +
      (notes ? `• Notes: ${notes}\n` : "") +
      `\nPlease provide your upfront fixed price and driver availability.`
    );
  }, [origin, destData, vehData, cargoType, helperOption, timing, pickupDetails, dropDetails, bookingDate, fullName, phoneNumber, notes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Interactive Trip Configurator Section */}
      <section className="py-12 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form & Trip Configurator */}
          <div className="lg:col-span-8 space-y-8">
            {/* Step 1: Route Selection */}
            <div className="p-6 md:p-8 rounded-2xl bg-surface-container border border-surface-container-high shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
                <span className="font-label-mono text-xs uppercase text-secondary font-bold tracking-wider">
                  STEP 1 OF 3: ROUTE &amp; TRANSIT CORRIDOR
                </span>
                <span className="text-xs font-label-mono text-outline">Dubai • Sharjah • Ajman</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-label-mono uppercase text-on-surface mb-2 font-semibold">
                    Pickup Hub / Origin
                  </label>
                  <select
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full bg-surface-container-lowest text-on-surface p-3.5 rounded-xl border border-surface-container-high focus:outline-none focus:border-secondary text-sm font-body-md"
                  >
                    <option value="Dubai Central (Downtown / Al Quoz)">Dubai Central (Downtown / Al Quoz)</option>
                    <option value="Dubai Marina / JLT / Palm Jumeirah">Dubai Marina / JLT / Palm Jumeirah</option>
                    <option value="Jebel Ali Free Zone (JAFZA / South)">Jebel Ali Free Zone (JAFZA / South)</option>
                    <option value="Deira / Bur Dubai / Cargo District">Deira / Bur Dubai / Cargo District</option>
                    <option value="Sharjah Industrial Areas (1-18)">Sharjah Industrial Areas (1-18)</option>
                    <option value="Sharjah Al Nahda / Al Majaz">Sharjah Al Nahda / Al Majaz</option>
                    <option value="Ajman City Center / Corniche">Ajman City Center / Corniche</option>
                    <option value="Ajman Al Jurf Industrial">Ajman Al Jurf Industrial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-label-mono uppercase text-on-surface mb-2 font-semibold">
                    Drop-off Destination
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-surface-container-lowest text-on-surface p-3.5 rounded-xl border border-surface-container-high focus:outline-none focus:border-secondary text-sm font-body-md"
                  >
                    {Object.entries(DESTINATIONS).map(([key, data]) => (
                      <option key={key} value={key}>
                        {data.name} (~{data.dist} km)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Highway Telemetry Bar (No estimated price numbers) */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-surface-container-lowest border border-surface-container-high font-label-mono text-xs">
                <div>
                  <span className="text-outline block text-[11px]">TRANSIT DISTANCE</span>
                  <span className="text-secondary font-bold text-sm">~{destData.dist} km</span>
                </div>
                <div>
                  <span className="text-outline block text-[11px]">DRIVE WINDOW</span>
                  <span className="text-on-surface font-bold text-sm">{destData.time}</span>
                </div>
                <div>
                  <span className="text-outline block text-[11px]">RTA SALIK GATES</span>
                  <span className="text-on-surface font-bold text-sm">{destData.tolls} Gate{destData.tolls !== 1 ? "s" : ""} Included</span>
                </div>
              </div>
            </div>

            {/* Step 2: Vehicle & Cargo Selection */}
            <div className="p-6 md:p-8 rounded-2xl bg-surface-container border border-surface-container-high shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
                <span className="font-label-mono text-xs uppercase text-secondary font-bold tracking-wider">
                  STEP 2 OF 3: VEHICLE &amp; HANDLING SPECIFICATIONS
                </span>
                <span className="text-xs font-label-mono text-outline">Licensed Commercial Fleet</span>
              </div>

              {/* Vehicle Options - Clean specifications without mock base fares */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {VEHICLES.map((v) => {
                  const isSelected = vehicleId === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVehicleId(v.id)}
                      className={`p-5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                        isSelected
                          ? "bg-surface-container-high border-secondary shadow-lg shadow-secondary/10 ring-2 ring-secondary/50"
                          : "bg-surface-container-lowest border-surface-container-high hover:border-outline"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-[10px] font-label-mono uppercase px-2 py-0.5 rounded font-bold ${
                            isSelected ? "bg-secondary text-on-secondary" : "bg-surface-container text-on-surface-variant"
                          }`}>
                            {v.badge}
                          </span>
                          <span className="text-[11px] font-label-mono text-secondary font-semibold">
                            Fixed Fare Quote
                          </span>
                        </div>
                        <h4 className="font-headline-sm text-base font-bold text-on-surface mt-1">{v.name}</h4>
                        <p className="text-xs text-on-surface-variant mt-1">{v.category}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-surface-container space-y-1.5 text-[11px] font-label-mono text-on-surface-variant">
                        <div className="flex justify-between">
                          <span>Max Payload:</span> <strong className="text-on-surface">{v.payload}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Box Volume:</span> <strong className="text-on-surface">{v.volume}</strong>
                        </div>
                        <div className="text-[10px] text-secondary font-medium mt-1">{v.clearance}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Cargo Category & Crew Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-surface-container-high">
                <div>
                  <label className="block text-xs font-label-mono uppercase text-on-surface mb-2 font-semibold">
                    Cargo Classification
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "furniture", label: "Furniture & Home" },
                      { id: "pallets", label: "Commercial Pallets" },
                      { id: "machinery", label: "Machinery & Tools" },
                      { id: "general", label: "General Goods" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCargoType(item.id as any)}
                        className={`p-3 rounded-lg text-xs font-semibold border transition-all text-center ${
                          cargoType === item.id
                            ? "bg-secondary text-on-secondary border-secondary"
                            : "bg-surface-container-lowest text-on-surface-variant border-surface-container-high hover:text-on-surface"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-label-mono uppercase text-on-surface mb-2 font-semibold">
                    Crew &amp; Loading Assistance
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { option: 0, label: "Driver Only", sub: "Shipper Loads" },
                      { option: 1, label: "+1 Helper", sub: "Assisted Move" },
                      { option: 2, label: "+2 Helpers", sub: "Full Crew" },
                    ].map((h) => (
                      <button
                        key={h.option}
                        type="button"
                        onClick={() => setHelperOption(h.option as any)}
                        className={`p-3 rounded-lg text-xs font-semibold border transition-all text-center flex flex-col justify-center items-center ${
                          helperOption === h.option
                            ? "bg-secondary text-on-secondary border-secondary"
                            : "bg-surface-container-lowest text-on-surface-variant border-surface-container-high hover:text-on-surface"
                        }`}
                      >
                        <span>{h.label}</span>
                        <span className="text-[10px] font-label-mono opacity-80">{h.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timing Selection */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <span className="text-xs font-label-mono uppercase text-on-surface font-semibold">Dispatch Window:</span>
                <button
                  type="button"
                  onClick={() => setTiming("urgent")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    timing === "urgent"
                      ? "bg-secondary text-on-secondary"
                      : "bg-surface-container-lowest text-on-surface-variant border border-surface-container-high"
                  }`}
                >
                  ⚡ Express (&lt;45 Mins Urgent Dispatch)
                </button>
                <button
                  type="button"
                  onClick={() => setTiming("scheduled")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    timing === "scheduled"
                      ? "bg-secondary text-on-secondary"
                      : "bg-surface-container-lowest text-on-surface-variant border border-surface-container-high"
                  }`}
                >
                  📅 Scheduled Date &amp; Time
                </button>
              </div>
            </div>

            {/* Step 3: Contact & Booking Intake Form */}
            <div className="p-6 md:p-8 rounded-2xl bg-surface-container border border-surface-container-high shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
                <span className="font-label-mono text-xs uppercase text-secondary font-bold tracking-wider">
                  STEP 3 OF 3: CONTACT &amp; LOCATION DETAILS
                </span>
                <span className="text-xs font-label-mono text-outline">Direct Dispatch Desk Assignment</span>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-surface-container-lowest border border-success/40 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-success/20 text-success flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="font-headline-md text-2xl font-bold text-on-surface">
                    Quote Request Dispatched to Central Control!
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant max-w-lg mx-auto">
                    Thank you, {fullName || "Customer"}. Our central dispatch desk has received your trip parameters for {vehData.name} from {origin} to {destData.name}. Our dispatch master is reviewing your route and will contact you within 5 minutes with your guaranteed fixed quote.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <a
                      href={`https://wa.me/971555775074?text=${whatsAppMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm inline-flex items-center gap-2 hover:opacity-90 shadow-lg shadow-[#25D366]/20"
                    >
                      Fast-Track via WhatsApp
                    </a>
                    <a
                      href="tel:+971555775074"
                      className="px-6 py-3 rounded-xl bg-secondary text-on-secondary font-bold text-sm inline-flex items-center gap-2 hover:bg-secondary-fixed"
                    >
                      Call Dispatch (055 577 5074)
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-label-mono uppercase text-on-surface mb-1 font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full bg-surface-container-lowest text-on-surface p-3.5 rounded-xl border border-surface-container-high focus:outline-none focus:border-secondary text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-label-mono uppercase text-on-surface mb-1 font-semibold">
                        UAE Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="055 577 5074 or +971..."
                        className="w-full bg-surface-container-lowest text-on-surface p-3.5 rounded-xl border border-surface-container-high focus:outline-none focus:border-secondary text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-label-mono uppercase text-on-surface mb-1 font-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        placeholder="name@company.ae"
                        className="w-full bg-surface-container-lowest text-on-surface p-3.5 rounded-xl border border-surface-container-high focus:outline-none focus:border-secondary text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-label-mono uppercase text-on-surface mb-1 font-semibold">
                        Pickup Address / Tower / Gate *
                      </label>
                      <input
                        type="text"
                        required
                        value={pickupDetails}
                        onChange={(e) => setPickupDetails(e.target.value)}
                        placeholder="e.g., Al Quoz 3, Street 8, Warehouse 14"
                        className="w-full bg-surface-container-lowest text-on-surface p-3.5 rounded-xl border border-surface-container-high focus:outline-none focus:border-secondary text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-label-mono uppercase text-on-surface mb-1 font-semibold">
                        Drop-off Address / Tower *
                      </label>
                      <input
                        type="text"
                        required
                        value={dropDetails}
                        onChange={(e) => setDropDetails(e.target.value)}
                        placeholder="e.g., Downtown Dubai or Sharjah Al Majaz"
                        className="w-full bg-surface-container-lowest text-on-surface p-3.5 rounded-xl border border-surface-container-high focus:outline-none focus:border-secondary text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-label-mono uppercase text-on-surface mb-1 font-semibold">
                        Preferred Date &amp; Time
                      </label>
                      <input
                        type="text"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        placeholder="e.g., Today at 3:00 PM or Tomorrow morning"
                        className="w-full bg-surface-container-lowest text-on-surface p-3.5 rounded-xl border border-surface-container-high focus:outline-none focus:border-secondary text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-label-mono uppercase text-on-surface mb-1 font-semibold">
                        Cargo Notes / Elevator Details
                      </label>
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g., 3-seater sofa + 4 boxes, service elevator available"
                        className="w-full bg-surface-container-lowest text-on-surface p-3.5 rounded-xl border border-surface-container-high focus:outline-none focus:border-secondary text-sm"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
                    >
                      Request Guaranteed Quote from Dispatch
                    </button>
                    <a
                      href={`https://wa.me/971555775074?text=${whatsAppMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold transition-all text-sm text-center inline-flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
                    >
                      <span>Instant Quote via WhatsApp</span>
                      <span className="material-symbols-outlined text-sm">chat</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Rail: Trip Specifications & Dispatch Guarantee Ledger */}
          <div className="lg:col-span-4 sticky top-28 bg-surface-container p-8 rounded-2xl border border-surface-container-high shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
              <span className="font-label-mono text-xs uppercase text-secondary font-bold tracking-wider">
                TRIP SPECIFICATIONS
              </span>
              <span className="text-[11px] font-label-mono text-success flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                Direct Dispatch
              </span>
            </div>

            {/* Selected Trip Specifications */}
            <div className="space-y-3 text-xs font-label-mono">
              <div className="flex justify-between items-center text-on-surface-variant pb-2 border-b border-surface-container-high/40">
                <span>Vehicle:</span>
                <strong className="text-on-surface font-semibold">{vehData.name}</strong>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant pb-2 border-b border-surface-container-high/40">
                <span>Capacity:</span>
                <strong className="text-secondary font-semibold">{vehData.payload} ({vehData.volume})</strong>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant pb-2 border-b border-surface-container-high/40">
                <span>Route:</span>
                <strong className="text-on-surface font-semibold text-right max-w-[200px] truncate">{destData.name}</strong>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant pb-2 border-b border-surface-container-high/40">
                <span>Distance:</span>
                <strong className="text-on-surface font-semibold">~{destData.dist} km ({destData.time})</strong>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant pb-2 border-b border-surface-container-high/40">
                <span>Cargo Profile:</span>
                <strong className="text-on-surface font-semibold">{cargoLabels[cargoType]}</strong>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant pb-2 border-b border-surface-container-high/40">
                <span>Crew:</span>
                <strong className="text-on-surface font-semibold">{helperLabels[helperOption]}</strong>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant pb-2 border-b border-surface-container-high/40">
                <span>Dispatch Mode:</span>
                <strong className="text-secondary font-semibold">
                  {timing === "urgent" ? "⚡ Express (<45 Mins)" : "📅 Scheduled Window"}
                </strong>
              </div>
            </div>

            {/* Guaranteed Quote on Demand Card (Zero Estimated Pricing) */}
            <div className="p-5 rounded-xl bg-surface-container-lowest border border-secondary/30 space-y-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-xl">verified</span>
                <span className="font-label-lg text-sm font-bold text-on-surface">
                  100% Upfront Fixed Fare Guarantee
                </span>
              </div>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                We do not estimate automated prices because every load is unique. Our central dispatch coordinator reviews your exact route, floor level, and cargo type to provide an all-inclusive fixed rate with zero surprise charges.
              </p>
              <div className="pt-2 border-t border-surface-container-high/60 flex items-center justify-between text-xs font-label-mono">
                <span className="text-outline">Tolls &amp; Fuel:</span>
                <span className="text-success font-semibold">All Included in Quote</span>
              </div>
            </div>

            {/* Quick Contact Desk */}
            <div className="space-y-3 pt-2">
              <a
                href={`https://wa.me/971555775074?text=${whatsAppMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-[#25D366]/20"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>Get Instant Quote via WhatsApp</span>
              </a>

              <a
                href="tel:+971555775074"
                className="w-full py-3.5 px-4 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-mono text-xs font-bold flex items-center justify-center gap-2 transition-colors border border-surface-container-highest"
              >
                <span className="material-symbols-outlined text-secondary text-base">call</span>
                <span>Call Central Dispatch: 055 577 5074</span>
              </a>
            </div>

            {/* Trust Badges Strip */}
            <div className="pt-4 border-t border-surface-container-high space-y-2 text-xs text-on-surface-variant font-label-mono">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                <span>Serving Dubai, Sharjah &amp; Ajman</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">timer</span>
                <span>45-Min Average Express Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">receipt_long</span>
                <span>FTA 5% VAT Tax Invoices Provided</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
