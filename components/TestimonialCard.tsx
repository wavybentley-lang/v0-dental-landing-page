"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface TestimonialCardProps {
  name: string
  profession: string
  image: string
  quote: string
  rating: number
  date: string
  delay?: number
}

export function TestimonialCard({
  name,
  profession,
  image,
  quote,
  rating,
  date,
  delay = 0,
}: TestimonialCardProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`premium-card flex flex-col p-6 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Star Rating */}
      <div className="mb-4 flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`size-4 ${i < rating ? "fill-gold text-gold" : "text-muted"
              }`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-foreground italic">
        {`"${quote}"`}
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="relative size-10 overflow-hidden rounded-full border border-gold/20">
          <Image
            src={image}
            alt={`${name} - Bright Smile patient`}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <div className="flex items-center gap-2">
            <p className="text-xs text-muted-foreground">{profession}</p>
            <span className="text-[10px] text-muted-foreground/60">•</span>
            <p className="text-[10px] text-muted-foreground/60">{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
