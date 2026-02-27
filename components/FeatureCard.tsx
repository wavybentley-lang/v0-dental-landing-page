"use client"

import type { ReactNode } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`group premium-card p-6 lg:p-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-700 ease-out group-hover:scale-110 group-hover:bg-primary/20">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}
