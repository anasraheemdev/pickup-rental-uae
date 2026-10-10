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
  // Proportional sizing for logo.png (exact aspect ratio 1.7:1)
  // Perfectly calibrated for mobile screens so it never overflows or dominates
  const iconDimensions = {
    sm: "h-[16px] w-[27px] sm:h-5 sm:w-[34px]",
    md: "h-[20px] w-[34px] sm:h-7 sm:w-[48px] lg:h-8 lg:w-[54px]",
    lg: "h-6 w-[41px] sm:h-8 sm:w-[54px] lg:h-10 lg:w-[68px]"
  };

  const textSizes = {
    sm: {
      title: "text-[10.5px] sm:text-xs",
      subtitle: "text-[6.5px] sm:text-[7.5px]"
    },
    md: {
      title: "text-[11.5px] sm:text-[14.5px] lg:text-base",
      subtitle: "text-[7px] sm:text-[8px] lg:text-[9px]"
    },
    lg: {
      title: "text-xs sm:text-base lg:text-lg",
      subtitle: "text-[7.5px] sm:text-[9px]"
    }
  };

  const IconEmblem = (
    <div
      className={`relative ${iconDimensions[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
    >
      <Image
        src="/logo.png"
        alt="Pickup & Rental Logo"
        fill
        sizes="(max-width: 640px) 40px, 60px"
        className="object-contain drop-shadow-[0_1px_8px_rgba(251,188,43,0.3)]"
        priority
      />
    </div>
  );

  if (variant === "icon") {
    return <div className={`inline-flex items-center ${className}`}>{IconEmblem}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-1.5 sm:gap-2.5 ${className}`}>
      {IconEmblem}
      <div className="flex flex-col select-none justify-center">
        <div className="flex items-center gap-1 leading-tight">
          <span
            className={`font-display font-extrabold tracking-tight text-white uppercase ${textSizes[size].title} drop-shadow-sm whitespace-nowrap`}
          >
            PICKUP <span className="text-secondary">&amp;</span> RENTAL
          </span>
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-secondary animate-pulse shrink-0"></span>
          <span
            className={`font-label-mono uppercase font-bold tracking-wider text-slate-300 whitespace-nowrap ${textSizes[size].subtitle}`}
          >
            UAE ROAD TRANSPORT
          </span>
        </div>
      </div>
    </div>
  );
}
