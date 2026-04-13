import React from 'react'
import astroOnboard from "@/assets/astrologer-assets/astroOnbording.png"


const OnBoardSideImage = () => {
    return (
        <div
            className="w-[65%] h-[95%] rounded-[40px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${astroOnboard})` }}
        >
        </div>
    )
}

export default OnBoardSideImage
