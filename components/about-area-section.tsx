"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface AboutAreaSectionProps {
    title?: string
    paragraphs?: string[]
    backgroundImage?: string
    buttonText?: string
    onLearnMore?: () => void
}

export default function AboutAreaSection({
                                             title = "About Palm Jumeirah",
                                             paragraphs = [
                                                 "Nestled in the heart of the area commonly known as 'New Dubai', Al Barari is a neighborhood like no other in the city. It is perhaps Dubai's greenest area, in both a metaphorical and literal sense, with sixty percent of the 18.42 million square foot development dedicated to greenery, open areas, landscaped gardens and tranquil lakes.",
                                                 "Al Barari promotes serenity and a relaxed lifestyle with its exclusive gated community of 216 villas, known as The Residences.",
                                             ],
                                             backgroundImage = "/abudabi.avif",
                                             buttonText = "LEARN MORE",
                                             onLearnMore = () => console.log("Learn more clicked"),
                                         }: AboutAreaSectionProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    }

    const textVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

    return (
        <section className="relative min-h-[600px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={backgroundImage || "/placeholder.svg"}
                    alt="Aerial view of Palm Jumeirah area"
                    className="w-full h-full object-cover"
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/50 to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full min-h-[600px] flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex justify-end"
                    >
                        <div className="max-w-lg lg:max-w-xl text-center">
                            <motion.h2
                                variants={textVariants}
                                className="text-3xl sm:text-4xl lg:text-5xl text-white mb-8 leading-tight"
                                style={{
                                    fontFamily: "'Times New Roman', 'Georgia', 'Playfair Display', serif",
                                    fontWeight: "300",
                                    letterSpacing: "0.02em",
                                }}
                            >
                                {title}
                            </motion.h2>

                            <div className="space-y-6 mb-8">
                                {paragraphs.map((paragraph, index) => (
                                    <motion.p
                                        key={index}
                                        variants={textVariants}
                                        className="text-white text-base sm:text-lg leading-relaxed"
                                    >
                                        {paragraph}
                                    </motion.p>
                                ))}
                            </div>

                            <motion.div variants={textVariants}>
                                <button
                                    onClick={onLearnMore}
                                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 px-8 py-3 text-sm font-medium tracking-wider"
                                >
                                    {buttonText}
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
