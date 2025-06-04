import Link from "next/link"
import { cn } from "@/lib/utils"

interface PaginationProps {
    currentPage: number
    totalPages: number
    basePath?: string
    className?: string
}

export function Pagination({ currentPage, totalPages, basePath = "", className }: PaginationProps) {
    // Generate page numbers to show
    const getPageNumbers = () => {
        const pages = []
        const maxVisiblePages = 5

        if (totalPages <= maxVisiblePages) {
            // Show all pages if total is small
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            // Show current page and surrounding pages
            const start = Math.max(1, currentPage - 2)
            const end = Math.min(totalPages, currentPage + 2)

            for (let i = start; i <= end; i++) {
                pages.push(i)
            }
        }

        return pages
    }

    if (totalPages <= 1) return null

    return (
        <div className={cn("flex items-center justify-center space-x-2", className)}>
            {getPageNumbers().map((page) => (
                <Link
                    key={page}
                    href={`${basePath}?page=${page}`}
                    className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors",
                        page === currentPage ? "bg-black/80 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                    )}
                >
                    {page}
                </Link>
            ))}

            {currentPage < totalPages && (
                <Link
                    href={`${basePath}?page=${currentPage + 1}`}
                    className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                    Next
                </Link>
            )}

            {currentPage < totalPages && (
                <Link
                    href={`${basePath}?page=${totalPages}`}
                    className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                    Last
                </Link>
            )}
        </div>
    )
}
