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


    const handleCall = async () => {
        try {
            const caller_id = "69d8bce86bc2c8f40f1074d6";
            const sender_id = "69d37c85addf0dba162b2d10";

            if (!caller_id || !sender_id) {
                console.error("Caller or Receiver ID missing");
                return;
            }
            const response = await getAgoraToken({
                callerId: caller_id,
                receiverId: sender_id,
                userRole: "caller"
            });
            console.log("Full Response:", response);

            const { token, channelName, uid } = response;

            // 👉 now you can use these for Agora join
            console.log("Token:", token);
            console.log("Channel:", channelName);
            const client = clientRef.current;
            client.on("user-published", async (user, mediaType) => {
                await client.subscribe(user, mediaType);

                if (mediaType === "audio") {
                    console.log("🔊 Receiver audio playing");
                    user.audioTrack.play();
                }
            });
            await client.join(APP_ID, channelName, token, uid);
            client.remoteUsers.forEach(async (user) => {
                if (user.hasAudio) {
                    console.log("🔁 Existing user audio found");

                    await client.subscribe(user, "audio");
                    user.audioTrack.play();
                }
            });
            const micTrack = await AgoraRTC.createMicrophoneAudioTrack();
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            if (stream.active == true || stream.active == "true") {
                setMicStatus("true")
            } else {
                setMicStatus("false")
            }
            setMicStatus(stream.active)
            console.log("Mic enabled:", micTrack.enabled);
            console.log("Mic muted:", micTrack.muted);

            micTrack.setEnabled(true);
            await client.publish([micTrack]);
            setInCall(true)

        } catch (err) {
            console.error("Error at generating Agora Token.....", err);
        }
    }

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