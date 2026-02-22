"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { BeforeAfterSection } from "@/components/BeforeAfterSection"
import { TestimonialSection } from "@/components/TestimonialSection"
import { PricingSection } from "@/components/PricingSection"
import { FAQSection } from "@/components/FAQSection"
import { CTASection } from "@/components/CTASection"
import { Footer } from "@/components/Footer"
import { BookingModal } from "@/components/BookingModal"

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const openBooking = () => setModalOpen(true)

  return (
    <div className="flex min-h-screen flex-col">
      <Header onBookingClick={openBooking} />
      <main>
        <HeroSection onBookingClick={openBooking} />
        <FeaturesSection onBookingClick={openBooking} />
        <BeforeAfterSection onBookingClick={openBooking} />
        <TestimonialSection onBookingClick={openBooking} />
        <PricingSection onBookingClick={openBooking} />
        <FAQSection />
        <CTASection onBookingClick={openBooking} />
      </main>
      <Footer />
      <BookingModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  )
}
