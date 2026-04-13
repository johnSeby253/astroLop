import {
    createRolesAndPermissions, editRolesAndPermissions,
    getRolesAndPermissions,
    getRolesById
} from "../../Apis";
import { useAdminStore } from "../../store/useAdminDetaills";


export const createRoleandPermissions = async (details) => {
    try {
        const response = await createRolesAndPermissions(details)
        return response.data
    } catch (err) {
        console.error("Error at creating Roles & permissin in adminside:::", err);
        throw err;
    }
}

export const getRolesandPermissionList = async () => {
    try {
        const response = await getRolesAndPermissions();
        console.log("Response:", response.data);
        return response.data
    } catch (err) {
        console.error("Error at getting Roles and Permission List", err);
        throw err
    }
}

export const editRolesAndPermissionsById = async (details) => {
    try {
        const response = await editRolesAndPermissions(details);
        const currentAdmin = useAdminStore.getState().admin;
        // console.log("Res", currentAdmin);

        if (currentAdmin?.designation === details._id) {
            console.log("Admin designation matches edited role. Fetching updated permissions...");

            // 4️⃣ Fetch updated permissions for this role
            const updatedRole = await getRolesandPermissionsById(details._id);
            const updatedPermissions = updatedRole?.data?.permissions || [];

            // 5️⃣ Update admin in Zustand with new permissions
            useAdminStore.getState().setAdmin({
                ...currentAdmin,
                permissions: updatedPermissions
            });

            // console.log("Updated Admin in Zustand:", useAdminStore.getState().admin);
        }

        // console.log("Response:", response.data);
        return response.data
    } catch (err) {
        console.error("Error at Editing Roles and Permission List", err);
        throw err
    }
}

export const getRolesandPermissionsById = async (details) => {
    try {
        const response = await getRolesById(details);
        console.log("Response:", response.data);
        return response.data
    } catch (err) {
        console.error("Error at getting Roles and Permission By Id", err);
        throw err
    }
}