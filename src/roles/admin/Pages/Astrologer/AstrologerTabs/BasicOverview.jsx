import { Calendar, Mail, MapPin, Maximize2, Phone, User, VenusAndMars } from 'lucide-react'
import certificate from '@/assets/admin-assets/certificate.png';
import React from 'react'
import Button from '@/common/components/Button';

const BasicOverview = () => {
    const skills = [
        "Tarot Reading",
        "Numerology",
        "Vedic Astrology",
        "Palm Reading",
        "Face Reading",
        "Horoscope Matching",
        "Gemstone Advice",
    ];

    return (
        <div className='  md:p-4 flex flex-col md:flex-row items-stretch justify-center gap-3'>
            <div className=" border border-border-line w-full md:w-[40%] rounded-lg  p-3 md:p-10">
                <h2 className='text-[16px] font-bold pb-4 text-[#43157C] font-urbanist'>Personal Information</h2>

                <div className="p-4 flex flex-col justify-center gap-10 pt-6">
                    <div className="flex items-center gap-5 ">
                        <div className="bg-[#EFE6FA] flex items-center p-3 rounded-lg justify-center">
                            <User className='text-primary' />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>Full Name</p>
                            <p className='text-Dark-text text-[16px] font-semibold'>John Seby</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 ">
                        <div className="bg-[#EFE6FA] flex items-center p-3 rounded-lg justify-center">
                            <Mail className='text-primary' />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>Email</p>
                            <p className='text-Dark-text text-[16px] font-semibold'>johnseby@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="bg-[#EFE6FA] flex items-center p-3 rounded-lg justify-center">
                            <Phone className='text-primary' />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>Phone number</p>
                            <p className='text-Dark-text text-[16px] font-semibold'>7533189023</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="bg-[#EFE6FA] flex items-center p-3 rounded-lg justify-center">
                            <Calendar className='text-primary' />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>Date of birth </p>
                            <p className='text-Dark-text text-[16px] font-semibold'>02-05-2020</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="bg-[#EFE6FA] flex items-center p-3 rounded-lg justify-center">
                            <VenusAndMars className='text-primary' />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>Gender</p>
                            <p className='text-Dark-text text-[16px] font-semibold'>Male</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="bg-[#EFE6FA] flex items-center p-3 rounded-lg justify-center">
                            <MapPin className='text-primary' />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>City /State</p>
                            <p className='text-Dark-text text-[16px] font-semibold'>Kochi/Kerala</p>
                        </div>
                    </div>

                </div>



            </div>

            <div className="flex flex-col gap-3 space-y-5 border border-border-line w-full md:w-[60%] rounded-lg p-3 md:p-10">
                <h2 className='text-[16px] font-bold text-[#43157C] font-urbanist'>Professional Overview</h2>
                <div className="flex items-center justify-between p-4 bg-[#F5EDFF] rounded-lg">
                    <p className='text-[#282828] font-inter text-[16px] font-medium leading-[15.733px] tracking-[-0.437px]'>Experience</p>
                    <p className='text-[#282828] font-inter text-[16px] font-semibold leading-[15.733px] tracking-[-0.437px]'>5+ Years</p>
                </div>

                <div className="">
                    <p className='text-[#7A7A7A] font-inter text-[16px] font-medium leading-[15.733px] tracking-[-0.437px]'>Area of expertise</p>
                    <div className="flex items-center gap-4 w-full overflow-x-auto light-scrollbar py-4">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-[#E47A00] px-3 py-2 whitespace-nowrap rounded-lg text-center shrink-0"
                            >
                                <p className="text-white font-semibold text-[14.31px] leading-[150%]">
                                    {skill}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="">
                    <p className='text-[#7A7A7A] font-inter text-[16px] font-medium leading-[15.733px] tracking-[-0.437px]'>Certifications</p>
                    <div className="flex items-center gap-10 w-full overflow-x-auto light-scrollbar py-4 cursor-grabbing">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="border border-border-line  rounded-lg flex items-center flex-col gap-2 p-2 text-center shrink-0"
                            >
                                <img src={certificate} className='w-full h-32' alt="" />
                                <p className="">
                                    Vedic Certificate
                                </p>
                                <Button
                                    className="flex gap-4 items-center justify-center"
                                    size='ex'
                                    variant='lite_secondary'
                                >
                                    View Certificate
                                    <Maximize2 size={14} />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="">
                    <p className='text-[#7A7A7A] font-inter text-[16px] font-medium leading-[15.733px] tracking-[-0.437px]'>Languages use</p>
                    <div className="flex items-center gap-4 w-full overflow-x-auto light-scrollbar py-4">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-[#F5EEFF] border border-primary  px-3 py-2 whitespace-nowrap rounded-lg text-center shrink-0"
                            >
                                <p className="text-primary font-medium text-[14.31px] leading-[150%]">
                                    {skill}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BasicOverview
