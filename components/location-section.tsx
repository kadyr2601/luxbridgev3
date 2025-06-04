"use client"

interface LocationSectionProps {
    title?: string
    address?: string
    latitude?: number
    longitude?: number
    zoom?: number
}

export default function LocationSection({
                                            title = "Location",
                                            address = "Palm Jumeirah, Dubai, UAE",
                                            latitude = 25.1124,
                                            longitude = 55.139,
                                            zoom = 12,
                                        }: LocationSectionProps) {
    // Construct Google Maps embed URL
    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1234567890!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA2JzQ0LjQiTiA1NcKwMDgnMjAuNCJF!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae&z=${zoom}`

    // Alternative simpler URL format
    const simpleMapUrl = `https://www.google.com/maps/embed/v1/place?key=&q=${latitude},${longitude}&zoom=${zoom}`

    // Most reliable URL format (using search query)
    const searchMapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`

    return (
        <section className="pt-12 bg-white">
            <div className="w-full">
                <h2
                    className="text-2xl sm:text-3xl text-gray-900 mb-6 px-10"
                    style={{
                        fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                        fontWeight: "400",
                        letterSpacing: "0.02em",
                    }}
                >
                    {title}
                </h2>
                <div className="w-full h-[500px] overflow-hidden shadow-md">
                    <iframe
                        src={searchMapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map showing ${address}`}
                        className="w-full h-full"
                    />
                </div>
            </div>
        </section>
    )
}
