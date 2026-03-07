"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface LiquidSectionDividerProps {
    from?: string
    to?: string
    reverse?: boolean
}

export function LiquidSectionDivider({
    from = "var(--background)",
    to = "var(--secondary)",
    reverse = false
}: LiquidSectionDividerProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    // Liquid SVG paths for morphing
    const pathA = "M0,32 C240,128 480,0 720,32 C960,64 1200,-32 1440,32 L1440,128 L0,128 Z"
    const pathB = "M0,64 C240,-32 480,128 720,64 C960,0 1200,128 1440,64 L1440,128 L0,128 Z"
    const pathC = "M0,48 C240,64 480,32 720,48 C960,64 1200,32 1440,48 L1440,128 L0,128 Z"

    const d = useTransform(scrollYProgress, [0, 0.5, 1], [pathA, pathB, pathC])

    return (
        <div
            ref={ref}
            className={`relative w-full overflow-visible leading-[0] -my-[2px] z-10 ${reverse ? "rotate-180" : ""}`}
            style={{ backgroundColor: from }}
        >
            <svg
                viewBox="0 0 1440 128"
                preserveAspectRatio="none"
                className="h-24 w-full md:h-32 lg:h-48 block -mb-[2px] relative z-10"
                style={{ transform: "translateY(1px) scaleY(1.02)", transformOrigin: "top" }}
            >
                <motion.path
                    d={d}
                    fill={to}
                    style={{ transition: "fill 0.5s ease-out" }}
                />
            </svg>
        </div>
    )
}
