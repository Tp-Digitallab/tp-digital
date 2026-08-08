"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import ScrollLink from "@/components/ui/ScrollLink";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const locationText =
    language === "de"
      ? "München, Deutschland"
      : language === "ru"
        ? "Мюнхен, Германия"
        : "Munich, Germany";

  return (
    <Section
      id="contact"
      className="bg-[#050505]"
    >
      <Container className="max-w-6xl">
        {/* Header */}

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            {t.contact.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-300">
            {t.contact.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact information */}

          <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-6 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07] sm:p-8">
            <h3 className="text-2xl font-semibold text-white">
              {t.contact.information}
            </h3>

            <p className="mt-2 text-zinc-300">
              {t.contact.subtitle}
            </p>

            <div className="mt-8 space-y-6">
              {/* Person */}

              <div>
                <p className="text-xl font-semibold text-white">
                  Taras Pakhaliuk
                </p>

                <p className="text-zinc-400">
                  {t.contact.role}
                </p>
              </div>

              {/* Location */}

              <div className="flex items-center gap-4">
                <div className="shrink-0 rounded-xl border border-white/15 bg-white/5 p-3">
                  <MapPin
                    aria-hidden="true"
                    className="h-5 w-5 text-blue-400"
                  />
                </div>

                <div>
                  <p className="text-white">
                    {t.contact.location}
                  </p>

                  <p className="text-zinc-400">
                    {locationText}
                  </p>
                </div>
              </div>

              {/* Email */}

              <div className="flex items-center gap-4">
                <div className="shrink-0 rounded-xl border border-white/15 bg-white/5 p-3">
                  <Mail
                    aria-hidden="true"
                    className="h-5 w-5 text-blue-400"
                  />
                </div>

                <div>
                  <p className="text-white">
                    {t.contact.email}
                  </p>

                  <a
                    href="mailto:info@tpdigitallab.de"
                    className="break-all text-zinc-400 transition hover:text-blue-400"
                  >
                    info@tpdigitallab.de
                  </a>
                </div>
              </div>

              {/* WhatsApp */}

              <div className="flex items-center gap-4">
                <div className="shrink-0 rounded-xl border border-white/15 bg-white/5 p-3">
                  <MessageCircle
                    aria-hidden="true"
                    className="h-5 w-5 text-blue-400"
                  />
                </div>

                <div>
                  <p className="text-white">
                    {t.contact.whatsapp}
                  </p>

                  <p className="text-zinc-400">
                    {t.contact.whatsappText}
                  </p>
                </div>
              </div>

              {/* Response time */}

              <div className="flex items-center gap-4">
                <div className="shrink-0 rounded-xl border border-white/15 bg-white/5 p-3">
                  <Clock3
                    aria-hidden="true"
                    className="h-5 w-5 text-blue-400"
                  />
                </div>

                <div>
                  <p className="text-white">
                    {t.contact.response}
                  </p>

                  <p className="text-zinc-400">
                    {t.contact.responseText}
                  </p>
                </div>
              </div>
            </div>

            {/* Email CTA */}

            <a
              href="mailto:info@tpdigitallab.de"
              className="
                mt-10
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-6
                py-3
                font-medium
                text-white
                transition
                hover:bg-blue-500
                sm:w-auto
              "
            >
              {t.contact.start}

              <ArrowRight
                aria-hidden="true"
                className="h-5 w-5"
              />
            </a>
          </div>

          {/* Quick links and legal */}

          <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-6 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07] sm:p-8">
            <h3 className="text-2xl font-semibold text-white">
              {t.contact.quickLinks}
            </h3>

            <nav
              aria-label={t.contact.quickLinks}
              className="mt-8 flex flex-col gap-5"
            >
              <ScrollLink
                href="#solutions"
                className="text-lg text-white transition hover:text-blue-400"
              >
                {t.contact.services}
              </ScrollLink>

              <ScrollLink
                href="#packages"
                className="text-lg text-white transition hover:text-blue-400"
              >
                {t.contact.pricing}
              </ScrollLink>

              <ScrollLink
                href="#projects"
                className="text-lg text-white transition hover:text-blue-400"
              >
                {t.contact.projects}
              </ScrollLink>

              <ScrollLink
                href="#faq"
                className="text-lg text-white transition hover:text-blue-400"
              >
                {t.contact.faq}
              </ScrollLink>
            </nav>

            <div className="my-10 h-px bg-white/10" />

            <h3 className="text-2xl font-semibold text-white">
              {t.contact.legal}
            </h3>

            <p className="mt-3 text-zinc-400">
              {t.contact.legalDescription}
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <Link
                href="/impressum"
                className="inline-flex items-center gap-2 text-lg text-white transition hover:text-blue-400"
              >
                {t.contact.impressum}

                <ExternalLink
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </Link>

              <Link
                href="/datenschutzerklaerung"
                className="inline-flex items-center gap-2 text-lg text-white transition hover:text-blue-400"
              >
                {t.contact.privacy}

                <ExternalLink
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}