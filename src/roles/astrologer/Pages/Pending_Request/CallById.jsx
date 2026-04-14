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



    //  INIT CLIENT
    useEffect(() => {
        const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
        clientRef.current = client;

        const handleUserPublished = async (user, mediaType) => {
            await client.subscribe(user, mediaType);

            if (mediaType === "audio" && user.audioTrack) {
                if (!user.audioTrack.isPlaying) {
                    user.audioTrack.play();
                }
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

                console.log(" Joined channel:", channelName);

            } catch (err) {
                console.error("❌ Join error:", err);
            } finally {
                joiningRef.current = false;
            }
        };

        joinCall();
    }, [tokenData]);

    //  TIMER
    useEffect(() => {
        if (status !== "Ongoing") return;

        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [status]);

    //  MUTE
    const toggleMute = async () => {
        if (!localAudioRef.current) return;

        const newMuted = !isMuted;
        setIsMuted(newMuted);

        try {
            // correct Agora v4 API
            await localAudioRef.current.setEnabled(!newMuted);

            //  OPTIONAL: control remote audio too
            clientRef.current?.remoteUsers.forEach(user => {
                if (user.audioTrack) {
                    user.audioTrack.setVolume(newMuted ? 0 : 100);
                }
            });
        } catch (err) {
            console.error("Mute error:", err);
        }
    };

    //  END CALL (NO NAVIGATION)
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
        <div className="h-screen w-full relative flex flex-col items-center justify-center text-white overflow-hidden">

            {/* 🌈 Background image or gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-black"></div>

            {/* 🌟 Blur layer (glass effect) */}
            <div className="absolute inset-0 backdrop-blur-2xl bg-white/5"></div>

            {/* ✨ Glow effects */}
            <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full top-10 left-10"></div>
            <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

            {/* content */}
            <div className="relative z-10">
                <div className="flex flex-col items-center gap-3">
                    <div className="flex flex-col items-center gap-10">
                        <div className="relative flex items-center justify-center">

                            {/* 🔵 Wave 1 */}
                            <span className="absolute w-28 h-28 rounded-full bg-amber-300/20 animate-ping"></span>
                            <span className="absolute w-34 h-34 rounded-full bg-white/20 animate-ping"></span>
                            {/* 🔵 Wave 2 */}
                            <span className="absolute w-36 h-36 rounded-full bg-white/10 animate-pulse"></span>

                            {/* 🔵 Avatar */}
                            <div className="w-28 h-28 rounded-full bg-white text-purple-600 flex items-center justify-center text-3xl font-bold shadow-lg z-10">
                                U
                            </div>
                        </div>

                        <h2 className="text-2xl font-semibold">Call</h2>
                    </div>


                    <p className="text-sm opacity-80">
                        {status === "Ongoing" ? formatTime(seconds) : "00:00"}
                    </p>

                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full mt-2">
                        Caller Id: {callData?.callerId}
                    </span>

                    <div className="text-sm opacity-80">{status}...</div>
                </div>

                <div className="flex items-center justify-center gap-14 mt-12">

                    {/* 🎤 MUTE BUTTON */}
                    <button
                        onClick={toggleMute}
                        className={`p-5 rounded-full transition duration-200
                                    backdrop-blur-xl border shadow-lg
                                    ${isMuted
                                ? "bg-red-500/30 border-red-400 ring-2 ring-red-400 "
                                : "bg-white/10 border-white/20 hover:bg-[#FA2900] "
                            }`}
                    >
                        {isMuted ? <MicOff size={26} /> : <Mic size={26} />}
                    </button>

                    {/*  END CALL BUTTON */}
                    <button
                        onClick={endCall}
                        className="p-5 rounded-full transition
        backdrop-blur-xl bg-[#FA2900] border border-white/80 shadow-card
        hover:bg-white/20"
                    >
                        <PhoneOff size={28} />
                    </button>

                </div>
            </div>

        </div>



    );
};

export default CallById;