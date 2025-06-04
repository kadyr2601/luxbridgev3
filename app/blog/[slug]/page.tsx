"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import PageBanner from "@/components/pageBanner";

interface PropertyShowcaseSectionProps {
    title?: string
    heroImage?: string
    author?: string
    date?: string
    content?: {
        paragraphs: string[]
        galleryImages: {
            src: string
            alt: string
        }[]
    }
    onBackToListing?: () => void
}

export default function PropertyShowcaseSection({
                                                    title = "Introducing Palme Couture, an exclusive new residential project",
                                                    heroImage = "/abudabi.avif",
                                                    author = "Jhon Joseph",
                                                    date = "Monday 27 February 2018",
                                                    content = {
                                                        paragraphs: [
                                                            "As purveyors of luxury properties in Dubai and around the world, we are in a position where we enjoy access to some of the very finest and most exclusive homes. A vibrant city like Dubai is no stranger to the concept of luxury, with some truly spectacular residential options on offer. However, every once in a while, a new off plan project is announced that can truly be described as peerless in terms of its offerings. Palme Couture, a recent development on Palm Jumeirah, is a prime example of just such a property.",
                                                            "Featuring a collection of only fourteen residences housed within a nine-storey tower, Palme Couture epitomizes exclusivity. The project was envisioned as a way of bringing the opulence of upscale Los Angeles neighborhoods such as Beverly Hills and Hollywood Hills to Dubai. Aesthetically, this is achieved by a bold angular design with a glass-fronted façade, embodying the contemporary minimalist aesthetic found in most modern celebrity homes.",
                                                            "The project was envisioned as a way of bringing the opulence of upscale Los Angeles neighborhoods such as Beverly Hills and Hollywood Hills to Dubai. Aesthetically, this is achieved by a bold angular design with a glass-fronted façade, embodying the contemporary minimalist aesthetic found in most modern celebrity homes.",
                                                            "The project comprises two ground-level townhouses, simplex apartments on the lower levels, two duplex apartments and the stunning Royal Penthouse, which features a rooftop pool and includes an independent three-bedroom 'guesthouse' apartment. This may well be one of the most unique offerings in Dubai, providing two separate residences in one, to be used for visiting friends and family or as a secondary living space.",
                                                            "Launched a scant few weeks ago, the project has been conceptualized by Innovate Development, the property development arm of Dubai-based firm Innovate Living. The philosophy behind Innovate Living is to deliver not just well-designed homes, but exceptionally well-crafted lifestyle experiences, where even the minutest detail has been painstakingly considered.",
                                                        ],
                                                        galleryImages: [
                                                            {
                                                                src: "/example1.png",
                                                                alt: "Modern apartment interior with city view",
                                                            },
                                                            {
                                                                src: "/example2.png",
                                                                alt: "Rooftop terrace with pool and Dubai skyline",
                                                            },
                                                            {
                                                                src: "/example3.png",
                                                                alt: "Traditional Middle Eastern architecture",
                                                            },
                                                        ],
                                                    },
                                                    onBackToListing = () => console.log("Back to listing clicked"),
                                                }: PropertyShowcaseSectionProps) {
    return (
        <section className="bg-white">
            <PageBanner img={'/dubai.webp'}/>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Header with Back Button */}
                <div className="flex justify-between items-start mb-8">
                    <h1
                        className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight max-w-4xl"
                        style={{
                            fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                            fontWeight: "400",
                            letterSpacing: "0.02em",
                        }}
                    >
                        {title}
                    </h1>

                    <button
                        onClick={onBackToListing}
                        className="border border-black text-gray-600 hover:bg-gray-50 px-4 py-2 text-sm flex items-center gap-2 flex-shrink-0"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to listing
                    </button>
                </div>

                {/* Hero Image */}
                <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] mb-6 overflow-hidden">
                    <Image
                        src={heroImage || "/placeholder.svg"}
                        alt="Palme Couture beachfront view"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Article Meta */}
                <div className="mb-8">
                    <p className="text-gray-600 text-sm">
                        Posted By <span className="font-medium">{author}</span> On {date}
                    </p>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                    {/* First two paragraphs */}
                    <div className="space-y-6 mb-12">
                        {content.paragraphs.slice(0, 2).map((paragraph, index) => (
                            <p key={index} className="text-gray-700 leading-relaxed text-base">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Third paragraph */}
                    <div className="mb-12">
                        <p className="text-gray-700 leading-relaxed text-base">{content.paragraphs[2]}</p>
                    </div>

                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {content.galleryImages.map((image, index) => (
                            <div key={index} className="relative h-64 overflow-hidden">
                                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                            </div>
                        ))}
                    </div>

                    {/* Remaining paragraphs */}
                    <div className="space-y-6">
                        {content.paragraphs.slice(3).map((paragraph, index) => (
                            <p key={index + 3} className="text-gray-700 leading-relaxed text-base">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
