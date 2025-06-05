"use client"

import { CheckCircle2} from "lucide-react";
import LocationSections from "@/components/location-section";


export function ProjectOverviewSection() {
    return (
        <section id="project-overview" className="pt-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                    {/* Image - takes up 50% */}
                    <div>
                        <div className="relative h-96 lg:h-[400px] overflow-hidden">
                            <img
                                src="/abu.webp"
                                alt="Luxury residential development with traditional architecture and landscaping"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content - takes up 50% with background */}
                    <div className="bg-gray-100 h-96 lg:h-[400px] flex flex-col justify-center overflow-hidden">
                        <div className="p-8 lg:p-12">
                            <h2
                                className="text-3xl sm:text-4xl text-gray-900 mb-8"
                                style={{
                                    fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                                    fontWeight: "400",
                                    letterSpacing: "0.02em",
                                }}
                            >
                                Property description
                            </h2>

                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                    dolore magna aliqua.
                                </p>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut
                                    officia deserunt mollit anim id est laborum.
                                </p>

                                <p>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

interface PaymentPlanProps {
    title?: string
    installments?: Array<{
        number: string
        percentage: string
        date: string
    }>
}

export function PaymentPlanSection({
                                       title = "Payment plan",
                                       installments = [
                                           {
                                               number: "DOWN PAYMENT",
                                               percentage: "10%",
                                               date: "ON BOOKING (SEPTEMBER 2022)",
                                           },
                                           {
                                               number: "2ND INSTALMENT",
                                               percentage: "10%",
                                               date: "OCTOBER 2022",
                                           },
                                           {
                                               number: "3RD INSTALMENT",
                                               percentage: "10%",
                                               date: "OCTOBER 2022",
                                           },
                                           {
                                               number: "4TH INSTALMENT",
                                               percentage: "10%",
                                               date: "OCTOBER 2022",
                                           },
                                           {
                                               number: "5TH INSTALMENT",
                                               percentage: "10%",
                                               date: "OCTOBER 2022",
                                           },
                                           {
                                               number: "6TH INSTALMENT",
                                               percentage: "20%",
                                               date: "OCTOBER 2022",
                                           },
                                           {
                                               number: "7TH INSTALMENT",
                                               percentage: "30%",
                                               date: "UPON 100% CONSTRUCTION COMPLETION",
                                           },
                                       ],
                                   }: PaymentPlanProps) {

    return (
        <section id="payment-plan" className="pt-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-4">
                <h2
                    className="text-4xl sm:text-5xl text-gray-800 mb-12 sm:mb-16"
                    style={{
                        fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                        fontWeight: "300",
                        letterSpacing: "0.02em",
                    }}
                >
                    {title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 text-center">
                    {installments.map((installment, index) => (
                        <div className="bg-black/90 p-6 flex flex-col justify-between aspect-[3/4] sm:aspect-square"
                             key={index}>
                            <div className="text-xs text-white/80 font-medium tracking-wide">{installment.number}</div>
                            <div
                                className="text-5xl sm:text-6xl text-white font-light my-4">{installment.percentage}</div>
                            <div className="text-xs min-h-[4.1em] text-white/80">
                                {installment.date}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


interface LifestyleSectionProps {
    title?: string
    paragraphs?: string[]
    backgroundImage?: string
}

export function LifestyleSection({
                                     title = "Lifestyle",
                                     paragraphs = [
                                         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                     ],
                                     backgroundImage = "/example4.png",
                                 }: LifestyleSectionProps) {
    return (
        <section id="lifestyle" className="relative container h-[400px] md:h-[500px] overflow-hidden mt-16">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={backgroundImage}
                    alt="Family enjoying lifestyle by the beach"
                    className="w-full px-4 h-full object-cover filter grayscale contrast-125 brightness-75"
                />
                <div className="absolute inset-0 bg-black/30 mx-4"/>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-end">
                        {/* Content on the right */}
                        <div className="mr-28 text-white">
                            <h2
                                className="text-4xl mb-8 text-white/90"
                                style={{
                                    fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                                    fontWeight: "300",
                                    letterSpacing: "0.02em",
                                }}
                            >
                                {title}
                            </h2>

                            <div className="space-y-6">
                                {paragraphs.map((paragraph, index) => (
                                    <p className="text-white/90 leading-relaxed text-sm max-w-md" key={index}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export function FeaturesAmenitiesSection() {
    return (
        <section id="features-amenities" className="pt-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

                    {/* Content - takes up 50% with background */}
                    <div className="bg-gray-100 h-96 lg:h-[400px] flex flex-col justify-center overflow-hidden">
                        <div className="p-8 lg:p-12">
                            <h2
                                className="text-3xl sm:text-4xl text-gray-900 mb-8"
                                style={{
                                    fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                                    fontWeight: "400",
                                    letterSpacing: "0.02em",
                                }}
                            >
                                Features & Amenities
                            </h2>

                            <div className="space-y-4 leading-relaxed grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
                                <div className="flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-gray-700 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">Bicon</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-gray-700 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">Borrent pating</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-gray-700 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">Maids room</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-gray-700 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">Private garden</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-gray-700 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">Private swimming pool</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-gray-700 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">Satelite</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-gray-700 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">Study</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-gray-700 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">View of golf co</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image - takes up 50% */}
                    <div>
                        <div className="relative h-96 lg:h-[400px] overflow-hidden">
                            <img
                                src="/abu.webp"
                                alt="Luxury residential development with traditional architecture and landscaping"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function LocalCommunitySection() {
    return (
        <section id="local-community" className="pt-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                    {/* Image - takes up 50% */}
                    <div>
                        <div className="relative h-96 lg:h-[400px] overflow-hidden">
                            <img
                                src="/abu.webp"
                                alt="Luxury residential development with traditional architecture and landscaping"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content - takes up 50% with background */}
                    <div className=" h-96 lg:h-[400px] flex flex-col justify-center overflow-hidden">
                        <div className="p-8 lg:p-12">
                            <h2
                                className="text-3xl sm:text-4xl text-gray-900 mb-8"
                                style={{
                                    fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                                    fontWeight: "400",
                                    letterSpacing: "0.02em",
                                }}
                            >
                                Local Community
                            </h2>

                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <p>
                                    Located in the heart of a vibrant community, residents enjoy easy access to schools,
                                    healthcare
                                    facilities, shopping centers, and recreational areas.
                                </p>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut
                                    officia deserunt mollit anim id est laborum.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function LocationSection() {
    return (
        <section id="location" className={'pt-7'}>
            <LocationSections/>
        </section>
    )
}
