import React, { useState } from 'react'
import DateFilter from '@/roles/admin/components/Buttons/DateFilter'
import SearchField from '@/common/components/SearchField'
import { MessageSquare, Phone } from 'lucide-react'
import ExpertConsultationCard from './components/ExpertConsultationCard'

const ExpertConsultationHistory = () => {
    const [activeTab, setActiveTab] = useState("all_expert_consultation")

    const tabs = [
        { label: "All", color: "#42147B", value: "all_expert_consultation" },  // Astro-primary
        { label: "Vastu", color: "#42147B", value: "vastu" }, // Amber
        { label: "Pooja", color: "#42147B", value: "pooja" }, // Amber
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
                                key={tab.value}
                                onClick={() => setActiveTab(tab.value)}
                                style={{
                                    backgroundColor: activeTab === tab.value ? tab.color : "#FFFFFF",
                                    color: activeTab === tab.value ? "#FFFFFF" : "#7B7B7B",
                                }}
                                className="flex items-center justify-center gap-2 py-2 px-4 rounded-2xl text-base font-medium font-['Inter'] flex-1 min-w-[72px] border transition-colors duration-200
              border-[#7B7B7B] hover:opacity-90"
                            >
                                {tab.value === "vastu" ? (
                                    <Phone size={16} color={activeTab === "vastu" ? "#FFFFFF" : "#DA7100"} />
                                ) : tab.label === "pooja" ? (
                                    <MessageSquare size={16} color={activeTab === "pooja" ? "#FFFFFF" : "#DA7100"} />
                                ) : null}
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>


            <div className="py-3">
                <div className="py-3">
                    <ExpertConsultationCard tabValue={activeTab} />
                </div>
            </div>
        </div>
    )
}

export default ExpertConsultationHistory
