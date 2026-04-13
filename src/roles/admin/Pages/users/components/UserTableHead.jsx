import CustomDropdown from '@/common/components/CustomDropdown';
import SearchField from '@/common/components/SearchField';
import FilterButton from '@/roles/admin/components/Buttons/FilterButton';
import React, { useState } from 'react'


const UserTableHead = () => {
    const [selectedFilter, setSelectedFilter] = useState('')
    const [selected, setSelected] = useState("all");

    const filters = [
        { label: "High Spending", value: "high_spending" },
        { label: "Low Wallet < ₹50", value: "low_wallet_50" },
    ];


    const options = [
        { label: "All Status", value: "all" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
        { label: "Suspended", value: "Suspended" }
    ];

    return (
        <div>
            <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between px-5 py-3">
                <div className="flex  md:items-center gap-5 w-[50%] py-4 md:p-4">
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
                <div className=" border border-border-line rounded-md">
                    <CustomDropdown
                        options={options}
                        className="py-2 px-8"
                        value={selected}
                        onChange={setSelected}
                        placeholder="Select Language"
                    />

                </div>
            </div>
        </div>
    )
}

export default UserTableHead
