import { SearchFilter } from "@/components/search-filter"
import PageBanner from "@/components/pageBanner"
import Image from "next/image"
import { Bath, Bed, Square } from "lucide-react"
import Link from "next/link"
import { Pagination } from "@/components/pagination"
import { PropertySort } from "@/components/property-sort"
import {SearchFilterSticky} from "@/components/filterSticky";
import {getProperties, Property} from "@/lib/PropertiesData";


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

    const properties = await getProperties()

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
