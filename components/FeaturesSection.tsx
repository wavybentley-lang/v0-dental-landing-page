"use client"

import { Smile, Sparkles, Clock } from "lucide-react"
import { FeatureCard } from "@/components/FeatureCard"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const features = [
  {
    icon: <Smile className="size-6" />,
    title: "Smile Without Fear",
    metric: "Zero Pain Experience",
    description:
      "Experience a pain-free whitening journey that feels as good as it looks. Reclaim your confidence with a treatment designed for maximum comfort and zero sensitivity.",
  },
  {
    icon: <Sparkles className="size-6" />,
    title: "Your Dream Smile, Delivered",
    metric: "Natural Brilliance",
    description:
      "Walk out with a naturally brilliant white that mirrors your unique personality. We don't just whiten teeth; we craft the aspirational look you've always wanted.",
  },
  {
    icon: <Clock className="size-6" />,
    title: "Radiance That Lasts Months",
    metric: "6+ Months Brightness",
    description:
      "Enjoy lasting brightness for 6+ months without the need for constant touch-ups. Show off your radiant results in every photo, meeting, and social moment.",
  },
]

interface FeaturesSectionProps {
  onBookingClick: () => void
}

export function FeaturesSection({ onBookingClick }: FeaturesSectionProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  return (
    <section id="features" className="w-full bg-slate-50/50 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="bg-white/40 backdrop-blur-lg border border-white/20 shadow-2xl shadow-navy/5 rounded-3xl p-8 md:p-12 lg:p-16 transition-all duration-300">
          <div
            ref={headerRef}
            className={`mx-auto mb-12 max-w-2xl text-center lg:mb-16 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <span className="section-label">
              Why Choose Us
            </span>
            <h2 className="text-balance text-3xl font-medium text-navy md:text-4xl text-navy">
              The Results You&apos;ve Been Waiting For
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground lg:text-lg">
              Feel the freedom to show off your smile. Our results-driven approach focuses on your confidence, delivering a transformation you can&apos;t wait to share.
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
              className="rounded-lg font-bold uppercase"
            >
              {"Start My Transformation"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
