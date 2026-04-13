import { Ban, Eye, MoreVertical, SquareCheckBig, Wallet } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Button from "@/common/components/Button";
import UserApproveModal from "./Modals/UserApproveModal";
import { useState } from "react";
import UserBlockModal from "./Modals/UserBlockModal";
import { useNavigate } from "react-router-dom";

const UserActions = ({ row }) => {

    const [openApproveModal, setOpenApproveModal] = useState(false);
    const [openBlockModal, setOpenBlockModal] = useState(false);
    const navigate = useNavigate();


    const handleView = () => {
        navigate(`/admin-userById/${row.id}`);
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
                <Button
                    size="icon"
                    variant="actions"
                    className="h-8 w-8 rounded-full border-2 border-border-line hover:text-primary"
                    onClick={handleView}
                >
                    <Eye size={16} />
                </Button>

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


                        {row?.status?.toLowerCase() !== "suspended" ? (
                            <DropdownMenuItem
                                onClick={handleBlockUser}
                                className="text-[#9E0000] text-center font-inter text-[15.034px] font-medium tracking-[-0.597px]
                                       hover:bg-[#D0B1EC] focus:bg-[#D0B1EC] border border-border-line px-4 flex items-center justify-start gap-2"
                            >
                                <Ban />
                                Block User
                            </DropdownMenuItem>
                        ) : (
                            <DropdownMenuItem
                                onClick={handleActivateUser}
                                className="text-[#28A745] text-center font-inter text-[15.034px] font-medium tracking-[-0.597px]
                                       hover:bg-[#D0B1EC] focus:bg-[#D0B1EC] border border-border-line px-4 flex items-center justify-start gap-2"
                            >
                                <SquareCheckBig />
                                Active
                            </DropdownMenuItem>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <UserBlockModal open={openBlockModal} setOpen={setOpenBlockModal} data={row} />
            <UserApproveModal open={openApproveModal} setOpen={setOpenApproveModal} data={row} />

        </>

    );
};

export default UserActions;