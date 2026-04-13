import CustomModal from '@/common/components/CustomModal'
import React, { useState } from 'react'
import star from '@/assets/admin-assets/tabler_star.svg';
import Button from '@/common/components/Button';

const ConfirmExpertModal = ({ open, setOpen, expert }) => {
    const [notify, setNotify] = useState(false);

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
                <p className='text-primary font-urbanist text-[20px] font-bold leading-normal'>Confirm Expert</p>

                {/* Profile Image */}
                <div className="flex items-center justify-center">
                    <img src={expert?.image} className='w-28 h-28 rounded-full' alt="" />
                </div>

                {/* Expert Info */}
                <div className="flex items-center justify-between border border-border-line px-5 py-4 rounded-lg">
                    <div className="flex flex-col gap-3 items-start">
                        <p className="text-[#090909] font-inter text-[16px] font-semibold">
                            Guru Ramacharya Pandit
                        </p>
                        <p className="text-[#C36700] w-fit bg-[#FFF0BE] px-2 text-[14px] font-interb rounded-lg border border-[#C36700]">
                            Vedic Astrology
                        </p>
                        <p className="text-[#090909] font-inter text-[14px] font-medium">
                            Kattakkada/Kollam
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 items-end">
                        <p className="text-[#090909] font-inter text-right text-[14px] font-semibold">
                            20+ Years of experience
                        </p>
                        <div className="flex items-center gap-2">
                            <p className="text-[#090909] text-[14px] font-semibold">4.5</p>
                            <img src={star} alt="" />
                        </div>
                        <p className="bg-[#E5FFC5] w-fit text-[#086D18] text-[14px] px-4 rounded-full">
                            Available
                        </p>
                    </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2 px-2">
                    <input
                        type="checkbox"
                        id="notify"
                        checked={notify}
                        onChange={() => setNotify(!notify)}
                        className="w-4 h-4 accent-primary cursor-pointer"
                    />
                    <label htmlFor="notify" className="text-[#090909] text-[14px] font-inter cursor-pointer">
                        Notify the confirmation to Expert & User
                    </label>
                </div>

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
                            console.log("Confirmed with notify:", notify);
                            setOpen(false);
                        }}
                    >
                        Confirm
                    </Button>
                </div>
            </div>
        </CustomModal>
    )
}

export default ConfirmExpertModal
