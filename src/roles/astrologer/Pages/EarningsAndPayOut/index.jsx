import Button from '@/common/components/Button'
import { Download } from 'lucide-react'
import React from 'react'
import EarningsAndPayoutCards from './Components/EarningsAndPayoutCards'
import TransactionTable from './Components/TransactionTable'
import ExpertPayoutCards from './Components/ExpertPayoutCards'

const AstroEarningsPayout = () => {
    const isExpert = localStorage.getItem("isExpert") === "true";

    return (
        <div className='px-4 flex flex-col gap-3'>

            <div className="w-full px-6 sm:px-9 py-4 sm:py-6 bg-white rounded-xl shadow-md flex items-center justify-between">

                <div className=" flex flex-col gap-2.5">
                    {/* Title */}
                    <div className="inline-flex justify-start items-center">
                        <h2 className="text-zinc-800 text-xl sm:text-2xl font-semibold font-inter">
                            Earnings & Payout
                        </h2>
                    </div>

                    {/* Subtitle */}
                    <p className="text-zinc-600 text-base sm:text-lg font-medium font-manrope">
                        Track your revenue and consultation performance.
                    </p>
                </div>
                <div className="">
                    <Button
                        size='ex'
                        className="py-2 flex items-center justify-center gap-2"
                        variant='primary'
                    >
                        <Download size={20} />
                        Export Report
                    </Button>
                </div>

            </div>

            <div className="">
                {
                    isExpert ? (
                        <>
                            <ExpertPayoutCards />
                        </>
                    ) : (
                        <>
                            <EarningsAndPayoutCards />
                        </>
                    )
                }

            </div>
            <div className=" p-5 shadow-card rounded-lg">
                <h3 className='text-[#2D2D2D] font-inter text-[20px] font-semibold leading-normal tracking-[-0.6px]'>Recent Transactions</h3>
                <TransactionTable />
            </div>

        </div>
    )
}

export default AstroEarningsPayout
