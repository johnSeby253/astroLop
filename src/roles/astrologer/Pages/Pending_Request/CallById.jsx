import React, { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { LogIn, Mic, MicOff, PhoneOff } from "lucide-react";
import { getSocket } from "@/lib/socket";
import AgoraRTC from "agora-rtc-sdk-ng";
import { useRtcToken } from "@/roles/public/agoraCalls/Api_Queries/query";

const CallById = () => {
    const { id: callId } = useParams();
    const { state } = useLocation();
    const clientRef = useRef(null);
    const localAudioRef = useRef(null);
    const APP_ID = import.meta.env.VITE_AGORA_APP_ID;
    // console.log("State", state);
    const navigate = useNavigate();

    const [status, setStatus] = useState("Ongoing");
    const [isMuted, setIsMuted] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const { tokenData, callData } = state || {};

    useEffect(() => {
        const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
        clientRef.current = client;

        const handleUserPublished = async (user, mediaType) => {
            await client.subscribe(user, mediaType);

            if (mediaType === "audio") {
                user.audioTrack.play();
            }
        };

        client.on("user-published", handleUserPublished);

        return () => {
            client.off("user-published", handleUserPublished);
            client.leave();
        };
    }, []);



    useEffect(() => {
        if (!tokenData) return;

        const joinCall = async () => {
            try {
                const client = clientRef.current;

                const { token, channelName, uid } = tokenData;

                await client.join(APP_ID, channelName, token, uid);

                const micTrack = await AgoraRTC.createMicrophoneAudioTrack();
                localAudioRef.current = micTrack;
                await client.publish([micTrack]);

                console.log("Joined Agora channel:", channelName);

            } catch (err) {
                console.error("Join call error:", err);
            }
        };

        joinCall();
    }, [tokenData]);


    useEffect(() => {
        if (status !== "Ongoing") return;

        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [status]);



    const toggleMute = async () => {
        if (!localAudioRef.current) return;

        const newMuted = !isMuted;
        setIsMuted(newMuted);

        try {
            if (newMuted) {
                await localAudioRef.current.setEnabled(false); // mute
            } else {
                await localAudioRef.current.setEnabled(true); // unmute
            }
        } catch (err) {
            console.error("Mute toggle error:", err);
        }
    };



    
    const endCall = useCallback(async () => {
        try {
            setStatus("ended");

            const client = clientRef.current;

            // 1. STOP REMOTE AUDIO (IMPORTANT FIX)
            client.remoteUsers.forEach((user) => {
                user.audioTrack?.stop();
                user.audioTrack?.close?.();
            });

            // 2. UNPUBLISH LOCAL TRACK
            if (localAudioRef.current && client) {
                await client.unpublish(localAudioRef.current);

                localAudioRef.current.stop();
                localAudioRef.current.close();
                localAudioRef.current = null;
            }

            // 3. LEAVE CHANNEL
            if (client) {
                await client.leave();
            }

            // 4. REMOVE ALL LISTENERS
            client.removeAllListeners();

            // 5. SAFE NAVIGATION
            navigate("/astrologer-pendingRequest");

        } catch (err) {
            console.error("Error ending call:", err);
        }
    }, [navigate]);


    const formatTime = (sec) => {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    };


    return (
        <div className="h-screen w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex flex-col items-center justify-center text-white relative">
            <div className="flex flex-col items-center gap-3">
                <div className="w-28 h-28 rounded-full bg-white text-purple-600 flex items-center justify-center text-3xl font-bold shadow-lg">
                    U
                </div>

                <h2 className="text-2xl font-semibold">Call</h2>

                <p className="text-sm opacity-80">
                    {status === "Ongoing" ? formatTime(seconds) : "00:00"}
                </p>

                <span className="text-xs bg-white/20 px-3 py-1 rounded-full mt-2">
                    Call ID: {callId}
                </span>
                <div className=" text-sm opacity-80">
                    {status}...
                </div>

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