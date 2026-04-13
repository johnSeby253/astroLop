import { showError, showSuccess } from "@/lib/toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editAstrologerby_Id, getAstrologerby_Id } from "./url";


export const useGetAstrologerById = (id) => {
    
    return useQuery({
        queryKey: ["astrologerProfile", id],
        queryFn: () => getAstrologerby_Id(id),
        enabled: !!id, // only run when id exists
        onError: (error) => {
            console.error("Error fetching astrologer profile:", error);
            showError(error?.response?.data?.message || "Failed to fetch astrologer profile");
        }
    });
}

export const useEditAstrologer = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }) => editAstrologerby_Id(id, data),

        onSuccess: (data, variables) => {
            showSuccess("Astrologer updated successfully");

            // Refetch profile after update
            queryClient.invalidateQueries(["astrologerProfile", variables.id]);
        },

        onError: (error) => {
            console.error("Error updating astrologer:", error);
            showError(
                error?.response?.data?.message || 
                "Failed to update astrologer"
            );
        }
    });
};