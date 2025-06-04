import { PropertyBanner } from "@/components/property-banner"
import { notFound } from "next/navigation"
import PropertyDetailsHeader from "@/components/property-details-header";
import PropertyDetailsSection from "@/components/property-details-section";
import LocationSectionFallback from "@/components/location-section";
import AboutAreaSection from "@/components/about-area-section";
import EnquiryFormSection from "@/components/enquiry-form-section";
import SimilarPropertiesSection from "@/components/similar-properties-section";

// Mock property data - in real app this would come from a database
const properties = [
    {
        id: 1,
        slug: "opulent-acacia-villas-desert",
        title: "Opulent Acacia villas At Desert",
        location: "Leaf 4 Al Barari",
        price: 56000,
        bedrooms: 6,
        bathrooms: 5,
        area: 11000,
        images: [
            "/example1.png",
            "/example2.png",
            "/example3.png",
        ],
        description:
            "Experience luxury living at its finest in this stunning villa located in the prestigious Al Barari community.",
        features: ["Private Pool", "Garden View", "Maid's Room", "Study Room", "Balcony"],
        amenities: ["Gym", "Swimming Pool", "Kids Play Area", "BBQ Area", "Security"],
    },
    {
        id: 2,
        slug: "luxury-penthouse-downtown",
        title: "Luxury Penthouse Downtown",
        location: "Business Bay",
        price: 95000,
        bedrooms: 5,
        bathrooms: 4,
        area: 8500,
        images: [
            "/example1.png",
            "/example2.png",
            "/example3.png",
        ],
        description: "Stunning penthouse with panoramic city views in the heart of Business Bay.",
        features: ["City View", "Private Terrace", "Smart Home", "Premium Finishes"],
        amenities: ["Concierge", "Valet Parking", "Infinity Pool", "Spa", "Business Center"],
    },
]

interface PropertyPageProps {
    params: { slug: string }
}

export async function generateStaticParams() {
    return properties.map((property) => ({
        slug: property.slug,
    }))
}

export async function generateMetadata({ params }: PropertyPageProps) {
    const property = properties.find((p) => p.slug === params.slug)

    if (!property) {
        return {
            title: "Property Not Found",
        }
    }

    return {
        title: `${property.title} - Luxbridge International Realty`,
        description: property.description,
    }
}

export default function PropertyPage({ params }: PropertyPageProps) {
    const property = properties.find((p) => p.slug === params.slug)

    if (!property) {
        notFound()
    }

    return (
        <div className="min-h-screen">
            <PropertyBanner property={property} />
            <PropertyDetailsHeader/>
            <PropertyDetailsSection/>
            <LocationSectionFallback/>
            <AboutAreaSection/>
            <EnquiryFormSection/>
            <SimilarPropertiesSection/>

            {/* Property Details Content */}
            <div className="container mx-auto px-4 py-16">

            </div>
        </div>
    )
}
