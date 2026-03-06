"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"
import { BookingModal } from "./BookingModal"

export function MobileStickyCTA() {
    const [isVisible, setIsVisible] = useState(false)
    const [isBookingOpen, setIsBookingOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 300px
            setIsVisible(window.scrollY > 300)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    if (!isVisible) return null

    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-2 border-t border-white/20 bg-white/80 p-4 pb-6 backdrop-blur-lg md:hidden">
                <a
                    href="tel:+1234567890"
                    className="flex size-12 items-center justify-center rounded-full bg-[#1B2B4B]/10 text-[#1B2B4B] transition-transform active:scale-95"
                    aria-label="Call Now"
                >
                    <Phone className="size-5" />
                </a>
                <Button
                    onClick={() => setIsBookingOpen(true)}
                    className="h-12 flex-1 rounded-full bg-[#1B2B4B] text-sm font-bold tracking-wide text-white shadow-lg active:scale-[0.98]"
                >
                    <Calendar className="mr-2 size-4" />
                    Book Appointment
                </Button>
            </div>

            <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
        </>
    )
}
