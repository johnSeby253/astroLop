import React from 'react'
import ExpertiseSelector from '../components/ExpertiseSelector'
import LanguageSelector from '../components/LanguageSelector'
import CounterApp from '../components/ExperienceCounter'
import FileUploader from '../components/FileUploader'
import Button from '@/common/components/Button'
import useExpertFormStore from '@/roles/admin/store/useExpertFormStore'
import useCreateExpertStore from '@/roles/admin/store/Tab_Stores/useCreateExpertTab'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'

const ProfessionalTabs = () => {

  const basicData = useExpertFormStore((state) => state.formData.basic);
  const { setActiveTab } = useCreateExpertStore();


  console.log(basicData);

  const handleContinue = () => {
    setActiveTab("price_setting");
  };

  const handleBack = () => {
    setActiveTab('basic_information');
  };
  return (
    <div>
      <div className="w-full lg:w-[80%] lg:p-6">
      <ExpertiseSelector />
      </div>
      <div className="p-6">
      <LanguageSelector />
      </div>
      <div className="px-6">
      <CounterApp />
      </div>
      <FileUploader />

      <div className="flex items-center justify-end gap-8 px-5">
        <Button
          className='flex items-center justify-center gap-3'
          size='md'
          variant='lite_secondary'
          onClick={handleBack}
        >  <ChevronsLeft color='#686565' /> Back</Button>

        <Button
        className='flex items-center justify-center gap-3'
          size='md'
          variant='primary'
          onClick={handleContinue}
        >Continue
          <ChevronsRight color='#ffff' />
        </Button>
      </div>
    </div>
  )
}

export default ProfessionalTabs
