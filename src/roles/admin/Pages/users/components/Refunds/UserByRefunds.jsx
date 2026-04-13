import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout'
import { Users } from 'lucide-react'
import React, { useState } from 'react'
import RefundRequest from '../UserBy_Id/UserByIdTabs/RefundRequest'
import RefundHistory from '../UserBy_Id/UserByIdTabs/RefundHistory'
import CustomTabs from '@/common/components/CustomTabs'

const UserByRefunds = () => {
    const [activeTab, setActiveTab] = useState("refund_request");
    //   const { activeTab, setActiveTab } = useCreateExpertStore()
  

    const tabs = [
        {
            label: "Refund Request",
            value: "refund_request",
            component: RefundRequest
        },
        {
            label: "Refund History",
            value: "refund_history",
            component: RefundHistory
        },

    ];
    return (
        <ContentLayout>
            <div className="p-2  ">

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

                <div className=" p-4 ">
                    <div className="shadow-card rounded-lg p-4">
                        <CustomTabs
                            tabs={tabs}
                            variant='pill'
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    </div>

                </div>




            </div>
        </ContentLayout>
    )
}

export default UserByRefunds
