import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import LenisProvider from "@/components/providers/LenisProvider";
import LanguageProvider from "@/components/providers/LanguageProvider";

import IntroAnimation from "@/components/effects/IntroAnimation";



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


<body className="relative overflow-x-hidden">


  

  <IntroAnimation />


  <LanguageProvider>

    <LenisProvider>

      {children}

    </LenisProvider>


  </LanguageProvider>


</body>


</html>

);


}