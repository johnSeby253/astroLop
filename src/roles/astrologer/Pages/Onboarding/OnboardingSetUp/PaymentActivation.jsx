import astroOnboardIcon from "@/assets/astrologer-assets/onBoardIcon.png";
import razorpay from '@/assets/razorpay.webp'
import Button from "@/common/components/Button";
import useExpertFormStore from "@/roles/admin/store/useExpertFormStore";
import { useCreateAstrologer } from "@/roles/astrologer/api_Queries/Authentication/query";
import { BadgeIndianRupee, ChevronsLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentActivation = ({ next, back }) => {
    const expertFullData = useExpertFormStore((state) => state.formData);
    const resetForm = useExpertFormStore((state) => state.resetForm);
    const createAstrologerMutation = useCreateAstrologer();
    console.log("expertFullData", expertFullData);
    const navigate = useNavigate()

    // const basicData = expertFullData.basic;
    // const ProfessionalData = expertFullData.professional;
    // const PriceData = expertFullData.priceSettings;

    const handleSubmit = async () => {
        try {
            const formData = new FormData();

            // Append JSON fields
            formData.append('basic', JSON.stringify(expertFullData.basic));

            formData.append('professional', JSON.stringify({
                ...expertFullData.professional,
                certificates: [] // files appended separately
            }));

            formData.append('priceSettings', JSON.stringify(expertFullData.priceSettings));

            // Append profile image only if file exists
            if (
                expertFullData?.basic?.profile_image &&
                expertFullData.basic.profile_image instanceof File
            ) {
                formData.append('profile_image', expertFullData.basic.profile_image);
            }

            // Append certificate files only if files exist
            if (
                expertFullData?.professional?.certificates &&
                expertFullData.professional.certificates.length > 0
            ) {
                expertFullData.professional.certificates.forEach((file) => {
                    if (file instanceof File) {
                        formData.append('certificates', file);
                    }
                });
            }

            // Debug FormData
            console.log('--- FormData content ---');
            for (let pair of formData.entries()) {
                console.log(pair[0], pair[1]);
            }

            createAstrologerMutation.mutate(formData, {
                onSuccess: (response) => {
                    resetForm();
                    navigate('/astrologer-paymentStatus');
                },
                onError: (error) => {
                    console.error('Error submitting astrologer:', error);
                }
            });

        } catch (error) {
            console.error('Error submitting astrologer:', error);
            alert('Something went wrong while registering astrologer.');
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-xl">

                {/* Top Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-14 h-14">
                        <img src={astroOnboardIcon} alt="astroOnboardIcon" />
                    </div>
                </div>

                {/* Step Indicator */}
                <div className="mb-8">
                    <p className="text-[#848485] text-lg font-medium mb-3">
                        Step 4 of 5
                    </p>

                    <div className="w-full h-2.5 bg-[#FFF3E0] rounded-full relative">
                        <div className="w-4/5 h-2.5 bg-[#550EAC] rounded-full"></div>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-[#2D2D2D] text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4">
                    Payment For Activation
                </h1>

                <p className="text-[#746E6E] text-base md:text-lg font-semibold leading-7 tracking-wide mb-8">
                    Pay a one-time processing fee to ensure your profile is verified,
                    secured, and prioritized for new user discovery.
                </p>

                {/* Payment Card */}
                <div className="w-full rounded-xl border border-[#B0B0B0] p-4 md:p-5 space-y-4 mb-6">

                    <h2 className="text-[#2D2D2D] text-lg md:text-xl font-semibold">
                        Payment Breakdown
                    </h2>

                    <div className="bg-[#FFFBF5] rounded-md flex justify-between items-center px-3 py-2">
                        <span className="text-[#2D2D2D] text-sm md:text-base font-medium">
                            Profile Activation Fee
                        </span>
                        <span className="text-[#550EAC] font-bold">₹1499</span>
                    </div>

                    <div className="bg-[#FFFBF5] rounded-md flex justify-between items-center px-3 py-2">
                        <span className="text-[#2D2D2D] text-sm md:text-base font-medium">
                            Priority Listing (month)
                        </span>
                        <span className="text-[#550EAC] font-bold">₹500</span>
                    </div>

                    <div className="bg-[#F8F3FF] rounded-md flex justify-between items-center px-3 py-3">
                        <span className="text-[#2D2D2D] font-bold">
                            Grand Total
                        </span>
                        <span className="text-[#550EAC] text-lg md:text-xl font-bold">
                            ₹1999
                        </span>
                    </div>
                </div>

                {/* Secure Payment */}
                <div className="flex items-center gap-2 ">
                    <BadgeIndianRupee color="#706E6E" size={20} />
                    <p className="text-[#706E6E] text-sm md:text-base">
                        Secure payment with
                    </p>
                    <img src={razorpay} className="h-24" alt="" />
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
                        onClick={handleSubmit}
                        type="submit"
                        variant="primary"
                        className='w-full py-1 '
                    >
                        PayNow
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default PaymentActivation;