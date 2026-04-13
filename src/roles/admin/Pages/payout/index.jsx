import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout'
import { BanknoteArrowUp } from 'lucide-react'
import React from 'react'
import PayOutTables from './components/PayOutTables'

const AdminPayOut = () => {
  return (
    <ContentLayout>


      <div className="p-2 ">

        <div className="p-4 flex items-center gap-4">

          <div className=" bg-[#EBF0D9] p-3 rounded-xl">
            <BanknoteArrowUp size={36} color='#9FAA02' />
          </div>
          <div className="">
            <h1 className="text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px]">Payouts</h1>
            <p className="text-[#484848] font-urbanist text-[16px] font-semibold ">
              You can view & update payout status here.
            </p>
          </div>

        </div>


        <div className="p-5 shadow-card rounded-md">

          <PayOutTables />
        </div>

      </div>

    </ContentLayout>
  )
}

export default AdminPayOut
