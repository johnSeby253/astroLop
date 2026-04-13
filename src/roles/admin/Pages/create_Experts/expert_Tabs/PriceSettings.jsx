/* eslint-disable react-hooks/set-state-in-effect */
import Button from '@/common/components/Button';
import FormFields from '@/common/components/FormFields';
import ContentLayout from '@/common/layouts/admin-layouts/AdminLayout';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useExpertFormStore from '@/roles/admin/store/useExpertFormStore';
import useCreateExpertStore from '@/roles/admin/store/Tab_Stores/useCreateExpertTab';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

const PriceSettings = () => {
  const navigate = useNavigate();


  const priceSettings = useExpertFormStore((state) => state.formData.priceSettings);
  const setPriceSettingData = useExpertFormStore((state) => state.setPriceSettingData);
  const ExpertFinding = useExpertFormStore((state) => state.formData);

  const find_experts = ExpertFinding.basic.find_expert;
  const { setActiveTab } = useCreateExpertStore();

  console.log("Priceing", find_experts);

  const [chatPrice, setChatPrice] = useState('');
  const [callPrice, setCallPrice] = useState('');
  const [expertPrice, setExpertPrice] = useState('');

  const handleBack = () => {
    setActiveTab('professional_details');
  };

  // Initialize local state from store
  useEffect(() => {
    if (priceSettings.chat_price) setChatPrice(priceSettings.chat_price);
    if (priceSettings.call_price) setCallPrice(priceSettings.call_price);
    if (priceSettings.expert_price) setExpertPrice(priceSettings.expert_price);
  }, [priceSettings]);

  // Sync local state to store whenever it changes
  useEffect(() => {
    if (find_experts==false || find_experts == "false" ) {
      setPriceSettingData({
        chat_price: chatPrice,
        call_price: callPrice,
        expert_price: priceSettings.expert_price || ''
      });
    } else {
      setPriceSettingData({
        expert_price: expertPrice,
        chat_price: priceSettings.chat_price || '',
        call_price: priceSettings.call_price || ''
      });
    }
  }, [chatPrice, callPrice, expertPrice]);

  return (
    <ContentLayout>
      <div className="max-w-100 p-6">
        <p className='text-black font-inter text-[16px] font-semibold leading-6 pb-5'>
          Set Price for consultation
        </p>

        {find_experts === false ? (
          <div>
            <FormFields
              type="text"
              label="Set Price for chat consultation (₹/min)"
              name="chat_price"
              placeholder="40₹/min"
              value={chatPrice}
              onChange={(e) => setChatPrice(e.target.value)}
            />

            <FormFields
              type="text"
              label="Set Price for call consultation (₹/min)"
              name="call_price"
              placeholder="40₹/min"
              value={callPrice}
              onChange={(e) => setCallPrice(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <FormFields
              type="text"
              label="Set Price for Expert Consultation"
              name="expert_price"
              placeholder="₹500"
              value={expertPrice}
              onChange={(e) => setExpertPrice(e.target.value)}
            />
          </div>
        )}



      </div>

      <div className="flex items-center justify-end gap-8 px-5">
        <Button
          className='flex items-center justify-center gap-3'
          size='md'
          variant='lite_secondary'
          onClick={handleBack}
        >  <ChevronsLeft color='#686565' /> Back</Button>

        <Button
          size='md'
          className='flex items-center justify-center gap-3'
          variant='primary'
          onClick={() => navigate("/admin-confirmExperts")}
        >
          Continue
          <ChevronsRight color='#ffff' />
        </Button>
      </div>
    </ContentLayout>
  )
}

export default PriceSettings;