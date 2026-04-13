import Button from '@/common/components/Button'
import CustomModal from '@/common/components/CustomModal'
import DatePicker from '@/common/components/DatePicker'
import FormFields from '@/common/components/FormFields'
import SelectField from '@/common/components/SelectField'
import React, { useState } from 'react'

const EditPersonalDetails = ({ open, setOpen, data }) => {
    const [date, setDate] = useState();
    // const [gender, setGender] = useState("");

    return (
        <>
            <CustomModal open={open} onOpenChange={setOpen}
                className="min-w-[70vw]">
                <h1 className="text-[#43157C] font-urbanist text-[20px] font-bold leading-normal">Edit Personal Details</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 py-5 h-[600px] p-3 lg:h-full overflow-y-scroll">
                    <FormFields
                        type="text"
                        label="first Name"
                        name="first_name"
                        placeholder="Enter first name"
                    />
                    <FormFields
                        type="text"
                        label="Second Name"
                        name="second_name"
                        placeholder="Enter Second Name"
                    />
                    <FormFields
                        type="text"
                        label="Email"
                        name="email"
                        placeholder="Enter the Email"
                    />

                    <FormFields
                        type="datepicker"
                        label="Date of Birth"
                        mode="single"
                        value={date}
                        onChange={setDate}
                    />
                    <FormFields
                        type="text"
                        label="Phone Number"
                        name="phone"
                        placeholder="Enter Phone Number"
                    />
                    <SelectField
                        label="Gender"
                        name="country"
                        
                        placeholder="Select Gender"
                        options={[
                            { label: "Male", value: "male" },
                            { label: "Female", value: "female" },
                            { label: "Other", value: "other" },
                        ]}
                    />
                    <FormFields
                        type="text"
                        label="first Name"
                        name="first_name"
                        placeholder="Enter first name"
                    />
                    <FormFields
                        type="text"
                        label="first Name"
                        name="first_name"
                        placeholder="Enter first name"
                    />
                    <FormFields
                        type="text"
                        label="first Name"
                        name="first_name"
                        placeholder="Enter first name"
                    />
                    <FormFields
                        type="text"
                        label="first Name"
                        name="first_name"
                        placeholder="Enter first name"
                    />

                </div>

                <div className="flex items-center justify-end gap-4 py-">
                    <Button
                        onClick={() => setOpen(false)}
                        size='md'
                        variant='lite_secondary'
                    > cancel</Button>

                    <Button
                        size='md'
                        variant='primary'
                    > Save Changes</Button>
                </div>
            </CustomModal>
        </>
    )
}

export default EditPersonalDetails
