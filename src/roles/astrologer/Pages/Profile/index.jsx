import Button from '@/common/components/Button';
import { Edit, HeartHandshake, IndianRupee, MessageSquare, Phone } from 'lucide-react';
import React, { useState } from 'react'
import OpenEditProfileModal from './Modal/OpenEditProfileModal';
import { useGetAstrologerById } from '../../api_Queries/Profile/query';
import { format } from 'date-fns';

const AstroProfile = () => {

    // const [openProfilePic, setOpenProfilePic] = useState(false);
    const [openPersonalModal, setOpenPersonalModal] = useState(false);
    const astrologerId = localStorage.getItem("astrologer_id");

    const { data, isLoading, isError } = useGetAstrologerById(astrologerId);
    console.log("Fey", data);

    if (isLoading) {
        return (
            <div className="">Loading....</div>
        )
    }

    const basic = data?.data?.basicDetails?.[0];
    const professional = data?.data?.professionalDetails?.[0];
    const price = data?.data?.priceDetails?.[0];


    const formatDOB = (dateString) => {
        if (!dateString) return "";
        return format(new Date(dateString), "dd MMM yyyy");
    };



    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const preview = URL.createObjectURL(file);

        setSelectedImage(preview);
        // setOpenProfilePic(true);
    };
    return (
        <div className='flex flex-col gap-3'>
            <div className="w-full bg-white rounded-xl shadow-[0px_4px_10.5px_rgba(58,58,58,0.17)] p-5 sm:p-6 md:p-7">

                <h2 className="text-[#2D2D2D] text-lg sm:text-xl font-semibold font-inter">
                    Profile Overview
                </h2>

                <p className="text-[#605F5F] text-sm sm:text-[16] font-semibold font-manrope mt-1">
                    Manage your astrologer profile, pricing here.
                </p>

            </div>

            <div className="p-4 flex items-center justify-between gap-10 shadow-card rounded-[10px]">
                <div className="flex items-center gap-10 p-4">
                    <div className="relative w-28 h-28">
                        {/* Profile Image */}
                        <img
                            className="h-full w-full rounded-full object-cover"
                            src={`http://175.1.1.177:5000/${basic?.astrologer_profile_pic}`||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyyCG3jGw_PZPj17ttBPAPxdgPdpLO020L9g&s"}
                            alt="Profile"
                        />

                        {/* <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                    /> */}

                        {/* Camera Icon */}
                        {/* <div
                        onClick={handleCameraClick}
                        className="absolute bottom-0 right-0 h-10 w-10 bg-primary rounded-full flex items-center justify-center">
                        <Camera color='white'/>
                    </div> */}
                    </div>
                    {/* <ProfilePicEditModal
                    open={openProfilePic}
                    setOpen={setOpenProfilePic}
                    image={selectedImage}
                /> */}
                    <div className="flex flex-col space-y-2">
                        <h2 className='text-primary font-urbanist text-[20px] font-bold leading-normal'> {basic?.astrologer_Name}</h2>
                        <p className='text-[#7A7A7A] font-inter text-[16px] font-medium leading-[15.733px] tracking-[-0.437px]'>Astrologer</p>
                        <p className='text-[#7A7A7A] font-inter text-[16px] font-medium leading-[15.733px] tracking-[-0.437px]'>{basic?.astrologer_State}</p>
                    </div>
                </div>
                <div className="px-10">
                    <Button className='flex items-center gap-1'
                        size='sm'
                        variant='lite_secondary'
                        onClick={() => setOpenPersonalModal(true)}
                    ><Edit size={18} /> Edit</Button>
                </div>
                <OpenEditProfileModal
                    open={openPersonalModal}
                    setOpen={setOpenPersonalModal}
                    data={data}
                />
            </div>

            <div className="p-6 flex flex-col items-center gap-5 shadow-card rounded-[10px]">
                <div className="flex items-center  w-full px-3">
                    <h2 className="text-[#43157C] font-urbanist text-[20px] font-bold leading-normal">Basic Information</h2>

                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 p-4">
                    <div className="flex flex-col space-y-2">
                        <p className="text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]">
                            First Name
                        </p>
                        <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal">
                            {basic?.astrologer_Name}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className="text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]">
                            Gender
                        </p>
                        <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal">
                            {basic?.astrologer_Gender}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className="text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]">
                            Date of birth
                        </p>
                        <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal">
                            {formatDOB(basic?.astrologer_DOB)}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className="text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]">
                            Email
                        </p>
                        <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal">
                            {basic?.astrologer_Email}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className="text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]">
                            Phone number
                        </p>
                        <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal">
                            {basic?.astrologer_Phone}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className="text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]">
                            User Role
                        </p>
                        <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal">
                            {basic?.find_expert ? "Expert" : "Astrolger"}
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-6 flex flex-col items-start gap-5 shadow-card rounded-[10px]">
                <div className="flex items-center  w-full px-3">
                    <h2 className="text-[#43157C] font-urbanist text-[20px] font-bold leading-normal">Professional Information</h2>

                </div>
                <div className="w-[80%] flex justify-between bg p-4 gap-10">
                    <div className="flex flex-col space-y-3">
                        <h2 className="text-[#7A7A7A] font-urbanist text-[16px] font-bold leading-normal">Specializations</h2>
                        <div className={`py-2 grid gap-2 
                               ${professional?.astrologer_Expertise?.length > 5
                                ? "grid-cols-5"
                                : `grid-cols-${professional?.astrologer_Expertise?.length || 1}`
                            }`}>
                            {professional?.astrologer_Expertise?.map((item, i) => (
                                <p
                                    key={i}
                                    className="bg-[#E47A00] p-2 text-center rounded-lg font-inter text-white"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <h2 className="text-[#7A7A7A] font-urbanist text-[16px] font-bold leading-normal">Languages</h2>
                        <div className='py-2 grid grid-cols-2 sm:grid-cols-3 gap-2'>
                            {professional?.astrologer_Languages?.map((lang, i) => (
                                <p
                                    key={i}
                                    className="bg-[#F4EAFF] p-2 text-center rounded-lg font-inter text-primary"
                                >
                                    {lang}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 text-center">
                        <h2 className="text-[#7A7A7A] font-urbanist text-[16px] font-bold leading-normal">Experience</h2>
                        <p className="text-[#2C2C2C] font-inter text-[16px] font-semibold leading-normal pt-3">{professional?.astrologer_Experience}</p>
                    </div>
                </div>
            </div>

            <div className="p-6 flex flex-col items-start gap-5 shadow-card rounded-[10px]">
                <div className="flex items-center  w-full px-3">
                    <h2 className="text-[#43157C] font-urbanist text-[20px] font-bold leading-normal">Price Information</h2>

                </div>
                <div className="w-[80%] flex justify-between bg p-4 gap-10">
                    {
                        !basic?.find_expert ? (
                            <div className=" flex items-center gap-10">
                                <div className="border  p-5 rounded-lg shadow-card flex flex-col gap-5">
                                    <div className="flex items-center justify-center gap-3 shadow-cad p-2 rounded-md">
                                        <div className="bg-[#F4EAFF] p-2 rounded-lg shadow-d">
                                            <Phone color='#43157C' />
                                        </div>
                                        <p className="text-[#7A7A7A] font-urbanist text-[20px] font-semibold leading-normal">Call Consultation Price</p>
                                    </div>
                                    <div className="flex items-center justify-center ">
                                        <p className="text-[#2C2C2C] font-inter text-[20px] font-semibold leading-normal flex items-center gap-2 ">
                                            <IndianRupee /> {price?.astrologer_callPrice}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="border  p-5 rounded-lg shadow-card flex flex-col gap-5">
                                        <div className="flex items-center justify-center gap-3 shadow-ard p-2 rounded-md">
                                            <div className="bg-[#F4EAFF] p-2 rounded-lg shadow-m">
                                                <MessageSquare color='#43157C' />
                                            </div>
                                            <p className="text-[#7A7A7A] font-urbanist text-[20px] font-semibold leading-normal">Chat Consultation Price</p>
                                        </div>
                                        <div className="flex items-center justify-center ">
                                            <p className="text-[#2C2C2C] font-inter text-[20px] font-semibold leading-normal flex items-center gap-2 ">
                                                <IndianRupee /> {price?.astrologer_chatPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="">
                                <div className="">
                                    <div className="border  p-5 rounded-lg shadow-card flex flex-col gap-5">
                                        <div className="flex items-center justify-center gap-3 shadow-ard p-2 rounded-md">
                                            <div className="bg-[#F4EAFF] p-2 rounded-lg shadow-d">
                                                <HeartHandshake color='#43157C' />
                                            </div>
                                            <p className="text-[#7A7A7A] font-urbanist text-[20px] font-semibold leading-normal"> Consultation Price</p>
                                        </div>
                                        <div className="flex items-center justify-center ">
                                            <p className="text-[#2C2C2C] font-inter text-[20px] font-semibold leading-normal flex items-center gap-2 ">
                                                <IndianRupee /> {price?.astrologer_consultationPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }


                </div>
            </div>



        </div>
    )
}

export default AstroProfile
