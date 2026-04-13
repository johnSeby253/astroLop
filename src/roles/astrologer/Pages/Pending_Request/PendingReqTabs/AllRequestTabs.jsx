import Button from '@/common/components/Button'
import { Clock, MessageSquare, Phone, Tag } from 'lucide-react'
import React from 'react'



const AllRequestTabs = () => {

    function generateRequests(count = 10) {
        const categories = ["Health & Wellness", "Career Guidance", "Finance", "Spirituality", "Education"];
        const types = ["Chat", "Call"];
        const durations = [15, 30, 45, 60];

        const requests = [];

        for (let i = 1; i <= count; i++) {
            const name = `User${i}`;
            // Generate a profile image with initials
            const profile = `https://ui-avatars.com/api/?name=User${i}&background=random&size=128`;
            const type = types[Math.floor(Math.random() * types.length)];
            const category = categories[Math.floor(Math.random() * categories.length)];
            const duration = `${durations[Math.floor(Math.random() * durations.length)]} Minutes`;
            const price = Math.floor(Math.random() * 1000) + 100;
            const timeAgo = `${Math.floor(Math.random() * 60)} mins ago`;

            requests.push({
                id: i,
                name,
                profile,
                type,
                category,
                duration,
                price,
                timeAgo,
            });
        }

        return requests;
    }


    const requestData = generateRequests(10);

    return (
        <div className='py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4'>
            {requestData.map((request) => (
                <div key={request.id} className="w-full max-w-md p-4 bg-white rounded-3xl shadow-card flex flex-col gap-4">

                    {/* Top Section */}
                    <div className="flex justify-between items-start gap-4">
                        <img className="w-24 h-24 rounded-full object-cover" src={request.profile} alt="Profile" />
                        <div className="flex flex-col items-end gap-2">
                            {request.type == "Call" ? (
                                <div className="text-blue-600 bg-[#BDEFFF] text-sm font-medium font-inter rounded-full px-4 py-1 flex items-center justify-center gap-2">
                                    <MessageSquare size={18} />
                                    {request.type}
                                </div>
                            ) : (
                                <div className="text-[#0C842C] bg-[#E6FFBD] text-sm font-medium font-inter rounded-full px-4 py-1 flex items-center justify-center gap-2">
                                    <Phone size={18} />
                                    {request.type}
                                </div>
                            )

                            }
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
                            <Button size="md" className="w-[50%]" variant="primary">
                                Accept
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllRequestTabs