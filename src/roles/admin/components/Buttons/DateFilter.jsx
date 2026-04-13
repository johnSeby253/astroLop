import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, X } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DateFilter({ onChange }) {
  const [mode, setMode] = React.useState("single");
  const [date, setDate] = React.useState(null);
  const [range, setRange] = React.useState({ from: null, to: null });

  const handleSingle = (selected) => {
    setDate(selected);
    onChange?.({ type: "single", date: selected });
  };

  const handleRange = (selected) => {
    setRange(selected || { from: null, to: null });
    onChange?.({
      type: "range",
      startDate: selected?.from,
      endDate: selected?.to,
    });
  };

  const handleClear = () => {
    setDate(null);
    setRange({ from: null, to: null });
    setMode("single");

    onChange?.({ type: "clear" });
  };

  const hasValue =
    mode === "single"
      ? !!date
      : !!range?.from || !!range?.to;

  return (
    <div className="flex items-center gap-2 border rounded-md px-3 py-2 w-fit bg-white">
      
      {/* 🔥 Popover */}
      <Popover>
        <PopoverTrigger asChild>
          <button className="flex items-center gap-2 text-sm text-[#252525] font-medium">
            <CalendarIcon size={26} className="text-[#767272]" />

            {mode === "single" ? (
              date ? (
                format(date, "dd MMM yyyy")
              ) : (
                ""
              )
            ) : range?.from ? (
              range.to ? (
                `${format(range.from, "dd MMM yyyy")} - ${format(
                  range.to,
                  "dd MMM yyyy"
                )}`
              ) : (
                format(range.from, "dd MMM yyyy")
              )
            ) : (
              ""
            )}
          </button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-3 space-y-3 bg-white" align="start">
          
          {/* ✅ Radio Switch */}
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="mode"
                checked={mode === "single"}
                onChange={() => setMode("single")}
                className="accent-primary"
              />
              <span className="text-sm text-[#252525] font-medium">
                Single Date
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="mode"
                checked={mode === "range"}
                onChange={() => setMode("range")}
                className="accent-primary"
              />
              <span className="text-sm text-[#252525] font-medium">
                Date Range
              </span>
            </label>
          </div>

          <div className="border-t" />

          {/* 📅 Calendar */}
          {mode === "single" ? (
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleSingle}
              initialFocus
            />
          ) : (
            <Calendar
              mode="range"
              selected={range}
              onSelect={handleRange}
              numberOfMonths={2}
              initialFocus
            />
          )}
        </PopoverContent>
      </Popover>

      {/* ✅ Clear Button OUTSIDE trigger */}
      {hasValue && (
        <button
          onClick={handleClear}
          className="p-1 rounded hover:bg-gray-100"
        >
          <X size={18} className="text-[#767272] hover:text-primary" />
        </button>
      )}
    </div>
  );
}