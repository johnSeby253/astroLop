import Button from '@/common/components/Button'
import { BadgeIndianRupee, ClipboardClock, MessageSquare, Phone, Star } from 'lucide-react'
import React, { useEffect, useRef } from 'react'

const ExpertPayoutCards = () => {
    const scrollRef = useRef(null);


    // Auto scroll
    useEffect(() => {
        const container = scrollRef.current
        let scrollAmount = 0

        const autoScroll = () => {
            if (!container) return
            scrollAmount += 280

            if (scrollAmount >= container.scrollWidth - container.clientWidth) {
                scrollAmount = 0
            }

            container.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            })
        }

        const interval = setInterval(autoScroll, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full">

            {/* Mobile Scroll Cards */}
            <div
                ref={scrollRef}
                className="flex justify-start gap-5 overflow-x-auto snap-x snap-mandatory py-6 px-4 lg:hidden scrollbar-hide"
            >

                {/* Pending Request */}
                <div className="min-w-[270px] snap-center bg-white rounded-2xl shadow-lg px-6 py-7 flex flex-col gap-6 hover:shadow-xl transition duration-300">

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border flex items-center justify-center">
                            <Phone color="#43157C" size={20} />
                        </div>
                        <span className="text-[#555] text-sm font-medium">
                            Total Calls
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">56</h2>
                        <div className="bg-[#FFE6DC] px-2 py-1 rounded-md">
                            <span className="text-[#DB4900] text-xs font-medium">
                                +12 New
                            </span>
                        </div>
                    </div>
                </div>

                <div className="min-w-[270px] snap-center bg-white rounded-2xl shadow-lg px-6 py-7 flex flex-col gap-6 hover:shadow-xl transition duration-300">

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border flex items-center justify-center">
                            <MessageSquare color="#43157C" size={20} />
                        </div>
                        <span className="text-[#555] text-sm font-medium">
                            Total Chats
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">56</h2>
                        <div className="bg-[#FFE6DC] px-2 py-1 rounded-md">
                            <span className="text-[#DB4900] text-xs font-medium">
                                +12 New
                            </span>
                        </div>
                    </div>
                </div>

                {/* Earnings */}
                <div className="min-w-[270px] snap-center bg-white rounded-2xl shadow-lg px-6 py-7 flex flex-col gap-6 hover:shadow-xl transition duration-300">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border flex items-center justify-center">
                            <BadgeIndianRupee color="#43157C" size={20} />
                        </div>
                        <span className="text-[#555] text-sm font-medium">
                            Earnings
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">₹1,89,556</h2>
                        <div className="bg-[#D5FFE6] px-2 py-1 rounded-md">
                            <span className="text-[#03881B] text-xs font-medium">
                                +8%
                            </span>
                        </div>
                    </div>
                </div>

                {/* Earnings */}
                <div className="min-w-[270px] snap-center bg-white rounded-2xl shadow-lg px-6 py-7 flex flex-col gap-6 hover:shadow-xl transition duration-300">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border flex items-center justify-center">
                            <Star color="#43157C" size={20} />
                        </div>
                        <span className="text-[#555] text-sm font-medium">
                            Average Rating
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">4.7</h2>
                        <div className="bg-[#D5FFE6] px-2 py-1 rounded-md">
                            <span className="text-[#03881B] text-xs font-medium">
                                +8%
                            </span>
                        </div>
                    </div>
                </div>




            </div>

            {/* Desktop Grid */}
            <div className="w-full h-full hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

                <div className="bg-[#FFFFFF] rounded-xl shadow-[0px_4px_10.5px_rgba(58,58,58,0.27)] px-5 py-8 flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full border shadow-card border-[#DAD9D9] flex items-center justify-center">
                            <BadgeIndianRupee color='#43157C' size={20} />
                        </div>
                        <span className="text-[#555555] font-inter text-sm font-medium">Total Earnings</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold font-urbanist text-[#000000]">₹1,89,556</h2>
                        <div className="bg-[#D5FFE6] px-2 py-1 rounded-md">
                            <span className="text-[#03881B] text-xs font-inter font-medium">+8%</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] rounded-xl shadow-[0px_4px_10.5px_rgba(58,58,58,0.27)] px-5 py-8 flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full border shadow-card border-[#DAD9D9] flex items-center justify-center">
                            <Phone color='#43157C' size={20} />
                        </div>
                        <span className="text-[#555555] font-inter text-sm font-medium">Vastu Earnings</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold font-urbanist text-[#000000]">₹9,556</h2>
                        <div className="bg-[#D5FFE6] px-2 py-1 rounded-md">
                            <span className="text-[#03881B] text-xs font-inter font-medium">+2%</span>
                        </div>
                    </div>
                </div>





                {/* Earnings */}
                <div className="bg-[#FFFFFF] rounded-xl shadow-[0px_4px_10.5px_rgba(58,58,58,0.27)] px-5 py-8 flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full border shadow-card border-[#DAD9D9] flex items-center justify-center">
                            <MessageSquare color='#43157C' size={20} />
                        </div>
                        <span className="text-[#555555] font-inter text-sm font-medium">Pooja Earnings</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold font-urbanist text-[#000000]">₹1,556</h2>
                        <div className="bg-[#D5FFE6] px-2 py-1 rounded-md">
                            <span className="text-[#03881B] text-xs font-inter font-medium">+10%</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] rounded-xl shadow-[0px_4px_10.5px_rgba(58,58,58,0.27)] px-5 py-8 flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full border shadow-card border-[#DAD9D9] flex items-center justify-center">
                            <MessageSquare color='#43157C' size={20} />
                        </div>
                        <span className="text-[#555555] font-inter text-sm font-medium">Other Earnings</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold font-urbanist text-[#000000]">₹1,556</h2>
                        <div className="bg-[#D5FFE6] px-2 py-1 rounded-md">
                            <span className="text-[#03881B] text-xs font-inter font-medium">+10%</span>
                        </div>
                    </div>
                </div>


                <div className="bg-[#FFFFFF] rounded-xl shadow-[0px_4px_10.5px_rgba(58,58,58,0.27)] px-5 py-8 flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full border shadow-card border-[#DAD9D9] flex items-center justify-center">
                            <ClipboardClock color='#43157C' size={20} />
                        </div>
                        <span className="text-[#555555] font-inter text-sm font-medium">Available Payouts</span>
                    </div>

                    <div className="flex items-center justify-between ">
                        <h2 className="text-2xl font-semibold font-urbanist text-[#000000]">₹9056</h2>
                        <div className="px-2 py-1 rounded-md">
                            <Button>
                                Collect
                            </Button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default ExpertPayoutCards
