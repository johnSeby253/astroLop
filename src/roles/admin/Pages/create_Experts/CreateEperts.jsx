import React from 'react'
import BasicDetails from './expert_Tabs/BasicDetails';
import ProfessionalTabs from './expert_Tabs/ProfessionalTabs';
import PriceSettings from './expert_Tabs/PriceSettings';
import CustomTabs from '@/common/components/CustomTabs';
import useCreateExpertStore from '../../store/Tab_Stores/useCreateExpertTab';

const CreateExperts = () => {
    const { activeTab, setActiveTab } = useCreateExpertStore()

    console.log("Active Tab", activeTab);


    const tabs = [
        {
            label: "Basic information",
            value: "basic_information",
            component: (props) => (
                <BasicDetails {...props} setActiveTab={setActiveTab} />
            ),
        },
        {
            label: "Professional Details",
            value: "professional_details",
            component: (props) => (
                <ProfessionalTabs {...props} setActiveTab={setActiveTab} />
            ),
        },
        {
            label: "Price Setting",
            value: "price_setting",
            component: PriceSettings,
        },
    ];

    return (
        <div className="p-4 ">

            <h1 className="text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px] py-2">Add New Expert</h1>
            <p className="text-[#484848] font-urbanist text-[16px] font-semibold pb-4">
                Please provide details for the new expert you would like to add.
            </p>

            <div className="p-6 flex shadow-card rounded-md">
                <CustomTabs
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

            </div>

        </div>
    )
}

export default CreateExperts
