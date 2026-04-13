import React from "react";
import {
    Wallet,
    IndianRupee,
    Briefcase,
    Coins,
    TrendingUp,
    TrendingDown,
} from "lucide-react";
import upArrow from '@/assets/admin-assets/graph_upArrow.svg';
import downArrow from '@/assets/admin-assets/graph_downArrow.svg';

const RevenueHead = () => {
    return (
        <div className="rounded-xl p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4">

                {/* Wallet Sales */}
                <div className="bg-white rounded-xl p-4 flex flex-col items-center lg:items-start gap-3 shadow-card">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#F9EECA]">
                            <Wallet className="text-[#B88D00]" size={24} />
                        </div>
                        <p className="text-[#565656] font-urbanist text-base font-semibold">
                            Wallet Sales
                        </p>
                    </div>

                    <p className="text-black font-urbanist text-[28px] font-semibold">
                        ₹53,477
                    </p>

                    <div className="flex items-center gap-1 text-xs">
                        <span className="font-medium flex items-center gap-2 text-[#16A34A]">
                            <img src={upArrow} alt="" /> 12%
                        </span>
                        <span className="text-[#484848] font-urbanist text-xs font-medium">
                            Increase than last month
                        </span>
                    </div>
                </div>

                {/* Margin Earnings */}
                <div className="bg-white rounded-xl p-4 flex flex-col items-center lg:items-start gap-3 shadow-card">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#E8F0FF]">
                            <IndianRupee className="text-[#2563EB]" size={24} />
                        </div>
                        <p className="text-[#565656] font-urbanist text-base font-semibold">
                            Margin Earnings
                        </p>
                    </div>

                    <p className="text-black font-urbanist text-[28px] font-semibold">
                        ₹47,890
                    </p>

                    <div className="flex items-center gap-1 text-xs">
                        <span className="font-medium flex items-center gap-2 text-[#16A34A]">
                            <TrendingUp size={24} /> 8%
                        </span>
                        <span className="text-[#484848] font-urbanist text-xs font-medium">
                            Increase than last month
                        </span>
                    </div>
                </div>

                {/* Onboarding Fees */}
                <div className="bg-white rounded-xl p-4 flex flex-col items-center lg:items-start gap-3 shadow-card">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#FFF1F2]">
                            <Briefcase className="text-[#DC2626]" size={18} />
                        </div>
                        <p className="text-[#565656] font-urbanist text-base font-semibold">
                            Onboarding Fees
                        </p>
                    </div>

                    <p className="text-black font-urbanist text-[28px] font-semibold">
                        ₹15,600
                    </p>

                    <div className="flex items-center gap-1 text-xs">
                        <span className="font-medium flex items-center gap-2 text-[#DC2626]">
                            <TrendingDown size={24} /> 5%
                        </span>
                        <span className="text-[#484848] font-urbanist text-xs font-medium">
                            Decrease than last month
                        </span>
                    </div>
                </div>

                {/* Total Agora Cost */}
                <div className="bg-white rounded-xl p-4 flex flex-col items-center lg:items-start gap-3 shadow-card">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#F3E8FF]">
                            <Coins className="text-[#9333EA]" size={18} />
                        </div>
                        <p className="text-[#565656] font-urbanist text-base font-semibold">
                            Total Agora Cost
                        </p>
                    </div>

                    <p className="text-black font-urbanist text-[28px] font-semibold">
                        ₹62,300
                    </p>

                    <div className="flex items-center gap-1 text-xs">
                        <span className="font-medium flex items-center gap-2 text-[#16A34A]">
                            <TrendingUp size={24} /> 15%
                        </span>
                        <span className="text-[#484848] font-urbanist text-xs font-medium">
                            Increase than last month
                        </span>
                    </div>
                </div>

                {/* Net Profit */}
                <div className="bg-white rounded-xl p-4 flex flex-col items-center lg:items-start gap-3 shadow-card">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#E8F8F0]">
                            <TrendingUp className="text-[#16A34A]" size={18} />
                        </div>
                        <p className="text-[#565656] font-urbanist text-base font-semibold">
                            Net Profit
                        </p>
                    </div>

                    <p className="text-black font-urbanist text-[28px] font-semibold">
                        ₹22,150
                    </p>

                    <div className="flex items-center gap-3 text-xs">
                        <span className="font-medium flex items-center gap-2  text-[#16A34A]">
                            <TrendingUp size={24} />
                        </span>
                        <span className="text-[#484848] font-urbanist text-xs font-medium">
                            No change from last month
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RevenueHead;