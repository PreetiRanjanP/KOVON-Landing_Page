# KOVON-Landing_Page

A production-ready, pixel-accurate replication of the [Kovon.io](https://www.kovon.io) homepage. This project demonstrates advanced skills in **Next.js 14+**, **TypeScript**, and professional UI architecture using a hybrid of **Tailwind CSS** and **Material UI (MUI)**.

## 🔗 Project Links
* **Live Demo:** [https://kovon-landing-page-81sv.vercel.app](https://kovon-landing-page-81sv.vercel.app)
* **GitHub Repository:** [https://github.com/PreetiRanjanP/KOVON-Landing_Page.git](https://github.com/PreetiRanjanP/KOVON-Landing_Page.git)

## 🛠️ Tech Stack
* **Framework:** Next.js 14.2+ (App Router)
* **Styling:** Tailwind CSS (for layout) & Material UI (for complex components)
* **Language:** TypeScript (Strict mode, no `any` usage)
* **Animations:** Framer Motion
* **Package Manager:** pnpm

## 📁 Project Structure

🚀 Getting Started
Prerequisites
Ensure you have Node.js and pnpm installed globally.

Installation
Clone the repository:

Bash
git clone [https://github.com/PreetiRanjanP/KOVON-Landing_Page.git](https://github.com/PreetiRanjanP/KOVON-Landing_Page.git)
cd KOVON-Landing_Page
Install dependencies:

Bash
pnpm install
Run the development server:

Bash
pnpm dev
Access the local site at http://localhost:3000.

📐 Design Decisions
Responsiveness

Shutterstock
Implemented a mobile-first design. Key sections like the CultureSection and Footer use responsive MUI Grid breakpoints (xs={12}, md={6}) to ensure seamless transitions from mobile (360px) to desktop (1440px+). We utilized word-break: break-word and dynamic padding to ensure no text overflow on smaller devices.

Hybrid Styling
Utilized Tailwind CSS for rapid spacing and utility classes while leveraging MUI’s ThemeRegistry and CacheProvider for professional-grade component behavior and server-side rendering (SSR) compatibility. This allows for high-performance CSS-in-JS without the "flash of unstyled content."

Optimization
Integrated @vercel/analytics for real-time performance tracking and utilized the Next.js Metadata API to ensure high SEO scores and proper social media preview rendering.

Accessibility
Used semantic HTML5 tags (e.g., <main>, <footer>, <nav>) and proper ARIA labels within the Header and Mobile Drawer components to ensure full navigability for screen readers and keyboard users.

© 2026 Kovon Global Private Limited. Built with passion for the global workforce.


### Final Step for the Submission
1.  Open the project in VS Code.
2.  Create or open the `README.md` file in the root folder.
3.  Paste the code provided above and save.
4.  Push the change to your GitHub:
    ```bash
    git add README.md
    git commit -m "docs: finalize README with live URL and design decisions"
    git push origin main
    ```

The project adheres to the mandatory folder structure requirements, ensuring clean separation of concerns:
```plaintext
├── app/               # Next.js App Router (layout, page, globals)
├── components/        # Section-based components
│   ├── cta/           # Call to Action banner
│   ├── culture/       # Culture and values section
│   ├── features/      # Responsive feature cards
│   ├── footer/        # Multi-column responsive footer
│   ├── header/        # Sticky navigation with mobile drawer
│   ├── hero/          # Animated hero section
│   ├── how-it-works/  # Step-by-step process guide
│   └── ui/            # Reusable primitive UI components
├── constants/         # Static content and link configurations
├── hooks/             # Custom React hooks (use-mobile, etc.)
├── lib/               # Utility functions and Theme Registry
├── styles/            # Global CSS and Tailwind directives
└── types/             # Strict TypeScript interface definitions ```

