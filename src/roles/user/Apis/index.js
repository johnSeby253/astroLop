import axiosInstance from "@/Services/axiosInstance"


export const user_Creations = (details) => {
   return axiosInstance.post(`/user/createUser`, details);
}

