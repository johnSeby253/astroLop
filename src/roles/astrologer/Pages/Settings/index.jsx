import CustomTabs from '@/common/components/CustomTabs'
import React, { useState } from 'react'
import BankDetailsSettings from './SettingsTabs/BankDetailsSettings';
import { Landmark, Settings2 } from 'lucide-react';
import SystemSettings from './SettingsTabs/SystemSettings';

const AstroSettings = () => {
    const [activeTab, setActiveTab] = useState("bank_details");

    const tabs = [

        {
            label: "Bank Details",
            value: "bank_details",
            icon: Landmark,
            component: BankDetailsSettings
        },
        {
            label: "System Settings",
            value: "system_settings",
            icon: Settings2,
            component: SystemSettings
        },


    ];
    return (
        <div className='px-4 flex flex-col gap-3'>

            <div className="w-full px-6 sm:px-9 py-4 sm:py-6 bg-white rounded-xl shadow-md flex items-center justify-between">

                <div className=" flex flex-col gap-2.5">
                    {/* Title */}
                    <div className="inline-flex justify-start items-center">
                        <h2 className="text-zinc-800 text-xl sm:text-2xl font-semibold font-inter">
                            Settings Overview
                        </h2>
                    </div>

                    {/* Subtitle */}
                    <p className="text-zinc-600 text-base sm:text-lg font-medium font-manrope">
                        Manage your astrologer profile, pricing, and notification setting here.
                    </p>
                </div>


            </div>


            <div className="">
                <CustomTabs
                    tabs={tabs}
                    variant='astroTabs'
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </div>

        </div>
    )
}

export default AstroSettings
