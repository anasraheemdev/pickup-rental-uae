"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center py-16 px-margin lg:px-margin-desktop bg-background text-on-surface">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        {/* Visual: Road & Pickup Truck Ending at 404 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="relative flex flex-col items-center justify-center"
        >
          <div className="relative w-56 h-36 sm:w-72 sm:h-44 rounded-2xl overflow-hidden border border-surface-container-high shadow-2xl mb-4 group">
            <Image
              src="/images/common/404-road-pickup.webp"
              alt="Pickup truck stopped near a UAE road terminus and detour sign"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 224px, 288px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end justify-center pb-2">
              <span className="font-label-mono text-[11px] text-secondary tracking-widest uppercase font-semibold">
                Route Diversion Ahead
              </span>
            </div>
          </div>

          <div className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-surface-container-high tracking-tight select-none">
            4<span className="text-secondary">0</span>4
          </div>

          <motion.div
            initial={{ x: -24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-surface-container-high text-secondary font-label-mono text-xs uppercase tracking-wider -mt-4 shadow-md"
          >
            <span className="material-symbols-outlined text-base">local_shipping</span>
            <span>Road Terminus • Page Not Found</span>
          </motion.div>
        </motion.div>

        {/* Content Hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.35 }}
          className="space-y-3"
        >
          <h1 className="font-headline-xl text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Looks like this road ends here.
          </h1>
          <p className="font-body-lead text-sm sm:text-base text-on-surface-variant max-w-lg mx-auto leading-relaxed">
            The page you are looking for may have moved, been removed, or the URL may be incorrect. Connect back to the UAE transport network below.
          </p>
        </motion.div>

        {/* Primary & Secondary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <Link
            href="/"
            className="px-6 py-3.5 rounded-xl bg-secondary text-on-secondary font-label-lg text-sm font-bold shadow-[0_12px_32px_-4px_rgba(251,188,43,0.3)] hover:bg-secondary-fixed transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="px-6 py-3.5 rounded-xl bg-surface-container text-on-surface font-label-lg text-sm font-semibold hover:bg-surface-container-high transition-colors border border-outline-variant/30"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Helpful Navigational Recovery Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="pt-6 border-t border-surface-container-high/60 max-w-lg mx-auto"
        >
          <span className="text-xs font-label-mono uppercase text-outline block mb-3">
            Quick Navigation Links
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-label-mono text-xs">
            <Link
              href="/fleet"
              className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-secondary transition-colors"
            >
              Fleet Specs
            </Link>
            <Link
              href="/locations"
              className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-secondary transition-colors"
            >
              Service Areas
            </Link>
            <Link
              href="/request-quote"
              className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-secondary transition-colors"
            >
              Request Quote
            </Link>
            <Link
              href="/contact"
              className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-secondary transition-colors"
            >
              Dispatch Desk
            </Link>
          </div>
        </motion.div>

        <div className="pt-2">
          <a
            href="tel:+971555775074"
            className="text-secondary font-label-mono text-xs hover:underline inline-flex items-center gap-1.5"
          >
            <span>Need immediate dispatch assistance? Call 055 577 5074</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  );
}
