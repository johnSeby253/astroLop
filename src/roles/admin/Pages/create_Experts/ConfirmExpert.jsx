import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout'
import editz from '@/assets/admin-assets/editIcon.svg';
import React, { useRef, useState } from 'react'
import profilePic from '@/assets/admin-assets/loginicon.webp';
import Button from '@/common/components/Button';
import camera from '@/assets/admin-assets/camera.svg';
import file from '@/assets/admin-assets/file.avif';
import ProfilePicEditModal from '../admin_Profile/components/ProfilePicEditModal';
import useExpertFormStore from '../../store/useExpertFormStore';
import { useNavigate } from 'react-router-dom';
import useCreateExpertStore from '../../store/Tab_Stores/useCreateExpertTab';
import { format, parseISO, isDate } from 'date-fns';
import { ChevronsLeft } from 'lucide-react';
import { useCreateAstrologer } from '@/roles/astrologer/api_Queries/Authentication/query';


const ConfirmExpert = () => {
    const fileInputRef = useRef(null);
    const [openProfilePic, setOpenProfilePic] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const createAstrologerMutation = useCreateAstrologer();

    const expertFullData = useExpertFormStore((state) => state.formData);
    const resetForm = useExpertFormStore((state) => state.resetForm);
    const { setActiveTab } = useCreateExpertStore();
    console.log("FullDta", expertFullData);

    const find_experts = expertFullData.basic.find_expert;


    const basicData = expertFullData.basic;
    const ProfessionalData = expertFullData.professional;
    const PriceData = expertFullData.priceSettings;
    const navigate = useNavigate();

    const formattedDob = (() => {
        if (!basicData.dob) return 'N/A';
        if (typeof basicData.dob === 'string') {
            try {
                return format(parseISO(basicData.dob), 'dd MMM yyyy');
            } catch {
                return basicData.dob; // fallback to raw string
            }
        }
        if (isDate(basicData.dob)) {
            return format(basicData.dob, 'dd MMM yyyy');
        }
        // fallback
        return 'N/A';
    })();

    const handleCameraClick = () => {
        fileInputRef.current.click();
    };

    const handleBack = () => {
        setActiveTab('price_setting');
        // Navigate to CreateExperts page
        navigate('/admin-create_Experts');
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const preview = URL.createObjectURL(file);

        setSelectedImage(preview);
        setOpenProfilePic(true);
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();

            // Append JSON fields
            formData.append('basic', JSON.stringify(expertFullData.basic));
            formData.append('professional', JSON.stringify({
                ...expertFullData.professional,
                certificates: [] // files are appended separately
            }));
            formData.append('priceSettings', JSON.stringify(expertFullData.priceSettings));

            // Append profile image if exists
            if (expertFullData.basic.profile_image instanceof File) {
                formData.append('profile_image', expertFullData.basic.profile_image);
            }

            // Append certificate files
            expertFullData.professional.certificates.forEach((file) => {
                if (file instanceof File) formData.append('certificates', file);
            });

            // Log all FormData entries
            console.log('--- FormData content ---');
            for (let pair of formData.entries()) {
                console.log(pair[0], pair[1]);
            }

            createAstrologerMutation.mutate(formData, {
                onSuccess: (response) => {
                    resetForm();
                    setActiveTab("basic_information");
                    navigate('/admin-create_Experts');
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
        <ContentLayout>
            <div className="p-4 min-h-screen ">

                <div className="py-4">
                    <h1 className="text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px]">Confirm Expert Details</h1>
                    <p className="text-[#484848] font-urbanist text-[16px] font-semibold">
                        Please confirm details you collected for register
                    </p>
                </div>

                <div className="flex flex-col space-y-5  shadow-card p-5 rounded-md">

                    <div className="p-4 flex flex-col shadow-card rounded-[10px]">

                        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center px-3">
                            <h2 className="text-[#43157C] font-urbanist text-[20px] font-bold leading-normal">Perssonal Information</h2>
                            {find_experts == true ? (
                                <p className="text-[#43157C] font-urbanist text-[16px] font-bold leading-normal">Expert</p>
                            ) : (
                                <p className="text-[#43157C] font-urbanist text-[16px] font-bold leading-normal">Astrologer</p>
                            )}

                            <Button className='hidden items-center gap-1 w-fit px-2'
                                size='sm'
                                variant='lite_secondary'
                            // onClick={() => setOpenPersonalModal(true)}
                            ><img src={editz} alt="" /> change</Button>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-10 p-5">
                            <div className="">
                                <div className="relative w-28 h-28">
                                    {/* Profile Image */}
                                    <img
                                        className="h-full w-full rounded-full object-cover"
                                        src={basicData.profile_image || profilePic}
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
                            </div>

                            <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                <div className="flex flex-col space-y-1">
                                    <p className='text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>Full Name</p>
                                    <p className='text-Dark-text font-inter text-[16px] font-semibold'>{basicData.full_name || "_ _"}</p>
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <p className='text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>Phone number</p>
                                    <p className='text-Dark-text font-inter text-[16px] font-semibold'>{basicData.phone || "_ _"}</p>
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <p className='text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>Email</p>
                                    <p className='text-Dark-text font-inter text-[16px] font-semibold'>{basicData.email || "_ _"}</p>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <p className='text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>Date of birth</p>
                                    <p className='text-Dark-text font-inter text-[16px] font-semibold'>{formattedDob || "_ _"}</p>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <p className='text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>Gender</p>
                                    <p className='text-Dark-text font-inter text-[16px] font-semibold'>{basicData.gender || "_ _"}</p>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <p className='text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>State</p>
                                    <p className='text-Dark-text font-inter text-[16px] font-semibold'>{basicData.state || "_ _"}</p>
                                </div>


                            </div>
                        </div>

                        <ProfilePicEditModal
                            open={openProfilePic}
                            setOpen={setOpenProfilePic}
                            image={selectedImage}
                        />

                    </div>



                    <div className="p-4 flex flex-col shadow-card rounded-[10px]">

                        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
                            <h2 className="text-[#43157C] font-urbanist text-[20px] font-bold leading-normal">Professional details & pricing</h2>
                            <Button className=' hidden items-center gap-1 w-fit'
                                size='sm'
                                variant='lite_secondary'
                            // onClick={() => setOpenPersonalModal(true)}
                            ><img src={editz} alt="" /> change</Button>
                        </div>


                        <div className="flex flex-col gap-6">
                            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 pt-5 ">


                                <div className="flex flex-col space-y-3">
                                    <p className="text-[#2D2D2D] font-inter text-[14px] font-semibold leading-[21px]">
                                        Area of expertise
                                    </p>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {ProfessionalData.expertise && ProfessionalData.expertise.length > 0 ? (
                                            ProfessionalData.expertise.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-[#E47A00] w-full text-center p-2 flex items-center justify-center rounded-md"
                                                >
                                                    <p className="text-white font-inter text-[14px] font-semibold leading-[21px]">
                                                        {item}
                                                    </p>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-gray-400">No expertise added</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col md:items-center space-y-2">
                                    <p className='text-[#2D2D2D] font-inter text-[14px] font-semibold leading-5.25'>Years of Experience</p>
                                    <p className='w-fit border border-border-line px-5 py-2 rounded-md space-y-2 text-Dark-text text-center font-inter text-[16px] font-semibold'>
                                        {ProfessionalData.yearsOfExperience || 0}</p>
                                </div>


                                <div className="flex flex-col space-y-3">
                                    <p className='text-[#2D2D2D] font-inter text-[14px] font-semibold leading-5.25'>Languages used</p>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
                                        {ProfessionalData.languages && ProfessionalData.languages.length > 0 ? (
                                            ProfessionalData.languages.map((lang, index) => (
                                                <div key={index} className="bg-[#F5EEFF] font-inter border border-primary text-primary flex items-center justify-center rounded-md p-1">
                                                    {lang}
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-gray-400">No languages added</p>
                                        )}
                                    </div>
                                </div>

                                {find_experts == false ? (
                                    <div className="flex flex-col md:flex-row  justify-center gap-8 items-center">
                                        <div className="flex flex-col items-center space-y-2">
                                            <p className='text-[#2D2D2D] font-inter text-[14px] font-semibold leading-5.25'>Chat consultation Fee</p>
                                            <p className=' px-5 py-2  space-y-2 text-Dark-text text-center font-inter text-[16px] font-semibold'>₹{PriceData.chat_price || "_ _"}/min</p>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <p className='text-[#2D2D2D] font-inter text-[14px] font-semibold leading-5.25'>Call consultation Fee</p>
                                            <p className='px-5 py-2 rounded-md space-y-2 text-Dark-text text-center font-inter text-[16px] font-semibold'>₹{PriceData.call_price || "_ _"} /min</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col md:flex-row  justify-center gap-8 items-center">
                                        <div className="flex flex-col items-center space-y-2">
                                            <p className='text-[#2D2D2D] font-inter text-[14px] font-semibold leading-5.25'>Expert consultation Fee</p>
                                            <p className=' px-5 py-2  space-y-2 text-Dark-text text-center font-inter text-[16px] font-semibold'>₹ {PriceData.expert_price || "_ _"}</p>
                                        </div>
                                    </div>
                                )
                                }


                            </div>


                            <div className="flex flex-col pt-4 space-y-3 ">
                                <p className='text-[#2D2D2D] font-inter text-[14px] font-semibold leading-5.25'>
                                    Certificates used
                                </p>

                                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:w-[50%]">
                                    {ProfessionalData.certificates && ProfessionalData.certificates.length > 0 ? (
                                        (() => {
                                            // Filter only files with a type
                                            const validCertificates = ProfessionalData.certificates.filter(certFile => certFile.type);

                                            if (validCertificates.length === 0) {
                                                return <p className="text-gray-400 min-w-75">No certificates added</p>;
                                            }

                                            return validCertificates.map((certFile, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-col items-center shadow-card rounded-md p-2 text-sm text-primary"
                                                >
                                                    {/* File thumbnail */}
                                                    <img
                                                        src={file} // generic file icon
                                                        alt="file icon"
                                                        className="w-12 h-12 object-contain"
                                                    />

                                                    {/* File name */}
                                                    <span className="text-center text-xs wrap-break-word">
                                                        {certFile.name}
                                                    </span>

                                                    {/* File type */}
                                                    <span className="text-gray-400 text-xs">{certFile?.type?.split('/')[1]}</span>
                                                </div>
                                            ));
                                        })()
                                    ) : (
                                        <p className="text-gray-400">No certificates added</p>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="shadow-card rounded-[10px] p-5">
                        <div className="flex  items-center">
                            <h2 className="text-[#43157C] font-urbanist text-[20px] font-bold leading-normal">Registration Payment breakdown</h2>
                        </div>
                        <div className="">
                            <div className="flex items-center justify-between p-2 md:p-5">
                                <p className='text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>Description</p>
                                <p className='text-[#7A7A7A] font-inter text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>Amount</p>
                            </div>

                            <div className="flex items-center justify-between px-2 md:px-5 py-2">
                                <p className='text-Dark-text font-inter pr-4 md:pr-0 text-[15px] md:text-[16px] font-medium'>
                                    Document Verification</p>
                                <p className='text-Dark-text text-center font-inter  text-[16px] font-semibold'>
                                    ₹ 650</p>
                            </div>

                            <div className="flex items-center justify-between px-2 md:px-5 py-2">
                                <p className='text-Dark-text font-inter  pr-4 md:pr-0 text-[15px] md:text-[16px] font-medium'>
                                    Registration Fee ( Includes FREE time slots)</p>
                                <p className='text-Dark-text text-center font-inter text-[16px] font-semibold'>
                                    ₹2000</p>
                            </div>
                            <div className="flex items-center justify-between px-2 md:px-5 py-2">
                                <p className='text-Dark-text font-inter  pr-4 md:pr-0 text-[15px] md:text-[16px] font-medium'>
                                    CGST (9%)</p>
                                <p className='text-Dark-text text-center font-inter text-[16px] font-semibold'>
                                    ₹173.44</p>
                            </div>
                            <div className="flex items-center justify-between px-2 md:px-5 py-2">
                                <p className='text-Dark-text font-inter  pr-4 md:pr-0 text-[15px] md:text-[16px] font-medium'>
                                    CGST (9%)</p>
                                <p className='text-Dark-text text-center font-inter text-[16px] font-semibold'>
                                    ₹173.44</p>
                            </div>
                            <hr />
                            <div className="py-4">
                                <div className="flex items-center justify-between px-2 md:px-5 py-2 bg-[#FFF4EE] rounded-full">
                                    <p className='text-Dark-text font-inter text-[16px] font-semibold'>
                                        Sub Total</p>
                                    <p className='text-Dark-text text-center font-inter text-[16px] font-extrabold'>
                                        ₹ 3046.53</p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="flex items-center justify-center md:justify-end gap-8 md:px-5 py-2">
                        <Button
                            className='flex items-center justify-center gap-3'
                            size='md'
                            variant='lite_secondary'
                            onClick={handleBack}
                        >  <ChevronsLeft color='#686565' /> Back</Button>

                        <Button
                            size='md'
                            variant='upload'
                            onClick={resetForm}
                        > Clear</Button>

                        <Button
                            onClick={handleSubmit}
                            size='md'
                            variant='primary'
                        >Pay now to Register</Button>
                    </div>


                </div>





            </div>
        </ContentLayout>
    )
}

export default ConfirmExpert
