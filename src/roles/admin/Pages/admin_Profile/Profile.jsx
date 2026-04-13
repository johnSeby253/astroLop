import React, { useRef, useState } from 'react'
import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout'
import camera from '@/assets/admin-assets/camera.svg';
import editz from '@/assets/admin-assets/editIcon.svg';
import Button from '@/common/components/Button';
import ProfilePicEditModal from './components/ProfilePicEditModal';
import EditPersonalDetails from './components/EditPersonalDetails';
import { useAdminDetails } from '../../api_Queries/Authentication/query';
import { useAdminStore } from '../../store/useAdminDetaills';

const Profile = () => {
    const { admin } = useAdminStore();
    console.log("Admin", admin);

    const { data, isLoading, isError } = useAdminDetails(admin?.admin_id);
    console.log("Admin Details", data);

    const fileInputRef = useRef(null);
    const [openProfilePic, setOpenProfilePic] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [openPersonalModal, setOpenPersonalModal] = useState(false);

    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };


    const handleCameraClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const preview = URL.createObjectURL(file);

        setSelectedImage(preview);
        setOpenProfilePic(true);
    };


    if (isLoading) return <div>Loading...</div>;
    return (
        <ContentLayout>
            <div className="p-4 flex flex-col gap-8">
                <h1 className='text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px] '>MY Profile</h1>

                <div className="p-4 flex items-center gap-10 shadow-card rounded-[10px]">
                    <div className="relative w-28 h-28">
                        {/* Profile Image */}
                        <img
                            className="h-full w-full rounded-full object-cover"
                            src={data.admin_profile_pic || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyyCG3jGw_PZPj17ttBPAPxdgPdpLO020L9g&s"}
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
                            <img src={camera} alt="Edit" className="h-5 w-5" />
                        </div>
                    </div>
                    <ProfilePicEditModal
                        open={openProfilePic}
                        setOpen={setOpenProfilePic}
                        image={selectedImage}
                    />
                    <div className="flex flex-col space-y-2">
                        <h2 className='text-primary font-urbanist text-[20px] font-bold leading-normal'> {data?.data?.first_name} {data?.data?.second_name}</h2>
                        <p className='text-[#7A7A7A] font-inter text-[16px] font-medium leading-[15.733px] tracking-[-0.437px]'>{data?.data?.role}</p>
                        <p className='text-[#7A7A7A] font-inter text-[16px] font-medium leading-[15.733px] tracking-[-0.437px]'>Kochi,Kerala</p>
                    </div>
                </div>

                <div className="p-6 flex flex-col items-center gap-5 shadow-card rounded-[10px]">
                    <div className="flex items-center justify-between w-full px-3">
                        <h2 className="text-[#43157C] font-urbanist text-[20px] font-bold leading-normal">Personal information</h2>
                        <Button className='flex items-center gap-1'
                            size='sm'
                            variant='lite_secondary'
                            onClick={() => setOpenPersonalModal(true)}
                        ><img src={editz} alt="" /> Edit</Button>
                    </div>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 p-10">
                        <div className="flex flex-col space-y-2">
                            <p className="text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]">
                                First Name
                            </p>
                            <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal">
                                {data?.data?.first_name}
                            </p>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <p className="text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]">
                                Second  Name
                            </p>
                            <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal">
                                {data?.data?.second_name}
                            </p>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <p className="text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]">
                                Date of birth
                            </p>
                            <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal">
                                 {formatDate(data?.data?.dob)}
                            </p>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <p className="text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]">
                                Email
                            </p>
                            <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal">
                                {data?.data?.email}
                            </p>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <p className="text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]">
                                Phone number
                            </p>
                            <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal">
                                {data?.data?.phone_number}
                            </p>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <p className="text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]">
                                User Role
                            </p>
                            <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal">
                                {data?.data?.role}
                            </p>
                        </div>
                    </div>
                </div>
                <EditPersonalDetails
                    open={openPersonalModal}
                    setOpen={setOpenPersonalModal}
                />

                {/* <div className="p-4 flex flex-col items-center gap-5 shadow-card rounded-[10px]">
                    <div className="flex items-center justify-between w-full">
                        <h2 className="text-[#43157C] font-urbanist text-[20px] font-bold leading-normal">Address</h2>
                        <Button className='flex items-center gap-1'
                            size='sm'
                            variant='lite_secondary'
                            onClick={() => setOpenPersonalModal(true)}
                        ><img src={editz} alt="" /> Edit</Button>
                    </div>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8 ">
                        <div className="flex flex-col space-y-1">
                            <p className="text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]">
                                Country
                            </p>
                            <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal">
                                India
                            </p>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <p className="text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]">
                                State
                            </p>
                            <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal">
                                Kerala
                            </p>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <p className="text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]">
                                City
                            </p>
                            <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal">
                                Kochi
                            </p>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <p className="text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]">
                                Postal Code
                            </p>
                            <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal">
                                869368956
                            </p>
                        </div>

                    </div>
                </div> */}


                   {/* <div className="p-6 flex flex-col items-center gap-5 shadow-card rounded-[10px]">
                    <div className="flex items-center justify-between w-full bg-[#E6FFBD] p-5 rounded-lg">
                        <h2 className="text-[#43157C] font-inter text-[16px] font-semibold tracking-wider">
                           Welcome to your admin profile. Your designation is <span className='font-bold text-[18px] tracking-normal'> {data?.data?.designation?.role_label}</span>. Manage your account and platform settings from here.
                        </h2>
                       
                    </div>
                </div> */}


            </div>

        </ContentLayout>


    )
}

export default Profile
