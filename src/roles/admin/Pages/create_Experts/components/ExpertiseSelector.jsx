import useExpertFormStore from '@/roles/admin/store/useExpertFormStore';

const ExpertiseSelector = () => {
    const professionalData = useExpertFormStore((state) => state.formData.professional);
    const setProfessionalData = useExpertFormStore((state) => state.setProfessionalData);

    const selected = professionalData.expertise || [];

    const toggleSelection = (option) => {

        const updated = selected.includes(option)
            ? selected.filter((item) => item !== option)
            : [...selected, option];

        setProfessionalData({ expertise: updated });
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
        <div className="w-full max-h-[400px]  overflow-y-auto light-scrollbar pe-5">
            <h2 className="text-[#2D2D2D] font-inter text-[14px] font-semibold leading-5.25 pb-4">Select area of expertise</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {expertiseOptions.map((option) => (
                    <button
                        key={option}
                        onClick={() => toggleSelection(option)}
                        className={`py-3 rounded-md border text-sm font-medium transition
              ${selected.includes(option)
                                ? "text-white bg-[#E47A00]"
                                : "bg-[#FFEFD5] text-gray-700 hover:bg-[#FFEFD0]"
                            }`}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {/* Display selected items */}
            {/* <div className="mt-6">
                <h3 className="text-lg font-medium">Selected:</h3>
                {selected.length > 0 ? (
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                        {selected.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 mt-2">No expertise selected yet.</p>
                )}
            </div> */}
        </div>
    )
}

export default ExpertiseSelector
