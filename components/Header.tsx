"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sparkles } from "lucide-react"
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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-lg border-b border-white/10 shadow-lg"
          : "bg-navy"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Sparkles className="size-6 text-gold group-hover:scale-110 transition-transform" />
          <span className="text-lg font-bold text-white">
            Bright<span className="text-gold">Smile</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="text-sm font-medium text-white/90 transition-colors hover:text-gold"
          >
            Contact
          </Link>
          <Button onClick={onBookingClick} size="lg" className="rounded-lg shadow-md">
            Book Appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
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
            className="relative mx-4 mt-2 flex flex-col gap-1 rounded-xl border border-white/10 bg-navy p-4 shadow-2xl animate-slide-up"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <div className="my-2 h-px bg-white/10" />
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-gold"
            >
              Contact
            </Link>
            <Button
              onClick={() => {
                setMobileOpen(false)
                onBookingClick()
              }}
              size="lg"
              className="mt-2 w-full rounded-lg"
            >
              Book Appointment
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
