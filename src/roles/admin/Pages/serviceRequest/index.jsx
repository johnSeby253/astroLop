import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout'
import pending_Req from '@/assets/admin-assets/dashboard-Icons/dashboard_pndg_Request.svg'
import React from 'react'
import ServiceRequestHead from './components/ServiceRequestHead'
import ServiceRequestTable from './components/ServiceRequestTable'

const AdminServiceRequest = () => {
  return (
    <ContentLayout>
      <div className="p-2 ">

        <div className="p-4 flex items-center gap-4">

          <div className=" bg-[#D9EBF0] p-3 rounded-xl">
            {/* < UserRoundCheck size={36} color='#0641AE' /> */}
            <img src={pending_Req} className='h-9' alt="" />
          </div>
          <div className="">
            <h1 className="text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px]">Service Requests</h1>
            <p className="text-[#484848] font-urbanist text-[16px] font-semibold ">
              You can view & manage service requests here.
            </p>
          </div>

        </div>


        <div className="p-5 2xl:p-10 flex flex-col gap-5  shadow-card rounded-md">
          <ServiceRequestHead />
          <div className="py-5">
         <ServiceRequestTable/>
          </div>
        </div>

      </div>
    </ContentLayout>

  )
}

export default AdminServiceRequest
