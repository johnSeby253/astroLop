import FormFields from "@/common/components/FormFields";
import CounterApp from "@/roles/admin/Pages/create_Experts/components/ExperienceCounter";
import ExpertiseSelector from "@/roles/admin/Pages/create_Experts/components/ExpertiseSelector";
import LanguageSelector from "@/roles/admin/Pages/create_Experts/components/LanguageSelector";
import astroOnboardIcon from "@/assets/astrologer-assets/onBoardIcon.png"

import React, { useEffect, useState } from "react";
import Button from "@/common/components/Button";
import { ChevronsLeft } from "lucide-react";
import useExpertFormStore from "@/roles/admin/store/useExpertFormStore";

const AddProfessionalDetails = ({ next, back }) => {
    const setPriceSettingData = useExpertFormStore((state) => state.setPriceSettingData);
    const storedPriceSettings = useExpertFormStore(
        (state) => state.formData.priceSettings
    );

    const [prices, setPrices] = useState({
        chat_price: "",
        call_price: ""
    });

    useEffect(() => {
        setPrices({
            chat_price: storedPriceSettings.chat_price || "",
            call_price: storedPriceSettings.call_price || ""
        });
    }, [storedPriceSettings]);

    const handlePriceChange = (e) => {
        const { name, value } = e.target;

        setPrices((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleNext = () => {
        setPriceSettingData(prices);
        next();
    };
    return (
        <div className="min-h-screen lg:h-screen overflow-y-auto light-scrollbar">

            {/* RIGHT SIDE */}
            <div className=" w-full flex justify-start pe-3  py-10">
                <div className="w-full space-y-6">
                    <div className="w-14 h-14 mb-6">
                        <img src={astroOnboardIcon} alt="astroOnboardIcon" />
                    </div>
                    {/* Step */}
                    <div>
                        <p className="text-zinc-500 text-sm md:text-lg mb-2">
                            Step 2 of 5
                        </p>

                        <div className="w-full h-2 bg-yellow-50 rounded-full relative">
                            <div className="w-2/5 h-full bg-violet-800 rounded-full"></div>
                            <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow"></div>
                        </div>
                    </div>

                    {/* Header */}
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold text-[#2D2D2D]">
                            Add Professional Details
                        </h1>
                        <p className="text-[#746E6E] mt-2">
                            Share about your Cosmic expertise
                        </p>
                    </div>

                    {/* Skills */}

                    <ExpertiseSelector />



                    {/* Language */}
                    <div className="lg:w-[60%]">
                        <LanguageSelector />
                    </div>

                    {/* Experience */}
                    <div>
                        <CounterApp />
                    </div>

                    {/* Price */}
                    <div className="space-y-4 lg:w-[60%]">

                        <FormFields
                            type="text"
                            label="Set Price for chat consultation (₹/min)"
                            name="chat_price"
                            placeholder="40₹/min"
                            value={prices.chat_price}
                            onChange={handlePriceChange}
                        />

                        <FormFields
                            type="text"
                            label="Set Price for call consultation (₹/min)"
                            name="call_price"
                            placeholder="40₹/min"
                            value={prices.call_price}
                            onChange={handlePriceChange}
                        />
                    </div>

                    {/* Button */}
                    <div className=" flex items-center gap-10">
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
                            className='w-full py-1'
                        >
                            Save & Continue
                        </Button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AddProfessionalDetails;