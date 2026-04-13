import { useMutation } from "@tanstack/react-query";
import {generateRtcToken } from "./url";

// export const useStartCall = () => {
//   return useMutation({
//     mutationFn: startCallingAstrologer,

//     onSuccess: (data) => {
//       console.log("Call session created:", data);
//     },

//     onError: (error) => {
//       console.error("Start call failed:", error);
//     },
//   });
// };

export const useRtcToken = () => {
  return useMutation({
    mutationFn: async (details) => {
      const response = await generateRtcToken(details);
      console.log("Voice Call R>>>>>", response);
      return response; // { token }
    },

    onSuccess: (data) => {
      console.log("RTC Token:", data.token);
    },

    onError: (error) => {
      console.error("RTC Token Error:", error);
    },
  });
};


// export const useAcceptCall = () => {
//   return useMutation({
//     mutationFn: acceptCalling,

//     onSuccess: (data) => {
//       console.log("✅ Call accepted:", data);
//     },

//     onError: (error) => {
//       console.error("❌ Accept call failed:", error);
//     },
//   });
// };