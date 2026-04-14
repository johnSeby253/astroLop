import Button from '@/common/components/Button';
import { useRtcToken } from '@/roles/public/agoraCalls/Api_Queries/query';
import { Clock, Phone, Tag } from 'lucide-react';
import React, { useState } from 'react'
import CallById from '../CallById';
import { useCallStore } from '@/public-Store/useCallStore';

const CallRequestTabs = ({ requests = [], removeRequest }) => {

    console.log("Request", requests);
    const callRequests = requests.filter(r => r.type === "call");
    const { mutateAsync: getAgoraToken } = useRtcToken();
    const activeCall = useCallStore((s) => s.activeCall);
    const startCall = useCallStore((s) => s.startCall);
    const endCall = useCallStore((s) => s.endCall);


    const handleCall = async (data) => {
        try {
            console.log("jvhjdhfj");

            const payload = {
                callerId: data.callerId,
                receiverId: data.receiverId,
                userRole: "receiver",
                channel: data.channelName
            };
            const res = await getAgoraToken(payload);

            console.log("Response", res);
            removeRequest(data.id || data.channelName);
            startCall({
                tokenData: res,
                callData: payload
            });

            const { token, channelName, uid } = res;
            console.log("Token:", token);

        } catch (err) {
            console.error("Error at Accepting Call", err);
        }
    };



    return (

        <>
            {
                activeCall ? (
                    <CallById
                        tokenData={activeCall.tokenData}
                        callData={activeCall.callData}
                        onEndCall={endCall}
                    />
                ) : (
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
                                        <Button
                                        onClick={() => removeRequest(request.id || request.channelName)}
                                         size="md" className="w-[50%]" variant="secondary">
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

        </>


    )
}

export default CallRequestTabs
