import { Icon } from "@iconify/react";
import type { Reward } from "@/store/slices/rewardsSlice";
import RewardCard from "./rewardCard";

interface RewardsGridProps {
  rewards: Reward[];
  coins: number;
  onClaim: (id: number) => void;
}

export default function RewardsGrid({ rewards, coins, onClaim }: RewardsGridProps) {
  if (rewards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#dadada] py-20 text-center">
        <Icon icon="lucide:gift" width={24} className="text-[#868585]" />
        <p className="text-[13px] font-semibold">No rewards here yet</p>
        <p className="text-[11px] text-[#868585]">
          Check back soon or try a different category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {rewards.map((reward) => (
        <RewardCard
          key={reward.id}
          reward={reward}
          coins={coins}
          onClaim={onClaim}
        />
      ))}
    </div>
  );
}
