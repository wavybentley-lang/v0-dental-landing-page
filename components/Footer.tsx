"use client"

import Link from "next/link"
import { Sparkles, Phone, Mail, MapPin, ChevronUp } from "lucide-react"

const quickLinks = [
  { label: "Features", href: "#features" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
]

const hours = [
  { day: "Mon - Fri", time: "8:00 AM - 6:00 PM" },
  { day: "Saturday", time: "9:00 AM - 4:00 PM" },
  { day: "Sunday", time: "Closed" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full bg-[#1A1F2E] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Sparkles className="size-5 text-gold group-hover:scale-110 transition-transform" />
              <span className="text-lg font-bold text-white">
                Bright<span className="text-gold">Smile</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300 italic">
              Professional teeth whitening clinic dedicated to helping you
              achieve the brightest, healthiest smile with safe, advanced
              technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-gold hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-gold hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Business Hours
            </h4>
            <ul className="flex flex-col gap-2">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between text-sm text-slate-300 border-b border-white/5 pb-1"
                >
                  <span>{h.day}</span>
                  <span className="font-medium text-white">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+15550001234"
                  className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-gold"
                >
                  <Phone className="size-4 text-gold" />
                  (555) 000-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@brightsmile.com"
                  className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-gold"
                >
                  <Mail className="size-4 text-gold" />
                  hello@brightsmile.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>123 Dental Ave, Suite 100<br />San Francisco, CA 94102</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-slate-400">
            {"© 2026 Bright Smile Clinic. All rights reserved."}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-slate-400 transition-colors hover:text-gold"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-slate-400 transition-colors hover:text-gold"
            >
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-xs text-slate-400 transition-colors hover:text-gold group"
              aria-label="Back to top"
            >
              Back to Top
              <ChevronUp className="size-3 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
