"use client"

import Image from "next/image"
import { CheckCircle, ShieldCheck, Star, Award, GraduationCap, Briefcase } from "lucide-react"

export const ExpertsSection = () => {
    const expert = {
        name: "Dr. Jane Smith",
        role: "Lead Clinician",
        image: "/images/expert-jane-smith.png",
        bio: "With over 15 years of experience in restorative and cosmetic dentistry, Dr. Smith is dedicated to providing personalized care and creating beautiful, healthy smiles for all her patients.",
        credentials: [
            { icon: CheckCircle, text: "Board Certified" },
            { icon: Briefcase, text: "15+ Years Experience" },
            { icon: GraduationCap, text: "Specialized in Advanced Whitening" },
        ],
    }

    const trustBadges = [
        { icon: Award, text: "Board Certified" },
        { icon: ShieldCheck, text: "HIPAA Compliant" },
        { icon: Star, text: "5-Star Rated" },
        { icon: Award, text: "Top Rated Clinic 2024" },
    ]

    return (
        <section className="py-24 bg-slate-50/50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
                    <h2
                        className="text-navy text-center after:left-1/2 after:-translate-x-1/2"
                    >
                        Meet Our Experts
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div
                        className="bg-white/40 backdrop-blur-lg border border-white/20 shadow-2xl shadow-navy/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both"
                    >
                        {/* Provider Profile Image */}
                        <div className="w-64 h-80 bg-navy/5 rounded-lg overflow-hidden flex-shrink-0 relative group border border-gold/10 shadow-xl">
                            <Image
                                src={expert.image}
                                alt={expert.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                sizes="(max-width: 768px) 100vw, 256px"
                            />
                            <div className="absolute inset-0 bg-navy/5 group-hover:bg-navy/0 transition-colors duration-700 ease-out" />
                        </div>

                        <div className="flex-1">
                            <div className="mb-6 text-center md:text-left">
                                <h3 className="text-3xl font-medium font-serif text-navy mb-1 tracking-tight">{expert.name}</h3>
                                <p className="text-gold font-semibold tracking-[0.25em] uppercase text-sm">{expert.role}</p>
                            </div>

                            <p className="text-muted-foreground mb-8 leading-relaxed text-lg font-sans">
                                {expert.bio}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {expert.credentials.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-navy">
                                        <item.icon className="w-5 h-5 text-gold flex-shrink-0" />
                                        <span className="font-medium font-sans">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Bar */}
                <div className="mt-24 border-t border-gold/10 pt-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-items-center">
                        {trustBadges.map((badge, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center text-center group cursor-default transition-all duration-700 ease-out hover:-translate-y-2 animate-in fade-in zoom-in-95 fill-mode-both"
                                style={{ animationDelay: `${600 + idx * 150}ms`, animationDuration: "1000ms" }}
                            >
                                <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors duration-700 ease-out">
                                    <badge.icon className="w-8 h-8 text-gold group-hover:scale-110 transition-all duration-700 ease-out" />
                                </div>
                                <span className="text-navy font-semibold text-sm uppercase tracking-[0.2em] font-sans">
                                    {badge.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
