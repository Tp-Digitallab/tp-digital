import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: React.ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "group inline-flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300",

        variant === "primary" &&
          "border-white/10 bg-white/5 text-white backdrop-blur-xl hover:border-white/20 hover:bg-white/10",

        variant === "ghost" &&
          "border-transparent text-white hover:bg-white/5",

        className
      )}
      {...props}
    >
      <span>{children}</span>

      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
}