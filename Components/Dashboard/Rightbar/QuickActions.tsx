import { Icon } from "@iconify/react";

export default function QuickActions() {
  const Actions = [
    {
      id: 1,
      name: "Create Project",
      icon: "solar:widget-add-outline",
      color: "#351bdc",
    },
    {
      id: 2,
      name: "Post a Task",
      icon: "teenyicons:clipboard-tick-outline",
      color: "#119e5b",
    },
    { id: 3, name: "Buy Coins", icon: "twemoji:coin", color: "#eea82c" },
    { id: 4, name: "Invite Friends", icon: "mage:users", color: "#3a8cfd" },
  ];
  return (
    <div className="w-full rounded-xl border border-[#dadada57] px-3 py-4 flex flex-col gap-4">
      <h1 className="font-medium">Quick Actions</h1>
      <div className="flex gap-2">
        {Actions.map((Action) => {
          return (
            <div
              key={Action.id}
              className="flex cursor-pointer flex-col items-center gap-1 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div
                style={{
                  backgroundColor: `color-mix(in srgb, ${Action.color} 10%, transparent)`,
                }}
                className="p-4.5 rounded-lg w-fit"
              >
                <Icon
                  icon={Action.icon}
                  width={18}
                  height={18}
                  style={{ color: Action.color }}
                  aria-hidden
                />
              </div>
              <p className="text-[10px] whitespace-nowrap font-medium">
                {Action.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
