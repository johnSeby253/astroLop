import { editAstrologerByid, getAstrologerByid } from "../../Apis";


export const getAstrologerby_Id = async (id) => {

    try {
        const response = await getAstrologerByid(id);
        console.log("Astrologerby Id Response in Profile", response.data);
        return response.data
    } catch (err) {
        console.error("Error at fetching astrologerBy id in profile:::", err);
        throw err;
    }
}


export const editAstrologerby_Id = async (id, data) => {
    try {
        const response = await editAstrologerByid(id, data);
        console.log("Edit Astrologer Response", response.data);
        return response.data;
    } catch (err) {
        console.error("Error editing astrologer:", err);
        throw err;
    }
};