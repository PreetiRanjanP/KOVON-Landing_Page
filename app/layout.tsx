import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ThemeRegistry from "@/lib/ThemeRegistry";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kovon | Global Talent Mobility & Overseas Hiring Platform",
  description:
    "Kovon opens doors for millions of skilled workers to pursue meaningful careers across the world. Discover verified global job opportunities today.",
  keywords: [
    "global hiring",
    "overseas jobs",
    "talent mobility",
    "international careers",
    "work abroad",
  ],
  authors: [{ name: "Kovon Global Private Limited" }],
  openGraph: {
    title: "Kovon | Global Talent Mobility & Overseas Hiring Platform",
    description:
      "Discover verified global job opportunities. Kovon connects skilled workers with employers across 50+ countries.",
    type: "website",
    locale: "en_US",
    siteName: "Kovon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kovon | Global Talent Mobility & Overseas Hiring Platform",
    description:
      "Discover verified global job opportunities across 50+ countries.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0F1E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" style={{ backgroundColor: "#0A0F1E", color: "#F1F5F9" }}>
        <ThemeRegistry>{children}</ThemeRegistry>
        <Analytics />
      </body>
    </html>
  );
}
