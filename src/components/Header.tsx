"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PHONE_NUMBER, PHONE_DISPLAY, WHATSAPP_NUMBER } from "@/lib/seo";

interface NavSubItem {
  name: string;
  href: string;
  tag?: string;
}

interface NavItem {
  name: string;
  href: string;
  matchPrefix?: string;
  submenu?: NavSubItem[];
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    matchPrefix: "/services",
    submenu: [
      { name: "Services Overview", href: "/services" },
      { name: "Pickup Truck Rental", href: "/services/pickup-truck-rental", tag: "Agile" },
      { name: "Goods Transportation", href: "/services/goods-transportation", tag: "Cargo" },
      { name: "Furniture Transportation", href: "/services/furniture-transportation", tag: "Care" },
      { name: "Commercial Transportation", href: "/services/commercial-transportation", tag: "B2B" }
    ]
  },
  {
    name: "Fleet",
    href: "/fleet",
    matchPrefix: "/fleet",
    submenu: [
      { name: "Fleet Overview", href: "/fleet" },
      { name: "1 Ton Pickup", href: "/fleet/1-ton-pickup", tag: "1,000 kg" },
      { name: "3 Ton Commercial Truck", href: "/fleet/3-ton-pickup", tag: "3,000 kg" },
      { name: "7 Ton Heavy Carrier", href: "/fleet/7-ton-pickup", tag: "7,000 kg" }
    ]
  },
  {
    name: "Locations",
    href: "/locations",
    matchPrefix: "/locations",
    submenu: [
      { name: "All Service Areas", href: "/locations" },
      { name: "Dubai", href: "/locations/dubai" },
      { name: "Sharjah", href: "/locations/sharjah" },
      { name: "Ajman", href: "/locations/ajman" }
    ]
  },
  {
    name: "Resources",
    href: "/resources",
    matchPrefix: "/resources",
    submenu: [
      { name: "Knowledge Hub", href: "/resources" },
      { name: "1 Ton vs 3 Ton Guide", href: "/resources/1-ton-vs-3-ton-pickup" },
      { name: "Moving Furniture in Dubai", href: "/resources/how-to-move-furniture-safely-dubai" },
      { name: "Pickup Rental Guide UAE", href: "/resources/pickup-truck-rental-guide-uae" },
      { name: "What Size Pickup for Moving?", href: "/resources/what-size-pickup-for-moving" },
      { name: "Commercial Goods Guide", href: "/resources/commercial-goods-transport-guide" },
      { name: "Transport FAQs", href: "/faq" }
    ]
  },
  { name: "About", href: "/about", matchPrefix: "/about" },
  { name: "Contact", href: "/contact", matchPrefix: "/contact" }
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Scroll detection for compact floating state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Keyboard navigation: Escape key closes menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isItemActive = (item: NavItem) => {
    if (item.href === "/" && pathname === "/") return true;
    if (item.matchPrefix && pathname.startsWith(item.matchPrefix)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-300">
      {/* Top subtle utility strip (smoothly retracts on scroll) */}
      <div
        className={`pointer-events-auto transition-all duration-300 overflow-hidden bg-slate-950/85 backdrop-blur-md border-b border-white/5 ${
          scrolled ? "max-h-0 opacity-0 -translate-y-2 py-0" : "max-h-10 opacity-100 py-1.5"
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[10px] sm:text-[11px] font-label-mono text-slate-300">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="font-semibold text-secondary uppercase tracking-wider whitespace-nowrap">
              UAE Road Transport
            </span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-slate-300">
              Serving Dubai, Sharjah &amp; Ajman with Licensed Commercial Drivers
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 font-medium shrink-0">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="hover:text-secondary transition-colors inline-flex items-center gap-1 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[13px] text-secondary">call</span>
              <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
              <span className="sm:hidden font-semibold">055 577 5074</span>
            </a>
            <span className="text-white/20 hidden xs:inline">•</span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I would like to request a pickup quote.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition-colors inline-flex items-center gap-1 text-[#25D366] whitespace-nowrap font-semibold"
              aria-label="WhatsApp Dispatch"
            >
              <span className="material-symbols-outlined text-[13px]">chat</span>
              <span className="hidden xs:inline">WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Floating Island Navbar */}
      <div className="pt-2 sm:pt-3.5 px-3 sm:px-6 lg:px-8">
        <nav
          ref={navRef}
          aria-label="Main Navigation"
          className="pointer-events-auto max-w-[1360px] mx-auto rounded-2xl lg:rounded-full bg-slate-950/90 backdrop-blur-2xl border border-white/10 hover:border-white/20 shadow-[0_16px_45px_-8px_rgba(0,0,0,0.85),0_4px_18px_rgba(0,0,0,0.5),0_0_25px_-5px_rgba(251,188,43,0.12),0_1px_0_0_rgba(255,255,255,0.1)_inset] transition-all duration-300"
        >
          <div className="h-14 sm:h-16 px-3.5 sm:px-6 flex items-center justify-between gap-3 sm:gap-6">
            {/* Logo & Brand Identity */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-full"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-secondary/25 via-secondary/15 to-secondary/5 border border-secondary/40 flex items-center justify-center text-secondary group-hover:scale-105 group-hover:bg-secondary group-hover:text-slate-950 transition-all shadow-[0_0_12px_rgba(251,188,43,0.2)] shrink-0">
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">local_shipping</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm sm:text-base font-extrabold tracking-tight text-white leading-tight group-hover:text-secondary transition-colors">
                  PICKUP &amp; RENTAL
                </span>
                <span className="font-label-mono text-[8px] sm:text-[9px] uppercase text-secondary font-bold tracking-widest leading-none">
                  UAE Road Transport
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center gap-1 font-label-lg text-sm">
              {NAV_ITEMS.map((item) => {
                const active = isItemActive(item);
                const hasSubmenu = Boolean(item.submenu);
                const isOpen = activeDropdown === item.name;

                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => hasSubmenu && setActiveDropdown(item.name)}
                    onMouseLeave={() => hasSubmenu && setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      aria-expanded={hasSubmenu ? isOpen : undefined}
                      aria-haspopup={hasSubmenu ? "true" : undefined}
                      className={`px-3.5 py-1.5 rounded-full transition-all inline-flex items-center gap-1 text-xs font-semibold ${
                        active
                          ? "text-secondary font-bold bg-secondary/15 border border-secondary/30 shadow-[0_0_12px_rgba(251,188,43,0.15)]"
                          : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                      }`}
                    >
                      <span>{item.name}</span>
                      {hasSubmenu && (
                        <span
                          className={`material-symbols-outlined text-[15px] transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-secondary" : "text-slate-400 group-hover:text-white"
                          }`}
                        >
                          expand_more
                        </span>
                      )}
                    </Link>

                    {/* Desktop Dropdown with Framer Motion */}
                    <AnimatePresence>
                      {hasSubmenu && isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.98 }}
                          transition={{ duration: 0.16, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_15px_rgba(251,188,43,0.08)] p-2 z-50"
                        >
                          {item.submenu?.map((sub) => {
                            const isSubActive = pathname === sub.href;
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                                  isSubActive
                                    ? "bg-secondary/15 text-secondary font-bold"
                                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                                }`}
                              >
                                <span>{sub.name}</span>
                                {sub.tag && (
                                  <span className="text-[10px] font-label-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-secondary">
                                    {sub.tag}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Action CTAs */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-slate-200 transition-all shadow-sm hover:border-secondary/30"
              >
                <span className="material-symbols-outlined text-[15px] text-secondary">phone</span>
                <span>055 577 5074</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I would like to request a pickup quote.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex w-8 h-8 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/35 text-[#25D366] items-center justify-center transition-all shadow-sm"
                aria-label="WhatsApp Dispatch"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
              </a>

              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center h-8 sm:h-9 px-3.5 sm:px-5 rounded-full bg-gradient-to-r from-secondary via-[#ffc634] to-[#f5ab0c] text-slate-950 font-label-lg text-xs sm:text-xs font-black shadow-[0_4px_18px_rgba(251,188,43,0.35)] hover:shadow-[0_6px_24px_rgba(251,188,43,0.55)] hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
              >
                <span className="hidden sm:inline">Request a Quote</span>
                <span className="sm:hidden">Get Quote</span>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-slate-200 hover:text-secondary hover:border-secondary/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary shrink-0"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                  {mobileMenuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer with Framer Motion */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="xl:hidden overflow-hidden border-t border-white/10"
              >
                <div className="max-h-[75vh] overflow-y-auto px-4 sm:px-6 py-4 space-y-1">
                  {NAV_ITEMS.map((item) => {
                    const active = isItemActive(item);
                    const hasSubmenu = Boolean(item.submenu);
                    const isExpanded = mobileAccordion === item.name;

                    return (
                      <div key={item.name} className="border-b border-white/5 last:border-b-0 pb-1">
                        <div className="flex items-center justify-between min-h-[44px]">
                          <Link
                            href={item.href}
                            onClick={() => !hasSubmenu && setMobileMenuOpen(false)}
                            className={`text-sm py-2 font-medium transition-colors flex-1 ${
                              active ? "text-secondary font-bold" : "text-slate-200"
                            }`}
                          >
                            {item.name}
                          </Link>

                          {hasSubmenu && (
                            <button
                              onClick={() => setMobileAccordion(isExpanded ? null : item.name)}
                              className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-secondary focus:outline-none"
                              aria-label={`Toggle ${item.name} sub-menu`}
                            >
                              <span
                                className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                                  isExpanded ? "rotate-180 text-secondary" : ""
                                }`}
                              >
                                expand_more
                              </span>
                            </button>
                          )}
                        </div>

                        {/* Mobile Submenu Accordion */}
                        {hasSubmenu && isExpanded && (
                          <div className="pl-3 pb-2 space-y-1 border-l-2 border-secondary/30 ml-2 animate-in fade-in duration-150">
                            {item.submenu?.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block py-1.5 px-2 text-xs rounded-lg transition-colors ${
                                  pathname === sub.href
                                    ? "text-secondary font-bold bg-secondary/15"
                                    : "text-slate-300 hover:text-white"
                                }`}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Mobile Direct Action Controls */}
                  <div className="pt-4 pb-2 space-y-2.5 border-t border-white/10">
                    <Link
                      href="/request-quote"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full py-3 rounded-full bg-gradient-to-r from-secondary via-[#ffc634] to-[#f5ab0c] text-slate-950 font-bold text-center block text-sm shadow-[0_4px_18px_rgba(251,188,43,0.35)] hover:bg-secondary-fixed transition-colors"
                    >
                      Request a Quote
                    </Link>

                    <div className="grid grid-cols-2 gap-2 pt-1 font-label-mono text-xs">
                      <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-200 text-center font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-sm text-secondary">call</span>
                        <span>055 577 5074</span>
                      </a>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I would like to book a pickup truck.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 rounded-full bg-[#25D366]/15 text-[#25D366] text-center font-bold flex items-center justify-center gap-1.5 border border-[#25D366]/30 hover:bg-[#25D366]/25 transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">chat</span>
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
