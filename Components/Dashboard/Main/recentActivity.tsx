import Link from "next/link";
import { Icon } from "@iconify/react";

export default function RecentActivity() {
  type Activity = {
    id: number;
    user: string;
    action: string;
    time: string;
    rating?: number;
    icon: string;
    type: "task" | "marketplace" | "review" | "purchase" | "follow";
  };
  const activities: Activity[] = [
    {
      id: 1,
      user: "Aryan",
      action: "completed a task and earned 150 Coins",
      time: "2m ago",
      icon: "ix:user-profile-filled",
      type: "task",
    },
    {
      id: 2,
      user: "DevHub",
      action: "listed a new product in Marketplace",
      time: "15m ago",
      icon: "ix:user-profile-filled",
      type: "marketplace",
    },
    {
      id: 3,
      user: "You",
      action: "received a review on your project",
      time: "1h ago",
      rating: 5,
      icon: "ix:user-profile-filled",
      type: "review",
    },
    {
      id: 4,
      user: "Rahul",
      action: "purchased a service from you",
      time: "2h ago",
      icon: "ix:user-profile-filled",
      type: "purchase",
    },
    {
      id: 5,
      user: "Sarah",
      action: "started following your project",
      time: "3h ago",
      icon: "ix:user-profile-filled",
      type: "follow",
    },
    {
      id: 6,
      user: "Hamza",
      action: "completed a task",
      time: "5h ago",
      icon: "ix:user-profile-filled",
      type: "task",
    },
  ];

  const recentActivities = activities.slice(0, 4);
  return (
   <div className="rounded-xl border border-[#dadada57] px-5 py-5 flex-1 min-w-0">
  {/* Header */}
  <div className="flex items-center justify-between mb-6">
    <h1 className="font-semibold text-[14px]">
      Recent Activity
    </h1>

    <Link
      href="/activity"
      className="text-[11px] text-[#5e3df5] hover:underline"
    >
      View all
    </Link>
  </div>

  {/* Activities */}
  <div className="flex flex-col gap-5">
    {recentActivities.map((activity) => {
      return (
        <div
          key={activity.id}
          className="flex items-start justify-between"
        >
          {/* Left side */}
          <div className="flex items-start gap-3 min-w-0">
            {/* Activity icon */}
            <div className="w-6 h-6 shrink-0 rounded-full bg-[#f1f1f1] flex items-center justify-center">
              <Icon
                icon={activity.icon}
                width={12}
                height={12}
              />
            </div>

            {/* User + activity */}
            <div className="min-w-0">
              <p className="text-[11px] text-[#363636]">
                <span className="font-semibold">
                  {activity.user}
                </span>{" "}
                {activity.action}
              </p>

              {/* Rating */}
              {activity.type === "review" && activity.rating && (
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: activity.rating }).map(
                    (_, index) => (
                      <Icon
                        key={index}
                        icon="material-symbols:star"
                        className="text-yellow-400"
                        width={13}
                      />
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Time */}
          <p className="text-[10px] text-[#868585] shrink-0 ml-3">
            {activity.time}
          </p>
        </div>
      );
    })}
  </div>
</div>
  );
}
