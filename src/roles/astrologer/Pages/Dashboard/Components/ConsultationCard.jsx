import { BookOpen, MessageSquare, Phone } from 'lucide-react'
import React from 'react'

const ConsultationCard = () => {
    return (
        <div className="w-full h-full bg-[#FFFFFF] rounded-xl shadow-[0px_4px_10.5px_rgba(58,58,58,0.27)] p-5 flex flex-col gap-4">

            {/* Header */}
            <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full border border-[#DAD9D9] flex items-center justify-center">
                    <BookOpen className="text-[#42147B]" size={18} />
                </div>
                <h2 className="text-[#555555] font-medium text-base">
                    Total Consultation
                </h2>
            </div>

            {/* Cards */}
            <div className="h-full grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Call Consultation */}
                <div className="border h-full border-[#BCBABA] rounded-xl p-4 flex flex-col items-center justify-center gap-2">
                    <div className="flex items-center gap-1 text-[#555555] text-sm font-medium">
                        <Phone size={16} className="text-[#DA7000]" />
                        Call Consultation
                    </div>

                    <div className="text-2xl font-semibold text-[#000000]">
                        256
                    </div>
                </div>

                {/* Chat Consultation */}
                <div className="border h-full border-[#BCBABA] rounded-xl p-4 flex flex-col items-center justify-center gap-2">
                    <div className="flex items-center gap-1 text-[#555555] text-sm font-medium">
                        <MessageSquare size={16} className="text-[#DA7000]" />
                        Chat Consultation
                    </div>

                    <div className="text-2xl font-semibold text-[#000000]">
                        256
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ConsultationCard
