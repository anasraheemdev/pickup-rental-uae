import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "full" | "icon" | "horizontal";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  variant = "full",
  className = "",
  size = "md"
}: LogoProps) {
  // Sizing definitions for user's logo.png emblem
  const iconDimensions = {
    sm: "h-7 w-12 sm:h-8 sm:w-14",
    md: "h-8 w-14 sm:h-10 sm:w-16",
    lg: "h-10 w-16 sm:h-12 sm:w-20"
  };

  const textSizes = {
    sm: { title: "text-sm", subtitle: "text-[8px]" },
    md: { title: "text-base sm:text-lg", subtitle: "text-[9px] sm:text-[10px]" },
    lg: { title: "text-xl sm:text-2xl", subtitle: "text-[11px]" }
  };

  const IconEmblem = (
    <div
      className={`relative ${iconDimensions[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
    >
      <Image
        src="/logo.png"
        alt="Pickup & Rental Logo"
        fill
        sizes="(max-width: 768px) 60px, 80px"
        className="object-contain drop-shadow-[0_2px_12px_rgba(251,188,43,0.35)]"
        priority
      />
    </div>
  );

  if (variant === "icon") {
    return <div className={`inline-flex items-center ${className}`}>{IconEmblem}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {IconEmblem}
      <div className="flex flex-col select-none">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-display font-extrabold tracking-tight text-white uppercase ${textSizes[size].title} drop-shadow-sm`}
          >
            PICKUP <span className="text-secondary">&amp;</span> RENTAL
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
          <span
            className={`font-label-mono uppercase font-bold tracking-widest text-slate-300 ${textSizes[size].subtitle}`}
          >
            UAE ROAD TRANSPORT
          </span>
        </div>
      </div>
    </div>
  );
}
