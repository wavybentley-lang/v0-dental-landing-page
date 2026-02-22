"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Shield, Sparkles, Clock, Award, HeartPulse } from "lucide-react"

interface LearnMoreModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onBookingClick?: () => void
}

const reasons = [
  {
    icon: Sparkles,
    title: "Up to 8 Shades Whiter",
    description:
      "Our clinical-grade whitening formula delivers visible results in a single session, far beyond what over-the-counter products can offer.",
  },
  {
    icon: Shield,
    title: "100% Enamel-Safe",
    description:
      "Our dentist-supervised process uses pH-balanced gels that protect your enamel while delivering powerful whitening results.",
  },
  {
    icon: Clock,
    title: "Results in Under 60 Minutes",
    description:
      "Walk in on your lunch break and walk out with a brighter smile. Our streamlined process respects your busy schedule.",
  },
  {
    icon: HeartPulse,
    title: "Minimal Sensitivity",
    description:
      "Advanced desensitizing agents are built into every step of our process, so you can enjoy your new smile without discomfort.",
  },
  {
    icon: Award,
    title: "Backed by 5,000+ Happy Smiles",
    description:
      "Join thousands of satisfied clients who trust Bright Smile Clinic for their cosmetic dental needs, with a 4.9-star average rating.",
  },
]

export function LearnMoreModal({
  open,
  onOpenChange,
  onBookingClick,
}: LearnMoreModalProps) {
  const handleBook = () => {
    onOpenChange(false)
    onBookingClick?.()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Why Choose Professional Whitening?
          </DialogTitle>
          <DialogDescription>
            Here are five reasons our patients love the Bright Smile experience.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-5 py-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <reason.icon className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-4 sm:flex-row sm:justify-end">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button onClick={handleBook}>Book Your Appointment</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
