import type { Metadata } from "next";

export const SITE_URL = "https://pickupandrental.com";
export const BRAND_NAME = "Pickup & Rental";
export const PHONE_NUMBER = "+971555775074";
export const PHONE_DISPLAY = "055 577 5074";
export const WHATSAPP_NUMBER = "971555775074";
export const WHATSAPP_DISPLAY = "+971 55 577 5074";
export const SUPPORT_EMAIL = "dispatch@pickupandrental.com";

export const UAE_SERVICE_AREAS = [
  "Dubai",
  "Sharjah",
  "Ajman"
];

export interface PageSeoConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
}

export function constructMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = "website"
}: PageSeoConfig): Metadata {
  const canonicalUrl = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    title: `${title} | ${BRAND_NAME}`,
    description,
    keywords: [
      "Pickup & Rental",
      "pickup rental UAE",
      "pickup truck rental UAE",
      "goods transport UAE",
      "furniture transport Dubai",
      "road transportation UAE",
      ...keywords
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | ${BRAND_NAME}`,
      description,
      url: canonicalUrl,
      siteName: BRAND_NAME,
      locale: "en_AE",
      type: ogType,
      images: [
        {
          url: `${SITE_URL}/images/screens/09_home.png`,
          width: 1200,
          height: 630,
          alt: `${BRAND_NAME} - UAE Commercial Road Transportation & Pickup Rental`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BRAND_NAME}`,
      description,
      images: [`${SITE_URL}/images/screens/09_home.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: [
        "zueug1q6zHtsF-DhZ0ZvD9o5c6oplalz3wQg1ULJhlM",
        "googleb28235d9f7a78d91"
      ],
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/images/screens/09_home.png`,
    telephone: PHONE_NUMBER,
    email: SUPPORT_EMAIL,
    priceRange: "AED 150 - AED 1200",
    description: "Professional pickup truck rental and dedicated road transport services across Dubai, Sharjah, and Ajman. Serving residential, commercial, furniture, and goods transportation.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
      addressRegion: "Dubai",
      addressLocality: "Dubai"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.2048",
      longitude: "55.2708"
    },
    areaServed: UAE_SERVICE_AREAS.map(area => ({
      "@type": "AdministrativeArea",
      name: area
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "00:00",
        closes: "23:59"
      }
    ]
  };
}
