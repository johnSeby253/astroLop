import { BadgeIndianRupee } from "lucide-react";

const EarningsCard = () => {
  const earningsData = [
    {
      title: "Monthly Earnings",
      amount: "₹79,856",
      percent: "+8%",
      trend: "up",
    },
    {
      title: "Weekly Earnings",
      amount: "₹12,856",
      percent: "+8%",
      trend: "down",
    },
    {
      title: "Daily Earnings",
      amount: "₹9,856",
      percent: "+8%",
      trend: "up",
    },
  ];

  return (
    <div className="w-full h-full  p-4 bg-white rounded-xl shadow-card flex flex-col gap-4">
      
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full border border-[#DAD9D9] flex items-center justify-center">
          <BadgeIndianRupee className="text-[#42147B]" />
        </div>
        <h2 className="text-[#555555] font-inter font-medium text-[16px]">Earnings</h2>
      </div>

      {/* Earnings Items */}
      {earningsData.map((item, index) => (
        <div
          key={index}
          className="w-full p-4 rounded-xl border border-[#D0CFCF] flex flex-col gap-2"
        >
          <p className="text-[#555555] font-inter font-medium">{item.title}</p>

          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-semibold font-urbanist text-black">
              {item.amount}
            </h3>

            <div
              className={`px-2 py-1 rounded-md text-xs font-medium font-inter flex items-center gap-1
              ${
                item.trend === "up"
                  ? "bg-[#D5FFE6] text-[#03881B]"
                  : "bg-[#FFD5D5] text-[#880303]"
              }`}
            >
              {item.percent}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EarningsCard;