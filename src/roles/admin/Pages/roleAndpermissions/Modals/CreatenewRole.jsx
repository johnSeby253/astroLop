import Button from '@/common/components/Button'
import CustomModal from '@/common/components/CustomModal'
import FormFields from '@/common/components/FormFields'
import { useCreateRoleAndPermissions } from '@/roles/admin/api_Queries/RoleAndPermissions/query';
import React, { useState } from 'react'

const permissionOptions = [
    { permission_label: "New Astrologer Request", permission_name: "new_astrologer_request" },
    { permission_label: "Free Time Request", permission_name: "free_time_request" },
    { permission_label: "User Refunds", permission_name: "user_refunds" },
    { permission_label: "Adding Expert", permission_name: "adding_expert" },
    { permission_label: "Adding User", permission_name: "adding_user" },
    { permission_label: "Role & Permissions", permission_name: "role_permissions" },
    { permission_label: "Settings", permission_name: "settings" },
    { permission_label: "Adding Blogs", permission_name: "adding_blogs" },
    { permission_label: "Service Request", permission_name: "service_request" },
    { permission_label: "View Experts", permission_name: "view_experts" },
    { permission_label: "View Consultation", permission_name: "view_consultation" },
    { permission_label: "Enable and Delete Wallet Pack", permission_name: "wallet_pack_manage" },
    { permission_label: "Create New Wallet", permission_name: "create_wallet" },
    { permission_label: "View Payouts", permission_name: "view_payouts" },
    { permission_label: "View Revenue", permission_name: "view_revenue" }
];

const CreatenewRole = ({ open, setOpen }) => {

    const [roleName, setRoleName] = useState("");
    const [selectedPermissions, setSelectedPermissions] = useState({});
    const { mutate: createRoleMutation, isLoading } = useCreateRoleAndPermissions();


    // toggle checkbox
    const handleToggle = (permissionName) => {
        setSelectedPermissions((prev) => ({
            ...prev,
            [permissionName]: !prev[permissionName],
        }));
    };
    // format role name → sales_manager
    const formatRoleName = (name) => {
        return name.trim().toLowerCase().replace(/\s+/g, "_");
    };

    // create role object
    // inside CreatenewRole component

    const handleCreate = () => {
        if (!roleName.trim()) {
            alert("Please enter a role name");
            return;
        }

        const formattedName = formatRoleName(roleName);

        const role_permissions = permissionOptions.map((perm) => ({
            permission_label: perm.permission_label,
            permission_name: perm.permission_name,
            permission: !!selectedPermissions[perm.permission_name],
        }));

        const finalData = {
            role_label: roleName,
            role_name: formattedName,
            role_permissions: role_permissions,
        };

        console.log("Final Role Data 👉", finalData);

        // Call React Query mutation
        createRoleMutation(finalData, {
            onSuccess: () => {
                // Reset state and close modal
                setRoleName("");
                setSelectedPermissions({});
                setOpen(false);
            },
            onError: (error) => {
                console.error("Error creating role:", error);
                alert("Failed to create role. Check console for details.");
            }
        });
    };
    
    return (
        <CustomModal
            open={open}
            onOpenChange={setOpen}
            title=""
            className="lg:min-w-137.5"
        >
            <div className="flex flex-col space-y-5">

                <h1 className='text-primary text-[20px] font-bold'>
                    Create New Role and add its permissions !
                </h1>

                {/* Role Name */}
                <FormFields
                    type="text"
                    label="Role Name"
                    name="role_name"
                    value={roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                    placeholder="Enter role name"
                />

                {/* Permissions */}
                <p className="text-[18px] font-bold">Choose the permissions</p>

                <div className="space-y-3 py-2 px-3 max-h-75 overflow-y-scroll vertical-scrollbar">

                    {permissionOptions.map((perm) => (
                        <label key={perm.permission_name} className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                className="accent-primary"
                                checked={!!selectedPermissions[perm.permission_name]}
                                onChange={() => handleToggle(perm.permission_name)}
                            />
                            {perm.permission_label}
                        </label>
                    ))}

                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3">
                    <Button
                        size='xl'
                        variant='lite_secondary'
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>

                    <Button
                        size='xl'
                        variant='primary'
                        onClick={handleCreate}
                    >
                        Create
                    </Button>
                </div>

            </div>
        </CustomModal>
    )
}

export default CreatenewRole