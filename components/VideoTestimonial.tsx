"use client"

import { Play } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface VideoTestimonialProps {
    thumbnail: string
    patientName: string
    videoUrl: string
}

export function VideoTestimonial({ thumbnail, patientName, videoUrl }: VideoTestimonialProps) {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <div className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-navy shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-gold/10">
            {!isPlaying ? (
                <div className="relative aspect-video cursor-pointer" onClick={() => setIsPlaying(true)}>
                    <Image
                        src={thumbnail}
                        alt={`Video testimonial from ${patientName}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy/40 transition-colors group-hover:bg-navy/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/90 text-navy shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <Play className="ml-1 size-8 fill-current" />
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                        <p className="text-sm font-bold text-white drop-shadow-md">
                            Hear from {patientName}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="aspect-video w-full">
                    <iframe
                        src={`${videoUrl}?autoplay=1`}
                        className="h-full w-full"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    )
}
