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
    <footer className="w-full bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="size-5 text-primary" />
              <span className="text-lg font-bold">
                Bright<span className="text-primary">Smile</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-background/70">
              Professional teeth whitening clinic dedicated to helping you
              achieve the brightest, healthiest smile with safe, advanced
              technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-background/70 transition-colors hover:text-primary"
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
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Business Hours
            </h4>
            <ul className="flex flex-col gap-2">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between text-sm text-background/70"
                >
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+15550001234"
                  className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-primary"
                >
                  <Phone className="size-4" />
                  (555) 000-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@brightsmile.com"
                  className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-primary"
                >
                  <Mail className="size-4" />
                  hello@brightsmile.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>123 Dental Ave, Suite 100<br />San Francisco, CA 94102</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-xs text-background/50">
            {"© 2026 Bright Smile Clinic. All rights reserved."}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-background/50 transition-colors hover:text-background/80"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-background/50 transition-colors hover:text-background/80"
            >
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-xs text-background/50 transition-colors hover:text-primary"
              aria-label="Back to top"
            >
              Back to Top
              <ChevronUp className="size-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
