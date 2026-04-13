import Button from '@/common/components/Button';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'
import CreatenewRole from '../Modals/CreatenewRole';

const RoleLibrary = ({ roles, selectedRole, setSelectedRole }) => {
    const [newRole, setNewRole] = useState(false)

    return (
        <>
         <div className="w-full lg:w-[25%] rounded-lg border p-5 flex flex-col gap-3">

                {roles.map((role) => (
                    <div
                        key={role.name}
                        className={` border rounded-sm cursor-pointer
              ${selectedRole?.name === role.name ? "bg-purple-100" : ""}`}
                    >
                        <button
                            onClick={() => setSelectedRole(role)}
                            className="text-[#090909] w-full p-4 text-start font-inter text-[16px] font-semibold"
                        >
                            {role.label}
                        </button>
                    </div>
                ))}

                <Button
                    size="ex"
                    className="py-2 flex items-center justify-center gap-3"
                    variant="primary"
                    onClick={() => setNewRole(true)}
                >
                    <Plus size={20} />
                    Create New Role
                </Button>

            </div>

            <CreatenewRole open={newRole} setOpen={setNewRole} />
        </>
           
    );
};

export default RoleLibrary;