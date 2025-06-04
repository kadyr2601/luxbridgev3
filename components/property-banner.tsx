"use client"
import React, { useState } from "react"
import Image from "next/image"
import { Download, Layout, Play, Maximize2, ChevronLeft, ChevronRight } from "lucide-react"

interface Property {
    id: number
    slug: string
    title: string
    location: string
    price: number
    bedrooms: number
    bathrooms: number
    area: number
    images: string[]
    description: string
    features: string[]
    amenities: string[]
}

interface PropertyBannerProps {
    property: Property
}

export function PropertyBanner({ property }: PropertyBannerProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
    }

    const handleDownloadBrochure = () => {
        console.log("Download brochure for:", property.title)
        // Implement brochure download
    }

    const handleViewFloorPlans = () => {
        console.log("View floor plans for:", property.title)
        // Implement floor plans modal
    }

    const handlePlayVideo = () => {
        console.log("Play video for:", property.title)
        // Implement video modal
    }

    const handleFullScreen = () => {
        console.log("Full screen gallery for:", property.title)
        // Implement fullscreen gallery
    }

    return (
        <div className="relative h-[80vh] w-full overflow-hidden mt-[-96px]">
            {/* Main Image */}
            <div className="absolute inset-0">
                <Image
                    src={property.images[currentImageIndex]}
                    alt={property.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/15 to-black/5"></div>
            </div>

            {/* Action Buttons - Bottom Row */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center z-10">
                {/* Left Side - Download Brochure */}
                <button
                    onClick={handleDownloadBrochure}
                    className="flex items-center gap-3 border border-white bg-black/60 hover:bg-black/80 text-white/80 px-3 py-3 transition-colors group"
                >
                    <Download className="h-5 w-5" />
                    <span className="font-medium">Download Brochure</span>
                </button>

                {/* Right Side - Three Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={handleViewFloorPlans}
                        className="flex items-center gap-3 border border-white  bg-black/60 hover:bg-black/80 text-white/80 px-3 py-3 transition-colors group"
                    >
                        <Layout className="h-5 w-5" />
                        <span className="font-medium">View Floor Plans</span>
                    </button>

                    <button
                        onClick={handlePlayVideo}
                        className="flex items-center gap-3 border border-white  bg-black/60 hover:bg-black/80 text-white/80 px-3 py-3 transition-colors group"
                    >
                        <Play className="h-5 w-5" />
                        <span className="font-medium">Play Video</span>
                    </button>

                    <button
                        onClick={handleFullScreen}
                        className="flex items-center gap-3 border border-white  bg-black/60 hover:bg-black/80 text-white/80 px-3 py-3 transition-colors group"
                    >
                        <Maximize2 className="h-5 w-5" />
                        <span className="font-medium">Full Screen</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
