import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const ServicesAttachments = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const images = [
        "https://cdn.prod.website-files.com/65ba5ae85ed7a1a3bf872a13/67ca2328a5aebddb6989e0c8_30x40%203%20Bedroom%20Floor%20Plan.webp",
        "https://www.houseplanfiles.com/b11.jpg",
        "https://cdn.prod.website-files.com/65ba5ae85ed7a1a3bf872a13/67ca2328a5aebddb6989e0c8_30x40%203%20Bedroom%20Floor%20Plan.webp",
        "https://www.houseplanfiles.com/b11.jpg"
    ];

    const nextImage = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    return (
        <div>
            <p className='text-[#2C2C2C] text-[16px] font-semibold py-3'>
                Attachment
            </p>

            {/* Image List */}
            <div className="flex gap-3 max-w-full py-5 overflow-x-auto light-scrollbar">
                {images.map((img, index) => (
                    <img
                        key={index}
                        className="w-32 h-32 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
                        src={img}
                        alt=""
                        onClick={() => setSelectedIndex(index)}
                    />
                ))}
            </div>

            {/* Image Preview Carousel */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setSelectedIndex(null)}
                >
                    {/* Left Arrow */}
                    <button
                        onClick={prevImage}
                        className="absolute left-5 text-white text-3xl bg-black/40 p-2 rounded-full"
                    >
                       <ChevronLeft/>
                    </button>

                    {/* Image */}
                    <img
                        src={images[selectedIndex]}
                        alt=""
                        className="max-w-[85%] max-h-[85%] rounded-lg shadow-lg"
                    />

                    {/* Right Arrow */}
                    <button
                        onClick={nextImage}
                        className="absolute right-5 text-white text-3xl bg-black/40 p-2 rounded-full"
                    >
                       <ChevronRight />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ServicesAttachments;