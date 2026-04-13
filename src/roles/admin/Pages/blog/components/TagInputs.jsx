import React, { useState } from "react";
import { X } from "lucide-react";

const TagsInput = ({ tagsList, selectedTags, setSelectedTags }) => {
    const [input, setInput] = useState("");
    const [openTags, setOpenTags] = useState(false);

    const filtered = tagsList.filter(
        (tag) =>
            tag.toLowerCase().includes(input.toLowerCase()) &&
            !selectedTags.includes(tag)
    );

    const addTag = (tag) => {
        setSelectedTags([...selectedTags, tag]);
        setInput("");
        setOpenTags(false);
    };

    const removeTag = (tag) => {
        setSelectedTags(selectedTags.filter((t) => t !== tag));
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && input.trim() !== "") {
            e.preventDefault();
            if (!selectedTags.includes(input.trim())) {
                setSelectedTags([...selectedTags, input.trim()]);
            }
            setInput("");
            setOpenTags(false);
        }
    };

    return (
        <div className="2xl:w-[500px]">
            <p className="text-[#2C2C2C] font-semibold mb-2">Add Tags</p>

            {/* Input */}
            <div className="border border-border-line rounded-lg px-3 py-2 flex">
                <input
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                        setOpenTags(true);
                    }}
                    onFocus={() => setOpenTags(true)}
                    onKeyDown={handleKeyDown}
                    placeholder="Add tags..."
                    className="w-full outline-none text-sm"
                />
                {openTags && (
                    <X
                        className="text-gray-300 cursor-pointer"
                        onClick={() => setOpenTags(false)}
                    />
                )}
            </div>

            {/* Dropdown */}
            {openTags && filtered.length > 0 && (
                <div className="border rounded-lg mt-1 bg-white shadow-md">
                    {filtered.map((tag, index) => (
                        <div
                            key={index}
                            onClick={() => addTag(tag)}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            )}

            {/* Selected Tags */}
            <div className="flex gap-2 flex-wrap mt-3">
                {selectedTags.map((tag, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-md text-sm"
                    >
                        {tag}
                        <X
                            size={14}
                            className="cursor-pointer"
                            onClick={() => removeTag(tag)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TagsInput;