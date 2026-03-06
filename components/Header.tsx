"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sparkles, Phone, Clock, Calendar, CheckCircle, MessageSquare, Tag, HelpCircle, Mail, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Features", href: "#features", icon: Sparkles },
  { label: "Results", href: "#results", icon: CheckCircle },
  { label: "Testimonials", href: "#testimonials", icon: MessageSquare },
  { label: "Pricing", href: "#pricing", icon: Tag },
  { label: "FAQ", href: "#faq", icon: HelpCircle },
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
      className={`sticky top-0 z-50 w-full transition-all duration-700 ease-in-out ${scrolled
        ? "bg-white/95 backdrop-blur-md border-b border-gold/10 shadow-xl"
        : "bg-white border-b border-slate-100"
        }`}
    >
      {/* Top Bar */}
      <div className="w-full bg-navy py-1.5 sm:py-2">
        <div className="mx-auto flex h-11 sm:h-10 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
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
              className="relative px-3 py-2 text-sm font-bold text-navy/80 transition-all duration-700 ease-out hover:text-gold group"
            >
              {link.label}
              <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gold scale-x-0 transition-transform duration-700 ease-out group-hover:scale-x-100" />
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

        {/* Mobile Menu & CTA */}
        <div className="flex items-center gap-3 md:hidden">
          <Button
            onClick={onBookingClick}
            size="sm"
            className="h-10 px-4 text-xs font-bold bg-gold hover:bg-gold/90 text-navy rounded-full shadow-md animate-pulse-slow"
          >
            BOOK NOW
          </Button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-full w-11 h-11 text-navy bg-slate-100/50 hover:bg-slate-100 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-50 md:hidden bg-white">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex h-16 items-center justify-between px-4 border-b border-slate-100">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                <Sparkles className="size-6 text-gold" />
                <span className="text-xl font-bold text-navy tracking-tight">BrightSmile</span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-full w-11 h-11 text-navy bg-slate-100"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 overflow-y-auto py-8 px-6 space-y-2">
              <p className="text-[10px] font-bold tracking-[0.2em] text-navy/40 uppercase mb-4 px-2">Navigation</p>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-bold text-navy transition-all hover:bg-navy hover:text-white"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-slate-100 group-hover:bg-white/10 transition-colors">
                      <link.icon className="size-5 text-gold" />
                    </div>
                    {link.label}
                  </div>
                  <ChevronRight className="size-5 text-navy/20 group-hover:text-white/40" />
                </a>
              ))}

              <div className="pt-8 space-y-2">
                <p className="text-[10px] font-bold tracking-[0.2em] text-navy/40 uppercase mb-4 px-2">Support</p>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-bold text-navy transition-all hover:bg-navy hover:text-white"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-slate-100 group-hover:bg-white/10 transition-colors">
                      <Mail className="size-5 text-gold" />
                    </div>
                    Contact
                  </div>
                  <ChevronRight className="size-5 text-navy/20 group-hover:text-white/40" />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50/50">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <a href="tel:+15550001234" className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-slate-200 gap-2 shadow-sm">
                  <Phone className="size-5 text-gold" />
                  <span className="text-xs font-bold text-navy">Call Us</span>
                </a>
                <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-slate-200 gap-2 shadow-sm">
                  <Clock className="size-5 text-gold" />
                  <span className="text-xs font-bold text-navy">8am - 6pm</span>
                </div>
              </div>
              <Button
                onClick={() => {
                  setMobileOpen(false)
                  onBookingClick()
                }}
                className="w-full h-14 rounded-2xl bg-navy hover:bg-navy/90 text-white text-lg font-bold shadow-xl flex items-center justify-center gap-2"
              >
                Book Appointment
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
