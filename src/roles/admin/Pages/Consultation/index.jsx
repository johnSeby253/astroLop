import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout'
import { HeartHandshake } from 'lucide-react'
import React from 'react'
import ConsultationTableHead from './components/ConsultationTableHead'
import ConsultationTable from './components/ConsultationTable'

const AdminConsultation = () => {
  return (
    <ContentLayout>
      <div className="p-2 ">

        <div className="p-4 flex items-center gap-4">

          <div className=" bg-[#FDE1D9] p-3 rounded-xl">
            <HeartHandshake size={36} color='#CD4902' />
          </div>
          <div className="">
            <h1 className="text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px]">Consultation</h1>
            <p className="text-[#484848] font-urbanist text-[16px] font-semibold ">
              You can view & manage consultation  here.
            </p>
          </div>

        </div>


        <div className="p-5 2xl:p-10 flex flex-col gap-5  shadow-card rounded-md">
          <ConsultationTableHead />
          <div className="py-5">
          <ConsultationTable/>

          </div>
        </div>

      </div>
    </ContentLayout>
  )
}

export default AdminConsultation
