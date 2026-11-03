"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { isHomePath } from "@/lib/locale-paths";
import ScrollLink from "@/components/ui/ScrollLink";

export default function RequestLink({
  children,
  className,
  choice,
  label,
}: {
  children: ReactNode;
  className?: string;
  choice?: string;
  label?: string;
}) {
  const pathname = usePathname();
  const { language } = useLanguage();
  const hash = `#anfrage${choice ? `-${choice}` : ""}`;
  const href = isHomePath(pathname) ? hash : `/${language}/webdesign${hash}`;

  return (
    <ScrollLink href={href} className={className} aria-label={label}>
      {children}
    </ScrollLink>
  );
}
