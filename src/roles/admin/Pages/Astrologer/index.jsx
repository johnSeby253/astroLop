import React from 'react'
import AstroTableTop from './components/AstroTableTop'
import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout'
import AstroTable from './components/AstroTable'
import astro from '@/assets/admin-assets/dashboard-Icons/dashboard_astro.svg'
import Button from '@/common/components/Button'
import { BookDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'



const AdminAstrologer = () => {
  const navigate = useNavigate();
  return (
    <ContentLayout>


      <div className="p-2 ">

        <div className="p-4 flex items-center gap-4">

          <div className=" bg-[#E9D9FD] p-3 rounded-xl">
            <img src={astro} className='h-9' alt="" />

          </div>
          <div className="">
            <h1 className="text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px]">Astrologers</h1>
            <p className="text-[#484848] font-urbanist text-[16px] font-semibold ">
              You can view & manage astrologers here.
            </p>
          </div>

        </div>


        <div className="p-2 shadow-card rounded-md">

          <AstroTableTop />
          <div className="flex items-start md:items-center md:justify-end  md:px-5">
            <Button
              className="flex items-center justify-center gap-3 px-5 py-2"
              size='sm'
              onClick={() => navigate("/admin-astrologer_requests")}
              variant='primary'>
              <BookDown size={20} />
             All Request
            </Button>
          </div>
          <AstroTable />
        </div>

      </div>

    </ContentLayout>
  )
}

export default AdminAstrologer
