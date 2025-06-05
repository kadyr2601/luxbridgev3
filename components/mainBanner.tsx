"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {SearchFilter} from "@/components/search-filter";
import Link from "next/link";

// Define our slides
const slides = [
    {
        id: 1,
        imageUrl: "/dubai.webp",
        title: "Villa in Hattan The Lakes",
        slug: "property-1",
        description:
            "Our team thrive in a collaborative environment in which skill sets, accountability, and open dialogue come together to serve the greater good of the client.",
    },
    {
        id: 2,
        imageUrl: "/abudabi.avif",
        title: "Downtown Sky-High Penthouse",
        slug: "property-3",
        description: "Experience unparalleled luxury with breathtaking city views from this exclusive penthouse.",
    },
]

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)

    React.useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    // Navigation functions
    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    const handleMouseEnter = () => {
        setIsAutoPlaying(false)
    }

    const handleMouseLeave = () => {
        setIsAutoPlaying(true)
    }

    return (
        <div
            className="relative w-full h-[90vh] overflow-hidden mt-[-96px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={slide.id} className="relative w-full h-full flex-shrink-0">
                        {/* Image Background */}
                        <div className="absolute inset-0">
                            <Image
                                src={slide.imageUrl || "/placeholder.svg"}
                                alt={slide.title}
                                fill
                                style={{ objectFit: "cover" }}
                                className="brightness-90"
                                priority={index === 0}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Dark overlay for better text readability - moved here */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/40 z-10"></div>

            {/* Content Overlay - increased z-index */}
            <div className="absolute bottom-40 flex flex-col justify-center items-start pl-8 md:pl-24 z-20">
                <h1 className="text-4xl font-serif font-medium text-white mb-4 max-w-2xl">{slides[currentSlide]?.title}</h1>
                <p className="text-base md:text-lg text-white mb-8 max-w-2xl">{slides[currentSlide]?.description}</p>
                <Link href={`/properties/${slides[currentSlide].slug}`}
                    style={{fontSize: '0.9em'}}
                    className="bg-white text-black hover:bg-gray-100 px-8 uppercase py-2 cursor-pointer transition-colors duration-200 z-30 relative"
                >
                    Learn More
                </Link>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-white/30 hover:bg-white/50 border-none text-white rounded-full flex items-center justify-center transition-all duration-200 z-30"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-white/30 hover:bg-white/50 border-none text-white rounded-full flex items-center justify-center transition-all duration-200 z-30"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>
        </div>
    )
}
