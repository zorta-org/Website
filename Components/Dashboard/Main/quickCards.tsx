import { Icon } from "@iconify/react";

export default function QuickCards() {
  const cardItems = [
    {
      id: 1,
      icon: "tabler:code",
      itemName: "Create Project",
      description: "Start building something new.",
      color: "#432bf6",
    },
    {
      id: 2,
      icon: "lets-icons:bag-alt",
      itemName: "Visit Marketplace",
      description: "Buy & sell digital products.",
      color: "#119e5b",
    },
    {
      id: 3,
      icon: "teenyicons:clipboard-tick-outline",
      itemName: "Post a Task",
      description: "Get things done by the community.",
      color: "#eea82c",
    },
    {
      id: 4,
      icon: "mage:users",
      itemName: "Find Developers",
      description: "Connect with talented people.",
      color: "#3a8cfd",
    },
    {
      id: 5,
      icon: "streamline-flex:chat-bubble-typing-oval",
      itemName: "Join Community",
      description: "Discuss, share & collaborate.",
      color: "#351bdc",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="mx-auto flex w-[95%] flex-col gap-4">
        <h1 className="font-semibold">What would you like to do today?</h1>

        <div className="flex gap-2 overflow-x-auto pb-1 lg:overflow-x-hidden">
          {cardItems.map((item) => {
            return (
              <div
                key={item.id}
                className="flex w-[170px] min-w-[170px] flex-none cursor-pointer flex-col justify-center gap-2 rounded-xl border border-[#dadada57] px-4 py-2 hover:border-[#6aa9c1] lg:w-auto lg:min-w-0 lg:flex-1"
              >
                <div
                  style={{
                    backgroundColor: `color-mix(in srgb, ${item.color} 10%, transparent)`,
                  }}
                  className="w-fit rounded-lg p-2"
                >
                  <Icon
                    icon={item.icon}
                    style={{ color: item.color }}
                    width={25}
                    height={25}
                    aria-hidden
                  />
                </div>

                <p className="text-[13px] font-semibold">{item.itemName}</p>

                <div className="flex items-center gap-1.5">
                  <p className="text-[11px] text-[#868585]">
                    {item.description}
                  </p>

                  <Icon
                    icon="clarity:arrow-line"
                    className="ml-auto shrink-0 rotate-90 text-[#868585]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
