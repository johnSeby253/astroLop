import CustomDropdown from '@/common/components/CustomDropdown';
import SearchField from '@/common/components/SearchField';
import React, { useState } from 'react'

const ServiceExpertHead = () => {
    const [selectStatus, setSelectStatus] = useState('all');


    const options = [
        { label: "Price Range", value: "all" },
        { label: "₹1000    -    ₹2000", value: "1000" },
        { label: "₹2000    -    ₹3000", value: "2000" },
        { label: "₹3000    -    ₹4000", value: "3000" },
        { label: "₹4000    -    ₹5000", value: "4000" },
        { label: "₹5000    -    ₹6000", value: "5000" },

    ];

    return (
        <div>
            <div className="flex flex-col gap-3 2xl:gap-0 2xl:flex-row items-start 2xl:items-center justify-between 2xl:px-5">
                <div className="flex items-center gap-3">
                    <SearchField
                        placeholder="Search users"
                        className="min-w-[300px] py-2"
                    />

                </div>

                <div className="flex items-center gap-3">
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

export default ServiceExpertHead
