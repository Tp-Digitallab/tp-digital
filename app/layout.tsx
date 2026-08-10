import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import "lenis/dist/lenis.css";
import "./globals.css";

import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

import JsonLd from "@/components/seo/JsonLd";
import CookieConsent from "@/components/privacy/CookieConsent";
import LanguageProvider from "@/components/providers/LanguageProvider";
import LenisProvider from "@/components/providers/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://tpdigitallab.de"
  ),

  title: {
    default:
      "TP Digital Lab | Webdesign & Digitale Lösungen für Unternehmen in Deutschland",

    template:
      "%s | TP Digital Lab",
  },

  description:
    "TP Digital Lab entwickelt moderne Websites, SEO-optimierte Weblösungen und digitale Systeme für Unternehmen in Deutschland. Professionelles Webdesign, Online-Shops und individuelle digitale Lösungen aus einer Hand.",

  keywords: [
    "Webdesign Deutschland",
    "Website erstellen Deutschland",
    "Website erstellen lassen",
    "Professionelle Website für Unternehmen",
    "Webagentur Deutschland",
    "Webentwicklung Deutschland",
    "Landing Page erstellen",
    "SEO Deutschland",
    "Suchmaschinenoptimierung",
    "Digitale Lösungen Unternehmen",
  ],

  authors: [
    {
      name: "TP Digital Lab",
    },
  ],

  creator: "TP Digital Lab",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "TP Digital Lab | Webdesign & Digitale Lösungen für Unternehmen",

    description:
      "Moderne Websites, SEO-Optimierung, Online-Shops und digitale Lösungen für Unternehmen in Deutschland.",

    url:
      "https://tpdigitallab.de",

    siteName: "TP Digital Lab",

    locale: "de_DE",

    type: "website",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1731,
        height: 909,
        alt:
          "TP Digital Lab – Webdesign, SEO und digitale Lösungen",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "TP Digital Lab | Webdesign & Digitale Lösungen für Unternehmen",

    description:
      "Moderne Websites, SEO-Optimierung, Online-Shops und digitale Lösungen für Unternehmen in Deutschland.",

    images: [
      "/opengraph-image.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="
          relative
          overflow-x-hidden
        "
      >
        <JsonLd />

  

        <LanguageProvider>
          <LenisProvider>
            {children}
          </LenisProvider>

          <CookieConsent />

          <GoogleAnalytics />
        </LanguageProvider>
      </body>
    </html>
  );
}