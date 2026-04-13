import { getFinancialSettings, getSystemSettings, updateFinancialSettings, updateSystemSettings } from "../../Apis";


export const updateFinancialData = async(details) => {
    try {
        const response = await updateFinancialSettings(details);
        console.log("Response:", response.data);
        return response.data
    } catch (err) {
        console.error("Error at updating Financial Settings", err);
        throw err
    }
}


export const getFinancialData = async() => {
    try {
        const response = await getFinancialSettings();
        console.log("Response:", response.data);
        return response.data
    } catch (err) {
        console.error("Error at Getting Financial Settings", err);
        throw err
    }
}


export const updateSystemData = async(details) => {
    try {
        const response = await updateSystemSettings(details);
        console.log("Response:", response.data);
        return response.data
    } catch (err) {
        console.error("Error at updating Financial Settings", err);
        throw err
    }
}


export const getSystemData = async() => {
    try {
        const response = await getSystemSettings();
        console.log("Response:", response.data);
        return response.data
    } catch (err) {
        console.error("Error at Getting Financial Settings", err);
        throw err
    }
}