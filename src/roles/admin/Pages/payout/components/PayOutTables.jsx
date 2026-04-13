import Button from '@/common/components/Button';
import CustomDropdown from '@/common/components/CustomDropdown';
import CustomTabTable from '@/common/components/CustomTabTable';
import SearchField from '@/common/components/SearchField'
import DateFilter from '@/roles/admin/components/Buttons/DateFilter'
import { FileDown } from 'lucide-react';
import React, { useState } from 'react'
import PayoutAction from './PayoutAction';


const PayOutTables = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");


    const columns = [
        {
            header: " #CH-ID",
            accessor: "Ch_ID",
        },
        {
            header: "Name",
            accessor: "name",
            render: (row) => (
                <div className="flex items-center justify-start gap-3">
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
            render: (row) => <PayoutAction row={row} />
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


    const categoryList = [
        { label: "All Categories", value: "all" },
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
            <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row items-start :items-center justify-between lg:px-5">
                <div className="flex items-center gap-3">
                    <SearchField
                        placeholder="Search users"
                        className="sm:w-[200px] lg:min-w-[300px] py-2"
                    />
                    <DateFilter
                        onChange={(data) => console.log("Filter:", data)}
                    />
                </div>

                <div className="flex flex-col items-start sm:flex-row sm:items-center gap-3">
                    <div className=" border border-border-line rounded-md">
                        <CustomDropdown
                            options={categoryList}
                            className="py-2 px-8"
                            value={selectedCategory}
                            onChange={setSelectedCategory}
                            placeholder="Select Language"
                        />

                    </div>
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
            <div className="py-5">
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

export default PayOutTables
