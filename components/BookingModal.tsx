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
import { CheckCircle } from "lucide-react"

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onOpenChange(false)
    }, 2500)
  }

  const handleClose = (val: boolean) => {
    if (!val) setSubmitted(false)
    onOpenChange(val)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
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
                {"We'll contact you shortly to confirm your appointment."}
              </p>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Schedule Your Free Consultation</DialogTitle>
              <DialogDescription>
                Fill out the form below and our team will get back to you within
                24 hours.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                <Label htmlFor="booking-phone">Phone</Label>
                <Input
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 000-0000"
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
                  Message <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Textarea
                  id="booking-message"
                  name="message"
                  placeholder="Tell us about your whitening goals..."
                  rows={3}
                />
              </div>

              <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => handleClose(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Confirm Appointment</Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
