import { Icon } from "@iconify/react";
import type { RewardCategory } from "@/store/slices/rewardsSlice";

export type RewardFilter = RewardCategory | "All";

interface RewardsHeaderProps {
  coins: number;
  filter: RewardFilter;
  onFilterChange: (filter: RewardFilter) => void;
}

const tabs: RewardFilter[] = ["All", "Perks", "Boosts", "Merch", "Badges"];

export default function RewardsHeader({
  coins,
  filter,
  onFilterChange,
}: RewardsHeaderProps) {
  return (
    <div className="flex flex-col gap-5">
      {/* Title + balance */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-[26px] font-bold">Rewards</h1>

        <div className="flex items-center gap-2 rounded-full border border-[#dadada57] px-4 py-2">
          <Icon icon="twemoji:coin" width={16} />
          <span className="text-[13px] font-bold text-[#363636]">
            {coins.toLocaleString()}
          </span>
          <span className="text-[11px] text-[#868585]">available</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-1.5">
        {tabs.map((tab) => {
          const isActive = filter === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => onFilterChange(tab)}
              className={`rounded-full px-4 py-1.5 text-[12px] font-medium transition-colors cursor-pointer ${
                isActive
                  ? "bg-[#8cc3de]/30 font-semibold text-[#39738b]"
                  : "text-[#868585] hover:bg-[#f2f2f2]"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}
