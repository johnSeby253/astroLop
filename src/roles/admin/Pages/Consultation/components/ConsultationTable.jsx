import CustomTabTable from '@/common/components/CustomTabTable'
import React from 'react'
import ConsultationAction from './ConsultationAction';

const ConsultationTable = () => {

    const columns = [
        {
            header: " #CH-ID",
            accessor: "Ch_ID",
        },
        {
            header: "Name",
            accessor: "name",
            render: (row) => (
                <div className="flex items-center justify-center gap-3">
                    <img src={row.avatar} className="w-8 h-8 rounded-full" />
                    <span className="text-sm text-[#090909] font-semibold">{row.name}</span>
                </div>
            ),
        },
        {
            header: "Total Minutes",
            accessor: "total_minute",
        },
        {
            header: "Gross earnings",
            accessor: "gross_earnings",
        },
        {
            header: "Platform Fee",
            accessor: "platform_fee",
        },
        {
            header: "Netpayable",
            accessor: "netpayble",
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
            header: "Action",
            accessor: "action",
            render: (row) => <ConsultationAction row={row} />
        },
    ]


    const data = [
        {
            id: "1",
            Ch_ID: "CH001",
            name: "Arjun Nair",
            avatar: "https://i.pravatar.cc/40?img=1",
            total_minute: 120,
            gross_earnings: "₹2000",
            platform_fee: "₹200",
            netpayble: "₹1800",
            status: "Completed",
        },
        {
            id: "2",
            Ch_ID: "CH002",
            name: "Meera Das",
            avatar: "https://i.pravatar.cc/40?img=2",
            total_minute: 95,
            gross_earnings: "₹1500",
            platform_fee: "₹150",
            netpayble: "₹1350",
            status: "Pending",
        },
        {
            id: "3",
            Ch_ID: "CH003",
            name: "Rahul Menon",
            avatar: "https://i.pravatar.cc/40?img=3",
            total_minute: 180,
            gross_earnings: "₹3000",
            platform_fee: "₹300",
            netpayble: "₹2700",
            status: "Completed",
        },
        {
            id: "4",
            Ch_ID: "CH004",
            name: "Anjali Pillai",
            avatar: "https://i.pravatar.cc/40?img=4",
            total_minute: 60,
            gross_earnings: "₹1000",
            platform_fee: "₹100",
            netpayble: "₹900",
            status: "Pending",
        },
        {
            id: "5",
            Ch_ID: "CH005",
            name: "Vikram Iyer",
            avatar: "https://i.pravatar.cc/40?img=5",
            total_minute: 140,
            gross_earnings: "₹2500",
            platform_fee: "₹250",
            netpayble: "₹2250",
            status: "Completed",
        },
    ];
    return (
        <div className='shadrd'>
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

export default ConsultationTable
