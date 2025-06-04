"use client"

import * as React from "react"
import { Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SearchFilterSticky() {
  const [propertyType, setPropertyType] = React.useState("Buy")
  const [city, setCity] = React.useState("City")
  const [type, setType] = React.useState("Type")
  const [bedrooms, setBedrooms] = React.useState("Bedrooms")
  const [price, setPrice] = React.useState("Price")
  const [searchQuery, setSearchQuery] = React.useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      propertyType,
      searchQuery,
      city,
      type,
      bedrooms,
      price,
    })
  }

  return (
    <div className="w-full bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b border-gray-200">
      <form onSubmit={handleSearch} className="w-full flex flex-wrap md:flex-nowrap container mx-auto">
        {/* Property Type Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-gray-700 h-14 px-4 border-r border-gray-200 bg-transparent hover:bg-gray-100 rounded-none flex-shrink-0"
            >
              {propertyType} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[100px]">
            <DropdownMenuItem onClick={() => setPropertyType("Buy")}>Buy</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPropertyType("Rent")}>Rent</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPropertyType("Sell")}>Sell</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Keywords or community"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-14 px-4 py-2 flex-grow bg-transparent text-gray-700 border-none focus:outline-none focus:ring-0 min-w-[200px] placeholder-gray-400"
        />

        {/* City Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-14 px-4 border-l border-gray-200 text-gray-700 bg-transparent hover:bg-gray-100 rounded-none flex-shrink-0"
            >
              {city} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[150px]">
            <DropdownMenuItem onClick={() => setCity("Dubai")}>Dubai</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCity("Abu Dhabi")}>Abu Dhabi</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCity("Sharjah")}>Sharjah</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCity("Ajman")}>Ajman</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Type Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-14 px-4 border-l border-gray-200 text-gray-700 bg-transparent hover:bg-gray-100 rounded-none flex-shrink-0"
            >
              {type} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[150px]">
            <DropdownMenuItem onClick={() => setType("Apartment")}>Apartment</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setType("Villa")}>Villa</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setType("Townhouse")}>Townhouse</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setType("Penthouse")}>Penthouse</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Bedrooms Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-14 px-4 border-l border-gray-200 text-gray-700 bg-transparent hover:bg-gray-100 rounded-none flex-shrink-0"
            >
              {bedrooms} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[150px]">
            <DropdownMenuItem onClick={() => setBedrooms("Studio")}>Studio</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setBedrooms("1")}>1 Bedroom</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setBedrooms("2")}>2 Bedrooms</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setBedrooms("3")}>3 Bedrooms</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setBedrooms("4+")}>4+ Bedrooms</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Price Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-14 px-4 border-l border-gray-200 text-gray-700 bg-transparent hover:bg-gray-100 rounded-none flex-shrink-0"
            >
              {price} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            <DropdownMenuItem onClick={() => setPrice("Under AED 500K")}>Under AED 500K</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPrice("AED 500K - 1M")}>AED 500K - 1M</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPrice("AED 1M - 2M")}>AED 1M - 2M</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPrice("AED 2M - 5M")}>AED 2M - 5M</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPrice("AED 5M+")}>AED 5M+</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Search Button */}
        <Button type="submit" className="h-14 px-6 bg-black/90 hover:bg-black/80 text-white rounded-none flex-shrink-0">
          <Search className="h-5 w-5" />
          <span className="sr-only md:not-sr-only md:ml-2">Search</span>
        </Button>
      </form>
    </div>
  )
}
