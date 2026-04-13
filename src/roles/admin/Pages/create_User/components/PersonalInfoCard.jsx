import { useEffect, useRef, useState } from "react";
import FormFields from "@/common/components/FormFields";
import SelectField from "@/common/components/SelectField";
import camera from '@/assets/admin-assets/camera.svg';
import { useCreateUserStore } from "@/roles/admin/store/useCreateUserStore";


const PersonalInfoCard = () => {
    const [date, setDate] = useState();
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const { personalInfo, setPersonalInfo } = useCreateUserStore();


    const handleCameraClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const preview = URL.createObjectURL(file);
        setSelectedImage(preview);
        // Save file to Zustand
        setPersonalInfo("admin_profile_pic", file);
    };

    useEffect(() => {
        return () => {
            if (selectedImage) {
                URL.revokeObjectURL(selectedImage);
            }
        };
    }, [selectedImage]);

    useEffect(() => {
        if (personalInfo.dob) {
            setDate(personalInfo.dob);
        }
    }, []);

    return (
        <div className="bg-white p-6 rounded-xl  shadow-card">

            <h2 className="text-primary font-urbanist text-[20px] font-bold leading-normal">
                Personal information
            </h2>


            <div className="flex flex-col space-y-3 pt-5">
                <div className="relative w-28 h-28">
                    {/* Profile Image */}
                    <img
                        className="h-full w-full rounded-full object-cover"
                        src={
                            selectedImage ||
                            (personalInfo.admin_profile_pic && URL.createObjectURL(personalInfo.admin_profile_pic)) ||
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyyCG3jGw_PZPj17ttBPAPxdgPdpLO020L9g&s"
                        }
                    />
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                    />

                    {/* Camera Icon */}
                    <div
                        onClick={handleCameraClick}
                        className="absolute bottom-0 right-0 h-10 w-10 bg-primary rounded-full flex items-center justify-center">
                        <img src={camera} alt="Edit" className="h-5 w-5" />
                    </div>
                </div>


                <div className=" h-137.5 vertical-scrollbar overflow-y-scroll p-4">
                    <FormFields
                        type="text"
                        label="First Name"
                        name="first_name"
                        placeholder="Enter first name"
                        inputClassName="py-0 h-10 text-sm"
                        labelClassName="!text-[14px]"
                        containerClassName="pb-1"
                        value={personalInfo.first_name || ""}
                        onChange={(e) => setPersonalInfo("first_name", e.target.value)}

                    />
                    <FormFields
                        type="text"
                        label="Second Name"
                        name="second_name"
                        placeholder="Enter Second Name"
                        inputClassName="py-0 h-10 text-sm"
                        labelClassName="!text-[14px]"
                        containerClassName="pb-1"
                        value={personalInfo.second_name || ""}
                        onChange={(e) => setPersonalInfo("second_name", e.target.value)}

                    />
                    <FormFields
                        type="text"
                        label="Email"
                        name="email"
                        placeholder="Enter the Email"
                        inputClassName="py-0 h-10 text-sm"
                        labelClassName="!text-[14px]"
                        containerClassName="pb-1"
                        value={personalInfo.email || ""}
                        onChange={(e) => setPersonalInfo("email", e.target.value)}

                    />

                    <FormFields
                        type="datepicker"
                        label="Date of Birth"
                        mode="single"
                        value={date}
                        onChange={(val) => {
                            setDate(val);
                            setPersonalInfo("dob", val);
                        }}
                        inputClassName="py-0 h-10 text-sm"
                        labelClassName="!text-[14px]"
                        containerClassName="pb-1"
                    />
                    <FormFields
                        type="text"
                        label="Phone Number"
                        name="phone_number"
                        placeholder="Enter Phone Number"
                        inputClassName="py-0 h-10 text-sm"
                        labelClassName="!text-[14px]"
                        containerClassName="pb-1"
                        value={personalInfo.phone_number || ""}
                        onChange={(e) => setPersonalInfo("phone_number", e.target.value)}
                    />

                    <SelectField
                        label="Gender"
                        options={[
                            { label: "Male", value: "Male" },
                            { label: "Female", value: "Female" },
                            { label: "Other", value: "Other" }
                        ]}
                        value={personalInfo.gender || ""}
                        onChange={(val) => setPersonalInfo("gender", val)}
                    />
                </div>


            </div>
        </div>
    );
};

export default PersonalInfoCard;