import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import JsonLd from "@/components/seo/JsonLd";

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

    default:
      "TP Digital Lab | Webdesign, Websites & Digitale Lösungen für Unternehmen",

    template:
      "%s | TP Digital Lab",

  },


  description:
    "TP Digital Lab erstellt moderne Websites, Webanwendungen und digitale Lösungen für Unternehmen. Professionelles Webdesign, SEO und individuelle Softwareentwicklung.",


  keywords: [

    "Webdesign München",

    "Website erstellen München",

    "Webagentur München",

    "Webentwicklung München",

    "Landing Page erstellen",

    "SEO München",

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


  openGraph: {

    title:
      "TP Digital Lab | Moderne Websites für Unternehmen",


    description:
      "Professionelles Webdesign, Webentwicklung und digitale Lösungen für Unternehmen.",


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


<JsonLd />


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