"use client"
import Image from "next/image"
import Link from "next/link"
import { Bed, Bath, Square } from "lucide-react"


interface Property {
    id: string
    slug: string
    title: string
    location: string
    image: string
    bedrooms: number
    bathrooms: number
    area: number
    price: string
}

interface SimilarPropertiesSectionProps {
    title?: string
    properties?: Property[]
    viewAllLink?: string
}

export default function SimilarPropertiesSection({
                                                     title = "Similar Properties",
                                                     properties = [
                                                         {
                                                             id: "1",
                                                             slug: "property-1",
                                                             title: "Opulent Acacia villas At Desert",
                                                             location: "Leaf 4 Al Barari",
                                                             image: "/example1.png",
                                                             bedrooms: 6,
                                                             bathrooms: 5,
                                                             area: 11000,
                                                             price: "56000",
                                                         },
                                                         {
                                                             id: "2",
                                                             slug: "property-2",
                                                             title: "Opulent Acacia villas At Desert",
                                                             location: "Leaf 4 Al Barari",
                                                             image: "/example2.png",
                                                             bedrooms: 6,
                                                             bathrooms: 5,
                                                             area: 11000,
                                                             price: "86000",
                                                         },
                                                         {
                                                             id: "3",
                                                             slug: "property-3",
                                                             title: "Opulent Acacia villas At Desert",
                                                             location: "Leaf 4 Al Barari",
                                                             image: "/example3.png",
                                                             bedrooms: 6,
                                                             bathrooms: 5,
                                                             area: 11000,
                                                             price: "67000",
                                                         },
                                                     ],
                                                     viewAllLink = "/properties",
                                                 }: SimilarPropertiesSectionProps) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-4">
                <h2
                    className="md:text-4xl sm:text-3xl text-center text-black/80 mb-12"
                    style={{
                        fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                        fontWeight: "400",
                        letterSpacing: "0.02em",
                    }}
                >
                    {title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                        <div key={property.id} className="border border-gray-200 overflow-hidden group">
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={property.image || "/placeholder.svg"}
                                    alt={property.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="flex space-x-4">
                                        <Link
                                            href={`/properties/${property.slug}`}
                                            className="border border-white text-white px-6 py-3 uppercase font-medium text-sm hover:bg-white hover:text-black transition-colors duration-300"
                                        >
                                            More Details
                                        </Link>
                                        <Link
                                            href={`https://wa.me/971529131504?text=Hello i want get more information to ${property.title}`}
                                            className="border border-white text-white px-6 py-3 uppercase font-medium text-sm hover:bg-white hover:text-black transition-colors duration-300"
                                        >
                                            Make Enquiry
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-[18px] font-medium text-black/80 mb-1">{property.title}</h3>
                                <p className="text-gray-500 mb-4">{property.location}</p>
                                <div className="border-t border-gray-200 pt-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-4">
                                            <div className="flex items-center">
                                                <Bed className="h-5 w-5 text-gray-400 mr-2" />
                                                <span className="text-gray-600">{property.bedrooms}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Bath className="h-5 w-5 text-gray-400 mr-2" />
                                                <span className="text-gray-600">{property.bathrooms}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Square className="h-5 w-5 text-gray-400 mr-2" />
                                                <span className="text-gray-600">{property.area} SQ FT</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="border border-gray-300 px-4 py-2">
                                                <span className="text-gray-500 text-sm">AED</span>{" "}
                                                <span className="font-medium">{property.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Link href={viewAllLink}>
                        <button
                            className="border border-black text-black hover:bg-gray-100 px-8 py-2 text-sm font-medium tracking-wider"
                        >
                            VIEW ALL
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
