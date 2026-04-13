import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout'
import { BanknoteArrowUp } from 'lucide-react'
import React from 'react'
import PayoutByHead from './components/PayoutByHead'
import PayoutByTable from './components/PayoutByTable'

const PayOutById = () => {
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


                <div className="lg:p-5 flex flex-col space-y-8">
                      <PayoutByHead/>
                   <div className="shadow-card rounded-md ">
                    <PayoutByTable/>
                   </div>
                </div>

            </div>

        </ContentLayout>
    )
}

export default PayOutById
