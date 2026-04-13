// socket.js
import { io } from "socket.io-client";

let socket;

export const getSocket = () => {
  if (!socket) {
    socket = io("https://astrolop-backend.onrender.com", {
      withCredentials: true,
      transports: ["websocket"],
    });
  }
  return socket;
};