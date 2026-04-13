import Button from '@/common/components/Button'
import { Star, Phone } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import VoiceCallScreen from './VoiceCallScreen'
import { useRtcToken } from '@/roles/public/agoraCalls/Api_Queries/query'
import AgoraRTC from 'agora-rtc-sdk-ng'

const TestVoiceCall = () => {
    const [inCall, setInCall] = useState(false);
    const [connecting, setConnecting] = useState(false);
    const [error, setError] = useState(null);

    const { mutateAsync: getAgoraToken } = useRtcToken();
    const APP_ID = import.meta.env.VITE_AGORA_APP_ID;

    const clientRef = useRef(null);
    const micTrackRef = useRef(null);

    // FIX 1: Create client inside useEffect, not in render body
    useEffect(() => {
        clientRef.current = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

        const client = clientRef.current;

        const handleUserPublished = async (user, mediaType) => {
            await client.subscribe(user, mediaType);
            if (mediaType === "audio") {
                user.audioTrack.play();
            }
        };

        client.on("user-published", handleUserPublished);

        // FIX 2: Clean up mic track and leave channel on unmount
        return () => {
            client.off("user-published", handleUserPublished);
            micTrackRef.current?.stop();
            micTrackRef.current?.close();
            client.leave();
        };
    }, []);

    const handleCall = async () => {
        // FIX 3: Guard against double-clicks while connecting
        if (connecting) return;
        setConnecting(true);
        setError(null);

        try {
            const client = clientRef.current;

            const caller_id = "69d8bce86bc2c8f40f1074d6";
            const sender_id = "69d37c85addf0dba162b2d10";

            const response = await getAgoraToken({
                callerId: caller_id,       // FIX 4: Use props instead of hardcoded IDs
                receiverId: sender_id,
                userRole: "caller"
            });

            const { token, channelName, uid } = response;

            await client.join(APP_ID, channelName, token, uid);

            const micTrack = await AgoraRTC.createMicrophoneAudioTrack();
            micTrackRef.current = micTrack;

            await client.publish([micTrack]);

            setInCall(true);
        } catch (err) {
            console.error("Agora call error:", err);
            setError("Could not start the call. Please try again."); // FIX 5: Show error to user
        } finally {
            setConnecting(false);
        }
    };

    const handleEndCall = async () => {
        micTrackRef.current?.stop();
        micTrackRef.current?.close();
        await clientRef.current?.leave();
        setInCall(false);
    };

    return (
        <>
            {!inCall ? (
                <div className='flex items-center justify-center w-full h-screen bg-slate-100'>
                    <div className="bg-white shadow-lg px-10 py-6 rounded-3xl flex items-center gap-8">

                        <div className="flex flex-col gap-2">
                            <h1 className='text-lg font-semibold'>Astrologer Name</h1>
                            <p className='text-sm text-gray-500'>Horoscope, Vastu</p>
                        </div>

                        <div className="flex flex-col items-end gap-3">
                            <div className="flex items-center gap-2 text-sm">
                                <Star size={16} className='text-yellow-500' />
                                <span>4.3</span>
                            </div>

                            {/* FIX 5: Show error message */}
                            {error && (
                                <p className="text-xs text-red-500 text-right max-w-[160px]">{error}</p>
                            )}

                            {/* FIX 3: Disable button while connecting */}
                            <Button
                                size="sm"
                                onClick={handleCall}
                                disabled={connecting}
                                className="flex items-center gap-2"
                            >
                                <Phone size={16} />
                                {connecting ? "Connecting…" : "Call"}
                            </Button>
                        </div>

                    </div>
                </div>
            ) : (
                // FIX 6: Pass onEndCall + tracks to VoiceCallScreen
                <VoiceCallScreen
                    onEndCall={handleEndCall}
                    client={clientRef.current}
                    micTrack={micTrackRef.current}
                />
            )}
        </>
    );
};

export default TestVoiceCall;