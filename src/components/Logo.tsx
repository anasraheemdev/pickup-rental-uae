import React from "react";

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

  const textSizes = {
    sm: { title: "text-sm", subtitle: "text-[8px]" },
    md: { title: "text-base sm:text-lg", subtitle: "text-[9px] sm:text-[10px]" },
    lg: { title: "text-xl sm:text-2xl", subtitle: "text-[11px]" }
  };

  const IconEmblem = (
    <div
      className={`relative ${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(251,188,43,0.35)]"
      >
        <defs>
          {/* Outer Badge Gradient */}
          <linearGradient id="emblemBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f1f33" />
            <stop offset="50%" stopColor="#081421" />
            <stop offset="100%" stopColor="#040a12" />
          </linearGradient>

          {/* Golden Amber Brand Gradient */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe071" />
            <stop offset="50%" stopColor="#fbbc2b" />
            <stop offset="100%" stopColor="#d9970a" />
          </linearGradient>

          {/* Accent Glow */}
          <linearGradient id="borderGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbc2b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fbbc2b" stopOpacity="0.2" />
          </linearGradient>

          {/* Shadow Filter */}
          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Squircle Badge Base */}
        <rect
          x="4"
          y="4"
          width="112"
          height="112"
          rx="26"
          fill="url(#emblemBg)"
          stroke="url(#borderGlow)"
          strokeWidth="2.5"
        />

        {/* Ambient Top Highlight Arc */}
        <path
          d="M16 32 C30 16, 90 16, 104 32"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeOpacity="0.15"
          strokeLinecap="round"
        />

        {/* High-Speed Highway Ground Lines */}
        <path
          d="M18 88 L102 88"
          stroke="#fbbc2b"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.4"
        />
        <path
          d="M32 94 L88 94"
          stroke="#fbbc2b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.2"
        />

        {/* Aerodynamic Pickup Truck Body */}
        {/* Cab Roof & Front Windshield */}
        <path
          d="M48 40 L68 40 C73 40, 78 44, 81 49 L89 60 L48 60 Z"
          fill="url(#goldGradient)"
        />

        {/* Windshield Glass Inset */}
        <path
          d="M54 44 L67 44 C70 44, 73 46, 75 50 L81 57 L54 57 Z"
          fill="#081421"
          opacity="0.85"
        />

        {/* Main Body Chassis (Cab + Heavy Cargo Bed) */}
        <path
          d="M24 58 L46 58 L48 48 L48 60 L92 60 C96 60, 99 63, 98 67 L95 76 C94 78, 92 80, 89 80 L25 80 C23 80, 21 78, 21 75 L22 62 C22 60, 23 58, 24 58 Z"
          fill="url(#goldGradient)"
        />

        {/* Cargo Bed Container / Load Block */}
        <rect
          x="26"
          y="45"
          width="19"
          height="14"
          rx="2"
          fill="#ffffff"
          opacity="0.9"
        />
        {/* Cargo Tie-down cross */}
        <path
          d="M28 47 L43 57 M43 47 L28 57"
          stroke="#081421"
          strokeWidth="1.2"
          strokeOpacity="0.6"
        />

        {/* Rear Cab Window */}
        <rect
          x="50"
          y="46"
          width="4"
          height="11"
          rx="1"
          fill="#081421"
          opacity="0.75"
        />

        {/* Front Headlight Beam */}
        <path
          d="M93 64 L102 65 C104 65, 104 67, 102 68 L92 69 Z"
          fill="#ffffff"
        />

        {/* Front Wheel */}
        <circle cx="80" cy="80" r="11" fill="#081421" stroke="#fbbc2b" strokeWidth="2.5" />
        <circle cx="80" cy="80" r="4.5" fill="url(#goldGradient)" />

        {/* Rear Wheel */}
        <circle cx="38" cy="80" r="11" fill="#081421" stroke="#fbbc2b" strokeWidth="2.5" />
        <circle cx="38" cy="80" r="4.5" fill="url(#goldGradient)" />

        {/* Speed Chevrons in Bed */}
        <path
          d="M100 52 L106 58 L100 64"
          stroke="#fbbc2b"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.75"
        />
      </svg>
    </div>
  );

  if (variant === "icon") {
    return <div className={`inline-flex items-center ${className}`}>{IconEmblem}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
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
