/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useRef, useState } from 'react'
import Button from '@/common/components/Button'
import CustomModal from '@/common/components/CustomModal'
import profilePic from '@/assets/admin-assets/loginicon.webp';
import camera from '@/assets/admin-assets/camera.svg';


const ProfilePicEditModal = ({ open, setOpen, onImageUpdate, image }) => {

    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(image || null);


    const handleCameraClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const preview = URL.createObjectURL(file);
        setSelectedImage(preview);
    };

    const handleConfirm = () => {
        if (!selectedImage) return;
        onImageUpdate(selectedImage);
        setOpen(false);
    };

    const handleClose = () => {
        setSelectedImage(null);
        setOpen(false);
    }

    useEffect(() => {
        if (open) {
            setSelectedImage(image || null);
        }
    }, [open, image]);

    return (
        <>
            <CustomModal open={open} onOpenChange={setOpen}>
                <h1 className="text-[#43157C] font-urbanist text-[20px] font-bold leading-normal">Update Profile Photo</h1>

                <div className="flex flex-col items-center gap-8 justify-center mt-4 ">
                    <p className='text-[#7A7A7A] font-inter text-[16px] font-medium leading-[15.733px] tracking-[-0.437px]'>
                        Hey..! ,help others recognize you!</p>
                    <div className="relative w-28 h-28">
                        {/* Profile Image */}
                        <img
                            className="h-full w-full rounded-full object-cover"
                            src={selectedImage || profilePic}
                            alt="Profile"
                        />
                        <div
                            onClick={handleCameraClick}
                            className="absolute bottom-0 right-0 h-10 w-10 bg-primary rounded-full flex items-center justify-center">
                            <img src={camera} alt="Edit" className="h-5 w-5" />
                        </div>
                    </div>

                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                    />
                    <p className='text-[#7A7A7A] text-center font-inter text-[16px] font-medium leading-[15.733px] tracking-[-0.437px]'>
                        Upload a clear photo for easy identification.
                    </p>

                </div>

                <div className="flex items-center justify-end gap-4 py-4">
                    <Button
                        onClick={handleClose}
                        size="md"
                        variant="lite_secondary"
                    >
                        Cancel
                    </Button>

                    <Button
                        size="md"
                        variant="primary"
                        onClick={selectedImage ? handleConfirm : handleCameraClick}
                    >
                        {selectedImage ? "Confirm" : "Upload"}
                    </Button>
                </div>
            </CustomModal>
        </>
    )
}

export default ProfilePicEditModal
