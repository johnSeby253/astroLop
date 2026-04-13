import React from 'react'
import login_bg from "../../../../assets/admin-assets/admin-login_bg.svg"
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import Button from '@/common/components/Button'
import { useNavigate } from 'react-router-dom'


const OTP_Verification = () => {
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
            <div className="w-[90%] bg-background shadow-card p-5 lg:p-6 flex flex-col gap-10 items-center rounded-[21px]  lg:w-[30%]">
                <div className="flex flex-col gap-3">
                    <h1 className='text-text-black text-center font-plus-jakarta text-[20px] sm:text-[40px] font-bold leading-[120%] tracking-[0.4px]'>Code Verifcation</h1>
                    <p className='text-greytext text-center font-lato text-[14px] px-2 sm:text-[16px] font-medium leading-[150%] tracking-[0.48px] sm:px-16'>
                        Enter the verification code we just sent on your email address</p>
                </div>
                <div className="w-full flex flex-col items-center gap-5">
                    <InputOTP
                        maxLength={6}
                    // value={otp}
                    // onChange={(value) => setOtp(value)}
                    >
                        <InputOTPGroup className='flex gap-3 p-2'>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                    <div className="w-[80%] py-3">
                        <Button
                        onClick={()=>navigate('/admin-create_password')}
                         type="submit"
                          variant="primary" 
                          className='w-full py-1 lg:py-3'>
                            Verify OTP
                        </Button>
                    </div>

                </div>


            </div>
        </div>


    )
}

export default OTP_Verification
