import { astroAdmin_Login, astroAdmin_Registration, getAdminById } from "../../Apis";

export const astroLogin = async (details) => {
    try {
        const response = await astroAdmin_Login(details)
        return response.data
    } catch (err) {
        console.error("Error at astro Admin Login:::", err);
        throw err;
    }
}


export const astroRegistration = async (details) => {
    try {
        const response = await astroAdmin_Registration(details)
        console.log("Admin Registraion Response", response.data);
        return response.data
    } catch (err) {
        console.error("Error at astro Admin Registration:::", err);
        throw err;
    }
}


export const getAdminDetailsById = async (id) => {
    try {
        const response = await getAdminById(id)
        console.log("Admin Details By Id Response", response.data);
        return response.data
    } catch (err) {
        console.error("Error at Admin Details Fetching:::", err);
        throw err;
    }
}