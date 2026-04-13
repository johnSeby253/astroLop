
import SearchField from '@/common/components/SearchField'
import DateFilter from '@/roles/admin/components/Buttons/DateFilter'
import React, { useState } from 'react'
import {MessageSquare, Phone } from 'lucide-react'
import ConsultationHistoryCard from './Components/ConsultationHistoryCard'

const ConsultationHistory = () => {
    const [activeTab, setActiveTab] = useState("All")

    const tabs = [
        { label: "All", color: "#42147B" },  // Astro-primary
        { label: "Call", color: "#42147B" }, // Amber
        { label: "Chat", color: "#42147B" }, // Amber
    ]

    return (
        <div className="">
            <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-between lg:px-5 shadow-card p-3 rounded-lg">
                {/* Search + Date Filter */}
                <div className="flex w-full md:w-[50%] items-center gap-3">
                    <SearchField
                        placeholder="Search users"
                        className="sm:w-[200px] lg:min-w-[95%] py-2"
                    />
                    <DateFilter />
                </div>

                {/* Tabs */}
                <div className="w-full md:w-[50%] flex justify-center">
                    <div className="flex flex-wrap w-full max-w-sm gap-2 bg-white px-2 py-2 rounded-2xl shadow-[0px_1px_6.3px_0px_rgba(0,0,0,0.23)]">
                        {tabs.map((tab) => (
                            <button
                                key={tab.label}
                                onClick={() => setActiveTab(tab.label)}
                                style={{
                                    backgroundColor: activeTab === tab.label ? tab.color : "#FFFFFF",
                                    color: activeTab === tab.label ? "#FFFFFF" : "#7B7B7B",
                                }}
                                className="flex items-center justify-center gap-2 py-2 px-4 rounded-2xl text-base font-medium font-['Inter'] flex-1 min-w-[72px] border transition-colors duration-200
              border-[#7B7B7B] hover:opacity-90"
                            >
                                {tab.label === "Call" ? (
                                    <Phone size={16} color={activeTab === "Call" ? "#FFFFFF" : "#DA7100"} />
                                ) : tab.label === "Chat" ? (
                                    <MessageSquare size={16} color={activeTab === "Chat" ? "#FFFFFF" : "#DA7100"} />
                                ) : null}
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>


            <div className="py-3">
                <div className="py-3">
                    <ConsultationHistoryCard tabValue={activeTab} />
                </div>
            </div>
        </div>

    )
}

export default ConsultationHistory