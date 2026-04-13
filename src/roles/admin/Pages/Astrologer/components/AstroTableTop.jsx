import CustomDropdown from '@/common/components/CustomDropdown';
import SearchField from '@/common/components/SearchField';
import FilterButton from '@/roles/admin/components/Buttons/FilterButton';
import React, { useState } from 'react'


const AstroTableTop = () => {
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedFilter, setSelectedFilter] = useState('');

    const filters = [
        { label: "High Spending", value: "high_spending" },
        { label: "Top Rating", value: "top_rating" },
        { label: "Low Earnings", value: "low_earnings" },
        { label: "High price / min", value: "high_price" },
        { label: "Clear", value: "" }
    ];
    const options = [
        { label: "All Status", value: "all" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
        { label: "Suspended", value: "Suspended" }
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

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between md:px-5 py-3">
                <div className="flex items-start md:items-center gap-5 md:w-[50%] py-4 md:p-4">
                    <SearchField
                        placeholder="Search users"
                        className="min-w-[200px] md:min-w-[300px] py-2"
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

                <div className="flex md:items-center gap-2 md:gap-5">
                    <div className=" border border-border-line rounded-md">
                        <CustomDropdown
                            options={categoryList}
                            className="py-2 px-4 md:px-8"
                            value={selectedCategory}
                            onChange={setSelectedCategory}
                            placeholder="Select Language"
                        />


                    </div>
                    <div className=" border border-border-line rounded-md">
                        <CustomDropdown
                            options={options}
                            className="py-2 px-4 md:px-8"
                            value={selectedStatus}
                            onChange={setSelectedStatus}
                            placeholder="Select Language"
                        />


                    </div>
                </div>


            </div>
        </div>
    )
}

export default AstroTableTop
