import CustomToggle from '@/common/components/CustomToggle'
import { Moon, Sparkles, Sun } from 'lucide-react'
import React, { useState } from 'react'

const DashboardTop = () => {
    const [isOnline, setIsOnline] = useState(true)

    return (
        <div className="w-full bg-[#FFFFFF] rounded-xl shadow-card p-4 md:p-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* Greeting */}
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2">
                        <h1 className="text-[#000000] text-lg md:text-2xl font-semibold">
                            Hi, Suryanarayan
                        </h1>
                        <Sparkles color='#FFAC33' />
                    </div>

                    <p className="text-[#484848] text-sm md:text-lg font-semibold mt-4">
                        Let’s check your Asset & Manage here.
                    </p>
                </div>

                {/* Online Toggle */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#FFFFFF] rounded-full border border-[#DAD9D9] flex items-center justify-center">
                            {isOnline ? (
                                <Sun className="text-green-500" />
                            ) : (
                                <Moon className="text-primary" />
                            )}
                        </div>

                        <span
                            className={`text-sm md:text-base font-medium ${isOnline ? "text-green-500" : "text-primary"
                                }`}
                        >
                            {isOnline ? "Online" : "Offline"}
                        </span>
                    </div>
              
                <CustomToggle
                    checked={isOnline}
                    onChange={setIsOnline}
                />
            </div>
        </div>
        </div >
    )
}

export default DashboardTop