"use client"

import { useState, useEffect } from "react"
import { Users } from "lucide-react"

export function AvailabilityCounter() {
    const [slots, setSlots] = useState(3)
    const [pulse, setPulse] = useState(false)

    useEffect(() => {
        // Randomly update slots to simulate "live" activity
        const interval = setInterval(() => {
            setSlots((prev) => {
                if (prev <= 1) return 3 // Reset to 3 if it hits 1
                return prev - 1
            })
            setPulse(true)
            setTimeout(() => setPulse(false), 2000)
        }, 15000) // Update every 15 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 border border-gold/20">
            <div className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 ${pulse ? 'scale-150' : ''}`}></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </div>
            <p className="text-xs font-semibold text-gold uppercase tracking-wider">
                Only <span className="font-bold underline">{slots}</span> appointment slots left this week
            </p>
        </div>
    )
}
