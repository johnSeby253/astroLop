import React, { useState } from "react";
import { Mic, MicOff, PhoneOff } from "lucide-react";

const VoiceCallScreen = ({ onEnd }) => {
    const [micOn, setMicOn] = useState(true);
    const [status, setStatus] = useState("Connecting...");

    return (
        <div className="h-screen bg-slate-900 text-white flex flex-col items-center justify-center">

            {/* Avatar */}
            <div className="w-28 h-28 rounded-full bg-slate-700 flex items-center justify-center text-3xl mb-4">
                A
            </div>

            {/* Name */}
            <h2 className="text-xl font-semibold">Astrologer Name</h2>

            {/* Status */}
            <p className="text-sm text-gray-400 mt-2">{status}</p>

            {/* Controls */}
            <div className="flex gap-6 mt-10">

                {/* Mic */}
                <button
                    onClick={() => setMicOn(!micOn)}
                    className="bg-white text-black p-4 rounded-full shadow-lg"
                >
                    {micOn ? <Mic /> : <MicOff />}
                </button>

                {/* End Call */}
                <button
                    onClick={onEnd}
                    className="bg-red-600 p-4 rounded-full shadow-lg"
                >
                    <PhoneOff />
                </button>

            </div>
        </div>
    );
};

export default VoiceCallScreen;