import React from "react";
import { PhoneOff, Mic, MicOff } from "lucide-react";

const CallCore = ({
  name = "User",
  role = "caller",
  status = "connecting",
  time = "00:00",
  isMuted = false,
  onMute,
  onEnd,
}) => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex flex-col items-center justify-center text-white relative">

      {/* 🔵 Status */}
      <div className="absolute top-6 text-sm opacity-80">
        {status === "connecting" && "Connecting..."}
        {status === "ongoing" && "Call in progress"}
        {status === "ended" && "Call ended"}
      </div>

      {/* 👤 User Section */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-28 h-28 rounded-full bg-white text-purple-600 flex items-center justify-center text-3xl font-bold shadow-lg">
          {name.charAt(0)}
        </div>

        <h2 className="text-2xl font-semibold">{name}</h2>

        <p className="text-sm opacity-80">{time}</p>

        <span className="text-xs bg-white/20 px-3 py-1 rounded-full mt-2">
          {role === "caller" ? "Calling..." : "Receiving Call"}
        </span>
      </div>

      {/* 🎛️ Controls */}
      <div className="flex gap-8 mt-12">

        {/* 🎤 Mute */}
        <button
          onClick={onMute}
          className={`p-5 rounded-full transition ${
            isMuted ? "bg-red-500" : "bg-white text-black"
          }`}
        >
          {isMuted ? <MicOff size={26} /> : <Mic size={26} />}
        </button>

        {/* 🔴 End Call */}
        <button
          onClick={onEnd}
          className="p-5 rounded-full bg-red-600 hover:bg-red-700 transition"
        >
          <PhoneOff size={28} />
        </button>
      </div>

    </div>
  );
};

export default CallCore;