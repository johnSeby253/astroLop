import Button from '@/common/components/Button'
import React from 'react'

const refundRequests = [
    {
        id: "13334",
        title: "Call with Guru Pandit not connected",
        reason: "Can’t get any reply in the chat",
        date: "Wed 12 Feb",
        time: "09:15 AM",
        amount: 483,
        status: "Pending",
    },
    {
        id: "13335",
        title: "Call dropped automatically",
        reason: "Call ended suddenly",
        date: "Thu 13 Feb",
        time: "10:20 AM",
        amount: 300,
        status: "Pending",
    },
    {
        id: "13336",
        title: "Chat not responding",
        reason: "No response from astrologer",
        date: "Fri 14 Feb",
        time: "11:45 AM",
        amount: 550,
        status: "Approved",
    },
];

const RefundRequestList = () => {
    return (
        <div className="flex flex-col gap-5 max-h-[800px] overflow-auto vertical-scrollbar p-3">
            {refundRequests.map((item, index) => (
                <div key={index} className="flex flex-col gap-3 p-3 border border-border-line rounded-lg">
                    
                    <div className="flex items-center justify-between">
                        <p className='text-[#2C2C2C] font-inter text-[16px] font-semibold'>
                            {item.title}
                        </p>
                        <p className='px-4 rounded-full text-[14px] bg-[#FFFDCC] text-[#AC6A00]'>
                            {item.status}
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 2xl:gap-0 2xl:flex-row 2xl:items-center justify-between">
                        <p className='text-[#7A7A7A] font-inter text-[14px] font-medium'>
                            {item.reason}
                        </p>
                        <p className='text-[#2C2C2C] font-inter text-[14px] font-semibold'>
                            ID#{item.id}
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 2xl:gap-0 2xl:flex-row 2xl:items-center justify-between">
                        <p className='text-[#7A7A7A] font-inter text-[14px] font-medium'>
                            Date: {item.date}
                        </p>
                        <p className='text-[#7A7A7A] font-inter text-[14px] font-medium'>
                            Amount Paid :
                            <span className='text-[#2C2C2C] font-semibold'> ₹{item.amount}</span>
                        </p>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className='text-[#7A7A7A] font-inter text-[14px] font-medium'>
                            Time: {item.time}
                        </p>
                        <Button size='sm' variant='lite_secondary'>
                            Show more
                        </Button>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default RefundRequestList