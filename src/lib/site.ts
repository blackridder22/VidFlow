import { Metadata } from "next";

export const siteConfig = {
  name: "VidFlow",
  domain: "vidflow.vercel.com",
  shortName: "VidFlow",
  creator: "riad-azz",
  description:
    "Fast, free, and no login required. Just paste the URL and download.",
  ogDescription:
    "Fast, free, and no login required. Just paste the URL and download.",
  url: "https://vidflow.vercel.com",
};

export const siteMetadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    creator: siteConfig.creator,
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/webflow.png",
    shortcut: "/webflow.png",
    apple: "/webflow.png",
  },
  manifest: "/web.manifest.json",
};
