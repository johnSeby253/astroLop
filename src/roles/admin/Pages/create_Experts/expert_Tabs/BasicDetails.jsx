/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react'
import camera from '@/assets/admin-assets/camera.svg';
import profilePic from '@/assets/admin-assets/loginicon.webp';
import ProfilePicEditModal from '../../admin_Profile/components/ProfilePicEditModal';
import SelectField from '@/common/components/SelectField';
import FormFields from '@/common/components/FormFields';
import Button from '@/common/components/Button';
import useExpertFormStore from '@/roles/admin/store/useExpertFormStore';
import { ChevronsRight } from 'lucide-react';
import CustomToggle from '@/common/components/CustomToggle';


const BasicDetails = ({ setActiveTab }) => {
    const [openProfilePic, setOpenProfilePic] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [formData, setFormData] = useState({
        full_name: "",
        phone: "",
        email: "",
        gender: "",
        state: "",
        dob: "",
        find_expert: false,
        profile_image: null
    });


    const setBasicDetails = useExpertFormStore((state) => state.setBasicDetails);
    const basicData = useExpertFormStore((state) => state.formData.basic);

    console.log("Basics", basicData);




    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    const handleContinue = () => {

        const dataToSave = {
            ...formData,
            profile_image: profileImage
        };

        setBasicDetails(dataToSave);

        setActiveTab("professional_details");
    };

    useEffect(() => {
        if (basicData) {
            setFormData({
                full_name: basicData.full_name || "",
                phone: basicData.phone || "",
                email: basicData.email || "",
                gender: basicData.gender || "",
                state: basicData.state || "",
                dob: basicData.dob || "",
                find_expert: basicData.find_expert || false,
                profile_image: basicData.profile_image || null
            });
            setProfileImage(basicData.profile_image || null);
        }
    }, [basicData]);
    console.log("Om", profileImage);


    return (
        <div className='p-4'>
            <div className="w-full flex items-center justify-between ">
                <div className="relative w-28 h-28">
                    {/* Profile Image */}
                    <img
                        className="h-full w-full rounded-full object-cover"
                        src={profileImage || profilePic}
                        alt="Profile"
                        onError={() => setProfileImage(profilePic)}
                    />
                    <div
                        onClick={() => { setOpenProfilePic(true); }}
                        className="absolute bottom-0 right-0 h-10 w-10 bg-primary rounded-full flex items-center justify-center">
                        <img src={camera} alt="Edit" className="h-5 w-5" />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <p class="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal">As an Expert :</p>
                    <CustomToggle
                        checked={formData.find_expert}
                        onChange={(value) =>
                            setFormData((prev) => ({
                                ...prev,
                                find_expert: value
                            }))
                        }
                    />
                </div>
                <ProfilePicEditModal
                    open={openProfilePic}
                    setOpen={setOpenProfilePic}
                    onImageUpdate={setProfileImage}
                    image={profileImage}
                />
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-10 pb-5">
                <FormFields
                    type="text"
                    label="Full Name"
                    name="full_name"
                    placeholder="Enter first name"
                    value={formData.full_name}
                    onChange={handleChange}
                />
                <FormFields
                    type="text"
                    label="Phone Number"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <FormFields
                    type="text"
                    label="Email"
                    name="email"
                    placeholder="Enter the Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <SelectField
                    label="Gender"
                    value={formData.gender}
                    onChange={(value) =>
                        setFormData((prev) => ({
                            ...prev,
                            gender: value
                        }))
                    }
                    options={[
                        { label: "Male", value: "male" },
                        { label: "Female", value: "female" },
                        { label: "Other", value: "other" }
                    ]}
                />

                <FormFields
                    type="datepicker"
                    label="Date of Birth"
                    mode="single"
                    value={formData.dob}
                    onChange={(value) =>
                        setFormData((prev) => ({
                            ...prev,
                            dob: value
                        }))
                    }
                />
                <SelectField
                    label="State"
                    value={formData.state}
                    onChange={(value) =>
                        setFormData((prev) => ({
                            ...prev,
                            state: value
                        }))
                    }
                    options={[
                        { label: "Kerala", value: "kerala" },
                        { label: "Tamil Nadu", value: "tamil_nadu" },
                        { label: "Other", value: "other" },
                    ]}
                />


            </div>

            <div className="flex items-center justify-end gap-4 pt-8">


                <Button
                    className='flex items-center justify-center gap-3'
                    size='md'
                    variant='primary'
                    onClick={handleContinue}
                >Continue <ChevronsRight color='#ffff' /></Button>
            </div>

        </div>
    )
}

export default BasicDetails
