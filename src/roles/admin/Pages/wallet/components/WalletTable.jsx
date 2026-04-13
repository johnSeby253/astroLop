import Button from "@/common/components/Button";
import CustomToggle from "@/common/components/CustomToggle";
import { Trash } from "lucide-react";
import React, { useState } from "react";
import DeleteWalletPack from "./DeleteWalletPack";
import { useNavigate } from "react-router-dom";
import { useAdminStore } from "@/roles/admin/store/useAdminDetaills";
import { useGetWalletPackageList, useUpdateWallet } from "@/roles/admin/api_Queries/Wallet/query";



const WalletTable = () => {
    const [selectedWallet, setSelectedWallet] = useState(null);
    const [deletepack, setDeletePack] = useState(false);
    const admin = useAdminStore((state) => state.admin);
    const { data: walletData = [], isLoading, isError } = useGetWalletPackageList();
    const { mutate: updateWallet } = useUpdateWallet();


    // console.log("Wallet Data", walletData);

    const permissions = admin?.permissions || [];

    // console.log("adm", admin);
    // console.log("Per", permissions);

    const canManageWallets = permissions.some(
        (perm) => perm.key === "wallet_pack_manage" && perm.enabled
    );
    const canCreateWallets = permissions.some(
        (perm) => perm.key === "create_wallet" && perm.enabled
    );

    // const canManageWallets = permissions.includes("wallet_pack_manage");
    // const canCreateWallets = permissions.includes("create_wallet");

    // console.log("canManageWallets", canManageWallets);
    // console.log("canCreateWallets", canCreateWallets);

    const handleStatusToggle = (item) => {
        updateWallet({
            id: item._id,
            data: {
                package_Status: !item.package_Status
            }
        });
    };

    const handleFirstTimeOfferToggle = (item) => {
        updateWallet({
            id: item._id,
            data: {
                first_timeOffer: !item.first_timeOffer
            }
        });
    }
    const navigate = useNavigate();

    if (isLoading) return <p>Loading wallet packs...</p>;
    if (isError) return <p>Error loading wallet packs</p>;

    return (
        <div className="bg-white rounded-xl  p-4 w-full overflow-x-auto">

            {/* Header */}
            <div className="flex flex-col gap-4 items-start md:flex-row md:items-center justify-between py-2">
                <h2 className="text-[#5B21B6] font-urbanist text-xl font-bold">
                    Available Wallet Packs
                </h2>

                {canCreateWallets && (
                    <Button variant="primary"

                        onClick={() => { navigate('/admin-create_newWallet') }}>
                        + Create New Wallet Pack
                    </Button>
                )}
            </div>

            {/* Table */}
            <div className="py-4 ">
                {/* Desktop Table */}
                <div className="hidden md:block">
                    {/* Table Head */}
                    <div className={`grid ${canManageWallets ? "grid-cols-8" : "grid-cols-7"} bg-gray-100 rounded-lg px-4 py-3 text-sm font-medium text-gray-700`}>
                        <p className="text-start">Package Name</p>
                        <p className="text-start">Pack Label</p>
                        <p className="text-center">Base amount</p>
                        <p className="text-center">Offer Credits</p>
                        <p className="text-center">Total Credits</p>
                        <p className="text-center">Status</p>
                        <p className="text-center">First Time Offer</p>
                        {canManageWallets && (
                            <p className="text-center">Action</p>
                        )}

                    </div>

                    {/* Rows */}
                    {walletData.map((item, i) => (
                        <div
                            key={item._id}
                            className={`grid ${canManageWallets ? "grid-cols-8" : "grid-cols-7"} items-center border rounded-xl px-4 py-4 mt-3 text-sm`}
                        >
                            <p className="text-start font-semibold">{item.package_Name}</p>
                            <p className="text-start font-semibold">{item.package_Label}</p>
                            <p className="text-center font-semibold ">{item.base_Amount}</p>
                            <p className="text-center font-semibold">{item.offer_Credits}</p>
                            <p className="text-center font-semibold">{item.total_Credits}</p>


                            {/* Status */}
                            <div className="flex justify-center">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs ${item.package_Status
                                        ? "bg-indigo-100 text-blue-600"
                                        : "bg-gray-200 text-gray-500"
                                        }`}
                                >
                                    {item.package_Status ? "Active" : "Inactive"}
                                </span>
                            </div>

                            <div className="flex justify-center items-center">
                                <CustomToggle
                                    checked={item.first_timeOffer}
                                    onChange={() => handleFirstTimeOfferToggle(item)}
                                />
                            </div>

                            {/* Action */}

                            {
                                canManageWallets && (
                                    <div className="flex justify-center items-center gap-4">
                                        <CustomToggle
                                            checked={item.package_Status}
                                            onChange={() => handleStatusToggle(item)}
                                        />
                                        <Button
                                            size="icon"
                                            variant="actions"
                                            className="bg-[#FFEDED] rounded-full p-2"
                                            onClick={() => {
                                                setSelectedWallet(item);
                                                setDeletePack(true);
                                            }}
                                        >
                                            <Trash size={20} color="#810606" />
                                        </Button>
                                    </div>
                                )}

                        </div>
                    ))}
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden flex flex-col gap-4 px-3  max-h-[70vh] overflow-y-auto vertical-scrollbar">
                    {walletData.map((item, i) => (
                        <div key={i} className="border rounded-xl p-4 bg-white shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-semibold">{item.name}</h3>
                                <span
                                    className={`px-3 py-1 rounded-full text-xs ${item.package_Status
                                        ? "bg-indigo-100 text-blue-600"
                                        : "bg-gray-200 text-gray-500"
                                        }`}
                                >
                                    {item.package_Status ? "Active" : "Inactive"}
                                </span>
                            </div>

                            <p className="text-sm text-gray-500">{item.package_Label}</p>

                            <div className="grid grid-cols-3 gap-2 mt-3 text-sm">
                                <div>
                                    <p className="text-gray-400">Base</p>
                                    <p className="font-semibold">{item.base_Amount}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Offer</p>
                                    <p className="font-semibold">{item.offer_Credits}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Total</p>
                                    <p className="font-semibold">{item.total_Credits}</p>
                                </div>
                            </div>

                            <div className="flex justify-end items-center gap-4 mt-3">
                                <CustomToggle />
                                <Button
                                    size="icon"
                                    variant="actions"
                                    className="bg-[#FFEDED] rounded-full p-2"
                                    onClick={() => {
                                        setSelectedWallet(item);
                                        setDeletePack(true);
                                    }}
                                >
                                    <Trash size={20} color="#810606" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <DeleteWalletPack
                open={deletepack}
                setOpen={setDeletePack}
                data={selectedWallet}
            />        </div>
    );
};

export default WalletTable;