import { createAstrologer, requestOtp, verifyOTP } from "../../Apis";

export const astrologerRegisteration = async (details) => {
    try {
        const response = await createAstrologer(details)
        console.log("Astrologer Registraion Response", response.data);
        return response.data
    } catch (err) {
        console.error("Error at Astrologer Registration:::", err);
        throw err;
    }
}

export const astrologerRequestOTP = async (details) => {
    try {
        const response = await requestOtp(details);
        console.log("Astrologer OTP Request Response", response.data);
        return response.data
    } catch (err) {
        console.error("Error at Astrologer RequestOTP:::", err);
        throw err;
    }
}


export const astrologerVerifyOTP = async (details) => {
    try {
        const response = await verifyOTP(details);
        console.log("Astrologer OTP verification Response", response.data);
        return response.data
    } catch (err) {
        console.error("Error at Astrologer verifyOTP:::", err);
        throw err;
    }
}