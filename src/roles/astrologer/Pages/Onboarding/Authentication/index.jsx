import React, { useState } from "react";
import GetStrated from "./GetStrated";
import VerifyOTP from "./VerifyOTP";
import OnBoardSideImage from "../OnBoardSideImage";
import { useNavigate } from "react-router-dom";

const AstrologerLogin = () => {
    const [step, setStep] = useState(1);
    const [phone, setPhone] = useState(""); // store phone here
    const [email, setEmail] = useState(""); // optional if using email

    const handleSendOtp = (enteredPhone) => {
        setPhone(enteredPhone);
        setStep(2); // move to OTP verification
    };

    const handleVerified = () => {
        console.log("OTP verified! Proceed to dashboard or next step");
      
    };

    const handleBack = () => setStep(1);

    return (
        <div className="relative min-h-screen flex flex-col lg:flex-row bg-background overflow-hidden">

            {/* Reflection Gradient Background */}
            <div className="pointer-events-none absolute inset-0 z-10">
                <div className="absolute inset-0 bg-gradient-to-bl from-[var(--color-secondary)]/10 to-[var(--color-primary)]/10"></div>
                <div className="absolute top-0 left-0 w-[40%] h-full 
                    bg-gradient-to-bl from-[var(--color-secondary)] to-[var(--color-primary)] 
                    opacity-20 blur-3xl animate-reflection mix-blend-overlay">
                </div>
            </div>

            {/* Left */}
            <div className="lg:w-1/2 w-full flex items-center justify-center relative z-20">
                <OnBoardSideImage />
            </div>

            {/* Right */}
            <div className="lg:w-1/2 w-full flex items-center justify-start px-6 md:px-16 2xl:px-24 py-12 relative z-20">
                <div className="flex flex-col space-y-5 w-full max-w-md">

                    {/* Step Components */}
                    {step === 1 && <GetStrated onSendOtp={handleSendOtp} />}
                    {step === 2 && (
                        <VerifyOTP
                            phone={phone}         // ✅ pass the phone here
                            email={email}         // optional
                            onBack={handleBack}
                            onVerified={handleVerified}
                        />
                    )}

                    {/* Progress Bars */}
                    <div className="flex gap-2 mt-10 justify-center">
                        <div
                            className={`h-2 rounded-full transition-all duration-300 ${
                                step === 1 ? "w-10 bg-secondary" : "w-6 bg-black/20"
                            }`}
                        ></div>

                        <div
                            className={`h-2 rounded-full transition-all duration-300 ${
                                step === 2 ? "w-10 bg-secondary" : "w-6 bg-black/20"
                            }`}
                        ></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AstrologerLogin;