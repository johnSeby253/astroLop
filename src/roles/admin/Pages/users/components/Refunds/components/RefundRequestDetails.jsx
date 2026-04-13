import Button from '@/common/components/Button'
import FormFields from '@/common/components/FormFields'
import React from 'react'

const RefundRequestDetails = () => {
    return (
        <div className='py-3'>
            <div className="p-8 border border-border-line rounded-lg">
                <p className='text-primary font-urbanist text-[20px] font-bold leading-normal'>Refund Request Details</p>
                <div className="flex flex-col 2xl:gap-3">
                    <div className="flex items-center justify-between py-5">
                        <p className='text-[#2C2C2C] font-inter text-[20px] font-semibold '>Call with Guru Pandit not connected</p>
                        <p className='px-4 rounded-full text-[16px] bg-[#FFFDCC] text-[#AC6A00]'>Pending</p>
                    </div>
                    <div className="flex flex-col gap-2 2xl:gap-0 2xl:flex-row 2xl:items-center justify-between">
                        <p className='text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal'>ID#13334</p>
                        <p className='text-[#7A7A7A] font-inter text-[16px] font-medium '>Time: 09:15 AM</p>
                    </div>
                    <div className="flex flex-col gap-2 2xl:gap-0 2xl:flex-row 2xl:items-center justify-between">
                        <p className='text-[#7A7A7A] font-inter text-[16px] font-medium '>Date: Wed 12 Feb</p>
                        <p className='text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>
                            Amount Paid : <span className='text-[#2C2C2C]  font-inter text-[16px] font-semibold leading-normal'>₹483</span> </p>
                    </div>
                </div>
                <div className="">
                    
                </div>
                <div className="flex flex-col gap-2 py-4">
                    <p className='text-[#2C2C2C]  font-inter text-[16px] font-semibold leading-normal'>Issue Description</p>
                    <p className='text-[#7A7A7A] font-inter text-[15px] px-2 font-medium leading-[24px] tracking-[-0.437px]'>Can’t get any reply in the call The call dropped after 2 minutes but I was charged for 10.</p>
                </div>

                <div className="flex flex-col gap-2 pt-4">
                    <p className='text-[#2C2C2C]  font-inter text-[16px] font-semibold leading-normal'>Evidence</p>

                    <div className="p-3 ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtRSTrpDQVh2_0lLQu1ZdVLUxXCUBBbEcXQ&s"
                            className='w-32 h-40 border border-border-line px-4 py-3 rounded-lg'
                            alt="" />
                    </div>
                </div>

                <div className="flex flex-col gap-2 pt-4">
                    <p className='text-[#2C2C2C]  font-inter text-[16px] font-semibold leading-normal'>Refund Note</p>
                    <FormFields
                        type="textarea"
                        name="first_name"
                        placeholder="A field for the admin to write why they made the decision"
                        inputClassName="py-0 h-32 text-sm"
                        labelClassName="!text-[14px]"
                        containerClassName="pb-1"
                    />

                </div>

                <div className=" flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-end gap-4 2xl:py-3">
                    <Button
                        size='ex'
                        variant='danger'
                         className='font-semibold'
                    >
                        Reject Refund
                    </Button>

                     <Button
                        size='ex'
                        variant='yellowButton'
                        className='font-semibold'
                    >
                      Partial Refund
                    </Button>
                     <Button
                        size='ex'
                        variant='greenButton'
                        className='font-semibold'
                    >
                      Approve Refund
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default RefundRequestDetails
