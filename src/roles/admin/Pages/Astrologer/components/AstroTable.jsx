import DataTable from "@/common/components/DataTable";
import React from "react";
import star from '@/assets/admin-assets/tabler_star.svg';
import AstroActions from "./AstroActions";

const usersData = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    avatar: `https://i.pravatar.cc/40?img=${(i % 70) + 1}`,

    final_price: `₹${(Math.random() * 50 + 10).toFixed(2)}`,
    total_min: `${Math.floor(Math.random() * 1000)} min`,
    total_earnings: `₹${(Math.random() * 50000 + 5000).toFixed(2)}`,
    total_withdrawal: `₹${(Math.random() * 30000).toFixed(2)}`,

    rating: (Math.random() * 5).toFixed(1),

    status: ["Active", "Inactive", "Suspended"][Math.floor(Math.random() * 3)],
}));

const columns = [
    {
        header: "Name",
        accessor: "name",
        render: (row) => (
            <div className="flex items-center justify-center gap-3">
                <img
                    src={row.avatar}
                    className="w-8 h-8 rounded-full"
                />
                <span className="text-sm text-[#090909] font-semibold">
                    {row.name}
                </span>
            </div>
        ),
    },

    {
        header: "Final price/min",
        accessor: "final_price",
    },

    {
        header: "Total minutes",
        accessor: "total_min",
    },
    {
        header: "Total Earnings",
        accessor: "total_earnings"
    },

    {
        header: "Total withdrawal",
        accessor: "total_withdrawal"
    },
    {
        header: "Rating",
        accessor: "rating",
        render: (row) => (
            <div className="flex items-center justify-center gap-1">
                <img src={star} alt="star" className="w-4 h-4" />
                <span className="text-sm font-medium">{row.rating}</span>
            </div>
        ),
    },


    {
        header: "Status",
        accessor: "status",
        render: (row) => (
            <span
                className={`px-3 py-1 text-center text-xs rounded-full border ${row.status === "Active"
                    ? "text-[#0077FF] border-[#B4B4B4]"
                    : row.status === "Suspended"
                        ? "text-[#991D07] border border-border-line"
                        : "text-[#9F9F9F] bg-[#E8E8E8] border-[#B4B4B4]"
                    }`}
            >
                {row.status}
            </span>
        ),
    },

    {
        header: "Actions",
        accessor: "actions",
        render: (row) => <AstroActions row={row} />
    },
];
const AstroTable = () => {
    return (
        <div className="p-6">

            <DataTable
                columns={columns}
                data={usersData}
                pageSize={10}
                totalCount={15}
                tableSellClass="text-[#090909]"
            />
        </div>
    )
}

export default AstroTable
