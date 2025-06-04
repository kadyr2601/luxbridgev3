"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"

type Development = {
    id: number
    title: string
    location: string
    image: string
}

const developments: Development[] = [
    {
        id: 1,
        title: "Opulent Acacia villas At Desert",
        location: "Leaf 4 Al Barari",
        image: "/example1.png",
    },
    {
        id: 2,
        title: "Opulent Acacia villas At Desert",
        location: "Leaf 4 Al Barari",
        image: "/example2.png",
    },
    {
        id: 3,
        title: "Opulent Acacia villas At Desert",
        location: "Leaf 4 Al Barari",
        image: "/example3.png",
    },
]

export function FeaturedProjects() {
    const handleViewAll = () => {
        console.log("View all developments")
        // Implement navigation to all developments page
    }

    const handleDevelopmentClick = (developmentId: number) => {
        console.log("Development clicked:", developmentId)
        // Implement navigation to development details
    }

    return (
        <section className="pt-16 md:pt-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl text-black mb-4">Featured Projects</h2>
                        <div className="w-24 h-px bg-gray-300"></div>
                    </div>

                    <Button
                        onClick={handleViewAll}
                        className="mt-6 md:mt-0 bg-black/80 hover:bg-black text-white px-8 py-3 uppercase font-medium text-sm"
                    >
                        View All
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {developments.map((development) => (
                        <div
                            key={development.id}
                            className="relative group cursor-pointer overflow-hidden"
                            onClick={() => handleDevelopmentClick(development.id)}
                        >
                            <div className="relative h-80 md:h-96 overflow-hidden">
                                <Image
                                    src={development.image || "/placeholder.svg"}
                                    alt={development.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Solid Black Bar at Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-24 bg-black/60" />

                                {/* Text Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                                    <h3 className="text-xl md:text-2xl font-medium mb-2">{development.title}</h3>
                                    <p className="text-gray-200 text-sm md:text-base">{development.location}</p>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/50  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center">
                                        <Button
                                            variant="outline"
                                            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                handleDevelopmentClick(development.id)
                                            }}
                                        >
                                            View Project
                                        </Button>
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
