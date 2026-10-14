import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({
  id,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative bg-[#050505] py-20 md:py-28",
        className
      )}
    >
      {children}
    </section>
  );
}
