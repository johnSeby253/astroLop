import React, { useState } from 'react'
import addUser from "@/assets/admin-assets/addUser-Icon.svg";
import FilterButton from '@/roles/admin/components/Buttons/FilterButton';
import Button from '@/common/components/Button';
import ScrollText from '@/common/components/ScrollText';



const ExpertRequest = () => {
    const [selectedFilter, setSelectedFilter] = useState('');

    const filters = [
        { label: "High Spending", value: "high_spending" },
        { label: "Top Rating", value: "top_rating" },
        { label: "Low Earnings", value: "low_earnings" },
        { label: "High price / min", value: "high_price" },
        { label: "Clear", value: "" }
    ];

    const experts = [
        {
            id: 1,
            name: "Anika Verma",
            service: "Numerology dsfdhgfjhhgjkgkjk.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            id: 2,
            name: "Siddharth Rao",
            service: "Tarot reading",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
        },
        {
            id: 3,
            name: "Priya Desai",
            service: "Palmistry",
            image: "https://randomuser.me/api/portraits/women/46.jpg",
        },
        {
            id: 4,
            name: "Karan Mehta",
            service: "Astrology",
            image: "https://randomuser.me/api/portraits/men/47.jpg",
        },
    ];


    return (
        <div className="bg-white rounded-2xl shadow-card p-6 w-full">

            {/* Header */}
            <div className="flex flex-col items-start gap-3  lg:flex-row  justify-between lg:items-center mb-6  ">

                <div className="flex items-center gap-2">
                    <div className="bg-[#C7DDFF] p-2 rounded-lg">
                        <img src={addUser} alt="expert" className="w-5 h-5" />
                    </div>

                    <h2 className="text-lg font-semibold text-Light-text">
                        New Experts Requests
                    </h2>
                </div>

                <div className="flex lg:flex-row-reverse items-center gap-5">



                    {/* Show all */}
                    <button className="border border-border-line px-5 lg:px-2 py-1 rounded-md text-sm text-Input-text">
                        Show all
                    </button>

                    {/* Filter */}

                    <FilterButton
                        options={filters}
                        className="py-1 px-2"
                        align="start"
                        size={20}
                        // defaultValue="Last 7 Days"
                        onChange={(value) => {
                            setSelectedFilter(value)
                            console.log("Selected filter:", value)
                        }}
                    />


                </div>
            </div>

            {/* Request List */}
            <div className="overflow-x-auto">

                <div className="flex flex-col gap-4">

                    {experts.map((expert) => (
                        <div
                            key={expert.id}
                            className="flex items-center justify-between border rounded-xl p-4 gap-5 hover:shadow-sm transition"
                        >
                            <ScrollText>
                                <div className="w-full flex items-center justify-between  gap-5 lg:gap-3 ">

                                    {/* Profile */}

                                    <img
                                        src={expert.image}
                                        alt={expert.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />




                                    <div className='lg:w-25 w-3xl:w-40 '>
                                        <ScrollText>
                                            <p className="font-semibold text-gray-700">
                                                {expert.name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {expert.service}
                                            </p>

                                        </ScrollText>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-3">

                                        <button className="px-4 py-1 border border-[#CCCCCC] rounded-md text-sm text-gray-600 hover:bg-gray-50">
                                            Deny
                                        </button>

                                        <Button
                                            type="submit"
                                            variant="tableButton">
                                            Approve
                                        </Button>
                                    </div>
                                </div>
                            </ScrollText>


                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}

export default ExpertRequest
