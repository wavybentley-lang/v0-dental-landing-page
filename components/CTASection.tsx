"use client"

import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface CTASectionProps {
  onBookingClick: () => void
}

export function CTASection({ onBookingClick }: CTASectionProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="w-full bg-primary py-16 md:py-20 lg:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-4 text-center transition-all duration-700 md:px-6 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
          Ready to Brighten Your Smile?
        </h2>
        <p className="mt-4 text-pretty text-lg text-primary-foreground/80">
          Schedule your free consultation today and take the first step towards
          your dream smile.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            onClick={onBookingClick}
            size="lg"
            className="h-12 rounded-lg bg-background px-8 text-base text-primary hover:bg-background/90"
          >
            Book Your Appointment Now
          </Button>
          <a
            href="/contact"
            className="text-sm font-medium text-primary-foreground/80 underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
          >
            {"Questions? Contact Us"}
          </a>
        </div>
      </div>
    </section>
  )
}
