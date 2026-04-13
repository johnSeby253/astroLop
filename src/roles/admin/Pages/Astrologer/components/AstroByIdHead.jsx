import React, { useState } from 'react'
import profilePic from '@/assets/admin-assets/loginicon.webp';
import Button from '@/common/components/Button';
import star from '@/assets/admin-assets/tabler_star.svg';
import AstroSuspendModal from './Modals/AstroSuspendModal';



const AstroByIdHead = () => {
    const [openBlockModal, setOpenBlockModal] = useState(false);

    // const navigate = useNavigate();

    const row = {
        status: "Active",
        name: "User Name",
        email: "john@gmail.com"
    };


    const handleBlockUser = () => {
        setOpenBlockModal(true)
    };

    return (
        <div className=' shadow-card rounded-lg flex flex-col gap-5 md:gap-0 md:flex-row md:items-center justify-between p-6'>
            <div className="flex items-center gap-5">
                <img src={profilePic} className='w-25 h-25' alt="" />
                <div className="flex flex-col item space-y-2">
                    <p className='text-[#43157C] font-urbanist text-[20px] font-bold leading-normal'>Astro Name</p>
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <p className='text-[#242424] font-inter text-[16px] font-semibold'>ID - SD23366</p>

                        <p className='flex items-center gap-1 text-[#242424] font-inter text-[16px] font-semibold'>4.5
                            <img src={star} alt="" />
                        </p>

                    </div>
                    <span
                        className={`px-4 py-1 text-center w-fit text-xs rounded-full border ${row?.status?.toLowerCase() === "active"
                            ? "text-[#0077FF] border-[#B4B4B4]"
                            : row.status === "Suspended"
                                ? "text-[#991D07] border border-border-line"
                                : "text-[#9F9F9F] bg-[#E8E8E8] border-[#B4B4B4]"
                            }`}
                    >
                        {row.status}
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-center gap-4  md:px-10">
                {/* <Button
                    className="flex items-center justify-center gap-3"
                    size='xl'
                    onClick={() => navigate("/admin-userRefunds")}
                    variant='primary'>
                    <Edit size={20} />
                    Edit Profile
                </Button> */}
                <Button
                    className="flex items-center justify-center gap-4"
                    size='xl'
                    onClick={handleBlockUser}
                    variant='danger'>
                
                    Suspend
                </Button>
            </div>
            <AstroSuspendModal open={openBlockModal} setOpen={setOpenBlockModal} data={row} />

        </div>
    )
}

export default AstroByIdHead
