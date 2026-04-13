import { useMutation, useQuery } from "@tanstack/react-query"
import { astroLogin, astroRegistration, getAdminDetailsById } from "./urls"
import { showError, showSuccess } from "@/lib/toast";
import { useAdminStore } from "../../store/useAdminDetaills";
import { getRolesandPermissionsById } from "../RoleAndPermissions/url";

export const useAdminLogin = () => {
    const setAdmin = useAdminStore((state) => state.setAdmin);


    return useMutation({
        mutationFn: astroLogin,
        onSuccess: async (data) => {
            try {
                console.log("Data", data);
                localStorage.removeItem("astrologerToken");
                localStorage.removeItem("astrologer_id");
                localStorage.removeItem("isExpert");
                localStorage.setItem("adminToken", data.admin_accessToken);
                let permissions = [];
                if (data.admin?.designation) {
                    const roleData = await getRolesandPermissionsById(data.admin.designation);
                    console.log("roleData", roleData);
                    permissions = (roleData?.data?.permissions || [])
                    console.log("permissions", permissions);

                }

                setAdmin({
                    admin_id: data.admin._id,
                    designation: data.admin.designation,
                    permissions: permissions
                });
                showSuccess(data?.message || "Admin logged in successfully");
            } catch (err) {
                console.error("Error fetching role permissions:", err);
                setAdmin({
                    designation: data.admin.designation,
                    permissions: []
                });
                showError("Failed to fetch role permissions");
            }

        },
        onError: (error) => {
            console.log("Login Error:", error?.response?.data?.message);
            showError(error?.response?.data?.message);
        }
    })
}


export const useAstroAdminRegistration = () => {
    return useMutation({
        mutationFn: astroRegistration,

        onSuccess: (data) => {
            console.log("Registration Success:", data);
            showSuccess(data?.message || "Admin Registered Successfully");
        },

        onError: (error) => {
            console.log("Registration Error:", error?.response?.data?.message);
            showError(error?.response?.data?.message || "Registration Failed");
        }
    });
};



export const useAdminDetails = (id) => {
    return useQuery({
        queryKey: ["adminDetails", id],
        queryFn: () => getAdminDetailsById(id),
        enabled: !!id, // only run when id exists
        onError: (error) => {
            console.log("Admin Details Fetch Error:", error);
            showError(error?.response?.data?.message || "Failed to fetch admin details");
        }
    });
};