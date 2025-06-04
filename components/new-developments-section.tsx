"use client"

import { useState } from "react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {Pagination} from "@/components/pagination";

interface Property {
    id: string
    slug: string
    title: string
    location: string
    image: string
    type: "apartments" | "villas" | "penthouse"
    locationArea: string
}

interface NewDevelopmentsSectionProps {
    title?: string
    properties?: Property[]
}

export default function NewDevelopmentsSection({
                                                   title = "Projects",
                                                   properties = [
                                                       {
                                                           id: "1",
                                                           slug: "opulent-acacia-villas-1",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example1.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                       {
                                                           id: "2",
                                                           slug: "opulent-acacia-villas-2",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example2.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                       {
                                                           id: "3",
                                                           slug: "opulent-acacia-villas-3",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example3.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                       {
                                                           id: "4",
                                                           slug: "opulent-acacia-villas-4",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example4.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                       {
                                                           id: "5",
                                                           slug: "opulent-acacia-villas-5",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example5.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                       {
                                                           id: "6",
                                                           slug: "opulent-acacia-villas-6",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example1.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                       {
                                                           id: "11",
                                                           slug: "opulent-acacia-villas-1",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example1.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                       {
                                                           id: "21",
                                                           slug: "opulent-acacia-villas-2",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example2.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                       {
                                                           id: "13",
                                                           slug: "opulent-acacia-villas-3",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example3.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                       {
                                                           id: "41",
                                                           slug: "opulent-acacia-villas-4",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example4.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                       {
                                                           id: "51",
                                                           slug: "opulent-acacia-villas-5",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example5.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                       {
                                                           id: "61",
                                                           slug: "opulent-acacia-villas-6",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example1.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                       {
                                                           id: "111",
                                                           slug: "opulent-acacia-villas-1",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example1.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                       {
                                                           id: "211",
                                                           slug: "opulent-acacia-villas-2",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example2.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                       {
                                                           id: "113",
                                                           slug: "opulent-acacia-villas-3",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example3.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                       {
                                                           id: "411",
                                                           slug: "opulent-acacia-villas-4",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example4.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                       {
                                                           id: "511",
                                                           slug: "opulent-acacia-villas-5",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example5.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                       {
                                                           id: "611",
                                                           slug: "opulent-acacia-villas-6",
                                                           title: "Opulent Acacia villas At Desert",
                                                           location: "Leaf 4 Al Barari",
                                                           image: "/example1.png",
                                                           type: "villas",
                                                           locationArea: "al-barari",
                                                       },
                                                   ],
                                               }: NewDevelopmentsSectionProps) {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([])
    const [selectedLocation, setSelectedLocation] = useState("all")

    const handleTypeChange = (type: string, checked: boolean) => {
        if (checked) {
            setSelectedTypes([...selectedTypes, type])
        } else {
            setSelectedTypes(selectedTypes.filter((t) => t !== type))
        }
    }

    const filteredProperties = properties.filter((property) => {
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(property.type)
        const locationMatch = selectedLocation === "all" || property.locationArea === selectedLocation
        return typeMatch && locationMatch
    })
    const currentPage = 1
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-4">
                {/* Header */}
                <div className="mb-12">
                    <h2
                        className="text-3xl sm:text-4xl text-gray-900 mb-2"
                        style={{
                            fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                            fontWeight: "400",
                            letterSpacing: "0.02em",
                        }}
                    >
                        {title}
                    </h2>
                    <div className="w-16 h-px bg-gray-400 mb-8"></div>

                    {/* Filters */}
                    <div className="flex flex-col sm:flex-row gap-8">
                        {/* Property Type Filters */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <span className="text-gray-700 font-medium whitespace-nowrap">Property type</span>
                            <div className="flex flex-wrap gap-6">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 h-4 w-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                                        onChange={(e) => handleTypeChange("apartments", e.target.checked)}
                                    />
                                    <span className="text-gray-600">Apartments</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 h-4 w-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                                        onChange={(e) => handleTypeChange("villas", e.target.checked)}
                                    />
                                    <span className="text-gray-600">Villas</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 h-4 w-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                                        onChange={(e) => handleTypeChange("penthouse", e.target.checked)}
                                    />
                                    <span className="text-gray-600">Penthouse</span>
                                </label>
                            </div>
                        </div>

                        {/* Location Filter */}
                        <div className="flex items-center gap-4">
                            <span className="text-gray-700 font-medium whitespace-nowrap">Location</span>
                            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                                <SelectTrigger className="w-[120px] border-gray-300">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="al-barari">Al Barari</SelectItem>
                                    <SelectItem value="downtown">Downtown</SelectItem>
                                    <SelectItem value="marina">Marina</SelectItem>
                                    <SelectItem value="palm-jumeirah">Palm Jumeirah</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProperties.map((property) => (
                        <div
                            key={property.id}
                            className="relative group cursor-pointer overflow-hidden"
                            onClick={() => console.log(`Clicked property: ${property.id}`)}
                        >
                            <div className="relative h-80 md:h-96 overflow-hidden">
                                <Image
                                    src={property.image || "/placeholder.svg"}
                                    alt={property.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Solid Black Bar at Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-24 bg-black/60" />

                                {/* Text Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                                    <h3 className="text-xl md:text-xl font-medium mb-2">{property.title}</h3>
                                    <p className="text-gray-200 text-sm md:text-sm">{property.location}</p>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center">
                                        <button
                                            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300 px-6 py-3 font-medium"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                console.log(`View project: ${property.id}`)
                                            }}
                                        >
                                            View Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProperties.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No developments found matching your criteria.</p>
                    </div>
                )}

                {/* Pagination */}
                <div className="mt-12">
                    <Pagination currentPage={currentPage} totalPages={properties?.length / 12} basePath="/properties" />
                </div>
            </div>
        </section>
    )
}
