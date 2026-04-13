import Button from '@/common/components/Button';
import CustomModal from '@/common/components/CustomModal';
import profilePic from '@/assets/admin-assets/loginicon.webp';
import React from 'react'
import { Building2, Calendar, CircleStar, HandCoins, MapPin } from 'lucide-react';
import ExpertsList from '../components/ExpertsList';
import FormFields from '@/common/components/FormFields';
import ServicesAttachments from '../components/ServicesAttachments';

const AssiginExpertModal = ({ open, setOpen, data }) => {
  return (
    <CustomModal
      open={open}
      onOpenChange={setOpen}
      title="Block User"
      hideClass="hidden"
      description="Block This User"
      className="lg:min-w-[1000px]"
    >
      <p className='text-primary font-urbanist text-[20px] font-bold leading-normal'>Service Request Details
        {/* {data.service_type} */}
      </p>
      <div className=" flex flex-col gap-5 lg:gap-0 lg:flex-row items-stretch max-h-[70vh] px-4 overflow-y-auto vertical-scrollbar">


        <div className="w-full lg:w-[50%] lg:max-h-[70vh] px-4 lg:overflow-y-auto vertical-scrollbar">


          {/* UserInformation */}
          <p className='"text-[#2C2C2C] text-[16px] font-semibold font-inter leading-normal py-2'>User Information</p>
          <div className="w-full  border border-[#DDDCDC] rounded-lg p-4 flex items-center gap-4">
            {/* Profile Image */}
            <img
              src={profilePic}
              className="w-20 h-20 rounded-full object-cover"
              alt="user"
            />

            {/* User Info */}
            <div className="flex flex-col gap-2 flex-1">

              {/* Top Row */}
              <div className="flex items-center justify-between">
                <h3 className="text-[#42147B] text-base font-semibold font-urbanist">
                  Keerthana Chandran
                </h3>

                <span className="px-3 py-1 bg-[#E0E6FF] text-[#0077FF] text-xs font-medium rounded-full font-inter">
                  Active
                </span>
              </div>

              {/* Contact */}
              <div className="flex items-center gap-2 text-sm font-inter">
                <span className="text-[#2C2C2C] font-semibold">
                  Contact no:
                </span>
                <span className="text-[#727070] font-semibold">
                  7533189023
                </span>
              </div>

              {/* Wallet */}
              <div className="flex items-center gap-2 text-sm font-inter">
                <span className="text-[#2C2C2C] font-semibold">
                  Wallet balance:
                </span>
                <span className="text-[#727070] font-semibold">
                  ₹534
                </span>
              </div>

            </div>
          </div>


          <p className='text-[#2C2C2C] text-[16px] font-semibold font-inter leading-normal py-3'>Pooja Details</p>

          <div className="w-full flex-col items-center space-y-3">

            <div className="w-full border border-[#DDDCDC] rounded-xl px-3 py-2 flex items-center gap-4">
              {/* Icon Box */}
              <div className="p-2 bg-[#FFF2D7] rounded-xl flex items-center justify-center flex-shrink-0">
                <CircleStar color='#FF7F3B' />
              </div>
              {/* Text */}
              <div className="flex flex-wrap items-center gap-1 text-sm font-semibold font-inter">
                <span className="text-[#727070]">
                  Pooja Type :
                </span>
                <span className="text-[#2C2C2C]">
                  Griha prevesh pooja
                </span>
              </div>

            </div>

            <div className="w-full border border-[#DDDCDC] rounded-xl px-3 py-2 flex items-center gap-4">
              {/* Icon Box */}
              <div className="p-2 bg-[#FFF2D7] rounded-xl flex items-center justify-center flex-shrink-0">
                <HandCoins color='#FF7F3B' />
              </div>
              {/* Text */}
              <div className="flex flex-wrap items-center gap-1 text-sm font-semibold font-inter ">
                <span className="text-[#727070]">
                  Purpose :
                </span>
                <span className="text-[#2C2C2C]">
                  Financial Blessing
                </span>
              </div>

            </div>
            <div className="w-full border border-[#DDDCDC] rounded-xl px-3 py-2 flex items-center gap-4">
              {/* Icon Box */}
              <div className="p-2 bg-[#FFF2D7] rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar color='#FF7F3B' />
              </div>
              {/* Text */}
              <div className="flex flex-wrap items-center gap-1 text-sm font-semibold font-inter">
                <span className="text-[#727070]">
                  Date :
                </span>
                <span className="text-[#2C2C2C]">
                  Wed, 12/07/2024
                </span>
              </div>

            </div>

            <div className="w-full border border-[#DDDCDC] rounded-xl px-3 py-2 flex items-center gap-4">
              {/* Icon Box */}
              <div className="p-2 bg-[#FFF2D7] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin color='#FF7F3B' />
              </div>
              {/* Text */}
              <div className="flex flex-wrap items-center gap-1 text-sm font-semibold font-inter">
                <span className="text-[#727070]">
                  Location :
                </span>
                <span className="text-[#2C2C2C]">
                  Home
                </span>
              </div>

            </div>

            <div className="w-full border border-[#DDDCDC] rounded-xl px-3 py-2 flex items-center gap-4">
              {/* Icon Box */}
              <div className="p-2 bg-[#FFF2D7] rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 color='#FF7F3B' />
              </div>
              {/* Text */}
              <div className="flex flex-wrap items-center gap-1 text-sm font-semibold font-inter">
                <span className="text-[#727070]">
                  City :
                </span>
                <span className="text-[#2C2C2C]">
                  Kochi, Kerala
                </span>
              </div>

            </div>

          </div>

          <ServicesAttachments />

          <p className='text-[#2C2C2C] text-[16px] font-semibold font-inter leading-normal py-3'>Notes</p>

          <div className="border border-border-line p-3 rounded-lg h-20 lg:h-40">
            <p className='text-[#808080] text-[14px] font-normal leading-[150%] font-inter'>Need a financial prosperity and well
              financial stability in the
              home need a pooja for the house warming cermoney  </p>
          </div>


        </div>
        <hr className='lg:hidden' />
        <div className="w-full lg:w-[50%]  lg:max-h-[70vh] px-4 lg:overflow-y-auto vertical-scrollbar">
          <div className="">
            <ExpertsList />
          </div>

          <div className="">
            <p className='text-[#2C2C2C] text-[16px] font-semibold font-inter leading-normal py-3'>Expert Quote Amount</p>
            <FormFields
              type="text"
              label=""
              name="expert_quote_Amount"
              placeholder="₹ 3000"
              inputClassName="py-0 h-10 text-sm"
              labelClassName="!text-[14px]"
              containerClassName="pb-1"

            />
          </div>
          <p className='text-[#2C2C2C] text-[16px] font-semibold font-inter leading-normal py-3'>Admin Notes</p>

          <div className="border border-border-line p-3 rounded-lg h-20 lg:h-40">
            <p className='text-[#808080] text-[14px] font-normal leading-[150%] font-inter'>Need a financial prosperity and well
              financial stability in the
              home need a pooja for the house warming cermoney  </p>
          </div>

        </div>


      </div>





      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-3 lg:py-5">
        <Button
          size='md'
          variant='lite_secondary'
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
        <Button
          className="flex items-center justify-center gap-3"
          size='md'
          variant='primary'
          onClick={() => {
            console.log("Confirmed with notify:", notify);
            setOpen(false);
          }}
        >
          Assign
        </Button>
      </div>
    </CustomModal>
  )
}

export default AssiginExpertModal
