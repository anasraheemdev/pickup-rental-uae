"use client";

import React, { useState } from "react";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "971555775074";
  const defaultMessage = encodeURIComponent(
    "Hello Pickup & Rental UAE, I would like to inquire about booking a pickup truck."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Expandable Label / Pill on Desktop */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Pickup & Rental UAE on WhatsApp (055 577 5074)"
        className={`hidden sm:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-full bg-surface-container-high/95 backdrop-blur-md border border-surface-container-highest shadow-xl text-on-surface font-label-mono text-xs transition-all duration-300 transform ${
          isHovered
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-3 pointer-events-none scale-95"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
        <span className="font-semibold text-white">Chat with Dispatch</span>
        <span className="text-secondary font-bold">055 577 5074</span>
      </a>

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Pickup & Rental UAE on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] transform hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none"></span>

        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.507 14.307l-.009.075c-.236-.12-1.39-.686-1.606-.764-.216-.078-.373-.12-.53.12-.158.238-.609.764-.746.92-.138.16-.274.179-.51.06-.236-.12-.996-.367-1.898-1.171-.701-.624-1.175-1.396-1.313-1.633-.137-.237-.015-.365.104-.483.107-.107.236-.278.354-.417.119-.14.158-.238.236-.397.079-.16.04-.298-.02-.417-.058-.12-.53-1.278-.726-1.75-.19-.459-.384-.396-.53-.404l-.452-.007c-.157 0-.413.06-.629.298-.216.237-.825.807-.825 1.968 0 1.161.845 2.285.963 2.444.118.158 1.662 2.538 4.026 3.558.563.243 1.002.387 1.345.497.565.18 1.079.155 1.485.094.453-.067 1.39-.569 1.587-1.118.197-.549.197-1.02.138-1.118-.06-.099-.217-.158-.453-.277m-5.464 7.218c-1.802 0-3.568-.485-5.116-1.403l-.367-.218-3.805.998 1.016-3.71-.239-.38a10.428 10.428 0 0 1-1.6-5.617c0-5.78 4.702-10.482 10.484-10.482 2.798 0 5.43 1.09 7.41 3.07a10.415 10.415 0 0 1 3.072 7.412c-.003 5.783-4.705 10.486-10.489 10.486m0-22.725C5.405-1.2 0 4.204 0 10.842c0 2.12.553 4.188 1.603 6.009L.548 23.366l6.685-1.754a12.01 12.01 0 0 0 5.174 1.171h.005c6.637 0 12.043-5.404 12.046-12.044.002-3.218-1.25-6.244-3.527-8.523A12.001 12.001 0 0 0 12.043-1.2" />
        </svg>

        {/* Online Status Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#10b981] border-2 border-surface flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
        </span>
      </a>
    </div>
  );
}
