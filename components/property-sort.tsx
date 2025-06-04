import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface PropertySortProps {
    currentSort: string
    basePath?: string
    currentPage?: number
}

export function PropertySort({ currentSort, basePath = "/properties", currentPage = 1 }: PropertySortProps) {
    const sortOptions = [
        { value: "newest", label: "Newest First" },
        { value: "oldest", label: "Oldest First" },
        { value: "price-low", label: "Price: Low to High" },
        { value: "price-high", label: "Price: High to Low" },
        { value: "area-large", label: "Area: Largest First" },
        { value: "area-small", label: "Area: Smallest First" },
        { value: "bedrooms-most", label: "Bedrooms: Most First" },
        { value: "bedrooms-least", label: "Bedrooms: Least First" },
    ]

    const getCurrentSortLabel = () => {
        const option = sortOptions.find((opt) => opt.value === currentSort)
        return option ? option.label : "Newest First"
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                    {getCurrentSortLabel()}
                    <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
                {sortOptions.map((option) => (
                    <DropdownMenuItem key={option.value} asChild>
                        <Link
                            href={`${basePath}?sort=${option.value}&page=1`}
                            className={`block px-2 py-1.5 text-sm cursor-pointer ${
                                currentSort === option.value ? "bg-gray-100" : ""
                            }`}
                        >
                            {option.label}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
