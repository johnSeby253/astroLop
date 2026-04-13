import React, { useState } from "react";
import { Filter, X } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FilterButton = ({
  options = [],
  onChange,
  defaultValue,
  // placeholder = "",
  className,
  size = 18,
  align = "start",
}) => {
  const [selected, setSelected] = useState(defaultValue || "");

  const handleSelect = (option) => {
    if (option.value === "") {
      // Clear filter
      setSelected("");
      onChange?.(""); // no params
      return;
    }

    setSelected(option.label);
    onChange?.(option.value);
  };



  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`flex items-center gap-2 border border-border-line rounded-md ${className} bg-white hover:bg-gray-50`}
        >
          <Filter size={size} color="#787878" />

          {selected && <span>{selected}</span>}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align={align}
        className="min-w-[180px] bg-white flex flex-col gap-1 p-3"
      >
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            className="border border-[#787878] justify-center text-[#787878] hover:bg-[#D0B1EC] hover:text-primary focus:bg-[#D0B1EC]"
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterButton;