import Button from '@/common/components/Button';
import CustomTabTable from '@/common/components/CustomTabTable';
import { SquareCheckBig } from 'lucide-react';
import React, { useState } from 'react'
import AssignExxpertToUser from '../../Modals/AssignExxpertToUser';
import CustomTabs from '@/common/components/CustomTabs';
import PendingRequest from './PendingRequest';
import AssiginedRequest from './AssiginedRequest';

const ServiesRequest = () => {

  const [activeTab, setActiveTab] = useState("pending_request");
  //   const { activeTab, setActiveTab } = useCreateExpertStore()


  const tabs = [
    {
      label: "Pending Request",
      value: "pending_request",
      component: PendingRequest
    },
    {
      label: "Assigined Request",
      value: "assigined_request",
      component: AssiginedRequest
    },

  ];


  return (
    <div>

      <CustomTabs
        tabs={tabs}
        variant='pill'
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* <div className="py-4">
        <CustomTabTable
          columns={columns}
          data={data}
          tableCellClass=""
          pageSize={5}
          totalCount={15}
        />
      </div>

      <AssignExxpertToUser
        open={openAssignExpert}
        setOpen={setOpenAssignExpert}
        data={data} // optional: pass the user row data
      /> */}
    </div>
  )
}

export default ServiesRequest
