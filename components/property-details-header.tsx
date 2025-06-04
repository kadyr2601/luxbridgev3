"use client"

import { Phone, Mail, Share2, Heart, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PropertyDetailsHeaderProps {
    title?: string
    price?: string
    phone?: string
    location?: string
    propertyType?: string
    bedrooms?: number
    refNo?: string
    reraNo?: string
    bua?: string
}

export default function PropertyDetailsHeader({
                                                  title = "Garden Homes At Palm Jumeirah",
                                                  price = "AED 730,000,000",
                                                  phone = "+971 4 240 6211",
                                                  location = "Al Barari, Dubai",
                                                  propertyType = "Villa",
                                                  bedrooms = 6,
                                                  refNo = "LP0709",
                                                  reraNo = "116424",
                                                  bua = "18,084 Sq Ft",
                                              }: PropertyDetailsHeaderProps) {
    const handleCall = () => {
        window.location.href = `tel:${phone}`
    }

    const handleEnquiry = () => {
        console.log("Make an enquiry clicked")
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: title,
                text: `Check out this property: ${title}`,
                url: window.location.href,
            })
        } else {
            navigator.clipboard.writeText(window.location.href)
        }
    }

    const handleEmailFriend = () => {
        const subject = encodeURIComponent(`Check out this property: ${title}`)
        const body = encodeURIComponent(
            `I found this amazing property: ${title}\nPrice: ${price}\nLocation: ${location}\n\nCheck it out: ${window.location.href}`,
        )
        window.location.href = `mailto:?subject=${subject}&body=${body}`
    }

    const handleWishlist = () => {
        console.log("Add to wishlist clicked")
    }

    return (
        <section className="bg-black relative overflow-hidden">
            {/* Diagonal line pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none">
                    <defs>
                        <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="10" height="10">
                            <path d="M0,0 L10,10" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#diagonalLines)" />
                </svg>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    {/* Left Section - Title, Price, and Action Buttons */}
                    <div className="flex-1">
                        <h1
                            className="text-3xl sm:text-4xl text-white mb-3 leading-tight"
                            style={{
                                fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                                fontWeight: "300",
                                letterSpacing: "0.02em",
                            }}
                        >
                            {title}
                        </h1>
                        <p className="text-xl text-white mb-6 font-light">{price}</p>

                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={handleCall}
                                className="bg-transparent flex flex-nowrap items-center border border-white text-white/70  hover:bg-white hover:text-gray-900 transition-colors duration-300 px-6 py-2"
                            >
                                <Phone className="h-4 w-4 mr-2" />
                                Call us {phone}
                            </button>
                            <button
                                onClick={handleEnquiry}
                                className="bg-transparent flex flex-nowrap items-center border border-white text-white/70  hover:bg-white hover:text-gray-900 transition-colors duration-300 px-6 py-2"
                            >
                                <Mail className="h-4 w-4 mr-2" />
                                Make an Enquiry
                            </button>
                        </div>
                    </div>

                    {/* Right Section - Property Details and Action Buttons */}
                    <div className="flex flex-col gap-8 lg:gap-12">
                        {/* Property Details Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-white text-sm">
                            <div>
                                <span className="text-white">Location:</span>
                                <span className="ml-2 text-white/70">{location}</span>
                            </div>
                            <div>
                                <span className="text-white">Ref No.:</span>
                                <span className="ml-2 text-white/70">{refNo}</span>
                            </div>
                            <div>
                                <span className="text-white">RERA No.:</span>
                                <span className="ml-2 text-white/70">{reraNo}</span>
                            </div>
                            <div>
                                <span className="text-white">Property Type:</span>
                                <span className="ml-2 text-white/70">{propertyType}</span>
                            </div>
                            <div>
                                <span className="text-white">Bedrooms:</span>
                                <span className="ml-2 text-white/70">{bedrooms}</span>
                            </div>
                            <div>
                                <span className="text-white">BUA:</span>
                                <span className="ml-2 text-white/70">{bua}</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap lg:flex-nowrap gap-3" style={{alignSelf: "flex-end"}}>
                            <button
                                onClick={handleShare}
                                className="bg-transparent flex flex-nowrap items-center border border-white text-white/70 hover:bg-white hover:text-gray-900 transition-colors duration-300 px-4 py-2 text-sm"
                            >
                                <Share2 className="h-4 w-4 mr-2" />
                                Share this
                            </button>
                            <button
                                onClick={handleEmailFriend}
                                className="bg-transparent flex flex-nowrap items-center border border-white text-white/70 hover:bg-white hover:text-gray-900 transition-colors duration-300 px-4 py-2 text-sm"
                            >
                                <UserPlus className="h-4 w-4 mr-2" />
                                Email to friend
                            </button>
                            <button
                                onClick={handleWishlist}
                                className="bg-transparent flex flex-nowrap items-center border border-white text-white/70 hover:bg-white hover:text-gray-900 transition-colors duration-300 px-4 py-2 text-sm"
                            >
                                <Heart className="h-4 w-4 mr-2" />
                                Add to wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
