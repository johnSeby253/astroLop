import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout'
import { MessageSquareQuote } from 'lucide-react'
import React from 'react'
import BlogTableHead from './components/BlogTableHead'
import BlogTable from './components/BlogTable'

const Blogs = () => {
  return (
    <ContentLayout>
      <div className="p-2 ">

        <div className="p-4 flex items-center gap-4">

          <div className=" bg-[#EBF0D9] p-3 rounded-xl">
            < MessageSquareQuote size={36} color='#9FAA02' />

          </div>
          <div className="">
            <h1 className="text-[#242424] font-inter text-[28px] font-medium leading-[36.711px] tracking-[-1.748px]">Blogs</h1>
            <p className="text-[#484848] font-urbanist text-[16px] font-semibold ">
              You can view & upload blogs here.
            </p>
          </div>

        </div>


        <div className="p-5 lg:p-10 flex flex-col gap-5  shadow-card rounded-md">
          <BlogTableHead />
          <div className="py-5">
            <BlogTable />
          </div>
        </div>

      </div>
    </ContentLayout>

  )
}

export default Blogs
