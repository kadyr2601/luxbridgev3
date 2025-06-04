"use client"
import { useRef } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"


export default function ExperienceSection() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="pt-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
              <span className="text-gold">12 years</span> of Dubai Offplan Real Estate Experience
            </h2>
            <div className="mt-8 w-16 h-1 bg-gold"></div>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-gray-700 leading-relaxed">
              Our managerial team boasts a wealth of experience, determination, and integrity. With extensive experience
              and a track record of success in the real estate and investment field in the UAE, we are dedicated to
              making each transaction a success.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Luxbridge International Realty, we are committed to providing our clients with the best possible
              service and the knowledge and expertise they need to achieve their real estate goals.
            </p>
          </div>
        </div>

        {/* Team Image */}
        <div
          className={`relative overflow-hidden shadow-xl mb-16 transition-all duration-1000 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`} style={{height: "30rem"}}
        >
          <Image
            src="/homeCo.jpg"
            alt="Luxbridge International Realty Team"
            fill={true}
            className="w-full h-auto"
            style={{objectFit: "cover"}}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}
