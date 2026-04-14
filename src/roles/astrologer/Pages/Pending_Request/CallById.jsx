import React, { useEffect, useState, useRef, useCallback } from "react";
import { Mic, MicOff, PhoneOff } from "lucide-react";
import AgoraRTC from "agora-rtc-sdk-ng";

const CallById = ({ tokenData, callData, onEndCall }) => {
    const clientRef = useRef(null);
    const localAudioRef = useRef(null);
    const APP_ID = import.meta.env.VITE_AGORA_APP_ID;
    console.log("Call Data", callData);


    const [status, setStatus] = useState("Ongoing");
    const [isMuted, setIsMuted] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const joiningRef = useRef(false);
    const joinedRef = useRef(false);
    const endingRef = useRef(false);



    // ✅ INIT CLIENT
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
        };
    }, []);

    // ✅ JOIN CALL
    useEffect(() => {
        if (!tokenData) return;

        if (joiningRef.current || joinedRef.current) return;

        const joinCall = async () => {
            joiningRef.current = true;

            try {
                const client = clientRef.current;
                if (!client) return;

                const { token, channelName, uid } = tokenData;

                await client.join(APP_ID, channelName, token, uid);

                const micTrack = await AgoraRTC.createMicrophoneAudioTrack();
                localAudioRef.current = micTrack;

                await client.publish([micTrack]);

                joinedRef.current = true;

                console.log("✅ Joined channel:", channelName);

            } catch (err) {
                console.error("❌ Join error:", err);
            } finally {
                joiningRef.current = false;
            }
        };

        joinCall();
    }, [tokenData]);

    // ✅ TIMER
    useEffect(() => {
        if (status !== "Ongoing") return;

        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [status]);

    // ✅ MUTE
    const toggleMute = async () => {
        if (!localAudioRef.current) return;

        const newMuted = !isMuted;
        setIsMuted(newMuted);

        try {
            await localAudioRef.current.setMuted(newMuted);
        } catch (err) {
            console.error("Mute error:", err);
        }
    };

    // ✅ END CALL (NO NAVIGATION)
    const endCall = useCallback(async () => {
        if (endingRef.current) return; // 🔥 prevent multiple calls
        endingRef.current = true;

        try {
            setStatus("ended");

            const client = clientRef.current;

            if (!client) {
                onEndCall?.();
                return;
            }

            // ✅ STOP REMOTE AUDIO SAFELY
            client.remoteUsers.forEach((user) => {
                try {
                    user.audioTrack?.stop();
                } catch { }
            });

            // ✅ STOP LOCAL TRACK SAFELY
            if (localAudioRef.current) {
                try {
                    await client.unpublish(localAudioRef.current);
                } catch (err) {
                    console.warn("Unpublish error:", err);
                }

                try {
                    localAudioRef.current.stop();
                    localAudioRef.current.close();
                } catch { }

                localAudioRef.current = null;
            }

            // ✅ LEAVE CHANNEL SAFELY
            try {
                await client.leave();
            } catch (err) {
                console.warn("Leave error:", err);
            }

            // ✅ CLEANUP LISTENERS
            try {
                client.removeAllListeners();
            } catch { }

            console.log("🔴 Call ended cleanly");

            // ✅ RESET JOIN FLAG (IMPORTANT for next call)
            joinedRef.current = false;

            // ✅ GO BACK (Zustand clears UI)
            onEndCall?.();

        } catch (err) {
            console.error("End call error:", err);
            onEndCall?.(); // fallback
        }
    }, [onEndCall]);

    const formatTime = (sec) => {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    };

    return (
        <div className="h-screen w-full bg-slate-900 text-white flex flex-col items-center justify-center relative">
            <div className="flex flex-col items-center gap-3">
                <div className="w-28 h-28 rounded-full bg-white text-purple-600 flex items-center justify-center text-3xl font-bold shadow-lg">
                    U
                </div>

                <h2 className="text-2xl font-semibold">Call</h2>

                <p className="text-sm opacity-80">
                    {status === "Ongoing" ? formatTime(seconds) : "00:00"}
                </p>

                <span className="text-xs bg-white/20 px-3 py-1 rounded-full mt-2">
                    Channel: {tokenData?.channelName}
                </span>

                <div className="text-sm opacity-80">{status}...</div>
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