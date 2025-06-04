"use client"

import { Check } from "lucide-react"

interface PropertyDetailsSectionProps {
    description?: string[]
    features?: string[]
}

export default function PropertyDetailsSection({
                                                   description = [
                                                       "LuxBridge International Realty is a luxury real estate brokerage and property investment consultancy firm. Established in Dubai at a tipping point of the industry, to create an impact in a market which was just evolving empowered by a joint effort of the public and private sectors, aiming to change the perception of the market and market players.",
                                                       "We chose to participate in setting a benchmark of higher levels of transparency, professionalism and investor protection. Believing that client satisfaction and retention are the key factors of sustainability and organic growth in a market nearing maturity, we laid down the corner blocks of an organization that reflects the history of its' founders",
                                                   ],
                                                   features = [
                                                       "Balcony",
                                                       "Basement parking",
                                                       "Maid's room",
                                                       "Private garden",
                                                       "Private swimming pool",
                                                       "Satellite/Cable TV",
                                                       "Study",
                                                       "View of golf course",
                                                       "Satellite/Cable TV",
                                                       "Study",
                                                       "View of golf course",
                                                   ],
                                               }: PropertyDetailsSectionProps) {
    // Calculate how many features per column (for 3 columns)
    const featuresPerColumn = Math.ceil(features.length / 3)

    // Split features into 3 columns
    const featureColumns = [
        features.slice(0, featuresPerColumn),
        features.slice(featuresPerColumn, featuresPerColumn * 2),
        features.slice(featuresPerColumn * 2),
    ]

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto sm:px-6 lg:px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Property Description */}
                    <div>
                        <h2
                            className="text-2xl sm:text-3xl text-gray-900 mb-6"
                            style={{
                                fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                                fontWeight: "400",
                                letterSpacing: "0.02em",
                            }}
                        >
                            Property Description
                        </h2>
                        <div className="space-y-6">
                            {description.map((paragraph, index) => (
                                <p key={index} className="text-gray-700 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Features & Amenities */}
                    <div>
                        <h2
                            className="text-2xl sm:text-3xl text-gray-900 mb-6"
                            style={{
                                fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                                fontWeight: "400",
                                letterSpacing: "0.02em",
                            }}
                        >
                            Features & Amenities
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
                            {featureColumns.map((column, columnIndex) => (
                                <div key={columnIndex} className="space-y-4">
                                    {column.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center">
                                            <Check className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
