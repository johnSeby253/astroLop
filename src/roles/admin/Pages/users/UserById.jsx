import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout'
import { Users } from 'lucide-react'
import React, { useState } from 'react'
import UserByIdHead from './components/UserBy_Id/UserByIdHead'
import CustomTabs from '@/common/components/CustomTabs'
import ConstultationHistory from './components/UserBy_Id/UserByIdTabs/ConstultationHistory'
import ServiesRequest from './components/UserBy_Id/UserByIdTabs/ServiesRequest'
import WalletHistory from './components/UserBy_Id/UserByIdTabs/WalletHistory'
import BasicOverview from './components/UserBy_Id/UserByIdTabs/BasicOverview'

const UserById = () => {
const [activeTab, setActiveTab] = useState("basic_overview");
    //   const { activeTab, setActiveTab } = useCreateExpertStore()


    const tabs = [
        {
            label: "Basic Overview",
            value: "basic_overview",
            component: BasicOverview
        },
        {
            label: "Wallet History",
            value: "wallet_history",
            component: WalletHistory
        },
        {
            label: "Consultation History",
            value: "consultation_history",
            component: ConstultationHistory,
        },
        {
            label: "Service Request",
            value: "service_request",
            component: ServiesRequest,
        },
    ];
    return (
        <ContentLayout>
            <div className="p-2 ">

                <div className="p-4 flex items-center gap-4">
                    <div className=" bg-[#FFF1B7] p-3 rounded-xl">
                        <Users size={36} className="text-[#BD8100]" />
                    </div>
                    <div className="">
                        <h1 className="text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px]">Users</h1>
                        <p className="text-[#484848] font-urbanist text-[16px] font-semibold ">
                            You can view & manage users here.
                        </p>
                    </div>
                </div>




                <div className="flex flex-col space-y-5 p-4">
                    <UserByIdHead />
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

export default UserById
