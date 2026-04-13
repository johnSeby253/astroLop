import React, { useState } from 'react'
import astro from '@/assets/admin-assets/dashboard-Icons/dashboard_astro.svg'
import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout'
import CustomTabs from '@/common/components/CustomTabs'
import BasicOverview from '../AstrologerTabs/BasicOverview'
import BankDetails from '../AstrologerTabs/BankDetails'
import AstroByIdHead from '../components/AstroByIdHead'


const AstrologerById = () => {
    const [activeTab, setActiveTab] = useState("basic_overview");

    const tabs = [
        {
            label: "Basic Overview",
            value: "basic_overview",
            component: BasicOverview
        },
        {
            label: "Price Rate & Bank details",
            value: "price_details",
            component: BankDetails
        }
    ];
    return (
        <ContentLayout>
            <div className="p-2 ">


                <div className="p-4 flex items-center gap-4">

                    <div className=" bg-[#E9D9FD] p-3 rounded-xl">
                        <img src={astro} alt="" />

                    </div>
                    <div className="">
                        <h1 className="text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px]">Astrologers</h1>
                        <p className="text-[#484848] font-urbanist text-[16px] font-semibold ">
                            You can view & manage astrologers here.
                        </p>
                    </div>

                </div>




                <div className="flex flex-col space-y-5 p-4">
                    <AstroByIdHead />
                    <div className="p-4 shadow-card rounded-lg">
                        <CustomTabs
                            tabs={tabs}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    </div>
                </div>


            </div>
        </ContentLayout>
    )
}

export default AstrologerById
