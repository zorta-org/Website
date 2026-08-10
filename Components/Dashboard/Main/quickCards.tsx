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
    <div className="w-full overflow-x-hidden overflow-y-hidden">
      
    <div className="w-[95%] mx-auto flex flex-col gap-4">
       <h1 className="font-semibold">What would you like to do today?</h1>
      <div className="flex gap-1">
      {cardItems.map((item) => {
        return (
          <div key={item.id} className="border border-[#dadada57] flex-1 min-w-0 px-4 py-2 flex flex-col gap-2 rounded-xl justify-center cursor-pointer hover:border-[#6aa9c1]">
            <div
              style={{
                backgroundColor: `color-mix(in srgb, ${item.color} 10%, transparent)`,
              }}
              className="p-2 rounded-lg w-fit"
            >
              <Icon
                icon={item.icon}
                style={{ color: item.color }}
                width={25}
                height={25}
                aria-hidden
              />
            </div>
            {/* Name of the quick cards.*/}
            <p className="font-semibold text-[13px]">{item.itemName}</p>
            <div className="flex items-center gap-1.5">
            {/* Description text of the quick cards.*/}
            <p className="text-[11px] text-[#868585]">{item.description}</p>
            <Icon icon="clarity:arrow-line" className="rotate-90 ml-auto shrink-0 text-[#868585]" />
            </div>
          </div>
        );
      })}
      </div>
    </div>
    </div>
  );
}
