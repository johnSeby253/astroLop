import useExpertFormStore from '@/roles/admin/store/useExpertFormStore';
import React, { useRef, useEffect, useState } from 'react';

const LanguageSelector = () => {
  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Access store directly
  const professionalData = useExpertFormStore((state) => state.formData.professional);
  const setProfessionalData = useExpertFormStore((state) => state.setProfessionalData);

  const allLanguages = [
    "English", "Hindi", "Malayalam", "Tamil", "Telugu", "Kannada",
    "Bengali", "Marathi", "Gujarati", "Punjabi", "Urdu", "Odia",
    "Assamese", "Nepali", "Sanskrit", "Konkani", "Tulu", "Manipuri"
  ];

  // Toggle language selection
  const toggleLanguage = (lang) => {
    const updated = professionalData.languages?.includes(lang)
      ? professionalData.languages.filter(l => l !== lang)
      : [...(professionalData.languages || []), lang];

    setProfessionalData({ languages: updated });
  };

  // Remove a language
  const removeLanguage = (lang) => {
    const updated = professionalData.languages?.filter(l => l !== lang);
    setProfessionalData({ languages: updated });
  };

  // Close dropdown when clicking outside
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
    <div className="max-w-125" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full border border-border-line rounded-md px-4 py-2 bg-white text-left focus:outline-none focus:ring-2 focus:ring-Primary-light"
        >
          {professionalData.languages?.length > 0
            ? `${professionalData.languages.length} selected`
            : "Select languages"}
        </button>

        {dropdownOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border vertical-scrollbar border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
            {allLanguages.map((lang) => (
              <div
                key={lang}
                onClick={() => toggleLanguage(lang)}
                className={`px-4 py-2 cursor-pointer hover:bg-[#D0B1EC] ${professionalData.languages?.includes(lang)
                    ? "bg-Primary-light text-white font-semibold"
                    : ""
                  }`}
              >
                {lang}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Selected tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {professionalData.languages?.map((lang) => (
          <span
            key={lang}
            className="inline-flex items-center border border-primary bg-[#F5EEFF] text-primary text-sm px-3 py-1 rounded-lg"
          >
            {lang}
            <button
              onClick={() => removeLanguage(lang)}
              className="ml-2 text-primary hover:text-Primary-light focus:outline-none"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;