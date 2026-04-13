import axiosInstance from "@/Services/axiosInstance"




export const genarateAgoraToken = (details) => {
   return axiosInstance.get(`/public/agoraToken`, {
      params: {
         callerId: details.callerId,
         receiverId: details.receiverId,
         userRole:details.userRole
      },
   });
};

export const startingCalls = (details) => {
   return axiosInstance.post(`/public/startCall`, details)
}

export const acceptCalls = (details)=>{
     return axiosInstance.post(`/public/acceptCall`, details)
}