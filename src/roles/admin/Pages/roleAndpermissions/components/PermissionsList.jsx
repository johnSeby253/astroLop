/* eslint-disable react-hooks/set-state-in-effect */
import Button from '@/common/components/Button';
import CustomToggle from '@/common/components/CustomToggle'
import { useEditRolesAndPermissions } from '@/roles/admin/api_Queries/RoleAndPermissions/query';
import { AlarmClockPlus, BadgeCheck, BanknoteArrowDown, ChartColumnIncreasing, ChartNoAxesCombined, Diff, Download, Eye, ListPlus, MessageSquareQuote, PhoneCall, Save, ScanEye, ScrollText, Settings, ShieldUser, UserRoundKey, UserRoundPlus, UserStar, Wallet } from 'lucide-react'
import React, { useEffect, useState } from 'react'


const permissionGroups = [
    {
        title: "Financial Setting & Wallet Control",
        items: [
            {
                key: "wallet_pack_manage",
                title: " Enable and Delete Wallet Pack",
                description: "Grants access to Enable and deleting wallet packages",
                icon: Wallet,
            },
            {
                key: "create_wallet",
                title: "Create New Wallet Package",
                description: "Authority to create new wallet pack",
                icon: ListPlus,
            },
            {
                key: "view_payouts",
                title: "View Payouts",
                description: "Permission for viewing Payout details ",
                icon: ScanEye,
            },
            {
                key: "view_revenue",
                title: "View Revenue",
                description: "Permission for viewing Revenue details ",
                icon: ChartNoAxesCombined,
            },
        ],
    },
    {
        title: "User Management",
        items: [
            {
                key: "new_astrologer_request",
                title: " New Astrologer Request",
                description:
                    "Permission to Approve and Deny new astrologers",
                icon: BadgeCheck,
            },
            {
                key: "free_time_request",
                title: "Free Time Request",
                description:
                    "Grants extra free time to astrologers",
                icon: AlarmClockPlus,
            },
            {
                key: "user_refunds",
                title: "User Refunds",
                description:
                    "Permission to control users refund request",
                icon: BanknoteArrowDown,
            },
            {
                key: "adding_expert",
                title: "Adding Expert",
                description:
                    "Allow to create new Experts",
                icon: UserStar,
            },
            {
                key: "adding_user",
                title: "Adding User",
                description:
                    "Allow to create new Employee users",
                icon: UserRoundPlus,
            },
            {
                key: "view_user_number",
                title: "View User Number",
                description:
                    "Permission to see the user phone number",
                icon: UserRoundPlus,
            },
        ],
    },
    {
        title: "Content Management",
        items: [
            {
                key: "adding_blogs",
                title: "Adding Blogs",
                description:
                    "Grants access to add new blogs and it's controls",
                icon: MessageSquareQuote,
            },
        ],
    },
    {
        title: "Role & Permissions Management",
        items: [
            {
                key: "role_permissions",
                title: "Role & Permissions",
                description:
                    "Allows creating new Roles and assigin permissions",
                icon: UserRoundKey,
            },
            {
                key: "settings",
                title: "Settings",
                description:
                    "Permission to control platform settings",
                icon: Settings,
            },
        ],
    },
    {
        title: "Service Management",
        items: [
            {
                key: "service_request",
                title: "Service Request",
                description:
                    "Allows approve and assign service request",
                icon: ScrollText,
            },
            {
                key: "view_experts",
                title: "View Experts",
                description:
                    "Permission to view Expert details",
                icon: ShieldUser,
            },
            {
                key: "view_consultation",
                title: "View Consultation",
                description:
                    "Permission to check/view consultation details",
                icon: PhoneCall,
            },
        ],
    },
];

const PermissionsList = ({ selectedRole }) => {
    console.log("Selected roles", selectedRole);

    const [permissions, setPermissions] = useState([]);
    const [originalPermissions, setOriginalPermissions] = useState([]);
    const { mutate: updateRolePermissions, isPending } = useEditRolesAndPermissions();


    useEffect(() => {
        if (!selectedRole) return;

        // get all permission keys from permissionGroups
        const allPermissions = permissionGroups.flatMap(group =>
            group.items.map(item => ({
                key: item.key,
                enabled: false
            }))
        );

        // overwrite with role permissions
        if (selectedRole?.permissions) {
            selectedRole.permissions.forEach(rolePerm => {
                const perm = allPermissions.find(p => p.key === rolePerm.key);
                if (perm) perm.enabled = rolePerm.enabled;
            });
        }

        setPermissions(allPermissions);
        setOriginalPermissions(allPermissions);
    }, [selectedRole]);


    const handleToggle = (key, value) => {
        setPermissions(prev => {
            const exists = prev.find(p => p.key === key);

            if (exists) {
                return prev.map(p =>
                    p.key === key ? { ...p, enabled: value } : p
                );
            } else {
                return [...prev, { key, enabled: value }];
            }
        });
    };

    const hasChanges = () => {
        const originalMap = Object.fromEntries(
            originalPermissions.map(p => [p.key, p.enabled])
        );

        return permissions.some(p => originalMap[p.key] !== p.enabled);
    };

    const saveChanges = () => {
        if (!selectedRole?._id) return;

        const payload = {
            _id: selectedRole._id,
            role_name: selectedRole.name,
            role_label: selectedRole.label,
            permissions: permissions.map(p => ({
                key: p.key,
                enabled: p.enabled
            }))
        };

        updateRolePermissions(payload, {
            onSuccess: () => {
                setOriginalPermissions([...permissions]);
            }
        });
    };

    return (

        <div className="w-full lg:w-[75%] rounded-lg border p-5 flex flex-col gap-5">
            <div className=" flex items-center justify-between">
                <h2 className="text-primary font-urbanist text-[20px] font-bold leading-normal">
                    Permissions workspace
                </h2>
                {hasChanges() && (
                    <div className="">
                        <Button
                            size='sm'
                            className="py-2 flex items-center justify-center gap-2"
                            variant='primary'
                            onClick={saveChanges}
                            disabled={isPending}
                        >
                            <Save size={20} />
                            {isPending ? "Saving..." : "Save Changes"}
                        </Button>
                    </div>
                )}
            </div>

            <div className="max-h-[70vh] overflow-y-auto vertical-scrollbar px-4">
                {permissionGroups.map((group) => (
                    <div key={group.title} className="flex flex-col space-y-5 pt-5">

                        {/* Group Title */}
                        <p className="text-[#090909] font-inter text-[16px] font-semibold tracking-[-0.437px]">
                            {group.title}
                        </p>

                        {/* Items */}
                        {group.items.map((item) => {
                            const Icon = item.icon;
                            const current = permissions.find(p => p.key === item.key);

                            return (
                                <div
                                    key={item.key}
                                    className="border rounded-lg px-3 flex items-center justify-between"
                                >
                                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 py-4">

                                        <div className="bg-[#FAF3EC] p-2 rounded-lg">
                                            <Icon size={30} className="text-[#DF6800]" />
                                        </div>

                                        <div>
                                            <p className="text-[#090909] font-inter text-[16px] font-semibold tracking-tight">
                                                {item.title}
                                            </p>
                                            <p className="text-[#707070] font-inter text-[14px] font-medium leading-[150%]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="px-4">
                                        <CustomToggle
                                            checked={current?.enabled || false}
                                            onChange={(val) => handleToggle(item.key, val)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default PermissionsList
