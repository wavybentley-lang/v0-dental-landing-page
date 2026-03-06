"use client"

import { useState, useEffect } from "react"
import { ShieldCheck, CheckCircle2, Sparkles } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AvailabilityCounter } from "@/components/AvailabilityCounter"
import { motion, AnimatePresence } from "framer-motion"

interface HeroSectionProps {
  onBookingClick: () => void
}

const HERO_IMAGES = [
  "/images/pexels-cottonbro-3402510.jpg",
  "/images/pexels-krivitskiy-6471731.jpg",
  "/images/pexels-olly-3799223.jpg",
  "/images/pexels-skinny-tie-media-3205510-13147635.jpg",
  "/images/pexels-udoka-gabriel-1914060-6348688.jpg",
]

export function HeroSection({ onBookingClick }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold tracking-widest uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 fill-mode-both">
              <Sparkles className="size-3" />
              <span>Limited Time: New Patient Special</span>
            </div>

            <h1 className="text-[32px] md:text-5xl lg:text-6xl xl:text-7xl leading-[1.2] md:leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 fill-mode-both">
              The Smile You’ve Always Wanted. <span className="text-gold italic relative inline-block">Delivered<span className="absolute bottom-1 left-0 w-full h-1 bg-gold/10 -rotate-1" /></span> in 60 Minutes.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both">
              Professional, enamel-safe whitening that erases years of stains in one visit. Zero sensitivity. Total confidence. Guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400 fill-mode-both">
              <div className="flex flex-col items-center sm:items-start gap-4">
                <Button
                  onClick={onBookingClick}
                  size="lg"
                  className="h-16 rounded-full px-10 text-lg shadow-xl bg-navy hover:bg-navy/90 text-white transition-all hover:scale-105 active:scale-95 group"
                >
                  Claim Your New Patient Special
                  <Sparkles className="ml-2 size-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="px-2"
                >
                  <AvailabilityCounter />
                </motion.div>
              </div>

              <div className="flex -space-x-3 items-center">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="size-10 rounded-full border-2 border-white bg-slate-100 relative overflow-hidden">
                    <Image src={`https://i.pravatar.cc/150?u=${i + 10}`} fill alt="Patient" className="object-cover" />
                  </div>
                ))}
                <div className="ml-4 pl-4 border-l border-slate-200 py-1">
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
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(15,23,42,0.2)] border border-white/50 bg-navy/5">
              {HERO_IMAGES.map((img, index) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === currentImageIndex ? 1 : 0,
                    scale: index === currentImageIndex ? [1, 1.1] : 1, // Continuous slow zoom
                    zIndex: index === currentImageIndex ? 10 : 0
                  }}
                  transition={{
                    opacity: { duration: 3.5, ease: "easeInOut" },
                    scale: { duration: 8, ease: "linear", repeat: Infinity }, // Infinite Ken Burns
                  }}
                  className="absolute inset-0 origin-center"
                >
                  <Image
                    src={img}
                    alt={`Cinematic dental visualization ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </motion.div>
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-navy/10 pointer-events-none z-20" />

              {/* WORLD-CLASS PROGRESS DOCK */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2 px-4 py-2 rounded-full glass-effect border border-white/20">
                {HERO_IMAGES.map((_, i) => (
                  <div key={i} className="relative w-8 h-1.5 rounded-full bg-white/20 overflow-hidden">
                    {i === currentImageIndex && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="absolute h-full bg-gold shadow-[0_0_8px_rgba(180,150,90,0.8)]"
                      />
                    )}
                  </div>
                ))}
              </div>



            </div>

            {/* Floating Highlight Card */}
            <div className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 rounded-[1.5rem] shadow-[0_20px_40px_-5px_rgba(15,23,42,0.1)] border border-slate-50 animate-floating hidden md:block z-30">
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
