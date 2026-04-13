// components/CustomToggle.jsx
import React from "react";

const CustomToggle = ({ checked, onChange }) => {
    return (
        <button
            onClick={() => onChange(!checked)}
            className={`w-11 h-6 flex items-center rounded-full p-1 transition-all duration-300
  ${checked ? "bg-primary" : "bg-gray-300"}
  focus:outline-none focus:ring-2 focus:ring-purple-400`}
        >
            <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300
          ${checked ? "translate-x-5" : "translate-x-0"}`}
            />
        </button>
    );

};

export default CustomToggle;