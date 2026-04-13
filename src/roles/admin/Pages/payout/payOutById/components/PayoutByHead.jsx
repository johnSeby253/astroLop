import React from 'react';
import profilePic from '@/assets/admin-assets/loginicon.webp';
import { Wallet, Calendar } from 'lucide-react';
import star from '@/assets/admin-assets/tabler_star.svg';
import SpecializeTags from './SpecializeTags';


const PayoutByHead = () => {
    const payoutData = {
        id: "AS23141",
        name: "Dr. Aditi Sharma",
        profilePic: profilePic,
        rating: 4.9,
        location: "Kochi, Kerala",
        status: "Available",

        specialize: [
            "Psychic Readings",
            "Tarot Reading",
            "Love Advice"
        ],

        totalPaid: 45300,
        lastPayoutDate: "Feb 12 2025"
    };
    return (
        <div className="bg-white rounded-xl shadow-card p-5 flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-between w-full">

            {/* LEFT SECTION */}
            <div className="flex flex-col sm:flex-row items-center gap-4">

                {/* Profile Image */}
                <img
                    src={profilePic}
                    alt="profile"
                    className="w-24 h-24 rounded-full object-cover"
                />

                {/* Details */}
                <div className="flex flex-col items-center sm:items-start gap-2">

                    {/* Name + ID */}
                    <div className="flex items-center gap-3">
                        <p className="text-[#090909] text-[16px] font-semibold">
                            Dr. Aditi Sharma
                        </p>
                        <span className="text-[#090909] text-[12px] font-medium">
                            ID# AS23141
                        </span>
                    </div>

                    {/* Tags */}
                    <SpecializeTags specialize={payoutData.specialize} />
                    {/* Rating + Location + Status */}
                    <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-[#090909] font-medium">
                            4.9
                            <img src={star} alt="" />
                        </span>

                        <span className="text-[#6B7280]">
                            Kochi, Kerala
                        </span>

                        <span className="px-3 py-1 text-xs rounded-full bg-[#E5FFC5] text-[#086D18]">
                            Available
                        </span>
                    </div>
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">

                {/* Total Paid */}
                <div className="flex flex-col items-center gap-3 border rounded-xl px-5 py-2">
                    <div className="p-2 flex items-center gap-3">
                        <div className=" bg-[#E8F8F0] rounded-lg p-2">
                            <Wallet className="text-[#22A06B] " size={24} />
                        </div>

                        <p className="text-[#090909] font-[Inter] text-[16px] font-semibold leading-[15.733px] tracking-[-0.437px]">Total Paid</p>
                    </div>
                    <div>

                        <p className="text-[#057609] font-[Urbanist] text-[24px] font-semibold">
                            ₹45,300
                        </p>
                    </div>
                </div>

                {/* Last Payout */}


                <div className="flex flex-col items-center gap-3 border rounded-xl px-5 py-2">
                    <div className="p-2 flex items-center gap-3">
                        <div className=" bg-[#DAE8F9] rounded-lg p-2">
                            <Calendar className="text-[#0E529E] " size={24} />
                        </div>

                        <p className="text-[#090909] font-[Inter] text-[16px] font-semibold leading-[15.733px] tracking-[-0.437px]">Last payout date </p>
                    </div>
                    <div>

                        <p className="text-[#00649D] font-[Urbanist] text-[24px] font-semibold">
                            Feb 12 2025
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PayoutByHead;