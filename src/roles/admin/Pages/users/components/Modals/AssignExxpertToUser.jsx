import Button from '@/common/components/Button'
import CustomDropdown from '@/common/components/CustomDropdown'
import CustomModal from '@/common/components/CustomModal'
import SearchField from '@/common/components/SearchField'
import FilterButton from '@/roles/admin/components/Buttons/FilterButton'
import React, { useState } from 'react'
import profilePic from '@/assets/admin-assets/loginicon.webp';
import star from '@/assets/admin-assets/tabler_star.svg';
import ConfirmExpertModal from './ConfirmExpertModal'



const AssignExxpertToUser = ({ open, setOpen }) => {
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [selectedExpert, setSelectedExpert] = useState(null);


    const filters = ["High Spending", "Low Wallet < ₹50"]
    const [selected, setSelected] = useState("all");

    const options = [
        { label: "All Status", value: "all" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
        { label: "Suspended", value: "Suspended" }
    ];

    const experts = [
        {
            id: 1,
            name: "Guru Ramacharya Pandit",
            experience: "20+ Years of experience",
            specialization: "Vedic Astrology",
            rating: 4.5,
            location: "Kattakkada, Trivandrum",
            status: "Available",
            image: profilePic,
        },
        {
            id: 2,
            name: "Acharya Suresh Sharma",
            experience: "15+ Years of experience",
            specialization: "Vastu Shastra",
            rating: 4.2,
            location: "Kochi, Kerala",
            status: "Available",
            image: profilePic,
        },
        {
            id: 3,
            name: "Pandit Ravi Shastri",
            experience: "18+ Years of experience",
            specialization: "Pooja Rituals",
            rating: 4.7,
            location: "Trivandrum",
            status: "Available",
            image: profilePic,
        }
    ];


    const handleAssignClick = (expert) => {
        setSelectedExpert(expert);
        setConfirmOpen(true);
    };

    return (
        <CustomModal
            open={open}
            onOpenChange={setOpen}
            title="Block User"
            hideClass="hidden"
            description="Block This User"
            className="lg:min-w-[45vw]"
        >
            <div className=" flex flex-col space-y-5 px-4 max-h-[80vh] overflow-y-auto vertical-scrollbar">
                <h1 className='text-primary font-urbanist text-[20px] font-bold leading-normal'>Assign Expert !</h1>



                <div className=" flex flex-col gap-4">

                    <div className="flex flex-col gap-6  border rounded-lg shadow-card p-5 ">
                        <p className='text-[#090909] font-inter text-[16px] font-semibold leading-[15.733px] tracking-[-0.437px]'>Service Request Summary</p>
                        <div className="flex flex-col gap-4 md:flex-row 2xl:gap-0 2xl:items-center justify-between">
                            <div className=" flex flex-col gap-4">
                                <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>
                                    User Name :
                                    <span className='text-[#2C2C2C] text-[16px] font-semibold'> Pt Rahul Sharma</span>
                                </p>
                                <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>
                                    Service Name :
                                    <span className='text-[#2C2C2C] text-[16px] font-semibold'> Griha Pravesh Pooja </span>
                                </p>
                                <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>
                                    Location :
                                    <span className='text-[#2C2C2C] text-[16px] font-semibold'> Kochi,Kerala </span>
                                </p>
                            </div>
                            <div className="flex flex-col-reverse 2xl:flex-col 2xl:items-end gap-4">
                                <div className="flex items-center 2xl:justify-end">
                                    <p className='text-[#066C09] text-[13px] font-semibold bg-[#F0FFCC] px-3 py-1 rounded-full'>Completed</p>
                                </div>
                                <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>
                                    Time:
                                    <span className='text-[#2C2C2C] text-[16px] font-semibold'>10:00 AM</span>
                                </p>
                                <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>
                                    Date :
                                    <span className='text-[#2C2C2C] text-[16px] font-semibold'> Wed 12 Feb 2026</span>
                                </p>
                            </div>
                        </div>



                    </div>

                    <div className="">
                        <h2 class="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal py-3">Available Expert</h2>


                        <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-start md:items-center md:justify-between py-5 md:py-4">
                            <div className="flex items-center gap-5">
                                <SearchField
                                    placeholder="Search users"
                                    className='py-1'
                                // className="min-w-[300px] py-2"
                                />
                                {/* Filter */}
                                <FilterButton
                                    options={filters}
                                    className="py-1 px-2"
                                    align="start"
                                    size={20}
                                    // defaultValue="Last 7 Days"
                                    onChange={(value) => {
                                        console.log("Selected filter:", value)
                                    }}
                                />
                            </div>
                            <div className=" border border-border-line rounded-md">
                                <CustomDropdown
                                    options={options}
                                    className="py-1 px-2"
                                    value={selected}
                                    onChange={setSelected}
                                    placeholder="Select Language"
                                />

                            </div>


                        </div>


                        <div className="flex flex-col  max-h-[300px] overflow-y-auto vertical-scrollbar p-3">
                            {experts.map((expert) => (
                                <div key={expert.id} className="py-3">
                                    <div className="border border-border-line p-4 rounded-lg flex flex-col gap-5 md:gap-0 md:flex-row md:items-center justify-between">

                                        <div className="flex flex-col md:flex-row items-center gap-3">
                                            <img src={expert.image} className="w-20 h-20 rounded-full" alt="" />

                                            <div className="flex flex-col gap-3">

                                                <div className="flex flex-col md:flex-row items-center gap-1">
                                                    <p className="text-[#090909] font-inter text-[16px] font-semibold">
                                                        {expert.name}
                                                    </p>

                                                    <p className="text-[#090909] font-inter text-[12px] font-medium">
                                                        ({expert.experience})
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-center md:justify-start gap-3">
                                                    <p className="text-[#C36700] bg-[#FFF0BE] px-2 text-[14px] font-interb rounded-lg border border-[#C36700]">
                                                        {expert.specialization}
                                                    </p>

                                                    <div className="flex items-center gap-2">
                                                        <p className="text-[#090909] text-[14px] font-semibold">
                                                            {expert.rating}
                                                        </p>
                                                        <img src={star} alt="" />
                                                    </div>
                                                </div>

                                                <div className="flex flex-col md:flex-row items-center gap-3">
                                                    <p className="text-[#090909] font-inter text-[14px] font-medium">
                                                        {expert.location}
                                                    </p>

                                                    <p className="bg-[#E5FFC5] text-[#086D18] text-[14px] px-2 rounded-full">
                                                        {expert.status}
                                                    </p>
                                                    
                                                </div>

                                            </div>
                                        </div>

                                        <Button
                                            className="flex items-center justify-center gap-3"
                                            size="sm"
                                            variant="primary"
                                            onClick={() => handleAssignClick(expert)}
                                        >
                                            Assign
                                        </Button>

                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
                <ConfirmExpertModal
                    open={confirmOpen}
                    setOpen={setConfirmOpen}
                    expert={selectedExpert}
                /><ConfirmExpertModal />

            </div>
        </CustomModal>
    )
}

export default AssignExxpertToUser
