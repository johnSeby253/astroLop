import React, { useState } from 'react'
import astroOnboardIcon from "@/assets/astrologer-assets/onBoardIcon.png"
import FormFields from '@/common/components/FormFields'
import Button from '@/common/components/Button'
import { useRequestAstrologerOTP } from '@/roles/astrologer/api_Queries/Authentication/query'
import { useNavigate } from 'react-router-dom'


const GetStrated = ({ onSendOtp }) => {
    const [phone, setPhone] = useState("");
    const requestOtpMutation = useRequestAstrologerOTP();

    const navigate = useNavigate();

    const handleSendOtp = () => {
        if (!phone) {
            showError("Please enter your phone number");
            return;
        }

        // Trigger OTP request mutation
        requestOtpMutation.mutate(
            { phone },
            {
                onSuccess: (data) => {

                    console.log("DADA", phone);

                    // Call parent callback to move to OTP verification step
                    onSendOtp && onSendOtp(phone);
                },
                onError: (err) => {
                    showError(err?.response?.data?.message || "Failed to send OTP");
                }
            }
        );
    };

    return (
        <div>
            <div className="w-full max-w-md space-y-4">

                {/* Logo Box */}
                <div className="w-14 h-14  mb-6">
                    <img src={astroOnboardIcon} alt="astroOnboardIcon" />
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-[#2C2A2A] mb-4">
                    Get Started
                </h1>

                <p className="text-[#746E6E] mb-8 text-lg">
                    Enter your mobile number to begin your journey as a verified Astrologer
                </p>

                {/* Phone Input */}
                <div className="mb-5">
                    <FormFields
                        type="text"
                        label="Phone Number"
                        name="phone"

                        placeholder="Enter Your Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                </div>

                {/* Terms */}
                <div className="flex items-center gap-2 mb-6">
                    <input type="checkbox" className="accent-[#42147B]" />
                    <p className="text-sm font-medium text-black">
                        I Agree the Terms & Condition
                    </p>
                </div>

                {/* Button */}
                <Button
                    onClick={handleSendOtp}
                    type="button"
                    variant="primary"
                    className='w-full py-1 lg:py-3 text-lg font-medium'
                    disabled={requestOtpMutation.isLoading} // disable while loading
                >
                    {requestOtpMutation.isLoading ? "Sending OTP..." : "Send OTP"}
                </Button>

                {/* Slider dots */}


            </div>



            <div className="py-4">
                <p className="text-[#746E6E] text-md font-inter mt-2">If you don't have an account? Please <span
                    onClick={() => navigate("/astrologer")}
                    className='text-Primary-light underline cursor-pointer'> Sign-up</span></p>
            </div>




        </div>
    )
}

export default GetStrated
