"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Clock, DollarSign, ChevronRight, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type Step = "package" | "details"

const PACKAGES = [
  {
    id: "express",
    name: "Express Whitening",
    price: 249,
    duration: "45 mins",
    description: "Rapid brightening for those with a busy schedule. Perfect for a quick refresh.",
  },
  {
    id: "signature",
    name: "Signature Treatment",
    price: 499,
    duration: "90 mins",
    description: "Our most popular comprehensive whitening experience for lasting results.",
    popular: true,
  },
  {
    id: "elite",
    name: "Elite Spa Package",
    price: 799,
    duration: "120 mins",
    description: "Luxury whitening combined with deep enamel conditioning and premium care.",
  },
]

export function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [step, setStep] = useState<Step>("package")
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onOpenChange(false)
      setStep("package")
      setSelectedPackage(null)
    }, 2500)
  }

  const handleClose = (val: boolean) => {
    if (!val) {
      setSubmitted(false)
      setStep("package")
      setSelectedPackage(null)
    }
    onOpenChange(val)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-xl outline-none">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="size-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Thank You!
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {"We'll contact you shortly to confirm your appointment for your selected package."}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <DialogHeader>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <span>Step {step === "package" ? "1" : "2"} of 2</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <DialogTitle className="font-serif text-3xl">
                {step === "package" ? "Select Your Package" : "Appointment Details"}
              </DialogTitle>
              <DialogDescription className="font-sans">
                {step === "package"
                  ? "Choose the whitening treatment that best suits your goals."
                  : "Please provide your contact information to finalize the booking."}
              </DialogDescription>
            </DialogHeader>

            {step === "package" ? (
              <div className="flex flex-col gap-4">
                <div className="grid gap-3">
                  {PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={cn(
                        "group relative flex flex-col items-start gap-2 rounded-xl border-2 p-4 text-left transition-all hover:bg-muted/50",
                        selectedPackage === pkg.id
                          ? "border-primary bg-primary/[0.02]"
                          : "border-border"
                      )}
                    >
                      {pkg.popular && (
                        <span className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-tighter text-primary-foreground">
                          Most Popular
                        </span>
                      )}
                      <div className="flex w-full items-center justify-between">
                        <h4 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                          {pkg.name}
                        </h4>
                        <div className="flex items-center font-sans font-bold text-primary">
                          <DollarSign className="size-4" />
                          <span className="text-xl">{pkg.price}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 pr-8">
                        {pkg.description}
                      </p>
                      <div className="flex items-center gap-4 pt-1">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="size-3" />
                          {pkg.duration}
                        </div>
                        {selectedPackage === pkg.id && (
                          <div className="flex items-center gap-1 text-xs font-semibold text-primary">
                            <CheckCircle className="size-3" />
                            Selected
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex justify-end pt-2">
                  <Button
                    onClick={() => setStep("details")}
                    disabled={!selectedPackage}
                    className="group"
                  >
                    Continue to Details
                    <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="mb-2 rounded-lg bg-muted/30 p-3 text-sm flex items-center justify-between border border-border/50">
                  <div>
                    <span className="font-semibold text-foreground">Selected:</span>{" "}
                    <span className="text-muted-foreground">
                      {PACKAGES.find(p => p.id === selectedPackage)?.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep("package")}
                    className="text-primary hover:underline font-medium text-xs"
                  >
                    Change
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="booking-name">Full Name</Label>
                    <Input
                      id="booking-name"
                      name="name"
                      placeholder="Sarah Jenkins"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="booking-phone">Phone</Label>
                    <Input
                      id="booking-phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="booking-email">Email</Label>
                  <Input
                    id="booking-email"
                    name="email"
                    type="email"
                    placeholder="sarah@example.com"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="booking-date">Preferred Date</Label>
                  <Input
                    id="booking-date"
                    name="date"
                    type="date"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="booking-message">
                    Special Requests <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Textarea
                    id="booking-message"
                    name="message"
                    placeholder="Tell us about your whitening goals or any concerns..."
                    rows={3}
                  />
                </div>

                <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-between">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setStep("package")}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="size-4" />
                    Back
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleClose(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Confirm Appointment</Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
