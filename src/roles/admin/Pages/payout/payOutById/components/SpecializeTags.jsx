import React, { useState } from "react";

const SpecializeTags = ({ specialize }) => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="flex flex-col gap-2">

            {/* Default View */}
            {!showAll && (
                <div className="flex items-center gap-2">
                    {specialize.slice(0, 1).map((item, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-[12px] rounded-md bg-[#FFF0BE] text-[#C36700] border border-[#C36700]"
                        >
                            {item}
                        </span>
                    ))}

                    {specialize.length > 1 && (
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-2 py-1 text-[12px] rounded-md bg-[#FFF0BE] text-[#C36700] border border-[#C36700] hover:bg-[#ffe8a3]"
                        >
                            +{specialize.length - 1} More
                        </button>
                    )}
                </div>
            )}

            {/* Expanded Grid View */}
            {showAll && (
                <div className="flex flex-col gap-2">

                    <div className="grid smgrid-cols-3 lg:grid-cols-5 gap-2">
                        {specialize.map((item, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-[12px] text-center rounded-md bg-[#FFF0BE] text-[#C36700] border border-[#C36700]"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* Collapse Button */}
                    <button
                        onClick={() => setShowAll(false)}
                        className="text-[12px] text-[#C36700] underline self-start"
                    >
                        Show Less
                    </button>
                </div>
            )}
        </div>
    );
};

export default SpecializeTags;