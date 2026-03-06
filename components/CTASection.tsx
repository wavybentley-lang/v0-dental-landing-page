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
        <h2 className="text-balance text-3xl font-medium text-secondary-foreground md:text-4xl lg:text-5xl tracking-tight text-secondary-foreground">
          Ready to Brighten Your <span className="text-gold italic">Smile?</span>
        </h2>
        <p className="mt-6 text-pretty text-lg text-secondary-foreground/80 font-sans">
          Schedule your free consultation today and take the first step towards
          your dream smile.
        </p>
        <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <Button
            onClick={onBookingClick}
            size="lg"
            className="h-14 rounded-lg px-8 text-base shadow-xl font-bold uppercase"
          >
            Claim Your Whitening Slot
          </Button>
          <a
            href="/contact"
            className="text-sm font-medium text-secondary-foreground/70 border-b border-secondary-foreground/20 transition-all hover:text-secondary-foreground hover:border-secondary-foreground"
          >
            {"Questions? Contact Us"}
          </a>
        </div>
      </div>
    </section>
  )
}
