import React, { useState, useEffect } from "react";

const SpecilizationList = ({ data = [], onChange }) => {
    const [selected, setSelected] = useState(data);

    useEffect(() => {
        setSelected(data);
    }, [data]);

    const toggleSelection = (option) => {
        let updated;

        if (selected.includes(option)) {
            updated = selected.filter((item) => item !== option);
        } else {
            updated = [...selected, option];
        }

        setSelected(updated);
        onChange && onChange(updated); // send back to parent
    };

    const expertiseOptions = [
        "Numerology",
        "Pythagorean",
        "Vedic",
        "Tibetan",
        "Shamanic",
        "Tarot Reading",
        "Astrology",
        "Western",
        "Eastern",
        "Palmistry",
        "Intuitive",
        "Chinese",
        "Egyptian",
        "Persian",
        "Crystal Healing",
        "Reiki",
        "Energy Therapy",
        "Mayan",
        "Incan",
        "Aztec",
        "Northern",
    ];

    return (
        <div className="w-full max-h-[400px] overflow-y-auto light-scrollbar pe-5">
            <h2 className="text-[#2D2D2D] font-inter text-[14px] font-semibold pb-4">
               Edit Specilization
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {expertiseOptions.map((option) => (
                    <button
                        key={option}
                        type="button"
                        onClick={() => toggleSelection(option)}
                        className={`py-3 rounded-md border text-sm font-medium transition
                            ${
                                selected.includes(option)
                                    ? "text-white bg-[#E47A00]"
                                    : "bg-[#FFEFD5] text-gray-700 hover:bg-[#FFEFD0]"
                            }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SpecilizationList;