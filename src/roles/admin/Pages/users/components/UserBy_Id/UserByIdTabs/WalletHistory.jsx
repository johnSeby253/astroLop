import CustomTabTable from '@/common/components/CustomTabTable'
import { ArrowDown, ArrowUp } from 'lucide-react';
import React from 'react'

const WalletHistory = () => {

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
      header: "Amount Credit/Debt",
      accessor: "amount",
      render: (row) => {
        const type = row.amount_type?.toLowerCase();
        console.log("Amount", type);

        return (
          <span
            className={`font-medium ${type === "debit" ? "text-[#920808] flex items-center justify-center gap-2" : "text-[#0D8226] flex items-center justify-center gap-2"
              }`}
          >
            {type === "debit" ?
              <>
                <ArrowDown size={14} />
                -
              </> : <>
                <ArrowUp size={14} />
                +
              </>} ₹{row.amount}
          </span>
        );
      },
    },
    {
      header: "Balance",
      accessor: "balance",
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

export default WalletHistory
