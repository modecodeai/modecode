import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createOpenGraph, siteUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mode Code | Websites, AI Tools, Automation & Product Prototyping",
    template: "%s | Mode Code"
  },
  description:
    "Mode Code builds clean websites, useful AI tools, automation systems and production-aware prototypes, including CAD, CNC-aware design and 3D printing support.",
  applicationName: "Mode Code",
  alternates: {
    canonical: "/"
  },
  openGraph: createOpenGraph(
    "Mode Code | Websites, AI Tools, Automation & Product Prototyping",
    "Mode Code builds clean websites, useful AI tools, automation systems and production-aware prototypes.",
    "/"
  ),
  twitter: {
    card: "summary_large_image",
    title: "Mode Code",
    description:
      "Websites, AI tools, automation systems and production-aware prototypes.",
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="min-h-screen technical-grid">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
