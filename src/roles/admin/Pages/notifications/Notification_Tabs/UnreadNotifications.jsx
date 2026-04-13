import NotificationCard from "../components/NotificationCard";
import { groupNotifications } from "../utils/groupNotifications";

const UnreadNotifications = ({ notifications }) => {
  // Filter only unread notifications
  const unreadNotifications = notifications.filter((n) => n.unread);

  // Group them if you want date-wise grouping
  const grouped = groupNotifications(unreadNotifications);

  // Sort groups by newest notification first
  const sortedGroups = Object.entries(grouped).sort(
    ([, aItems], [, bItems]) =>
      new Date(bItems[0].createdAt) - new Date(aItems[0].createdAt)
  );

  return (
    <div className="p-6 space-y-6">
      {sortedGroups.length === 0 ? (
        <p className="text-gray-400">No unread notifications.</p>
      ) : (
        sortedGroups.map(([label, items]) => (
          <div key={label} className="space-y-3">
            <h4 className="mb-3 text-gray-500 font-medium">{label}</h4>
            <div className="space-y-2">
              {items.map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UnreadNotifications;