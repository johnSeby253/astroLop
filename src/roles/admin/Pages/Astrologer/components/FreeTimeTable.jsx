import React, { useState } from 'react'
import DataTable from '@/common/components/DataTable';
import Button from '@/common/components/Button';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ApproveFreeTime from './Modals/ApproveFreeTime';
import DenyFreeTime from './Modals/DenyFreeTime';




const usersData = [
    {
        id: 1,
        name: "Guru Pandit",
        avatar: "https://i.pravatar.cc/40?img=1",
        specification: ["Vedic Astrology", "Palmistry", "Numerology"],
        experience: "+5 years",
        date_requested: "12/01/2026",
        requested_time: "30 min",
        status: "active"

    },
    {
        id: 2,
        name: "Aarav Sharma",
        avatar: "https://i.pravatar.cc/40?img=2",
        specification: ["Tarot Reading", "Crystal Healing"],
        experience: "+3 years",
        date_requested: "03/15/2025",
        requested_time: "60 min",
        status: "suspended"

    },
    {
        id: 3,
        name: "Meera Joshi",
        avatar: "https://i.pravatar.cc/40?img=3",
        specification: ["Numerology"],
        experience: "+4 years",
        date_requested: "09/10/2024",
        requested_time: "10 min",
        status: "suspended"
    }
];



const FreeTimeTable = () => {
    const navigate = useNavigate();
    const [approveFreeTime, setApproveFreeTime] = useState(false);
    const [denyFreeTime, setDenyFreeTime] = useState(false)
    const [selectedExpert, setSelectedExpert] = useState(null)
    const columns = [
        {
            header: "Name",
            accessor: "name",
            render: (row) => (
                <div className="flex items-center justify-cener gap-3">
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
            header: "Total Requested Time",
            accessor: "requested_time",
        },
        {
            header: "Date requested",
            accessor: "date_requested"
        },
        {
            header: "Status",
            accessor: "status",
            render: (row) => (
                <span
                    className={`px-3 py-1 text-center text-xs rounded-full border ${row?.status?.toLowerCase() === "active"
                        ? "text-[#0077FF] border-[#B4B4B4]"
                        : row?.status?.toLowerCase() === "suspended"
                            ? "text-[#991D07] border border-border-line"
                            : "text-[#9F9F9F] bg-[#E8E8E8] border-[#B4B4B4]"
                        }`}
                >
                    {row.status}
                </span>
            ),
        },

        {
            header: "View Profile",
            accessor: "view_profile",
            render: (row) => (
                <div className="flex items-center justify-center gap-2">

                    <Button
                        size="icon"
                        variant="actions"
                        className="h-8 w-8 rounded-full border-2 border-border-line hover:text-primary"
                        onClick={() => { navigate(`/admin-astrologer/${row.id}`) }}

                    >
                        <Eye size={20} />
                    </Button>
                </div>
            ),
        },
        {
            header: "Actions",
            accessor: "actions",
            render: (row) => (
                <div className="flex items-center justify-center gap-2">

                    <Button
                        size='ex'
                        variant='lite_secondary'
                        className="py-2"
                        onClick={() => {
                            setSelectedExpert(row)
                            setDenyFreeTime(true)
                        }}
                    >
                        Deny
                    </Button>

                    <Button
                        size='ex'
                        className="py-2"
                        variant='primary'
                        onClick={() => {
                            setSelectedExpert(row)
                            setApproveFreeTime(true)
                        }}
                    >
                        Approve
                    </Button>


                </div>
            ),
        },
    ];

    return (
        <div className="p-6">

            <DataTable
                columns={columns}
                data={usersData}
                pageSize={10}
                totalCount={3}
                tableSellClass="text-[#090909]"
            />

            <ApproveFreeTime
                open={approveFreeTime}
                setOpen={setApproveFreeTime}
                expert={selectedExpert}
            />
            <DenyFreeTime
                open={denyFreeTime}
                setOpen={setDenyFreeTime}
                data={selectedExpert}
            />
        </div>
    )
}

export default FreeTimeTable
