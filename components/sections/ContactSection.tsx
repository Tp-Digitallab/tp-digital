"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

export default function ContactSection() {
  return (
    <Section
  id="contact"
  className="bg-transparent"
>
      <Container className="max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Ready to Start Your Project?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-300">
            Have a project in mind? Whether you need a modern website,
            automation or a custom digital solution — let's discuss your idea.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact */}
          <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-8 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07]">
            <h3 className="text-2xl font-semibold text-white">
              Contact Information
            </h3>

            <p className="mt-2 text-zinc-300">
              Feel free to contact me anytime.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xl font-semibold text-white">
                  Taras Pakhaliuk
                </p>

                <p className="text-zinc-400">
                  Founder & Full-Stack Developer
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-white/15 bg-white/5 p-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-white">Location</p>
                  <p className="text-zinc-400">Munich, Germany</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-white/15 bg-white/5 p-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-white">Email</p>
                  <a
                    href="mailto:info@tp-digital.de"
                    className="text-zinc-400 transition hover:text-blue-400"
                  >
                    info@tp-digital.de
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-white/15 bg-white/5 p-3">
                  <MessageCircle className="h-5 w-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-white">WhatsApp</p>
                  <p className="text-zinc-400">
                    Available on request
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-white/15 bg-white/5 p-3">
                  <Clock3 className="h-5 w-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-white">Response Time</p>
                  <p className="text-zinc-400">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <a
              href="mailto:info@tp-digital.de"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Links */}
          <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-8 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07]">
            <h3 className="text-2xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-8 flex flex-col gap-5">
              <Link
                href="#services"
               className="text-lg !text-white transition hover:text-blue-400"
              >
                Services
              </Link>

              <Link
                href="#pricing"
                className="text-lg !text-white transition hover:text-blue-400"
              >
                Pricing
              </Link>

              <Link
                href="#projects"
                className="text-lg !text-white transition hover:text-blue-400"
              >
                Projects
              </Link>

              <Link
                href="#faq"
                className="text-lg !text-white transition hover:text-blue-400"
              >
                FAQ
              </Link>
            </div>

            <div className="my-10 h-px bg-white/10" />

            <h3 className="text-2xl font-semibold text-white">
              Legal
            </h3>

            <p className="mt-3 text-zinc-400">
              This website complies with German legal requirements.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <Link
                href="/impressum"
                className="text-lg !text-white transition hover:text-blue-400"
              >
                Impressum
                <ExternalLink className="h-4 w-4" />
              </Link>

              <Link
                href="/datenschutzerklaerung"
                className="text-lg !text-white transition hover:text-blue-400"
              >
                Datenschutz
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}