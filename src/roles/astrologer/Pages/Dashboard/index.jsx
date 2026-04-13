import React from 'react'
import DashboardTop from './Components/DashboardTop'
import DashboardCards from './Components/DashboardCards'
import AstrologerPendingReq from './Components/AstrologerPendingReq'
import EarningsCard from './Components/EarningsCard'
import ConsultationCard from './Components/ConsultationCard'
import PayoutsCard from './Components/PayoutsCard'
import ExpertPayoutCard from './Components/ExpertPayoutCard'

const AstrologerDashboard = () => {
  const isExpert = localStorage.getItem("isExpert") === "true";
  console.log("Is Expert", isExpert);

  return (
    <div className='flex flex-col gap-3 pb-3'>
      <div className="px-4">
        <DashboardTop />

      </div>
      <div className="px-4">
        <DashboardCards isExpert={isExpert} />
      </div>

      {
        isExpert ? (
          <>
            <div className="px-4 w-full flex flex-col lg:flex-row gap-4">
              <div className="w-full lg:w-3/5 flex">
                <div className="w-full h-full">
                  <AstrologerPendingReq isExpert={isExpert} />
                </div>
              </div>

              <div className="w-full lg:w-2/5 flex">
                <div className="w-full h-full flex flex-col gap-4">
                  <div className="">
                    <EarningsCard />
                  </div>
                  <div className="">
                    <ExpertPayoutCard/>
                  </div>
                </div>
              </div>

            </div>

        
          </>
        ) : (
          <>
            <div className="px-4 w-full flex flex-col lg:flex-row gap-4">
              <div className="w-full lg:w-3/5 flex">
                <div className="w-full h-full">
                  <AstrologerPendingReq />
                </div>
              </div>

              <div className="w-full lg:w-2/5 flex">
                <div className="w-full h-full">
                  <EarningsCard />
                </div>
              </div>

            </div>

            <div className="px-4 w-full flex flex-col lg:flex-row gap-4 items-stretch">

              <div className="w-full lg:w-3/10 flex">
                <ConsultationCard />
              </div>

              <div className="w-full lg:w-7/10 flex">
                <PayoutsCard />
              </div>

            </div>
          </>
        )
      }


    </div>
  )
}

export default AstrologerDashboard
