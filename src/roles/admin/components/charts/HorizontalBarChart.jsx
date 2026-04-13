import React from "react";
import astro from '@/assets/admin-assets/dashboard-Icons/dashboard_astro.svg'


const HorizontalBarChart = ({ title, data }) => {
    const maxValue = Math.max(...data.map(item => item.amount));

    return (
        <div className="bg-white rounded-xl p-4 shadow-sm w-full">

            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg"><img src={astro} alt="" /></div>
                <p className="font-semibold text-[#565656] text-base">
                    {title}
                </p>
            </div>

            {/* List */}
            <div className="flex flex-col gap-3">

                {data.map((item, index) => {
                    const width = (item.amount / maxValue) * 100;

                    return (
                        <div
                            key={index}
                            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 bg-[#F9F9F9] border rounded-xl px-3 py-2"
                        >
                            <div className="w-[15%] flex items-center gap-3">
                                {/* Avatar */}
                                <img
                                    src={item.avatar}
                                    alt=""
                                    className="w-8 h-8 rounded-full object-cover"
                                />

                                {/* Name */}
                                <p className="text-[#090909] text-center font-inter text-sm font-medium leading-[15.733px] tracking-[-0.437px]">
                                    {item.name}
                                </p>
                            </div>


                            {/* Progress Bar */}
                            <div className=" w-full">
                                <div className="flex-1 bg-[#F4DCC8] rounded-full h-10 relative overflow-hidden">

                                    {/* Filled */}
                                    <div
                                        className="h-full rounded-full flex items-center justify-end pr-2"
                                        style={{
                                            width: `${width}%`,
                                            background:
                                                "linear-gradient(90deg, #A08AE5, #7C3AED)",
                                        }}
                                    >
                                        {/* Amount Badge */}
                                        <span className="bg-[#5B21B6] text-white text-[11px] px-3 py-[3px] rounded-full">
                                            ₹{item.amount.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default HorizontalBarChart;