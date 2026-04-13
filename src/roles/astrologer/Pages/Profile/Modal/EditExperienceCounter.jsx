import { useEffect, useState } from "react";

export default function EditExperienceCounter({ data, onChange }) {
  const [years, setYears] = useState(data);

  // Sync when edit data comes
  useEffect(() => {
    setYears(data);
  }, [data]);

  const decrease = () => {
    if (years > 0) {
      const updated = years - 1;
      setYears(updated);
      onChange && onChange(updated);
    }
  };

  const increase = () => {
    const updated = years + 1;
    setYears(updated);
    onChange && onChange(updated);
  };

  return (
    <div className="w-full h-full">
      <div className="flex-col flex w-fit space-y-3">
        <label className="text-[#2D2D2D] font-inter text-[14px] font-semibold">
          Years of Experience
        </label>

        <div className="flex justify-center space-x-4">
          <button
            onClick={decrease}
            className="bg-purple-600 text-2xl flex items-center justify-center text-white w-8 h-8 rounded-sm hover:bg-purple-700"
          >
            -
          </button>

          <span className="px-4 rounded-md flex items-center font-bold border border-border-line">
            {years}
          </span>

          <button
            onClick={increase}
            className="bg-purple-600 text-2xl flex items-center justify-center text-white w-8 h-8 rounded-sm hover:bg-purple-700"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}