import React from 'react'
import ExpertConsultationHistory from './Components/Experts/ExpertConsultationHistory';
import ConsultationCards from './Components/Astrologers/ConsultationCards';
import ConsultationHistory from './Components/Astrologers/ConsultationHistory';
import ExpertConsultationCard from './Components/Experts/ExpertConsultationCard';


const AstroConsultation = () => {
    const isExpert = localStorage.getItem("isExpert") === "true";

    return (
        <div className='px-4 flex flex-col gap-3'>

            <div className="w-full px-6 sm:px-9 py-4 sm:py-6 bg-white rounded-xl shadow-md flex flex-col gap-2.5">
                {/* Title */}
                <div className="inline-flex justify-start items-center">
                    <h2 className="text-zinc-800 text-xl sm:text-2xl font-semibold font-inter">
                        Consultation History
                    </h2>
                </div>

                {/* Subtitle */}
                <p className="text-zinc-600 text-base sm:text-lg font-medium font-manrope">
                    View all your past consultations and client reviews
                </p>
            </div>

            <div className="">
                {
                    isExpert ? (
                        <>
                            <ExpertConsultationCard />
                        </>
                    ) : (
                        <>
                            <ConsultationCards />
                        </>
                    )
                }

            </div>

            <div className="">
                {
                    isExpert ? (
                        <>
                            <ExpertConsultationHistory />
                        </>
                    ) : (
                        <>
                            <ConsultationHistory />
                        </>
                    )
                }

            </div>




        </div>
    )
}

export default AstroConsultation
