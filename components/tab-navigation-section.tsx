"use client"

import { useState } from "react"

interface TabNavigationSectionProps {
    onTabChange?: (tabId: string) => void
    defaultTab?: string
}

const tabs = [
    { id: "project-overview", label: "PROJECT OVERVIEW" },
    { id: "payment-plan", label: "PAYMENT PLAN" },
    { id: "lifestyle", label: "LIFESTYLE" },
    { id: "features-amenities", label: "FEATURES AND AMENITIES" },
    { id: "local-community", label: "LOCAL COMMUNITY" },
    { id: "location", label: "LOCATION" },
]

export default function TabNavigationSection({
                                                 onTabChange = (tabId) => console.log(`Switched to tab: ${tabId}`),
                                                 defaultTab = "project-overview",
                                             }: TabNavigationSectionProps) {
    const [activeTab, setActiveTab] = useState(defaultTab)

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId)
        onTabChange(tabId)

        const element = document.getElementById(tabId)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }

    return (
        <section className="w-full bg-white sticky top-0 z-40 mt-10">
            <div className="container mx-auto lg:px-4">
                <div className="flex">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabClick(tab.id)}
                            className={`flex-1 px-2 py-4 text-sm font-medium tracking-wider transition-all duration-300 border-r border-gray-600 last:border-r-0 ${
                                activeTab === tab.id ? "bg-black/80 text-white/70" : "bg-black text-white/80 hover:bg-black/80"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}
