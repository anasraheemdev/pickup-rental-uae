"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("1ton-pickup");
  const [pickupCity, setPickupCity] = useState("dubai");
  const [dropoffCity, setDropoffCity] = useState("dubai");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-xl bg-surface-container-low border border-success/40 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-success/20 text-success flex items-center justify-center mx-auto text-2xl font-bold">
          ✓
        </div>
        <h3 className="font-headline-md text-2xl font-bold text-on-surface">
          Enquiry Received by Dispatch Desk
        </h3>
        <p className="font-body-md text-sm text-on-surface-variant max-w-lg mx-auto">
          Thank you, {fullName}. Our central dispatch controller is reviewing your route requirements from {pickupCity} to {dropoffCity}. You will receive a direct phone call or WhatsApp response shortly.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+971555775074"
            className="px-6 py-3 rounded-xl bg-secondary text-on-secondary font-bold text-sm inline-flex items-center gap-2 hover:bg-secondary-fixed transition-colors"
          >
            Call Dispatch (055 577 5074)
          </a>
          <a
            href={`https://wa.me/971555775074?text=${encodeURIComponent(`Hello, I submitted a contact enquiry for a ${vehicle} from ${pickupCity} to ${dropoffCity}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Follow Up via WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-label-mono uppercase text-on-surface mb-1 font-semibold">
            Contact Full Name *
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Ahmed Al-Mansoor"
            className="w-full h-[52px] px-4 rounded-xl bg-surface-container-low text-on-surface text-sm border border-surface-container-high focus:outline-none focus:border-secondary transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-label-mono uppercase text-on-surface mb-1 font-semibold">
            Company / Business Name
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g. Apex Trading LLC (optional)"
            className="w-full h-[52px] px-4 rounded-xl bg-surface-container-low text-on-surface text-sm border border-surface-container-high focus:outline-none focus:border-secondary transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-label-mono uppercase text-on-surface mb-1 font-semibold">
            UAE Contact Phone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+971 50 123 4567"
            className="w-full h-[52px] px-4 rounded-xl bg-surface-container-low text-on-surface text-sm border border-surface-container-high focus:outline-none focus:border-secondary transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-label-mono uppercase text-on-surface mb-1 font-semibold">
            Vehicle Required *
          </label>
          <select
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="w-full h-[52px] px-4 rounded-xl bg-surface-container-low text-on-surface text-sm border border-surface-container-high focus:outline-none focus:border-secondary transition-all cursor-pointer"
          >
            <option value="1ton-pickup">1 Ton Pickup (Open / Box)</option>
            <option value="3ton-pickup">3 Ton Commercial Truck</option>
            <option value="7ton-pickup">7 Ton Heavy Carrier</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-label-mono uppercase text-on-surface mb-1 font-semibold">
            Pickup Emirate / Area *
          </label>
          <select
            value={pickupCity}
            onChange={(e) => setPickupCity(e.target.value)}
            className="w-full h-[52px] px-4 rounded-xl bg-surface-container-low text-on-surface text-sm border border-surface-container-high focus:outline-none focus:border-secondary transition-all cursor-pointer"
          >
            <option value="dubai">Dubai</option>
            <option value="sharjah">Sharjah</option>
            <option value="ajman">Ajman</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-label-mono uppercase text-on-surface mb-1 font-semibold">
            Drop-off Emirate / Area *
          </label>
          <select
            value={dropoffCity}
            onChange={(e) => setDropoffCity(e.target.value)}
            className="w-full h-[52px] px-4 rounded-xl bg-surface-container-low text-on-surface text-sm border border-surface-container-high focus:outline-none focus:border-secondary transition-all cursor-pointer"
          >
            <option value="dubai">Dubai</option>
            <option value="sharjah">Sharjah</option>
            <option value="ajman">Ajman</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-label-mono uppercase text-on-surface mb-1 font-semibold">
          Cargo Description &amp; Special Requirements
        </label>
        <textarea
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Describe your items (e.g., pallets, furniture, basement parking height limits, loading helper requirements)..."
          className="w-full p-4 rounded-xl bg-surface-container-low text-on-surface text-sm border border-surface-container-high focus:outline-none focus:border-secondary transition-all resize-none"
        ></textarea>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
        >
          Send Priority Transport Enquiry
        </button>
        <span className="text-xs font-label-mono text-outline">
          Direct dispatch assignment across UAE
        </span>
      </div>
    </form>
  );
}
