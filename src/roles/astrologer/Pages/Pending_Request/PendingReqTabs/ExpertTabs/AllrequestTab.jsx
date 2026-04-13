import Button from '@/common/components/Button'
import { Calendar, Clock, MapPin, Tag } from 'lucide-react'
import React from 'react'

const dummyRequests = [
  {
    id: 1,
    name: 'Arjun Patel',
    type: 'Puja',
    pujaDetail: 'Griha prevesh puja',
    location: 'Kakkanad, Kochi',
    time: '10:30 AM',
    date: '30 Jan 2025',
    price: 4600,
    ago: '2 hrs ago',
  },
  {
    id: 2,
    name: 'Meera Nair',
    type: 'Offline',
    pujaDetail: 'Career puja',
    location: 'Vyttila, Kochi',
    time: '12:00 PM',
    date: '28 Feb 2025',
    price: 3500,
    ago: '5 hrs ago',
  },
  {
    id: 3,
    name: 'Rahul Das',
    type: 'Vastu',
    pujaDetail: 'Office Vastu Consultation',
    location: 'Aluva, Kochi',
    time: '03:00 PM',
    date: '05 Mar 2025',
    price: 5000,
    ago: '1 day ago',
  },
  {
    id: 4,
    name: 'Sneha Thomas',
    type: 'Puja',
    pujaDetail: 'Marriage Puja',
    location: 'Fort Kochi',
    time: '09:00 AM',
    date: '12 Apr 2025',
    price: 4200,
    ago: '3 hrs ago',
  },
]

const AllrequestTab = () => {
  return (
    <div className="flex flex-col gap-4">
      {dummyRequests.map((request) => (
        <div
          key={request.id}
          className="w-full max-w-full bg-[#FFFFFF] rounded-3xl shadow-[0px_2px_4.4px_0px_rgba(0,0,0,0.25)] p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6"
        >
          {/* Profile Image */}
          <img
            className="w-24 h-24 rounded-full flex-shrink-0"
            src="https://placehold.co/97x97"
            alt="Profile"
          />

          {/* Name & Type */}
          <div className="flex-1 flex flex-col justify-start gap-2">
            <div className="text-[#1E1D1D] text-xl md:text-2xl font-semibold font-['Inter']">
              {request.name}
            </div>

            {/* Puja Type */}
            <div className="inline-flex items-center w-max gap-5">
              <div
                className={`text-xs font-semibold rounded-lg px-2 py-1 ${
                  request.type === 'Puja'
                    ? 'bg-[#FFEABD] text-[#FF7F3A]'
                    : request.type === 'Vastu'
                    ? 'bg-[#E0E0FF] text-[#42147B]'
                    : 'bg-[#F0F0F0] text-[#636E72]'
                }`}
              >
                {request.type}
              </div>
              <div className="flex items-center font-inter justify-center gap-1">
                <Tag size={18} />
                <span>{request.pujaDetail}</span>
              </div>
            </div>

            {/* Puja Details */}
            <div className="flex flex-wrap md:flex-nowrap items-center gap-4 text-[#2C2C2C] text-sm md:text-base font-medium font-['Inter'] mt-1">
              <div className="flex items-center gap-1">
                <MapPin size={18} />
                <span>{request.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={18} />
                <span>{request.time}</span>
              </div>
              <div className="flex items-center gap-1 ">
                <Clock size={18} />
                <span className="font-inter">{request.date}</span>
              </div>
            </div>
          </div>

          {/* Price & Actions */}
          <div className="flex flex-col items-end gap-2 md:gap-4 mt-2 md:mt-0">
            <div className="text-[#000000] text-xl md:text-2xl font-semibold font-inter">
              ₹{request.price}
            </div>

            <div className="flex gap-2">
              <Button size="md" className="px-10" variant="secondary">
                Decline
              </Button>
              <Button size="md" className="px-10" variant="primary">
                Accept
              </Button>
            </div>

            <div className="text-[#757575] text-xs font-normal text-center mt-1">
              {request.ago}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllrequestTab