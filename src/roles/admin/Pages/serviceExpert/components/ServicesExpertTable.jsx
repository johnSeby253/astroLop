import CustomTabTable from '@/common/components/CustomTabTable'
import React from 'react'
import ServiceExpertAction from './ServiceExpertAction';

const ServicesExpertTable = () => {
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
            header: "Specialization",
            accessor: "specification",
            render: (row) => {
                const specs = row.specification || [];
                const first = specs[0];
                const moreCount = specs.length - 1;

                return (
                    <div className="flex items-center justify-center gap-2">
                        {first && (
                            <span className="px-2 py-1 text-xs bg-gray-200 rounded">
                                {first}
                            </span>
                        )}

                        {moreCount > 0 && (
                            <span className="px-2 py-1 text-xs bg-gray-200 rounded">
                                +{moreCount} more
                            </span>
                        )}
                    </div>
                );
            },
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
                    className={`px-3 py-1 text-center text-xs rounded-full border ${row?.status?.toLowerCase() === "active"
                        ? "text-[#066C09] bg-[#F0FFCC] border-[#B4B4B4]"
                        : "text-[#6C1206] bg-[#FFE8E0] border-[#B4B4B4]"
                        }`}
                >
                    {row.status}
                </span>
            ),
        },
        {
            header: "Expert's Today",
            accessor: "expertToday",
            render: (row) => {
                return (
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={row.expertToday}
                            // onChange={() => handleToggle(row)}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 rounded-full peer 
                    peer-checked:bg-primary
                    after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                    after:bg-white after:border after:rounded-full after:h-5 after:w-5 
                    after:transition-all peer-checked:after:translate-x-full">
                        </div>
                    </label>
                );
            }
        },
        {
            header: "Action",
            accessor: "action",
            render: (row) => <ServiceExpertAction row={row} />
        },
    ]


    const data = [
        {
            id: "1",
            Ch_ID: "CH001",
            name: "Arjun Nair",
            avatar: "https://i.pravatar.cc/40?img=1",
            specification: ["Tarot Reading", "Crystal Healing"],
            gross_earnings: "₹2000",
            platform_fee: "₹200",
            netpayble: "₹1800",
            status: "Active",
            expertToday: true
        },
        {
            id: "2",
            Ch_ID: "CH002",
            name: "Meera Das",
            avatar: "https://i.pravatar.cc/40?img=2",
            specification: ["Tarot Reading", "Crystal Healing"],
            gross_earnings: "₹1500",
            platform_fee: "₹150",
            netpayble: "₹1350",
            status: "Inactive",
            expertToday: false
        },
        {
            id: "3",
            Ch_ID: "CH003",
            name: "Rahul Menon",
            avatar: "https://i.pravatar.cc/40?img=3",
            specification: ["Tarot Reading", "Crystal Healing"],
            gross_earnings: "₹3000",
            platform_fee: "₹300",
            netpayble: "₹2700",
            status: "Active",
            expertToday: false
        },
        {
            id: "4",
            Ch_ID: "CH004",
            name: "Anjali Pillai",
            avatar: "https://i.pravatar.cc/40?img=4",
            specification: ["Tarot Reading", "Crystal Healing"],
            gross_earnings: "₹1000",
            platform_fee: "₹100",
            netpayble: "₹900",
            status: "Active",
            expertToday: true
        },
        {
            id: "5",
            Ch_ID: "CH005",
            name: "Vikram Iyer",
            avatar: "https://i.pravatar.cc/40?img=5",
            specification: ["Tarot Reading", "Crystal Healing"],
            gross_earnings: "₹2500",
            platform_fee: "₹250",
            netpayble: "₹2250",
            status: "Inactive",
            expertToday: false
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

export default ServicesExpertTable
