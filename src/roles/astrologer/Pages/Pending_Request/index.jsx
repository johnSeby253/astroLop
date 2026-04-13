import CustomTabs from '@/common/components/CustomTabs'
import AllRequestTabs from './PendingReqTabs/AllRequestTabs';
import ChatRequestTabs from './PendingReqTabs/ChatRequestTabs';
import CallRequestTabs from './PendingReqTabs/CallRequestTabs';
import { List, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import AllrequestTab from './PendingReqTabs/ExpertTabs/AllrequestTab';
import VastuRequest from './PendingReqTabs/ExpertTabs/VastuRequest';
import PoojaRequest from './PendingReqTabs/ExpertTabs/PoojaRequest';

const AstroPendingRequest = () => {
    const isExpert = localStorage.getItem("isExpert") === "true";


    // Define tabs outside of the if/else
    const tabs = isExpert
        ? [
            { label: "All Request", value: "expert_all__request", icon: List, component: AllrequestTab },
            { label: "Vastu", value: "vastu_request", icon: MessageCircle, component: VastuRequest },
            { label: "Pooja", value: "Pooja_request", icon: Phone, component: PoojaRequest },
        ]
        : [
            { label: "All Request", value: "all__request", icon: List, component: AllRequestTabs },
            { label: "Chat", value: "chat_request", icon: MessageCircle, component: ChatRequestTabs },
            { label: "Call", value: "call_request", icon: Phone, component: CallRequestTabs },
        ];

    // Set initial active tab
    const [activeTab, setActiveTab] = useState(
        isExpert ? "expert_all__request" : "all__request"
    );





    return (
        <div className='px-4 flex flex-col gap-3'>
            <div className="w-full px-6 sm:px-9 py-4 sm:py-6 bg-white rounded-xl shadow-md flex flex-col gap-2.5">
                <div className="inline-flex justify-start items-center">
                    <h2 className="text-zinc-800 text-xl sm:text-2xl font-semibold font-inter">
                        Pending Consultation Request
                    </h2>
                </div>
                <p className="text-zinc-600 text-base sm:text-lg font-medium font-manrope">
                    Review and respond to consultation requests from your clients
                </p>
            </div>

            <div>
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

export default AstroPendingRequest