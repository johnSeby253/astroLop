import DataTable from "@/common/components/DataTable";
import React from "react";
import { MessageSquare, Phone } from "lucide-react";
import UserActions from "./UserActions ";

const usersData = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  avatar: `https://i.pravatar.cc/40?img=${(i % 70) + 1}`,
  mobile: `9${Math.floor(100000000 + Math.random() * 900000000)}`,
  total_spent: `₹${(Math.random() * 5000 + 500).toFixed(2)}`,
  wallet_balance: `₹${(Math.random() * 2000).toFixed(2)}`,
  chat: `${Math.floor(Math.random() * 500)} min`,
  call: `${Math.floor(Math.random() * 800)} min`,
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
    header: "Mobile",
    accessor: "mobile",
  },

  {
    header: "Total Spent",
    accessor: "total_spent",
  },

  {
    header: "Wallet balance",
    accessor: "wallet_balance",
    render: (row) => (
      <span
        className={`font-semibold ${parseFloat(row.wallet_balance.replace(/[₹,]/g, "")) < 500
          ? "text-[#991D07]"
          : ""
          }`}
      >
        {row.wallet_balance}
      </span>
    ),
  },

  {
    header: "Minutes used Chat / Call",
    accessor: "consultings",
    render: (row) => (
      <div className="flex items-center justify-center gap-3 text-sm">
        <div className="flex items-center gap-1 ">
          <MessageSquare size={14} color="#B7A700" />
          {row.chat}
        </div>
        <p>/</p>
        <div className="flex items-center gap-1 ">
          <Phone size={14} color="#0040A1" />
          {row.call}
        </div>
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
    render: (row) => <UserActions row={row} />
  },
];
const UserTable = () => {
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

export default UserTable
