"use client"

export function ProjectOverviewSection() {
    return (
        <section id="project-overview" className="py-16 bg-white">
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua.
                                </p>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    officia deserunt mollit anim id est laborum.
                                </p>

                                <p>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function PaymentPlanSection() {
    return (
        <section id="payment-plan" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-serif font-light text-gray-900 mb-8">Payment Plan</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Down Payment</h3>
                        <p className="text-3xl font-bold text-gray-900 mb-2">20%</p>
                        <p className="text-gray-600">Upon booking</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">During Construction</h3>
                        <p className="text-3xl font-bold text-gray-900 mb-2">60%</p>
                        <p className="text-gray-600">Flexible installments</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">On Handover</h3>
                        <p className="text-3xl font-bold text-gray-900 mb-2">20%</p>
                        <p className="text-gray-600">Final payment</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function LifestyleSection() {
    return (
        <section id="lifestyle" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-serif font-light text-gray-900 mb-8">Lifestyle</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {["Wellness Center", "Fine Dining", "Recreation Areas", "Shopping", "Entertainment", "Community Events"].map(
                        (item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                                <h3 className="text-lg font-medium text-gray-900">{item}</h3>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    )
}

export function FeaturesAmenitiesSection() {
    return (
        <section id="features-amenities" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-serif font-light text-gray-900 mb-8">Features and Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Premium Features</h3>
                        <ul className="space-y-3">
                            {[
                                "Smart Home Technology",
                                "Premium Finishes",
                                "Floor-to-Ceiling Windows",
                                "Private Balconies",
                                "Built-in Storage",
                            ].map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Community Amenities</h3>
                        <ul className="space-y-3">
                            {["Swimming Pool", "Fitness Center", "Landscaped Gardens", "Children's Play Area", "24/7 Security"].map(
                                (amenity, index) => (
                                    <li key={index} className="flex items-center">
                                        <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                                        <span className="text-gray-700">{amenity}</span>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function LocalCommunitySection() {
    return (
        <section id="local-community" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-serif font-light text-gray-900 mb-8">Local Community</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Located in the heart of a vibrant community, residents enjoy easy access to schools, healthcare
                            facilities, shopping centers, and recreational areas.
                        </p>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Schools</span>
                                <span className="font-medium">5 min drive</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Shopping Mall</span>
                                <span className="font-medium">3 min drive</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Hospital</span>
                                <span className="font-medium">7 min drive</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Metro Station</span>
                                <span className="font-medium">10 min walk</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Community Map</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function LocationSection() {
    return (
        <section id="location" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-serif font-light text-gray-900 mb-8">Location</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Prime Location Benefits</h3>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                                <span className="text-gray-700">Central business district access</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                                <span className="text-gray-700">Major highway connectivity</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                                <span className="text-gray-700">Public transportation links</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                                <span className="text-gray-700">International airport proximity</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Location Map</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
