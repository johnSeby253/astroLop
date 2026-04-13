import Button from '@/common/components/Button'
import FormFields from '@/common/components/FormFields'
import React from 'react'

const BankDetails = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-5 md:p-4">
                <div className="w-full md:w-[50%] border border-border-line px-3 md:px-6 py-4 md:py-10 rounded-lg">
                    <h2 className='text-[16px] font-bold pb-4 text-[#43157C] font-urbanist'>Price Rate Managment</h2>
                    <div className="p-2 md:p-5 flex flex-col gap-3">
                        <FormFields
                            type="text"
                            label="Set expert base rate(₹/min)"
                            name="base_rate"
                            placeholder="40₹/min"
                        />
                        <FormFields
                            type="text"
                            label="Set platform margin (%)"
                            name="platform_price"
                            placeholder="20(%)"
                        />
                        <FormFields
                            type="text"
                            label="Final Selling Price (₹/min)"
                            name="base_rate"
                            placeholder="60₹/min"
                        />


                        <Button
                            type="submit"
                            variant="primary"
                            className='w-full py-1 lg:py-3'>
                            Update Rate
                        </Button>
                    </div>
                </div>
                <div className="w-full md:w-[50%] border border-border-line  px-3 md:px-6 py-4 md:py-10 rounded-lg">
                    <h2 className='text-[16px] font-bold pb-4 text-[#43157C] font-urbanist'>Bank Details </h2>
                    <div className=" py-3">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between p-2">
                            <p className='text-[#7A7A7A] font-inter text-[16px] font-medium leading-[15.733px] tracking-[-0.437px]'>Account Holder Name</p>
                            <p className='text-[#2C2C2C] md:text-right font-inter text-[16px] font-semibold'>Suryanarayana Potti</p>
                        </div>
                    </div>

                    <div className=" py-3">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between p-2">
                            <p className='text-[#7A7A7A] font-inter text-[16px] font-medium leading-[15.733px] tracking-[-0.437px]'>Bank Name</p>
                            <p className='text-[#2C2C2C] md:text-right font-inter text-[16px] font-semibold'>Centeral Bank Of India</p>
                        </div>
                    </div>

                    <div className=" py-3">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between p-2">
                            <p className='text-[#7A7A7A] font-inter text-[16px] font-medium leading-[15.733px] tracking-[-0.437px]'>Account Number</p>
                            <p className='text-[#2C2C2C] md:text-right font-inter text-[16px] font-semibold'>561****566***0</p>
                        </div>
                    </div>

                    <div className=" py-3">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between p-2">
                            <p className='text-[#7A7A7A] font-inter text-[16px] font-medium leading-[15.733px] tracking-[-0.437px]'>IFSC Code</p>
                            <p className='text-[#2C2C2C] md:text-right font-inter text-[16px] font-semibold'>CNTR0744292</p>
                        </div>
                    </div>

                    <div className=" py-3">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between p-2">
                            <p className='text-[#7A7A7A] font-inter text-[16px] font-medium leading-[15.733px] tracking-[-0.437px]'>UPI ID</p>
                            <p className='text-[#2C2C2C] md:text-right font-inter text-[16px] font-semibold'>Surya@cntrlbank</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BankDetails
