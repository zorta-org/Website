import { Icon } from "@iconify/react";

interface Perk {
  icon: string;
  bg: string;
  color: string;
  title: string;
  description: string;
}

const perks: Perk[] = [
  {
    icon: "lucide:folder-kanban",
    bg: "#dce9f8",
    color: "#3a8cfd",
    title: "Unlimited Projects",
    description: "No caps on how many projects you can run at once.",
  },
  {
    icon: "lucide:headset",
    bg: "#e6e1fb",
    color: "#432bf6",
    title: "Priority Support",
    description: "Skip the queue with a dedicated support channel.",
  },
  {
    icon: "twemoji:coin",
    bg: "#fdf3e0",
    color: "#eea82c",
    title: "2x Coin Rewards",
    description: "Earn double coins on every completed task.",
  },
  {
    icon: "lucide:sparkles",
    bg: "#dcf4e3",
    color: "#119e5b",
    title: "Exclusive Themes",
    description: "Animated profile themes only Premium members get.",
  },
];

export default function PerksGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {perks.map((perk) => (
        <div
          key={perk.title}
          className="flex flex-col items-center gap-2.5 rounded-xl border border-[#dadada57] bg-white px-4 py-6 text-center"
        >
          <div
            style={{ backgroundColor: perk.bg, color: perk.color }}
            className="flex h-11 w-11 items-center justify-center rounded-full"
          >
            <Icon icon={perk.icon} width={20} />
          </div>

          <p className="text-[13px] font-semibold">{perk.title}</p>
          <p className="text-[10.5px] text-[#868585]">{perk.description}</p>
        </div>
      ))}
    </div>
  );
}
