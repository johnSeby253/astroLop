import Button from '@/common/components/Button';
import CustomModal from '@/common/components/CustomModal';
import profilePic from '@/assets/admin-assets/loginicon.webp';
import React from 'react'

const EditBasePriceModal = ({ open, setOpen }) => {
    return (
        <CustomModal
            open={open}
            onOpenChange={setOpen}
            title="Block User"
            hideClass="hidden"
            description="Block This User"
            className="lg:min-w-[600px]"
        >
            <p className='text-primary font-urbanist text-[20px] font-bold leading-normal'>Edit Base Price</p>


            <div className="w-full p-4 border border-zinc-300 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                {/* Left */}
                <div className="flex flex-col items-center 2xl:flex-row 2xl:items-start  gap-3 w-full lg:w-[60%]">
                    <img
                        className="w-20 h-20 rounded-full flex-shrink-0"
                        src={profilePic}
                        alt="user"
                    />

                    <div className="flex flex-col items-center 2xl:items-start gap-2 w-full">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[#090909] font-medium text-[14px] leading-[15.733px] tracking-[-0.437px] font-inter">
                                Rahul Sharma
                            </span>
                            <span className="px-2 py-0.5 bg-lime-100 text-green-900 text-[10px] rounded-2xl">
                                Active
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#090909] font-medium">
                            <span>#Ex-8201</span>

                            <div className="flex flex-wrap items-center gap-2">
                                <span>Vedic Astrology</span>
                                <span className="px-2 py-1 border border-black rounded text-[10px]">
                                    +2 More
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="text-center sm:text-right w-full lg:w-[30%] flex flex-col gap-2">
                    <p className="text-center md:text-right text-[#090909] font-semibold text-[12px] leading-[15.733px] tracking-[-0.437px] font-inter">Current Base Price</p>
                    <p className="text-sm font-bold text-gray-800">₹2500</p>
                </div>
            </div>

            {/* Update Pricing */}
            <div className="w-full flex flex-col gap-2">
                <label className="text-sm font-medium text-black">
                    Update pricing
                </label>

                <input
                    type="text"
                    placeholder="₹ 3000"
                    className="w-full h-12 px-3 rounded-lg border border-neutral-300 text-sm outline-none focus:ring-2 focus:ring-purple-900"
                />
            </div>

            {/* Financial Impact */}
            <div className="w-full flex flex-col gap-2">
                <p className="text-sm font-medium text-black">Financial Impact</p>

                <div className="w-full p-4 border border-neutral-200 rounded-lg">
                    <table className="w-full text-center">
                        <thead>
                            <tr>
                                <th className="text-left text-[#090909] font-medium text-[12px] leading-[15.733px] tracking-[-0.437px] font-inter pb-4">
                                </th>
                                <th className="text-center text-[#090909] font-medium text-[12px] leading-[15.733px] tracking-[-0.437px] font-inter pb-4">
                                    Current Price
                                </th>
                                <th className="text-center text-[#090909] font-medium text-[12px] leading-[15.733px] tracking-[-0.437px] font-inter pb-4">
                                    New Price
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="">
                                <td className="text-left py-4 text-[#090909] font-medium text-[12px] font-inter">
                                    Expert Net Earning
                                </td>
                                <td className="py-4 text-sm font-bold text-[#090909]">
                                    ₹2100
                                </td>
                                <td className="py-4 text-sm font-bold text-[#090909]">
                                    ₹2400
                                </td>
                            </tr>

                            <tr className="">
                                <td className="text-left py-4 text-[#090909] font-medium text-[12px] font-inter">
                                    Platform Fee (20%)
                                </td>
                                <td className="py-4 text-sm font-bold text-[#090909]">
                                    ₹400
                                </td>
                                <td className="py-4 text-sm font-bold text-[#090909]">
                                    ₹600
                                </td>
                            </tr>
                        </tbody>
                    </table>
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

                  Save & Update
                </Button>
            </div>
        </CustomModal>
    )
}

export default EditBasePriceModal
