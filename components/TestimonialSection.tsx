"use client"

import { TestimonialCard } from "@/components/TestimonialCard"
import { Button } from "@/components/ui/button"
import { VideoTestimonial } from "@/components/VideoTestimonial"

const testimonials = [
  {
    name: "Sarah Jenkins",
    profession: "Marketing Director",
    image: "/images/avatar-sarah.jpg",
    quote:
      "I was skeptical about the results, but my teeth are 8 shades whiter! The process was comfortable and the team made me feel at ease throughout. My wedding photos turned out incredible.",
    rating: 5,
    date: "Feb 12, 2024",
  },
  {
    name: "Mark Thompson",
    profession: "Software Engineer",
    image: "/images/avatar-mark.jpg",
    quote:
      "The whole process was painless and quick. I walked in during my lunch break and walked out with a completely transformed smile. Highly recommend to anyone considering whitening.",
    rating: 5,
    date: "Jan 28, 2024",
  },
  {
    name: "Amanda Rodriguez",
    profession: "Interior Designer",
    image: "/images/avatar-amanda.jpg",
    quote:
      "Best investment in my confidence. The custom shade calibration was brilliant - my teeth look naturally white, not fake at all. The aftercare kit has kept my results lasting months.",
    rating: 4,
    date: "Mar 05, 2024",
  },
]

const videoStories = [
  {
    patientName: "James L.",
    thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  },
  {
    patientName: "Emma S.",
    thumbnail: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  }
]

interface TestimonialSectionProps {
  onBookingClick: () => void
}

export function TestimonialSection({ onBookingClick }: TestimonialSectionProps) {
  return (
    <section id="testimonials" className="w-full bg-background py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="section-label">
            Patient Stories
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Success Stories in Motion
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground font-sans">
            Hear directly from our patients about their smile transformation journey.
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="mb-20 grid gap-8 md:grid-cols-2">
          {videoStories.map((v) => (
            <VideoTestimonial key={v.patientName} {...v} />
          ))}
        </div>

        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h3 className="text-2xl font-bold text-foreground">What Our Customers Say</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} delay={i * 150} />
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:mt-16">
          <Button onClick={onBookingClick} size="lg" className="rounded-lg">
            Join Hundreds of Smiling Customers
          </Button>
        </div>
      </div>
    </section>
  )
}
