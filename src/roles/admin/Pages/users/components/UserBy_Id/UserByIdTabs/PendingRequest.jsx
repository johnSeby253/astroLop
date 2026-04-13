import React, { useState } from 'react'
import AssignExxpertToUser from '../../Modals/AssignExxpertToUser';
import CustomTabTable from '@/common/components/CustomTabTable';
import Button from '@/common/components/Button';

const PendingRequest = () => {

    const [openAssignExpert, setOpenAssignExpert] = useState(false);


    const columns = [
        {
            header: "Date",
            accessor: "date",
        },
        {
            header: "Time",
            accessor: "time",
        },
        {
            header: "Location",
            accessor: "location",
        },
        {
            header: "Service Type",
            accessor: "serviceType",
        },
        {
            header: "Action",
            accessor: "action",
            render: (row) => (
                <div className="flex gap-3 justify-center">
                    <Button
                        size='sm'
                        variant='lite_secondary'>
                        Deny
                    </Button>
                    <Button
                        className="rounded-sm text-white font-inter text-[11px] font-medium leading-[15.733px] tracking-[-0.437px]"
                        size='sm'
                        onClick={() => setOpenAssignExpert(true)}
                        variant='primary'>
                        Assign Expert
                    </Button>

                </div>
            ),
        },
    ];

    const data = [
        {
            date: "Wed, 12/07/2024",
            time: "10:24 AM",
            location: "Kakkanad, Kochi, Kerala",
            serviceType: "Griha Pravesh Pooja",
            action: "",
        },
        {
            date: "Thu, 12/08/2024",
            time: "9:30 AM",
            location: "Kochi, Kerala",
            serviceType: "Vastu Consultation",
            action: "",
        },
        {
            date: "Fri, 12/09/2024",
            time: "11:15 AM",
            location: "Cochin, Kerala",
            serviceType: "Pooja for Home Blessing",
            action: "",
        },
        {
            date: "Wed, 12/07/2024",
            time: "10:24 AM",
            location: "Kakkanad, Kochi, Kerala",
            serviceType: "Griha Pravesh Pooja",
            action: "",
        },
        {
            date: "Thu, 12/08/2024",
            time: "9:30 AM",
            location: "Kochi, Kerala",
            serviceType: "Vastu Consultation",
            action: "",
        },
        {
            date: "Fri, 12/09/2024",
            time: "11:15 AM",
            location: "Cochin, Kerala",
            serviceType: "Pooja for Home Blessing",
            action: "",
        },

        {
            date: "Wed, 12/07/2024",
            time: "10:24 AM",
            location: "Kakkanad, Kochi, Kerala",
            serviceType: "Griha Pravesh Pooja",
            action: "",
        },
        {
            date: "Thu, 12/08/2024",
            time: "9:30 AM",
            location: "Kochi, Kerala",
            serviceType: "Vastu Consultation",
            action: "",
        },
        {
            date: "Fri, 12/09/2024",
            time: "11:15 AM",
            location: "Cochin, Kerala",
            serviceType: "Pooja for Home Blessing",
            action: "",
        },
        {
            date: "Wed, 12/07/2024",
            time: "10:24 AM",
            location: "Kakkanad, Kochi, Kerala",
            serviceType: "Griha Pravesh Pooja",
            action: "",
        },
        {
            date: "Thu, 12/08/2024",
            time: "9:30 AM",
            location: "Kochi, Kerala",
            serviceType: "Vastu Consultation",
            action: "",
        },
        {
            date: "Fri, 12/09/2024",
            time: "11:15 AM",
            location: "Cochin, Kerala",
            serviceType: "Pooja for Home Blessing",
            action: "",
        },

        {
            date: "Wed, 12/07/2024",
            time: "10:24 AM",
            location: "Kakkanad, Kochi, Kerala",
            serviceType: "Griha Pravesh Pooja",
            action: "",
        },
        {
            date: "Thu, 12/08/2024",
            time: "9:30 AM",
            location: "Kochi, Kerala",
            serviceType: "Vastu Consultation",
            action: "",
        },
        {
            date: "Fri, 12/09/2024",
            time: "11:15 AM",
            location: "Cochin, Kerala",
            serviceType: "Pooja for Home Blessing",
            action: "",
        },
        // ...more rows
    ];
    return (
        <div className="">
            <div className="py-4">
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
            />

            
        </div>

    )
}

export default PendingRequest
