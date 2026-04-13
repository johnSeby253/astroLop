import { Calendar, Clock8, HandCoins, Inbox, Mail, MapPin, MessageCircleMore, Phone, User, VenusAndMars, Wallet } from 'lucide-react'
import React from 'react'

const BasicOverview = () => {
  return (
    <div className='2xl:p-4 flex flex-col 2xl:flex-row items-stretch justify-center gap-3'>

      <div className=" border border-border-line w-full 2xl:w-[40%] rounded-lg p-4 2xl:p-10">
        <h2 className='text-[16px] font-bold text-[#43157C] font-urbanist'>Personal Information</h2>

        <div className="p-2 2xl:p-4 flex flex-col justify-center space-y-5 pt-6">
          <div className="flex items-center gap-5 ">
            <div className="bg-[#EFE6FA] flex items-center p-3 rounded-lg justify-center">
              <User className='text-primary' />
            </div>
            <div className="flex flex-col space-y-1">
              <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>Full Name</p>
              <p className='text-[#2C2C2C] text-[16px] font-semibold'>John Seby</p>
            </div>
          </div>

          <div className="flex items-center gap-5 ">
            <div className="bg-[#EFE6FA] flex items-center p-3 rounded-lg justify-center">
              <Mail className='text-primary' />
            </div>
            <div className="flex flex-col space-y-1">
              <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>Email</p>
              <p className='text-[#2C2C2C] text-[16px] font-semibold'>johnseby@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-[#EFE6FA] flex items-center p-3 rounded-lg justify-center">
              <Phone className='text-primary' />
            </div>
            <div className="flex flex-col space-y-1">
              <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>Phone number</p>
              <p className='text-[#2C2C2C] text-[16px] font-semibold'>7533189023</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-[#EFE6FA] flex items-center p-3 rounded-lg justify-center">
              <Calendar className='text-primary' />
            </div>
            <div className="flex flex-col space-y-1">
              <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>Date of birth </p>
              <p className='text-[#2C2C2C] text-[16px] font-semibold'>02-05-2020</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-[#EFE6FA] flex items-center p-3 rounded-lg justify-center">
              <VenusAndMars className='text-primary' />
            </div>
            <div className="flex flex-col space-y-1">
              <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>Gender</p>
              <p className='text-[#2C2C2C] text-[16px] font-semibold'>Male</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-[#EFE6FA] flex items-center p-3 rounded-lg justify-center">
              <MapPin className='text-primary' />
            </div>
            <div className="flex flex-col space-y-1">
              <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>City /State</p>
              <p className='text-[#2C2C2C] text-[16px] font-semibold'>Kochi/Kerala</p>
            </div>
          </div>

        </div>



      </div>

      <div className="border border-border-line w-full 2xl:w-[60%] rounded-lg p-4 2xl:p-10">
        <h2 className='text-[16px] font-bold text-[#43157C] font-urbanist'>Professional Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3 pt-4">

          <div className="rounded-lg p-3 border border-border-line flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <div className="bg-[#F9EECA] p-2 rounded-lg">
                <Wallet size={24} className='text-[#B88D00] ' />
              </div>
              <p className='text-[14px] font-semibold text-[#565656] font-urbanist'>Wallet Balance</p>
            </div>
            <p className='text-xl font-semibold text-black text-center font-urbanist'>1,200.03</p>
          </div>

          <div className="rounded-lg p-3 border border-border-line flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <div className="bg-[#E8FFC3] p-2 rounded-lg">
                <HandCoins  size={24} className='text-[#2D7D15] ' />
              </div>
              <p className='text-[14px] font-semibold text-[#565656] font-urbanist'>Total Spending</p>
            </div>
            <p className='text-xl font-semibold text-black text-center font-urbanist'>5,484.00</p>
          </div>

          <div className="rounded-lg p-3 border border-border-line flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <div className="bg-[#E9D9FD] p-2 rounded-lg">
                <Clock8  size={24} className='text-[#441086] ' />
              </div>
              <p className='text-[14px] font-semibold text-[#565656] font-urbanist'>Wallet Balance</p>
            </div>
            <p className='text-xl font-semibold text-black text-center font-urbanist'>1,200.03</p>
          </div>

          <div className="rounded-lg p-3 border border-border-line flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <div className="bg-[#D7DAFF] p-2 rounded-lg">
                <Phone  size={24} className='text-[#1000F5] ' />
              </div>
              <p className='text-[14px] font-semibold text-[#565656] font-urbanist'>Wallet Balance</p>
            </div>
            <p className='text-xl font-semibold text-black text-center font-urbanist'>1,200.03</p>
          </div>

          <div className="rounded-lg p-3 border border-border-line flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <div className="bg-[#FFEBEB] p-2 rounded-lg">
                <MessageCircleMore  size={24} className='text-[#A91454] ' />
              </div>
              <p className='text-[14px] font-semibold text-[#565656] font-urbanist'>Wallet Balance</p>
            </div>
            <p className='text-xl font-semibold text-black text-center font-urbanist'>1,200.03</p>
          </div>

          <div className="rounded-lg p-3 border border-border-line flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <div className="bg-[#DDE7FD] p-2 rounded-lg">
                <Inbox size={24} className='text-[#011993] ' />
              </div>
              <p className='text-[14px] font-semibold text-[#565656] font-urbanist'>Wallet Balance</p>
            </div>
            <p className='text-xl font-semibold text-black text-center font-urbanist'>1,200.03</p>
          </div>

        </div>

       
          <h2 className='py-4 text-[#2C2C2C] text-[16px] font-semibold'>Last Consultation</h2>
          <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:items-center md:justify-between border rounded-lg border-[#F3BF31] p-5">
            <div className="flex flex-col justify-center gap-4 items-start">
              <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>
                Expert Name :
                <span className='text-[#2C2C2C] text-[16px] font-semibold'> Pt Rahul Sharma</span>
              </p>

              <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>
                Consultation Type  :
                <span className='text-[#2C2C2C] text-[16px] font-semibold'> Chat</span>
              </p>


              <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>
                Date :
                <span className='text-[#2C2C2C] text-[16px] font-semibold'> Wed 12 Feb</span>
              </p>


              <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>
                Duration :
                <span className='text-[#2C2C2C] text-[16px] font-semibold'> 14 min</span>
              </p>

            </div>
            <div className="flex flex-col-reverse md:flex-col gap-4 md:items-end justify-center">
              <div className="flex items-center md:justify-center">
                <p className='text-[#066C09] text-[16px] font-semibold bg-[#F0FFCC] px-5 py-1 rounded-full'>Completed</p>
              </div>
              <p className='text-[#2C2C2C] text-[16px] font-semibold'>ID#13334</p>
              <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>
                Time :
                <span className='text-[#2C2C2C] text-[16px] font-semibold'> 09:15 AM</span>
              </p>
              <p className='text-[#7A7A7A] text-[14px] font-medium leading-[15.733px] tracking-[-0.437px]'>
                Cost :
                <span className='text-[#2C2C2C] text-[16px] font-semibold'>₹235</span>
              </p>
            </div>




          </div>
        



      </div>
    </div>
  )
}

export default BasicOverview
