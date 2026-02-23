"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  featured?: boolean
  delay?: number
  onSelect: () => void
}

export function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  featured = false,
  delay = 0,
  onSelect,
}: PricingCardProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`relative flex flex-col rounded-xl border p-6 transition-all duration-500 lg:p-8 ${featured
          ? "border-gold bg-white shadow-xl lg:scale-105 z-10"
          : "premium-card"
        } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Badge */}
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-semibold text-navy shadow-sm">
          Most Popular
        </span>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground">{name}</h3>
        <p className="mt-1 text-sm text-muted-foreground italic font-sans">{description}</p>
      </div>

      {/* Price */}
      <div className="mb-6 border-b border-gold/10 pb-6">
        <span className="text-5xl font-light text-foreground font-serif">{price}</span>
        <span className="text-sm text-muted-foreground ml-1">/ session</span>
      </div>

      {/* Features */}
      <ul className="mb-8 flex flex-1 flex-col gap-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
            <div className="mt-0.5 rounded-full bg-gold/10 p-1">
              <Check className="size-3 text-gold" />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        onClick={onSelect}
        size="lg"
        variant={featured ? "default" : "outline"}
        className="w-full rounded-lg"
      >
        {cta}
      </Button>
    </div>
  )
}
