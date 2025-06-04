import { SearchFilter } from "@/components/search-filter"
import PageBanner from "@/components/pageBanner"
import Image from "next/image"
import { Bath, Bed, Square } from "lucide-react"
import Link from "next/link"
import { Pagination } from "@/components/pagination"
import { PropertySort } from "@/components/property-sort"
import {SearchFilterSticky} from "@/components/filterSticky";

type Property = {
    id: number
    title: string
    location: string
    image: string
    bedrooms: number
    bathrooms: number
    area: number
    price: number
    slug: string
}

const properties: Property[] = [
    {
        id: 1,
        title: "Opulent Acacia Villas At Desert",
        location: "Leaf 4 Al Barari",
        image: "/example1.png",
        bedrooms: 6,
        bathrooms: 5,
        area: 11000,
        price: 56000,
        slug: "opulent-acacia-villas-desert",
    },
    {
        id: 2,
        title: "Luxury Penthouse Downtown",
        location: "Business Bay",
        image: "/example2.png",
        bedrooms: 5,
        bathrooms: 4,
        area: 8500,
        price: 95000,
        slug: "luxury-penthouse-downtown",
    },
    {
        id: 3,
        title: "Waterfront Villa Marina",
        location: "Dubai Marina",
        image: "/example3.png",
        bedrooms: 7,
        bathrooms: 6,
        area: 12000,
        price: 120000,
        slug: "waterfront-villa-marina",
    },
    {
        id: 4,
        title: "Executive Villa Hills",
        location: "Emirates Hills",
        image: "/example4.png",
        bedrooms: 8,
        bathrooms: 7,
        area: 15000,
        price: 150000,
        slug: "executive-villa-hills",
    },
    {
        id: 5,
        title: "Luxury Apartment with Sea View",
        location: "Palm Jumeirah",
        image: "/example5.png",
        bedrooms: 4,
        bathrooms: 3,
        area: 3500,
        price: 15000,
        slug: "luxury-apartment-sea-view",
    },
    {
        id: 6,
        title: "Exclusive Penthouse in Downtown",
        location: "Downtown Dubai",
        image: "/example1.png",
        bedrooms: 5,
        bathrooms: 4,
        area: 5200,
        price: 25000,
        slug: "exclusive-penthouse-downtown",
    },
    {
        id: 7,
        title: "Modern Villa with Private Pool",
        location: "Emirates Hills",
        image: "/example2.png",
        bedrooms: 7,
        bathrooms: 6,
        area: 9000,
        price: 45000,
        slug: "modern-villa-private-pool",
    },
    {
        id: 8,
        title: "Beachfront Apartment",
        location: "Jumeirah Beach Residence",
        image: "/example3.png",
        bedrooms: 3,
        bathrooms: 2,
        area: 2800,
        price: 12000,
        slug: "beachfront-apartment-jbr",
    },
    {
        id: 9,
        title: "Golf Course Villa",
        location: "Dubai Hills Estate",
        image: "/example4.png",
        bedrooms: 6,
        bathrooms: 5,
        area: 7500,
        price: 35000,
        slug: "golf-course-villa",
    },
    {
        id: 10,
        title: "Sky Villa with Terrace",
        location: "Business Bay",
        image: "/example5.png",
        bedrooms: 4,
        bathrooms: 3,
        area: 4200,
        price: 18000,
        slug: "sky-villa-terrace",
    },
    {
        id: 11,
        title: "Modern Duplex with Garden",
        location: "Jumeirah Village Circle",
        image: "/example1.png",
        bedrooms: 4,
        bathrooms: 4,
        area: 4100,
        price: 16000,
        slug: "modern-duplex-garden",
    },
    {
        id: 12,
        title: "Hillside Mansion Retreat",
        location: "Al Barari",
        image: "/example2.png",
        bedrooms: 9,
        bathrooms: 8,
        area: 18000,
        price: 210000,
        slug: "hillside-mansion-retreat",
    },
    {
        id: 13,
        title: "Urban Loft in Downtown",
        location: "Downtown Dubai",
        image: "/example3.png",
        bedrooms: 2,
        bathrooms: 2,
        area: 1600,
        price: 9500,
        slug: "urban-loft-downtown",
    },
    {
        id: 14,
        title: "Contemporary Family Villa",
        location: "Mirdif",
        image: "/example4.png",
        bedrooms: 5,
        bathrooms: 4,
        area: 6200,
        price: 22000,
        slug: "contemporary-family-villa",
    },
    {
        id: 15,
        title: "Stylish Penthouse with Skyline View",
        location: "Dubai Marina",
        image: "/example5.png",
        bedrooms: 3,
        bathrooms: 3,
        area: 4300,
        price: 33000,
        slug: "stylish-penthouse-skyline",
    },
    {
        id: 16,
        title: "Desert Oasis Estate",
        location: "Al Qudra",
        image: "/example1.png",
        bedrooms: 6,
        bathrooms: 6,
        area: 9500,
        price: 48000,
        slug: "desert-oasis-estate",
    },
    {
        id: 17,
        title: "Minimalist Villa in the Hills",
        location: "Emirates Hills",
        image: "/example2.png",
        bedrooms: 5,
        bathrooms: 5,
        area: 8900,
        price: 39000,
        slug: "minimalist-villa-hills",
    },
    {
        id: 18,
        title: "Ultra-Modern Glass Villa",
        location: "Palm Jumeirah",
        image: "/example3.png",
        bedrooms: 6,
        bathrooms: 5,
        area: 10400,
        price: 57000,
        slug: "ultra-modern-glass-villa",
    },
    {
        id: 19,
        title: "Penthouse with Private Elevator",
        location: "Downtown Dubai",
        image: "/example4.png",
        bedrooms: 4,
        bathrooms: 4,
        area: 5000,
        price: 31000,
        slug: "penthouse-private-elevator",
    },
    {
        id: 20,
        title: "Rustic Villa with Large Garden",
        location: "Al Safa",
        image: "/example5.png",
        bedrooms: 5,
        bathrooms: 4,
        area: 6800,
        price: 25000,
        slug: "rustic-villa-garden",
    },
    {
        id: 21,
        title: "Elegant Apartment Overlooking Canal",
        location: "Business Bay",
        image: "/example1.png",
        bedrooms: 3,
        bathrooms: 2,
        area: 3100,
        price: 17000,
        slug: "elegant-apartment-canal",
    },
    {
        id: 22,
        title: "High-Tech Smart Villa",
        location: "Jumeirah Golf Estates",
        image: "/example2.png",
        bedrooms: 6,
        bathrooms: 6,
        area: 11500,
        price: 62000,
        slug: "high-tech-smart-villa",
    },
    {
        id: 23,
        title: "Loft Apartment in Art District",
        location: "Alserkal Avenue",
        image: "/example3.png",
        bedrooms: 2,
        bathrooms: 2,
        area: 2000,
        price: 11000,
        slug: "loft-apartment-art-district",
    },
    {
        id: 24,
        title: "Secluded Retreat Villa",
        location: "Al Awir",
        image: "/example4.png",
        bedrooms: 7,
        bathrooms: 7,
        area: 14000,
        price: 75000,
        slug: "secluded-retreat-villa",
    },
    {
        id: 25,
        title: "Modern Coastal Home",
        location: "Jumeirah Bay Island",
        image: "/example5.png",
        bedrooms: 5,
        bathrooms: 5,
        area: 9500,
        price: 68000,
        slug: "modern-coastal-home",
    },
];


