import { Ban, Check, Clock4, Eye, MoreVertical, SquareCheckBig, Wallet } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Button from "@/common/components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserApproveModal from "../../users/components/Modals/UserApproveModal";
import UserBlockModal from "../../users/components/Modals/UserBlockModal";

const PayoutAction = ({ row }) => {

    const [openApproveModal, setOpenApproveModal] = useState(false);
    const [openBlockModal, setOpenBlockModal] = useState(false);
    const navigate = useNavigate();


    const handleView = () => {
        navigate(`/admin-payoutBy_astrologer_id/${row.id}`);
    };



    const handleBlockUser = () => {
        setOpenBlockModal(true)
    };

    const handleActivateUser = () => {
        setOpenApproveModal(true)
    };

    return (
        <>
            <div className="flex items-center justify-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            size="icon"
                            variant="actions"
                            className="h-8 w-8 border-2 border-border-line rounded-full"
                        >
                            <MoreVertical size={16} />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="bg-white flex flex-col gap-2 p-3" align="end">

                        <DropdownMenuItem

                            className="text-primary text-center font-inter text-[15.034px] font-medium tracking-[-0.597px]
                                       hover:bg-[#D0B1EC] focus:bg-[#D0B1EC] border border-border-line px-4 flex items-center justify-start gap-2"                        >
                            <Check />
                            Mark as paid
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            onClick={handleView}
                            className="text-primary text-center font-inter text-[15.034px] font-medium tracking-[-0.597px]
                                       hover:bg-[#D0B1EC] focus:bg-[#D0B1EC] border border-border-line px-4 flex items-center justify-start gap-2"
                        >
                            <Clock4 />
                            View payout history
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <UserBlockModal open={openBlockModal} setOpen={setOpenBlockModal} data={row} />
            <UserApproveModal open={openApproveModal} setOpen={setOpenApproveModal} data={row} />

        </>

    );
};

export default PayoutAction;