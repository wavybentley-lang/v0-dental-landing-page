"use client"

import { useState } from "react"
import Link from "next/link"
import { Sparkles, Phone, Mail, MapPin, Clock, ArrowLeft } from "lucide-react"
import { ContactForm } from "@/components/ContactForm"
import { CTASection } from "@/components/CTASection"
import { Footer } from "@/components/Footer"
import { BookingModal } from "@/components/BookingModal"

export function ContactPageContent() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Simple Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="size-6 text-primary" />
            <span className="text-lg font-bold text-foreground">
              Bright<span className="text-primary">Smile</span>
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8 lg:py-20">
          {/* Page Header */}
          <div className="mb-12 max-w-2xl">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Contact Us
            </span>
            <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl tracking-tight">
              {"We'd Love to Hear From You"}
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Have questions about our whitening services? Need help choosing the
              right package? Our team is here to help.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              {/* Info Cards */}
              <div className="glass-effect flex flex-col gap-6 rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Phone</h3>
                    <a
                      href="tel:+15550001234"
                      className="mt-1 text-sm text-muted-foreground hover:text-primary"
                    >
                      (555) 000-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:hello@brightsmile.com"
                      className="mt-1 text-sm text-muted-foreground hover:text-primary"
                    >
                      hello@brightsmile.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Address</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      123 Dental Ave, Suite 100
                      <br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Hours</h3>
                    <div className="mt-1 flex flex-col gap-1 text-sm text-muted-foreground">
                      <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
                      <span>Saturday: 9:00 AM - 4:00 PM</span>
                      <span>Sunday: Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="overflow-hidden rounded-xl border border-border bg-muted">
                <div className="flex aspect-[4/3] items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-2 size-8 text-muted-foreground/50" />
                    <p className="text-sm text-muted-foreground">
                      Map placeholder
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      123 Dental Ave, San Francisco
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CTASection onBookingClick={() => setModalOpen(true)} />
      <Footer />
      <BookingModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  )
}
