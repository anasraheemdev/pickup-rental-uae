"use client";

import React, { useState } from "react";
import JsonLd from "./JsonLd";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
  variant?: "light" | "dark";
}

export default function FaqSection({
  title = "Frequently Asked Questions",
  subtitle = "Clear, accurate information regarding pickup rental, dispatch times, vehicle sizes, and transport requirements across the UAE.",
  items,
  variant = "light"
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const isLight = variant === "light";

  return (
    <section
      className={`w-full py-12 lg:py-16 border-t ${
        isLight
          ? "bg-white text-slate-900 border-slate-200/90"
          : "bg-surface-container/30 text-on-surface border-surface-container/60"
      }`}
    >
      <JsonLd data={faqSchema} />
      <div className="max-w-[900px] mx-auto px-margin lg:px-margin-desktop">
        <div className="text-center mb-10">
          <span
            className={`font-label-mono text-xs uppercase tracking-widest font-bold ${
              isLight ? "text-amber-600" : "text-secondary"
            }`}
          >
            UAE Road Logistics Knowledge
          </span>
          <h2
            className={`font-headline-lg text-2xl lg:text-3xl font-extrabold mt-1.5 tracking-tight ${
              isLight ? "text-slate-900" : "text-on-surface"
            }`}
          >
            {title}
          </h2>
          <p
            className={`font-body-md text-sm max-w-xl mx-auto mt-2 leading-relaxed ${
              isLight ? "text-slate-600" : "text-on-surface-variant"
            }`}
          >
            {subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all overflow-hidden ${
                  isLight
                    ? "bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-sm"
                    : "bg-surface-container border border-surface-container-high/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 ${
                    isLight ? "focus-visible:ring-amber-500" : "focus-visible:ring-secondary"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-headline-md text-sm sm:text-base font-bold ${
                      isLight ? "text-slate-900" : "text-on-surface"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-xl transition-transform duration-200 shrink-0 ${
                      isLight ? "text-amber-600" : "text-secondary"
                    } ${isOpen ? "rotate-180" : ""}`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div
                    className={`px-5 sm:px-6 pb-5 pt-1 font-body-md text-sm leading-relaxed border-t ${
                      isLight
                        ? "text-slate-600 border-slate-200/80"
                        : "text-on-surface-variant border-surface-container-high/30"
                    }`}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
