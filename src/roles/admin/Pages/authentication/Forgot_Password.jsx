import React from 'react'
import login_bg from "../../../../assets/admin-assets/admin-login_bg.svg"
import FormFields from '../../../../common/components/FormFields'
import Button from '../../../../common/components/Button'
import { useNavigate } from 'react-router-dom'


const Forgot_Password = () => {
    const navigate = useNavigate();
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
                    <h1 className='text-text-black text-center font-plus-jakarta text-[20px] sm:text-[40px] font-bold leading-[120%] tracking-[0.4px]'>Forget Password</h1>
                    <p className='text-greytext text-center font-lato text-[14px] px-2 sm:text-[16px] font-medium leading-[150%] tracking-[0.48px] sm:px-16'> Enter your registered email to receive a reset code.</p>
                </div>
                <div className="">
                    <FormFields
                        type="text"
                        label="Enter your registered email"
                        name="email"
                        placeholder="Enter Your Email "
                    />
                    <div className='py-2 lg:py-3'>
                        <Button
                        onClick={()=>navigate('/admin-otp_verify')}
                         type="submit"
                          variant="primary" 
                          className='w-full py-1 lg:py-3'>
                            Send Code
                        </Button>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Forgot_Password
