import React from 'react'
import profilePic from '@/assets/admin-assets/loginicon.webp';
import { Ban, HandCoins, Wallet } from 'lucide-react';
import Button from '@/common/components/Button';
import { useNavigate } from 'react-router-dom';


const UserByIdHead = () => {

  const navigate = useNavigate();

  const row = {
    status: "Active",
    name: "User Name",
    email: "john@gmail.com"
  };


  return (
    <div className=' shadow-card rounded-lg flex flex-col gap-3 md:flex-row md:items-center justify-between p-6'>
      <div className="flex items-center gap-5">
        <img src={profilePic} className='w-[100px] h-[100px]' alt="" />
        <div className="flex flex-col space-y-2">
          <p className='text-[#43157C] font-urbanist text-[20px] font-bold leading-normal'>User Name</p>
          <span
            className={`px-4 py-1 text-center text-xs rounded-full border ${row?.status?.toLowerCase() === "active"
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

      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4">
        <Button
          className="flex items-center justify-center gap-3"
          size='xl'
          onClick={() => navigate("/admin-userRefunds")}
          variant='primary'>
          <HandCoins size={20} />
          Refunds
        </Button>
        <Button
          className="flex items-center justify-center gap-4"
          size='xl'
          variant='danger'>
          <Ban size={20} />
          Block
        </Button>
      </div>

    </div>
  )
}

export default UserByIdHead
