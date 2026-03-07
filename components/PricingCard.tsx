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
  paymentPlan?: string
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
  paymentPlan,
  featured = false,
  delay = 0,
  onSelect,
}: PricingCardProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`relative flex flex-col h-full rounded-xl border p-6 transition-all duration-500 lg:p-8 ${featured
        ? "border-gold bg-white shadow-xl z-10"
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
        <h3 className="text-xl font-medium text-foreground">{name}</h3>
        <p className="mt-1 text-sm text-muted-foreground italic font-sans">{description}</p>
      </div>

      {/* Price */}
      <div className="mb-4 border-b border-gold/10 pb-4">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl lg:text-5xl font-light text-foreground font-serif">{price}</span>
          <span className="text-sm text-muted-foreground">/ session</span>
        </div>
        {paymentPlan && (
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Or {paymentPlan}
          </p>
        )}
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
        variant="default"
        className="w-full rounded-lg font-bold uppercase text-white"
      >
        {cta}
      </Button>
    </div>
  )
}
