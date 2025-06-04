"use client"

import * as React from "react"
import Image from "next/image"
import { Bed, Bath, Square } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link";

type Property = {
    id: number
    title: string
    location: string
    image: string
    bedrooms: number
    bathrooms: number
    area: number
    price: number
}

const forSaleProperties: Property[] = [
    {
        id: 1,
        title: "Opulent Acacia villas At Desert",
        location: "Leaf 4 Al Barari",
        image: "/example1.png",
        bedrooms: 6,
        bathrooms: 5,
        area: 11000,
        price: 56000,
    },
    {
        id: 2,
        title: "Opulent Acacia villas At Desert",
        location: "Leaf 4 Al Barari",
        image: "/example2.png",
        bedrooms: 6,
        bathrooms: 5,
        area: 11000,
        price: 86000,
    },
    {
        id: 3,
        title: "Opulent Acacia villas At Desert",
        location: "Leaf 4 Al Barari",
        image: "/example3.png",
        bedrooms: 6,
        bathrooms: 5,
        area: 11000,
        price: 67000,
    },
    {
        id: 4,
        title: "Luxury Penthouse Downtown",
        location: "Business Bay",
        image: "/example4.png",
        bedrooms: 5,
        bathrooms: 4,
        area: 8500,
        price: 95000,
    },
    {
        id: 5,
        title: "Waterfront Villa Marina",
        location: "Dubai Marina",
        image: "/example5.png",
        bedrooms: 7,
        bathrooms: 6,
        area: 12000,
        price: 120000,
    },
    {
        id: 6,
        title: "Executive Villa Hills",
        location: "Emirates Hills",
        image: "/example1.png",
        bedrooms: 8,
        bathrooms: 7,
        area: 15000,
        price: 150000,
    },
]

const forRentProperties: Property[] = [
    {
        id: 7,
        title: "Luxury Apartment with Sea View",
        location: "Palm Jumeirah",
        image: "/example2.png",
        bedrooms: 4,
        bathrooms: 3,
        area: 3500,
        price: 15000,
    },
    {
        id: 8,
        title: "Exclusive Penthouse in Downtown",
        location: "Downtown Dubai",
        image: "/example3.png",
        bedrooms: 5,
        bathrooms: 4,
        area: 5200,
        price: 25000,
    },
    {
        id: 9,
        title: "Modern Villa with Private Pool",
        location: "Emirates Hills",
        image: "/example4.png",
        bedrooms: 7,
        bathrooms: 6,
        area: 9000,
        price: 45000,
    },
    {
        id: 10,
        title: "Beachfront Apartment",
        location: "Jumeirah Beach Residence",
        image: "/example5.png",
        bedrooms: 3,
        bathrooms: 2,
        area: 2800,
        price: 12000,
    },
    {
        id: 11,
        title: "Golf Course Villa",
        location: "Dubai Hills Estate",
        image: "/example1.png",
        bedrooms: 6,
        bathrooms: 5,
        area: 7500,
        price: 35000,
    },
    {
        id: 12,
        title: "Sky Villa with Terrace",
        location: "Business Bay",
        image: "/example2.png",
        bedrooms: 4,
        bathrooms: 3,
        area: 4200,
        price: 18000,
    },
]


export function FeaturedProperties() {
    const [activeTab, setActiveTab] = React.useState<"sale" | "rent">("sale")

    const properties = activeTab === "sale" ? forSaleProperties : forRentProperties

    function handleMoreDetails(id: number) {

    }

    function handleMakeEnquiry(id: number) {

    }


    return (
        <section className="pt-16 md:pt-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl text-black mb-4">Luxury Properties in Dubai</h2>
                        <div className="w-24 h-px bg-gray-300"></div>
                    </div>

                    <div className="flex mt-6 md:mt-0">
                        <button
                            onClick={() => setActiveTab("sale")}
                            className={cn(
                                "px-8 py-3 font-medium uppercase text-sm transition-colors relative",
                                activeTab === "sale"
                                    ? "bg-black/80 text-white"
                                    : "bg-white text-black border border-gray-300 hover:bg-gray-100",
                            )}
                        >
                            For Sale
                            {activeTab === "sale" && (
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-black/80 border-l-transparent border-r-transparent" />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab("rent")}
                            className={cn(
                                "px-8 py-3 font-medium uppercase text-sm transition-colors ml-4 relative",
                                activeTab === "rent"
                                    ? "bg-black/80 text-white"
                                    : "bg-white text-black border border-gray-300 hover:bg-gray-100",
                            )}
                        >
                            For Rent
                            {activeTab === "rent" && (
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-black/80 border-l-transparent border-r-transparent" />
                            )}
                        </button>
                    </div>
                </div>

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
                                        <Link href={'#'}
                                            className="border border-white text-white px-6 py-3 uppercase font-medium text-sm hover:bg-white hover:text-black transition-colors duration-300"
                                        >
                                            More Details
                                        </Link>
                                        <Link href={'#'}
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
            </div>
        </section>
    )
}
