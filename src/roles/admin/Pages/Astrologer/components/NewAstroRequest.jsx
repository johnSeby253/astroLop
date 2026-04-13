import Button from '@/common/components/Button';
import DataTable from '@/common/components/DataTable';
import { Eye } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ApproveNewAstro from './Modals/ApproveNewAstro';
import DenyNewAstr from './Modals/DenyNewAstr';


const usersData = [
    {
        id: 1,
        name: "Guru Pandit",
        avatar: "https://i.pravatar.cc/40?img=1",
        specification: ["Vedic Astrology", "Palmistry", "Numerology"],
        experience: "+5 years",
        date_requested: "12/01/2026",
    },
    {
        id: 2,
        name: "Aarav Sharma",
        avatar: "https://i.pravatar.cc/40?img=2",
        specification: ["Tarot Reading", "Crystal Healing"],
        experience: "+3 years",
        date_requested: "03/15/2025",
    },
    {
        id: 3,
        name: "Meera Joshi",
        avatar: "https://i.pravatar.cc/40?img=3",
        specification: ["Numerology"],
        experience: "+4 years",
        date_requested: "09/10/2024",
    }
];


const NewAstroRequest = () => {
    const navigate = useNavigate();
    const [approveModal, setApproveModal] = useState(false);
    const [denyModal, setDenyModal] = useState(false)
    const [selected, setSelected] = useState(null)

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
            header: "Experience",
            accessor: "experience",
        },
        {
            header: "Date requested",
            accessor: "date_requested"
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
                        onClick={() => { navigate(`/admin-astrologer/_id:${row.id}`) }}
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
                            setSelected(row)
                            setDenyModal(true)
                        }}
                    >
                        Deny
                    </Button>

                    <Button
                        size='ex'
                        className="py-2"
                        variant='primary'
                        onClick={() => {
                            setSelected(row)
                            setApproveModal(true)
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
            <ApproveNewAstro
                open={approveModal}
                setOpen={setApproveModal}
                data={selected}
            />
            <DenyNewAstr
                open={denyModal}
                setOpen={setDenyModal}
                data={selected}
            />
        </div>
    )
}

export default NewAstroRequest
