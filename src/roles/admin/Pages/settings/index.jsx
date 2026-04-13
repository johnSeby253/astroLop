import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout'
import { Settings } from 'lucide-react'
import React, { useState } from 'react'
import FinancialTab from './SettingsTab/FinancialTab';
import SystemTabs from './SettingsTab/SystemTabs';
import CustomTabs from '@/common/components/CustomTabs';

const AdminSettings = () => {
    const [activeTab, setActiveTab] = useState("financial_settings");

    const tabs = [
        {
            label: "Financial Settings",
            value: "financial_settings",
            component: FinancialTab
        },
        {
            label: "System Settings",
            value: "system_setting",
            component: SystemTabs
        }
    ];
    return (
        <ContentLayout>


            <div className="p-2 ">

                <div className="p-4 flex items-center gap-4">

                    <div className=" bg-[#D9F0EF] p-3 rounded-xl">
                        <Settings size={36} color='#0798A8' />
                    </div>
                    <div className="">
                        <h1 className="text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px]">Settings</h1>
                        <p className="text-[#484848] font-urbanist text-[16px] font-semibold ">
                            You can view & upload blogs here.
                        </p>
                    </div>

                </div>


                <div className="p-5 shadow-card rounded-md">

                    <CustomTabs
                    
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />

                </div>

            </div>

        </ContentLayout>
    )
}

export default AdminSettings
