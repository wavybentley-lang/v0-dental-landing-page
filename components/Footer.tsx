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
    <footer className="w-full bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact & About */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Sparkles className="size-5 text-gold group-hover:scale-110 transition-transform" />
              <span className="text-lg font-bold text-white">
                Bright<span className="text-gold">Smile</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300 italic">
              Professional teeth whitening clinic dedicated to helping you achieve the brightest, healthiest smile.
            </p>
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
                <div className="flex flex-col gap-1">
                  <span>123 Dental Ave, Suite 100<br />San Francisco, CA 94102</span>
                </div>
              </li>
            </ul>
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

          {/* Map */}
          <div className="flex flex-col gap-4">
            <a
              href="https://www.google.com/maps/dir//123+Dental+Ave,+Suite+100,+San+Francisco,+CA+94102"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-gold px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-navy hover:shadow-[0_0_15px_rgba(201,169,110,0.4)] active:scale-95 group"
            >
              <MapPin className="size-4 transition-transform group-hover:scale-110" />
              Get Directions
            </a>
            <div className="overflow-hidden rounded-lg border border-white/10 grayscale-[0.2] hover:grayscale-0 transition-all duration-500 shadow-md h-[180px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086326118432!2d-122.40939512345601!3d37.7869405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580890f5337bb%3A0x629559c5d1796695!2sUnion%20Square!5e0!3m2!1sen!2sus!4v1645567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Clinic Location"
                className="rounded-lg"
              ></iframe>
            </div>
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
