import React from "react";
import Link from "next/link";
import { SITE_URL } from "@/lib/seo";

export interface BreadcrumbItem {
  name: string;
  item: string; // relative path e.g. "/services"
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullItems = [{ name: "Home", item: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: `${SITE_URL}${breadcrumb.item === "/" ? "" : breadcrumb.item}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="w-full py-3 px-margin lg:px-margin-desktop bg-surface-container-lowest/60 border-b border-surface-container/60 text-xs text-on-surface-variant font-label-mono"
      >
        <div className="max-w-[1440px] mx-auto flex items-center flex-wrap gap-2">
          {fullItems.map((crumb, idx) => {
            const isLast = idx === fullItems.length - 1;
            return (
              <React.Fragment key={crumb.item}>
                {idx > 0 && <span className="text-outline-variant">/</span>}
                {isLast ? (
                  <span className="text-secondary font-semibold" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.item}
                    className="hover:text-secondary transition-colors"
                  >
                    {crumb.name}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  );
}
