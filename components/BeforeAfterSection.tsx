"use client"

import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider"

interface BeforeAfterSectionProps {
  onBookingClick: () => void
}

const patients = [
  {
    patientName: "Sarah",
    shadeImprovement: "8 Shades Whiter",
    beforeImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80",
  },
  {
    patientName: "Mark",
    shadeImprovement: "6 Shades Whiter",
    beforeImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80",
  },
  {
    patientName: "Amanda",
    shadeImprovement: "7 Shades Whiter",
    beforeImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80",
  },
]

export function BeforeAfterSection({ onBookingClick }: BeforeAfterSectionProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="results" className="w-full bg-muted py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="section-label">
            Real Results
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            See the Transformation
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground font-sans">
            Real patients, real results. See why hundreds trust us with their smile.
          </p>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {patients.map((patient) => (
              <BeforeAfterSlider
                key={patient.patientName}
                patientName={patient.patientName}
                shadeImprovement={patient.shadeImprovement}
                beforeImage={patient.beforeImage}
                afterImage={patient.afterImage}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" onClick={onBookingClick}>
              Schedule Your Transformation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
