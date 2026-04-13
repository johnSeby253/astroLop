import { acceptCalls, genarateAgoraToken, startingCalls } from "../Api";



export const generateRtcToken = async (details) => {
    try {
        const response = await genarateAgoraToken(details);
        console.log("Voice Call RTC token generated", response.data);
        return response.data
    } catch (err) {
        console.error("Error at generating RTC Token :::", err);
        throw err;
    }
}

// export const startCallingAstrologer = async (details) => {
//     try {
//         const response = await startingCalls(details);
//         console.log("consultation call started", response.data);
//         return response.data
//     } catch (err) {
//         console.error("Error at startCalling for consultation :::", err);
//         throw err;
//     }
// }

// export const acceptCalling = async (details) => {
//     try {
//         const response = await acceptCalls(details);
//         console.log("consultation call accepted", response.data);
//         return response.data
//     } catch (err) {
//         console.error("Error at accepting call for consultation :::", err);
//         throw err;
//     }
// }