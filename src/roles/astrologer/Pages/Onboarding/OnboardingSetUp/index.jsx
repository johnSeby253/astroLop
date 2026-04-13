import React, { useState } from 'react'
import OnBoardSideImage from '../OnBoardSideImage'
import AddBasicDetails from './AddBasicDetails'
import AddProfessionalDetails from './ProfessionalDetails'
import SetFreeTime from './FreeTime'
import PaymentActivation from './PaymentActivation'

const AstrologerOnBoarding = () => {

    const [step, setStep] = useState(1);

    const renderStep = () => {
        switch (step) {
            case 1:
                return <AddBasicDetails next={() => setStep(2)} />;
            case 2:
                return <AddProfessionalDetails next={() => setStep(3)} back={() => setStep(1)} />;
            case 3:
                return <SetFreeTime next={() => setStep(4)} back={() => setStep(2)} />;
            case 4:
                return <PaymentActivation next={() => setStep(5)} back={() => setStep(3)} />;
            // case 5:
            //     return <PaymentCard next={() => setStep(6)} back={() => setStep(4)} />;
            // case 6:
            //     return <WaitingForApproval back={() => setStep(5)} />;
            default:
                return <AddBasicDetails next={() => setStep(2)} />;
        }
    };

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

            <div className="lg:w-1/2 w-full flex items-center justify-center lg:justify-start px-6 md:px-16 2xl:px-24 relative z-20">
                {renderStep()}
            </div>

            {/* Right */}
            {/* <div className="lg:w-1/2 w-full flex items-center justify-start px-6 md:px-16 2xl:px-24 py- relative z-20">
                <AddBasicDetails />
            </div> */}
            {/* <div className="lg:w-1/2 w-full flex items-center justify-center lg:justify-start px-6 md:px-16 relative z-20 ">
              <AddProfessionalDetails/>
            </div> */}
            {/* <div className="lg:w-1/2 w-full flex items-center justify-start px-6 md:px-16 2xl:px-24 py- relative z-20">
             <SetFreeTime/>
             </div> */}
            {/* <div className="lg:w-1/2 w-full flex items-center justify-start px-6 md:px-16 2xl:px-24 py- relative z-20">
                <PaymentActivation />
            </div> */}
            {/* <div className="lg:w-1/2 w-full flex items-center justify-start px-6 md:px-16 2xl:px-24 py- relative z-20">
            <PaymentCard/>
            </div> */}
            {/* <div className="lg:w-1/2 w-full flex items-center justify-start px-6 md:px-16 2xl:px-24 py- relative z-20">
            <WaitingForApproval/>
            </div> */}

        </div>
    )
}

export default AstrologerOnBoarding
