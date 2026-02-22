"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const slides = [
  {
    before: "/images/before-after-1.jpg",
    after: "/images/before-after-1.jpg",
    label: "Sarah - 8 Shades Whiter",
  },
  {
    before: "/images/before-after-2.jpg",
    after: "/images/before-after-2.jpg",
    label: "Mark - 6 Shades Whiter",
  },
  {
    before: "/images/before-after-3.jpg",
    after: "/images/before-after-3.jpg",
    label: "Amanda - 7 Shades Whiter",
  },
]

interface BeforeAfterSectionProps {
  onBookingClick: () => void
}

export function BeforeAfterSection({ onBookingClick }: BeforeAfterSectionProps) {
  const [active, setActive] = useState(0)
  const { ref, isVisible } = useScrollReveal()

  const prev = () => setActive((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setActive((c) => (c === slides.length - 1 ? 0 : c + 1))

  return (
    <section id="results" className="w-full bg-secondary py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Real Results
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            See the Transformation
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Real patients, real results. See why hundreds trust us with their smile.
          </p>
        </div>

        <div
          ref={ref}
          className={`relative mx-auto max-w-4xl transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative aspect-[16/9] w-full">
              {slides.map((slide, i) => (
                <div
                  key={slide.label}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    i === active ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <div className="grid h-full grid-cols-2 gap-0.5">
                    <div className="relative overflow-hidden">
                      <Image
                        src={slide.before}
                        alt={`Before whitening - ${slide.label}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <span className="absolute left-3 top-3 rounded-md bg-foreground/70 px-2 py-1 text-xs font-medium text-background backdrop-blur-sm">
                        Before
                      </span>
                    </div>
                    <div className="relative overflow-hidden">
                      <Image
                        src={slide.after}
                        alt={`After whitening - ${slide.label}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <span className="absolute right-3 top-3 rounded-md bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                        After
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Label Overlay */}
            <div className="absolute bottom-0 inset-x-0 flex items-center justify-between bg-gradient-to-t from-foreground/60 to-transparent p-4 pt-12">
              <p className="text-sm font-medium text-background">{slides[active].label}</p>
              <Button
                onClick={onBookingClick}
                size="sm"
                className="rounded-lg text-xs"
              >
                Schedule Yours
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-secondary"
              aria-label="Previous slide"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-secondary"
              aria-label="Next slide"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
