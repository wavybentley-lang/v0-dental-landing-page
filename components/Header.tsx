"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sparkles, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

interface HeaderProps {
  onBookingClick: () => void
}

export function Header({ onBookingClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-lg"
        : "bg-white border-b border-slate-100"
        }`}
    >
      {/* Top Bar */}
      <div className="w-full bg-[#1A1F2E] py-2">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+15550001234"
              className="group flex items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-gold"
            >
              <div className="flex size-6 items-center justify-center rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
                <Phone className="size-3 text-gold" />
              </div>
              <span className="hidden sm:inline">(555) 000-1234</span>
              <span className="sm:hidden text-gold tracking-tight">CALL NOW</span>
            </a>
            <div className="flex items-center gap-2 text-[11px] font-medium text-white/80 sm:text-xs">
              <Clock className="size-3.5 text-gold/80" />
              <span className="hidden xs:inline">Mon-Fri: 8am - 6pm</span>
              <span className="xs:hidden">M-F: 8a-6p</span>
            </div>
          </div>
          <div className="hidden items-center gap-4 text-xs font-medium text-white/70 md:flex">
            <span>Sat: 9am - 4pm</span>
            <div className="h-3 w-px bg-white/20" />
            <span className="text-gold italic">Premium Dental Care</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Sparkles className="size-6 text-gold group-hover:scale-110 transition-transform" />
          <span className="text-lg font-bold text-slate-900">
            Bright<span className="text-gold">Smile</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-gold"
          >
            Contact
          </Link>
          <Button onClick={onBookingClick} size="lg" className="rounded-lg shadow-md bg-blue-600 hover:bg-blue-700 text-white">
            Book Appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-900 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="relative mx-4 mt-2 flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-4 shadow-2xl animate-slide-up"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-50 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <div className="my-2 h-px bg-slate-100" />
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-50 hover:text-gold"
            >
              Contact
            </Link>
            <Button
              onClick={() => {
                setMobileOpen(false)
                onBookingClick()
              }}
              size="lg"
              className="mt-2 w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
            >
              Book Appointment
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
