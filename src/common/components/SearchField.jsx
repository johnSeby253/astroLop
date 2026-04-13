import React from "react";
import { Search } from "lucide-react";

const SearchField = ({
  value,
  onChange,
  placeholder = "Search",
  className = "",
  inputClassName = ""
}) => {
  return (
    <div
      className={`flex items-center border border-border-line text-Input-text rounded-md px-2 py-1 ${className}`}
    >
      <Search size={16} className="text-Input-text" />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`outline-none ml-2 text-sm text-Input-text bg-transparent w-full ${inputClassName}`}
      />
    </div>
  );
};

export default SearchField;