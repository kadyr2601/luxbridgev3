"use client"
import { MapPin, Phone, Instagram, Linkedin, MessageCircle, Mail, MessageCircleHeartIcon } from "lucide-react"

interface ContactInfoSectionProps {
    title?: string
    address?: {
        building: string
        street: string
    }
    contact?: {
        mobile: string
        email: string
    }
    socialLinks?: {
        instagram: string
        linkedin: string
        whatsapp: string
    }
}

export default function ContactInfoSection({
                                               title = "Contact Us",
                                               address = {
                                                   building: "BM Tower, Office 303, 3rd Floor,",
                                                   street: "Al-Ittihad Road, Al Nahda",
                                               },
                                               contact = {
                                                   mobile: "+971 65 566 6721",
                                                   email: "info@luxbridge.com",
                                               },
                                               socialLinks = {
                                                   instagram: "https://instagram.com/luxbridge",
                                                   linkedin: "https://linkedin.com/company/luxbridge",
                                                   whatsapp: "https://wa.me/971655666721",
                                               },
                                           }: ContactInfoSectionProps) {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-32 h-32 bg-black rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-gray-800 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl sm:text-5xl text-gray-900 mb-4"
                        style={{
                            fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                            fontWeight: "400",
                            letterSpacing: "0.02em",
                        }}
                    >
                        {title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-700 mx-auto rounded-full"></div>
                    <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
                        Get in touch with us today. We're here to help you find your perfect property.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Address Card */}
                    <div className="group">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                            {/* Card Background Pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="h-8 w-8 text-white" />
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Our Office</h3>
                                <div className="text-gray-600 leading-relaxed space-y-1">
                                    <p>{address.building}</p>
                                    <p>{address.street}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Card */}
                    <div className="group">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                            {/* Card Background Pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="h-8 w-8 text-white" />
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Call or Email</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Phone className="h-4 w-4 text-gray-400" />
                                        <a href={`tel:${contact.mobile}`} className="text-gray-600 hover:text-gray-900 transition-colors">
                                            {contact.mobile}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="h-4 w-4 text-gray-400" />
                                        <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-gray-900 transition-colors">
                                            {contact.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Card */}
                    <div className="group">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                            {/* Card Background Pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <MessageCircleHeartIcon className="h-8 w-8 text-white" />
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>

                                <div className="flex gap-4">
                                    <a
                                        href={socialLinks.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-black rounded-xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-300"
                                        aria-label="Follow us on Instagram"
                                    >
                                        <Instagram className="h-5 w-5 text-white" />
                                    </a>

                                    <a
                                        href={socialLinks.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-black rounded-xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-300"
                                        aria-label="Follow us on LinkedIn"
                                    >
                                        <Linkedin className="h-5 w-5 text-white" />
                                    </a>

                                    <a
                                        href={socialLinks.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-black rounded-xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-300"
                                        aria-label="Contact us on WhatsApp"
                                    >
                                        <MessageCircle className="h-5 w-5 text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-black text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        Available 24/7 for your inquiries
                    </div>
                </div>
            </div>
        </section>
    )
}
