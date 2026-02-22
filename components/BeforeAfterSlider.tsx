"use client"

import { useState, useRef, useEffect } from "react"

interface SliderProps {
  patientName: string
  shadeImprovement: string
  beforeImage: string
  afterImage: string
}

export function BeforeAfterSlider({
  patientName,
  shadeImprovement,
  beforeImage,
  afterImage,
}: SliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleTouchStart = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const newPosition = (x / rect.width) * 100

      setSliderPosition(Math.max(0, Math.min(100, newPosition)))
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.touches[0].clientX - rect.left
      const newPosition = (x / rect.width) * 100

      setSliderPosition(Math.max(0, Math.min(100, newPosition)))
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("touchmove", handleTouchMove, { passive: true })
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDragging])

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={containerRef}
        className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-200 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <img
          src={beforeImage}
          alt={`Before - ${patientName}`}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />

        <div
          className="absolute inset-0"
          style={{
            width: `${sliderPosition}%`,
            overflow: "hidden",
          }}
        >
          <img
            src={afterImage}
            alt={`After - ${patientName}`}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              width: `${100 / (sliderPosition / 100)}%`,
            }}
            draggable={false}
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transform -translate-x-1/2 transition-all"
          style={{
            left: `${sliderPosition}%`,
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-500">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-blue-500 rounded-full" />
                <div className="w-1 h-4 bg-blue-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <span className="absolute left-3 top-3 rounded-md bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          Before
        </span>

        <span className="absolute right-3 top-3 rounded-md bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          After
        </span>
      </div>

      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground">{patientName}</h3>
        <p className="text-sm text-muted-foreground">{shadeImprovement}</p>
      </div>
    </div>
  )
}
