import { notFound } from "next/navigation";
import { isLocale } from "@/lib/locale-paths";

export default async function LocalizedLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  // Declare the content language in the server HTML, before client hydration.
  return <div lang={locale}>{children}</div>;
}
