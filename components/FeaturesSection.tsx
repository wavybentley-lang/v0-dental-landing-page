"use client"

import { ShieldCheck, Palette, HeartPulse } from "lucide-react"
import { FeatureCard } from "@/components/FeatureCard"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: <ShieldCheck className="size-6" />,
    title: "Enamel-Safe Technology",
    description:
      "Professional-grade whitening that protects your enamel with advanced formulations. Our gentle approach ensures zero sensitivity for 98% of patients.",
  },
  {
    icon: <Palette className="size-6" />,
    title: "Custom Shade Calibration",
    description:
      "We match your unique shade goals with precision-guided whitening protocols. Every treatment is tailored to achieve your perfect, natural-looking white.",
  },
  {
    icon: <HeartPulse className="size-6" />,
    title: "Post-Care Integration",
    description:
      "Comprehensive aftercare plan to maintain your brilliant white smile for months. Includes a take-home kit and personalized maintenance schedule.",
  },
]

interface FeaturesSectionProps {
  onBookingClick: () => void
}

export function FeaturesSection({ onBookingClick }: FeaturesSectionProps) {
  return (
    <section id="features" className="w-full bg-background py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="section-label">
            Why Choose Us
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Advanced Whitening Technology
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Our clinic combines cutting-edge dental science with personalized
            care to deliver safe, long-lasting results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} delay={i * 150} />
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:mt-16">
          <Button
            onClick={onBookingClick}
            variant="outline"
            size="lg"
            className="rounded-lg"
          >
            {"Ready? Book Now"}
          </Button>
        </div>
      </div>
    </section>
  )
}
