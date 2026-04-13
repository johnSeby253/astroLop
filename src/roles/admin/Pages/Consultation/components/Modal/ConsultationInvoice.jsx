import Button from '@/common/components/Button';
import CustomModal from '@/common/components/CustomModal';
import React from 'react'
import logo from "@/assets/admin-assets/logo_white.svg";
import { Download } from 'lucide-react';


const ConsultationInvoice = ({ open, setOpen }) => {
    return (
        <CustomModal
            open={open}
            onOpenChange={setOpen}
            title="Block User"
            hideClass="hidden"
            description="Block This User"
            className="max-h-[80vh] 2xl:max-h-full lg:min-w-[800px]"
        >
            <p className='text-primary font-urbanist text-[20px] font-bold leading-normal'>  Download Invoice </p>


            <div className=" flex items-center justify-between">
                <img src={logo} alt="logo" />
                <p className='bg-[#F0FFCC] text-[#087008] border border-[#087008] rounded-full px-5' >Paid</p>
            </div>
            <div className="h-[500px] 2xl:h-full overflow-y-auto vertical-scrollbar px-5">


                <div className="flex flex-col ">
                    <p className="text-black font-inter text-[16px] font-semibold leading-[36px] tracking-[-0.437px]">
                        Billed to
                    </p>
                    <div className='flex items-center justify-between '>
                        <p className="text-[#737373] font-inter text-[16px] font-semibold leading-[36px] tracking-[-0.437px]">Name :
                            <span className="text-[#464545] font-inter text-[16px] font-medium leading-[36px] tracking-[-0.437px]">
                                Keerthana Chandran
                            </span>
                        </p>
                        <p className="text-[#737373] font-inter text-[16px] font-semibold leading-[36px] tracking-[-0.437px]">Date :
                            <span className="text-[#464545] font-inter text-[16px] font-medium leading-[36px] tracking-[-0.437px]">
                                12 Wed , Feb 2026
                            </span>
                        </p>
                    </div>

                    <div className='flex items-center justify-between '>
                        <p className="text-[#737373] font-inter text-[16px] font-semibold leading-[36px] tracking-[-0.437px]">Email :
                            <span className="text-[#464545] font-inter text-[16px] font-medium leading-[36px] tracking-[-0.437px]">
                                keerthichandru@gmail.com
                            </span>
                        </p>
                        <p className="text-[#737373] font-inter text-[16px] font-semibold leading-[36px] tracking-[-0.437px]">Time :
                            <span className="text-[#464545] font-inter text-[16px] font-medium leading-[36px] tracking-[-0.437px]">
                                11:32 AM
                            </span>
                        </p>
                    </div>

                    <div className='flex items-center justify-between '>
                        <p className="text-[#737373] font-inter text-[16px] font-semibold leading-[36px] tracking-[-0.437px]">Ph No: :
                            <span className="text-[#464545] font-inter text-[16px] font-medium leading-[36px] tracking-[-0.437px]">
                                7363423178
                            </span>
                        </p>

                    </div>

                </div>

                <div className="flex flex-col ">
                    <p className="text-black font-inter text-[16px] font-semibold leading-[36px] tracking-[-0.437px]">
                        Service Details
                    </p>
                    <div className='flex items-center justify-between '>
                        <p className="text-[#737373] font-inter text-[16px] font-semibold leading-[36px] tracking-[-0.437px]">Consultation ID :
                            <span className="text-black font-inter text-[16px] font-semibold leading-[36px] tracking-[-0.437px]">
                                #CH-8201
                            </span>
                        </p>
                    </div>

                    <div className='flex items-center justify-between '>
                        <p className="text-[#737373] font-inter text-[16px] font-semibold leading-[36px] tracking-[-0.437px]">Description :
                            <span className="text-[#464545] font-inter text-[16px] font-medium leading-[36px] tracking-[-0.437px]">
                                Consultation with Pt Rahul Sharma
                            </span>
                        </p>
                    </div>

                    <div className='flex items-center justify-between '>
                        <p className="text-[#737373] font-inter text-[16px] font-semibold leading-[36px] tracking-[-0.437px]">Duration :
                            <span className="text-[#464545] font-inter text-[16px] font-medium leading-[36px] tracking-[-0.437px]">
                                12 min
                            </span>
                        </p>
                    </div>

                </div>

                <div className="flex flex-col gap-6">

                    <div className="flex flex-col gap-3">
                        <p className="text-black font-inter text-[16px] font-semibold leading-[36px] tracking-[-0.437px]">
                            Payment Details
                        </p>
                        <div className="flex items-center justify-between border border-border-line rounded-md py-1 px-2">
                            <p className="text-[#2D2D2D] font-inter text-[16px] font-medium leading-[36px] tracking-[-0.437px]">Expert Earning</p>
                            <p className="text-black font-inter text-[16px] font-semibold leading-[36px] tracking-[-0.437px]">₹200</p>
                        </div>

                        <div className="flex items-center justify-between border border-border-line rounded-md py-1 px-2">
                            <p className="text-[#2D2D2D] font-inter text-[16px] font-medium leading-[36px] tracking-[-0.437px]">Agora Cost  </p>
                            <p className="text-black font-inter text-[16px] font-semibold leading-[36px] tracking-[-0.437px]">₹15</p>
                        </div>

                        <div className="flex items-center justify-between border border-border-line rounded-md py-1 px-2">
                            <p className="text-[#2D2D2D] font-inter text-[16px] font-medium leading-[36px] tracking-[-0.437px]">Platform Profit</p>
                            <p className="text-[#2D7D15] font-inter text-[16px] font-semibold leading-[36px] tracking-[-0.437px]">+ 30</p>
                        </div>

                        <div className="flex items-center justify-between border border-border-line rounded-md py-1 px-2">
                            <p className="text-[#2D2D2D] font-inter text-[16px] font-bold leading-[36px] tracking-[-0.437px]">Total Deducted</p>
                            <p className="text-[#2D2D2D] font-inter text-[16px] font-bold leading-[36px] tracking-[-0.437px]">₹250</p>
                        </div>


                    </div>



                </div>



                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3 py-5">
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
                            // console.log("Confirmed with notify:", notify);
                            setOpen(false);
                        }}
                    >
                        <Download />
                        Download Invoice
                    </Button>
                </div>
            </div>
        </CustomModal>
    )
}

export default ConsultationInvoice
