"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface EnquiryFormSectionProps {
    title?: string
    onSubmit?: (formData: FormData) => void
}

interface FormData {
    fullname: string
    email: string
    contactNumber: string
    country: string
    city: string
    subject: string
    message: string
}

export default function EnquiryFormSection({
                                               title = "Make an enquiry",
                                               onSubmit = (data) => console.log("Form submitted:", data),
                                           }: EnquiryFormSectionProps) {
    const [formData, setFormData] = useState<FormData>({
        fullname: "",
        email: "",
        contactNumber: "",
        country: "",
        city: "",
        subject: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [recaptchaChecked, setRecaptchaChecked] = useState(false)

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!recaptchaChecked) {
            alert("Please complete the reCAPTCHA verification")
            return
        }

        setIsSubmitting(true)
        try {
            await onSubmit(formData)
            // Reset form after successful submission
            setFormData({
                fullname: "",
                email: "",
                contactNumber: "",
                country: "",
                city: "",
                subject: "",
                message: "",
            })
            setRecaptchaChecked(false)
        } catch (error) {
            console.error("Form submission error:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-4">
                <h2
                    className="text-2xl sm:text-3xl text-gray-900 mb-8"
                    style={{
                        fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                        fontWeight: "400",
                        letterSpacing: "0.02em",
                    }}
                >
                    {title}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* First Row - Name, Email, Contact Number */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label htmlFor="fullname" className="block text-sm font-bold text-gray-700 mb-2">
                                Fullname
                            </label>
                            <input
                                type="text"
                                id="fullname"
                                value={formData.fullname}
                                onChange={(e) => handleInputChange("fullname", e.target.value)}
                                placeholder="Please Enter your name here"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                placeholder="Please Enter a valid email address"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="contactNumber" className="block text-sm font-bold text-gray-700 mb-2">
                                Contact Number
                            </label>
                            <input
                                type="tel"
                                id="contactNumber"
                                value={formData.contactNumber}
                                onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                                placeholder="Please Enter your contact number"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                required
                            />
                        </div>
                    </div>

                    {/* Second Row - Country, City, Subject */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label htmlFor="country" className="block text-sm font-bold text-gray-700 mb-2">
                                Country
                            </label>
                            <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                                <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500">
                                    <SelectValue placeholder="United Arab Emirates" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="uae">United Arab Emirates</SelectItem>
                                    <SelectItem value="saudi">Saudi Arabia</SelectItem>
                                    <SelectItem value="qatar">Qatar</SelectItem>
                                    <SelectItem value="kuwait">Kuwait</SelectItem>
                                    <SelectItem value="bahrain">Bahrain</SelectItem>
                                    <SelectItem value="oman">Oman</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-bold text-gray-700 mb-2">
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                value={formData.city}
                                onChange={(e) => handleInputChange("city", e.target.value)}
                                placeholder="Please enter city here"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                value={formData.subject}
                                onChange={(e) => handleInputChange("subject", e.target.value)}
                                placeholder="Email subject here"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                required
                            />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            placeholder="Your message here"
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-vertical"
                            required
                        />
                    </div>

                    {/* reCAPTCHA and Submit */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center ">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="recaptcha"
                                checked={recaptchaChecked}
                                onChange={(e) => setRecaptchaChecked(e.target.checked)}
                                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                            />
                            <label htmlFor="recaptcha" className="ml-2 text-sm text-gray-600">
                                I'm not a robot
                            </label>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting || !recaptchaChecked}
                            className="bg-transparent hover:bg-gray-800 hover:text-white border border-black text-black px-8 py-2 text-sm font-medium tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
