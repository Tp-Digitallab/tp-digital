"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Solutions", href: "#solutions" },
  { name: "Packages", href: "#packages" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
          md:hidden
          flex
          items-center
          justify-center
          h-11
          w-11
          rounded-full
          border
          border-white/15
          bg-white/[0.08]
          backdrop-blur-xl
        "
      >
        <Menu size={20} color="white" />
      </button>

      {open && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-black/80
            backdrop-blur-3xl
          "
        >
          <div className="flex items-center justify-between p-8">

            <div>
              <div className="text-2xl font-semibold text-white">
                TP
              </div>

              <div className="text-xs uppercase tracking-[0.35em] text-white/40">
                Digital Lab
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
            >
              <X size={28} color="white" />
            </button>

          </div>

          <nav className="mt-20 flex flex-col items-center gap-10">

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-medium text-white"
              >
                {item.name}
              </a>
            ))}

          </nav>

        </div>
      )}
    </>
  );
}