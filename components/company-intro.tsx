export function CompanyIntro() {
    return (
        <section className="relative py-20 md:py-32 bg-black/95 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Company Name */}
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl font-normal text-white mb-8">
                        Luxbridge
                        <br />
                        International Realty
                    </h2>

                    {/* Decorative Line */}
                    <div className="w-24 h-px bg-white mx-auto mb-12"></div>

                    {/* Description Text */}
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                        At Luxbridge International Realty an all comprehensive real estate services company providing our clients
                        with the expertise to match their requirements and devotes its expertise to make each transaction a success.
                        Our team thrive in a collaborative environment in which skill sets, accountability, and open dialogue come
                        together to serve the greater good of the client.
                    </p>
                </div>
            </div>
        </section>
    )
}
