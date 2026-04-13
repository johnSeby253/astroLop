import React, { useState } from "react";
import eye_open from "../../assets/admin-assets/eye.svg";
import eye_closed from "../../assets/admin-assets/eye-closed.svg";
import DatePicker from "@/common/components/DatePicker";

const FormFields = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error,
  mode = "single",

  // NEW PROPS
  containerClassName = "",
  labelClassName = "",
  inputClassName = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const baseInputStyle =
    "w-full px-4 py-3 bg-background border border-greytext rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-hover focus:border-primary-hover transition";

  const renderField = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${baseInputStyle} ${inputClassName}`}
          />
        );

      case "file":
        return (
          <input
            type="file"
            name={name}
            onChange={onChange}
            className={`${baseInputStyle} ${inputClassName}`}
          />
        );

      case "password":
        return (
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className={`${baseInputStyle} ${inputClassName}`}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <img src={eye_open} className="h-5" alt="" />
              ) : (
                <img src={eye_closed} className="h-5" alt="" />
              )}
            </button>
          </div>
        );

      case "datepicker":
        return (
          <DatePicker
            mode={mode}
            value={value}
            onChange={onChange}
            className={`${baseInputStyle} ${inputClassName}`}
          />
        );

      default:
        return (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${baseInputStyle} ${inputClassName}`}
          />
        );
    }
  };

  return (
    <div className={`pb-4 ${containerClassName}`}>
      {label && (
        <label
          className={`font-inter text-[16px] font-medium leading-[150%] text-greytext ${labelClassName}`}
        >
          {label}
        </label>
      )}

      <div className="mt-2">{renderField()}</div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default FormFields;