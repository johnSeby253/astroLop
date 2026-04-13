import CustomToggle from '@/common/components/CustomToggle'
import React from 'react'

const SystemSettings = () => {
    return (
        <div className='shadow-card rounded-lg p-10 flex flex-col gap-8'>
            <div className="flex flex-col gap-1">
                <h2 className='text-[#2D2D2D] font-inter text-[18px] font-bold tracking-[-0.48px]'>Notification Preferences</h2>
                <p className='text-[#616060] font-manrope text-[14px] font-semibold tracking-[-0.32px]'>
                    Choose how you want to be alerted for new requests and messages.
                </p>
            </div>

            <div className="w-full flex items-center justify-between gap-4 p-4 bg-white rounded-xl border border-neutral-200">

                {/* Text Section */}
                <div className="flex flex-col gap-1">
                    <div className="text-[#090909] text-[18px] font-semibold font-inter">
                        SMS Alert
                    </div>
                    <div className="text-neutral-500 text-md font-medium font-inter">
                        Get text messages for immediate chat requests.
                    </div>
                </div>

                {/* Toggle */}
                <div className="px-10">

                    <CustomToggle/>
                </div>
              
            </div>

        </div>
    )
}

export default SystemSettings
