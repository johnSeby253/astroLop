import CustomTabTable from '@/common/components/CustomTabTable';
import React from 'react'

const AssiginedRequest = () => {
    const columns = [
        {
            header: "Date",
            accessor: "date",
        },
        {
            header: "Time",
            accessor: "time",
        },

        {
            header: "Expert name",
            accessor: "expert_name",
        },
        {
            header: "Consultation Type",
            accessor: "consultation_type",
        },
        {
            header: "Duration",
            accessor: "duration",
        },
        {
            header: "Status",
            accessor: "status",
            render: (row) => (
                <span
                    className={`px-3 py-1 text-center text-xs rounded-full border ${row?.status?.toLowerCase() === "completed"
                        ? "text-[#066C09] bg-[#F0FFCC] border-[#B4B4B4]"
                        : "text-[#6C1206] bg-[#E8E8E8] bg-[#FFE8E0] border-[#B4B4B4]"
                        }`}
                >
                    {row.status}
                </span>
            ),
        },
    ];
    const data = [
        {
            date: "12 Mar 2026",
            time: "10:30 AM",
            expert_name: "Dr. Anjali Menon",
            consultation_type: "Video Call",
            duration: "30 mins",
            status: "Completed",
        },
        {
            date: "11 Mar 2026",
            time: "02:15 PM",
            expert_name: "Dr. Rahul Nair",
            consultation_type: "Chat",
            duration: "20 mins",
            status: "Completed",
        },
        {
            date: "10 Mar 2026",
            time: "09:00 AM",
            expert_name: "Dr. Meera Pillai",
            consultation_type: "Phone Call",
            duration: "45 mins",
            status: "Completed",
        },
        {
            date: "09 Mar 2026",
            time: "05:30 PM",
            expert_name: "Dr. Arjun Varma",
            consultation_type: "Video Call",
            duration: "25 mins",
            status: "canceled",
        },
        {
            date: "08 Mar 2026",
            time: "11:45 AM",
            expert_name: "Dr. Neha Kapoor",
            consultation_type: "Chat",
            duration: "15 mins",
            status: "canceled",
        },
        {
            date: "07 Mar 2026",
            time: "04:00 PM",
            expert_name: "Dr. Vivek Sharma",
            consultation_type: "Phone Call",
            duration: "35 mins",
            status: "Completed",
        },
        {
            date: "06 Mar 2026",
            time: "01:10 PM",
            expert_name: "Dr. Lakshmi Krishnan",
            consultation_type: "Video Call",
            duration: "40 mins",
            status: "Completed",
        },
        {
            date: "05 Mar 2026",
            time: "03:20 PM",
            expert_name: "Dr. Sanjay Gupta",
            consultation_type: "Chat",
            duration: "10 mins",
            status: "canceled",
        }
    ];
    return (
        <div>
            <div className="py-4">
                <CustomTabTable
                    columns={columns}
                    data={data}
                    tableCellClass="text-gray-700"
                    pageSize={5}
                    totalCount={8}
                />
            </div>

        </div>
    )
}

export default AssiginedRequest
