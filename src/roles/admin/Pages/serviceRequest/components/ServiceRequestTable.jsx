import CustomTabTable from '@/common/components/CustomTabTable';
import React from 'react'
import ServiceRequestAction from './ServiceRequestAction';

const ServiceRequestTable = () => {
    const columns = [
        {
            header: "#Ex-ID",
            accessor: "Ch_ID",
        },
        {
            header: "User Name",
            accessor: "name",
            render: (row) => (
                <div className="flex items-center justify-center gap-3">
                    <img src={row.avatar} className="w-8 h-8 rounded-full" />
                    <span className="text-sm text-[#090909] font-semibold">{row.name}</span>
                </div>
            ),
        },
        {
            header: "Service Type",
            accessor: "service_type",
        },
        {
            header: "Location",
            accessor: "location",
        },
        {
            header: "Date",
            accessor: "date",
        },
        {
            header: "Time",
            accessor: "time",
        },
        {
            header: "Status",
            accessor: "status",
            render: (row) => (
                <span
                    className={`px-3 py-1 text-center text-xs rounded-full border border-[#B4B4B4] ${row?.status?.toLowerCase() === "completed"
                        ? "text-[#066C09] bg-[#F0FFCC]"
                        : row?.status?.toLowerCase() === "pending"
                            ? "text-[#AD8605] bg-[#FFF5CC]"
                            : row?.status?.toLowerCase() === "assigned"
                                ? "text-[#43157C] bg-[#F4EBFF]"
                                : "text-[#6C1206] bg-[#FFE8E0]"
                        }`}
                >
                    {row.status}
                </span>
            ),
        },
        {
            header: "Action",
            accessor: "action",
            render: (row) => <ServiceRequestAction row={row} />
        },
    ]


    const data = [
        {
            Ch_ID: "#Ex-8201",
            name: "Rahul Sharma",
            avatar: "https://i.pravatar.cc/40?img=1",
            service_type: "Vedic Astrology",
            location: "Mumbai",
            date: "12 Mar 2026",
            time: "10:30 AM",
            status: "Completed",
        },
        {
            Ch_ID: "#Ex-8202",
            name: "Priya Nair",
            avatar: "https://i.pravatar.cc/40?img=5",
            service_type: "Tarot Reading",
            location: "Bangalore",
            date: "13 Mar 2026",
            time: "02:00 PM",
            status: "Pending",
        },
        {
            Ch_ID: "#Ex-8203",
            name: "Arjun Mehta",
            avatar: "https://i.pravatar.cc/40?img=3",
            service_type: "Numerology",
            location: "Delhi",
            date: "14 Mar 2026",
            time: "06:15 PM",
            status: "Assigned",
        },
        {
            Ch_ID: "#Ex-8204",
            name: "Sneha Reddy",
            avatar: "https://i.pravatar.cc/40?img=8",
            service_type: "Palm Reading",
            location: "Hyderabad",
            date: "15 Mar 2026",
            time: "11:45 AM",
            status: "Cancelled",
        },
        {
            Ch_ID: "#Ex-8205",
            name: "Karan Patel",
            avatar: "https://i.pravatar.cc/40?img=12",
            service_type: "Face Reading",
            location: "Ahmedabad",
            date: "16 Mar 2026",
            time: "09:00 AM",
            status: "Completed",
        },
    ];
    return (
        <div className='=-card'>
            <CustomTabTable
                columns={columns}
                data={data}
                tableCellClass="text-gray-700"
                pageSize={5}
                totalCount={1}
            />
            
        </div>
    )
}

export default ServiceRequestTable
