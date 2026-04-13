import React, { useState } from 'react'
import { BanknoteArrowDown, Edit, FileDown, MoreVertical, Power, TrendingUp } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Button from '@/common/components/Button';
import EditBasePriceModal from '../Modal/EditBasePriceModal';
import ViewExpertPerformance from '../Modal/ViewExpertPerformance';
import DeactiveModal from '../Modal/DeactiveModal';

const ServiceExpertAction = ({ row }) => {
    const [openEditprice, setOpenEditprice] = useState(false);
    const [openDeactive, setOpenDeactive] = useState(false);
    const [openPerformance, setOpenPerformance] = useState(false);
    return (
        <div>
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
                            onClick={() => { setOpenEditprice(true) }}
                            className="text-[#787878] text-center font-inter text-[15.034px] font-medium tracking-[-0.597px]
                                       hover:bg-[#D0B1EC] focus:bg-[#D0B1EC] border border-border-line px-4 flex items-center justify-start gap-2"                        >
                            <Edit />
                            Edit Pricing
                        </DropdownMenuItem>


                        <DropdownMenuItem
                            onClick={() => { setOpenDeactive(true) }}
                            className="text-[#920000] text-center font-inter text-[15.034px] font-medium tracking-[-0.597px]
                                       hover:bg-[#D0B1EC] focus:bg-[#D0B1EC] border border-border-line px-4 flex items-center justify-start gap-2"
                        >
                            <Power />
                            Deactivate
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            onClick={() => { setOpenPerformance(true) }}
                            className="text-[#787878] text-center font-inter text-[15.034px] font-medium tracking-[-0.597px]
                                       hover:bg-[#D0B1EC] focus:bg-[#D0B1EC] border border-border-line px-4 flex items-center justify-start gap-2"
                        >
                            < TrendingUp />
                            View Perfomance
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <EditBasePriceModal open={openEditprice} setOpen={setOpenEditprice} data={row} />
            <ViewExpertPerformance open={openPerformance} setOpen={setOpenPerformance} data={row} />
            <DeactiveModal open={openDeactive} setOpen={setOpenDeactive} data={row} />
        </div>
    )
}

export default ServiceExpertAction
