import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
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
  title: {
    default: "TP Digital Lab",
    template: "%s | TP Digital Lab",
  },

  description:
    "Modern websites, web applications, automation and digital solutions for businesses.",

  openGraph: {
    title: "TP Digital Lab",
    description:
      "Modern websites, web applications, automation and digital solutions for businesses.",
    url: "https://tpdigitallab.de",
    siteName: "TP Digital Lab",
    images: [
      {
        url: "https://tpdigitallab.de/og-image.png",
        width: 1200,
        height: 630,
        alt: "TP Digital Lab",
      },
    ],
    type: "website",
  },
  twitter: {
  card: "summary_large_image",
  title: "TP Digital Lab",
  description:
    "Modern websites, web applications, automation and digital solutions for businesses.",
  images: [
    "https://tpdigitallab.de/og-image.png",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <LenisProvider>
    {children}
  </LenisProvider>
</body>
    </html>
  );
}