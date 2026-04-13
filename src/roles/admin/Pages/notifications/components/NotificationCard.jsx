import Button from "@/common/components/Button";
import addUser from "@/assets/admin-assets/addUser-Icon.svg";
import pending_Req from '@/assets/admin-assets/dashboard-Icons/dashboard_pndg_Request.svg';
import revenue_Today from '@/assets/admin-assets/dashboard-Icons/dashboard_revenueToday.svg';
import feedback from '@/assets/admin-assets/feedback.svg';

const typeConfig = {
  expert_request: { icon: addUser, bg: "#C5E3FF" },
  service_request: { icon: pending_Req, bg: "#ECDDFF" },
  revenue: { icon: revenue_Today, bg: "#FFFAE5" },
  service_update: { icon: feedback, bg: "#E8FFE5" },
};

const NotificationCard = ({ notification }) => {
  const { icon, bg } = typeConfig[notification.type] || { icon: addUser, bg: "#C7DDFF" };

  return (
    <div className="relative flex items-center justify-between border border-[#D3D3D3] rounded-xl p-4 mb-3 bg-white">
      
      {/* Unread Dot */}
      {notification.unread && (
        <span className="absolute top-2 right-4 w-2 h-2 bg-[#3A5AD9] rounded-full" />
      )}

      {/* Left Content */}
      <div className="flex items-center gap-3">
        <div className="p-4 rounded-lg" style={{ backgroundColor: bg }}>
          <img src={icon} alt="icon" className="w-8 h-8" />
        </div>

        <div>
          <h3 className="font-semibold text-[16px]">{notification.title}</h3>
          <p className="text-sm text-gray-500">{notification.message}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {notification.actions?.map((action, index) => (
          <Button
            key={index}
            size="sm"
            variant={
              action === "Approve" || action === "Assign expert"
                ? "tableButton"
                : "lite_secondary"
            }
          >
            {action}
          </Button>
        ))}

        <span className="text-xs text-gray-400">{notification.time}</span>
      </div>
    </div>
  );
};

export default NotificationCard;