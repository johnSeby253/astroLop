import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    createRoleandPermissions, editRolesAndPermissionsById,
    getRolesandPermissionList,
    getRolesandPermissionsById
} from "./url";
import { showError, showSuccess } from "@/lib/toast";

export const useCreateRoleAndPermissions = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createRoleandPermissions,
        onSuccess: (data) => {
            console.log("Role created successfully:", data);
            // Invalidate the roles query to refresh the roles list
            queryClient.invalidateQueries(["roles"]);
            showSuccess(data?.message || "Successfully created")
        },
        onError: (error) => {
            console.error("Error creating role:", error);
            showError(error?.response?.data?.message || " Error at creating Role and its Permissions");
        },
    });
};


export const useRolesAndPermissions = () => {
    return useQuery({
        queryKey: ["roles"],
        queryFn: getRolesandPermissionList,
        staleTime: 1000 * 60 * 5, // 5 minutes
        onError: (err) => {
            console.error("Error fetching roles and permissions:", err);
        },
    });
};


export const useEditRolesAndPermissions = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: editRolesAndPermissionsById,

        onSuccess: (data) => {
            console.log("Role updated successfully:", data);
            // Refresh roles list after update
            queryClient.invalidateQueries(["roles"]);

            showSuccess(data?.message || "Role updated successfully");
        },
        onError: (error) => {
            console.error("Error updating role:", error);
            showError(
                error?.response?.data?.message ||
                "Error updating role and permissions"
            );
        },
    });
};

export const useRoleById = (details) => {
  return useQuery({
    queryKey: ["role", details], // unique key per role
    queryFn: () => getRolesandPermissionsById(details),
    enabled: !!details, // only fetch if details exists
    staleTime: 1000 * 60 * 5, // cache for 5 mins
    onError: (err) => {
      console.error("Error fetching role + permissions:", err);
      showError(err?.response?.data?.message || "Failed to fetch role");
    },
  });
};