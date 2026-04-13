import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout'
import revenue_Today from '@/assets/admin-assets/dashboard-Icons/dashboard_revenueToday.svg'
import React from 'react'
import DateFilter from '../../components/Buttons/DateFilter'
import RevenueHead from './components/RevenueHead'
import RevenueChart from './components/RevenueChart'

const AdminRevenue = () => {

    return (
        <ContentLayout>


            <div className="p-2 ">

                <div className="p-4 flex items-center gap-4">

                    <div className=" bg-[#BADAFF] p-3 rounded-xl">
                        <img src={revenue_Today} alt="" />
                    </div>
                    <div className="">
                        <h1 className="text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px]">Revenue</h1>
                        <p className="text-[#484848] font-urbanist text-[16px] font-semibold ">
                            You can view all the revenue updates here.
                        </p>
                    </div>

                </div>


                <div className="p-2 shadow-card rounded-md">
                    <div className=" flex px-5 py-2">
                        <div className=" shadow-card flex px-3 items-center rounded-md">
                            <p className='text-[#474646] font-inter text-[15.034px] font-medium leading-[21.503px] tracking-[-0.597px]'>Last 30 Days Jan 1 - Jan30</p>
                        </div>
                        <div className="px-5">
                            <DateFilter />
                        </div>
                    </div>

                    <div className="">
                        <RevenueHead />
                    </div>
                    <div className="">
                        <RevenueChart/>
                    </div>
                </div>

            </div>

        </ContentLayout>
    )
}

export default AdminRevenue
