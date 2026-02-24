"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Clock, DollarSign, ChevronRight, ArrowLeft, Sun, Cloud, Sunset } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { format, addDays, isSameDay, isWeekend } from "date-fns"

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type Step = "package" | "date" | "time" | "details" | "waitlist"

const waitlistSchema = z.object({
  name: z.string().min(2, "Full Name must be at least 2 characters"),
  phone: z.string()
    .min(1, "Phone Number is required")
    .regex(/^\d{1,10}$/, "Please enter up to 10 digits only"),
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

const bookingSchema = z.object({
  name: z.string().min(2, "Full Name must be at least 2 characters"),
  phone: z.string()
    .min(1, "Phone Number is required")
    .regex(/^\d{1,10}$/, "Please enter up to 10 digits only"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  message: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

const PACKAGES = [
  {
    id: "express",
    name: "Essential Whitening",
    price: 249,
    duration: "45 mins",
    durationMin: 45,
    description: "Rapid brightening for those with a busy schedule. Perfect for a quick refresh.",
  },
  {
    id: "signature",
    name: "Signature Treatment",
    price: 499,
    duration: "90 mins",
    durationMin: 90,
    description: "Our most popular comprehensive whitening experience for lasting results.",
    popular: true,
  },
  {
    id: "elite",
    name: "Elite Spa Package",
    price: 799,
    duration: "120 mins",
    durationMin: 120,
    description: "Luxury whitening combined with deep enamel conditioning and premium care.",
  },
]

// Mock unavailable dates for demo
const UNAVAILABLE_DATES = [
  addDays(new Date(), 2),
  addDays(new Date(), 5),
  addDays(new Date(), 8),
  addDays(new Date(), 12),
]

export function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [step, setStep] = useState<Step>("package")
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedWindow, setSelectedWindow] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false)
  const [waitlistEntries, setWaitlistEntries] = useState<any[]>([])

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors, isValid, touchedFields },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  })

  const {
    register: registerWaitlist,
    handleSubmit: handleWaitlistSubmit,
    formState: { errors: waitlistErrors, isValid: isWaitlistValid, touchedFields: touchedWaitlistFields },
    reset: resetWaitlist,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      phone: "",
    },
  })

  const generateTimeSlots = (duration: number) => {
    const slots = []
    let current = new Date()
    current.setHours(9, 0, 0, 0)
    const end = new Date()
    end.setHours(17, 0, 0, 0)

    while (current <= end) {
      slots.push(format(current, "h:mm a"))
      current = new Date(current.getTime() + 30 * 60 * 1000)
    }
    return slots
  }

  const TIME_WINDOWS = [
    { id: "morning", label: "Morning", range: "9:00 AM – 12:00 PM", icon: Sun, start: 9, end: 12 },
    { id: "afternoon", label: "Afternoon", range: "12:00 PM – 3:00 PM", icon: Cloud, start: 12, end: 15 },
    { id: "evening", label: "Evening", range: "3:00 PM – 6:00 PM", icon: Sunset, start: 15, end: 18 },
  ]

  const selectedPackageData = PACKAGES.find((p) => p.id === selectedPackage)
  const timeSlots = generateTimeSlots(selectedPackageData?.durationMin || 60)

  const onWaitlistSubmit = (data: WaitlistFormData) => {
    const entry = {
      ...data,
      date: selectedDate ? format(selectedDate, "yyyy-MM-dd") : null,
      packageSelected: selectedPackageData?.name,
      timestamp: new Date().toISOString(),
    }
    console.log("Waitlist Entry:", entry)
    setWaitlistEntries((prev) => [...prev, entry])
    setWaitlistSubmitted(true)
    setTimeout(() => {
      setWaitlistSubmitted(false)
      onOpenChange(false)
      setStep("package")
      setSelectedPackage(null)
      setSelectedDate(undefined)
      setSelectedWindow(null)
      setSelectedTime(null)
      resetWaitlist()
    }, 3000)
  }

  const onSubmit = (data: BookingFormData) => {
    // Pass everything through as requested
    console.log("Booking Confirmed:", {
      ...data,
      package: selectedPackageData?.name,
      date: selectedDate,
      time: selectedTime,
    })
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onOpenChange(false)
      setStep("package")
      setSelectedPackage(null)
      setSelectedDate(undefined)
      setSelectedWindow(null)
      setSelectedTime(null)
      reset()
    }, 2500)
  }

  const handleClose = (val: boolean) => {
    if (!val) {
      setSubmitted(false)
      setStep("package")
      setSelectedPackage(null)
      setSelectedDate(undefined)
      setSelectedWindow(null)
      setSelectedTime(null)
      reset()
    }
    onOpenChange(val)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose} >
      <DialogContent className="max-w-2xl outline-none p-0 overflow-hidden border-none shadow-2xl">
        {submitted || waitlistSubmitted ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-[#C9A96E]/10">
              <CheckCircle className="size-10 text-[#C9A96E]" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-semibold text-[#1B2B4B]">
                {waitlistSubmitted ? "Waitlist Confirmed!" : "Thank You!"}
              </h3>
              <p className="mt-2 text-base text-muted-foreground px-8">
                {waitlistSubmitted
                  ? "You've been added to the waitlist! We typically have cancellations within 48 hours, so we'll notify you if a slot opens up."
                  : "We've received your request. Our team will contact you shortly to confirm your whitening treatment."}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="p-8 pb-4">
              <DialogHeader>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A96E] mb-2">
                  <span>
                    {step === "waitlist"
                      ? "Waitlist Registration"
                      : `Step ${step === "package" ? "1" : step === "date" ? "2" : step === "time" ? "3" : "4"} of 4`}
                  </span>
                  <div className="h-px flex-1 bg-[#C9A96E]/20" />
                </div>
                <DialogTitle className="font-serif text-4xl text-[#1B2B4B] tracking-tight">
                  {step === "package" ? "Select Your Package" : step === "date" ? "Choose Date" : step === "time" ? "Choose Time" : step === "waitlist" ? "Join Waiting List" : "Appointment Details"}
                </DialogTitle>
                <DialogDescription className="font-sans text-base mt-2">
                  {step === "package"
                    ? "Choose the whitening treatment that best suits your goals."
                    : step === "date"
                      ? "Select your preferred date for your visit."
                      : step === "time"
                        ? "Select an available time slot for your appointment."
                        : step === "waitlist"
                          ? "Enter your details to be notified if a slot opens up on your selected date."
                          : "Please provide your contact information to finalize the booking."}
                </DialogDescription>
              </DialogHeader>
            </div>

            <div className="p-8 pt-0">
              {step === "package" ? (
                <div className="flex flex-col gap-6">
                  <div className="grid gap-4">
                    {PACKAGES.map((pkg) => (
                      <button
                        key={pkg.id}
                        onClick={() => setSelectedPackage(pkg.id)}
                        className={cn(
                          "group relative flex flex-col items-start gap-2 rounded-2xl border-2 p-5 text-left transition-all duration-300",
                          selectedPackage === pkg.id
                            ? "border-[#C9A96E] bg-[#C9A96E]/5 shadow-md"
                            : "border-border hover:border-[#C9A96E]/30 hover:bg-muted/30"
                        )}
                      >
                        {pkg.popular && (
                          <span className="absolute -top-3 right-6 rounded-full bg-[#1B2B4B] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#C9A96E]">
                            Most Popular
                          </span>
                        )}
                        <div className="flex w-full items-center justify-between">
                          <h4 className="font-serif text-xl font-semibold tracking-tight text-[#1B2B4B]">
                            {pkg.name}
                          </h4>
                          <div className="flex items-center font-sans font-bold text-[#C9A96E]">
                            <DollarSign className="size-5" />
                            <span className="text-2xl">{pkg.price}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 pr-12 leading-relaxed">
                          {pkg.description}
                        </p>
                        <div className="flex items-center gap-6 pt-2">
                          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                            <Clock className="size-4 text-[#C9A96E]" />
                            {pkg.duration}
                          </div>
                          {selectedPackage === pkg.id && (
                            <div className="flex items-center gap-2 text-xs font-bold text-[#C9A96E]">
                              <CheckCircle className="size-4" />
                              Selected Treatment
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button
                      onClick={() => setStep("date")}
                      disabled={!selectedPackage}
                      className="h-12 px-8 rounded-full bg-[#1B2B4B] hover:bg-[#1B2B4B]/90 text-white font-bold tracking-wide shadow-lg transition-all hover:-translate-y-0.5"
                    >
                      Continue to Date
                      <ChevronRight className="ml-2 size-5" />
                    </Button>
                  </div>
                </div>
              ) : step === "date" ? (
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col items-center justify-center bg-muted/20 p-8 rounded-3xl border border-border/50">
                    <div className="flex flex-col gap-4 w-full max-w-sm">
                      <Label className="text-[#1B2B4B] font-serif text-xl font-semibold px-1 text-center mb-2">Select Date</Label>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => {
                          setSelectedDate(date)
                          setSelectedTime(null)
                        }}
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                          isWeekend(date)
                        }
                        modifiers={{
                          booked: UNAVAILABLE_DATES
                        }}
                        modifiersClassNames={{
                          booked: "text-muted-foreground opacity-60 bg-muted/20 relative"
                        }}
                        className="rounded-2xl border-none bg-white shadow-xl p-6 mx-auto"
                        classNames={{
                          selected: "!bg-[#C9A96E] !text-[#1B2B4B] !font-bold rounded-lg",
                          day: "hover:!bg-[#C9A96E] hover:!text-[#1B2B4B] transition-all rounded-lg relative",
                          today: "!bg-transparent !text-[#C9A96E] !font-bold !border !border-[#C9A96E]/20",
                          day_outside: "opacity-0 pointer-events-none", // Hide days outside current month
                        }}
                        components={{
                          DayContent: ({ date, ...props }) => {
                            const isBooked = UNAVAILABLE_DATES.some((ud) => isSameDay(date, ud))
                            return (
                              <div className="flex flex-col items-center justify-center pt-1">
                                <span>{date.getDate()}</span>
                                {isBooked && (
                                  <span className="text-[8px] font-bold uppercase tracking-tighter text-muted-foreground -mt-1">
                                    Full
                                  </span>
                                )}
                              </div>
                            )
                          }
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col-reverse gap-4 pt-2 sm:flex-row sm:justify-between px-2">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setStep("package")}
                      className="flex items-center gap-2 text-[#1B2B4B] font-bold hover:bg-muted"
                    >
                      <ArrowLeft className="size-5" />
                      Back to Packages
                    </Button>
                    {selectedDate && UNAVAILABLE_DATES.some((ud) => isSameDay(selectedDate, ud)) ? (
                      <Button
                        onClick={() => setStep("waitlist")}
                        className="h-12 px-8 rounded-full bg-[#C9A96E] hover:bg-[#C9A96E]/90 text-[#1B2B4B] font-bold tracking-wide shadow-lg transition-all hover:-translate-y-0.5"
                      >
                        Join Waitlist
                        <ChevronRight className="ml-2 size-5" />
                      </Button>
                    ) : (
                      <Button
                        onClick={() => setStep("time")}
                        disabled={!selectedDate}
                        className="h-12 px-8 rounded-full bg-[#1B2B4B] hover:bg-[#1B2B4B]/90 text-white font-bold tracking-wide shadow-lg disabled:opacity-30 transition-all hover:-translate-y-0.5"
                      >
                        Continue to Time
                        <ChevronRight className="ml-2 size-5" />
                      </Button>
                    )}
                  </div>
                </div>
              ) : step === "time" ? (
                <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="flex flex-col items-center justify-center bg-muted/20 p-6 rounded-3xl border border-border/50">
                    <div className="flex flex-col gap-6 w-full">
                      <div className="text-center">
                        <Label className="text-[#1B2B4B] font-serif text-xl font-semibold mb-1 block">Preferred Window</Label>
                        <p className="text-sm text-muted-foreground">
                          {selectedDate && format(selectedDate, "MMMM d, yyyy")}
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {TIME_WINDOWS.map((window) => (
                          <button
                            key={window.id}
                            type="button"
                            onClick={() => {
                              setSelectedWindow(window.id)
                              setSelectedTime(null)
                            }}
                            className={cn(
                              "flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-300",
                              selectedWindow === window.id
                                ? "border-[#C9A96E] bg-[#C9A96E]/10"
                                : "border-border bg-white hover:border-[#C9A96E]/30"
                            )}
                          >
                            <window.icon className={cn("size-6", selectedWindow === window.id ? "text-[#C9A96E]" : "text-muted-foreground")} />
                            <span className={cn("text-sm font-bold", selectedWindow === window.id ? "text-[#1B2B4B]" : "text-[#1B2B4B]/70")}>{window.label}</span>
                            <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter text-center leading-none italic">{window.range}</span>
                          </button>
                        ))}
                      </div>

                      {selectedWindow && (
                        <div className="flex flex-col animate-in zoom-in-95 fade-in duration-300">
                          <div className="h-px w-full bg-[#1B2B4B]/5 mb-6" />
                          <div className="text-center mb-4">
                            <Label className="text-[#1B2B4B] font-semibold text-sm">Select Precise Time</Label>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {timeSlots
                              .filter(slot => {
                                const [h, mAndA] = slot.split(":")
                                const [m, a] = mAndA.split(" ")
                                let hour = parseInt(h)
                                if (a === "PM" && hour !== 12) hour += 12
                                if (a === "AM" && hour === 12) hour = 0
                                const window = TIME_WINDOWS.find(w => w.id === selectedWindow)
                                return window && hour >= window.start && hour < window.end
                              })
                              .slice(0, 6)
                              .map((time) => (
                                <button
                                  key={time}
                                  type="button"
                                  onClick={() => setSelectedTime(time)}
                                  className={cn(
                                    "px-2 py-3 text-xs font-bold rounded-xl border-2 transition-all duration-200",
                                    selectedTime === time
                                      ? "border-[#C9A96E] bg-[#C9A96E] text-[#1B2B4B] shadow-md scale-[1.02]"
                                      : "border-[#1B2B4B]/20 bg-white text-[#1B2B4B] hover:border-[#1B2B4B]"
                                  )}
                                >
                                  {time}
                                </button>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col-reverse gap-4 pt-2 sm:flex-row sm:justify-between px-2">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setStep("date")}
                      className="flex items-center gap-2 text-[#1B2B4B] font-bold hover:bg-muted"
                    >
                      <ArrowLeft className="size-5" />
                      Back to Date
                    </Button>
                    <Button
                      onClick={() => setStep("details")}
                      disabled={!selectedTime || !selectedWindow}
                      className="h-12 px-8 rounded-full bg-[#1B2B4B] hover:bg-[#1B2B4B]/90 text-white font-bold tracking-wide shadow-lg disabled:opacity-30 transition-all hover:-translate-y-0.5"
                    >
                      Continue to Details
                      <ChevronRight className="ml-2 size-5" />
                    </Button>
                  </div>
                </div>
              ) : step === "waitlist" ? (
                <form onSubmit={handleWaitlistSubmit(onWaitlistSubmit)} className="flex flex-col gap-6">
                  <div className="mb-2 rounded-lg bg-[#C9A96E]/5 p-4 text-sm flex flex-col gap-2 border border-[#C9A96E]/20">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-bold text-[#1B2B4B] uppercase text-[10px] tracking-wider mb-1">Waitlist for:</span>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="size-4 text-[#C9A96E]" />
                          <span className="font-semibold text-foreground">{selectedDate && format(selectedDate, "PPP")}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep("date")}
                        className="text-[#C9A96E] hover:underline font-bold text-xs"
                      >
                        Change Date
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="waitlist-name" className={cn(waitlistErrors.name && "text-red-500")}>Full Name</Label>
                      <Input
                        id="waitlist-name"
                        placeholder="Sarah Jenkins"
                        {...registerWaitlist("name")}
                        className={cn(
                          "transition-all duration-300",
                          waitlistErrors.name
                            ? "border-red-500 focus-visible:ring-red-500"
                            : touchedWaitlistFields.name && !waitlistErrors.name
                              ? "border-[#C9A96E] focus-visible:ring-[#C9A96E]"
                              : "border-border"
                        )}
                      />
                      {waitlistErrors.name && (
                        <p className="text-[10px] text-red-500 mt-0.5 ml-1 animate-in fade-in slide-in-from-top-1 duration-200">
                          {waitlistErrors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="waitlist-phone" className={cn(waitlistErrors.phone && "text-red-500")}>Phone</Label>
                      <Input
                        id="waitlist-phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        {...registerWaitlist("phone")}
                        className={cn(
                          "transition-all duration-300",
                          waitlistErrors.phone
                            ? "border-red-500 focus-visible:ring-red-500"
                            : touchedWaitlistFields.phone && !waitlistErrors.phone
                              ? "border-[#C9A96E] focus-visible:ring-[#C9A96E]"
                              : "border-border"
                        )}
                      />
                      {waitlistErrors.phone && (
                        <p className="text-[10px] text-red-500 mt-0.5 ml-1 animate-in fade-in slide-in-from-top-1 duration-200">
                          {waitlistErrors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col-reverse gap-4 pt-4 sm:flex-row sm:justify-between px-2">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setStep("date")}
                      className="flex items-center gap-2 text-[#1B2B4B] font-bold hover:bg-muted"
                    >
                      <ArrowLeft className="size-5" />
                      Back to Calendar
                    </Button>
                    <Button
                      type="submit"
                      disabled={!isWaitlistValid}
                      className="h-12 px-8 rounded-full bg-[#1B2B4B] hover:bg-[#1B2B4B]/90 text-white font-bold tracking-wide shadow-lg disabled:opacity-30 transition-all hover:-translate-y-0.5"
                    >
                      Complete Waitlist
                      <ChevronRight className="ml-2 size-5" />
                    </Button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleFormSubmit(onSubmit)} className="flex flex-col gap-4">
                  <div className="mb-2 rounded-lg bg-muted/30 p-3 text-sm flex flex-col gap-1 border border-border/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-semibold text-foreground">Package:</span>{" "}
                        <span className="text-muted-foreground">
                          {selectedPackageData?.name}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep("package")}
                        className="text-[#C9A96E] hover:underline font-medium text-xs"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-semibold text-foreground">Time:</span>{" "}
                        <span className="text-muted-foreground">
                          {selectedDate && format(selectedDate, "PPP")} at {selectedTime}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep("time")}
                        className="text-[#C9A96E] hover:underline font-medium text-xs"
                      >
                        Edit
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="booking-name" className={cn(errors.name && "text-red-500")}>Full Name</Label>
                      <Input
                        id="booking-name"
                        placeholder="Sarah Jenkins"
                        {...register("name")}
                        className={cn(
                          "transition-all duration-300",
                          errors.name
                            ? "border-red-500 focus-visible:ring-red-500"
                            : touchedFields.name && !errors.name
                              ? "border-[#C9A96E] focus-visible:ring-[#C9A96E]"
                              : "border-border"
                        )}
                      />
                      {errors.name && (
                        <p className="text-[10px] text-red-500 mt-0.5 ml-1 animate-in fade-in slide-in-from-top-1 duration-200">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="booking-phone" className={cn(errors.phone && "text-red-500")}>Phone</Label>
                      <Input
                        id="booking-phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        {...register("phone")}
                        className={cn(
                          "transition-all duration-300",
                          errors.phone
                            ? "border-red-500 focus-visible:ring-red-500"
                            : touchedFields.phone && !errors.phone
                              ? "border-[#C9A96E] focus-visible:ring-[#C9A96E]"
                              : "border-border"
                        )}
                      />
                      {errors.phone && (
                        <p className="text-[10px] text-red-500 mt-0.5 ml-1 animate-in fade-in slide-in-from-top-1 duration-200">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="booking-email" className={cn(errors.email && "text-red-500")}>Email</Label>
                    <Input
                      id="booking-email"
                      type="email"
                      placeholder="sarah@example.com"
                      {...register("email")}
                      className={cn(
                        "transition-all duration-300",
                        errors.email
                          ? "border-red-500 focus-visible:ring-red-500"
                          : touchedFields.email && !errors.email
                            ? "border-[#C9A96E] focus-visible:ring-[#C9A96E]"
                            : "border-border"
                      )}
                    />
                    {errors.email && (
                      <p className="text-[10px] text-red-500 mt-0.5 ml-1 animate-in fade-in slide-in-from-top-1 duration-200">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="booking-message">
                      Special Requests <span className="text-muted-foreground">(optional)</span>
                    </Label>
                    <Textarea
                      id="booking-message"
                      placeholder="Tell us about your whitening goals or any concerns..."
                      rows={3}
                      {...register("message")}
                      className={cn(
                        "transition-all duration-300",
                        touchedFields.message && !errors.message && "border-[#C9A96E] focus-visible:ring-[#C9A96E]"
                      )}
                    />
                  </div>

                  <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-between">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setStep("time")}
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="size-4" />
                      Back
                    </Button>
                    <div className="flex gap-3">
                      <Button
                        type="button"
                        onClick={() => handleClose(false)}
                        className="h-12 px-8 rounded-full bg-[#1B2B4B] hover:bg-[#1B2B4B]/90 text-white font-bold tracking-wide shadow-lg transition-all hover:-translate-y-0.5"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={!isValid}
                        className="h-12 px-8 rounded-full bg-[#1B2B4B] hover:bg-[#1B2B4B]/90 text-white font-bold tracking-wide shadow-lg disabled:opacity-30 transition-all hover:-translate-y-0.5"
                      >
                        Complete Booking
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog >
  )
}
