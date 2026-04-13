import Button from '@/common/components/Button';
import { getSocket } from '@/lib/socket';
import { useRtcToken } from '@/roles/public/agoraCalls/Api_Queries/query';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { Clock, Phone, Tag } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CallRequestTabs = ({ requests = [] }) => {

    console.log("Request", requests);

    const callRequests = requests.filter(r => r.type === "call");
    const [callData, setCallData] = useState({
        callerId: "",
        receiverId: "",
        channel: "",
        userRole: "receiver"
    });
    const { mutateAsync: getAgoraToken } = useRtcToken();
    const navigate = useNavigate();



    const handleCall = async (data) => {
        try {
            console.log("jvhjdhfj");

            const payload = {
                callerId: data.callerId,
                receiverId: data.receiverId,
                userRole: "receiver",
                channel: data.channelName
            };

            setCallData(payload);

            const res = await getAgoraToken(payload);

            console.log("Response", res);
            navigate(`/call/${data.callerId}`, {
                state: {
                    tokenData: res,
                    callData: payload
                }
            });

            const { token, channelName, uid } = res;
            console.log("Token:", token);
            const client = clientRef.current;
            // // 👉 Now join Agora
            // await client.join(APP_ID, channelName, token, uid);
            // const micTrack = await AgoraRTC.createMicrophoneAudioTrack();
            // await client.publish([micTrack]);
            // navigate(`/call/${data.callerId}`)

        } catch (err) {
            console.error("Error at Accepting Call", err);
        }
    };

    //     const handleCall = async (data) => {
    //     try {
    //         console.log("jvhjdhfj");

    //         const payload = {
    //             callerId: data.callerId,
    //             receiverId: data.receiverId,
    //             userRole: "receiver",
    //             channel: data.channelName
    //         };

    //         setCallData(payload);

    //         const res = await getAgoraToken(payload);

    //         console.log("Response", res);


    //         const { token, channelName, uid } = res;
    //         console.log("Token:", token);
    //         const client = clientRef.current;
    //         // 👉 Now join Agora
    //         await client.join(APP_ID, channelName, token, uid);
    //         const micTrack = await AgoraRTC.createMicrophoneAudioTrack();
    //         await client.publish([micTrack]);
    //         navigate(`/call/${data.callerId}`)

    //     } catch (err) {
    //         console.error("Error at Accepting Call", err);
    //     }
    // };




    return (
        <div className='py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4'>
            {callRequests.map((request) => (
                <div key={request.channelName} className="w-full max-w-md p-4 bg-white rounded-3xl shadow-card flex flex-col gap-4">

                    {/* Top Section */}
                    <div className="flex justify-between items-start gap-4">
                        <img className="w-24 h-24 rounded-full object-cover" src={request.profile} alt="Profile" />
                        <div className="flex flex-col items-end gap-2">

                            <div className="text-[#0C842C] bg-[#E6FFBD] text-sm font-medium font-inter rounded-full px-4 py-1 flex items-center justify-center gap-2">
                                <Phone size={18} />
                                {request.type}
                            </div>

                            <div className="text-neutral-600 text-sm font-medium font-inter">{request.timeAgo}</div>
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div className="flex flex-col gap-3">
                        {/* Name & Badge */}
                        <div className="flex justify-between items-center">
                            <div className="text-stone-900 text-xl font-semibold font-['Inter']">{request.name}</div>

                        </div>

                        {/* Category & Duration */}
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <Tag size={18} />
                                    <div className="text-zinc-800 text-sm font-medium font-['Inter']">{request.category}</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={18} />
                                    <div className="text-zinc-800 text-sm font-medium font-['Inter']">{request.duration}</div>
                                </div>
                            </div>
                            <div className="text-neutral-600 text-lg font-semibold font-['Inter']">₹{request.price}</div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-between items-center py-2 gap-4">
                            <Button size="md" className="w-[50%]" variant="secondary">
                                Deny
                            </Button>
                            <Button size="md" className="w-[50%]" variant="primary"
                                onClick={() => handleCall(request)}>
                                Accept
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CallRequestTabs
