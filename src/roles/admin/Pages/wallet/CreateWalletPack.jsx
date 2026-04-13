import React from 'react'
import WalletForms from './components/WalletForms'
import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout'
import { Wallet } from 'lucide-react'

const CreateWalletPack = () => {
    return (
        <ContentLayout>
            <div className="p-2 ">

                <div className="p-4 flex items-center gap-4">

                    <div className=" bg-[#F9EECA] p-3 rounded-xl">
                        <Wallet size={36} color='#B88D00' />
                    </div>
                    <div className="">
                        <h1 className="text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px]">Wallet Packs</h1>
                        <p className="text-[#484848] font-urbanist text-[16px] font-semibold ">
                            You can view available packs & create new pack here.
                        </p>
                    </div>

                </div>


                <div className="p-5 shadow-card rounded-md">

                  <WalletForms/>
                </div>

            </div>
        </ContentLayout>
    )
}

export default CreateWalletPack
