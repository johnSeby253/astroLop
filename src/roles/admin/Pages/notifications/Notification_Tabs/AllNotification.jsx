import { groupNotifications } from "../utils/groupNotifications";
import NotificationCard from "../components/NotificationCard";

const AllNotifications = ({ notifications }) => {
  // Group notifications dynamically
  const grouped = groupNotifications(notifications);

  // Sort groups by newest notification first
  const sortedGroups = Object.entries(grouped).sort(
    ([, aItems], [, bItems]) =>
      new Date(bItems[0].createdAt) - new Date(aItems[0].createdAt)
  );

  return (
    <div className="p-6 space-y-6">
      {sortedGroups.map(([label, items]) => (
        <div key={label} className="space-y-3">
          {/* Date Header */}
          <h4 className="mb-3 text-gray-500 font-medium">{label}</h4>

          {/* Notification Cards */}
          <div className="space-y-2">
            {items.map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllNotifications;