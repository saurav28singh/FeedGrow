import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FeedGrow Networking Plus – Personal Branding | 3-Month Managed Programme",
  description:
    "Strengthen your LinkedIn presence, connect with relevant professionals, and develop meaningful industry relationships through three months of dedicated, human-led networking and personal-branding support.",
  keywords: [
    "FeedGrow Networking Plus",
    "LinkedIn personal branding",
    "managed LinkedIn networking",
    "professional connections",
    "human-led LinkedIn outreach",
    "executive networking",
  ],
  openGraph: {
    title: "FeedGrow Networking Plus – Personal Branding",
    description:
      "Strengthen your LinkedIn presence, connect with relevant professionals, and develop meaningful industry relationships through three months of dedicated, human-led networking and personal-branding support.",
    url: "https://feedgrow.com/products/networking-plus",
    siteName: "FeedGrow",
    locale: "en_US",
    type: "website",
  },
};

export default function NetworkingPlusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
