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
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled
        ? "bg-white/95 backdrop-blur-md border-b border-gold/10 shadow-xl"
        : "bg-white border-b border-slate-100"
        }`}
    >
      {/* Top Bar */}
      <div className="w-full bg-navy py-2">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+15550001234"
              className="group flex items-center gap-2 text-xs font-bold text-white transition-colors hover:text-gold"
            >
              <div className="flex size-6 items-center justify-center rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
                <Phone className="size-3 text-gold" />
              </div>
              <span className="hidden sm:inline">(555) 000-1234</span>
              <span className="sm:hidden text-gold tracking-tight">CALL NOW</span>
            </a>
            <div className="flex items-center gap-2 text-[11px] font-semibold text-white/80 sm:text-xs">
              <Clock className="size-3.5 text-gold/80" />
              <span className="hidden xs:inline">Mon-Fri: 8am - 6pm</span>
              <span className="xs:hidden">M-F: 8a-6p</span>
            </div>
          </div>
          <div className="hidden items-center gap-4 text-xs font-bold text-white/70 md:flex">
            <span>Sat: 9am - 4pm</span>
            <div className="h-3 w-px bg-white/20" />
            <span className="text-gold italic">Premium Dental Care</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Sparkles className="size-6 text-gold group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xl font-bold text-navy tracking-tight">
            Bright<span className="text-gold underline decoration-gold/30 underline-offset-4">Smile</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 text-sm font-bold text-navy/80 transition-colors hover:text-gold group"
            >
              {link.label}
              <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gold scale-x-0 transition-transform group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/contact"
            className="text-sm font-bold text-navy/80 transition-colors hover:text-gold"
          >
            Contact
          </Link>
          <Button onClick={onBookingClick} size="lg" className="rounded-lg shadow-lg bg-navy hover:bg-navy/90 text-white font-bold transition-all hover:scale-[1.02]">
            Book Appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-navy md:hidden"
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
            className="absolute inset-0 bg-navy/60 backdrop-blur-md"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="relative mx-4 mt-2 flex flex-col gap-1 rounded-2xl border border-gold/10 bg-white p-6 shadow-2xl animate-in slide-in-from-top-4 duration-300"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-lg font-bold text-navy transition-colors hover:bg-slate-50 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <div className="my-2 h-px bg-slate-100" />
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-lg font-bold text-navy transition-colors hover:bg-slate-50 hover:text-gold"
            >
              Contact
            </Link>
            <Button
              onClick={() => {
                setMobileOpen(false)
                onBookingClick()
              }}
              size="lg"
              className="mt-4 w-full h-14 rounded-xl bg-navy hover:bg-navy/90 text-white text-lg font-bold shadow-lg"
            >
              Book Appointment
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
