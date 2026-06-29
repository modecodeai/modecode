import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createOpenGraph, siteUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mode Code | Software, AI automation and web development studio",
    template: "%s | Mode Code"
  },
  description:
    "Mode Code builds clean websites, useful AI tools and automation systems for service-led businesses.",
  applicationName: "Mode Code",
  alternates: {
    canonical: "/"
  },
  openGraph: createOpenGraph(
    "Mode Code | Software for businesses that need things to work",
    "Clean websites, useful AI tools and automation systems for service-led businesses.",
    "/"
  ),
  twitter: {
    card: "summary_large_image",
    title: "Mode Code",
    description:
      "Software, AI automation and web development for service-led businesses.",
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
