import Button from '@/common/components/Button'
import CustomModal from '@/common/components/CustomModal'
import React from 'react'

const DenyNewAstr = ({ open, setOpen, data }) => {
    return (
        <CustomModal
            open={open}
            onOpenChange={setOpen}
            title="Block User"
            hideClass="hidden"
            description="Block This User"
            className="lg:min-w-[550px]"
        >
            <div className=" flex flex-col space-y-5">
                <h1 className='text-primary font-urbanist text-[20px] font-bold leading-normal'>Deny this Request !</h1>
                <p className="text-[#7B7B7B] font-inter text-[16px] font-medium leading-[36px] tracking-[-0.437px]">
                    Are you sure you want to Deny this request of <b className='text-[#464545]'>{" "}{data?.name} ?{" "}</b>.
                    This action will restrict to enter this  the platform.
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
                        className="flex items-center justify-center gap-3"
                        size='xl'
                        variant='danger'>

                        Deny
                    </Button>
                </div>

            </div>
        </CustomModal>
    )
}

export default DenyNewAstr
