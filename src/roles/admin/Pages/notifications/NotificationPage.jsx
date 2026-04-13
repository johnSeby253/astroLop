import CustomTabs from "@/common/components/CustomTabs";
import AllNotifications from "./Notification_Tabs/AllNotification";
import UnreadNotifications from "./Notification_Tabs/UnreadNotifications";
import ContentLayout from "@/common/layouts/admin-layouts/AdminLayout";
import Button from "@/common/components/Button";
import { useState } from "react";


const NotificationPage = () => {
    const [activeTab, setActiveTab] = useState("all");

    const notifications = [
        {
            id: 1,
            title: "New expert request",
            message:
                'You have a new expert request from "Suryanarayanan potti" for creating his first consultation.',
            type: "expert_request",
            actions: ["View profile", "Approve"],
            createdAt: "2026-03-09T14:55:00",
            unread: true,
        },
        {
            id: 2,
            title: "New Service Request",
            message:
                'A new "Marriage Matching" request from "Amit K" for "Amit & Neha" has been submitted.',
            type: "service_request",
            actions: ["View details", "Assign expert"],
            createdAt: "2026-03-09T14:45:00",
            unread: true,
        },
        {
            id: 3,
            title: "Service Request Update",
            message:
                'An update on the "Marriage Matching" request from "Amit K" for "Amit & Neha" has been made.',
            type: "service_update",
            actions: ["Review"],
            createdAt: "2026-03-09T14:40:00",
            unread: true,
        },

        {
            id: 4,
            title: "Daily Revenue Milestone Reached",
            message:
                "The platform has generated ₹25,000 in total revenue today, surpassing the daily target by 15%.",
            type: "revenue",
            actions: ["View report"],
            createdAt: "2026-03-08T21:00:00",
            unread: false,
        },
        {
            id: 5,
            title: "New expert request",
            message:
                'You have a new expert request from "Rahul Menon" for starting his astrology consultation.',
            type: "expert_request",
            actions: ["View profile", "Approve"],
            createdAt: "2026-03-08T18:30:00",
            unread: false,
        },
        {
            id: 6,
            title: "New Service Request",
            message:
                'A new "Career Guidance" request from "Sneha R" has been submitted.',
            type: "service_request",
            actions: ["View details", "Assign expert"],
            createdAt: "2026-03-08T17:10:00",
            unread: false,
        },

        {
            id: 7,
            title: "Expert Profile Approved",
            message:
                'Expert "Dr. Arjun Nair" profile has been approved and is now live on the platform.',
            type: "expert_update",
            actions: ["View profile"],
            createdAt: "2026-03-06T10:00:00",
            unread: false,
        },
        {
            id: 8,
            title: "Payment Successful",
            message:
                "A payment of ₹3,500 has been successfully processed for consultation booking.",
            type: "payment",
            actions: ["View transaction"],
            createdAt: "2026-03-04T09:30:00",
            unread: false,
        },
        {
            id: 9,
            title: "New Review Received",
            message:
                'User "Anjali P" left a 5-star review for astrologer "Vishnu Prasad".',
            type: "review",
            actions: ["View review"],
            createdAt: "2026-03-01T16:15:00",
            unread: false,
        },
        {
            id: 10,
            title: "System Maintenance Completed",
            message:
                "The scheduled system maintenance has been successfully completed.",
            type: "system",
            actions: ["View details"],
            createdAt: "2026-02-28T11:00:00",
            unread: false,
        },
    ];
    const tabs = [
        {
            label: "All",
            value: "all",
            component: () => <AllNotifications notifications={notifications} />,
        },
        {
            label: "Unread",
            value: "unread",
            component: () => <UnreadNotifications notifications={notifications} />,
        },
    ];

    console.log(notifications);


    return (
        <ContentLayout>
            <div className="p-3">
                <h1 className="text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px]">Notification</h1>
                <p>There are 12 new notifications</p>
            </div>
            <div className=" flex py-4 justify-end items-center gap-4 ">
                <Button
                    variant="lite_secondary" size="sm">
                    Mark as Read
                </Button>
                <Button
                    variant="lite_secondary" size="sm">
                    Clear All
                </Button>
            </div>


            <div className="p-6 flex shadow-card rounded-md">
                <CustomTabs
                
                    tabs={tabs}
                    activeTab={activeTab}     
                    setActiveTab={setActiveTab} 
                />

            </div>

        </ContentLayout>


    );
};

export default NotificationPage;