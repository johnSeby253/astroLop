import Button from '@/common/components/Button'
import { Star, Phone } from 'lucide-react'
import React, { useRef, useState } from 'react'
import VoiceCallScreen from './VoiceCallScreen'
import { useRtcToken } from '@/roles/public/agoraCalls/Api_Queries/query'
import AgoraRTC from 'agora-rtc-sdk-ng'
// import AgoraRTC from 'agora-rtc-sdk-ng'

const TestVoiceCall = () => {
    const [inCall, setInCall] = useState(false);
    const { mutateAsync: getAgoraToken } = useRtcToken();
    const [micStatus, setMicStatus] = useState("");
    const APP_ID = import.meta.env.VITE_AGORA_APP_ID;
    const clientRef = useRef(null);

    if (!clientRef.current) {
        clientRef.current = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    }


    React.useEffect(() => {
        const client = clientRef.current;

        const handleUserPublished = async (user, mediaType) => {
            await client.subscribe(user, mediaType);

            if (mediaType === "audio") {
                console.log("🔊 Remote audio playing");

                if (user.audioTrack) {
                    user.audioTrack.play();
                }
            }
        };

        client.on("user-published", handleUserPublished);

        return () => {
            client.off("user-published", handleUserPublished);
        };
    }, []);


    const handleCall = async () => {
        try {
            const caller_id = "69d8bce86bc2c8f40f1074d6";
            const sender_id = "69d37c85addf0dba162b2d10";

            const response = await getAgoraToken({
                callerId: caller_id,
                receiverId: sender_id,
                userRole: "caller"
            });

            const { token, channelName, uid } = response;

            const client = clientRef.current;

            // JOIN CHANNEL
            await client.join(APP_ID, channelName, token, uid);

            // handle existing users
            client.remoteUsers.forEach(async (user) => {
                if (user.hasAudio) {
                    await client.subscribe(user, "audio");
                    user.audioTrack.play();
                }
            });

            // CREATE MIC TRACK (ONLY THIS)
            const micTrack = await AgoraRTC.createMicrophoneAudioTrack();

            // IMPORTANT FOR MOBILE
            window.localMicTrack = micTrack;

            await client.publish([micTrack]);

            setInCall(true);

        } catch (err) {
            console.error("Agora call error:", err);
        }
    };

    return (
        <>
            {!inCall ? (
                <div className='flex items-center justify-center w-full h-screen bg-slate-100'>
                    <div className="bg-white shadow-lg px-10 py-6 rounded-3xl flex items-center gap-8">

                        {/* Left */}
                        <div className="flex flex-col gap-2">
                            <h1 className='text-lg font-semibold'>Astrologer Name</h1>
                            <p className='text-sm text-gray-500'>Horoscope, Vastu</p>
                        </div>
                        <h1>{micStatus}</h1>
                        {/* Right */}
                        <div className="flex flex-col items-end gap-3">
                            <div className="flex items-center gap-2 text-sm">
                                <Star size={16} className='text-yellow-500' />
                                <span>4.3</span>
                            </div>

                            <Button
                                size="sm"
                                onClick={() => handleCall()}
                                className="flex items-center gap-2"
                            >
                                <Phone size={16} />
                                Call
                            </Button>
                        </div>

                    </div>
                </div>
            ) : (
                <VoiceCallScreen />
            )}
        </>
    )
}

export default TestVoiceCall