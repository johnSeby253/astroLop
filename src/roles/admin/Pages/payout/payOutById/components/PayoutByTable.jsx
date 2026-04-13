import Button from '@/common/components/Button';
import CustomDropdown from '@/common/components/CustomDropdown';
import CustomTabTable from '@/common/components/CustomTabTable';
import SearchField from '@/common/components/SearchField';
import DateFilter from '@/roles/admin/components/Buttons/DateFilter';
import { FileDown } from 'lucide-react';
import React, { useState } from 'react'

const PayoutByTable = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const columns = [
        {
            header: "Date",
            accessor: "date",
        },

        {
            header: "Total minutes",
            accessor: "total_minute",
        },
        {
            header: "Gross earnings",
            accessor: "gross_earnings",
        },
        {
            header: "Platform Margin",
            accessor: "platform_margin",
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
    ]

    const data = [
        {
            date: "2026-03-10",
            total_minute: 120,
            gross_earnings: "₹2000",
            platform_margin: "₹200",
            netpayble: "₹1800",
            status: "Completed",
        },
        {
            date: "2026-03-11",
            total_minute: 95,
            gross_earnings: "₹1500",
            platform_margin: "₹150",
            netpayble: "₹1350",
            status: "Pending",
        },
        {
            date: "2026-03-12",
            total_minute: 180,
            gross_earnings: "₹3000",
            platform_margin: "₹300",
            netpayble: "₹2700",
            status: "Completed",
        },
        {
            date: "2026-03-13",
            total_minute: 60,
            gross_earnings: "₹1000",
            platform_margin: "₹100",
            netpayble: "₹900",
            status: "Pending",
        },
        {
            date: "2026-03-14",
            total_minute: 140,
            gross_earnings: "₹2500",
            platform_margin: "₹250",
            netpayble: "₹2250",
            status: "Completed",
        },
    ];


    const categoryList = [
        { label: "All Status", value: "all" },
        { label: "Vedic", value: "vedic" },
        { label: "Western Astrology", value: "western_astrologer" },
        { label: "Horary Astrology", value: "horary_astrologer" },
        { label: "Natal Astrologyedic", value: "natal_astrologer" },
        { label: "Mundane Astrology", value: "mundane_astrologer" },
        { label: "Financial Astrology", value: "financial_astrologer" },
        { label: "medical Astrologyedic", value: "medical_astrologer" },
    ];



    return (
        <div>
            <div className="flex flex-col lg:flex-row items-start gap-3 lg:gap-0 lg:items-center justify-between px-5 py-5">
                <div className="flex  items-center gap-3">
                    <div className=" border border-border-line rounded-md">
                        <CustomDropdown
                            options={categoryList}
                            className="py-2 px-8"
                            value={selectedCategory}
                            onChange={setSelectedCategory}
                            placeholder="Select Language"
                        />

                    </div>
                    <DateFilter
                        onChange={(data) => console.log("Filter:", data)}
                    />
                </div>

                <div className="flex items-center gap-3">

                    <Button
                        size='ex'
                        className="py-2 flex items-center justify-center gap-2"
                        variant='primary'
                    >
                        <FileDown size={20} />
                        Export Exel
                    </Button>
                </div>


            </div>
            <div className="pb-4 px-2 lg:px-0">
                <CustomTabTable
                    columns={columns}
                    data={data}
                    tableCellClass="text-gray-700"
                    pageSize={5}
                    totalCount={1}
                />
            </div>
        </div>
    )
}

export default PayoutByTable
