import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://feedgrow.com"),
  title: "FeedGrow — LinkedIn Positioning | A Stronger Profile. A Bigger You.",
  description:
    "Transform your LinkedIn profile into a polished, professional, and strategically optimised representation of your professional identity. Your Growth Partner in the Digital World.",
  keywords:
    "LinkedIn Positioning, LinkedIn profile optimisation, executive personal branding, professional visibility, LinkedIn SEO, FeedGrow",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "FeedGrow — LinkedIn Positioning | A Stronger Profile. A Bigger You.",
    description:
      "Transform your LinkedIn profile into a polished, professional, and strategically optimised representation of your professional identity. Your Growth Partner in the Digital World.",
    url: "https://feedgrow.com",
    siteName: "FeedGrow",
    images: [
      {
        url: "/images/feedgrow-logo.png",
        width: 1024,
        height: 1024,
        alt: "FeedGrow Official Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
      </head>
      <body className="body-wrapper font-sans antialiased text-[#1F2826] bg-white">
        {children}
      </body>
    </html>
  );
}
