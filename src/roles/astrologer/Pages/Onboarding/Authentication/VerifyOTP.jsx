import React, { useState } from "react";
import astroOnboardIcon from "@/assets/astrologer-assets/onBoardIcon.png"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import Button from "@/common/components/Button";
import { ChevronsLeft } from "lucide-react";
import { useVerifyAstrologerOTP } from "@/roles/astrologer/api_Queries/Authentication/query";
import { useNavigate } from "react-router-dom";


const VerifyOTP = ({ phone, email, onBack, onVerified }) => {
    const [otp, setOtp] = useState("");
    const verifyOtpMutation = useVerifyAstrologerOTP();
    const navigate = useNavigate();

    console.log("Phone", phone);


    const handleVerify = () => {
        if (otp.length !== 6) {
            showError("Please enter the 6-digit OTP");
            return;
        }

        verifyOtpMutation.mutate(
            { phone, email, otp },
            {
                onSuccess: () => {
                    // Call parent callback to move to next step (e.g., dashboard or professional details)
                    onVerified && onVerified();
                    navigate("/astrologer-dashboard");
                },
            }
        );
    };

    return (
        <div className="w-full max-w-md">
            {/* Icon */}
            <div className="w-full flex items-center justify-center">
                <div className="w-14 h-14  mb-6">
                    <img src={astroOnboardIcon} alt="astroOnboardIcon" />
                </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#2C2A2A] text-center mb-4">
                Verify Number
            </h1>

            {/* Description */}
            <p className="text-[#746E6E] text-center mb-10">
                Verify your mobile number by entering the 6-digit code sent to your mobile number.
            </p>

            {/* OTP Inputs */}
            <div className="w-full flex flex-col items-center gap-5">
                <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
                    <InputOTPGroup className="flex gap-3 p-2">
                        {[...Array(6)].map((_, index) => (
                            <InputOTPSlot
                                key={index}
                                index={index}
                                className="border border-primary text-primary"
                            />
                        ))}
                    </InputOTPGroup>
                </InputOTP>
                <div className="w-[80%] py-3">
                    <Button
                        onClick={handleVerify}
                        type="button"
                        variant="primary"
                        className="w-full py-1 lg:py-3"
                        disabled={verifyOtpMutation.isLoading}
                    >
                        {verifyOtpMutation.isLoading ? "Verifying..." : "Verify OTP"}
                    </Button>
                </div>

            </div>



            {/* Change Number */}
            <div className="py-2 flex items-center justify-center">
                <button
                    onClick={onBack}
                    className="w- flex items-center justify-center gap-   text-[#746E6E]"
                >
                    <ChevronsLeft className="text-primary" />
                    <p className="underine"> Change phone number</p>
                </button>
            </div>

        </div>
    );
};

export default VerifyOTP;