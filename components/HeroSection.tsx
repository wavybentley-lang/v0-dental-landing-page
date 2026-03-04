"use client"

import { Star, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AvailabilityCounter } from "@/components/AvailabilityCounter"

interface HeroSectionProps {
  onBookingClick: () => void
}

export function HeroSection({ onBookingClick }: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden hero-gradient pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-32 lg:pb-32">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 pointer-events-none">
        <div className="size-96 rounded-full bg-gold/30" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text Content - 60% Width on Desktop */}
          <div className="w-full lg:w-[60%] flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-1000 fill-mode-both mb-8">
              <AvailabilityCounter />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold tracking-widest uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 fill-mode-both">
              <Sparkles className="size-3" />
              <span>Limited Time: New Patient Special</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 fill-mode-both">
              The Confidence of a <span className="text-gold italic relative inline-block">Brighter<span className="absolute bottom-1 left-0 w-full h-1 bg-gold/10 -rotate-1" /></span> Smile, Delivered in One Visit.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both">
              Achieve up to 8 shades of whiter teeth with our advanced cold-light technology.
              100% enamel-safe with zero sensitivity—guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400 fill-mode-both">
              <Button
                onClick={onBookingClick}
                size="lg"
                className="h-16 rounded-full px-10 text-lg shadow-xl bg-navy hover:bg-navy/90 text-white transition-all hover:scale-105 active:scale-95 group"
              >
                Claim Your New Patient Special
                <Sparkles className="ml-2 size-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>

              <div className="flex -space-x-3 items-center">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="size-10 rounded-full border-2 border-white bg-slate-100 relative overflow-hidden">
                    <Image src={`https://i.pravatar.cc/150?u=${i + 10}`} fill alt="Patient" className="object-cover" />
                  </div>
                ))}
                <div className="ml-4 pl-4 border-l border-slate-200 py-1">
                  <div className="flex items-center gap-1">
                    <Star className="size-3 fill-gold text-gold" />
                    <span className="text-sm font-bold text-navy">4.9/5 stars</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Join 200+ Happy Patients</p>
                </div>
              </div>
            </div>

            {/* Trust Badges Minimal Row */}
            <div className="mt-16 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600 fill-mode-both">
              <div className="flex flex-wrap justify-center lg:justify-start gap-y-6 gap-x-10 border-t border-slate-100 pt-8 opacity-70">
                <div className="flex items-center gap-2 group transition-opacity hover:opacity-100">
                  <ShieldCheck className="size-5 text-gold" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-navy">FDA Approved</span>
                </div>
                <div className="flex items-center gap-2 group transition-opacity hover:opacity-100">
                  <CheckCircle2 className="size-5 text-gold" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-navy">BPA-Free Materials</span>
                </div>
                <div className="flex items-center gap-2 group transition-opacity hover:opacity-100">
                  <ShieldCheck className="size-5 text-gold" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-navy">Supervised Clinical Care</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual - 40% Width on Desktop */}
          <div className="w-full lg:w-[40%] relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-500 fill-mode-both">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(15,23,42,0.15)] border border-white/50">
              <Image
                src="/images/hero.jpg"
                alt="Radiant lifestyle shot of a patient with a white smile"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[20s] ease-linear"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent pointer-events-none" />

              {/* Premium Result Badge Overlay */}
              <div className="absolute top-6 right-6 glass-effect p-4 rounded-2xl animate-fade-in delay-1000">
                <p className="text-white text-xs font-bold uppercase tracking-widest text-center">Treatment Result</p>
                <p className="text-white text-3xl font-serif text-center">+8 Shades</p>
              </div>
            </div>

            {/* Floating Highlight Card */}
            <div className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 rounded-[1.5rem] shadow-[0_20px_40px_-5px_rgba(15,23,42,0.1)] border border-slate-50 animate-floating hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-gold/10 p-4 rounded-2xl">
                  <CheckCircle2 className="size-7 text-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy leading-none mb-1">Zero</p>
                  <p className="text-xs font-bold text-gold uppercase tracking-[0.2em]">Sensitivity</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
