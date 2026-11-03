import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12 2xl:max-w-[1600px] 2xl:px-14",
        className
      )}
    >
      {children}
    </div>
  );
}
