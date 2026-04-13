import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout'
import React, { useState } from 'react'
import AstroRequestList from '../AstrologerTabs/AstroRequestList';
import AstroFreeTimeReq from '../AstrologerTabs/AstroFreeTimeReq';
import astro from '@/assets/admin-assets/dashboard-Icons/dashboard_astro.svg'
import CustomTabs from '@/common/components/CustomTabs';


const AstrologerRequest = () => {
  const [activeTab, setActiveTab] = useState("new_astro_request");

  const tabs = [
    {
      label: "New Astrologer Request",
      value: "new_astro_request",
      component: AstroRequestList
    },
    {
      label: "Free Time Request",
      value: "free_astro_request",
      component: AstroFreeTimeReq
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
            <h1 className="text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px]">Astrologers Requests</h1>
            <p className="text-[#484848] font-urbanist text-[16px] font-semibold ">
              You can view & manage astrologers Requests.
            </p>
          </div>

        </div>






        <div className="p-4 shadow-card rounded-lg">
          <CustomTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>


    </ContentLayout>
  )
}

export default AstrologerRequest
