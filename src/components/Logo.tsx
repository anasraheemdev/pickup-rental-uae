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
  // Sizing definitions for icon mark
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  const pixelDimensions = {
    sm: 32,
    md: 40,
    lg: 48
  };

  const textSizes = {
    sm: { title: "text-sm", subtitle: "text-[8px]" },
    md: { title: "text-base sm:text-lg", subtitle: "text-[9px] sm:text-[10px]" },
    lg: { title: "text-xl sm:text-2xl", subtitle: "text-[11px]" }
  };

  const IconEmblem = (
    <div
      className={`relative ${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
    >
      <Image
        src="/images/logo/logo-app-icon.webp"
        alt="Pickup & Rental Logo"
        width={pixelDimensions[size]}
        height={pixelDimensions[size]}
        className="w-full h-full object-contain rounded-xl drop-shadow-[0_4px_16px_rgba(251,188,43,0.4)]"
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
