import CustomTabTable from '@/common/components/CustomTabTable';
import React from 'react'

const RefundHistory = () => {

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
      header: "Transaction Type",
      accessor: "transaction_type",
    },
    {
      header: "Balance",
      accessor: "balance",
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
      date: "Mon,12/03/2026",
      time: "10:30 AM",
      transaction_type: "Wallet Topup",
      amount: 200,
      amount_type: "credit",
      balance: 1200,
    },
    {
      date: "Tue,12/03/2026",
      time: "11:00 AM",
      transaction_type: "Consultation",
      amount: 100,
      amount_type: "debit",
      balance: 1100,
    },
    {
      date: "Mon,12/03/2026",
      time: "10:30 AM",
      transaction_type: "Wallet Topup",
      amount: 200,
      amount_type: "credit",
      balance: 1200,
    },
    {
      date: "Tue,12/03/2026",
      time: "11:00 AM",
      transaction_type: "Consultation",
      amount: 100,
      amount_type: "debit",
      balance: 1100,
    },

    {
      date: "Mon,12/03/2026",
      time: "10:30 AM",
      transaction_type: "Wallet Topup",
      amount: 200,
      amount_type: "credit",
      balance: 1200,
    },
    {
      date: "Tue,12/03/2026",
      time: "11:00 AM",
      transaction_type: "Consultation",
      amount: 100,
      amount_type: "debit",
      balance: 1100,
    },

    {
      date: "Mon,12/03/2026",
      time: "10:30 AM",
      transaction_type: "Wallet Topup",
      amount: 200,
      amount_type: "credit",
      balance: 1200,
    },
    {
      date: "Tue,12/03/2026",
      time: "11:00 AM",
      transaction_type: "Consultation",
      amount: 100,
      amount_type: "debit",
      balance: 1100,
    },

    {
      date: "Mon,12/03/2026",
      time: "10:30 AM",
      transaction_type: "Wallet Topup",
      amount: 200,
      amount_type: "credit",
      balance: 1200,
    },
    {
      date: "Tue,12/03/2026",
      time: "11:00 AM",
      transaction_type: "Consultation",
      amount: 100,
      amount_type: "debit",
      balance: 1100,
    },
  ];

  return (
    <div>
      <div className="py-4">
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

export default RefundHistory
