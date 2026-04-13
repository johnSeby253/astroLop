import React, { useState, useEffect } from "react";
import CustomToggle from "@/common/components/CustomToggle";
import {
    MessageSquareText,
    Phone,
    Tag,
    Bell,
    MessageCircle,
    Mail,
} from "lucide-react";
import { useGetSystemSettings, useUpdateSystemSettings } from "@/roles/admin/api_Queries/Settings/query"; // adjust path
import { debounce } from "lodash";

const communicationGroups = [
    {
        title: "Communication Channel Set up",
        items: [
            {
                key: "chat",
                title: "Enable Chat Consultation",
                description: "Allows users to initiate new text-based consultation requests.",
                icon: MessageSquareText,
            },
            {
                key: "call",
                title: "Enable Call Consultation",
                description: "Enables voice and calling features. This activates the Agora RTC bridge",
                icon: Phone,
            },
        ],
    },
    {
        title: "Offer Banner Control",
        items: [
            {
                key: "offer_banner",
                title: "Enable Offer Banner",
                description: "A master switch to the banner globally across the user website.",
                icon: Tag,
            },
        ],
    },
    {
        title: "System Notification Toggles",
        items: [
            {
                key: "push",
                title: "Enable Push Notifications",
                description: "Globally turns off all the platform notifications.",
                icon: Bell,
            },
            {
                key: "sms",
                title: "Enable SMS Notifications",
                description: "A master switch to prevent all SMS charges.",
                icon: MessageCircle,
            },
            {
                key: "email",
                title: "Enable Email Notifications",
                description: "Activate / deactivates the SMTP mailer bridge",
                icon: Mail,
            },
        ],
    },
];

const SystemTabs = () => {
    const { data, isLoading, isError } = useGetSystemSettings();
    const updateMutation = useUpdateSystemSettings();
    const [state, setState] = useState({});

    // Initialize state from fetched data
    useEffect(() => {
        if (data && data.data && Array.isArray(data.data.settingsList)) {
            const initialState = {};
            data.data.settingsList.forEach((item) => {
                initialState[item.key] = item.enabled;
            });
            setState(initialState);
        }
    }, [data]);

    const updateBackend = debounce((newState) => {
        const settingsList = Object.entries(newState).map(([key, enabled]) => ({ key, enabled }));
        updateMutation.mutate({ settingsList });
    }, 500);

    const handleToggle = (key, val) => {
        const newState = { ...state, [key]: val };
        setState(newState);

        // Debounced backend update
        updateBackend(newState);
    }

    if (isLoading) return <p>Loading settings...</p>;
    if (isError) return <p>Error loading settings.</p>;

    return (
        <div className="bg-[#F9F9FB] p-6 rounded-xl space-y-6 w-full">
            {communicationGroups.map((group) => (
                <div key={group.title} className="space-y-3">
                    {/* Section Title */}
                    <h2 className="text-[#090909] text-[16px] font-semibold">{group.title}</h2>

                    {/* Items */}
                    {group.items.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.key}
                                className="flex flex-col gap-3 lg:gap-0 lg:flex-row items-center justify-between bg-white border rounded-xl px-4 py-4"
                            >
                                {/* Left */}
                                <div className="flex flex-col lg:flex-row items-center gap-4">
                                    {/* Icon */}
                                    <div className="bg-[#FAF3EC] p-3 rounded-xl">
                                        <Icon size={22} className="text-[#DF6800]" />
                                    </div>

                                    {/* Text */}
                                    <div className="text-center lg:text-start">
                                        <p className="text-[#252525] text-[16px] font-medium">{item.title}</p>
                                        <p className="text-[#707070] text-[14px] font-medium leading-[150%]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Toggle */}
                                <CustomToggle
                                    checked={state[item.key] || false}
                                    onChange={(val) => handleToggle(item.key, val)}
                                />
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default SystemTabs;