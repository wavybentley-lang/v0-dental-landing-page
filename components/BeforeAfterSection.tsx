"use client"

import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider"

interface BeforeAfterSectionProps {
  onBookingClick: () => void
}

const patients = [
  {
    patientName: "Sarah M.",
    shadeImprovement: "8 Shades Whiter",
    beforeImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80",
    story: "Sarah wanted a bright smile for her wedding. In just 60 minutes, we achieved a transformation that exceeded her expectations. She felt confident and ready for her big day.",
    treatment: "Signature Whitening",
    duration: "60 Mins"
  },
  {
    patientName: "Mark T.",
    shadeImprovement: "6 Shades Whiter",
    beforeImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80",
    story: "As a coffee lover, Mark noticed significant staining over the years. Our enamel-safe treatment removed years of stains while maintaining natural look.",
    treatment: "Stain Removal Focus",
    duration: "45 Mins"
  },
  {
    patientName: "Amanda R.",
    shadeImprovement: "7 Shades Whiter",
    beforeImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80",
    story: "Amanda had sensitive teeth and was worried about pain. We used our specialized Gentle Care formula, and she experienced zero sensitivity during or after the session.",
    treatment: "Gentle Care Whitening",
    duration: "75 Mins"
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
          <h2 className="text-balance text-3xl font-medium text-foreground md:text-4xl text-foreground">
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
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {patients.map((patient) => (
              <div key={patient.patientName} className="flex flex-col">
                <BeforeAfterSlider
                  patientName={patient.patientName}
                  shadeImprovement={patient.shadeImprovement}
                  beforeImage={patient.beforeImage}
                  afterImage={patient.afterImage}
                />
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex gap-2">
                    <span className="rounded-full bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold border border-gold/20">
                      {patient.treatment}
                    </span>
                    <span className="rounded-full bg-navy/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/60 border border-navy/10">
                      {patient.duration}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground italic">
                    "{patient.story}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" onClick={onBookingClick} className="bg-navy hover:bg-navy/90 text-white font-bold uppercase">
              Schedule Your Transformation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
