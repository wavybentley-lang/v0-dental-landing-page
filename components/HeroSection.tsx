"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onBookingClick: () => void
}

export function HeroSection({ onBookingClick }: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden hero-gradient">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center gap-8 px-4 py-12 md:flex-row md:gap-12 md:px-6 md:py-16 lg:gap-16 lg:px-8 lg:py-20">
        {/* Text Content */}
        <div className="flex max-w-xl flex-1 flex-col items-center text-center md:items-start md:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          <span className="section-label">
            Professional Whitening
          </span>
          <h1 className="text-balance leading-tight text-foreground">
            Transform Your Smile with <span className="text-gold italic">Professional Whitening</span>
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl font-sans">
            Achieve 8+ shades brighter in just one session. Our enamel-safe
            technology and personalized care deliver results you can see
            immediately.
          </p>
          <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row md:mt-10">
            <Button
              onClick={onBookingClick}
              size="lg"
              className="h-14 rounded-lg px-8 text-base shadow-lg"
            >
              Book Your Free Consultation
            </Button>
            <Link
              href="/contact"
              className="text-sm font-medium text-navy/70 border-b border-navy/20 transition-all hover:text-navy hover:border-navy"
            >
              {"Questions? Contact Sarah"}
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex-1 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
          <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl shadow-lg md:max-w-none">
            <Image
              src="/images/hero.jpg"
              alt="Patient smiling after professional teeth whitening treatment at Bright Smile Clinic"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Floating stat badge */}
          <div className="absolute -bottom-4 left-4 rounded-xl border border-border bg-background/90 px-4 py-3 shadow-lg backdrop-blur-sm md:-left-6 md:bottom-8">
            <p className="text-2xl font-bold text-primary font-mono">8+</p>
            <p className="text-xs text-muted-foreground">Shades Whiter</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <a
          href="#features"
          className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="text-xs font-medium">Learn How It Works</span>
          <ArrowDown className="size-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
