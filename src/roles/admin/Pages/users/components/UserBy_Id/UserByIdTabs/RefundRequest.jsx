import React from 'react'
import RefundRequestList from '../../Refunds/components/RefundRequestList'
import RefundRequestDetails from '../../Refunds/components/RefundRequestDetails'

const RefundRequest = () => {
  const notifications = [
    {
      status: "Pending",
      message: "Call with Guru Pandit not connected",
      subMessage: "Can't get any reply in the chat",
      date: "Wed 12 Feb",
      time: "09:15 AM",
      id: "#13334",
      amount: 483,
    },
  ]
  return (
    <div className='flex flex-col 2xl:flex-row items-stretch justify-center gap-3'>
      <div className='w-full 2xl:w-[40%] py-4'>
          <RefundRequestList  />
      </div>
      <div className="'w-full 2xl:w-[55%] py-4">
        <RefundRequestDetails/>
      </div>
    </div>
  )
}

export default RefundRequest
