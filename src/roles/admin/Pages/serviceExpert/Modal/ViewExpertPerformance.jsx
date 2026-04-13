import CustomModal from '@/common/components/CustomModal'
import profilePic from '@/assets/admin-assets/loginicon.webp';
import { Banknote, Star, UserCheck } from 'lucide-react';
import React from 'react'

const ViewExpertPerformance = ({ open, setOpen, data }) => {
  return (
    <CustomModal
      open={open}
      onOpenChange={setOpen}
      title="Block User"
      hideClass="hidden"
      description="Block This User"
      className="lg:min-w-[700px]"
    >
      <div className=" flex flex-col space-y-5">
        <h1 className='text-primary font-urbanist text-[20px] font-bold leading-normal'>Expert Performance</h1>



        <div className="w-full p-4 border border-zinc-300 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">

          {/* Left Section */}
          <div className="flex items-start sm:items-center gap-3 w-full lg:w-[65%]">
            <img
              className="w-18 h-18 rounded-full flex-shrink-0"
              src={profilePic}
              alt="user"
            />

            <div className="flex flex-col gap-2 w-full">
              {/* Name + Status */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[#090909] font-medium text-[16px] leading-[15.733px] tracking-[-0.437px] font-inter">
                  Rahul Sharma
                </span>

                <span className="px-2 py-0.5 bg-lime-100 text-green-900 text-[10px] rounded-2xl">
                  Active
                </span>
              </div>

              {/* ID + Category */}
              <div className="flex flex-wrap items-center gap-2 text-[14px] text-[#090909] font-medium">
                <span>#Ex-8201</span>

                <div className="flex items-center gap-1">
                  <span>Vedic Astrology</span>

                  <span className="px-2 py-0.5 border border-black rounded text-[10px]">
                    +2 More
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full sm:w-auto text-left sm:text-right flex flex-col gap-1">
            <p className="text-[#090909] font-medium text-[14px] leading-[15.733px] tracking-[-0.437px] font-inter">
              Current Base Price
            </p>
            <p className="text-[16px] font-bold text-[#090909]">
              ₹2500
            </p>
          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-3">
          <div className="w-full px- py-4 bg-white border border-stone-300 rounded-xl flex flex-col justify-between gap-3">

            {/* Top Row */}
            <div className="flex items-center justify-center gap-2">
              <div className="p-1 flex items-center justify-center bg-amber-100 rounded">
                <Star color='#DA911B' />
              </div>

              <p className="text-[#090909] text-sm sm:text-base font-semibold leading-4 font-inter">
                Average Rating
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center">
              <p className="text-black text-xl sm:text-2xl font-semibold font-urbanist">
                4.7 / 5
              </p>
            </div>

          </div>

          <div className="w-full px- py-4 bg-white border border-stone-300 rounded-xl flex flex-col justify-between">

            {/* Top Row */}
            <div className="flex items-center justify-center gap-2">
              <div className="p-1 flex items-center justify-center bg-[#E8FFC3] rounded">
                <Banknote color='#2D7D15' />
              </div>

              <p className="text-[#090909] text-sm sm:text-base font-semibold leading-4 font-inter">
                Total Revenue
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center">
              <p className="text-black text-xl sm:text-2xl font-semibold font-urbanist">
                ₹45,300
              </p>
            </div>

          </div>

          <div className="w-full px- py-4 bg-white border border-stone-300 rounded-xl flex flex-col justify-between">

            {/* Top Row */}
            <div className="flex items-center justify-center gap-2">
              <div className="p-1 flex items-center justify-center bg-[#DAE8F9] rounded">
                <UserCheck color='#0E529E' />
              </div>

              <p className="text-[#090909] text-sm sm:text-base font-semibold leading-4 font-inter">
                Total Service
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center">
              <p className="text-black text-xl sm:text-2xl font-semibold font-urbanist">
                38
              </p>
            </div>

          </div>
        </div>


        <div className="w-full bg-amber-100 rounded-lg px-4 py-2 flex items-center gap-3">
          <p className="text-[#090909] text-sm font-medium font-inter">
            Average Consultation Acceptance Rate  
          </p>
          <p className='font-medium'>-</p>
          <p className="text-[#090909] text-base font-semibold font-inter">
            93%
          </p>
        </div>



      </div>
    </CustomModal>
  )
}

export default ViewExpertPerformance
