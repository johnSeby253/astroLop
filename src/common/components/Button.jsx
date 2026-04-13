import React from "react";

const Button = React.forwardRef(
  (
    {
      children,
      type = "button",
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      disabled = false,
      onClick,
      className = "",
      ...props
    },
    ref
  ) => {
    const variants = {
      primary:
        "bg-primary text-white hover:bg-primary-hover rounded-lg",
      secondary:
        "bg-background hover:bg-gray-300 border border-border-line rounded-lg",
      lite_secondary:
        "bg-background hover:bg-gray-300 border border-border-line rounded-lg text-[#686565]",
      outline:
        "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
      danger:
        "bg-[#9F1705] rounded-md text-center text-white hover:bg-red-700",
      tableButton:
        "bg-Primary-light text-white px-4 py-2 rounded-lg text-sm hover:bg-[#7023B7]",
      yellowButton:
        "bg-[#F3DF00] text-black rounded-md text-center hover:bg-yellow-400",
      greenButton:
        "bg-[#0C8401] text-white rounded-md text-center hover:bg-green-800",
      paginationButtons:
        "text-primary md:border-2 md:border-primary rounded-md font-inter text-sm font-semibold tracking-[-0.436px]",
      actions:
        "flex items-center justify-center  rounded-full hover:bg-[#E8E8E8] focus:bg-[#E8E8E8]",
      upload:
        "cursor-pointer font-inter text-[15px] font-semibold leading-[22.5px] flex items-center gap-4 border border-accent text-accent px-5 py-2 rounded-md hover:bg-[#ACD2EC]",
    };

    const sizes = {
      ex: "px-5 py-1  text-[14px]",
      sm: "px-3 py-1 text-[14px]",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
      xl: "px-10 py-2 text-base"
    };

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        className={`
          ${variants[variant]}
          ${sizes[size]}
          ${fullWidth ? "w-full" : ""}
          ${loading || disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${className}
        `}
        {...props}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;