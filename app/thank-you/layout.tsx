import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vielen Dank",

  description:
    "Bestätigung einer erfolgreich übermittelten Projektanfrage an TP Digital Lab.",

  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },

  alternates: {
    canonical: "/thank-you",
  },
};

export default function ThankYouLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}