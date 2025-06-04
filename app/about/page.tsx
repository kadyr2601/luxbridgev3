import React from 'react';
import Image from "next/image";
import {Lightbulb, Target} from "lucide-react";


const Page = async () => {

    const title = "About Us"
    const paragraphs = [
        "LuxBridge International Realty is a luxury real estate brokerage and property investment consultancy firm. Established in Dubai at a tipping point of the industry, to create an impact in a market which was just evolving empowered by a joint effort of the public and private sectors, aiming to change the perception of the market and market players.",
        "We chose to participate in setting a benchmark of higher levels of transparency, professionalism and investor protection. Believing that client satisfaction and retention are the key factors of sustainability and organic growth in a market nearing maturity, we laid down the corner blocks of an organization that reflects the history of its' founders."
    ]

    const missionTitle = "Our Mission"
    const missionText = "To revolutionize the luxury real estate market in Dubai by providing unparalleled service, transparency, and expertise. We are committed to building lasting relationships with our clients through integrity, professionalism, and a deep understanding of their unique needs and aspirations."
    const visionTitle = "Our Vision"
    const visionText = "To be the leading luxury real estate consultancy in the region, recognized for our innovative approach, exceptional client service, and contribution to shaping Dubai's real estate landscape. We envision a future where every client achieves their property investment goals with confidence and success."


    const buyersTitle = "For Buyers"
    const buyersText = "To enhance our clients' personalized experience providing them with the right tools for the purpose of future investment with unbiased advice, and specialists for each area."
    const middleImage = "/abu.webp"
    const sellersTitle = "For Sellers"
    const sellersText = "Each transaction is different, every homeowner wants the same thing - the best possible price with the least amount of hassle. Luxbridge International Realty has a team dedicated exclusively to assisting homeowners painstakingly through the home-selling process and to marketing the property to get the highest possible price in the shortest period of time."

    const seo_title = "Message from the CEO"
    const seo_paragraphs = [
            "Having an from economic background, It has always been my passion to help people make a right choice when it comes to long term investment.",
            "Just like any investment Real estate markets fluctuate, and it pays to be aware of up-to-date trends; risks include delays, increased costs, and the unknowns of a newly-developed projects while existing properties offer convenience, faster access, established improvements.",
            "With 9 years of experience in the Market i have tailored a structure that can help client make the right choice.",
        ]
    const ceoName = "John Spinu"
    const ceoImage = "/John.png"

    return (
        <div>
            <div className={'w-full relative min-h-[450px] mt-[-96px]'}>
                <Image
                    src={'/abu.webp'}
                    alt={'Main Banner'}
                    fill
                    style={{filter: "grayscale(100%) contrast(1.1) brightness(0.9)",objectFit: "cover"}}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/80"></div>
            </div>


            <div className="py-16 sm:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl sm:text-5xl font-serif font-light text-gray-900 mb-12">{title}</h2>

                        <div className="space-y-8">
                            {paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Mission Card */}
                        <div className="bg-black p-8 sm:p-12 relative overflow-hidden">
                            {/* Diagonal line pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100"
                                     fill="none">
                                    <defs>
                                        <pattern id="diagonalLines1" patternUnits="userSpaceOnUse" width="10"
                                                 height="10">
                                            <path d="M0,0 L10,10" stroke="white" strokeWidth="0.5"/>
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#diagonalLines1)"/>
                                </svg>
                            </div>

                            <div className="relative z-10 flex items-start gap-6">
                                <div className="flex-shrink-0">
                                    <div className="bg-white/10 p-3 rounded-lg">
                                        <Target className="h-8 w-8 text-white"/>
                                    </div>
                                </div>

                                <div className="border-l border-white/80 pl-6">
                                    <h3 className="text-2xl sm:text-3xl font-light text-white mb-6" style={{
                                        fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                                        fontWeight: "300",
                                        letterSpacing: "0.02em",
                                    }}>
                                        {missionTitle}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed text-base">
                                        {missionText}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-black p-8 sm:p-12 relative overflow-hidden">
                            {/* Diagonal line pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100"
                                     fill="none">
                                    <defs>
                                        <pattern id="diagonalLines1" patternUnits="userSpaceOnUse" width="10"
                                                 height="10">
                                            <path d="M0,0 L10,10" stroke="white" strokeWidth="0.5"/>
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#diagonalLines1)"/>
                                </svg>
                            </div>

                            <div className="relative z-10 flex items-start gap-6">
                                <div className="flex-shrink-0">
                                    <div className="bg-white/10 p-3 rounded-lg">
                                        <Lightbulb className="h-8 w-8 text-white"/>
                                    </div>
                                </div>

                                <div className="border-l border-white/80 pl-6">
                                    <h3 className="text-2xl sm:text-3xl text-white mb-6" style={{
                                        fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                                        fontWeight: "300",
                                        letterSpacing: "0.02em",
                                    }}>
                                        {visionTitle}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed text-base">
                                        {visionText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] relative">

                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={middleImage}
                        alt="For Sellers"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.9)",}}
                    />
                </div>

                {/* For Buyers Panel */}
                <div className="relative overflow-hidden group">
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                        <h2 className="md:-mt-14 text-3xl sm:text-4xl lg:text-4xl text-white/90 mb-8" style={{
                            fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                            fontWeight: "300",
                            letterSpacing: "0.02em",
                        }}>
                            {buyersTitle}
                        </h2>
                        <p className="text-md text-white/80 leading-relaxed max-w-lg">
                            {buyersText}
                        </p>
                    </div>

                    <div className="absolute inset-0 bg-black/80 opacity-100"/>
                </div>

                {/* For Sellers Panel */}
                <div className="relative overflow-hidden group">
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-4xl text-white/90 mb-8" style={{
                            fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                            fontWeight: "300",
                            letterSpacing: "0.02em",
                        }}>
                            {sellersTitle}
                        </h2>
                        <p className="text-md text-white/80 leading-relaxed max-w-lg">
                            {sellersText}
                        </p>
                    </div>

                    {/* Hover Overlay */}
                    <div
                        className="absolute inset-0 bg-black/50 opacity-100"/>
                </div>
            </div>

            <div className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Text Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-gray-900 mb-8 leading-tight">{seo_title}</h2>

                            <div className="space-y-6">
                                {seo_paragraphs.map((paragraph, index) => (
                                    <p key={index} className="text-gray-700 text-base leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="pt-6">
                                <p className="text-lg font-semibold text-gray-900">{ceoName}</p>
                            </div>
                        </div>

                        {/* CEO Image */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative max-w-md w-full">
                                <img
                                    src={ceoImage}
                                    alt={`${ceoName} - CEO`}
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;