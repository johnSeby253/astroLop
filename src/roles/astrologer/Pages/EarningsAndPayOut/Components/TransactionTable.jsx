import CustomTabTable from '@/common/components/CustomTabTable'
import React from 'react'

const TransactionTable = () => {
    const columns = [
        {
            header: " Date",
            accessor: "date",
        },
        {
            header: "Client Name",
            accessor: "client_Name",
        },
        {
            header: "Consultation Type",
            accessor: "type_consultation",
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
                        : "text-[#6C1206] bg-[#FFE8E0] border-[#B4B4B4]"
                        }`}
                >
                    {row.status}
                </span>
            ),
        },
        {
            header: "Amount",
            accessor: "amount",
        },
    ]

    const data = [
        {
            date: "2026-03-30",
            client_Name: "Arjun Patel",
            type_consultation: "Call",
            duration: "30 Minutes",
            status: "Completed",
            amount: "₹500",
        },
        {
            date: "2026-03-29",
            client_Name: "Shreya Sharma",
            type_consultation: "Video",
            duration: "45 Minutes",
            status: "Pending",
            amount: "₹750",
        },
        {
            date: "2026-03-28",
            client_Name: "Rohan Mehta",
            type_consultation: "Chat",
            duration: "15 Minutes",
            status: "Completed",
            amount: "₹200",
        },
        {
            date: "2026-03-27",
            client_Name: "Anika Gupta",
            type_consultation: "Call",
            duration: "60 Minutes",
            status: "Pending",
            amount: "₹1000",
        },
        {
            date: "2026-03-26",
            client_Name: "Karan Verma",
            type_consultation: "Video",
            duration: "30 Minutes",
            status: "Completed",
            amount: "₹500",
        },
        {
            date: "2026-03-25",
            client_Name: "Priya Singh",
            type_consultation: "Chat",
            duration: "15 Minutes",
            status: "Completed",
            amount: "₹250",
        },
    ]
    return (
        <div>
            <div className="py-5">
                <CustomTabTable
                    columns={columns}
                    data={data}
                    tableCellClass="text-gray-700"
                    pageSize={10}
                    totalCount={6}
                />
            </div>
        </div>
    )
}

export default TransactionTable
