import React, { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";

const CustomDropdown = ({ options = [], value, onChange, placeholder = "Select", align = "start" ,className }) => {
  const [selected, setSelected] = useState(value || "");

  const handleSelect = (val) => {
    setSelected(val);
    onChange?.(val);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={`flex items-center justify-between gap-2 w-full  border-border-line ${className} rounded-md bg-white hover:bg-gray-50`}>
          <span>{selected ? options.find(o => o.value === selected)?.label : placeholder}</span>
          <ChevronDown size={20} className="text-Dark-text" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align={align} className="min-w-[200px] bg-white   flex flex-col gap-1 p-3">
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className="px-4 py-2 justify-center rounded-md text-[#787878] hover:bg-[#D0B1EC] hover:text-primary focus:bg-[#D0B1EC]  text-center border border-[#787878]"
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropdown;