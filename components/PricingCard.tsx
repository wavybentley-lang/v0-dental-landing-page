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
      className={`relative flex flex-col rounded-xl border p-6 transition-all duration-500 lg:p-8 ${
        featured
          ? "border-primary bg-background shadow-lg lg:scale-105 z-10"
          : "glass-effect hover:-translate-y-1 hover:shadow-lg"
      } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Badge */}
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
          Most Popular
        </span>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <span className="text-4xl font-bold text-foreground font-mono">{price}</span>
        <span className="text-sm text-muted-foreground">/session</span>
      </div>

      {/* Features */}
      <ul className="mb-8 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        onClick={onSelect}
        size="lg"
        variant={featured ? "default" : "outline"}
        className={`w-full rounded-lg ${
          featured
            ? ""
            : "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
        }`}
      >
        {cta}
      </Button>
    </div>
  )
}
