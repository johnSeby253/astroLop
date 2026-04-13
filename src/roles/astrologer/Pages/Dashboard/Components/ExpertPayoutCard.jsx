import React from 'react'
import Button from "@/common/components/Button";
import { ClipboardClock } from "lucide-react";

const ExpertPayoutCard = () => {
    return (
        <div className="w-full h-full bg-[#FFFFFF] rounded-xl shadow-[0px_4px_10.5px_rgba(58,58,58,0.27)] p-5 flex flex-col gap-5">

            {/* Header */}
            <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full border border-[#DAD9D9] flex items-center justify-center">
                    <ClipboardClock size={18} className="text-[#42147B]" />
                </div>
                <h2 className="text-[#555555] font-medium text-[16px] font-inter">
                    Payouts
                </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">

       

                {/* Pending Payout */}
                <div className="border border-[#BCBABA] rounded-xl p-4 flex flex-col items-center justify-center gap-2">
                    <p className="text-[#555555] font-inter text-sm font-medium text-center">
                        Pending Payout
                    </p>
                    <h3 className="text-2xl font-semibold font-urbanist text-[#000000]">
                        ₹6,849
                    </h3>
                </div>

                {/* Available to Withdraw */}
                <div className="border border-[#BCBABA] rounded-xl p-4 flex flex-col items-center justify-center gap-3">
                    <p className="text-[#555555] text-sm font-inter font-medium text-center">
                        Available to Withdraw
                    </p>
                    <h3 className="text-2xl font-semibold font-urbanist text-[#000000]">
                        ₹3,849
                    </h3>
                    <Button
                        type="submit"
                        size="md"
                        variant="primary">
                        Withdraw Fund
                    </Button>



                </div>

            </div>
        </div>
    )
}

export default ExpertPayoutCard
