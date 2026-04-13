import Button from '@/common/components/Button';
import CustomModal from '@/common/components/CustomModal';
import FormFields from '@/common/components/FormFields';
import React, { useState } from 'react'

const RefundWalletModal = ({ open, setOpen }) => {
    const [selected, setSelected] = useState("full");
    const [amount, setAmount] = useState();



    return (
        <CustomModal
            open={open}
            onOpenChange={setOpen}
            title="Block User"
            hideClass="hidden"
            description="Block This User"
            className="lg:min-w-[500px]"
        >
            <div className="flex flex-col gap-6">
                <p className='text-primary font-urbanist text-[20px] font-bold leading-normal'>Refund Wallet</p>

                <div className="flex flex-col gap-3">
                    <p className="text-[#2D2D2D] font-inter text-[16px] font-medium leading-[36px] tracking-[-0.437px]">
                        Refund for  ID :
                        <span className="text-black font-inter text-[16px] font-semibold leading-[36px] tracking-[-0.437px]">
                            #CH-8201
                        </span>
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

                {/* <<<<.....Radio Button.....>>>>> */}

                <div className="flex items-center gap-3">

                    {/* Full Refund */}
                    <label
                        onClick={() => {
                            setSelected("full");
                            setAmount(250); // total deducted amount
                        }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition
          ${selected === "full"
                                ? "bg-green-100 border-green-600 text-green-700"
                                : "bg-[#EBFFE56E] border-[#12620A] text-[#12620A]"
                            }`}
                    >
                        <span
                            className={`w-4 h-4 flex items-center justify-center rounded-full border
            ${selected === "full"
                                    ? "border-green-700"
                                    : "border-green-500"
                                }`}
                        >
                            {selected === "full" && (
                                <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                            )}
                        </span>
                        <span className="text-sm font-medium">Full Refund</span>
                    </label>

                    {/* Partial Refund */}
                    <label
                        onClick={() => {
                            setSelected("partial");
                            setAmount(""); // reset
                        }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition
          ${selected === "partial"
                                ? "bg-[#FFF8A64F] border-[#BD8100] text-[#BD8100]"
                                : "bg-[#FFF8A64F] border-yellow-400 text-yellow-600"
                            }`}
                    >
                        <span
                            className={`w-4 h-4 flex items-center justify-center rounded-full border
            ${selected === "partial"
                                    ? "border-yellow-700"
                                    : "border-yellow-500"
                                }`}
                        >
                            {selected === "partial" && (
                                <span className="w-2 h-2 bg-yellow-700 rounded-full"></span>
                            )}
                        </span>
                        <span className="text-sm font-medium">partial Refund</span>
                    </label>
                </div>

                {selected === "partial" && (
                    <div className="flex flex-col gap-2">

                        <FormFields
                            type="text"
                            label="Refund Amount"
                            name="amount"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />

                    </div>
                )}

            </div>
     {/* <<<......Admin Note.....>>>>> */}

            <FormFields
                type="textarea"
                label="Admin Note"
                name="admin_note"
                placeholder="Enter a admin note for the refund "
            />


            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3">
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
                    Confirm Refund
                </Button>
            </div>
        </CustomModal>
    )
}

export default RefundWalletModal
