import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split("T")[0];

  const routes: { path: string; priority: number; changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" }[] = [
    // Core Authority Hubs
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/fleet", priority: 0.9, changeFrequency: "weekly" },
    { path: "/locations", priority: 0.9, changeFrequency: "weekly" },
    { path: "/request-quote", priority: 0.9, changeFrequency: "daily" },

    // Core Service Landings (High Transactional Value)
    { path: "/services/pickup-truck-rental", priority: 0.85, changeFrequency: "weekly" },
    { path: "/services/goods-transportation", priority: 0.85, changeFrequency: "weekly" },
    { path: "/services/furniture-transportation", priority: 0.85, changeFrequency: "weekly" },
    { path: "/services/commercial-transportation", priority: 0.85, changeFrequency: "weekly" },

    // Fleet Specifications
    { path: "/fleet/1-ton-pickup", priority: 0.8, changeFrequency: "weekly" },
    { path: "/fleet/3-ton-pickup", priority: 0.8, changeFrequency: "weekly" },
    { path: "/fleet/7-ton-pickup", priority: 0.8, changeFrequency: "weekly" },

    // UAE Local Service Areas
    { path: "/locations/dubai", priority: 0.85, changeFrequency: "weekly" },
    { path: "/locations/abu-dhabi", priority: 0.85, changeFrequency: "weekly" },
    { path: "/locations/sharjah", priority: 0.8, changeFrequency: "weekly" },
    { path: "/locations/ajman", priority: 0.8, changeFrequency: "weekly" },
    { path: "/locations/ras-al-khaimah", priority: 0.75, changeFrequency: "weekly" },
    { path: "/locations/fujairah", priority: 0.75, changeFrequency: "weekly" },
    { path: "/locations/umm-al-quwain", priority: 0.75, changeFrequency: "weekly" },
    { path: "/locations/al-ain", priority: 0.75, changeFrequency: "weekly" },

    // High-Value Topical Guides & Resources
    { path: "/resources", priority: 0.75, changeFrequency: "weekly" },
    { path: "/resources/1-ton-vs-3-ton-pickup", priority: 0.7, changeFrequency: "monthly" },
    { path: "/resources/how-to-move-furniture-safely-dubai", priority: 0.7, changeFrequency: "monthly" },
    { path: "/resources/pickup-truck-rental-guide-uae", priority: 0.7, changeFrequency: "monthly" },
    { path: "/resources/what-size-pickup-for-moving", priority: 0.7, changeFrequency: "monthly" },
    { path: "/resources/commercial-goods-transport-guide", priority: 0.7, changeFrequency: "monthly" },

    // Trust & Operations
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.75, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.5, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.5, changeFrequency: "yearly" },
    { path: "/sitemap", priority: 0.6, changeFrequency: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: currentDate,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
