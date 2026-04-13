import HorizontalBarChart from '@/roles/admin/components/charts/HorizontalBarChart';
import React from 'react'

const RevenueChart = () => {

    const astrologerData = [
        {
            name: "Rahul Sharma",
            amount: 65553,
            avatar: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWOFXk4y0sZ1sdcBEEHKGdmAFXuSpafSP1Q&s`,
        },
        {
            name: "Arjun Mehta",
            amount: 58400,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWOFXk4y0sZ1sdcBEEHKGdmAFXuSpafSP1Q&s",
        },
        {
            name: "Priya Verma",
            amount: 42890,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWOFXk4y0sZ1sdcBEEHKGdmAFXuSpafSP1Q&s",
        },
        {
            name: "Arjun Mehta",
            amount: 36550,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWOFXk4y0sZ1sdcBEEHKGdmAFXuSpafSP1Q&s",
        },
        {
            name: "Sita Rao",
            amount: 29800,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWOFXk4y0sZ1sdcBEEHKGdmAFXuSpafSP1Q&s",
        },
    ];
    return (
        <div>
            <HorizontalBarChart
                title="Top earning Astrologer"
                data={astrologerData}
            />
        </div>
    )
}

export default RevenueChart
