import React, { useRef, useEffect, useState } from 'react';

const EditLanguageSelector = ({ data = [], onChange }) => {
    const dropdownRef = useRef(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedLanguages, setSelectedLanguages] = useState(data);

    const allLanguages = [
        "English", "Hindi", "Malayalam", "Tamil", "Telugu", "Kannada",
        "Bengali", "Marathi", "Gujarati", "Punjabi", "Urdu", "Odia",
        "Assamese", "Nepali", "Sanskrit", "Konkani", "Tulu", "Manipuri"
    ];

    // Sync when parent data changes (important for edit modal)
    useEffect(() => {
        setSelectedLanguages(data);
    }, [data]);

    // Toggle language
    const toggleLanguage = (lang) => {
        const updated = selectedLanguages.includes(lang)
            ? selectedLanguages.filter(l => l !== lang)
            : [...selectedLanguages, lang];

        setSelectedLanguages(updated);
        onChange && onChange(updated);
    };

    // Remove language
    const removeLanguage = (lang) => {
        const updated = selectedLanguages.filter(l => l !== lang);
        setSelectedLanguages(updated);
        onChange && onChange(updated);
    };

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="min-w-80 max-w-125" ref={dropdownRef}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Edit Language
            </label>

            <div className="relative">
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full border border-border-line rounded-md px-4 py-2 bg-white text-left"
                >
                    {selectedLanguages.length > 0
                        ? `${selectedLanguages.length} selected`
                        : "Select languages"}
                </button>

                {dropdownOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                        {allLanguages.map((lang) => (
                            <div
                                key={lang}
                                onClick={() => toggleLanguage(lang)}
                                className={`px-4 py-2 cursor-pointer hover:bg-[#D0B1EC]
                  ${selectedLanguages.includes(lang)
                                        ? "bg-Primary-light text-white font-semibold"
                                        : ""}`}
                            >
                                {lang}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Selected Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
                {selectedLanguages.map((lang) => (
                    <span
                        key={lang}
                        className="inline-flex items-center border border-primary bg-[#F5EEFF] text-primary text-sm px-3 py-1 rounded-lg"
                    >
                        {lang}
                        <button
                            onClick={() => removeLanguage(lang)}
                            className="ml-2"
                        >
                            ×
                        </button>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default EditLanguageSelector;