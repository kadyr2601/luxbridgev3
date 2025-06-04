"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {Pagination} from "@/components/pagination";

interface BlogPost {
    id: string
    slug: string
    title: string
    excerpt: string
    image: string
    category: string
    date: string
}

interface BlogSectionProps {
    title?: string
    posts?: BlogPost[]
}

const categories = [
    "ALL CATEGORIES",
    "COMMUNITY GUIDES",
    "PROPERTY",
    "SPOTLIGHT",
    "CURATED LIST",
    "LIFESTYLE",
    "INTERNATIONAL",
    "MARKETING NEWS",
    "COMPANY NEWS",
]

export default function BlogSection({
                                        title = "Our Blogs",
                                        posts = [
                                            {
                                                id: "1",
                                                slug: "dubai-apartments-best-views",
                                                title: "Dubai Apartments with the Best Views",
                                                excerpt:
                                                    "From the world's tallest tower to a premium beachfront address, here is a list of the finest apartments for sale in Dubai....",
                                                image: "/example1.png",
                                                category: "PROPERTY",
                                                date: "September 6, 2022",
                                            },
                                            {
                                                id: "2",
                                                slug: "best-waterfront-communities-dubai",
                                                title: "Best Waterfront Communities in Dubai",
                                                excerpt:
                                                    "From the world's tallest tower to a premium beachfront address, here is a list of the finest apartments for sale in Dubai....",
                                                image: "/example2.png",
                                                category: "COMMUNITY GUIDES",
                                                date: "September 6, 2022",
                                            },
                                            {
                                                id: "3",
                                                slug: "family-friendly-cities-world",
                                                title: "6 Most Family-Friendly Cities in the World",
                                                excerpt:
                                                    "From the world's tallest tower to a premium beachfront address, here is a list of the finest apartments for sale in Dubai....",
                                                image: "/example3.png",
                                                category: "LIFESTYLE",
                                                date: "September 6, 2022",
                                            },
                                            {
                                                id: "4",
                                                slug: "luxury-properties-dubai",
                                                title: "Luxury Properties in Dubai Marina",
                                                excerpt: "Discover the most exclusive properties in one of Dubai's most prestigious neighborhoods....",
                                                image: "/example4.png",
                                                category: "PROPERTY",
                                                date: "September 5, 2022",
                                            },
                                            {
                                                id: "5",
                                                slug: "investment-guide-2024",
                                                title: "Real Estate Investment Guide 2024",
                                                excerpt: "Everything you need to know about investing in Dubai's real estate market this year....",
                                                image: "/example5.png",
                                                category: "MARKETING NEWS",
                                                date: "September 4, 2022",
                                            },
                                            {
                                                id: "6",
                                                slug: "downtown-dubai-spotlight",
                                                title: "Downtown Dubai: Area Spotlight",
                                                excerpt: "An in-depth look at one of Dubai's most iconic neighborhoods and its attractions....",
                                                image: "/example1.png",
                                                category: "SPOTLIGHT",
                                                date: "September 3, 2022",
                                            },
                                            {
                                                id: "11",
                                                slug: "dubai-apartments-best-views",
                                                title: "Dubai Apartments with the Best Views",
                                                excerpt:
                                                    "From the world's tallest tower to a premium beachfront address, here is a list of the finest apartments for sale in Dubai....",
                                                image: "/example1.png",
                                                category: "PROPERTY",
                                                date: "September 6, 2022",
                                            },
                                            {
                                                id: "22",
                                                slug: "best-waterfront-communities-dubai",
                                                title: "Best Waterfront Communities in Dubai",
                                                excerpt:
                                                    "From the world's tallest tower to a premium beachfront address, here is a list of the finest apartments for sale in Dubai....",
                                                image: "/example2.png",
                                                category: "COMMUNITY GUIDES",
                                                date: "September 6, 2022",
                                            },
                                            {
                                                id: "31",
                                                slug: "family-friendly-cities-world",
                                                title: "6 Most Family-Friendly Cities in the World",
                                                excerpt:
                                                    "From the world's tallest tower to a premium beachfront address, here is a list of the finest apartments for sale in Dubai....",
                                                image: "/example3.png",
                                                category: "LIFESTYLE",
                                                date: "September 6, 2022",
                                            },
                                            {
                                                id: "14",
                                                slug: "luxury-properties-dubai",
                                                title: "Luxury Properties in Dubai Marina",
                                                excerpt: "Discover the most exclusive properties in one of Dubai's most prestigious neighborhoods....",
                                                image: "/example4.png",
                                                category: "PROPERTY",
                                                date: "September 5, 2022",
                                            },
                                            {
                                                id: "15",
                                                slug: "investment-guide-2024",
                                                title: "Real Estate Investment Guide 2024",
                                                excerpt: "Everything you need to know about investing in Dubai's real estate market this year....",
                                                image: "/example5.png",
                                                category: "MARKETING NEWS",
                                                date: "September 4, 2022",
                                            },
                                            {
                                                id: "61",
                                                slug: "downtown-dubai-spotlight",
                                                title: "Downtown Dubai: Area Spotlight",
                                                excerpt: "An in-depth look at one of Dubai's most iconic neighborhoods and its attractions....",
                                                image: "/example1.png",
                                                category: "SPOTLIGHT",
                                                date: "September 3, 2022",
                                            },
                                        ],
                                    }: BlogSectionProps) {
    const [selectedCategory, setSelectedCategory] = useState("ALL CATEGORIES")

    const filteredPosts =
        selectedCategory === "ALL CATEGORIES" ? posts : posts.filter((post) => post.category === selectedCategory)

    const currentPage = 1

    const totalPages = Math.ceil(filteredPosts.length / 6)

    return (
        <section className="py-16 bg-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-2xl sm:text-3xl lg:text-4xl text-center text-gray-900 mb-12"
                    style={{
                        fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                        fontWeight: "400",
                        letterSpacing: "0.02em",
                    }}
                >
                    {title}
                </h2>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar - Sticky */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-8">
                            <nav className="space-y-1">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                                            selectedCategory === category
                                                ? "bg-black text-white"
                                                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Right Content Area - Blog Cards */}
                    <div className="lg:w-3/4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <div key={post.id} className="group">
                                    {/* Image */}
                                    <div className="relative h-64 mb-6 overflow-hidden">
                                        <Image
                                            src={post.image || "/placeholder.svg"}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-2">
                                        <h3 className="text-md font-medium text-gray-900 leading-tight">{post.title}</h3>

                                        {/* Description with 2-line limit */}
                                        <p className="text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>

                                        {/* Top line */}
                                        <div className="border-t border-gray-200 pt-4">
                                            {/* Bottom section with button and date */}
                                            <div className="flex justify-between items-center pb-4">
                                                <Link href={`/blog/${post.slug}`}>
                                                    <button className="border border-black text-black hover:bg-gray-100 px-6 py-2 text-sm"
                                                    >
                                                        Continue Reading
                                                    </button>
                                                </Link>
                                                <span className="text-sm text-gray-500">{post.date}</span>
                                            </div>
                                            {/* Bottom line */}
                                            <div className="border-b border-gray-200"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredPosts.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-500">No blog posts found in this category.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Pagination */}
                <div className="mt-12">
                    <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/blog" />
                </div>
            </div>
        </section>
    )
}
