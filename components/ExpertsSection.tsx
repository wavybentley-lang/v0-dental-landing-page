"use client"

import { CheckCircle, ShieldCheck, Star, Award, GraduationCap, Briefcase } from "lucide-react"

export const ExpertsSection = () => {
    const expert = {
        name: "Dr. Jane Smith",
        role: "Lead Clinician",
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
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2
                        className="text-navy text-center after:left-1/2 after:-translate-x-1/2"
                    >
                        Meet Our Experts
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div
                        className="premium-card p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center animate-fade-in-up [animation-delay:200ms]"
                    >
                        {/* Provider Profile Image Placeholder */}
                        <div className="w-64 h-80 bg-muted rounded-lg overflow-hidden flex-shrink-0 relative group">
                            <div className="absolute inset-0 bg-navy/5 group-hover:bg-navy/0 transition-colors duration-300" />
                            <div className="w-full h-full flex items-center justify-center text-navy/20">
                                <span className="text-sm font-medium uppercase tracking-widest text-center px-4">Professional Headshot</span>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="mb-6 text-center md:text-left">
                                <h3 className="text-3xl font-serif text-navy mb-1 uppercase tracking-tight">{expert.name}</h3>
                                <p className="text-gold font-medium tracking-wide uppercase text-sm">{expert.role}</p>
                            </div>

                            <p className="text-soft-charcoal mb-8 leading-relaxed text-lg">
                                {expert.bio}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {expert.credentials.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-navy">
                                        <item.icon className="w-5 h-5 text-gold flex-shrink-0" />
                                        <span className="font-medium">{item.text}</span>
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
                                className="flex flex-col items-center text-center group cursor-default transition-transform duration-300 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-teal-50 transition-colors duration-300">
                                    <badge.icon className="w-8 h-8 text-[#008080] group-hover:scale-110 transition-all duration-300" />
                                </div>
                                <span className="text-navy font-semibold text-sm uppercase tracking-wider">
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
