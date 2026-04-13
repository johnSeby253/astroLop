/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import upload from '@/assets/admin-assets/uploadIcons.svg';

const EditFileUploader = ({ data = [], onChange }) => {
    const [files, setFiles] = useState([]);
    const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

    useEffect(() => {
        if (data) {
            setFiles(data);
        }
    }, [data]);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        const updatedFiles = [...files, ...selectedFiles];

        setFiles(updatedFiles);
        onChange && onChange(updatedFiles);
    };

    const removeFile = (index) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
        onChange && onChange(updatedFiles);
    };

    // Generate image preview
    const getImageSrc = (file) => {
        if (typeof file === "string") {
            // Existing image from backend
            return IMAGE_URL + file.replace(/\\/g, "/");
        } else {
            // New uploaded file preview
            return URL.createObjectURL(file);
        }
    };

    return (
        <div className="w-full h-full p-6">
            <div className="flex flex-col py-3 space-y-3">
                <label className="text-[#2D2D2D] font-inter text-[14px] font-semibold">
                    Professional Certificate
                </label>

                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    id="fileInput"
                />

                <label
                    htmlFor="fileInput"
                    className="cursor-pointer font-inter text-[15px] font-semibold flex items-center gap-4 border border-accent text-accent px-4 py-2 rounded-md hover:bg-[#ACD2EC] w-fit"
                >
                    Upload <img src={upload} alt="" />
                </label>

                {/* Image Preview Grid */}
                {files.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-8 gap-4 ">
                        {files.map((file, index) => (
                            <div key={index} className="relative w-[100%]">
                                <img
                                    src={getImageSrc(file)}
                                    alt="certificate"
                                    className="w-32 h-32 object-cover rounded-md shadow"
                                />

                                <button
                                    onClick={() => removeFile(index)}
                                    className="absolute top-0 bg-white rounded-full px-2 py-0.5 shadow"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EditFileUploader;