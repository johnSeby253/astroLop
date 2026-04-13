import React, { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Mic, MicOff, PhoneOff } from "lucide-react";
import { getSocket } from "@/lib/socket";
import AgoraRTC from "agora-rtc-sdk-ng";
import { useRtcToken } from "@/roles/public/agoraCalls/Api_Queries/query";

const CallById = () => {
    const { id: callId } = useParams();
    const { mutateAsync: getRtcToken } = useRtcToken();
    const navigate = useNavigate();

    const [status, setStatus] = useState("connecting");
    const [isMuted, setIsMuted] = useState(false);
    const [seconds, setSeconds] = useState(0);

    const clientRef = useRef(null);
    const localAudioRef = useRef(null);
    const isJoinedRef = useRef(false);

    const socketRef = useRef(null);

    // =========================
    // GET CLIENT
    // =========================
    const getClient = () => {
        if (!clientRef.current) {
            clientRef.current = AgoraRTC.createClient({
                mode: "rtc",
                codec: "vp8",
            });
        }
        return clientRef.current;
    };

    // =========================
    // TIMER
    // =========================
    useEffect(() => {
        let interval;

        if (status === "ongoing") {
            interval = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [status]);

    // =========================
    // START AGORA CALL
    // =========================
    const startAgoraCall = useCallback(async () => {
        try {
            if (isJoinedRef.current) return;

            const client = getClient();

            const res = await getRtcToken({ callId });
            const data = res?.data || res;

            const { token, channelName, uid: backendUid } = data;

            // IMPORTANT: use backend UID if available
            const uid = backendUid || callId;

            const APP_ID = import.meta.env.VITE_AGORA_APP_ID;

            await client.join(APP_ID, channelName, token, uid);

            const track = await AgoraRTC.createMicrophoneAudioTrack();
            localAudioRef.current = track;

            await client.publish([track]);

            // Remote user publish
            client.on("user-published", async (user, mediaType) => {
                await client.subscribe(user, mediaType);

                if (mediaType === "audio") {
                    user.audioTrack.play();
                }
            });

            // Remote user stop audio
            client.on("user-unpublished", (user) => {
                console.log("User left audio:", user.uid);
            });

            isJoinedRef.current = true;
            setStatus("ongoing");

        } catch (err) {
            console.error("Agora ERROR:", err);
        }
    }, [callId, getRtcToken]);

    // =========================
    // SOCKET LISTENER
    // =========================
    useEffect(() => {
        const socket = getSocket();
        socketRef.current = socket;

        const handleCallAccepted = (payload) => {
            if (payload?.callId !== callId) return;
            startAgoraCall();
        };

        socket.on("call-accepted", handleCallAccepted);

        return () => {
            socket.off("call-accepted", handleCallAccepted);
        };
    }, [callId, startAgoraCall]);

    // =========================
    // LEAVE CALL
    // =========================
    const leaveCall = async () => {
        try {
            socketRef.current?.emit("end-call", { callId });

            const client = clientRef.current;

            if (localAudioRef.current) {
                localAudioRef.current.stop();
                localAudioRef.current.close();
            }

            if (client) {
                client.removeAllListeners();
                await client.leave();
            }

            isJoinedRef.current = false;

        } catch (err) {
            console.error("Leave call error:", err);
        }
    };

    // =========================
    // END CALL
    // =========================
    const endCall = () => {
        setStatus("ended");
        leaveCall();
        navigate(-1);
    };

    // =========================
    // MUTE FIXED
    // =========================
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
                    className={`p-5 rounded-full transition ${
                        isMuted ? "bg-red-500" : "bg-white text-black"
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