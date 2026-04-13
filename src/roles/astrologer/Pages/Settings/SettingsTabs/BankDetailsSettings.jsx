import Button from '@/common/components/Button'
import FormFields from '@/common/components/FormFields'
import { Save } from 'lucide-react'
import React from 'react'

const BankDetailsSettings = () => {
    return (
        <div className='shadow-card rounded-lg p-10 flex flex-col gap-8'>
            <div className="flex flex-col gap-1">
                <h2 className='text-[#2D2D2D] font-inter text-[18px] font-bold tracking-[-0.48px]'>Bank Informations</h2>
                <p className='text-[#616060] font-manrope text-[14px] font-semibold tracking-[-0.32px]'>
                    Update and check your bank details
                </p>
            </div>
            <div className="w-[30%]">
                <FormFields
                    type="text"
                    label="Account Holder Name"
                    name="holder_Name"
                    placeholder="Enter the name"
                />

                <FormFields
                    type="text"
                    label="Bank Name"
                    name="bank_Name"
                    placeholder="Enter the bank"

                />

                <FormFields
                    type="text"
                    label="AccountNo."
                    name="accountNo"
                    placeholder="eg.72XXXXXXXXXXX"

                />
                <FormFields
                    type="text"
                    label="IFSC Code."
                    name="ifsc_code"
                    placeholder="eg.SBIXXXX54XX32"

                />
                <FormFields
                    type="text"
                    label="Account Type"
                    name="account_type"
                    placeholder="Current/Savings"

                />
            </div>
            <div className="flex items-center">
                <Button
                    type="button"
                    variant="primary"
                    className='py-1 lg:py-2 text-lg font-medium flex items-center justify-center gap-3'
                >
                   <Save size={20}/> 
                  Save Changes
                </Button>
            </div>

        </div>
    )
}

export default BankDetailsSettings
