"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const faqs = [
  {
    question: "Is teeth whitening safe?",
    answer:
      "Absolutely. Our professional whitening treatments use enamel-safe formulations that have been clinically tested and approved. Unlike over-the-counter products, our protocols are supervised by licensed dental professionals who monitor the entire process. 98% of our patients report zero sensitivity after treatment.",
  },
  {
    question: "How long do results last?",
    answer:
      "Results typically last 6 to 12 months depending on your diet and oral hygiene habits. Patients who follow our aftercare plan and avoid heavy staining foods like coffee and red wine tend to enjoy longer-lasting results. Our Signature and Elite packages include touch-up sessions to keep your smile bright.",
  },
  {
    question: "What if I have sensitive teeth?",
    answer:
      "We have specialized protocols for patients with sensitive teeth. During your consultation, we assess your sensitivity level and customize the treatment accordingly. We use desensitizing agents before and after the procedure, and our gentle formulations are specifically designed to minimize any discomfort.",
  },
  {
    question: "Can I whiten veneers or crowns?",
    answer:
      "Whitening treatments work on natural tooth enamel and will not change the color of veneers, crowns, or other dental restorations. During your consultation, we will assess your dental work and create a plan that ensures a uniform, natural-looking result across all your teeth.",
  },
]

export function FAQSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="faq" className="w-full bg-background py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Everything you need to know about our whitening treatments.
          </p>
        </div>

        <div
          ref={ref}
          className={`mx-auto max-w-2xl transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
