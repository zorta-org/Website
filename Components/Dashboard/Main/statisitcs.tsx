import { Icon } from "@iconify/react";

export default function Stats() {
  const stats = [
    {
      id: 1,
      value: "12K+",
      label: "Developers",
      icon: "mage:users",
      color: "#432bf6",
    },
    {
      id: 2,
      value: "8K+",
      label: "Projects",
      icon: "lucide:folder",
      color: "#3a8cfd",
    },
    {
      id: 3,
      value: "25K+",
      label: "Tasks Completed",
      icon: "material-symbols:check-circle-outline",
      color: "#432bf6",
    },
    {
      id: 4,
      value: "50K+",
      label: "Community Members",
      icon: "mage:users",
      color: "#119e5b",
    },
    {
      id: 5,
      value: "1M+",
      label: "Coins Earned",
      icon: "material-symbols:stars-outline",
      color: "#eea82c",
    },
  ];

  return (
    <div className="mx-auto mb-8 w-[95%] overflow-x-auto rounded-xl border border-[#dadada57] px-5 py-4">
      <div className="flex min-w-max items-center divide-x divide-[#dadada57] lg:min-w-0">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex w-[150px] flex-none items-center gap-3 px-4 lg:w-auto lg:flex-1"
          >
            <div
              className="rounded-full p-2.5"
              style={{
                backgroundColor: `color-mix(in srgb, ${stat.color} 8%, transparent)`,
              }}
            >
              <Icon
                icon={stat.icon}
                width={18}
                height={18}
                style={{ color: stat.color }}
              />
            </div>

            <div>
              <p className="text-[16px] font-semibold leading-none">
                {stat.value}
              </p>

              <p className="mt-1 whitespace-nowrap text-[9px] text-[#868585]">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
