"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { ExpertsSection } from "@/components/ExpertsSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { BeforeAfterSection } from "@/components/BeforeAfterSection"
import { TestimonialSection } from "@/components/TestimonialSection"
import { PricingSection } from "@/components/PricingSection"
import { FAQSection } from "@/components/FAQSection"
import { CTASection } from "@/components/CTASection"
import { Footer } from "@/components/Footer"
import { BookingModal } from "@/components/BookingModal"
import { ExitIntentModal } from "@/components/ExitIntentModal"
import { LiquidSectionDivider } from "@/components/LiquidSectionDivider"

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const openBooking = () => setModalOpen(true)

  return (
    <div className="flex min-h-screen flex-col">
      <Header onBookingClick={openBooking} />
      <main>
        <HeroSection onBookingClick={openBooking} />
        <ExpertsSection />
        <FeaturesSection onBookingClick={openBooking} />
        <BeforeAfterSection onBookingClick={openBooking} />
        <TestimonialSection onBookingClick={openBooking} />

        {/* Morphing Transition: White to Navy */}
        <LiquidSectionDivider from="var(--background)" to="var(--secondary)" />
        <PricingSection onBookingClick={openBooking} />

        {/* Morphing Transition: Navy to White */}
        <LiquidSectionDivider from="var(--secondary)" to="var(--background)" />
        <FAQSection />

        {/* Morphing Transition: White to Navy */}
        <LiquidSectionDivider from="var(--background)" to="var(--navy)" />
        <CTASection onBookingClick={openBooking} />
      </main>
      <Footer />
      <BookingModal open={modalOpen} onOpenChange={setModalOpen} />
      <ExitIntentModal onBookingClick={openBooking} />
    </div>
  )
}
