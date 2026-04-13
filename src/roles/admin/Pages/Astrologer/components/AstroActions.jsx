import Button from '@/common/components/Button'
import { Eye, Minus } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AstroSuspendModal from './Modals/AstroSuspendModal'

const AstroActions = ({ row }) => {

    const [openBlockModal, setOpenBlockModal] = useState(false);

    const navigate = useNavigate();

    const handleView = () => {
        navigate(`/admin-astrologer/${row.id}`);
    };

    const handleBlockUser = () => {
        setOpenBlockModal(true)
    };
    return (
        <div className="flex items-center justify-center gap-2">
            <Button
                size="icon"
                variant="actions"
                className="h-8 w-8 rounded-full border-2 border-border-line hover:text-primary"
                onClick={handleView}
            >
                <Eye size={16} />
            </Button>

            <Button
                size="icon"
                variant="actions"
                className="h-8 w-8 rounded-full hover:text-primary border-2 border-[#990A0A]"
                onClick={handleBlockUser}
            >
                <Minus color='#990A0A' size={16} />
            </Button>

            <AstroSuspendModal open={openBlockModal} setOpen={setOpenBlockModal} data={row} />


        </div>
    )
}

export default AstroActions
