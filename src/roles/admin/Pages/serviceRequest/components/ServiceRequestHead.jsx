import CustomDropdown from '@/common/components/CustomDropdown';
import SearchField from '@/common/components/SearchField';
import React, { useState } from 'react'

const ServiceRequestHead = () => {
    const [selectStatus, setSelectStatus] = useState('all');
    const [selectedService,setSelectedService] = useState('all')


    const options = [
        { label: "All Status", value: "all" },
        { label: "Completed", value: "completed" },
        { label: "Rejected", value: "rejected" },
        { label: "Pending", value: "pending" },
        { label: "Assigined", value: "assigined" },
    ];
    const serviceTypeOptions = [
        { label: "All Service Type", value: "all" },
        { label: "Griha Pravesh Pooja", value: "GrihaPravesh" },
        { label: "Vaastu", value: "vaastu" },
        { label: "Navagraha Pooja", value: "Navagraha" },
        { label: "Pitra Dosh Pooja", value: "Pitra" },

    ]
    return (
        <div>
            <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:items-center justify-between md:px-5">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <SearchField
                        placeholder="Search users"
                        className="min-w-[300px] py-2"
                    />

                    <div className=" border border-border-line rounded-md">
                        <CustomDropdown
                            options={serviceTypeOptions}
                            className="py-2 px-8"
                            value={selectedService}
                            onChange={setSelectedService}
                            placeholder="Select Status"
                        />
                    </div>

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

export default ServiceRequestHead
