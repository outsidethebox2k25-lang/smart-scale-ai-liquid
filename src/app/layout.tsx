import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smart Scale AI — The AI system that runs your business",
  description:
    "AI agents that capture, qualify and close — while you work. CRM, SMS, FB/IG, Web, Bookkeeping & CFO automation for contractors in the USA.",
  metadataBase: new URL("https://smart-scale-ai-liquid.vercel.app"),
  openGraph: {
    title: "Smart Scale AI",
    description: "The AI system that runs your business.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
