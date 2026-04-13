/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import upload from '@/assets/admin-assets/uploadIcons.svg';
import useExpertFormStore from "@/roles/admin/store/useExpertFormStore";

const FileUploader = () => {
    const [files, setFiles] = useState([]);

    console.log("Files", files);


    const setProfessionalData = useExpertFormStore((state) => state.setProfessionalData);
    const professionalData = useExpertFormStore((state) => state.formData.professional);


    useEffect(() => {
        if (professionalData.certificates) {
            setFiles(professionalData.certificates);
        }
    }, [professionalData.certificates]);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        const updatedFiles = [...files, ...selectedFiles];

        setFiles(updatedFiles);
        setProfessionalData({ certificates: updatedFiles });
    };

    const removeFile = (index) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
        setProfessionalData({ certificates: updatedFiles });
    };

    return (
        <div className=" w-full h-full p-6">
            <div className="flex flex-col py-3 space-y-3">
                <label className="text-[#2D2D2D] font-inter text-[14px] font-semibold leading-5.25">Professional Certificate</label>

                {/* Hidden input */}
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    id="fileInput"
                />

                {/* Styled button */}
                <label
                    htmlFor="fileInput"
                    className="cursor-pointer  font-inter text-[15px] font-semibold leading-[22.5px] flex items-center gap-4 border border-accent text-accent px-4 py-2 rounded-md hover:bg-[#ACD2EC] w-fit"
                >
                    Upload <img src={upload} alt="" />
                </label>

                {/* File list */}
                {/* File list */}
                {files.filter(file => file.type).length > 0 && (
                    <div className="space-y-2">
                        {files
                            .filter(file => file.type) // Only files with a valid type
                            .map((file, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between min-w-87.5 w-fit bg-gray-100 px-3 py-2 rounded-md shadow-sm"
                                >
                                    <span className="text-gray-800">{file.name}</span>
                                    <button
                                        onClick={() => removeFile(index)}
                                        className="ml-4 text-sm px-2 py-1 rounded hover:bg-gray-200"
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
}
export default FileUploader
