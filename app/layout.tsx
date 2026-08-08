import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import JsonLd from "@/components/seo/JsonLd";

import LenisProvider from "@/components/providers/LenisProvider";

import LanguageProvider from "@/components/providers/LanguageProvider";

import IntroAnimation from "@/components/effects/IntroAnimation";

import Script from "next/script";

import CookieConsent from "@/components/privacy/CookieConsent";


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
      name:
        "TP Digital Lab",
    },

  ],


  creator:
    "TP Digital Lab",


  robots: {

    index: true,

    follow: true,

  },


  alternates: {

    canonical:
      "/",

  },


  openGraph: {

    title:
      "TP Digital Lab | Webdesign & Digitale Lösungen für Unternehmen",


    description:
      "Moderne Websites, SEO-Optimierung, Online-Shops und digitale Lösungen für Unternehmen in Deutschland.",


    url:
      "https://tpdigitallab.de",


    siteName:
      "TP Digital Lab",


    locale:
      "de_DE",


    type:
      "website",

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
  {/* Google Consent Mode v2 */}
  <Script
    id="google-consent-default"
    strategy="beforeInteractive"
  >
    {`
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }

      window.gtag = gtag;

      var savedConsent = localStorage.getItem('tp_cookie_consent');

      if (savedConsent === 'granted') {

        gtag('consent', 'default', {
          analytics_storage: 'granted',
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted'
        });

      } else {

        gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          wait_for_update: 500
        });

      }
    `}
  </Script>

  {/* Google Tag */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=AW-18377056618"
    strategy="afterInteractive"
  />

  <Script
    id="google-tag"
    strategy="afterInteractive"
  >
    {`
      gtag('js', new Date());

      gtag('config', 'AW-18377056618');
      gtag('config', 'G-H0KVG8N991');
    `}
  </Script>

  <JsonLd />

  <IntroAnimation />

  <LanguageProvider>
    <LenisProvider>
      {children}
    </LenisProvider>

    <CookieConsent />
  </LanguageProvider>
</body>


    </html>

  );

}