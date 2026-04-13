import axiosInstance from "@/Services/axiosInstance"

// <<<<<....... Create Admin ........>>>>> //
export const createAstrologer = (details) => {
   return axiosInstance.post(`/astrologer/createAstrologer`, details)
}

// <<<<<....... Request OTP ........>>>>> //
export const requestOtp = (details) => {
   return axiosInstance.post(`/astrologer/requestOtp`, details)
}

// <<<<<....... Request OTP ........>>>>> //
export const verifyOTP = (details) => {
   return axiosInstance.post(`/astrologer/verifyOtp`, details)
}

// <<<<<....... get Astrologer By_Id ........>>>>> //
export const getAstrologerByid = (id) => {
   return axiosInstance.get(`/astrologer/getAstroById/${id}`)
}

// <<<<<....... Edit Astrologer By_Id ........>>>>> //
export const editAstrologerByid = (id, data) => {
   console.log("Id", id);
   console.log("Data", data);


   return axiosInstance.put(`/astrologer/edit-astrologerProfile/${id}`, data)
}