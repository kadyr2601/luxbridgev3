"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {ChevronRight, Menu, MessageSquare, Phone, PhoneCall, X} from "lucide-react" // Changed Phone to MessageSquare

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/properties", label: "Properties" },
  { href: "/blog", label: "Our Blog" },
  // { href: "#", label: "Our Services" },
  { href: "/contact", label: "Contacts" },
]

export function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false)

  // Construct WhatsApp link (ensure number format is correct for wa.me)
  const whatsappNumber = "97165309883" // Replace with actual number if different, without '+' or spaces
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <header className="bg-transparent text-white relative z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">

          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Luxbridge Logo Graphic" width={200} height={50} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2 xl:space-x-3 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-[10px] xl:text-xs uppercase font-medium tracking-wider hover:text-gray-300 transition-colors px-1.5 py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-2">
            <div className="bg-white/20 rounded-full p-1.5">
              <Phone className="h-4 w-4 text-white" /> {/* Changed icon */}
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-medium hover:text-gray-300 transition-colors"
            >
              +971 6 530 9883 {/* Display number can remain the same */}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-navbar-blue-gray text-white w-full sm:max-w-sm p-0">
                <SheetHeader className="p-4 border-b border-white/20 flex flex-row justify-between items-center">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsSheetOpen(false)}>
                    <Image src="/luxbridge-logo-graphic.png" alt="Luxbridge Logo Graphic" width={30} height={30} />
                    <div>
                      <span className="block font-serif text-xl font-semibold tracking-wider">LUXBRIDGE</span>
                      <span className="block font-sans text-[0.55rem] font-light uppercase tracking-widest">
                        INTERNATIONAL REALTY
                      </span>
                    </div>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </SheetHeader>
                <nav className="flex flex-col space-y-1 p-4">
                  {navLinks.map((link) => (
                    <SheetClose key={link.label} asChild>
                      <Link
                        href={link.href}
                        className="block py-2.5 px-3 rounded-md font-sans text-sm uppercase font-medium tracking-wider hover:bg-white/10 transition-colors"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <div className="pt-4 mt-4 border-t border-white/20">
                    <div className="flex items-center space-x-3 px-3 py-2">
                      <div className="bg-white/20 rounded-full p-2">
                        <MessageSquare className="h-5 w-5 text-white" /> {/* Changed icon */}
                      </div>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-base font-medium hover:text-gray-300 transition-colors"
                      >
                        +971 6 530 9883 {/* Display number can remain the same */}
                      </a>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
