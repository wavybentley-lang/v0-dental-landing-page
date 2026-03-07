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
    cta: "Select Essential",
    paymentPlan: "4 interest-free payments of $62.25",
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
    cta: "Claim Signature Slot",
    paymentPlan: "6 monthly installments of $83.16",
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
    cta: "Secure Elite Package",
    paymentPlan: "12 monthly installments of $66.58",
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
          <h2 className="text-balance text-3xl font-medium text-secondary-foreground md:text-4xl text-secondary-foreground">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-pretty text-secondary-foreground/80 font-sans">
            Choose the plan that fits your goals. All packages include our
            safety guarantee.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <PricingCard
              key={tier.id}
              {...tier}
              delay={i * 150}
              onSelect={onBookingClick}
            />
          ))}
        </div>

        {/* Money-back Guarantee */}
        <div className="mt-16 flex flex-col items-center justify-center p-8 rounded-2xl border border-gold/10 bg-card shadow-xl max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-gold/10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 text-gold"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-medium text-foreground">Our Result-First Guarantee</h3>
          </div>
          <p className="text-center text-muted-foreground leading-relaxed font-sans">
            Not seeing the results you expected? If your teeth aren't at least <span className="text-gold font-bold">2 shades whiter</span> after your session, we'll provide a full refund or a complimentary second treatment. No questions asked.
          </p>
        </div>
      </div>
    </section>
  )
}
