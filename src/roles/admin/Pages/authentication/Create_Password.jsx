import React, { useState } from 'react'
import login_bg from "../../../../assets/admin-assets/admin-login_bg.svg"
import FormFields from '../../../../common/components/FormFields'
import Button from '../../../../common/components/Button'
import PswdChangeSucss from './components/Modals/PswdChangeSucss'

const Create_Password = () => {
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    return (
        <div
            className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{
                backgroundImage: `url("${login_bg}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="w-[90%] bg-background shadow-card p-5 flex flex-col gap-10 items-center rounded-[21px]  lg:w-[30%] ">
                <div className="flex flex-col gap-3">
                    <h1 className='text-text-black text-center font-plus-jakarta text-[20px] sm:text-[40px] font-bold leading-[120%] tracking-[0.4px]'>
                        Create Password
                    </h1>
                    <p
                        className='text-greytext text-center font-lato text-[14px] px-2 sm:text-[16px] font-medium leading-[150%] tracking-[0.48px] sm:px-16'>
                        Your new password must be unique from those previously used.
                    </p>
                </div>
                <div className=" w-[90%] sm:w-[80%]">
                    <FormFields
                        type="password"
                        label="Create new password"
                        name="create_password"
                        placeholder="Enter new password "
                    />
                    <FormFields
                        type="password"
                        label="Confirm new password"
                        name="confirm_password"
                        placeholder="Enter confirm password "
                    />
                    <div className='py-2 lg:py-3'>
                        <Button
                            onClick={() => setOpenSuccessModal(true)}
                            type="submit"
                            variant="primary"
                            className='w-full py-1 lg:py-3'>
                            Submit
                        </Button>
                    </div>

                </div>

                <PswdChangeSucss open={openSuccessModal} onOpenChange={setOpenSuccessModal} />
            </div>
        </div>
    )
}

export default Create_Password
