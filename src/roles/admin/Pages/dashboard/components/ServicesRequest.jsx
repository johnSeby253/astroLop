import React, { useState } from 'react'
import { Search, } from "lucide-react";
import FilterButton from '@/roles/admin/components/Buttons/FilterButton';
import pending_Req from '@/assets/admin-assets/dashboard-Icons/dashboard_pndg_Request.svg'
import ScrollText from '@/common/components/ScrollText';
import FormFields from '@/common/components/FormFields';
import SearchField from '@/common/components/SearchField';
import Button from '@/common/components/Button';


const requests = [
    {
        id: "SR-132455",
        name: "Anika Verma",
        location: "Kochi, Kakkanad",
        service: "Griha pravesh pooja",
        date: "22 March 2026",
        budget: "₹3000",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: "SR-132456",
        name: "Rajesh Pillai",
        location: "Mysuru,Lakshmipuram",
        service: "Housewarming ",
        date: "5 April 2026",
        budget: "₹2500",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        id: "SR-132457",
        name: "Sita Iyer",
        location: "Pune, Kalyaninaga Kalyaninaga Kalyaninaga Kalyaninaga Kalyaninaga    ",
        service: "Vastu consultation",
        date: "15 April 2026",
        budget: "₹4000",
        image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
        id: "SR-132458",
        name: "Vikram Singh",
        location: "Delhi, Noida",
        service: "Ritual for new office",
        date: "30 April 2026",
        budget: "₹5000",
        image: "https://randomuser.me/api/portraits/men/47.jpg",
    },
];




const ServicesRequest = () => {
    const [selectedFilter, setSelectedFilter] = useState('');

    const filters = [
        { label: "High Spending", value: "high_spending" },
        { label: "Top Rating", value: "top_rating" },
        { label: "Low Earnings", value: "low_earnings" },
        { label: "High price / min", value: "high_price" },
        { label: "Clear", value: "" }
    ];
    return (
        <div className="bg-white rounded-2xl shadow-card p-6 w-full">

            {/* Header */}
            <div className="flex flex-col gap-4 items-start lg:flex-row lg:justify-between lg:items-center mb-6">
                <div className="flex items-center gap-3">
                    <img src={pending_Req} className={"rounded-lg p-2 bg-[#D8B9FF]"} alt="icon" />
                    <h2 className="text-lg font-semibold text-Light-text">
                        Assign Service Request
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-3">

                    <div className=" flex items-center gap-4">
                        {/* Search */}
                        <SearchField
                            placeholder="Search users"
                            className=" "
                        />
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

                    {/* Show all */}
                    <button className="border  border-border-line  text-Input-text rounded-md px-4 py-1 text-sm">
                        Show all
                    </button>
                </div>
            </div>

            {/* List */}
            {/* Horizontal Scroll Container */}
            <div className="overflow-x-auto">
                <div className="flex flex-col gap-4">

                    {requests.map((req, index) => (
                        <div
                            key={index}
                            className="  border rounded-xl p-4 hover:shadow-sm transition"
                        >

                            <ScrollText>
                                <div className="w-full flex items-center justify-evenly  gap-3 -400 ">
                                    {/* Profile + Request */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={req.image}
                                            alt={req.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />

                                        <div className='w-37.5 lg:w-25'>

                                            <p className="text-sm font-semibold text-Dark-text">
                                                Request ID
                                            </p>
                                            <p className="text-xs text-gray-500">{req.id}</p>
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <div className=" lg:w-30 bg">
                                        <ScrollText>
                                            <p className="font-semibold text-gray-700">{req.name}</p>
                                            <p className="text-xs text-gray-500">{req.location}</p>
                                        </ScrollText>

                                    </div>

                                    {/* Service */}
                                    <div className="lg:w-37.5">
                                        <ScrollText>
                                            <p className="font-semibold text-gray-700">{req.service}</p>
                                            <p className="text-xs text-gray-500">{req.date}</p>
                                        </ScrollText>

                                    </div>

                                    {/* Budget */}
                                    <div className="border border-[#CCCCCC] rounded-lg px-4 py-1 text-sm text-gray-600">
                                        Budget <br />{req.budget}
                                    </div>

                                    {/* Button */}
                                    <Button
                                        type="submit"
                                        variant="tableButton">
                                        Assign expert
                                    </Button>
                                </div>

                            </ScrollText>



                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default ServicesRequest
