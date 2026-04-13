import CustomTabTable from '@/common/components/CustomTabTable'
import { Eye } from 'lucide-react';
import React from 'react'

const BlogTable = () => {
    const columns = [
        {
            header: "Thumbnail",
            accessor: "thumbnail",
            render: (row) => (
                <img
                    src={row.thumbnail}
                    className="w-30 h-15 object-cover rounded-md"
                    alt=""
                />
            ),
        },
        {
            header: "Title",
            accessor: "title",
        },
        {
            header: "Category",
            accessor: "category",
        },
        {
            header: "Author",
            accessor: "author",
        },
        {
            header: "Publish Date",
            accessor: "publish_date",
        },
        {
            header: "Status",
            accessor: "status",
            render: (row) => (
                <span
                    className={`px-3 py-1 text-center text-xs rounded-full border ${row?.status?.toLowerCase() === "completed"
                        ? "text-[#066C09] bg-[#F0FFCC] border-[#B4B4B4]"
                        : "text-[#6C1206] bg-[#FFE8E0] border-[#B4B4B4]"
                        }`}
                >
                    {row.status}
                </span>
            ),
        },

        {
            header: "Views",
            accessor: "views",
            render: (row) => (
                <span className='flex items-center gap-2'>
                    <Eye />
                    {row.views}
                </span>
            ),
        },
        // {
        //     header: "Action",
        //     accessor: "action",
        //     render: (row) => <ConsultationAction row={row} />
        // },
    ]


    const data = [
        {
            id: "1",
            thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
            title: "10 Vastu Tips for Positive Energy",
            category: "Vastu",
            author: "Admin",
            publish_date: "12 Mar 2026",
            status: "Completed",
            views: 1200,
        },
        {
            id: "2",
            thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            title: "Tarot Reading Guide for Beginners",
            category: "Tarot",
            author: "John Mathew",
            publish_date: "10 Mar 2026",
            status: "Pending",
            views: 860,
        },
        {
            id: "3",
            thumbnail: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
            title: "Astrology Predictions 2026",
            category: "Astrology",
            author: "Admin",
            publish_date: "05 Mar 2026",
            status: "Completed",
            views: 2300,
        },
        {
            id: "4",
            thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            title: "Meditation for Beginners",
            category: "Spiritual",
            author: "Meera Nair",
            publish_date: "01 Mar 2026",
            status: "Pending",
            views: 540,
        },
        {
            id: "5",
            thumbnail: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4",
            title: "Numerology Basics Explained",
            category: "Numerology",
            author: "Rahul Menon",
            publish_date: "25 Feb 2026",
            status: "Completed",
            views: 980,
        },
    ];
    return (
        <div>
            <CustomTabTable
                columns={columns}
                data={data}
                tableCellClass="text-gray-700"
                pageSize={5}
                totalCount={1}
            />
        </div>
    )
}

export default BlogTable
