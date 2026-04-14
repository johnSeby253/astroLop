import { getSocket } from "@/lib/socket";
import { useGlobalCallStore } from "@/public-Store/useGlobalCallStore";
import { useEffect } from "react";


const GlobalCallCenter = () => {
  const addCall = useGlobalCallStore((s) => s.addCall);

  useEffect(() => {
    const socket = getSocket();

    const receiverId = localStorage.getItem("astrologer_id");

    socket.emit("join-astrologer", receiverId);

    const handleIncomingCall = (data) => {
      console.log("Incoming Call:", data);

      addCall({
        ...data,
        type: "call",
        id: data.id || data.channelName, // IMPORTANT fallback
      });
    };

    const handleIncomingChat = (data) => {
      console.log("Incoming Chat:", data);

      addCall({
        ...data,
        type: "chat",
        id: data.id || data.channelName,
      });
    };

    socket.on("incoming-call", handleIncomingCall);
    socket.on("incoming-chat", handleIncomingChat);

    return () => {
      socket.off("incoming-call", handleIncomingCall);
      socket.off("incoming-chat", handleIncomingChat);
    };
  }, [addCall]);

  return null; // IMPORTANT
};

export default GlobalCallCenter;