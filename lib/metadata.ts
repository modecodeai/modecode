import type { Metadata } from "next";

export const siteUrl = "https://modecode.co.uk";

export const openGraphImage = {
  url: "/og-image.svg",
  width: 1200,
  height: 630,
  alt: "Mode Code monochrome code texture"
};

export function createOpenGraph(
  title: string,
  description: string,
  url: string
): NonNullable<Metadata["openGraph"]> {
  return {
    title,
    description,
    url,
    siteName: "Mode Code",
    type: "website",
    locale: "en_GB",
    images: [openGraphImage]
  };
}
