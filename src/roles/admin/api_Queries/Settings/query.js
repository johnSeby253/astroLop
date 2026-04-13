import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getFinancialData, getSystemData, updateFinancialData, updateSystemData } from "./urls";
import { showError, showSuccess } from "@/lib/toast";

export const useUpdateFinancialSettings = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (details) => updateFinancialData(details),
        onSuccess: (data) => {
            // Optional: Invalidate or refetch queries related to financial settings
            queryClient.invalidateQueries(["financialSettings"]);
            showSuccess(data?.message || "Financial settings updated successfully!");
        },
        onError: (error) => {
            showError("Failed to update financial settings.");
            console.error("Mutation Error:", error);
        },
    });
};


export const useGetFinancialSettings = () => {
    return useQuery({
        queryKey: ["financialSettings"],
        queryFn: getFinancialData,
        staleTime: 5 * 60 * 1000, // optional: cache for 5 minutes
        onError: (err) => {
            console.error("Error fetching financial settings:", err);
        },
    });
};


export const useUpdateSystemSettings = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (details) => updateSystemData(details),
        onSuccess: (data) => {
            // Optional: Invalidate or refetch queries related to financial settings
            queryClient.invalidateQueries(["systemSettings"]);
            showSuccess(data?.message || "systemSettings settings updated successfully!");
        },
        onError: (error) => {
            showError("Failed to update financial settings.");
            console.error("Mutation Error:", error);
        },
    });
};


export const useGetSystemSettings = () => {
    return useQuery({
        queryKey: ["systemSettings"],
        queryFn: getSystemData,
        staleTime: 5 * 60 * 1000, // optional: cache for 5 minutes
        onError: (err) => {
            console.error("Error fetching systemSettings :", err);
        },
    });
};