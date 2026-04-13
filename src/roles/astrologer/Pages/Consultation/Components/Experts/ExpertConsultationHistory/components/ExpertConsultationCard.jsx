import React from 'react'
import { Mars, Phone, Star, MessageSquare, Venus, Transgender } from "lucide-react";



const consultations = [
    {
        id: 1,
        name: "Arjun Patel",
        avatar: "https://placehold.co/100x100",
        status: "Completed",
        statusColor: "#0C842C",
        gender: "female",
        consultationType: "pooja",
        typeColor: "#DA7000",
        rating: 4.7,
        ratingColor: "#DA7000",
        date: "18 Mar 2026",
        time: "2:30 PM",
        duration: "30 Minutes",
        price: 600,
        feedback: "Amazing session! Very insightful and accurate readings."
    },
    {
        id: 2,
        name: "Shanti Sharma",
        avatar: "https://placehold.co/100x100",
        status: "Pending",
        gender: "male",
        statusColor: "#FEA603",
        consultationType: "vastu",
        typeColor: "#DA7000",
        rating: 4.9,
        ratingColor: "#DA7000",
        date: "20 Mar 2026",
        time: "4:00 PM",
        duration: "45 Minutes",
        price: 750,
        feedback: "Very helpful and clear advice!"
    },
    {
        id: 3,
        name: "Shanti Sharma1",
        avatar: "https://placehold.co/100x100",
        status: "Pending",
        gender: "male",
        statusColor: "#FEA603",
        consultationType: "vastu",
        typeColor: "#DA7000",
        rating: 4.9,
        ratingColor: "#DA7000",
        date: "20 Mar 2026",
        time: "4:00 PM",
        duration: "45 Minutes",
        price: 750,
        feedback: "Very helpful and clear advice!"
    },
];
const ExpertConsultationCard = ({ tabValue }) => {    
    const filteredData =
        tabValue === "all_expert_consultation"
            ? consultations
            : consultations.filter((item) => item.consultationType === tabValue);

    const getGenderIcon = (gender) => {
        switch (gender) {
            case "male":
                return <Mars size={16} color="#2A00FF" />;
            case "female":
                return <Venus size={16} color="#DA00FF" />;
            case "non-binary":
                return <Transgender size={16} color="#FF00AA" />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col gap-4">
            {filteredData.map((data) => (
                <div
                    key={data.id}
                    className="w-full bg-[#FFFFFF] rounded-3xl shadow-[0px_2px_8.6px_0px_rgba(0,0,0,0.25)] p-4 flex flex-col items-center md:flex-row gap-4"
                >
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                        <img
                            src={data.avatar}
                            alt="Avatar"
                            className="w-24 h-24 rounded-full object-cover"
                        />
                    </div>

                    {/* Info Section */}
                    <div className="flex flex-1 flex-col justify-between gap-2">
                        {/* Top Row */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <h2 className="text-[#1D1D1D] text-xl font-semibold font-['Inter']">
                                    {data.name}
                                </h2>
                                <div className="bg-[#] rounded-2xl flex justify-center items-center p-1">
                                    {getGenderIcon(data.gender)}
                                </div>
                            </div>

                            <div
                                className="px-3 py-1 rounded-lg text-sm font-medium font-['Inter'] text-center"
                                style={{ backgroundColor: data.status === "Completed" ? "#D1FFB3" : "#FFF0E1", color: data.statusColor }}
                            >
                                {data.status}
                            </div>
                        </div>

                        {/* Consultation Type & Rating */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-2 sm:gap-6 mt-1">
                            <div className="flex items-center gap-2">
                                {data.consultationType === "vastu" ? (
                                    <Phone size={18} color={data.typeColor} />
                                ) : (
                                    <MessageSquare size={18} color={data.typeColor} />
                                )}
                                <span className="text-[#1D1D1D] text-sm font-medium font-['Inter']">
                                    {data.consultationType} Consultation
                                </span>
                            </div>

                            <div className="flex items-center gap-1">
                                <Star size={18} color={data.ratingColor} />
                                <span className="text-[#757575] text-sm font-medium font-['Inter']">
                                    {data.rating}
                                </span>
                            </div>
                        </div>

                        {/* Date, Time, Duration & Price */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-1">
                            <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                                <span className="text-[#2C2C2C] text-sm font-medium font-['Inter']">
                                    {data.date}
                                </span>
                                <span className="text-[#2C2C2C] text-sm font-medium font-['Inter']">
                                    {data.time}
                                </span>
                                <div className="flex items-center gap-1">
                                    <Phone size={16} className="text-[#757575]" />
                                    <span className="text-[#2C2C2C] text-sm font-medium font-['Inter']">
                                        {data.duration}
                                    </span>
                                </div>
                            </div>

                            <div className="text-[#555555] text-xl font-semibold font-['Inter']">
                                ₹{data.price}
                            </div>
                        </div>

                        {/* Feedback */}
                        <div className="mt-2 w-full 2xl:w-[60%] px-4 py-2 bg-[#FFF0E1] rounded-[10px] text-[#42147B] text-xs font-medium font-['Inter']">
                            "{data.feedback}"
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ExpertConsultationCard
