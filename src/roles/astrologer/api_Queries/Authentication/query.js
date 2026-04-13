import { useMutation, useQueryClient } from "@tanstack/react-query";
import { astrologerRegisteration, astrologerRequestOTP, astrologerVerifyOTP } from "./url";
import { showError, showSuccess } from "@/lib/toast";

export const useCreateAstrologer = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (details) => {
            // details can be FormData if sending files
            return await astrologerRegisteration(details);
        },
        onSuccess: (data) => {
            console.log("Astrologer created successfully:", data);
            // Optionally, invalidate queries or refetch relevant data
            queryClient.invalidateQueries(["allAstrologers"]);
            showSuccess(data?.message || "Admin logged in successfully");
        },
        onError: (error) => {
            console.error("Error creating astrologer:", error);
            showError(error?.response?.data?.message);

        },
    });
};

export const useRequestAstrologerOTP = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (details) => {
            // details = { email?: string, phone?: string }
            return await astrologerRequestOTP(details);
        },
        onSuccess: (data) => {
            console.log("OTP requested successfully:", data);
            showSuccess(data?.message || "OTP sent successfully");
            // Optional: store a flag or data in cache if needed
            queryClient.setQueryData(["astrologerOtpRequest"], data);
        },
        onError: (error) => {
            console.error("Error requesting OTP:", error);
            showError(error?.response?.data?.message || "Failed to request OTP");
        },
    });
};


export const useVerifyAstrologerOTP = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (details) => {
            // details = { email?: string, phone?: string, otp: string }
            return await astrologerVerifyOTP(details);
        },
        onSuccess: (data) => {
            console.log("OTP verified successfully:", data);
            showSuccess(data?.message || "OTP verified successfully");

            // Optional: store token in localStorage or cache
            if (data?.token) {
                console.log("Astro-Data", data);

                localStorage.setItem("astrologer_id", data?.data?._id);
                localStorage.setItem("isExpert", data?.data?.basicDetails?.[0]?.find_expert);
                localStorage.setItem("astrologerToken", data.token);
            }
            localStorage.removeItem("adminToken");

            // Optional: cache astrologer data
            queryClient.setQueryData(["astrologerProfile"], data.data);
        },
        onError: (error) => {
            console.error("Error verifying OTP:", error);
            showError(error?.response?.data?.message || "Failed to verify OTP");
        },
    });
};