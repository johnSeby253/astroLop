/* eslint-disable react-hooks/exhaustive-deps */
 
import useExpertFormStore from "@/roles/admin/store/useExpertFormStore";
import { useEffect, useState } from "react";

export default function CounterApp() {

    const setProfessionalData = useExpertFormStore((state) => state.setProfessionalData);
    const professionalData = useExpertFormStore((state) => state.formData.professional);

    const [years, setYears] = useState(0);
    const selectedYear = years

    useEffect(() => {
        if (professionalData.yearsOfExperience !== undefined) {
            setYears(professionalData.yearsOfExperience);
        }
    }, [professionalData.yearsOfExperience])

    // Update store when local state changes
    useEffect(() => {
        if (!selectedYear) return
        setProfessionalData({ yearsOfExperience: years });
    }, [selectedYear]);




    const decrease = () => {
        if (years > 0) setYears(years - 1);
    };

    const increase = () => {
        setYears(years + 1);
    };

    return (
        <div className=" w-full h-full">

            <div className=" flex-col flex w-fit  space-y-3">
                <label className="text-[#2D2D2D] font-inter text-[14px] font-semibold leading-5.25">Years of Experience</label>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={decrease}
                        className="bg-purple-600 text-2xl flex items-center justify-center text-white  w-8 h-8 rounded-sm hover:bg-purple-700"
                    >
                        -
                    </button>
                    <span className="px-4 rounded-md flex items-center font-bold border border-border-line">{years}</span>
                    <button
                        onClick={increase}
                        className="bg-purple-600 text-2xl flex items-center justify-center text-white w-8 h-8 rounded-sm hover:bg-purple-700"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>


    );
}
