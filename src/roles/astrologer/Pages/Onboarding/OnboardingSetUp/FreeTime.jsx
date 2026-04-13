import astroOnboardIcon from "@/assets/astrologer-assets/onBoardIcon.png";
import Button from "@/common/components/Button";
import useExpertFormStore from "@/roles/admin/store/useExpertFormStore";
import { ChevronsLeft } from "lucide-react";
import { useState } from "react";

const SetFreeTime = ({ next, back }) => {
    const setProfessionalData = useExpertFormStore((state) => state.setProfessionalData);
    const professionalData = useExpertFormStore((state) => state.formData.professional);
    const [selected, setSelected] = useState(professionalData.astrologer_FreeTime?.toString() || "3");

    const options = ["3", "5", "10", "15"];


    const handleNext = () => {
        setProfessionalData({
            astrologer_FreeTime: Number(selected)
        });

        next();
    };

    return (
        <div className="min-h-screen  flex items-center justify-center px-4">
            <div className="w-full max-w-xl">

                {/* Logo */}
                <div className="w-14 h-14 mb-6">
                    <img src={astroOnboardIcon} alt="astroOnboardIcon" />
                </div>

                {/* Step */}
                <div className="mb-6">
                    <div className="text-[#848485] text-lg font-medium mb-2">
                        Step 3 of 5
                    </div>

                    <div className="w-full h-2.5 bg-[#FEE59A] rounded-full relative">
                        <div className="w-3/5 h-2.5 bg-[#5C1BAE] rounded-full"></div>
                        <div className="absolute left-[59%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow"></div>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-[#2D2D2D] mb-2">
                    Set Free Time
                </h1>

                <p className="text-[#746E6E] text-lg mb-6">
                    New users can discover you faster when you offer a free time & build
                    your rating
                </p>

                {/* Options */}
                <div className="mb-8">
                    <p className="text-[#2D2D2D] text-lg font-semibold mb-3">
                        Set your free time offer
                    </p>

                    {options.map((time) => (
                        <div
                            key={time}
                            onClick={() => setSelected(time)}
                            className="flex items-center gap-3 cursor-pointer mb-3"
                        >
                            <div
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected === time
                                    ? "border-[#5C1BAE]"
                                    : "border-[#A4A4A4]"
                                    }`}
                            >
                                {selected === time && (
                                    <div className="w-2.5 h-2.5 bg-[#5C1BAE] rounded-full"></div>
                                )}
                            </div>

                            <span className="text-[#2D2D2D] text-base font-medium">
                                {time} Minutes
                            </span>
                        </div>
                    ))}
                </div>

                {/* Why Offer */}
                <div className="mb-10">
                    <p className="text-[#2D2D2D] text-lg font-semibold mb-3">
                        Why offer free time offer
                    </p>

                    <div className="bg-[#FBF8FF] border border-[#A4A4A4] rounded-2xl p-5 space-y-3">
                        <p className="text-[#2D2D2D]">
                            <span className="font-bold">Verified Leads:</span> Free time
                            ensuring you are building a new client base.
                        </p>

                        <p className="text-[#2D2D2D]">
                            <span className="font-bold">Build Trust:</span> New users are 70%
                            more likely to start a paid consultation after a 5-minute free
                            introduction.
                        </p>
                    </div>
                </div>

                {/* Button */}
                <div className="w-full flex items-center gap-10">
                    <button
                        onClick={back}
                        className="flex items-center justify-center gap-3 text-primary   "
                        variant="paginationButtons"
                    >
                        <ChevronsLeft />

                    </button>

                    <Button
                        onClick={handleNext}
                        type="submit"
                        variant="primary"
                        className='w-full py-1 '
                    >
                        Save & Continue
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SetFreeTime;