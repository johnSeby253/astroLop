import astroOnboardIcon from "@/assets/astrologer-assets/onBoardIcon.png";
import waiting from "@/assets/astrologer-assets/waitingApproval.png";
import OnBoardSideImage from "../OnBoardSideImage";


const WaitingForApproval = () => {
  return (

    <div>
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

        <div className="lg:w-1/2 w-full flex items-center justify-start px-6 md:px-16 2xl:px-24 relative z-20">
          <div className="min-h-screenflex items-center justify-center px-4 py-10">
            <div className="w-full max-w-xl">

              {/* Top Icon */}
              <div className="flex justify-between mb-6">
                <div className="w-14 h-14">
                  <img src={astroOnboardIcon} alt="astroOnboardIcon" />
                </div>
                <div className="">
                  <p className="bg-[#CC9900] text-[#FFF3E0] px-4 py-1 rounded-full text-sm font-medium">Pending Approval</p>
                </div>
              </div>

              {/* Step Indicator */}
              <div className="mb-8">
                <p className="text-[#848485] text-lg font-medium mb-3">
                  Step 5 of 5
                </p>

                <div className="w-full h-2.5 bg-[#FFF3E0] rounded-full relative">
                  <div className="w-5/5 h-2.5 bg-[#550EAC] rounded-full"></div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex justify-end mb-4">

              </div>

              {/* Heading */}
              <h1 className="text-[#2D2D2D] text-3xl md:text-4xl font-bold tracking-tight mb-3">
                Waiting For Approval
              </h1>

              {/* Sub Heading */}
              <p className="text-[#746E6E] text-base md:text-lg font-semibold mb-8">
                Your Cosmic Profile Under Reviewing
              </p>

              {/* Illustration */}
              <div className="flex justify-center mb-8">
                <img
                  src={waiting}
                  alt="waiting"
                  className="w-full max-w-sm"
                />
              </div>

              {/* Description */}
              <p className="text-[#746E6E] text-base md:text-lg font-semibold mb-6">
                Your journey as a verified expert is just a few steps away. Our team is
                currently reviewing your profile and credentials to ensure the highest
                quality of service for our community.
              </p>

              {/* Notification Text */}
              <p className="text-[#550EAC] text-base md:text-lg font-semibold">
                We will notify you via SMS soon as your profile goes live.
              </p>

            </div>
          </div>
        </div>



      </div>
    </div>


  );
};

export default WaitingForApproval;