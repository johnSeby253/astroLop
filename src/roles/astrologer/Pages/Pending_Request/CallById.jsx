import React, { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Mic, MicOff, PhoneOff } from "lucide-react";
import { getSocket } from "@/lib/socket";
import AgoraRTC from "agora-rtc-sdk-ng";
import { useRtcToken } from "@/roles/public/agoraCalls/Api_Queries/query";

const CallById = () => {
    const { id: callId } = useParams();
    const navigate = useNavigate();

    const [status, setStatus] = useState("connecting");
    const [isMuted, setIsMuted] = useState(false);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval;
        interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [status]);

    const toggleMute = async () => {
        const newMuted = !isMuted;
        setIsMuted(newMuted);

        if (localAudioRef.current) {
            await localAudioRef.current.setMuted(newMuted);
        }
    };

    // =========================
    // FORMAT TIME
    // =========================
    const formatTime = (sec) => {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    };

    // =========================
    // UI
    // =========================
    return (
        <div className="h-screen w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex flex-col items-center justify-center text-white relative">

            <div className="absolute top-6 text-sm opacity-80">
                {status === "connecting" && "Connecting..."}
                {status === "ongoing" && "Call in progress"}
                {status === "ended" && "Call ended"}
            </div>

            <div className="flex flex-col items-center gap-3">
                <div className="w-28 h-28 rounded-full bg-white text-purple-600 flex items-center justify-center text-3xl font-bold shadow-lg">
                    U
                </div>

                <h2 className="text-2xl font-semibold">Call</h2>

                <p className="text-sm opacity-80">
                    {status === "ongoing" ? formatTime(seconds) : "00:00"}
                </p>

                <span className="text-xs bg-white/20 px-3 py-1 rounded-full mt-2">
                    Call ID: {callId}
                </span>
            </div>

            <div className="flex gap-8 mt-12">

                <button
                    onClick={toggleMute}
                    className={`p-5 rounded-full transition ${isMuted ? "bg-red-500" : "bg-white text-black"
                        }`}
                >
                    {isMuted ? <MicOff size={26} /> : <Mic size={26} />}
                </button>

                <button
                    onClick={endCall}
                    className="p-5 rounded-full bg-red-600 hover:bg-red-700 transition"
                >
                    <PhoneOff size={28} />
                </button>
            </div>
        </div>
    );
};

export default CallById;