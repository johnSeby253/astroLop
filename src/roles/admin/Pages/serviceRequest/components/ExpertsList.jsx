import CustomDropdown from '@/common/components/CustomDropdown'
import SearchField from '@/common/components/SearchField'
import FilterButton from '@/roles/admin/components/Buttons/FilterButton'
import star from '@/assets/admin-assets/tabler_star.svg';
import React, { useState } from 'react'

const ExpertsList = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedFilter, setSelectedFilter] = useState('');
    const [selectedExpert, setSelectedExpert] = useState(null);


    const filters = [
        { label: "High Spending", value: "high_spending" },
        { label: "Top Rating", value: "top_rating" },
        { label: "Low Earnings", value: "low_earnings" },
        { label: "High price / min", value: "high_price" },
        { label: "Clear", value: "" }
    ];

    const categoryList = [
        { label: "All Categories", value: "all" },
        { label: "Vedic", value: "vedic" },
        { label: "Western Astrology", value: "western_astrologer" },
        { label: "Horary Astrology", value: "horary_astrologer" },
        { label: "Natal Astrologyedic", value: "natal_astrologer" },
        { label: "Mundane Astrology", value: "mundane_astrologer" },
        { label: "Financial Astrology", value: "financial_astrologer" },
        { label: "medical Astrologyedic", value: "medical_astrologer" },
    ];

    const experts = [
        {
            id: 1,
            name: "Dr. Aditi Sharma",
            experience: "15+ Years of experience",
            category: "Psychic Readings",
            rating: 4.9,
            location: "Kochi, Kerala",
            available: true,
            image: "https://placehold.co/100x100"
        },
        {
            id: 2,
            name: "Dr. Rahul Verma",
            experience: "10+ Years of experience",
            category: "Tarot Reading",
            rating: 4.7,
            location: "Bangalore, India",
            available: true,
            image: "https://placehold.co/100x100"
        }
    ];
    return (
        <div>
            <div className="">
                <p className='text-[#2C2C2C] text-[16px] font-semibold font-inter leading-normal py-3'>Assign Expert</p>

                <div className="flex flex-col gap-3 lg:flex-row lg:items-center justify-between p-2">
                    <div className="flex items-center gap-3 w-full lg:w-[50%]">
                        <SearchField
                            placeholder="Search users"
                            className="min-w-[150px] py-2"
                        />
                        {/* Filter */}
                        <FilterButton
                            options={filters}
                            className="py-2 px-4"
                            align="start"
                            size={20}
                            // defaultValue="Last 7 Days"
                            onChange={(value) => {
                                setSelectedFilter(value)
                                console.log("Selected filter:", value)
                            }}
                        />
                    </div>

                    <div className="flex items-center gap-5">
                        <div className=" border border-border-line rounded-md">
                            <CustomDropdown
                                options={categoryList}
                                className="px-4 py-1"
                                value={selectedCategory}
                                onChange={setSelectedCategory}
                                placeholder="Select Language"
                            />


                        </div>
                    </div>


                </div>

                <div className="hidden lg:flex flex-col gap-3 max-h-[300px] overflow-y-auto vertical-scrollbar px-2 py-3">
                    {experts.map((expert) => (
                        <div
                            key={expert.id}
                            className="border border-border-line p-2 rounded-lg flex items-center"
                        >
                            {/* Image */}
                            <img
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                                src={expert.image}
                                alt="doctor"
                            />

                            {/* Content */}
                            <div className="p-3 w-[80%]">
                                {/* Name + Experience */}
                                <div className="flex items-center gap-5">
                                    <h2 className="text-[#090909] text-base font-semibold">
                                        {expert.name}
                                    </h2>
                                    <span className="text-[#090909] text-xs font-medium">
                                        ({expert.experience})
                                    </span>
                                </div>

                                {/* Category + Rating + Status */}
                                <div className="flex items-start justify-between py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="px-2 bg-[#FFEFBE] rounded-md border border-[#D45B06]">
                                            <span className="text-[#C26700] text-sm font-medium">
                                                {expert.category}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <span className="text-sm font-semibold text-[#090909]">
                                                {expert.rating}
                                            </span>
                                            <img src={star} alt="" />
                                        </div>
                                    </div>

                                    {/* Availability */}
                                    <div className="px-3 py-0.5 bg-[#E5FFC5] rounded-full">
                                        <span className="text-[#086D17] text-xs font-medium">
                                            {expert.available ? "Available" : "Offline"}
                                        </span>
                                    </div>
                                </div>

                                {/* Location + Select Button */}
                                <div className="flex items-center justify-between">
                                    <p className="text-[#090909] text-sm font-medium">
                                        {expert.location}
                                    </p>

                                    <button
                                        onClick={() => setSelectedExpert(expert.id)}
                                        className={`px-2 py-1 rounded-lg border text-sm ${selectedExpert === expert.id
                                            ? "bg-[#EEE1FF] border-[#42147B] text-[#42147B]"
                                            : "border-gray-300 text-gray-500"
                                            }`}
                                    >
                                        {selectedExpert === expert.id ? "Selected" : "Select"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:hidden flex flex-col gap-3 max-h-[300px] overflow-y-auto vertical-scrollbar px-2 py-3">
                    {experts.map((expert) => (
                        <div
                            key={expert.id}
                            className="border border-border-line p-2 rounded-lg flex gap-3 items-center"
                        >
                            {/* Image */}
                            <img
                                className="w-14 h-14 rounded-full object-cover"
                                src={expert.image}
                                alt="doctor"
                            />

                            {/* Content */}
                            <div className="flex flex-col flex-1">
                                {/* Name */}
                                <p className="text-[#090909] text-sm font-semibold">
                                    {expert.name}
                                </p>

                                {/* Category + Rating */}
                                <div className="flex items-center gap-2 text-xs text-[#090909]">
                                    <span className='text-[#C26700]'>{expert.category}</span>
                                    <span className="flex items-center gap-1">
                                        {expert.rating}
                                        <img src={star} alt="" className="w-3 h-3" />
                                    </span>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-4 py-1">
                                    <p className="text-xs text-[#090909]">
                                        {expert.location}
                                    </p>
                                    <span className="text-[#086D17] text-xs font-medium">
                                        {expert.available ? "Available" : "Offline"}
                                    </span>
                                </div>

                            </div>

                            {/* Select Button */}
                            <button
                                onClick={() => setSelectedExpert(expert.id)}
                                className={`px-2 py-1 rounded-md border text-xs ${selectedExpert === expert.id
                                    ? "bg-[#EEE1FF] border-[#42147B] text-[#42147B]"
                                    : "border-gray-300 text-gray-500"
                                    }`}
                            >
                                {selectedExpert === expert.id ? "Selected" : "Select"}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="w-full text-center pt-3 pb-1">
                    <button className='border border-border-line rounded-full px-3 text-sm text-[#686565] hover:bg-gray-100'>Show more</button>
                </div>
            </div>

        </div>
    )
}

export default ExpertsList
