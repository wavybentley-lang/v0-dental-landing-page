"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FloatingInput } from "@/components/ui/floating-input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

const subjects = [
  "Pricing Inquiry",
  "Technical Question",
  "General Feedback",
  "Special Request",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-12 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="size-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          {"Thank you for reaching out. Our team will get back to you within 24 hours."}
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="mt-2"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 md:p-10 shadow-xl"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <FloatingInput
          id="contact-name"
          name="name"
          label="Full Name"
          required
        />
        <FloatingInput
          id="contact-email"
          name="email"
          type="email"
          label="Email Address"
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FloatingInput
          id="contact-phone"
          name="phone"
          type="tel"
          label="Phone Number"
        />
        <div className="flex flex-col gap-1.5">
          <Select name="subject" required>
            <SelectTrigger id="contact-subject" className="h-14 w-full rounded-md border-border bg-transparent px-4 transition-all focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E]/20">
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent>
              {subjects.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-message" className="mb-1 text-xs font-bold uppercase tracking-wider text-[#C9A96E]">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="How can we help you today?"
          className="min-h-[120px] rounded-xl border-border p-4 transition-all focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E]/20"
          required
        />
      </div>

      <Button type="submit" size="lg" className="w-full rounded-lg sm:w-auto sm:self-end">
        Send Message
      </Button>
    </form>
  )
}
