import React, { useState } from "react";
import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { CalendarIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

const DatePicker = ({
    mode = "single",
    value,
    onChange,
    placeholder = "Pick a date",
    className,
    variant = "input", // "input" | "icon"
    iconClassName,
}) => {
    const [open, setOpen] = useState(false);

    const formatDate = () => {
        if (!value) return placeholder;

        if (mode === "range") {
            if (!value?.from) return placeholder;

            if (!value?.to) {
                return format(value.from, "dd MMM yyyy");
            }

            return `${format(value.from, "dd MMM yyyy")} - ${format(value.to, "dd MMM yyyy")}`;
        }

        return format(value, "dd MMM yyyy");
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>

                {/* INPUT VARIANT */}
                {variant === "input" ? (
                    <button
                        className={cn(
                            "w-full flex items-center justify-between rounded-md border px-3 py-2",
                            "border-border-line bg-white hover:bg-gray-50",
                            "text-Dark-text  text-[14px] ",
                            className
                        )}
                    >
                        <span className={cn(!value && "text-gray-400")}>
                            {formatDate()}
                        </span>

                        <div className="flex items-center gap-2">

                            {/* Clear button */}
                            {value && (
                                <span
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onChange(mode === "range" ? undefined : undefined);
                                    }}
                                    className="text-gray-400 hover:text-gray-600 cursor-pointer"
                                >
                                    <X className="w-4 h-4" />
                                </span>
                            )}
                            <CalendarIcon className="w-4 h-4 opacity-60" />

                        </div>
                    </button>
                ) : (

                    /* ICON VARIANT */
                    <button
                        className={cn(
                            "flex items-center gap-2 border rounded-md px-3 py-2 bg-white",
                            "border-gray-300 hover:bg-gray-50",
                            iconClassName
                        )}
                    >
                        <CalendarIcon className="w-4 h-4 text-gray-600" />

                        <span className="text-sm text-Dark-text font-medium">
                            {formatDate()}
                        </span>
                    </button>
                )}

            </PopoverTrigger>

            <PopoverContent className="w-auto p-0 bg-white" align="start">
                <Calendar
                    mode={mode}
                    selected={value}
                    captionLayout="dropdown"
                    fromYear={1900}
                    toYear={2100}
                    onSelect={(selectedDate) => {
                        if (!selectedDate) return;

                        onChange(selectedDate);

                        if (mode === "single") {
                            setOpen(false);
                        }

                        if (mode === "range" && selectedDate?.from && selectedDate?.to) {
                            setOpen(false);
                        }
                    }}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
};

export default DatePicker;