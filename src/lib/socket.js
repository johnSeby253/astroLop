// socket.js
import { io } from "socket.io-client";

let socket;

export const getSocket = () => {
  if (!socket) {
    socket = io("http://175.1.1.177:5000", {
      withCredentials: true,
      transports: ["websocket"],
    });
  }
  return socket;
};

// export const getSocket = () => {
//   if (!socket) {
//     socket = io("https://astrolop-backend.onrender.com", {
//       withCredentials: true,
//       transports: ["websocket"],
//     });
//   }
//   return socket;
// };