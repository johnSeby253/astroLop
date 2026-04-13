import React, { useState } from 'react'
import { BanknoteArrowDown, FileDown, MoreVertical } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Button from '@/common/components/Button';
import RefundWalletModal from './Modal/RefundWalletModal';
import ConsultationInvoice from './Modal/ConsultationInvoice';

const ConsultationAction = (row) => {
    const [openRefundWallet, setRefundWallet] = useState(false);
    const [openConsultationInvoice, setConsultationInvoice] = useState(false);
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
                            onClick={() => { setRefundWallet(true) }}
                            className="text-[#787878] text-center font-inter text-[15.034px] font-medium tracking-[-0.597px]
                                       hover:bg-[#D0B1EC] focus:bg-[#D0B1EC] border border-border-line px-4 flex items-center justify-start gap-2"                        >
                            <BanknoteArrowDown />
                            Refund wallet
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            onClick={() => { setConsultationInvoice(true) }}
                            className="text-[#787878] text-center font-inter text-[15.034px] font-medium tracking-[-0.597px]
                                       hover:bg-[#D0B1EC] focus:bg-[#D0B1EC] border border-border-line px-4 flex items-center justify-start gap-2"
                        >
                            <FileDown />
                            Download Invoice
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <RefundWalletModal open={openRefundWallet} setOpen={setRefundWallet} data={row} />
            <ConsultationInvoice open={openConsultationInvoice} setOpen={setConsultationInvoice} data={row} />
        </div>
    )
}

export default ConsultationAction
