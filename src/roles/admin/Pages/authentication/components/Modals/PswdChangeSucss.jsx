import React from 'react'
import Button from '@/common/components/Button'
import CustomModal from '@/common/components/CustomModal'
import success from "@/assets/admin-assets/success_password.svg"
import { useNavigate } from 'react-router-dom'

const PswdChangeSucss = ({ open, onOpenChange }) => {
    const navigate=useNavigate()
    return (
        <CustomModal
            open={open}
            onOpenChange={onOpenChange}
        >
            <div className="flex flex-col space-y-3">
                <h2 className='text-text-black text-center font-plus-jakarta text-[20px] sm:text-[30px] font-medium leading-[120%] tracking-[0.4px]'>Password Changed</h2>
                <p className='text-greytext text-center font-lato text-[14px] px-2 sm:text-[16px] font-medium leading-[150%] tracking-[0.48px] sm:px-10'>Password changed successfully, You can login again with new password</p>
               
               <img src={success} className='h-40 md:h-60' alt="" />
                <div className='py-2 lg:py-3'>
                    <Button  
                    onClick={()=>navigate('/admin-login')}
                        type="submit"
                        variant="primary"
                        className='w-full py-1 lg:py-3'>
                        Back to Login
                    </Button>
                </div>
            </div>
        </CustomModal>
    )
}

export default PswdChangeSucss
