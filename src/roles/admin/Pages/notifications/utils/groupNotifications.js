export const groupNotifications = (notifications = []) => {
  const grouped = {};

  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  notifications.forEach((n) => {
    const created = new Date(n.createdAt);
    const createdStart = new Date(
      created.getFullYear(),
      created.getMonth(),
      created.getDate()
    );

    const diffDays = Math.floor(
      (todayStart - createdStart) / (1000 * 60 * 60 * 24)
    );

    let label;

    if (diffDays === 0) label = "Today";
    else if (diffDays === 1) label = "Yesterday";
    else if (diffDays <= 5) label = `${diffDays} days ago`;
    else {
      label = created.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    }

    if (!grouped[label]) {
      grouped[label] = [];
    }

    grouped[label].push(n);
  });

  return grouped;
};