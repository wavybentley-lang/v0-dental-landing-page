"use client"

import { PricingCard } from "@/components/PricingCard"

const tiers = [
  {
    id: "essential",
    name: "Essential",
    price: "$249",
    description: "Perfect for first-time whitening",
    features: [
      "Single whitening session",
      "Basic shade assessment",
      "Post-treatment care guide",
      "1-week follow-up check",
    ],
    cta: "Choose Essential",
    featured: false,
  },
  {
    id: "signature",
    name: "Signature",
    price: "$499",
    description: "Our most popular comprehensive package",
    features: [
      "Full consultation & assessment",
      "Premium whitening session",
      "Custom shade calibration",
      "3-month touch-up included",
      "Premium aftercare kit",
      "Priority scheduling",
    ],
    cta: "Book Now",
    featured: true,
  },
  {
    id: "elite",
    name: "Elite",
    price: "$799",
    description: "The ultimate whitening experience",
    features: [
      "Everything in Signature",
      "Two whitening sessions",
      "6-month maintenance plan",
      "VIP priority support",
      "Annual touch-up included",
      "Complimentary dental cleaning",
    ],
    cta: "Choose Elite",
    featured: false,
  },
]

interface PricingSectionProps {
  onBookingClick: () => void
}

export function PricingSection({ onBookingClick }: PricingSectionProps) {
  return (
    <section id="pricing" className="w-full bg-secondary py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="section-label">
            Pricing
          </span>
          <h2 className="text-balance text-3xl font-bold text-secondary-foreground md:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-pretty text-secondary-foreground/80 font-sans">
            Choose the plan that fits your goals. All packages include our
            safety guarantee.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <PricingCard
              key={tier.id}
              {...tier}
              delay={i * 150}
              onSelect={onBookingClick}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
