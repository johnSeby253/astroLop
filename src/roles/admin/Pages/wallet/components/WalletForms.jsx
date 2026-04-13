import Button from '@/common/components/Button'
import CustomToggle from '@/common/components/CustomToggle'
import FormFields from '@/common/components/FormFields'
import { useCreateWallet } from '@/roles/admin/api_Queries/Wallet/query'
import React, { useState } from 'react'

const WalletForms = () => {
    const [isFirstTimeOnly, setIsFirstTimeOnly] = useState(false);
    const [formData, setFormData] = useState({
        package_Name: "",
        package_Label: "",
        base_Amount: "",
        offer_Credits: ""
    });
    const { mutate: createWallet, isPending } = useCreateWallet();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const totalCredits =
        Number(formData.base_Amount || 0) +
        Number(formData.offer_Credits || 0);

    const handleSubmit = () => {
        const payload = {
            ...formData,
            total_Credits: totalCredits,
            first_timeOffer: isFirstTimeOnly
        };

        createWallet(payload);
        handleReset();
    };

    const handleReset = () => {
        setFormData({
            package_Name: "",
            package_Label: "",
            base_Amount: "",
            offer_Credits: ""
        });

        setIsFirstTimeOnly(false);
    };

    return (
        <div>
            <div className="md:px-15">
                <h2 className="text-[#43157C] font-urbanist text-[20px] font-bold leading-normal">Create New Wallet Packs</h2>
                <div className="py-10">

                    <p className="text-[#090909] font-inter text-[16px] font-semibold leading-[15.733px] tracking-[-0.437px]">Package Details</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-2 md:py-5">
                        <FormFields
                            type="text"
                            label="Package Name"
                            name="package_Name"
                            placeholder="Golden elite pack"
                            value={formData.package_Name}
                            onChange={handleChange}
                        />
                        <FormFields
                            type="text"
                            label="Offer Label (Optional)"
                            name="package_Label"
                            placeholder="Festival offer 50% "
                            value={formData.package_Label}
                            onChange={handleChange}
                        />
                    </div>

                    <p className="text-[#090909] font-inter text-[16px] font-semibold leading-[15.733px] tracking-[-0.437px]">Price Structure</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-5">
                        <FormFields
                            type="text"
                            label="Base Amount (User Pays)"
                            name="base_Amount"
                            placeholder="₹ 500"
                            value={formData.base_Amount}
                            onChange={handleChange}
                        />
                        <FormFields
                            type="text"
                            label="Offer Credits (Bonus)"
                            name="offer_Credits"
                            placeholder="₹ 500 "
                            value={formData.offer_Credits}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col gap-5 pb-2">
                        <p className="text-[#090909] font-inter text-[16px] font-semibold leading-[15.733px] tracking-[-0.437px]">Total Credits
                            <span className='className="text-[#767272] font-inter text-[12px] font-semibold leading-[150%]"'> (User Get)</span></p>
                        <div className="py-5 px-10 rounded-lg border border-primary bg-[#FCF9FF] w-fit">
                            <p className="text-[#43157C] font-inter text-[20px] font-bold leading-[150%] p-5"> ₹ {totalCredits}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 py-5 lg:w-[50%]">
                        <p className="text-[#090909] font-inter text-[16px] font-semibold leading-[15.733px] tracking-[-0.437px]">Condition & Restriction
                            <span className='className="text-[#767272] font-inter text-[12px] font-semibold leading-[150%]"'> (User Get)</span></p>
                        <div className="p-4 w-full rounded-lg border border-border-line flex flex-col space-y-4">
                            <div className="flex items-center justify-between">
                                <p className="text-black font-inter text-[14px] font-semibold leading-[150%]">First-time user only toggle</p>
                                <CustomToggle
                                    checked={isFirstTimeOnly}
                                    onChange={() => setIsFirstTimeOnly(prev => !prev)}
                                />
                            </div>
                            <p className="text-[#7D7979] font-inter text-[14px] font-medium leading-[150%]">If it ON, This pack is hidden for existing user.</p>
                        </div>
                    </div>


                    <div className="flex items-center justify-end gap-3 pt-10">
                        <Button
                            size='md'
                            variant='lite_secondary'
                            onClick={handleReset}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="flex items-center justify-center gap-3"
                            size='md'
                            variant='primary'
                            onClick={handleSubmit}
                            disabled={isPending}
                        >
                            {isPending ? "Creating..." : "Create Wallet Pack"}
                        </Button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default WalletForms
