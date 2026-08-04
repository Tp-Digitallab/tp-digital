"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";



export default function MobileMenu() {

  const { language } = useLanguage();

  const t = translations[language];

  const [open, setOpen] = useState(false);


  const navigation = [
    { name: t.nav.services, href: "#solutions" },
    { name: t.nav.packages, href: "#packages" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.calculator, href: "#calculator" },
    { name: t.nav.process, href: "#process" },
    { name: t.nav.contact, href: "#contact" },
  ];

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
      overflow-hidden
      bg-[#050505]/95
      backdrop-blur-3xl
    "
  >
    <div
  className="
    absolute
    left-1/2
    top-1/3
    -translate-x-1/2
    h-[500px]
    w-[500px]
    rounded-full
    bg-blue-500/10
    blur-[160px]
  "
/>
          <div className="
  relative
  flex
  items-center
  justify-between
  px-8
  pt-8
">

            <div>
              <div className="
  text-4xl
  font-semibold
  tracking-tight
  text-white
">
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

          <nav
  className="
    relative
    mt-16
    flex
    flex-col
    gap-5
    px-8
  "
>

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}

                className="
  flex
  items-center
  justify-between

  rounded-full

  border
  border-white/15

  bg-white/[0.08]

  px-7
  py-5

  text-2xl
  font-medium

  !text-white

  backdrop-blur-xl

  shadow-[0_8px_30px_rgba(0,0,0,0.25)]

  transition-all
  duration-300

  hover:border-white/30

  hover:bg-white/[0.12]

  hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]

  hover:scale-[1.02]
"
              >
                {item.name}
              </a>
            ))}

          </nav>
          <div className="mt-14 flex flex-col items-center gap-8">

  <LanguageSwitcher />

</div>

        </div>
      )}
    </>
  );
}