import Button from '@/common/components/Button'
import { Clock, MapPin, MessageCircleCheck, MessageSquare, Phone, ReceiptIndianRupee } from 'lucide-react'
import React from 'react'

const AstrologerPendingReq = ({ isExpert }) => {

    const requests = [
        {
            id: 1,
            name: "Anika Gupta",
            duration: "30 Minutes",
             localtion: "Kakkand,Kerala",
            price: "₹275",
            timeAgo: "1 Minute Ago",
            type: "call"
        },
        {
            id: 2,
            name: "Shanti Sharma",
            duration: "20 Minutes",
             localtion: "Angamaly,Kerala",
            price: "₹338",
            timeAgo: "22 Minutes Ago",
            type: "chat"
        },
        {
            id: 3,
            name: "Rajiv Menon",
            duration: "15 Minutes",
             localtion: "Palakad,Kerala",
            price: "₹450",
            timeAgo: "52 Minutes Ago",
            type: "call"
        },
        {
            id: 4,
            name: "Rajiv Nair",
            duration: "15 Minutes",
            localtion: "Kochi,Kerala",
            price: "₹450",
            timeAgo: "52 Minutes Ago",
            type: "call"
        }
    ]

    return (
        <div className="w-full h-full bg-[#FFFFFF] rounded-xl shadow-card p-5 flex flex-col gap-4">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full border border-[#D7D6D6] flex items-center justify-center">
                        <MessageCircleCheck color="#43157C" size={20} />
                    </div>
                    <span className="text-[#555555] text-[16px] font-inter font-medium">Pending Request</span>
                </div>

                <button className="px-3 py-1 rounded-lg border font-inter border-[#8E8E8E] text-[#767575] text-xs">
                    Show all
                </button>
            </div>

            {/* Request List */}
            <div className="flex flex-col gap-4">
                {requests.map((req) => (
                    <div
                        key={req.id}
                        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-xl border border-[#D7D6D6] shadow-sm"
                    >

                        {/* Left */}
                        <div className="flex items-center gap-4">
                            {/* <div className="w-14 h-14 rounded-xl border border-[#D7D6D6] flex items-center justify-center">
                                {req.type === "call" ? (
                                    <Phone size={20} className="text-[#DA7000]" />
                                ) : (
                                    <MessageSquare size={20} className="text-[#DA7000]" />
                                )}
                            </div> */}

                            <div className="  flex items-center justify-center">
                                <img className='w-20 h-20 border rounded-full' src="https://img.freepik.com/free-vector/young-man-with-glasses-avatar_1308-175763.jpg?semt=ais_incoming&w=740&q=80" alt="" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <h3 className="text-[#1E1D1D] font-inter font-semibold">{req.name}</h3>

                                <div className="flex gap-4 text-sm text-[#555555]">
                                    <span className='flex items-center font-inter gap-1 '>


                                        {
                                            isExpert ? (
                                                <>
                                                    <MapPin size={14} />
                                                    {req.localtion}
                                                </>
                                            ) : (
                                                <>
                                                    <Clock size={14} />
                                                    {req.duration}
                                                </>
                                            )
                                        }
                                    </span>
                                    <span className='flex items-center gap-1 '>
                                        <ReceiptIndianRupee size={14} />
                                        {req.price}</span>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex flex-col md:items-end gap-2">
                            <span className="text-[11px] font-inter text-[#959393]">{req.timeAgo}</span>

                            <div className="flex gap-2">
                                <Button
                                    size="sm"
                                    variant="secondary">
                                    Deny
                                </Button>
                                <Button
                                    type="submit"
                                    size="sm"
                                    variant="primary">
                                    Accept
                                </Button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default AstrologerPendingReq