import Button from '@/common/components/Button'
import CustomModal from '@/common/components/CustomModal'
import { useDeleteWalletPackage } from '@/roles/admin/api_Queries/Wallet/query'
import { Trash } from 'lucide-react'
import React from 'react'

const DeleteWalletPack = ({ open, setOpen, data }) => {
    const { mutate: deleteWallet } = useDeleteWalletPackage();
    // console.log("Data",data);

    const handleDelete = (id) => {
        deleteWallet(id);
        setOpen(false)
    };

    return (
        <CustomModal
            open={open}
            onOpenChange={setOpen}
            title="Delete Wallet"
            hideClass="hidden"
            description="Delete This Pack"
        >
            <div className=" flex flex-col space-y-5">
                <h1 className='text-primary font-urbanist text-[20px] font-bold leading-normal'> Delete Wallet Package</h1>
                <p className="text-[#7B7B7B] font-inter text-[16px] font-medium leading-[36px] tracking-[-0.437px]">
                    Are you sure you want to Delete the Package <b className='text-[#464545]'>{" "}{data?.name} ?{" "}</b>.
                    This action will Erase Completely from the platform.
                </p>

                <div className="flex items-center justify-end gap-3">
                    <Button

                        size='xl'
                        variant='lite_secondary'
                        onClick={() => setOpen(false)}
                    >

                        Cancel
                    </Button>

                    <Button
                        onClick={() => handleDelete(data._id)}
                        className="flex items-center justify-center gap-3"
                        size='xl'
                        variant='danger'>
                        <Trash size={20} />
                        Delete Package
                    </Button>
                </div>

            </div>
        </CustomModal>
    )
}

export default DeleteWalletPack
