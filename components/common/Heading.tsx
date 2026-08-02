import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export default function Heading({
  children,
  className,
}: HeadingProps) {
  return (
    <h2
      className={cn(
        "text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl",
        className
      )}
    >
      {children}
    </h2>
  );
}