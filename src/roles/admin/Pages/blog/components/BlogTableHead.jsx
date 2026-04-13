import Button from '@/common/components/Button'
import SearchField from '@/common/components/SearchField'
import DateFilter from '@/roles/admin/components/Buttons/DateFilter'
import { Plus } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogTableHead = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row items-start lg:items-center justify-between lg:px-5">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
                    <SearchField
                        placeholder="Search users"
                        className="w-full lg:min-w-[300px] py-2"
                    />
                    <DateFilter
                        onChange={(data) => console.log("Filter:", data)}
                    />
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        className="flex items-center justify-center gap-2"
                        size='md'
                        variant='primary'
                        onClick={() => { navigate('/admin-create_blog') }}
                    >
                        <Plus />
                        Create a new blog
                    </Button>
                </div>


            </div>
        </div>
    )
}

export default BlogTableHead
