import React from 'react'
import astroOnboardIcon from "@/assets/astrologer-assets/onBoardIcon.png"
import PaymentSuccess from "@/assets/astrologer-assets/Success Icon.svg";
import OnBoardSideImage from '../OnBoardSideImage'
import { Download } from 'lucide-react';
import Button from '@/common/components/Button';
import { useNavigate } from 'react-router-dom';

const PaymentStatus = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="relative min-h-screen flex flex-col lg:flex-row bg-background overflow-hidden">

                {/* Reflection Gradient Background */}
                <div className="pointer-events-none absolute inset-0 z-10">
                    <div className="absolute inset-0 bg-gradient-to-bl from-[var(--color-secondary)]/10 to-[var(--color-primary)]/10"></div>

                    <div className="absolute top-0 left-0 w-[40%] h-full 
                    bg-gradient-to-bl from-[var(--color-secondary)] to-[var(--color-primary)] 
                    opacity-20 blur-3xl animate-reflection mix-blend-overlay">
                    </div>
                </div>

                {/* Left */}
                <div className="lg:w-1/2 w-full flex items-center justify-center relative z-20">
                    <OnBoardSideImage />
                </div>

                <div className="lg:w-1/2 w-full flex items-center justify-start px-6 md:px-16 2xl:px-24 relative z-20">
                    <div className="min-h-screen  flex items-center justify-center px-4 py-10">
                        <div className="w-full max-w-xl">

                            {/* Top Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="w-14 h-14">
                                    <img src={astroOnboardIcon} alt="astroOnboardIcon" />
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-center text-[#2D2D2D] text-3xl md:text-4xl font-bold mb-3">
                                Payment Successful !
                            </h1>

                            {/* Subtitle */}
                            <p className="text-center text-[#746E6E] text-base md:text-lg font-semibold mb-8">
                                Payment For Profile Registration Payed Successfully
                            </p>

                            {/* Success Icon */}
                            <div className="flex justify-center mb-8">
                                <img src={PaymentSuccess} className=" h-24 w-24" alt="paySuccess" />
                                {/* <div className="w-24 h-24 md:w-32 md:h-32 bg-lime-600 rounded-full"></div> */}
                            </div>

                            {/* Receipt Card */}
                            <div className="border border-[#B0B0B0] rounded-xl p-4 md:p-6 mb-6">
                                <h2 className="text-[#550EAC] text-lg md:text-xl font-semibold mb-4">
                                    Payment Receipt
                                </h2>

                                <div className="space-y-3">

                                    <div className="flex justify-between border border-[#A6A2A2] rounded-md px-3 py-2">
                                        <span className="text-[#2D2D2D]">Profile Activation Fee</span>
                                        <span className="font-bold">₹1499</span>
                                    </div>

                                    <div className="flex justify-between border border-[#A6A2A2] rounded-md px-3 py-2">
                                        <span className="text-[#2D2D2D]">Priority Listing (month)</span>
                                        <span className="font-bold">₹500</span>
                                    </div>

                                    <div className="flex justify-between border border-[#A6A2A2] rounded-md px-3 py-2">
                                        <span className="text-[#2D2D2D]">CGST (9%)</span>
                                        <span className="font-bold">₹179.91</span>
                                    </div>

                                    <div className="flex justify-between border border-[#A6A2A2] rounded-md px-3 py-2">
                                        <span className="text-[#2D2D2D]">SGST (9%)</span>
                                        <span className="font-bold">₹179.91</span>
                                    </div>

                                    <div className="flex justify-between bg-[#F8F3FF] rounded-md px-3 py-3">
                                        <span className="text-[#2D2D2D] font-bold">Grand Total</span>
                                        <span className="font-bold text-lg">₹2358.82</span>
                                    </div>

                                </div>
                            </div>

                            {/* Download Receipt */}
                            <div className="flex justify-between items-center bg-red-100 border border-yellow-600 rounded-md px-4 py-3 mb-6">
                                <span className="font-medium">Download Receipt</span>
                                <Download color="#D28100" />
                            </div>

                            {/* Continue Button */}
                            <Button
                                onClick={() => { navigate('/astrologer-WaitingForApproval') }}
                                type="submit"
                                variant="primary"
                                className='w-full py-1 lg:py-3 mt-2 ]'
                            >
                                Continue
                            </Button>


                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default PaymentStatus
