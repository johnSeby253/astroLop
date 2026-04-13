import React, { useEffect, useState } from 'react'
import astroOnboardIcon from "@/assets/astrologer-assets/onBoardIcon.png"
import FormFields from '@/common/components/FormFields'
import Button from '@/common/components/Button'
import { Mars, Transgender, Venus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import useExpertFormStore from '@/roles/admin/store/useExpertFormStore'

const AddBasicDetails = ({ next }) => {
    const basicDetails = useExpertFormStore((state) => state.formData.basic);
    const [dob, setDob] = useState({ dd: "", mm: "", yyyy: "" });
    const [dobError, setDobError] = useState("");
    const [gender, setGender] = useState(basicDetails?.gender || "male");
    const [formData, setFormData] = useState({
        full_name: basicDetails?.full_name || "",
        phone: basicDetails?.phone || "",
        // email: basicDetails?.email || "",
        gender: basicDetails?.gender || "male",
    });
    const navigate = useNavigate();
    const setBasicDetails = useExpertFormStore((state) => state.setBasicDetails);



    const genderOptions = [
        { label: "Male", value:"male", icon: Mars },
        { label: "Female", value:"female", icon: Venus },
        { label: "Others",value:"other", icon: Transgender },
    ];


    const validateDOB = () => {
        const day = parseInt(dob.dd);
        const month = parseInt(dob.mm);
        const year = parseInt(dob.yyyy);
        const currentYear = new Date().getFullYear();

        if (!day || !month || !year) {
            setDobError("Please enter complete date of birth");
            return false;
        }

        if (day > 31) {
            setDobError("Day cannot be greater than 31");
            return false;
        }

        if (month > 12) {
            setDobError("Month cannot be greater than 12");
            return false;
        }

        if (year > currentYear) {
            setDobError("Year cannot be in the future");
            return false;
        }

        // Check real date (e.g., Feb 30 invalid)
        const date = new Date(year, month - 1, day);
        if (
            date.getFullYear() !== year ||
            date.getMonth() !== month - 1 ||
            date.getDate() !== day
        ) {
            setDobError("Invalid date");
            return false;
        }

        setDobError("");
        return true;
    };

    const handleSubmit = () => {
        if (!validateDOB()) return;

        const dobString = `${dob.yyyy}-${dob.mm}-${dob.dd}`;

        const basic = {
            full_name: formData.full_name,
            gender: formData.gender,
            phone: formData.phone,
            // email: formData.email,
            dob: dobString
        };

        setBasicDetails(basic);

        console.log("Basic Data:", basic);
        next();
    };

    useEffect(() => {
        if (basicDetails?.dob) {
            const [yyyy, mm, dd] = basicDetails.dob.split("-");
            setDob({ dd, mm, yyyy });
        }
    }, [basicDetails]);

    return (
        <div>
            <div className="h-full flex flex-col gap-5">
                <div className="w-full flex items-center justify-center">
                    <div className="w-full max-w-md space-y-6">

                        <div className="py-5">
                            <div className="w-14 h-14 mb-6">
                                <img src={astroOnboardIcon} alt="astroOnboardIcon" />
                            </div>

                            {/* Step */}
                            <div>
                                <p className="text-zinc-500 text-lg mb-3">Step 1 of 5</p>
                                <div className="w-full h-2.5 bg-yellow-50 rounded-full relative">
                                    <div className="w-1/5 h-full bg-violet-800 rounded-full"></div>
                                    <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow"></div>
                                </div>
                            </div>
                        </div>

                        {/* Header */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">
                                Add Basic Details
                            </h1>
                            <p className="text-[#746E6E] text-lg mt-2">
                                Tell us a little about yourself to set up your account.
                            </p>
                        </div>

                        {/* FORM */}
                        <div className="space-y-">
                            <div className="pb-5">
                                <FormFields
                                    type="text"
                                    label="Full Name"
                                    name="full_name"
                                    value={formData.full_name}
                                    placeholder="Enter your full name"
                                    onChange={(e) =>
                                        setFormData({ ...formData, full_name: e.target.value })
                                    }
                                />
                                {/* <FormFields
                                type="text"
                                label="Email"
                                name="email"
                                value={formData.email}
                                placeholder="Enter your Email"
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            /> */}

                                <FormFields
                                    type="text"
                                    label="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    placeholder="Enter your Phone"
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                />
                            </div>

                            {/* Full Name */}


                            {/* DOB */}
                            <div className='pb-3'>
                                <label className="text-[#2D2D2D] font-semibold mb-2 block">
                                    Add your birthday
                                </label>

                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        value={dob.dd}
                                        maxLength={2}
                                        placeholder="DD"
                                        className="w-1/3 h-12 border border-[#7F7F7F] rounded-lg px-3 text-center bg-white"
                                        onChange={(e) =>
                                            setDob({ ...dob, dd: e.target.value.replace(/[^0-9]/g, "") })
                                        }
                                    />

                                    <input
                                        type="text"
                                        value={dob.mm}
                                        maxLength={2}
                                        placeholder="MM"
                                        className="w-1/3 h-12 border border-[#7F7F7F] rounded-lg px-3 text-center bg-white"
                                        onChange={(e) =>
                                            setDob({ ...dob, mm: e.target.value.replace(/[^0-9]/g, "") })
                                        }
                                    />

                                    <input
                                        type="text"
                                        value={dob.yyyy}
                                        maxLength={4}
                                        placeholder="YYYY"
                                        className="w-1/3 h-12 border border-[#7F7F7F] rounded-lg px-3 text-center bg-white"
                                        onChange={(e) =>
                                            setDob({ ...dob, yyyy: e.target.value.replace(/[^0-9]/g, "") })
                                        }
                                    />
                                </div>

                                {dobError && (
                                    <p className="text-red-500 text-sm mt-1">{dobError}</p>
                                )}
                            </div>

                            {/* Gender */}
                            <div>
                                <label className="text-[#2D2D2D] font-semibold mb-2 block">
                                    Select Gender
                                </label>

                                <div className="flex gap-3">
                                    {genderOptions.map((g) => {
                                        const Icon = g.icon;

                                        return (
                                            <button
                                                key={g.value}
                                                type="button"
                                                onClick={() => {
                                                    setGender(g.value);
                                                    setFormData({ ...formData, gender: g.value });
                                                }}
                                                className={`flex-1 h-14 rounded-lg font-semibold transition flex items-center justify-center gap-2
                                                           ${gender === g.value
                                                        ? "bg-[#EA9000] text-white"
                                                        : "bg-[#FFEFD5] text-[#757575]"
                                                    }`}
                                            >
                                                <Icon size={18} />
                                                {g.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>

                        {/* Button */}
                        <Button
                            onClick={handleSubmit}
                            type="submit"
                            variant="primary"
                            className='w-full py-1 lg:py-3 mt-5'
                        >
                            Save & Continue
                        </Button>

                        <div className="">
                            <p className="text-[#746E6E] text-md font-inter mt-2">If you Already have an Account ? <span
                                onClick={() => navigate("/astrologer-login")}
                                className='text-Primary-light underline cursor-pointer' >Login</span></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBasicDetails