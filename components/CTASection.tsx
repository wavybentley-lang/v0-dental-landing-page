"use client"

import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface CTASectionProps {
  onBookingClick: () => void
  onLearnMoreClick?: () => void
}

export function CTASection({ onBookingClick, onLearnMoreClick }: CTASectionProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="w-full bg-navy py-16 md:py-20 lg:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-4 text-center transition-all duration-700 md:px-6 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
      >
        <h2 className="text-balance text-3xl font-light text-white md:text-4xl lg:text-5xl">
          Ready to Brighten Your <span className="text-gold italic">Smile?</span>
        </h2>
        <p className="mt-6 text-pretty text-lg text-white/80 font-sans">
          Schedule your free consultation today and take the first step towards
          your dream smile.
        </p>
        <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <Button
            onClick={onBookingClick}
            size="lg"
            className="h-14 rounded-lg px-8 text-base shadow-xl"
          >
            Book Your Appointment Now
          </Button>
          <a
            href="/contact"
            className="text-sm font-medium text-white/70 border-b border-white/20 transition-all hover:text-white hover:border-white"
          >
            {"Questions? Contact Us"}
          </a>
        </div>
      </div>
    </section>
  )
}
