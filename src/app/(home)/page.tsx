import PageContent from "./page-content";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VidFlow",
  description: "Download Instagram videos, photos, reels, and IGTV content for free. Fast, secure, and high-quality downloads with no registration required.",
};

export default function HomePage() {
  return <PageContent />;
}
