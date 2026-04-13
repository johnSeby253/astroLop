import {
    createAdminWallet,
    deleteWalletPackagesValues,
    editWalletPackagesValues,
    getAllWalletPackages
} from "../../Apis";

export const createAdminWalletPackages = async (details) => {
    try {
        const response = await createAdminWallet(details);
        // console.log("Res:", response.data);
        return response.data
    } catch (err) {
        console.error("Error at creating wallet packages:::", err);
        throw err;
    }
}

export const getAllWalletList = async () => {
    try {
        const response = await getAllWalletPackages();
        // console.log("Res:", response.data);
        return response.data
    } catch (err) {
        console.error("Error at geting wallet packages:::", err);
        throw err;
    }
}

export const editWalletList = async ({ id, data }) => {
    try {
        const response = await editWalletPackagesValues({ id, data });
        // console.log("Res:", response.data);
        return response.data
    } catch (err) {
        console.error("Error at Editing wallet packages:::", err);
        throw err;
    }
}

export const deleteWalletList = async (id) => {
    try {
        const response = await deleteWalletPackagesValues(id);
        console.log("Res:", response.data);
        return response.data
    } catch (err) {
        console.error("Error at Deleting wallet packages:::", err);
        throw err;
    }
}