import Button from '@/common/components/Button'
import CustomModal from '@/common/components/CustomModal'
import FormFields from '@/common/components/FormFields'
import SelectField from '@/common/components/SelectField'
import { Camera } from 'lucide-react'
import React, { useRef, useState } from 'react'
import SpecilizationList from './SpecilizationList'
import EditLanguageSelector from './EditLanguageSelector'
import EditExperienceCounter from './EditExperienceCounter'
import EditFileUploader from './EditFileUploader'
import { useEditAstrologer } from '@/roles/astrologer/api_Queries/Profile/query'

const OpenEditProfileModal = ({ open, setOpen, data }) => {
    const [date, setDate] = useState(data?.data?.basicDetails?.[0]?.astrologer_DOB);
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({
        full_name: data?.data?.basicDetails?.[0]?.astrologer_Name || "",
        email: data?.data?.basicDetails?.[0]?.astrologer_Email || "",
        phone: data?.data?.basicDetails?.[0]?.astrologer_Phone || "",
        gender: data?.data?.basicDetails?.[0]?.astrologer_Gender || "",
        dob: data?.data?.basicDetails?.[0]?.astrologer_DOB || "",
        chat_price: data?.data?.priceDetails?.[0]?.astrologer_chatPrice || "",
        call_price: data?.data?.priceDetails?.[0]?.astrologer_callPrice || "",
        consultation_price: data?.data?.priceDetails?.[0]?.astrologer_consultationPrice || "",
    });
    const [expertise, setExpertise] = useState(
        data?.data?.professionalDetails?.[0]?.astrologer_Expertise || []
    );
    const [languages, setLanguages] = useState(
        data?.data?.professionalDetails?.[0]?.astrologer_Languages || []
    );
    const [experience, setExperience] = useState(
        data?.data?.professionalDetails?.[0]?.astrologer_Experience || 0
    );
    const [certificates, setCertificates] = useState(
        data?.data?.professionalDetails?.[0]?.astrologer_Certificates || []
    );
    const isExpert = data?.data?.basicDetails?.[0]?.find_expert
    // console.log("Experti", data);
    const { mutate: updateAstrologer, isPending } = useEditAstrologer();


    const handleCameraClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const preview = URL.createObjectURL(file);

        setSelectedImage(preview);
        // setOpenProfilePic(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        const payload = {
            basic: {
                full_name: formData.full_name,
                email: formData.email,
                phone: formData.phone,
                gender: formData.gender,
                dob: date,
                state: "",
                find_expert: isExpert
            },
            professional: {
                expertise,
                languages,
                yearsOfExperience: experience,
                astrologer_FreeTime: 20
            },
            priceSettings: {
                chat_price: formData.chat_price,
                call_price: formData.call_price,
                expert_price: formData.consultation_price
            }
        };

        const formDataToSend = new FormData();

        formDataToSend.append("basic", JSON.stringify(payload.basic));
        formDataToSend.append("professional", JSON.stringify(payload.professional));
        formDataToSend.append("priceSettings", JSON.stringify(payload.priceSettings));

        // Profile image
        if (fileInputRef.current?.files[0]) {
            formDataToSend.append("astrologer_profile_pic", fileInputRef.current.files[0]);
        }

        // Certificates (only files)
        if (certificates && certificates.length) {
            certificates.forEach((file) => {
                if (file instanceof File) {
                    formDataToSend.append("certificates", file);
                }
            });
        }

        // DEBUG
        for (let [key, value] of formDataToSend.entries()) {
            console.log("KEY:", key);
            console.log("VALUE:", value);
        }

        updateAstrologer({
            id: data?.data?._id,
            data: formDataToSend
        });
        setOpen(false)

    };

    return (
        <>
            <CustomModal open={open} onOpenChange={setOpen}
                className="min-w-[70vw]">
                <h1 className="text-[#43157C] font-urbanist text-[20px] font-bold leading-normal">Edit Astrolger Profile</h1>
                <div className="h-[700px] overflow-y-auto light-scrollbar px-6 py-4 flex flex-col gap-4">
                    <div className="flex items-center justify-center py-5 rounded-lg shadow-card">
                        <div className="relative w-30 h-30">
                            {/* Profile Image */}
                            <img
                                className="h-full w-full rounded-full object-cover"
                                src={
                                    selectedImage ||
                                    data?.data?.basicDetails?.[0]?.astrologer_profile_pic ||
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyyCG3jGw_PZPj17ttBPAPxdgPdpLO020L9g&s"
                                }
                                alt="Profile"
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
                                <Camera color='white' />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-lg shadow-card p-5">
                        <FormFields
                            type="text"
                            label="Full Name"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            placeholder="Enter full name"
                        />

                        <FormFields
                            type="text"
                            label="Email"
                            name="email"
                            placeholder="Enter the Email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <FormFields
                            type="datepicker"
                            label="Date of Birth"
                            mode="single"
                            value={date}
                            onChange={(val) => {
                                setDate(val);
                                setFormData((prev) => ({ ...prev, dob: val }));
                            }}
                        />
                        <FormFields
                            type="text"
                            label="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter Phone Number"
                        />
                        <SelectField
                            label="Gender"
                            name="country"
                            value={formData.gender}
                            onChange={(value) =>
                                setFormData((prev) => ({ ...prev, gender: value }))
                            }
                            placeholder="Select Gender"
                            options={[
                                { label: "Male", value: "male" },
                                { label: "Female", value: "female" },
                                { label: "Other", value: "other" },
                            ]}
                        />


                    </div>

                    <div className="rounded-lg shadow-card p-5 flex flex-col gap-6">
                        <div className="">
                            <SpecilizationList
                                data={expertise}
                                onChange={setExpertise}
                            />
                        </div>

                        <div className=" w-full flex flex-col gap-4 md:flex-row items-start md:items-center justify-between">
                            <div className="">
                                <EditLanguageSelector
                                    data={languages}
                                    onChange={setLanguages}
                                />
                            </div>
                            <div className="md:px-10">
                                <EditExperienceCounter
                                    data={experience}
                                    onChange={setExperience}
                                />
                            </div>
                        </div>

                        <div className="">
                            <EditFileUploader
                                data={certificates}
                                onChange={setCertificates}
                            />
                        </div>
                    </div>

                    <div className=" rounded-lg shadow-card p-5 flex flex-col gap-6">
                        <div className="w-[50%]">

                            {isExpert ? (
                                <FormFields
                                    type="text"
                                    label="Consultation Price"
                                    name="consultation_price"
                                    value={formData.consultation_price}
                                    onChange={handleChange}
                                    placeholder="Enter consultation price"
                                />
                            ) : (
                                <>
                                    <FormFields
                                        type="text"
                                        label="Chat Price"
                                        name="chat_price"
                                        value={formData.chat_price}
                                        onChange={handleChange}
                                        placeholder="Enter chat price"
                                    />

                                    <FormFields
                                        type="text"
                                        label="Call Price"
                                        name="call_price"
                                        value={formData.call_price}
                                        onChange={handleChange}
                                        placeholder="Enter call price"
                                    />
                                </>
                            )}



                        </div>
                    </div>



                </div>


                <div className="flex items-center justify-end gap-4 py-">
                    <Button
                        onClick={() => setOpen(false)}
                        size='md'
                        variant='lite_secondary'
                    > cancel</Button>

                    <Button
                        size='md'
                        variant='primary'
                        onClick={handleSave}
                    > Save Changes</Button>
                </div>
            </CustomModal>
        </>
    )
}

export default OpenEditProfileModal
