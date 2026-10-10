import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Pickup & Rental UAE | Commercial Road Transportation in Dubai, Sharjah & Ajman",
  description:
    "Professional pickup truck rental and dedicated road transport across Dubai, Sharjah, and Ajman. 1-Ton, 3-Ton, and 7-Ton fleet with 45-minute average dispatch, RTA certified drivers, and 24/7 logistics control.",
  keywords: [
    "Pickup Rental UAE",
    "Dubai Pickup Truck",
    "Sharjah Pickup Rental",
    "Ajman Pickup Rental",
    "3 Ton Pickup Dubai",
    "1 Ton Pickup Rental",
    "Commercial Logistics UAE",
    "Inter Emirate Freight",
    "B2B Fleet Retainers"
  ],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180" }
    ],
    shortcut: ["/icon.png", "/favicon.ico"]
  },
  verification: {
    google: [
      "zueug1q6zHtsF-DhZ0ZvD9o5c6oplalz3wQg1ULJhlM",
      "googleb28235d9f7a78d91"
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="zueug1q6zHtsF-DhZ0ZvD9o5c6oplalz3wQg1ULJhlM"
        />
        <meta
          name="google-site-verification"
          content="googleb28235d9f7a78d91"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col selection:bg-secondary selection:text-on-secondary">
        <Header />
        <main className="flex-1 w-full pt-28">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
