"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react"

export default function Footer() {
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-black/95 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <Image
              src="/logo.png"
              alt="Luxbridge International Realty"
              width={180}
              height={45}
              className="mb-6"
            />
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Luxbridge International Realty connects you to Dubai's most prestigious properties, offering unparalleled
              access to elegant residences and architectural masterpieces.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-montserrat">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/real-estate" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Properties */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-montserrat">Properties</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/real-estate?type=apartment"
                  className="text-gray-300 hover:text-gold transition-colors text-sm"
                >
                  Apartments
                </Link>
              </li>
              <li>
                <Link
                  href="/real-estate?type=villa"
                  className="text-gray-300 hover:text-gold transition-colors text-sm"
                >
                  Villas
                </Link>
              </li>
              <li>
                <Link
                  href="/real-estate?type=penthouse"
                  className="text-gray-300 hover:text-gold transition-colors text-sm"
                >
                  Penthouses
                </Link>
              </li>
              <li>
                <Link
                  href="/real-estate?type=townhouse"
                  className="text-gray-300 hover:text-gold transition-colors text-sm"
                >
                  Townhouses
                </Link>
              </li>
              <li>
                <Link
                  href="/real-estate?type=duplex"
                  className="text-gray-300 hover:text-gold transition-colors text-sm"
                >
                  Duplexes
                </Link>
              </li>
              <li>
                <Link
                  href="/real-estate?status=offplan"
                  className="text-gray-300 hover:text-gold transition-colors text-sm"
                >
                  Off-Plan Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-montserrat">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Office 1801, Marina Plaza, Dubai Marina, Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <a href="tel:+97144547817" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  +971 4 454 7817
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@luxbridgerealty.com"
                  className="text-gray-300 hover:text-gold transition-colors text-sm"
                >
                  info@luxbridgerealty.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Luxbridge International Realty. All rights reserved.
          </p>
          <div className="flex items-center">
            <Link href="/terms-conditions" className="text-gray-400 hover:text-gold text-sm mr-6">
              Developed by Kadyr.dev
            </Link>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white hover:bg-gold-dark transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
