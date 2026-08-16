import { Icon } from "@iconify/react";
import type { RewardTier } from "@/store/slices/rewardsSlice";

interface TierProgressProps {
  coins: number;
  tiers: RewardTier[];
}

export default function TierProgress({ coins, tiers }: TierProgressProps) {
  const sorted = [...tiers].sort((a, b) => a.minPoints - b.minPoints);

  const currentIndex = sorted.reduce(
    (acc, tier, i) => (coins >= tier.minPoints ? i : acc),
    0
  );
  const currentTier = sorted[currentIndex];
  const nextTier = sorted[currentIndex + 1];

  const progress = nextTier
    ? Math.min(
        100,
        Math.round(
          ((coins - currentTier.minPoints) /
            (nextTier.minPoints - currentTier.minPoints)) *
            100
        )
      )
    : 100;

  return (
    <div className="rounded-xl border border-[#dadada57] bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            style={{
              backgroundColor: `color-mix(in srgb, ${currentTier.color} 15%, transparent)`,
              color: currentTier.color,
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full"
          >
            <Icon icon="lucide:award" width={22} />
          </div>

          <div>
            <p className="text-[15px] font-semibold">{currentTier.name} Tier</p>
            <p className="text-[11px] text-[#868585]">{currentTier.perk}</p>
          </div>
        </div>

        {nextTier ? (
          <p className="text-[11px] text-[#868585]">
            {(nextTier.minPoints - coins).toLocaleString()} coins to{" "}
            <span className="font-semibold text-[#363636]">
              {nextTier.name}
            </span>
          </p>
        ) : (
          <p className="text-[11px] font-semibold text-[#39738b]">
            Highest tier reached
          </p>
        )}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#f0f0f3]">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%`, backgroundColor: currentTier.color }}
          />
        </div>
        <span className="shrink-0 text-[10px] font-medium text-[#868585]">
          {progress}%
        </span>
      </div>
    </div>
  );
}
