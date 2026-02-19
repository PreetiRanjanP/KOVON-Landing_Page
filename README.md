# KOVON | Global Talent Mobility Landing Page

[![Built with Next.js](https://img.shields.io/badge/Next.js-14.2+-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)


A high-performance, pixel-accurate re-implementation of the [Kovon.io](https://www.kovon.io) homepage. This project demonstrates production-ready frontend architecture, strict TypeScript enforcement, and a hybrid styling approach using Material UI and Tailwind CSS.

---

## 🔗 Project Links
* **Live Deployment:** [https://kovon-landing-page-81sv.vercel.app](https://kovon-landing-page-81sv.vercel.app)
* **GitHub Repository:** [https://github.com/PreetiRanjanP/KOVON-Landing_Page.git](https://github.com/PreetiRanjanP/KOVON-Landing_Page.git)

## 🛠️ Tech Stack
* **Framework:** Next.js 14.2+ (App Router) 
* **Styling:** Tailwind CSS & Material UI (MUI) 
* **Language:** TypeScript (Strict Mode, Zero `any` usage) 
* **State/UI:** Framer Motion (Animations), Radix UI (Primitives) 
* **Package Manager:** pnpm 

## 📁 Architecture & Folder Structure
This project strictly follows the mandatory organizational requirements to ensure modularity and scalability:

```plaintext
├── app/               # Next.js App Router (Routing & Metadata)
├── components/        # Atomic & Sectional Components
│   ├── header/        # Sticky Nav with Mobile Drawer 
│   ├── hero/          # Hero Section with Framer Motion 
│   ├── features/      # Responsive Feature Grid 
│   ├── culture/       # Values Section with MUI Cards 
│   ├── how-it-works/  # Step-based process flow 
│   ├── cta/           # Dynamic CTA Banner 
│   └── footer/        # Multi-column Responsive Footer 
├── constants/         # Static Data & Configs (content.ts) 
├── hooks/             # Custom Logic (use-mobile.ts) 
├── lib/               # Utility functions & MUI Theme Registry 
├── types/             # Centralized TS Interfaces 
└── public/            # Static Optimized Assets
```

### 🚀 Getting Started

Prerequisites

* Node.js: 18.x or higher

* Package Manager: `pnpm` [Corepack Enabled]

Local Development

1. Clone the project:

```Bash
git clone https://github.com/PreetiRanjanP/KOVON-Landing_Page.git
```
2. Install dependencies:

```Bash
pnpm install
```
3. Run the development server:

```Bash
pnpm dev
```
Note: If Port 3000 is occupied, use `pnpm dev --port 3001`


---

## 📐 Design Decisions Explanation

**1. Hybrid Styling Strategy**


  * Tailwind CSS: Employed for low-level utility tasks, rapid spacing adjustments, and complex   responsive layouts.



  * Material UI (MUI): Integrated for high-level interactive components, including the sticky header, mobile drawer menu, and icons.



* Performance: This combination ensures high performance by using Tailwind's JIT compiler while leveraging MUI's mature component behavior and server-side rendering support.

**2. Mobile-First Responsiveness**


* Desktop (1440px+): Implemented a 4-column feature grid and expanded navigation for high-resolution displays.


* Tablet: Optimized for intermediate viewports using 2-column card layouts.
 


* Mobile (360px): Utilized single-column stacking and high-contrast touch targets to prevent overflow and ensure readability on small screens.


**3. Strict Type Safety & Clean Architecture**


* TypeScript (Zero 'any'): Every component, prop, and data constant is governed by centralized interfaces in types/index.ts.



* Functional Components: The entire application is built using modern React functional components and hooks.


* Modular Folder Structure: Follows the mandatory organizational requirements to isolate concerns between core layout, section-based components, and static constants.

---  
👨‍💻 Developed By : Preeti Ranjan Pradhan


