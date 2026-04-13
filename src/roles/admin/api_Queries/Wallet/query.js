import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {
    createAdminWalletPackages,
    deleteWalletList,
    editWalletList,
    getAllWalletList
} from "./urls";
import { showError, showSuccess } from "@/lib/toast";

export const useCreateWallet = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createAdminWalletPackages,
        onSuccess: (data) => {
            console.log("Wallet created:", data);
            // Refetch wallet list
            queryClient.invalidateQueries({ queryKey: ["admin-wallets"] });
            showSuccess(data?.message || "Successfully created")
        },

        onError: (error) => {
            console.log("Create wallet error:", error);
            showError(error?.response?.data?.message || " Error at creating Role and its Permissions");
        }
    })
}


export const useGetWalletPackageList = () => {
    return useQuery({
        queryKey: ["admin-wallets"],
        queryFn: getAllWalletList,

        staleTime: 1000 * 60 * 5, // fresh for 5 min
        gcTime: 1000 * 60 * 30,   // cache kept for 30 min

        retry: 1,
        refetchOnWindowFocus: false,

        select: (res) => res.data
    });
};


export const useUpdateWallet = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: editWalletList,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["admin-wallets"] });
            console.log("Updated Data", data);

            showSuccess(data?.message || "Success: Updated the values.")
        },
        onError: (error) => {
            console.log("Updating wallet error:", error);
            showError(error?.response?.data?.message || "Error: Can't update the Values");
        }
    });
};


export const useDeleteWalletPackage = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteWalletList,
        onSuccess: (data) => {
            console.log("Deleted:", data);

            // Refetch wallet list
            queryClient.invalidateQueries({
                queryKey: ["admin-wallets"]
            });
              showSuccess(data?.message || "Success: Wallet Deleted.")
        },
        onError: (error) => {
            console.log("Delete Error:", error);
            showError(error?.response?.data?.message || "Error: Can't Delete this wallet");
        }
    });
};