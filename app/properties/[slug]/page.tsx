import { PropertyBanner } from "@/components/property-banner"
import { notFound } from "next/navigation"
import PropertyDetailsHeader from "@/components/property-details-header";
import PropertyDetailsSection from "@/components/property-details-section";
import LocationSectionFallback from "@/components/location-section";
import AboutAreaSection from "@/components/about-area-section";
import EnquiryFormSection from "@/components/enquiry-form-section";
import SimilarPropertiesSection from "@/components/similar-properties-section";
import {getProperties} from "@/lib/PropertiesData";

interface PropertyPageProps {
    params: { slug: string }
}

export async function generateMetadata({ params }: PropertyPageProps) {
    const properties = await getProperties()
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

export default async function PropertyPage({ params }: PropertyPageProps) {
    const properties = await getProperties()
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
        </div>
    )
}
