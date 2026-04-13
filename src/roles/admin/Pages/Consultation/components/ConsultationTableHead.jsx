import Button from '@/common/components/Button'
import CustomDropdown from '@/common/components/CustomDropdown'
import SearchField from '@/common/components/SearchField'
import DateFilter from '@/roles/admin/components/Buttons/DateFilter'
import React, { useState } from 'react'

const ConsultationTableHead = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectStatus,setSelectStatus]=useState('all');

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

    const options = [
        { label: "All Status", value: "all" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
        { label: "Suspended", value: "Suspended" }
    ];


    return (
        <div>
            <div className="flex flex-col gap-3 2xl:gap-0 2xl:flex-row 2xl:items-center justify-between 2xl:px-5">
                <div className="flex items-center gap-3">
                    <SearchField
                        placeholder="Search users"
                        className="2xl:min-w-[300px] py-2"
                    />
                    <DateFilter
                        onChange={(data) => console.log("Filter:", data)}
                    />
                </div>

                <div className="flex flex-col items-start 2xl:flex-row 2xl:items-center gap-3">
                    <div className=" border border-border-line rounded-md">
                        <CustomDropdown
                            options={categoryList}
                            className="py-2 px-8"
                            value={selectedCategory}
                            onChange={setSelectedCategory}
                            placeholder="Select Language"
                        />
                    </div>


                    <div className=" border border-border-line rounded-md">
                        <CustomDropdown
                            options={options}
                            className="py-2 px-8"
                            value={selectStatus}
                            onChange={setSelectStatus}
                            placeholder="Select Status"
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ConsultationTableHead
