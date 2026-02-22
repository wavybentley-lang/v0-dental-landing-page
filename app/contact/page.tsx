import type { Metadata } from "next"
import { ContactPageContent } from "@/components/ContactPageContent"

export const metadata: Metadata = {
  title: "Contact Us | Bright Smile Clinic",
  description:
    "Get in touch with Bright Smile Clinic for pricing inquiries, technical questions, or to schedule your teeth whitening consultation.",
}

export default function ContactPage() {
  return <ContactPageContent />
}
