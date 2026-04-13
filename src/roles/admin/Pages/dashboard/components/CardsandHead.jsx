import React, { useRef } from 'react'
import Autoplay from "embla-carousel-autoplay"
import revenue from '@/assets/admin-assets/dashboard-Icons/dashbord_Revenue.svg'
import astro from '@/assets/admin-assets/dashboard-Icons/dashboard_astro.svg'
import call from '@/assets/admin-assets/dashboard-Icons/dashboard_call.svg'
import chat from '@/assets/admin-assets/dashboard-Icons/dashboard_chat.svg'
import payout from '@/assets/admin-assets/dashboard-Icons/dashboard_payOut.svg'
import pending_Req from '@/assets/admin-assets/dashboard-Icons/dashboard_pndg_Request.svg'
import revenue_Today from '@/assets/admin-assets/dashboard-Icons/dashboard_revenueToday.svg'
import wallet from '@/assets/admin-assets/dashboard-Icons/dashboard_wallet.svg'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const CardsandHead = () => {




    const cards = [
        { title: "Total Platform Revenue", value: "15,4849.00", icon: revenue, bg: "bg-[#E8FFC3]" },
        { title: "Wallet Sales Today", value: "53", icon: wallet, bg: "bg-[#F9EECA]" },
        { title: "Platform Revenue Today", value: "5,187.24", icon: revenue_Today, bg: "bg-[#D7F2FF]" },
        { title: "Total Astrologers", value: "234", icon: astro, bg: "bg-[#E9D9FD]" },
        { title: "Consultation Calls", value: "153", icon: call, bg: "bg-[#D7DAFF]" },
        { title: "Consultation Chats", value: "484", icon: chat, bg: "bg-[#FFEBEB]" },
        { title: "Pending Request", value: "49", icon: pending_Req, bg: "bg-[#DDE7FD]" },
        { title: "Pending Payouts", value: "4849.00", icon: payout, bg: "bg-[#FFECD7]" }
    ];

    const Card = ({ icon, title, value, bg }) => (
        <div className="p-3 rounded-[12px] bg-white shadow-md flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-3">
                <img src={icon} className={`${bg} rounded-sm p-1`} alt="icon" />
                <p className='text-[#565656] font-urbanist text-[16px] font-semibold'>
                    {title}
                </p>
            </div>
            <p className='text-black font-urbanist text-[24px] font-semibold'>
                {value}
            </p>
        </div>
    )

    const plugin = useRef(
        Autoplay({ delay: 2500, stopOnInteraction: false })
    )

    return (
        <div>

            {/* Header */}
            <div className="w-full p-4">
                <h1 className='text-black font-urbanist text-[20px] font-semibold'>
                    Hi Ashok Varma!
                </h1>
                <p className='text-[#484848] font-urbanist text-[16px] font-semibold'>
                    Let’s check your Asset & Manage here.
                </p>
            </div>


            {/* MOBILE CAROUSEL */}
            <div className="relative block lg:hidden p-4 bg-[#F4EEFD] ">

                {/* Left Shade */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-gray-100 to-transparent z-10" />

                {/* Right Shade */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-gray-100 to-transparent z-10" />

                <Carousel
                    plugins={[plugin.current]}
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="flex items-center">

                        {cards.map((card, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-[85%] flex justify-center"
                            >
                                <div className="w-full max-w-sm">
                                    <Card {...card} />
                                </div>
                            </CarouselItem>
                        ))}

                    </CarouselContent>
                </Carousel>

            </div>


            {/* DESKTOP GRID */}
            <div className="hidden lg:grid w-full p-4 grid-cols-4 gap-8">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    )
}

export default CardsandHead