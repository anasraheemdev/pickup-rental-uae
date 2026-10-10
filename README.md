# 🚚 Pickup & Rental UAE

> Modern commercial road transport & pickup truck rental web application built for the UAE market (Dubai, Sharjah & Ajman). Powered by Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

---

## 🌟 Key Features

- **⚡ Instant Quote & Dispatch Configurator:**
  - Dynamic route telemetry between Dubai, Sharjah, and Ajman hubs.
  - Vehicle capacity selector: 1-Ton, 3-Ton, and 7-Ton commercial trucks.
  - Cargo classification (Furniture, Palletized Freight, Machinery, General Goods).
  - Crew & labor options (Driver Only, Assisted Loading, Full Crew).
  - Direct Dispatch Intake without automated price approximations—guaranteed 100% upfront fixed quotes confirmed directly with dispatch masters.
- **💬 24/7 Floating WhatsApp Integration:**
  - Persistent, accessible floating WhatsApp button across all pages.
  - Direct connection to central dispatch (`+971 55 577 5074`).
  - Pre-filled trip parameter generator for instant WhatsApp booking confirmation.
- **🗺️ Geo-Targeted Local Coverage:**
  - Dedicated hub and corridor pages for **Dubai**, **Sharjah**, and **Ajman**.
  - Inter-emirate transit route guidelines and RTA commercial regulations.
- **🚛 Fleet Capacity Guides:**
  - Detailed dimensional specifications (Payload, Volume, Box Dimensions, Basement Clearances).
  - Tail-lift and cargo securing details for 1-Ton, 3-Ton Box, and 7-Ton Heavy Carriers.
- **📈 Comprehensive SEO & Structured Data:**
  - JSON-LD schemas (`LocalBusiness`, `Service`, `BreadcrumbList`, `FAQPage`, `Article`).
  - Fully dynamic `sitemap.xml` and `robots.txt`.
  - Canonical URLs and OpenGraph social metadata.
- **🎨 State-of-the-Art Design & Performance:**
  - Modern dark-mode palette with amber logistics accents.
  - Responsive 2:2 mobile grids and desktop layouts.
  - Floating frosted-glass navigation bar with smooth micro-interactions.
  - High-performance WebP visual assets.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Type Safety:** [TypeScript 5](https://www.typescriptlang.org/)
- **Icons:** Google Material Symbols & Brand Vectors

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+ or 20+ installed
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/pick-and-rental.git

# Navigate to project directory
cd pick-and-rental

# Install dependencies
npm install
```

### Development Server

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Verify TypeScript compilation and generate the optimized production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## 📁 Project Structure

```text
├── public/                     # Static assets (optimized images, icons, manifest)
│   └── images/
│       ├── fleet/              # 1-Ton, 3-Ton, 7-Ton truck photography
│       ├── services/           # Service category visuals
│       ├── locations/          # Dubai, Sharjah, Ajman photography
│       └── blog/               # Resource & guide article imagery
├── src/
│   ├── app/                    # Next.js App Router routes
│   │   ├── about/              # Company profile & logistics background
│   │   ├── booking/            # Quote & booking configurator
│   │   ├── contact/            # Central dispatch contact & office inquiry
│   │   ├── coverage/           # UAE coverage network overview
│   │   ├── faq/                # Operational FAQs
│   │   ├── fleet/              # Fleet vehicle category pages
│   │   ├── locations/          # Dubai, Sharjah, and Ajman location hubs
│   │   ├── request-quote/      # Interactive Quote & Dispatch Configurator
│   │   ├── resources/          # Moving & transport advice articles
│   │   ├── retainers/          # B2B monthly fleet retainer agreements
│   │   ├── services/           # Commercial & residential services
│   │   ├── layout.tsx          # Root layout with Header, Footer, and Floating WhatsApp
│   │   ├── page.tsx            # High-converting landing page
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   └── sitemap.ts          # XML sitemap generator
│   ├── components/             # Reusable UI components
│   │   ├── FloatingWhatsApp.tsx # Persistent floating WhatsApp button
│   │   ├── Header.tsx          # Floating frosted navigation bar
│   │   ├── Footer.tsx          # Comprehensive footer with links & contact
│   │   ├── Breadcrumbs.tsx     # Structured breadcrumb navigation
│   │   ├── FaqSection.tsx      # Accordion FAQ component
│   │   ├── ContactForm.tsx     # Dispatch contact intake form
│   │   └── JsonLd.tsx          # Structured data injection
│   └── lib/
│       └── seo.ts              # Global metadata helper & canonical configuration
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Styling theme tokens
└── tsconfig.json               # TypeScript strict configuration
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push this repository to GitHub.
2. Import the project into [Vercel](https://vercel.com/new).
3. Vercel automatically detects Next.js:
   - Build Command: `next build`
   - Output Directory: `.next`
   - Node Version: `20.x`
4. Click **Deploy**.

### Self-Hosted / Docker / VPS

```bash
npm run build
npm run start -- -p 3000
```

---

## 📞 Contact & Support

- **Phone Hotline:** [+971 55 577 5074](tel:+971555775074) / `055 577 5074`
- **WhatsApp Dispatch:** [wa.me/971555775074](https://wa.me/971555775074)
- **Primary Service Areas:** Dubai • Sharjah • Ajman

---

## 📄 License

Private & Commercial Logistics License © Pickup & Rental UAE. All rights reserved.
