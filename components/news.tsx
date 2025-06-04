"use client"
import Image from "next/image"

type NewsArticle = {
    id: number
    title: string
    date: string
    image: string
    slug: string
}

const newsArticles: NewsArticle[] = [
    {
        id: 1,
        title: "5 Most Creative Buildings Ready in 2022",
        date: "24th January 2022",
        image: "/example1.png",
        slug: "creative-buildings-2022",
    },
    {
        id: 2,
        title: "5 Top Places to Experience Dubai's Nightlife",
        date: "24th January 2022",
        image: "/example2.png",
        slug: "dubai-nightlife-guide",
    },
    {
        id: 3,
        title: "Best Areas in Dubai to Enjoy Polo Season",
        date: "24th January 2022",
        image: "/example3.png",
        slug: "dubai-polo-season",
    },
    {
        id: 4,
        title: "Community Guide: Emirates Hills",
        date: "24th January 2022",
        image: "/example4.png",
        slug: "emirates-hills-guide",
    },
]

export function InTheNews() {
    const handleArticleClick = (slug: string) => {
        console.log("Navigate to article:", slug)
        // Implement navigation to article page
    }

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">In The News</h2>
                    <div className="w-24 h-px bg-gray-300"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {newsArticles.map((article) => (
                        <div key={article.id} className="border border-gray-200 group cursor-pointer" onClick={() => handleArticleClick(article.slug)}>
                            <div className="relative h-64 mb-4 overflow-hidden">
                                <Image
                                    src={article.image || "/placeholder.svg"}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="py-2 px-6">
                                <p className="text-gray-500 pb-2 text-sm font-medium">{article.date}</p>
                                <h3 className="text-md pb-3 font-medium text-black leading-tight group-hover:text-gray-700 transition-colors">
                                    {article.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
