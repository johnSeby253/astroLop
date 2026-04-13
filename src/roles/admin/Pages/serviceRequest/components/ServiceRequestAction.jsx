import Button from '@/common/components/Button'
import React, { useState } from 'react'
import AssiginExpertModal from '../Modal/AssiginExpertModal'

const ServiceRequestAction = ({row}) => {
    const [openAssiginModal,setOpenAssignModal]=useState(false);
    return (
        <div className="flex items-center justify-center gap-2">
            <Button
                size='sm'
                variant='lite_secondary'
            >
              Deny
            </Button>
            <Button
                className="flex items-center justify-center gap-3"
                size='sm'
                variant='primary'
                onClick={()=>{setOpenAssignModal(true)}}
            >
                Assign
            </Button>

<AssiginExpertModal open={openAssiginModal} setOpen={setOpenAssignModal} data={row}/>
        </div>
    )
}

export default ServiceRequestAction
