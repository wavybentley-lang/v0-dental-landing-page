"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ExitIntentModalProps {
    onBookingClick: () => void
}

export function ExitIntentModal({ onBookingClick }: ExitIntentModalProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [hasShown, setHasShown] = useState(false)

    useEffect(() => {
        // Check if we've already shown this in the current session
        const shown = sessionStorage.getItem("exitIntentShown")
        if (shown) {
            setHasShown(true)
            return
        }

        const handleMouseLeave = (e: MouseEvent) => {
            if (hasShown) return

            // Trigger if mouse leaves from the top (usually intent to close tab/navigate away)
            if (e.clientY <= 0) {
                setIsVisible(true)
                setHasShown(true)
                sessionStorage.setItem("exitIntentShown", "true")
            }
        }

        document.addEventListener("mouseleave", handleMouseLeave)
        return () => document.removeEventListener("mouseleave", handleMouseLeave)
    }, [hasShown])

    const handleClose = () => setIsVisible(false)

    const handleClaimOffer = () => {
        setIsVisible(false)
        onBookingClick()
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-8 shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-navy"
                        >
                            <X className="size-5" />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <div className="mb-6 rounded-full bg-gold/10 p-4">
                                <Gift className="size-10 text-gold" />
                            </div>

                            <h2 className="mb-2 text-2xl font-bold text-navy">Wait! Don't Miss Out</h2>
                            <p className="mb-8 text-muted-foreground">
                                Get an exclusive <span className="font-bold text-navy">$50 DISCOUNT</span> on our Signature Whitening Package if you book within the next 24 hours.
                            </p>

                            <div className="flex w-full flex-col gap-3">
                                <Button onClick={handleClaimOffer} size="lg" className="w-full">
                                    Claim My $50 Discount
                                </Button>
                                <button
                                    onClick={handleClose}
                                    className="text-xs font-medium text-muted-foreground underline underline-offset-4 hover:text-navy"
                                >
                                    No thanks, I'll pay full price
                                </button>
                            </div>
                        </div>

                        {/* Subtle decorative elements */}
                        <div className="absolute -bottom-12 -left-12 size-32 rounded-full bg-gold/5" />
                        <div className="absolute -right-12 -top-12 size-32 rounded-full bg-navy/5" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