const PROPERTIES_PER_PAGE = 12

// Function to sort properties
function sortProperties(properties: Property[], sortBy: string): Property[] {
    const sorted = [...properties]

    switch (sortBy) {
        case "price-low":
            return sorted.sort((a, b) => a.price - b.price)
        case "price-high":
            return sorted.sort((a, b) => b.price - a.price)
        case "area-large":
            return sorted.sort((a, b) => b.area - a.area)
        case "area-small":
            return sorted.sort((a, b) => a.area - b.area)
        case "bedrooms-most":
            return sorted.sort((a, b) => b.bedrooms - a.bedrooms)
        case "bedrooms-least":
            return sorted.sort((a, b) => a.bedrooms - b.bedrooms)
        case "newest":
            return sorted.sort((a, b) => b.id - a.id)
        case "oldest":
            return sorted.sort((a, b) => a.id - b.id)
        default:
            return sorted
    }
}

interface PageProps {
    searchParams: { page?: string; sort?: string }
}

const Page = async ({ searchParams }: PageProps) => {
    // Get current page and sort from URL params
    const currentPage = Number(searchParams.page) || 1
    const currentSort = searchParams.sort || "newest"

    // Sort properties first
    const sortedProperties = sortProperties(properties, currentSort)

    // Calculate pagination
    const totalPages = Math.ceil(sortedProperties.length / PROPERTIES_PER_PAGE)

    // Ensure current page is within valid range
    const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages))

    // Get properties for current page
    const startIndex = (validCurrentPage - 1) * PROPERTIES_PER_PAGE
    const endIndex = startIndex + PROPERTIES_PER_PAGE
    const currentProperties = sortedProperties.slice(startIndex, endIndex)

    // Calculate showing range
    const showingStart = startIndex + 1
    const showingEnd = Math.min(endIndex, sortedProperties.length)

    return (
        <div className={"flex flex-col"}>
            <PageBanner img={"/dubai.webp"} />
            <div className={"relative"}>
                <SearchFilter />
            </div>
            <div className={'pt-10'} />
            <SearchFilterSticky/>


            <div className={"container mx-auto relative my-24"}>
                {/* Property Info and Sorting Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-4 border-b border-gray-200">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Properties for Sale</h2>
                        <p className="text-gray-600">
                            Showing {showingStart}-{showingEnd} of {sortedProperties.length} properties
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">Sort by:</span>
                        <PropertySort currentSort={currentSort} basePath="/properties" currentPage={validCurrentPage} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentProperties.map((property) => (
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
                                            href={"#"}
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

                {/* Pagination */}
                <div className="mt-12">
                    <Pagination currentPage={validCurrentPage} totalPages={totalPages} basePath="/properties" />
                </div>
            </div>
        </div>
    )
}

export default Page
