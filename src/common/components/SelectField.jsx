import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectField = ({
  label,
  placeholder = "Select option",
  value,
  onChange,
  options = [],
  error,

  // NEW CUSTOMIZATION PROPS
  containerClassName = "",
  labelClassName = "",
  triggerClassName = "",
  contentClassName = "",
}) => {
  const baseTriggerStyle =
    "w-full !h-12 mt-2 border-border-line text-[14px] px-4";

  return (
    <div className={`pb-4 ${containerClassName}`}>
      {label && (
        <label
          className={`font-inter text-[16px] font-medium leading-[150%] text-greytext ${labelClassName}`}
        >
          {label}
        </label>
      )}

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className={`${baseTriggerStyle} ${triggerClassName}`}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent
          position="popper"
          side="bottom"
          align="start"
          sideOffset={4}
          className={`bg-white ${contentClassName}`}
        >
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default SelectField;