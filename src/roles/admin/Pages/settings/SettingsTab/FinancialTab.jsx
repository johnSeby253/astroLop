import Button from '@/common/components/Button';
import FormFields from '@/common/components/FormFields';
import { useGetFinancialSettings, useUpdateFinancialSettings } from '@/roles/admin/api_Queries/Settings/query';
import React, { useState, useEffect } from 'react';

const options = [
    { label: "No expiry", value: "no_expiry" },
    { label: "3 Months", value: "3_months" },
    { label: "6 Months", value: "6_months" },
    { label: "12 Months", value: "12_months" },
];

const FinancialTab = () => {
    const { data: settings } = useGetFinancialSettings();
    const { mutate: updateMutation} = useUpdateFinancialSettings();

    // Form field states
    const [formData, setFormData] = useState({
        agora_price: "",
        platform_margin: "",
        min_recharge: "",
    });

    // Radio and checkbox states
    const [walletExpiry, setWalletExpiry] = useState("no_expiry");
    const [selectedCheck, setSelectedCheck] = useState([]);

    // Update state when settings are fetched
    useEffect(() => {
        if (settings) {
            setFormData({
                agora_price: settings.agora_Cost || "",
                platform_margin: settings.platform_Margin || "",
                min_recharge: settings.min_recharge || "",
            });

            setWalletExpiry(settings.wallet_expiry || "no_expiry");

            setSelectedCheck(
                settings.refund_rules?.filter(rule => rule.enabled).map(rule => rule.id) || []
            );
        }
    }, [settings]);

    // Checkbox toggle function
    const toggleCheckbox = (id) => {
        setSelectedCheck(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleSaveChanges = () => {
        const payload = {
            agora_Cost: formData.agora_price,
            platform_Margin: formData.platform_margin,
            min_recharge: formData.min_recharge,
            wallet_expiry: walletExpiry,
            refund_rules: selectedCheck,
        };
        console.log("Payload", payload);

        updateMutation(payload);
    };

    // Get refund rules from settings
    const checkboxList = settings?.refund_rules || [];

    return (
        <div>
            <div className="p-5">

                {/* Form Fields */}
                <div className="w-full lg:w-[40%]">
                    <div className="flex flex-col space-y-3 pt-4 pb-3">
                        <h2 className='text-[#090909] font-inter text-[16px] font-semibold'>
                            Agora cost setting
                        </h2>
                        <FormFields
                            type="text"
                            label="Default Agora cost per minute"
                            name="agora_price"
                            placeholder="₹ 25"
                            value={formData.agora_price}
                            onChange={(e) => setFormData({ ...formData, agora_price: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col space-y-3 py-3">
                        <h2 className='text-[#090909] font-inter text-[16px] font-semibold'>
                            Platform margin setting
                        </h2>
                        <FormFields
                            type="text"
                            label="Default margin %"
                            name="platform_margin"
                            placeholder="20 %"
                            value={formData.platform_margin}
                            onChange={(e) => setFormData({ ...formData, platform_margin: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col space-y-3 py-3">
                        <h2 className='text-[#090909] font-inter text-[16px] font-semibold'>
                            Set minimum recharge
                        </h2>
                        <FormFields
                            type="text"
                            label="Minimum recharge amount"
                            name="min_recharge"
                            placeholder="₹ 200"
                            value={formData.min_recharge}
                            onChange={(e) => setFormData({ ...formData, min_recharge: e.target.value })}
                        />
                    </div>
                </div>

                {/* Wallet Expiry Radio */}
                <div className="space-y-3 py-3">
                    <div className='flex flex-col space-y-2'>
                        <h2 className='text-[#090909] font-inter text-[16px] font-semibold'>
                            Wallet expiry
                        </h2>
                        <p className="text-[#707070] font-medium text-[14px] leading-[150%]">
                            Select wallet expiry duration
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-3">
                        {options.map((option) => (
                            <label
                                key={option.value}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-all
                                    ${walletExpiry === option.value
                                        ? "bg-[#F5EEFF] border-primary text-primary"
                                        : "bg-white border-gray-300 text-gray-600"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="walletExpiry"
                                    value={option.value}
                                    checked={walletExpiry === option.value}
                                    onChange={() => setWalletExpiry(option.value)}
                                    className="hidden"
                                />
                                <span className={`w-4 h-4 rounded-full border flex items-center justify-center
                                    ${walletExpiry === option.value ? "border-purple-500" : "border-gray-400"}`}>
                                    {walletExpiry === option.value && (
                                        <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                                    )}
                                </span>
                                <span className="text-sm font-medium">{option.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Refund Rules Checkboxes */}
                <div className="space-y-4 py-6">
                    <div className='flex flex-col space-y-2 py-2'>
                        <h2 className="text-[#090909] font-inter text-[16px] font-semibold">
                            Refund Rules
                        </h2>
                        <p className="text-[#707070] font-medium text-[14px] leading-[150%]">
                            Select the refund rules
                        </p>
                    </div>

                    <div className="space-y-5">
                        {checkboxList.map((item) => {
                            const isChecked = selectedCheck.includes(item.id);
                            return (
                                <label key={item.id} className="flex items-center gap-4 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={() => toggleCheckbox(item.id)}
                                        className="hidden"
                                    />
                                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all
                                        ${isChecked ? "bg-primary" : "border-gray-400 bg-white"}`}>
                                        {isChecked && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={3}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </div>
                                    <span className="text-[#252525] text-[16px] font-medium">{item.name}</span>
                                </label>
                            );
                        })}
                    </div>
                </div>

                {/* Save Button */}
                <div className="px-2 lg:px-5 py-2 flex items-center justify-center lg:justify-end">
                    <Button
                        size="xl"
                        variant="primary"
                        onClick={handleSaveChanges}
                        disabled={updateMutation.isLoading}
                    >
                        {updateMutation.isLoading ? "Saving..." : "Save Changes"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FinancialTab;